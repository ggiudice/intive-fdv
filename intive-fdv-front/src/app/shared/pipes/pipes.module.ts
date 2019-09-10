import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalDatePipe } from './local-date.pipe';
import { LocalCurrencyPipe } from './local-currency.pipe';

@NgModule({
  declarations: [
    LocalDatePipe,
    LocalCurrencyPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocalDatePipe,
    LocalCurrencyPipe
  ]
})
export class PipesModule { }
