import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  HeaderComponent,
  HomeComponent,
  NotFoundComponent,
  ErrorComponent
} from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
