export interface IForecast {
  list: {
    dt: number;
    main: {
      temp: number;
    };
    weather: [
      {
        icon: string;
        main: string;
      }
    ];
  }[];
}
