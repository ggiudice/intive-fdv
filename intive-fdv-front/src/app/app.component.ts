import { Component } from '@angular/core';

import { LocaleService } from './services/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readyWeb = false;
  fatalError = false;

  constructor(
    private localeService: LocaleService
  ) {
    const localeEnviroment = this.localeService.getLocaleId();
    this.localeService.getLocale(localeEnviroment).subscribe(isReady => {
      this.readyWeb = isReady;
      this.fatalError = !isReady;
    });
  }
}
