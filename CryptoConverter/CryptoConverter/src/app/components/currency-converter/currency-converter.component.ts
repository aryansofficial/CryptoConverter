import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent implements OnInit {
  currencies: string[] = ["BTC", "ETH", "USD", "XRP", "LTC", "ADA", "INR"];
  choosenPrimaryCurrency:string ='';
  choosenSecondaryCurrency: string = '';
  primaryConvertCurrency: string='';
  secondaryConvertCurrency: string='';
  primaryAmount: number=1;
  secondaryAmount: number=0;
  result: number=0;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  convert(fromCurrency:string, toCurrency:string){
    this.primaryConvertCurrency = fromCurrency;
    this.secondaryConvertCurrency = toCurrency;
    if(fromCurrency==='' || toCurrency===''){
      return alert("PLease fill both curencies");
    }else {
      this.api.getStuff(1,fromCurrency, toCurrency).subscribe(res => {
        // @ts-ignore
        this.secondaryAmount = (res['Realtime Currency Exchange Rate']["5. Exchange Rate"])*this.primaryAmount;
      });
    }
  }
}
