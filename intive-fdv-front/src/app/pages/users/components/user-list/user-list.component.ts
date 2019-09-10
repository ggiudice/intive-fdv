import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsersService } from '@cdc/users/services';
import { LocaleService } from '@cdc/shared/services';
import { User } from '@cdc/users/models';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

  users: User[];
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionLocale.unsubscribe();
  }

  clearUsers(): void {
    this.usersService.deleteAllUsers();
  }

  private getUsers(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  private addSbscritions() {
    this.subscription = this.usersService.usersListChanged.subscribe((users: User[]) => {
      this.users = users;
    });

    this.subscriptionLocale = this.localeService.localeChanged.subscribe(() => {
      this.usersService.getUsers().subscribe((users: User[]) => this.users = users);
    });
  }
}
