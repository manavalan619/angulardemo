import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from "../app/signup/signup.component"
import { HomeComponent } from "../app/home/home.component"
import { ViewComponent } from "../app/view/view.component"
import { EditComponent } from "../app/edit/edit.component"
import { CredsComponent } from "./creds/creds.component"
import { AuthguardGuard } from './authguard.guard'



export const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: 'view', component: ViewComponent, canActivate: [AuthguardGuard] },
  { path: 'edit', component: EditComponent },
  { path: 'login', component: CredsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

