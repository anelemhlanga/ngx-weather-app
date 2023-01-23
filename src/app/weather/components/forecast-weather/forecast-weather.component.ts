import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.css'],
})
export class ForecastWeatherComponent {
  constructor(private apiService: ApiService) {
    apiService.getCurrentLocation().subscribe((response) => {
      console.log('respponse', response);
    });
  }
}
