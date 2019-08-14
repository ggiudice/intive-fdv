import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsersService } from '@cdc/users/services';
import { LocaleConstants } from '@cdc/shared/constants';
import { LocaleService } from '@cdc/shared/services';
import { User } from '@cdc/users/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  LOCALE = LocaleConstants;
  subscription: Subscription;
  subscriptionLocale: Subscription;

  constructor(
    private usersService: UsersService,
    private localeService: LocaleService
  ) { }

  ngOnInit() {
    this.addSbscritions();
    this.getUsers();
  }

  private getUsers(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  private clearUsers(): void {
    this.usersService.deleteAllUsers();
  }

  private addSbscritions() {
    this.subscription = this.usersService.usersListChanged.subscribe((users: User[]) => {
      this.users = users;
    });

    this.subscriptionLocale = this.localeService.localeChanged.subscribe(() => {
      this.usersService.getUsers().subscribe((users: User[]) => {
        this.users = users;
      });
    });
  }
}
