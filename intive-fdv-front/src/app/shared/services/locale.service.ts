import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { TranslateService } from '@ngx-translate/core';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';

import { ConfigService } from '@cdc/shared/config';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private LOCALE_ID = null;
  public localeChanged = new Subject<any>();

  constructor(
    private translateService: TranslateService,
    private bsLocaleService: BsLocaleService,
    configService: ConfigService
  ) {
    this.LOCALE_ID = configService.getConfig().locale;
  }

  /**
   * Set the language change.
   * Change of locale for formatting dates.
   * And notify the subscribers that there was language change
   * @param localeId to setter new locale
   */
  public setLocale(localeId: string): void {
    this.LOCALE_ID = localeId;
    this.registerLocale(localeId);
    this.translateService.setDefaultLang(localeId);
    this.localeChanged.next();
  }

  public getLocaleId(): string {
    return this.LOCALE_ID;
  }

  /**
   * Register change locale Format Date commons
   * @param localeId to retrieve texts from register date commons angular
   */
  private registerLocale(localeId: string) {

    // Locale of date commons angular
    switch (localeId) {
      case 'es': {
        registerLocaleData(localeEs);
        break;
      }
      case 'en': {
        registerLocaleData(localeEn);
        break;
      }
      case 'fr': {
        registerLocaleData(localeFr);
        break;
      }
    }

    // Locale of ngx-bootrap
    this.bsLocaleService.use(localeId);
  }
}

