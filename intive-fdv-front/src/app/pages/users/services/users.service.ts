import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Person } from '../../../models';

@Injectable()
export class UsersService {

    //TOOD: Hacer externa la variable
  private API_URL: string;
  constructor(
    private httpClient: HttpClient
  ) {
    this.API_URL = 'https://restcountries.eu/rest/v2/all';
  }


  // TODO: ver esto de catch y exito como se maneja con obserbace
  getUsers(): Observable<Person[]> {
    return null;
  }

  // TODO: ver siu hace falta ya que es lo que ya esta en la vista.., pero lo haria igua
  getUser(): Observable<Person[]> {
    return null;
  }

}
