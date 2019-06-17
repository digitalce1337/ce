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

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"assets/imgs/LoginIcon.png\">\n  <!-- <ion-button>\n      <ion-label>Owner</ion-label>\n  </ion-button> -->\n  <!-- <ion-item button>\n      <ion-label>Owner</ion-label>\n  </ion-item>\n  <br>\n  <ion-button>\n      <ion-label>Operator</ion-label>\n  </ion-button> -->\n<!-- <ion-list ngDefaultControl [(ngModel)]=\"Role\" > -->\n<ion-list>\n    <ion-radio-group ngDefaultControl [(ngModel)]=\"Role\" (ionChange)=\"showRole()\">\n        <ion-item>\n            <ion-label>Owner</ion-label>\n            <ion-radio value =\"Owner\" checked></ion-radio>\n        </ion-item>\n        <ion-item>\n          <ion-label>Operator</ion-label>\n          <ion-radio value =\"Operator\" ></ion-radio>\n        </ion-item>\n    </ion-radio-group>\n</ion-list>\n  \n  <br>\n  <!-- <ion-radio-group [(ngModel)]=\"Role\" (ionChange)=\"role($event)\">\n    <ion-item>\n      <ion-label>Owner name</ion-label>\n      <ion-radio value =\"Owner\" (ionSelect)=\"Owner\"></ion-radio>\n    </ion-item>\n    <ion-item>\n        <ion-label>Operator</ion-label>\n        <ion-radio value =\"Operator\" (ionSelect)=\"Operator\"></ion-radio>\n      </ion-item>\n  </ion-radio-group> -->\n\n  \n  <!-- <br /> -->\n  <!-- <ion-list radio-group [(ngModel)]=\"Role\" (ionChange)=\"role($event)\"> -->\n    <!-- <ion-item> -->\n      <!-- <ion-label>{{ owner }}</ion-label> -->\n      <!-- <ion-label>Owner</ion-label> -->\n      <!-- <ion-radio value=\"Owner\" (ionSelect)=\"Owner\"></ion-radio> -->\n    <!-- </ion-item> -->\n    <!-- <ion-item> -->\n      <!-- <ion-label>{{ operator }}</ion-label> -->\n      <!-- <ion-label>Operator</ion-label> -->\n      <!-- <ion-radio value=\"Operator\" (ionSelect)=\"Operator\"></ion-radio> -->\n    <!-- </ion-item> -->\n  <!-- </ion-list> -->\n\n  <!-- <button ion-button block outline (click)=\"loginWithFacebook1()\" *ngIf=\"!provider.loggedin\"> -->\n  <!-- <ion-button expand=\"block\" (click)=\"loginWithFacebook1()\"> -->\n  <ion-button expand=\"block\" (click)=\"testLogin()\">\n    <ion-icon name=\"logo-facebook\"></ion-icon>\n    Login With Facebook\n  </ion-button>\n  <!-- <button ion-button block outline (click)=\"loginWithFacebook1()\">\n    \n  </button> -->\n\n</ion-content>\n"

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
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var LoginPage = /** @class */ (function () {
    function LoginPage(router, storage, alertCtrl, fb, loadingCtrl, appprov, event) {
        this.router = router;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.appprov = appprov;
        this.event = event;
        this.isLoggedIn = false;
        this.provider = {
            loggedin: false,
            name: '',
            email: '',
            profilePicture: ''
        };
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
            console.log("clicked");
        }
        else {
            console.log("show me" + this.Role);
            this.router.navigateByUrl('operator/tabs/operator-home');
            // this.navCtrl.navigateRoot('/LoginPage');
        }
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            message: 'Loading...'
        });
        this.loading.present();
    };
    LoginPage.prototype.showAlert = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Info',
                            subHeader: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.roleAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: this.rolemsgtitle,
                            subHeader: this.rolemsg,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        // }).then(alert => alert.present());
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        // }).then(alert => alert.present());
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.loginWithFacebook1 = function () {
        var _this = this;
        if (this.Role == null || this.Role === undefined) {
            // const alert = this.alertCtrl.create({
            //   header: this.rolemsgtitle,
            //   subHeader: this.rolemsg,
            //   buttons: ['OK']
            // }).then(alert => alert.present());
            // alert.present();
            this.roleAlert();
            return;
        } // if role
        this.showLoader();
        this.fb.login(['public_profile', 'user_friends', 'email']).then(function (res) {
            _this.loading.dismiss();
            if (res.status === 'connected') {
                // this.showAlert(res.authResponse.userID + ": " + res.authResponse.accessToken);
                _this.access_token = res.authResponse.accessToken;
                var userID = res.authResponse.userID;
                _this.fb.api('/me?fields=id,name,email,picture,first_name,last_name,gender,location,locale,work,languages,birthday,relationship_status,hometown', []).then(function (profile) {
                    var email = profile.email;
                    // Get profile picture from url
                    // let profile_url = profile['picture']['data']['url'];
                    // Set profile_url as empty default
                    var profile_url = 'assets/imgs/blank_profile.png';
                    var name = profile.name;
                    if (email != null && email !== '') {
                        _this.loading.dismiss();
                        console.log('User is logged in either by new access_token or revisit user');
                        _this.appprov.checkExistingUser(email).then(function (res) {
                            var checkUser = JSON.stringify(res);
                            checkUser = JSON.parse(checkUser);
                            checkUser = checkUser['result'].toString();
                            console.log(checkUser);
                            if (checkUser === 'false') {
                                _this.appprov.updateAccessToken(email, _this.access_token, profile_url).then(function (res) {
                                    var update = JSON.stringify(res);
                                    update = JSON.parse(update);
                                    console.log(update);
                                    _this.storage.set('access_token', _this.access_token);
                                    var navigationExtras = {
                                        queryParams: {
                                            token: _this.access_token,
                                        }
                                    };
                                    if (_this.Role == 'Owner') {
                                        _this.roleValue = true;
                                        // this.event.publish('roleReceived', this.roleValue);
                                        // this.nav.setRoot(TabsPage);
                                        _this.router.navigateByUrl('owner/tabs/owner-home', navigationExtras);
                                        console.log("clicked" + "storage: " + _this.storage);
                                        return;
                                    }
                                    else {
                                        _this.roleValue = false;
                                        // this.event.publish('roleReceived', this.roleValue);
                                        // this.nav.setRoot(OperatorstabsPage, this.storage);
                                        console.log("show me " + _this.Role + " storage: " + _this.storage);
                                        _this.router.navigateByUrl('operator/tabs/operator-home', navigationExtras);
                                        return;
                                    }
                                }, function (err) { console.log(err); });
                            }
                            else {
                                _this.loading.dismiss();
                                _this.appprov.addUser(email, _this.access_token, name, profile_url, _this.Role).then(function (res) {
                                    var adduser = JSON.stringify(res);
                                    adduser = JSON.parse(adduser);
                                    // console.log(adduser['result']);
                                }, function (err) { console.log(err); });
                            }
                        }, function (err) {
                            console.log(err);
                        });
                        _this.storage.set('access_token', _this.access_token);
                        _this.isLoggedIn = true;
                        if (_this.Role === 'Owner') {
                            _this.router.navigateByUrl('CreatecompanyPage');
                            // this.navCtrl.navigateForward('/CreatecompanyPage', this.storage);
                            // this.nav.push(CreatecompanyPage, this.storage);
                        }
                        else {
                            _this.router.navigateByUrl('OtpOperatorPage');
                            // this.nav.push(OtpOperatorPage, this.storage);
                        }
                        return;
                    }
                });
            }
            else {
                _this.isLoggedIn = false;
                _this.showAlert(res.status);
            }
        }).catch(function (e) {
            console.log('Error logging into Facebook', e);
            console.log('Display value for isLoggedIn', _this.isLoggedIn);
        });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
        this.loading.dismiss();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('email'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('password'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/pages/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Events"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map