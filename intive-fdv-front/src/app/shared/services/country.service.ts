import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { Country } from '@cdc/shared/models';
import { ConfigService } from '@cdc/shared/config';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private API_URL: string;
  constructor(
    private httpClient: HttpClient,
    private configService: ConfigService
  ) {
    this.API_URL = configService.getConfig().apiUrlCountry;
  }

  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.API_URL).pipe(
      map(res => {
        const countries: Country[] = [];
        res.forEach(country => {
          countries.push(new Country(country.name, country.alpha2Code));
        });
        return countries;
      })
    );
  }

}
