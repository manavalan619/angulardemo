import { Component, OnInit } from '@angular/core';
import { ShareService } from '../signup/share.service';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(public service: ShareService, public route: Router) { }



  userdetails: any[] = this.service.details_arry;

  card_button: boolean = false;
  edit_button: boolean = true;
  delete_button: boolean = true;

  delete(demo) {
    console.log("delete is clicked**********", demo)
    this.userdetails.splice(demo, 1);
  }


  mails;
  password;
  address;
  address2;
  city;
  pin;

  editable_odj;
  edit(i) {
    console.log("mail----------->>>>>>>>>>", i)
    this.card_button = true;
    this.delete_button = false;
    this.index_edit = i;
    let edit = this.userdetails[i];
    console.log("EDIT IS CLICKED**********", edit)
    this.editable_odj = edit;
    console.log("Full object-------->>>>>", this.editable_odj)
    this.mails = edit.email;
    this.password = edit.password;
    this.address = edit.address;
    this.address2 = edit.address2;
    this.city = edit.city;
    this.pin = edit.pin;
  }

  cancel() {
    this.card_button = false;
    this.delete_button = true;

  }

  index_edit;
  save(i) {
    this.index_edit = i;
    console.log("Edit index of array>>>>>>>>>>", i)
    this.mails;
    this.password;
    this.address;
    this.address2;
    this.city;
    this.pin;
    this.userdetails.splice(i, 1, { address: this.address, address2: this.address2, city: this.city, email: this.mails, password: this.password, pin: this.pin });
    this.card_button = false;
    this.delete_button = true;
  }

  ngOnInit(): void {
    console.log("on view comp--->>>", this.service.details_arry);
  }

  editby(i) {
    const queryParams: any = {};
    let edit = this.userdetails[i].email;
    console.log("view component--->>>>>", edit)
    queryParams.i = edit;
    const navigationExtras: NavigationExtras = {
      queryParams
    };

    this.route.navigate(['/edit'], navigationExtras);
  }
}
