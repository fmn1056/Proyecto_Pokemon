import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=chile&appid=f7d1c46b870bb17cef9145b0be8111ca`;
    return this.http.get(url);
  }


}
 