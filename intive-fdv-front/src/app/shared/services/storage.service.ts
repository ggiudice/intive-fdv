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
