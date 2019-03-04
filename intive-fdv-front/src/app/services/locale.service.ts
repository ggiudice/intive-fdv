import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ConfigService } from '../shared/config/config.service';
import { Locale } from '../models';
import { LocaleConstants } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private API_URL: string;
  private API_URL_MOCK = './assets/mock/locale/';
  private LOCALE_ID = null;
  localeMap: Map<string, string> ;

  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {
    this.API_URL = configService.getConfig().apiUrl;
    this.LOCALE_ID = configService.getConfig().locale;
  }

  public getLocale(localeId: string): Observable<boolean> {
    return this.getMapLocale(localeId).pipe(
      map(localeMap => {
        this.localeMap = localeMap;
        this.LOCALE_ID = localeId;
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
   * Gets the texts of the past language as an argument and transforms it into a map
   * for better use.
   * If the server is not active or gives an error, it retrieves it locally from angular.
   * @param localeId
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
   * Gets the text based on the key, and if a string list is sent it is 
   * replaced in the text. Ej Hello $ 1 -> Hello Carlos
   * @param key
   * @param extra
   */
  getText(key: string, extra: string[] = null): string {

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
}
