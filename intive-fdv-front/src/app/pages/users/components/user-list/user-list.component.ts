import { Component, OnInit } from '@angular/core';

import { User } from '../../../../models';
import { UsersService } from '../../services/users.service';
import { LocaleConstants } from '../../../../shared/constants';
import { LocaleService } from '../../../../services/locale.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];
  LOCALE = LocaleConstants;

  constructor(
    private usersService: UsersService,
    private localeService: LocaleService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

   // TODO: Ver lo errore
  private getUsers(): void {
    this.usersService.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }

  private clearUsers(): void {
    this.usersService.deleteAllUsers();
  }

}
