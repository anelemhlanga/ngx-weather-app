import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './components/forecast-weather/forecast-weather.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [
    WeatherComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent,
  ],
  imports: [CommonModule, WeatherRoutingModule],
})
export class WeatherModule {}
