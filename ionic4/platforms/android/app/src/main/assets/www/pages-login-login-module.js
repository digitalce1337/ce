(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.html":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- <ion-button>\n      <ion-label>Owner</ion-label>\n  </ion-button> -->\n  <!-- <ion-item button>\n      <ion-label>Owner</ion-label>\n  </ion-item>\n  <br>\n  <ion-button>\n      <ion-label>Operator</ion-label>\n  </ion-button> -->\n<!-- <ion-list ngDefaultControl [(ngModel)]=\"Role\" > -->\n<ion-list>\n    <ion-radio-group ngDefaultControl [(ngModel)]=\"Role\" (ionChange)=\"showRole()\">\n        <ion-item>\n            <ion-label>Owner</ion-label>\n            <ion-radio value =\"Owner\" checked></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Operator</ion-label>\n          <ion-radio value =\"Operator\" ></ion-radio>\n        </ion-item>\n    </ion-radio-group>\n</ion-list>\n  \n  <br>\n  <!-- <ion-radio-group [(ngModel)]=\"Role\" (ionChange)=\"role($event)\">\n    <ion-item>\n      <ion-label>Owner name</ion-label>\n      <ion-radio value =\"Owner\" (ionSelect)=\"Owner\"></ion-radio>\n    </ion-item>\n    <ion-item>\n        <ion-label>Operator</ion-label>\n        <ion-radio value =\"Operator\" (ionSelect)=\"Operator\"></ion-radio>\n      </ion-item>\n  </ion-radio-group> -->\n\n  <!-- <img src=\"assets/imgs/LoginIcon.png\"> -->\n  <!-- <br /> -->\n  <!-- <ion-list radio-group [(ngModel)]=\"Role\" (ionChange)=\"role($event)\"> -->\n    <!-- <ion-item> -->\n      <!-- <ion-label>{{ owner }}</ion-label> -->\n      <!-- <ion-label>Owner</ion-label> -->\n      <!-- <ion-radio value=\"Owner\" (ionSelect)=\"Owner\"></ion-radio> -->\n    <!-- </ion-item> -->\n    <!-- <ion-item> -->\n      <!-- <ion-label>{{ operator }}</ion-label> -->\n      <!-- <ion-label>Operator</ion-label> -->\n      <!-- <ion-radio value=\"Operator\" (ionSelect)=\"Operator\"></ion-radio> -->\n    <!-- </ion-item> -->\n  <!-- </ion-list> -->\n\n  <!-- <button ion-button block outline (click)=\"loginWithFacebook1()\" *ngIf=\"!provider.loggedin\"> -->\n  <ion-button expand=\"block\" (click)=\"testLogin()\">\n    <ion-icon name=\"logo-facebook\"></ion-icon>\n    Login With Facebook\n  </ion-button>\n  <!-- <button ion-button block outline (click)=\"loginWithFacebook1()\">\n    \n  </button> -->\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var LoginPage = /** @class */ (function () {
    //  Role: string;
    //  Role = '1';
    function LoginPage(router, navCtrl) {
        this.router = router;
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.showRole = function () {
        console.log("role is: " + this.Role);
    };
    // role(value) {
    //   this.Role = value;
    //   console.log("role is: " + ""+value);
    //   console.log("role is: " + ""+this.Role);
    //   console.log("role is: " + String(value));
    // }
    LoginPage.prototype.testLogin = function () {
        console.log("clicked");
        console.log("show me" + this.Role);
        if (this.Role == 'Owner') {
            this.router.navigateByUrl('owner/tabs/owner-home');
            // this.router.navigateByUrl('/owner/tabs/owner-home');
            // this.router.navigateByUrl('/owner/tabs/(owner-home:owner-home)');
            // this.router.navigateByUrl('/OwnerTabsPage');
            // this.navCtrl.navigateRoot('/OwnerTabsPage');
            console.log("clicked");
        }
        else {
            console.log("show me" + this.Role);
            this.router.navigateByUrl('operator/tabs/operator-home');
            // this.navCtrl.navigateRoot('/LoginPage');
        }
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map