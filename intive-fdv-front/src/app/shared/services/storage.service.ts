import { Injectable, InjectionToken, Inject } from '@angular/core';


export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(BROWSER_STORAGE) public storage: Storage) {}
// TODO: Ver algo mas generico por model
// https://stackoverflow.com/questions/43695983/typescript-using-generics-to-for-localstorage
  getItem(key: string) {
    return this.storage.getItem(key);
  }

  setItem(key: string, value: string) {
    this.storage.setItem(key, value);
  }

  removeItem(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}
