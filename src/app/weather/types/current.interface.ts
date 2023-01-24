export interface ICurrent {
  dt: string;
  main: {
    temp: number;
  };
  name: string;
  sys: {
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  weather: [
    {
      icon: string;
      main: string;
    }
  ];
}
