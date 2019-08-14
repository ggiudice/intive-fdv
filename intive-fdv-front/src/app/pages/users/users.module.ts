import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { UserFormComponent, UserListComponent, UserInfoComponent } from '@gg/users/components';
import { CountryService } from '@gg/shared/services';
import { UsersService } from '@gg/users/services';
import { StorageService } from '@gg/shared/services';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [
    UsersComponent
  ],
  providers: [
    CountryService,
    UsersService,
    StorageService
  ]
})
export class UsersModule { }
