import { Component } from '@angular/core';

import { LocaleService } from './services/locale.service';
import { ConfigService } from './shared/config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readyWeb = false;
  constructor(
    private localeService: LocaleService,
    private configService: ConfigService
  ) {
    const localeEnviroment = configService.getConfig().locale;
    console.log(localeEnviroment);
    this.localeService.getLocale(localeEnviroment).subscribe(rta => {
      this.readyWeb = true;
    });
  }
}
