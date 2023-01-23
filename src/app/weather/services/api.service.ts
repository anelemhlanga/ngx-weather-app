import { Inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_URL, APP_KEY, APP_UNIT } from 'src/app/app.config';
import { IApiKey } from '../types/api-key.interface';
import { IApiUrl } from '../types/api-url.interface';
import { IApiUnit } from '../types/api-unit.interface';

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
        this.httpClient.get(`${this.urlConfig.apiUrl}/current`, { params })
      )
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
