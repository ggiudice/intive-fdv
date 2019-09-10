import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PipesModule } from '../../shared/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { UserFormComponent, UserListComponent, UserInfoComponent } from '@cdc/users/components';
import { CountryService } from '@cdc/shared/services';
import { UsersService } from '@cdc/users/services';
import { StorageService } from '@cdc/shared/services';

@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    UserListComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PipesModule,
    SharedModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
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
