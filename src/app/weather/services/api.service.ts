import { Inject, Injectable } from '@angular/core';
import { map, mergeMap, Observable, of, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_URL, APP_KEY, APP_UNIT } from 'src/app/app.config';
import { IApiKey } from '../types/api-key.interface';
import { IApiUrl } from '../types/api-url.interface';
import { IApiUnit } from '../types/api-unit.interface';
import { ICurrent } from '../types/current.interface';
import { IForecast } from '../types/forecast.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    @Inject(APP_URL) private urlConfig: IApiUrl,
    @Inject(APP_KEY) private keyConfig: IApiKey,
    @Inject(APP_UNIT) private unitConfig: IApiUnit,
    private httpClient: HttpClient
  ) {}

  getCurrentWeather() {
    return this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', this.unitConfig.apiUnit)
          .set('appid', this.keyConfig.apiKey);
      }),
      switchMap((params) =>
        this.httpClient.get<ICurrent>(`${this.urlConfig.apiUrl}/weather`, {
          params,
        })
      ),
      map((response) => {
        return {
          dt: response.dt,
          temp: response.main.temp,
          name: response.name,
          sunrise: response.sys.sunrise,
          sunset: response.sys.sunset,
          timezone: response.timezone,
          icon: response.weather[0].icon,
          main: response.weather[0].main,
        };
      })
    );
  }

  getForecastWeather() {
    return this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', String(coords.latitude))
          .set('lon', String(coords.longitude))
          .set('units', this.unitConfig.apiUnit)
          .set('appid', this.keyConfig.apiKey);
      }),
      switchMap((params) =>
        this.httpClient.get<IForecast>(`${this.urlConfig.apiUrl}/forecast`, {
          params,
        })
      ),
      map((response) => response.list),
      mergeMap((response) => of(...response))
    );
  }

  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position.coords);
          observer.complete();
        },
        (err) => observer.error(err)
      );
    });
  }
}
