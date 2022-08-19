import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:any = {
    1:'https://alpha-vantage.p.rapidapi.com/query'
  }

  headers= new HttpHeaders({
    'X-RapidAPI-Key': environment.API_KEY,
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  })
  //TODO: Implement these from httpInterceptor


  constructor(private http: HttpClient) { }

  getStuff(urlChoice: number,fromCurrency:string, toCurrency:string){
    // TODO: currect this implementation
    console.log(urlChoice, fromCurrency, toCurrency)
    const params = new HttpParams({
      fromObject: {
        from_currency: fromCurrency,
        function: 'CURRENCY_EXCHANGE_RATE',
        to_currency: toCurrency
      }
    })
    return this.http.get(this.url[urlChoice], {params: params, headers: this.headers});
  }

  getNews(){
    // TODO: currect this implementation
    const customHeaders= new HttpHeaders({
      'X-RapidAPI-Key': environment.API_KEY,
      'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
    })
    return this.http.get('https://crypto-news-live3.p.rapidapi.com/news', {headers: customHeaders});
  }




}
