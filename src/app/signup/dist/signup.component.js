"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(service) {
        this.service = service;
        this.final_userdetails = [];
        this.signup = {
            email: "",
            password: "",
            address: "",
            address2: "",
            city: "",
            pin: ""
        };
    }
    SignupComponent.prototype.Submit = function () {
        console.log("user values---->>", this.signup);
        // length = this.final_userdetails.push(this.signup);
        // if (this.signup.email == "" || this.signup.password == "" || this.signup.address2 == "" || this.signup.city == "" || this.signup.pin == "") {
        this.service.details_arry.push(this.signup);
        console.log("values on arry of object----->>>", this.final_userdetails);
        this.signup = {
            email: "",
            password: "",
            address: "",
            address2: "",
            city: "",
            pin: ""
        };
        // }
        // else(this.signup.email != "" || this.signup.password != "" || this.signup.address2 != "" || this.signup.city != "" || this.signup.pin != "")
        // {
        // }
    };
    SignupComponent.prototype.ngOnInit = function () {
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
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        })
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=signup.component.js.map
