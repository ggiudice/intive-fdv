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

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
