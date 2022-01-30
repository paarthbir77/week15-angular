import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  result: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  display(data: any){
    //console.log(data);
    this.result = data;
    alert(this.result);
  }
  
  register(data: any){
    if("Customer" == data.type){
      var url = "https://localhost:8082/Register?email="+data.email+"test&password="+data.password;
      this.http.get(url, {responseType: 'text'}).subscribe(data=> this.display(data));
    }
    else if("Offline Customer" == data.type){
      var url = "https://localhost:8083/Register?email="+data.email+"test&password="+data.password;
      this.http.get(url, {responseType: 'text'}).subscribe(data=> this.display(data));
    }
    this.router.navigateByUrl("/");
  }

}

