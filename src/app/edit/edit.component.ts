import { Component, OnInit } from '@angular/core';
import { ViewComponent } from "../view/view.component"
import { Router, ActivatedRoute } from "@angular/router";
import { ShareService } from '../signup/share.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, public service: ShareService, public router: Router) { }

  edit_date;

  updated: any;
  index;


  update() {
    this.updated = { address: this.edit_date.address, address2: this.edit_date.address2, city: this.edit_date.city, email: this.edit_date.email, password: this.edit_date.password, pin: this.edit_date.pin };
    this.service.details_arry;
    this.service.details_arry.splice(this.edit_date, this.updated);
    console.log("//////////////////////////", this.service.details_arry)
    this.router.navigateByUrl("/view")

  }


  ngOnInit(): void {
    const user_email = this.activatedRoute.snapshot.queryParamMap.get('i');
    this.index = user_email;
    console.log("here--------->>>>>>>>", this.index)
    this.edit_date = this.service.details_arry.find(e => e.email === this.index);
    console.log("Arrar----------------->", this.service.details_arry.find(e => e.email === this.index))
  }

}
