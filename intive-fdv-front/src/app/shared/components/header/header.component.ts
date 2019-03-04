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

  constructor(
    private localeService: LocaleService
  ) {
    this.localeId = this.localeService.getLocaleId();
  }

  ngOnInit() { }

  setLocale(localeId: string) {
    this.localeId = localeId;
    this.localeService.setLocale(localeId).subscribe();
  }
}
