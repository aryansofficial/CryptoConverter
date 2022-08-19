import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { CurrencyConverterComponent } from './components/currency-converter/currency-converter.component';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { FormComponent } from './components/form/form.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NewsFeedComponent,
    CurrencyConverterComponent,
    ExchangeRateComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'form', component: FormComponent},
    ]),
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
