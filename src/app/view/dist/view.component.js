"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ViewComponent = /** @class */ (function () {
    function ViewComponent(service, route) {
        this.service = service;
        this.route = route;
        this.userdetails = this.service.details_arry;
        this.card_button = false;
        this.edit_button = true;
        this.delete_button = true;
    }
    ViewComponent.prototype["delete"] = function (demo) {
        console.log("delete is clicked**********", demo);
        this.userdetails.splice(demo, 1);
    };
    ViewComponent.prototype.edit = function (i) {
        this.card_button = true;
        this.delete_button = false;
        this.index_edit = i;
        var edit = this.userdetails[i];
        console.log("EDIT IS CLICKED**********", edit);
        this.editable_odj = edit;
        console.log("Full object-------->>>>>", this.editable_odj);
        this.mails = edit.email;
        this.password = edit.password;
        this.address = edit.address;
        this.address2 = edit.address2;
        this.city = edit.city;
        this.pin = edit.pin;
        // this.userdetails.splice(i, 1, {address: "a",address2: "a",city: "a",email: "a",password: "a",pin: 98});
        // this.service.editable_arry=edit;
        // this.route.navigateByUrl('/signup')
    };
    ViewComponent.prototype.cancel = function () {
        this.card_button = false;
        this.delete_button = true;
    };
    ViewComponent.prototype.save = function (i) {
        this.index_edit = i;
        console.log("Edit index of array>>>>>>>>>>", i);
        this.mails;
        this.password;
        this.address;
        this.address2;
        this.city;
        this.pin;
        this.userdetails.splice(i, 1, { address: this.address, address2: this.address2, city: this.city, email: this.mails, password: this.password, pin: this.pin });
        this.card_button = false;
        this.delete_button = true;
    };
    ViewComponent.prototype.editby = function (i) {
        this.route.navigateByUrl("/edit");
    };
    // index: any = this.userdetails.indexOf("mano");
    ViewComponent.prototype.ngOnInit = function () {
        console.log("on view comp--->>>", this.service.details_arry);
        console.log("index--->>>", this.index);
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'app-view',
            templateUrl: './view.component.html',
            styleUrls: ['./view.component.css']
        })
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;

//# sourceMappingURL=view.component.js.map
