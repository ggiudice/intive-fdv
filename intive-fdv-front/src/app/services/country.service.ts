import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../models';

@Injectable()
export class CountryService {

    //TOOD: Hacer externa la variable
  private API_URL: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.API_URL = 'https://restcountries.eu/rest/v2/all';
  }


  // TODO: ver esto de catch y exito como se maneja con obserbace
  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.API_URL);
  }


}
