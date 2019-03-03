import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { Country } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  //TOOD: Hacer externa la variable
  private API_URL: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.API_URL = 'https://restcountries.eu/rest/v2/all';
  }


  // TODO: ver esto de catch y exito como se maneja con obserbace
  // De alguna forma que solo tome los atributos nmecesarios y ponga un hook como comentario
  getCountries(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(this.API_URL).pipe(
      map(res => {
        const countries: Country[] = [];
        res.forEach(country => {
          countries.push(new Country(country.name, country.alpha2Code));
        });
        return countries;
      }),
      catchError(err => {
        return of([]);
      })
    );
  }

}
