import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service'
import { from } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-creds',
  templateUrl: './creds.component.html',
  styleUrls: ['./creds.component.css']
})
export class CredsComponent implements OnInit {

  constructor(public testservice: TestService, public router: Router) { }

  login_deatils = {
    username: "",
    password: ""
  }

  ngOnInit(): void {
    localStorage.setItem("username", "mano")
    // this.testservice.incoming_username = this.login_deatils.username;
    // this.testservice.incoming_password = this.login_deatils.password;
    // console.log("111111111111111111111111111111111111111111", this.testservice.incoming_username)
  }

  login() {
    this.testservice.incoming_username = this.login_deatils.username;
    this.testservice.incoming_password = this.login_deatils.password;
    this.login_deatils = {
      username: "",
      password: ""
    }
    this.router.navigateByUrl("/view");
  }

  // demo() {
  //   this.testservice.gettoken
  //   console.log("Button is clicked----------", this.testservice.gettoken)
  // }

}
