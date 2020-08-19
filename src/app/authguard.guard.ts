import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, from } from 'rxjs';
import { TestService } from './test.service'
import { Router, NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  login_details = {
    username: "mano",
    password: "mano"
  }
  constructor(public routes: Router, public testservice: TestService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.testservice.login()) {
      // return this.testservice.incoming_username;
      return true;
      console.log("SUCCESS>>>>>>>>>>>>>>>>>>>>>>>>>")
    }
    return false;
    this.routes.navigateByUrl("/login");
    //   if (!this.testservice.gettoken()) {
    //     this.routes.navigateByUrl("/login");
    //   }
    //   return this.testservice.gettoken();
    // }

  }
}

