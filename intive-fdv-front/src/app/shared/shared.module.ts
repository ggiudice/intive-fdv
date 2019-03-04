import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent, HomeComponent, NotFoundComponent } from './components';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
