import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  @Input() exchangeRate:number = 0;
  @Input() choosenPrimaryCurrency:string ='';
  @Input() choosenSecondaryCurrency: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
