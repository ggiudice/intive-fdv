import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../../../models';
import { LocaleService } from '../../../../services/locale.service';
import { LocaleConstants } from '../../../../shared/constants';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  user: User;
  LOCALE = LocaleConstants;
  infoLocale: string;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private localeService: LocaleService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.getUser(+paramMap.get('id'));
    });
  }

  private getUser(id: number) {
    this.usersService.getUser(id).subscribe((user: User) =>  this.user = user);
  }

}
