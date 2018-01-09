import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works';
  private appUrl = "https://api.coinmarketcap.com/v1/ticker/";
  data: any[];

  constructor (private http: Http) {
    console.log("Hello Crypto Users");
    this.getCoins();
    //this.getData();
  }

  getCoinData(){
    return this.http.get(this.appUrl)
      .map((res: Response) => res.json());
  }

  getCoins(){
    this.getCoinData().subscribe(data => {
      console.log(data);
      this.data =  data;
    })
  }
}
