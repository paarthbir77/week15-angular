import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  }),
  observe: 'response'
};

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  result: any;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  display(data: any){
    //console.log(data);
    this.result = data;
    alert(this.result);
  }
  viewInventory(){
    this.http.get('https://localhost:8082/user-service/viewInventory', {responseType: 'text'}).subscribe(data=> this.display(data));
  }
  
  placeOrder(data: any){
    // https://localhost:8082/placeOrder?city=delhi&code=diwali&orderId=2&orderId=3
    // https://localhost:8082/placeOrder?city=delhi&code=diwali&orderId=2&orderId=3
    //https://localhost:8082/user-service/placeOrder?city=delhi&code=diwali&orderId=1&orderId=2
    var orderId = data.orderId.split(',');
    var orderIdString = "";
    for(var i=0; i< orderId.length;i++){
      orderIdString+="&orderId="+orderId[i];
    }
    var url = "https://localhost:8082/user-service/placeOrder?city="+data.city+"&code="+data.code+orderIdString;
    // alert(url);
    this.http.post(url, {city: data.city, code:data.code}).subscribe(reply=> console.log(reply));
    alert("Order placed");
    

  }

}
