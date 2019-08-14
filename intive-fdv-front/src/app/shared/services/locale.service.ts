import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import localeFr from '@angular/common/locales/fr';

import { ConfigService } from '@gg/shared/config';
import { Locale } from '@gg/shared/models';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private API_URL: string;
  private API_URL_MOCK = './assets/mock/locale/';
  private LOCALE_ID = null;
  private localeMap: Map<string, string> ;
  public localeChanged = new Subject<any>();

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService,
    private bsLocaleService: BsLocaleService
  ) {
    this.API_URL = configService.getConfig().apiUrl;
    this.LOCALE_ID = configService.getConfig().locale;
  }

  /**
   * Set the language change.
   * Change of locale for formatting dates.
   * And notify the subscribers that there was language change
   * @param localeId to setter new locale
   */
  public setLocale(localeId: string): Observable<boolean> {
    return this.getMapLocale(localeId).pipe(
      map(localeMap => {
        this.localeMap = localeMap;
        this.LOCALE_ID = localeId;
        this.registerLocale(localeId);
        this.localeChanged.next();
        return true;
      }),
      catchError(err => {
        return of(false);
      })
    );
  }

  public getLocaleId(): string {
    return this.LOCALE_ID;
  }

  /**
   * Gets the text based on the key, and if a string list is sent it is
   * replaced in the text. Ej Hello $ 1 -> Hello Carlos
   * @param key key for map of constants de locale-constants
   * @param extra optional for string replace for full string
   */
  public getText(key: string, extra: string[] = null): string {

    if (this.localeMap === undefined || this.localeMap === null ) {
      return;
    }

    let text = null;
    if (extra === null) {
      text = this.localeMap.get(key);
    } else {
      let valueReplace = this.localeMap.get(key);
      for (let index = 0; index < extra.length; index++) {
        valueReplace = valueReplace.replace('$' + index, extra[index]);
      }
      text = valueReplace;
    }

    return text;
  }

  /**
   * Gets the texts of the past language as an argument and transforms it into a map
   * for better use.
   * If the server is not active or gives an error, it retrieves it locally from angular.
   * @param localeId to retrieve texts from the service
   */
  private getMapLocale(localeId: string): Observable<Map<string, string>> {

    return this.httpClient.get<Locale[]>(this.API_URL + '/locale/' + localeId).pipe(
      map(res => {
        const localMap = new Map<string, string>();
        res.forEach((locale: Locale) => {
          localMap.set(locale.key, locale.value);
        });
        return localMap;
      }),
      catchError(err => {
        console.warn('Server mock express not initialized but get from app angular');
        return this.httpClient.get<Locale[]>(this.API_URL_MOCK + localeId + '.json').pipe(
          map(res => {
            const localMap = new Map<string, string>();
            res.forEach((locale: Locale) => {
              localMap.set(locale.key, locale.value);
            });
            return localMap;
          })
        );
      })
    );
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

