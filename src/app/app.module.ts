import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  APP_KEY,
  ApiKey,
  APP_URL,
  ApiUrl,
  APP_UNIT,
  ApiUnit,
} from './app.config';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WeatherModule, HttpClientModule],
  providers: [
    {
      provide: APP_KEY,
      useValue: ApiKey,
    },
    {
      provide: APP_URL,
      useValue: ApiUrl,
    },
    {
      provide: APP_UNIT,
      useValue: ApiUnit,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
