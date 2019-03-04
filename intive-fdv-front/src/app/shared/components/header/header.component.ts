import { Component, OnInit } from '@angular/core';

import { LocaleService } from '../../../services/locale.service';
import { LocaleConstants } from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  LOCALE = LocaleConstants;
  localeId = null;
  localeService;

  constructor(
    localeService: LocaleService
  ) {
    this.localeService = localeService;
    this.localeId = this.localeService.getLocaleId();
  }

  ngOnInit() { }

  getLocale(localeId: string) {
    this.localeId = localeId;
    this.localeService.getLocale(localeId).subscribe();
  }
}
