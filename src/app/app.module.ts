import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
// import { FormControlName } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { ShareService } from './signup/share.service';
import { EditComponent } from './edit/edit.component';
import { CredsComponent } from './creds/creds.component';
import { AuthguardGuard } from './authguard.guard'
import { TestService } from './test.service'




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    ViewComponent,
    EditComponent,
    CredsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AuthguardGuard,
    // FormControlName,
    FormsModule,
    NgbModule
  ],
  providers: [ShareService, AuthguardGuard, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
