import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// import {ViewComponent} from "../view/view.component"


@Injectable({
  providedIn: 'root'
})
export class ShareService {

  name: any = "manavalan"
  constructor() { }
  public details_arry = [];

}

