import { Pipe, PipeTransform } from '@angular/core';
import { formatDate, formatCurrency } from '@angular/common';

import { LocaleService } from '@cdc/shared/services';

@Pipe({
  name: 'localCurrency'
})
export class LocalCurrencyPipe implements PipeTransform {

  constructor(private localeService: LocaleService) { }

  transform(value: any, format?: string): any {
    if (!value) { return ''; }

    return formatCurrency(value, this.localeService.getLocaleId(), '$');
  }

}
