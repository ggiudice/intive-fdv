import { InjectionToken } from '@angular/core';
import { environment } from './../../../environments/environment';

export const Config = new InjectionToken<string>('config');
export const ConfigEnv = { provide: Config, useValue: environment.config };
