import { InjectionToken } from '@angular/core';
import { IApiKey } from './weather/types/api-key.interface';
import { IApiUnit } from './weather/types/api-unit.interface';
import { IApiUrl } from './weather/types/api-url.interface';

export const APP_KEY = new InjectionToken<IApiKey>('app_key');
export const APP_URL = new InjectionToken<IApiUrl>('app_url');
export const APP_UNIT = new InjectionToken<IApiUrl>('app_unit');

export const ApiKey: IApiKey = {
  apiKey: '4fcaff2ff79ba2d9e5c5c56cdb8a2688',
};

export const ApiUrl: IApiUrl = {
  apiUrl: 'https://api.openweathermap.org/data/2.5',
};

export const ApiUnit: IApiUnit = {
  apiUnit: 'metric',
};
