import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  HeaderComponent,
  HomeComponent,
  NotFoundComponent,
  ErrorComponent
} from './components';
import { TranslateModule } from '@ngx-translate/core';
import { FilterTableComponent } from './components/filter-table/filter-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ErrorComponent,
    FilterTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslateModule,

    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ErrorComponent,
    FilterTableComponent
  ]
})
export class SharedModule { }
