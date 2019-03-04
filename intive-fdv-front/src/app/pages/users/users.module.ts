import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { PipesModule } from '../../pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { UserFormComponent, UserListComponent, UserInfoComponent } from './components';
import { CountryService } from '../../services';
import { UsersService } from './services/users.service';
import { StorageService } from '../../services/storage.service';

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
