import { Component } from '@angular/core';
import * as moment from 'moment';
import { ApiService } from '../../services/api.service';
import { ICurrent } from '../../types/current.interface';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent {
  weather: any;

  constructor(private apiService: ApiService) {
    apiService.getCurrentWeather().subscribe({
      next: (response: any) => {
        this.weather = response;
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
