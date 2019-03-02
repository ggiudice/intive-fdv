import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { User } from '../../../models';
import { StorageService } from '../../../services/storage.service';
import { Constants } from '../../../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //TOOD: Hacer externa la variable
  private API_URL: string;
  constructor(
    private storageService: StorageService
  ) { }

  // TODO: ver esto de catch y exito como se maneja con obserbace
  public getUsers(): Observable<User[]> {
    const usersStorage = this.storageService.getItem(Constants.STORAGE_USERS);
    const users: User[] = usersStorage ? JSON.parse(usersStorage) : [];
    return of(users);
  }

  // TODO: ver siu hace falta ya que es lo que ya esta en la vista.., pero lo haria igua
  public getUser(id: number): Observable<User> {
    const usersStorage = this.storageService.getItem(Constants.STORAGE_USERS);
    const users: User[] = usersStorage ? JSON.parse(usersStorage) : [];
    const user = users.find(userSearch => userSearch.id === id);
    return of(user);
  }

  //TODO: ver si no falla al estar vacia
  public saveUser(user: User): void {
    const usersStorage = this.storageService.getItem(Constants.STORAGE_USERS);
    const usersList: User[] = usersStorage ? JSON.parse(usersStorage) : [];

    if (user.id === undefined) {
      user.id = this.getId();
      usersList.push(user);
    } else {
      // TODO: Esto arreglar todo mal, no encuentra el que quiere
      let userUpdate = this.getUser(user.id).subscribe((userSearch: User) => {
        return userSearch;
      });
      debugger
    }

    const usersString = JSON.stringify(usersList);
    this.storageService.setItem(Constants.STORAGE_USERS, usersString);
  }

  public deleteAllUsers(): void {
    this.storageService.removeItem(Constants.STORAGE_USERS);
  }

  //TODO: Investigar este tema en todos los obserbvables revisar, como hacer para que 
  // el return este por fuera
  private getId() {

    this.getUsers().subscribe((users: User[]) => {

      let id: number = null;
      while (id === null) {
        const randomId = Math.floor((Math.random() * 1000) + 1);
        const userFound: User = users.find(user => user.id === randomId);
        if (userFound === undefined) {
          id = randomId;
        }
      }
      return id;
    });

    return 23;
  }

}
