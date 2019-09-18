import { Injectable, Inject } from '@angular/core';

import { Config } from './config.enviroment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configNew: any;

  constructor(@Inject(Config) config: any) {
    this.configNew = config;
  }

  getConfig() {
    return this.configNew;
  }
}
