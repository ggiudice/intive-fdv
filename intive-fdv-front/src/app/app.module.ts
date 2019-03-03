import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { ConfigEnv } from './shared/config/config.enviroment';
import { ConfigService } from './shared/config/config.service';
import { LocaleService } from './services/locale.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule
  ],
  providers: [
    ConfigService,
    ConfigEnv,
    LocaleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
