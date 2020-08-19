import { Component, OnInit } from '@angular/core';
import { userdetails } from "./userdetails"
import { ShareService } from './share.service';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { ValidationErrors, AbstractControl } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(public service: ShareService) {
  }

  

  state: any[] = ["Choose", "TamilNadu", "Kerala", "AP"];
  signup: userdetails = {
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    pin: ""
  }
  confirm_password: any;
  confirm_password_alter: boolean = false;

  signupform = new FormGroup({
    'email': new FormGroup({
      'name': new FormControl()
    })
  })

  Submit() {
    console.log("user values---->>", this.signup)
    // length = this.final_userdetails.push(this.signup);

    // if (this.signup.email == "" || this.signup.password == "" || this.signup.address2 == "" || this.signup.city == "" || this.signup.pin == "") {
    if (this.signup.password == this.confirm_password) {

      this.service.details_arry.push(this.signup);
      this.signup = {
        email: "",
        password: "",
        address: "",
        address2: "",
        city: "",
        state:"",
        pin: ""
      }

    } else {
      this.confirm_password_alter = true;

    }
    // }
    // else(this.signup.email != "" || this.signup.password != "" || this.signup.address2 != "" || this.signup.city != "" || this.signup.pin != "")
    // {

    // }
  }




  ngOnInit(): void {
    // this.service.editable_arry;
    // console.log("i am from edit array---->>>", this.service.editable_arry)
    // this.signup = {
    //   email: this.service.editable_arry.email,
    //   password: this.service.editable_arry.password,
    //   address: this.service.editable_arry.address,
    //   address2: this.service.editable_arry.address2,
    //   city: this.service.editable_arry.city,
    //   pin: this.service.editable_arry.pin
    // }


    // console.log("----index--->>>", this.service.array_index)


    // console.log("updated--->>>", this.signup, this.service.array_index)


  }

}
