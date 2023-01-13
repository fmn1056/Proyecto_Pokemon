import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ExchangeRates {
  rates: { [key: string]: number };
  base: string;
  date: string;
}

@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
})
export class ConvertPage {
  amount: number;
  from: string;
  to: string;
  result: number;

  constructor(private http: HttpClient) {
    this.amount = 0;
    this.from = 'USD';
    this.to = 'EUR';
    this.result = 0;
  }

  getExchangeRate(base: string, symbols: string): Observable<ExchangeRates> {
    return this.http.get<ExchangeRates>(`https://openexchangerates.org/api/latest.json?app_id=56126eff301f4eec8dc312b32c00572d`);
  }

  convert() {
    this.getExchangeRate(this.from, this.to).subscribe(data => {
        console.log(data); 
        console.log(this.amount);
      if(data.hasOwnProperty("rates")){
        this.result = parseFloat(Math.round(this.amount * data.rates[this.to]).toFixed(2));
      }
    });
  }
}
