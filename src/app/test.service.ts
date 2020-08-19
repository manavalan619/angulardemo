import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  incoming_username;
  incoming_password;

  login_details = {
    username: "mano",
    password: "mano"
  }

  login() {
    if (this.incoming_username == this.login_details.username && this.incoming_password == this.login_details.password) {
      console.log("Condition--------------------", this.incoming_username)
      return true;
    }
  }

  // gettoken() {
  //   return !!localStorage.getItem("username");
  //   console.log("Here function is calling on service")

  // }
}
