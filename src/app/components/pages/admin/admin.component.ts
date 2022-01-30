import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  result: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
// TODO: viewMonthlyFinancials, User CRUD operations
  viewUsers(){  
    this.http.get('https://localhost:8081/admin-on-user-service/viewUsers', {responseType: 'text'}).subscribe(data=> this.display(data));
  }

  viewBillsToday(){
    this.http.get('https://localhost:8081/admin-service/viewBillsToday', {responseType: 'text'}).subscribe(data=> this.display(data));
  }
  createUser(data: any){
    var url = "https://localhost:8081/admin-on-user-service/createUser?email="+data.email+"&password="+data.password+"&type="+data.type;
    this.http.get(url, {responseType: 'text'}).subscribe(reply=> this.display(reply));
    // alert("createUser: "+data.email+" "+data.type);
  }
  updateUser(data: any){
    var url = "https://localhost:8081/admin-on-user-service/updateUsers?email="+data.email+"&type="+data.type;
    this.http.get(url, {responseType: 'text'}).subscribe(reply=> this.display(reply));
  }
  deleteUser(data: any){
    var url = "https://localhost:8081/admin-on-user-service/deleteUsers?email="+data.email;
    this.http.get(url, {responseType: 'text'}).subscribe(reply=> this.display(reply));
  }


  display(data: any){
    //console.log(data);
    this.result = data;
    alert(this.result);
  }

}
