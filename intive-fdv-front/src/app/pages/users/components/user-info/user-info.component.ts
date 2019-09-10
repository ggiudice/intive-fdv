import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { UsersService } from '@cdc/users/services';
import { LocaleService } from '@cdc/shared/services';
import { User } from '@cdc/users/models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User;
  subscriptionLocale: Subscription;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private localeService: LocaleService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.getUser(+paramMap.get('id'));
    });

    this.subscriptionLocale = this.localeService.localeChanged.subscribe(() => {
      // Hook change locale date pipe
      if (this.user) {
       this.user.birthdate = new Date(this.user.birthdate);
      }
    });
  }

  private getUser(id: number) {
    this.usersService.getUser(id).subscribe((user: User) => this.user = user);
  }

}
