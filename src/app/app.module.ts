import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_KEY, ApiKey, APP_URL, ApiUrl } from './app.config';
import { WeatherModule } from './weather/weather.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, WeatherModule],
  providers: [
    {
      provide: APP_KEY,
      useValue: ApiKey,
    },
    {
      provide: APP_URL,
      useValue: ApiUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
