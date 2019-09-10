import { Component, OnInit } from '@angular/core';

import { LocaleService } from '@cdc/shared/services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  localeId = null;
  localeService: LocaleService;

  constructor(
    localeService: LocaleService
  ) {
    this.localeService = localeService;
    this.localeId = this.localeService.getLocaleId();
  }

  ngOnInit() { }

  setLocale(localeId: string) {
    this.localeId = localeId;
    this.localeService.setLocale(localeId);
  }
}
