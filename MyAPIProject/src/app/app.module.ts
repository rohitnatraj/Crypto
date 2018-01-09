import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BinanceComponent } from './binance/binance.component';
import { CoinBaseComponent } from './coin-base/coin-base.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BinanceComponent,
    CoinBaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
