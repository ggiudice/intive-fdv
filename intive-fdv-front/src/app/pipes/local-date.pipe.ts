import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

import { LocaleService } from '../services/locale.service';

@Pipe({
  name: 'localDate'
})
export class LocalDatePipe implements PipeTransform {

  constructor(private localeService: LocaleService) { }

  transform(value: any, format: string): any {
    if (!value) { return ''; }
    if (!format) { format = 'shortDate'; }

    return formatDate(value, format, this.localeService.getLocaleId());
  }

}
