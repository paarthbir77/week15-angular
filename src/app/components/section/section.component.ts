import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  @Input() colour!: string;
  @Input() text!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){

    console.log("login method performed");
    if(this.text === "Admin"){
      // this.router.navigateByUrl("/admin");
      window.location.href  = "https://localhost:8081/login";
    }
    else if(this.text === "Online User"){
      // alert("Online user");
      window.location.href  = "https://localhost:8082/login";
    }
    else if(this.text === "Offline User"){
      window.location.href  = "https://localhost:8083/login";
    }
  }

  register(){
    console.log("register method performed");
    if(this.text === "Admin"){
      // this.router.navigateByUrl("/admin");
      alert('Use admin credentials');
    }
    else if(this.text === "Online User"){
      // alert("Online user");
      // window.location.href  = "https://localhost:4200/register";
      this.router.navigateByUrl("/register");
    }
    else if(this.text === "Offline User"){
      this.router.navigateByUrl("/register");
    }
  }

}
