import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { IForecast } from '../../types/forecast.interface';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css'],
})
export class ForecastWeatherComponent {
  forecast: any;

  constructor(private apiService: ApiService) {
    apiService.getForecastWeather().subscribe({
      next: (response) => {
        this.forecast = response;
      },
      error: (error) => {
        console.error('error', error);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }

  formatDateTime(value: number) {
    return moment.unix(value).format('DD-MM-YYYY, H:MM');
  }
}
