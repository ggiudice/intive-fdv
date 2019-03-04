import { Component } from '@angular/core';

import { LocaleService } from './services/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readyWeb = false;
  constructor(
    private localeService: LocaleService
  ) {
    const localeEnviroment = this.localeService.getLocaleId();
    this.localeService.getLocale(localeEnviroment).subscribe(rta => {
      this.readyWeb = true;
    });
  }
}
