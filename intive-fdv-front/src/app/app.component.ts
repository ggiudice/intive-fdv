import { Component } from '@angular/core';

import { LocaleService } from './shared/services/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readyWeb = true;
  fatalError = false;

  constructor(
    private localeService: LocaleService
  ) {
    const localeEnviroment = this.localeService.getLocaleId();
    this.localeService.setLocale(localeEnviroment);
  }
}
