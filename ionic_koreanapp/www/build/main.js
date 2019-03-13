webpackJsonp([15],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorstabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__operatorhome_operatorhome__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operatorjob_operatorjob__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperatorstabsPage = /** @class */ (function () {
    function OperatorstabsPage() {
        this.tab1Operator = __WEBPACK_IMPORTED_MODULE_1__operatorhome_operatorhome__["a" /* OperatorhomePage */];
        this.tab2Operator = __WEBPACK_IMPORTED_MODULE_2__operatorjob_operatorjob__["a" /* OperatorjobPage */];
    }
    OperatorstabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/operatorstabs/operatorstabs.html"*/'<ion-tabs>\n\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab1Operator" tabIcon="home"></ion-tab>\n\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab2Operator" tabIcon="briefcase"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/operatorstabs/operatorstabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], OperatorstabsPage);
    return OperatorstabsPage;
}());

//# sourceMappingURL=operatorstabs.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatecompanyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the CreatecompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreatecompanyPage = /** @class */ (function () {
    function CreatecompanyPage(navCtrl, navParams, appprov, alertCtrl, storage, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this._translate = _translate;
        this.companynameField = "";
        this.companyaddField = "";
        this.phonenoField = "";
        this.workingdaysField = "";
        storage.ready().then(function () {
        });
        // storage.set('access_token', 'LgiiqQDpq2jI_tJTVLxFSd9yJM7agvjomsd2oAopdtYAAAFmFHth7Q').then(() =>{
        //   console.log("access_token set");     
        //   storage.get('access_token').then((val) => {
        //     if (val == null){
        //       console.log(this.access_token);
        //       console.log("No acccess token");
        //       //this.navCtrl.setRoot(LoginPage);
        //     }
        //     else{
        //       console.log("Got access token");
        //       this.access_token = val.toString(); 
        //       console.log(this.access_token);
        //       //this.navCtrl.setRoot(TabsPage);
        //     }
        //   });
        // });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log(_this.access_token);
                console.log("No acccess token");
                //this.navCtrl.setRoot(LoginPage);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this._initializeTranslation();
            }
        });
    }
    CreatecompanyPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad CreatecompanyPage');
        this._initializeTranslation();
    };
    CreatecompanyPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    CreatecompanyPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    CreatecompanyPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("createcompany.title");
        this.company_name = this._translate.instant("createcompany.company_name");
        this.company_address = this._translate.instant("createcompany.company_address");
        this.phone_no = this._translate.instant("createcompany.phone_no");
        this.working_days = this._translate.instant("createcompany.working_days");
        this.continue = this._translate.instant("createcompany.continue");
    };
    CreatecompanyPage.prototype.itemTappedAdd = function () {
        var _this = this;
        // this.navCtrl.setRoot(TabsPage);
        var company_name = this.companynameField;
        var company_add = this.companyaddField;
        var phone_no = this.phonenoField;
        var working_days = this.workingdaysField;
        if (company_name == "" || company_add == "" || phone_no == "" || working_days == "") {
            var alert_1 = this.alertCtrl.create({
                title: 'Empty Field(s)',
                subTitle: 'Please fill up all details before proceeding',
                buttons: ['OK']
            });
            alert_1.present();
            return;
        }
        this.appprov.addCompany(this.access_token, company_name, company_add, phone_no, working_days).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            if (data['result'].toString() == 'true') {
                console.log("Company and phone number added");
            }
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */]);
        }, function (err) {
            console.log(err);
        });
        //this.navCtrl.setRoot(TabsPage);
    };
    CreatecompanyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-createcompany',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/createcompany/createcompany.html"*/'<!--\n\n  Generated template for the CreatecompanyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!--The page for owner to fill in the details of their company-->\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label stacked>{{ company_name }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="companynameField"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>{{ company_address }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="companyaddField"></ion-input>\n\n  </ion-item>\n\n<br>\n\n\n\n<ion-item>\n\n  <ion-label stacked>{{ phone_no }} </ion-label>\n\n  <ion-input type="text" [(ngModel)]="phonenoField"></ion-input>\n\n</ion-item>\n\n\n\n<ion-item>\n\n  <ion-label stacked>{{ working_days }}</ion-label>\n\n  <ion-input type="number" [(ngModel)]="workingdaysField"></ion-input>\n\n</ion-item>\n\n<br>\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col>\n\n  <button full ion-button (click)="itemTappedAdd($event)">{{ continue }}</button>\n\n  </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/createcompany/createcompany.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], CreatecompanyPage);
    return CreatecompanyPage;
}());

//# sourceMappingURL=createcompany.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpOperatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__operatorstabs_operatorstabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_apiurls_serverurls_js__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the OtpOperatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpOperatorPage = /** @class */ (function () {
    function OtpOperatorPage(navCtrl, navParams, appprov, storage, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.storage = storage;
        this._translate = _translate;
        this.otp = ' ';
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log(_this.access_token);
                console.log("No acccess token");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                //the url to display the image icon of the vehicles is the public DNS of AWS instance
                var vehurl = [__WEBPACK_IMPORTED_MODULE_7__app_apiurls_serverurls_js__["a" /* apiKey */] + 'static/vehicles/compactor.png',
                    __WEBPACK_IMPORTED_MODULE_7__app_apiurls_serverurls_js__["a" /* apiKey */] + 'static/vehicles/Excavator.png',
                    __WEBPACK_IMPORTED_MODULE_7__app_apiurls_serverurls_js__["a" /* apiKey */] + 'static/vehicles/loader.png',
                    __WEBPACK_IMPORTED_MODULE_7__app_apiurls_serverurls_js__["a" /* apiKey */] + 'static/vehicles/truck.png'];
                var vehtype = ['Compactor', 'Excavator', 'Loader', 'Truck'];
                console.log("Got access token");
                _this.access_token = val.toString();
                _this._initializeTranslation();
                _this.vehicles = [];
                _this.capabilities = [];
                for (var i = 0; i < vehurl.length; i++) {
                    _this.vehicles.push({
                        vehicle_url: vehurl[i],
                        vehicle_type: vehtype[i]
                    });
                }
            }
        });
    }
    OtpOperatorPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad OtpOperatorPage');
        this._initializeTranslation();
    };
    OtpOperatorPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    OtpOperatorPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    OtpOperatorPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("otp-operator.title");
        this.invitation_code = this._translate.instant("otp-operator.invitation_code");
        this.invited_by = this._translate.instant("otp-operator.invited_by");
        this.phone_no = this._translate.instant("otp-operator.phone_no");
        this.continue = this._translate.instant("otp-operator.continue");
        this.skill_sets = this._translate.instant("otp-operator.skill_sets");
        this.errormsgtitle = this._translate.instant("otp-operator.errormsgtitle");
        this.errormsg = this._translate.instant("otp-operator.errormsg");
        this.invite_error = this._translate.instant("otp-operator.invite_error");
    };
    OtpOperatorPage.prototype.Submit = function () {
        var _this = this;
        console.log('----HERE-----');
        console.log(this.access_token);
        console.log(this.capabilities);
        if (this.PhoneNo != null) {
            this.appprov.OperatorLogin(this.access_token, this.otp, this.PhoneNo).then(function (res) {
                _this.appprov.UpdateCapabilities(_this.access_token, _this.capabilities.toString()).then(function (res) {
                    console.log('Capabilities Updated');
                });
                if (res.result == 'true') {
                    console.log('Operator Logged in');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__operatorstabs_operatorstabs__["a" /* OperatorstabsPage */]);
                }
            });
        }
        else {
            this.appprov.presentAlert(this.errormsgtitle, this.errormsg);
        }
    };
    OtpOperatorPage.prototype.selectVehicle = function (data) {
        if (data.checked == true) {
            if (!(this.capabilities.indexOf(data.vehicle_type) > -1)) {
                this.capabilities.push(data.vehicle_type);
            }
        }
        else {
            if (this.capabilities.indexOf(data.vehicle_type) > -1) {
                var index = this.capabilities.indexOf(data.vehicle_type, 0);
                this.capabilities.splice(index, 1);
            }
        }
        console.log(this.capabilities.toString());
    };
    OtpOperatorPage.prototype.CheckOTP = function () {
        var _this = this;
        if (this.otp.length == 6) {
            this.appprov.CheckOTP(this.otp.toLowerCase()).then(function (res) {
                if (res.result == '0') {
                    _this.Owner = _this.invite_error;
                }
                else if (res.result == '1') {
                    _this.Owner = res.Nick;
                }
            });
        }
    };
    OtpOperatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp-operator',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/otp-operator/otp-operator.html"*/'<!--\n\n  Generated template for the OtpOperatorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-item>\n\n    <ion-label stacked>{{ invitation_code }}</ion-label>\n\n    <ion-input type="text" [(ngModel)]="otp" (ionChange)="CheckOTP()"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label>{{ invited_by }}: <b>{{Owner}}</b></ion-label>\n\n  </ion-item>\n\n<br/>\n\n\n\n<ion-item>\n\n  <ion-label stacked>{{ phone_no }}</ion-label>\n\n  <ion-input type="text" [(ngModel)]="PhoneNo"></ion-input>\n\n</ion-item>\n\n\n\n\n\n<ion-list no-lines>\n\n  <ion-list-header>\n\n    {{ skill_sets }}\n\n  </ion-list-header>\n\n  <ion-item *ngFor="let veh of vehicles">\n\n    <ion-avatar item-left>\n\n        <img [src] = veh.vehicle_url style="width:6rem; height:6rem">\n\n    </ion-avatar>\n\n    <ion-label></ion-label>\n\n    <ion-checkbox [(ngModel)]="veh.checked" item-right check="false" (click)="selectVehicle(veh)"></ion-checkbox>\n\n  </ion-item>\n\n</ion-list>\n\n\n\n<br>\n\n  <ion-grid>\n\n    <ion-row>\n\n    <ion-col>\n\n  <button full ion-button (click)="Submit($event)">{{ continue }}</button>\n\n  </ion-col>\n\n  </ion-row>\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/otp-operator/otp-operator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], OtpOperatorPage);
    return OtpOperatorPage;
}());

//# sourceMappingURL=otp-operator.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginKkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createcompany_createcompany__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kakao_sdk__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__operatorstabs_operatorstabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__otp_operator_otp_operator__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the LoginKkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginKkPage = /** @class */ (function () {
    /*note: console command is to see using java console when using web to test*/
    function LoginKkPage(navCtrl, loadingCtrl, navParams, authService, alertCtrl, iab, _kakaoCordovaSDK, appprov, storage, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.iab = iab;
        this._kakaoCordovaSDK = _kakaoCordovaSDK;
        this.appprov = appprov;
        this.storage = storage;
        this._translate = _translate;
        this.username = '';
        this.password = '';
        var elements = document.querySelectorAll(".tabbar");
        if (elements != null) {
            Object.keys(elements).map(function (key) {
                elements[key].style.display = 'none';
            });
        }
        this._initializeTranslation();
        storage.ready().then(function () {
            storage.get('access_token').then(function (val) {
                _this.showLoader();
                if (val == null) {
                    console.log("No acccess token");
                    //this.navCtrl.push(CreatecompanyPage);
                }
                else {
                    console.log("Got access token");
                    _this.access_token = val.toString();
                    _this.appprov.checkRole(_this.access_token).then(function (res) {
                        var data = JSON.stringify(res);
                        data = JSON.parse(data);
                        _this.loading.dismiss();
                        if (data['result'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], storage);
                        }
                        else if (data['result'] == "0") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__operatorstabs_operatorstabs__["a" /* OperatorstabsPage */], storage);
                        }
                        else {
                            console.log("Not in database");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                _this.loading.dismiss();
            }); //storage.get('access_token').then((val)
        }); //storage.ready().then(()
    } //constructor
    //app starts from here.
    LoginKkPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad LoginKkPage');
        this._initializeTranslation();
    };
    LoginKkPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    LoginKkPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    LoginKkPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("login.title");
        this.owner = this._translate.instant("login.owner");
        this.operator = this._translate.instant("login.operator");
        this.rolemsgtitle = this._translate.instant("login.rolemsgtitle");
        this.rolemsg = this._translate.instant("login.rolemsg");
        this.kakaomsgtitle = this._translate.instant("login.kakaomsgtitle");
        this.kakaomsg = this._translate.instant("login.kakaomsg");
    };
    LoginKkPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    }; //showLoader()
    LoginKkPage.prototype.errorFunc = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Warning!',
            subTitle: message,
            buttons: ['OK'],
        });
        alert.present();
    }; //errorFunc(message)
    LoginKkPage.prototype.myLogIn = function () {
        var _this = this;
        if (this.username.trim() !== '') {
            if (this.password.trim() === '') {
                this.errorFunc('Please Enter your Password!');
            }
            else {
                var credentials = {
                    username: this.username,
                    password: this.password
                };
                this.showLoader();
                this.authService.login(credentials).then(function (result) {
                    console.log(result);
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                }, function (err) {
                    console.log(err);
                    _this.errorFunc('Wrong Credentials, Please try Again');
                    _this.loading.dismiss();
                } //(err)
                ); //this.authService.login(credentials).then((result)
            } //else
        } //if(this.username.trim() !== '')
        else {
            this.errorFunc('Please input a valid password');
        }
    }; //myLogIn()
    // myLogout(){
    //   this.authService.logout();
    // }
    LoginKkPage.prototype.role = function (value) {
        this.Role = value;
    };
    LoginKkPage.prototype.login = function () {
        var _this = this;
        if (this.Role == null || this.Role == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: this.rolemsgtitle,
                subTitle: this.rolemsg,
                buttons: ['OK']
            });
            alert_1.present();
            return;
        } //if role
        // if (this.Role=='Owner'){
        //   this.storage.clear();
        //   this.storage.set('access_token', 'LgiiqQDpq2jI_tJTVLxFSd9yJM7agvjomsd2oAopdtYAAAFmFHth7Q');
        //   this.navCtrl.push(CreatecompanyPage);
        //   return;
        // }
        // else{
        //   this.storage.clear();
        //   this.storage.set('access_token', 'accessop');
        //   this.navCtrl.setRoot(OperatorstabsPage);
        //   return;
        // }
        //the page where user key in user's kakao credentials info
        console.log("Logging into kakao");
        this.showLoader();
        var loginOptions = {};
        loginOptions['authTypes'] = [
            __WEBPACK_IMPORTED_MODULE_7_kakao_sdk__["a" /* AuthTypes */].AuthTypeTalk,
            __WEBPACK_IMPORTED_MODULE_7_kakao_sdk__["a" /* AuthTypes */].AuthTypeStory,
            __WEBPACK_IMPORTED_MODULE_7_kakao_sdk__["a" /* AuthTypes */].AuthTypeAccount
        ];
        /*this connects kakaoTalk SDK manager account to user's KakaoTalk account*/
        this._kakaoCordovaSDK.login(loginOptions).then(function (res) {
            console.log(JSON.stringify(res));
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.access_token = data['accessToken'];
            var name = data['properties']['nickname'];
            var profile_url = data['properties']['thumbnail_image'];
            if (profile_url == null || profile_url == undefined) {
                profile_url = 'assets/imgs/blank_profile.png';
            }
            var has_email = data['kakao_account']['has_email'].toString();
            var email = data['kakao_account']['email'];
            /*has email but does not allow link to account*/
            if (has_email == 'true' && (email == null)) {
                _this.loading.dismiss();
                console.log("please allow email");
                _this._kakaoCordovaSDK.unlinkApp().then(function () {
                    console.log("Unlinked");
                }, function (err) { console.log("cannot unlinked"); });
                var alert_2 = _this.alertCtrl.create({
                    title: _this.kakaomsgtitle,
                    subTitle: _this.kakaomsg,
                    buttons: ['OK']
                });
                alert_2.present();
                console.log("User did not check email in permission");
                return;
            }
            else if (has_email == 'true' && (email != null)) {
                _this.loading.dismiss();
                console.log("User is logged in either by new access_token or revisit user");
                _this.appprov.checkExistingUser(email).then(function (res) {
                    var checkUser = JSON.stringify(res);
                    checkUser = JSON.parse(checkUser);
                    checkUser = checkUser['result'].toString();
                    console.log(checkUser);
                    if (checkUser == 'false') {
                        _this.appprov.updateAccessToken(email, _this.access_token, profile_url).then(function (res) {
                            var update = JSON.stringify(res);
                            update = JSON.parse(update);
                            console.log(update);
                            _this.storage.set('access_token', _this.access_token);
                            if (_this.Role == 'Owner') {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                                return;
                            }
                            else {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__operatorstabs_operatorstabs__["a" /* OperatorstabsPage */], _this.storage);
                                return;
                            }
                            // this.storage.set('access_token', this.access_token);
                            // if (this.Role == 'Owner'){
                            //   this.navCtrl.push(CreatecompanyPage, this.storage);
                            // }
                            // else{
                            //   this.navCtrl.push(OtpOperatorPage, this.storage);
                            // }
                        }, function (err) { console.log(err); });
                    }
                    else {
                        _this.loading.dismiss();
                        _this.appprov.addUser(email, _this.access_token, name, profile_url, _this.Role).then(function (res) {
                            var adduser = JSON.stringify(res);
                            adduser = JSON.parse(adduser);
                            console.log(adduser['result']);
                        }, function (err) { console.log(err); });
                    } //else
                }, function (err) {
                    console.log(err);
                }); //this.appprov.checkExistingUser(email).then((res)
                _this.storage.set('access_token', _this.access_token);
                if (_this.Role == 'Owner') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__createcompany_createcompany__["a" /* CreatecompanyPage */], _this.storage);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__otp_operator_otp_operator__["a" /* OtpOperatorPage */], _this.storage);
                }
                return;
            }
            else {
                var alert_3 = _this.alertCtrl.create({
                    title: _this.kakaomsgtitle2,
                    subTitle: _this.kakaomsg2,
                    buttons: ['OK']
                });
                alert_3.present();
                console.log("User do not have email in kakao");
                return;
            }
        }, function (err) {
            console.log(JSON.stringify(err));
            _this.appprov.presentAlert('error', JSON.stringify(err));
        });
        this.loading.dismiss();
    }; //login()
    LoginKkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login-kk',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/login-kk/login-kk.html"*/'<!--\n  Generated template for the LoginKkPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--creating login field. padding provides padding into container -->\n<ion-content padding>\n  <img src="assets/imgs/LoginIcon.png">\n  <br />\n  <ion-list radio-group [(ngModel)]="Role" (ionChange)="role($event)">\n    <ion-item>\n      <ion-label>{{ owner }}</ion-label>\n      <ion-radio value="Owner" (ionSelect)="Owner"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{ operator }}</ion-label>\n      <ion-radio value="Operator" (ionSelect)="Operator"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <img src="assets/imgs/kakaologin.jpg" style="width:100%; height:50px" (click)="login()">\n\n\n  <!-- <div padding>\n      <button ion-button color = "secondary" (click) = "myLogout()">Log Out</button>\n    </div> -->\n\n\n</ion-content>'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/login-kk/login-kk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_7_kakao_sdk__["b" /* KakaoCordovaSDK */],
            __WEBPACK_IMPORTED_MODULE_8__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginKkPage);
    return LoginKkPage;
}()); //class LoginKkPage

//# sourceMappingURL=login-kk.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddjobPage = /** @class */ (function () {
    function AddjobPage(navCtrl, navParams, _FB, appprov, storage, viewctrl, _translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.appprov = appprov;
        this.storage = storage;
        this.viewctrl = viewctrl;
        this._translate = _translate;
        this.access_token = this.navParams.get('access_token');
        this.VehicleTD = [];
        this.OpTD = [];
        this.selectedOp = [];
        this.selectedVeh = [];
        this.counter = 0;
        //FormBuilder: Angular form builder that creates desired form 
        this.form = this._FB.group({
            ClientName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            PayOut: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Loc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            DateFrom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            DateTo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Desc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            OpVehPay: this._FB.array([
                this.initOpVehPay()
            ]) //OpVehPay
        }); //this.form
        this._initializeTranslation();
    } //end of constructor
    /*app tab starts here. All are functions*/
    AddjobPage.prototype.ionViewDidEnter = function () {
        this._initializeTranslation();
    };
    AddjobPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    AddjobPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    AddjobPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("addjob.title");
        this.client = this._translate.instant("addjob.client");
        this.project_earning = this._translate.instant("addjob.project_earning");
        this.location = this._translate.instant("addjob.location");
        this.date_from = this._translate.instant("addjob.date_from");
        this.date_to = this._translate.instant("addjob.date_to");
        this.description = this._translate.instant("addjob.description");
        this.operator_vehicle = this._translate.instant("addjob.operator_vehicle");
        this.operator_name = this._translate.instant("addjob.operator_name");
        this.vehicle = this._translate.instant("addjob.vehicle");
        this.submit = this._translate.instant("addjob.submit");
        this.add = this._translate.instant("addjob.add");
        this.back = this._translate.instant("addjob.back");
        this.addjobmsgtitle = this._translate.instant("addjob.addjobmsgtitle");
        this.addjobmsg = this._translate.instant("addjob.addjobmsg");
    };
    /*To initialize form for Operator & vehicle for new job */
    //Formbuilder works hand-in-hand with Validators. Validators: validate input(s) for created form
    AddjobPage.prototype.initOpVehPay = function () {
        this.counter++;
        return this._FB.group({
            Opname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Vehtype: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    /* */
    AddjobPage.prototype.addNewInputField = function () {
        if (this.form.valid) {
            this.UpdateSelectedOpVeh(this.form.value.OpVehPay);
            var control = this.form.controls.OpVehPay;
            control.push(this.initOpVehPay());
        }
        else {
            console.log('Nope');
        }
    };
    AddjobPage.prototype.removeInputField = function (i) {
        this.counter--;
        var control = this.form.controls.OpVehPay;
        control.removeAt(i);
    };
    AddjobPage.prototype.manage = function (val) {
        var _this = this;
        var result;
        console.log(val);
        // console.log(val.OpVehPay)
        this.appprov.addJob(this.access_token, val.PayOut, val.DateFrom.toString(), val.DateTo.toString(), val.Loc, val.Desc, val.ClientName)
            .then(function (res) {
            console.log(res);
            result = res;
            //       let operatorjobs = this.form.get('technologies').value;
            //       this.operator_names = [];
            //       this.operator_vehicles = [];
            //       for (let i=0; i<operatorjobs.length; i++){
            //         //this.operator_names[i] = operatorjobs[i].name;
            //         let index = this.operators.indexOf(operatorjobs[i].name);
            //         let email = this.emails[0][index];
            //         this.operator_names[i] = email;
            //         this.operator_vehicles[i]  = operatorjobs[i].type;
            //       }  
            var operatorjobs = val.OpVehPay;
            var names = [];
            var vehicles = [];
            for (var i = 0; i < operatorjobs.length; i++) {
                names[i] = operatorjobs[i].Opname;
                vehicles[i] = operatorjobs[i].Vehtype;
            }
            console.log('i am sending this when i am adding job');
            console.log(vehicles);
            _this.appprov.insertOperatorJob(_this.access_token, result.jid, names, vehicles).then(function (res) {
                _this.appprov.presentAlert(_this.addjobmsgtitle, _this.addjobmsg);
                _this.viewctrl.dismiss('1');
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    }; // end of manage
    AddjobPage.prototype.getEmail = function () {
        var _this = this;
        this.appprov.getemail().then(function (res) {
            _this.UsrEmail = res;
            //this.getOperators(res.toString());
        }, function (err) {
            console.log(err);
        });
    };
    AddjobPage.prototype.getOperators = function (datefrom, dateto) {
        var _this = this;
        console.log("---call---");
        console.log(datefrom);
        console.log(dateto);
        this.OpTD[this.counter] = [];
        this.appprov.getOperatorNames(this.access_token, datefrom, dateto).then(function (res) {
            console.log("no error");
            _this.OpList = res;
            console.log(JSON.stringify(res));
            _this.opname = _this.OpList.operators;
            console.log(_this.opname);
            _this.opemail = _this.OpList.emails;
            console.log(_this.opemail);
            _this.opavail = _this.OpList.availability;
            console.log(_this.opavail);
            var i = _this.opemail.length;
            while (i--) {
                if (_this.selectedOp.indexOf(_this.opemail[i]) > -1) {
                    _this.opemail.splice(i, 1);
                    _this.opname.splice(i, 1);
                    _this.opavail.splice(i, 1);
                }
            }
            for (var i_1 = 0; i_1 < _this.opemail.length; i_1++) {
                _this.OpTD[_this.counter][i_1] = {
                    email: _this.opemail[i_1],
                    name: _this.opname[i_1],
                    availbility: _this.opavail[i_1]
                };
            }
        }, function (err) {
            console.log(err);
        });
    }; // end of getOperators
    AddjobPage.prototype.getVehicles = function (datefrom, dateto) {
        var _this = this;
        this.VehicleTD[this.counter] = [];
        this.appprov.getOperatorVehicles(this.access_token, datefrom, dateto).then(function (res) {
            console.log('1');
            console.log(JSON.stringify(res));
            _this.DispSno = [];
            _this.VehList = res;
            _this.vehsno = _this.VehList.vehsno;
            _this.vehtype = _this.VehList.vehtype;
            _this.vehModel = _this.VehList.model_no;
            _this.vehAvail = _this.VehList.availability;
            var i = _this.vehsno.length;
            console.log('2');
            for (var k = 0; k < i; k++) {
                _this.DispSno.push(_this.vehsno[k]);
                var concat = _this.vehsno[k].toString() + '==**8**-' + _this.vehModel[k].toString();
                _this.vehsno[k] = concat;
            }
            console.log('3');
            // while(i--){
            //   if(this.selectedVeh.indexOf(this.vehsno[i]) > -1){
            //     this.vehsno.splice(i,1);
            //     this.vehtype.splice(i,1);
            //     // this.DispSno.splice(i,1);
            //   }
            // }
            console.log('4');
            console.log(_this.vehsno.length);
            for (var i_2 = 0; i_2 < _this.vehsno.length; i_2++) {
                _this.VehicleTD[_this.counter][i_2] = {
                    sno: _this.vehsno[i_2],
                    vtype: _this.vehtype[i_2],
                    dissno: _this.DispSno[i_2],
                    availability: _this.vehAvail[i_2]
                };
                console.log('Vehicle TD -----');
                console.log(JSON.stringify(_this.VehicleTD));
            }
        }, function (err) {
            console.log(err);
        });
    }; //end of getVehicles
    AddjobPage.prototype.UpdateSelectedOpVeh = function (Selected) {
        for (var i = 0; i < Selected.length; i++) {
            if (this.selectedOp.indexOf(Selected[i].Opname) < 0) {
                this.selectedOp.push(Selected[i].Opname);
            }
            if (this.selectedVeh.indexOf(Selected[i].Vehtype) < 0) {
                this.selectedVeh.push(Selected[i].Vehtype);
            }
        }
    };
    AddjobPage.prototype.ValidateDate = function (event) {
        var datefrom = (this.form.value.DateFrom);
        var dateto = (this.form.value.DateTo);
        if (dateto == '' || datefrom == '') {
            this.appprov.presentAlert('Error', 'Please Select Date From and Date to to continue');
        }
        if (datefrom > dateto || dateto < datefrom) {
            this.appprov.presentAlert('Error', 'Please make sure Date from is earlier than date to and vice versa');
        }
    };
    AddjobPage.prototype.close = function () {
        this.viewctrl.dismiss('1');
    };
    AddjobPage.prototype.LoadOpCheck = function () {
        var valueCheck = 0;
        var nullcheck = 0;
        var datefrom = (this.form.value.DateFrom);
        var dateto = (this.form.value.DateTo);
        console.log(datefrom);
        console.log(dateto);
        if (datefrom != '' && dateto != '') {
            nullcheck = 1;
        }
        if (datefrom <= dateto && dateto >= datefrom) {
            valueCheck = 1;
        }
        if (nullcheck == 1 && valueCheck == 1) {
            this.getOperators(datefrom.toString(), dateto.toString());
            this.getVehicles(datefrom.toString(), dateto.toString());
        }
    };
    AddjobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addjob',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/addjob/addjob.html"*/'<!--\n\n  Generated template for the AddjobPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-title>{{ title }}</ion-title> \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<!--The add job page in owner job management tab-->\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="form" (ngSubmit)="manage(form.value)">\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ client }}</ion-label>\n\n      <ion-input type="text" formControlName =\'ClientName\'></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ project_earning }}</ion-label>\n\n      <ion-input type="number" formControlName =\'PayOut\'></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ location }}</ion-label>\n\n      <ion-input type="text" formControlName =\'Loc\'></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ date_from }}</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" formControlName =\'DateFrom\' (ionChange)="LoadOpCheck()" max="2050-12-30" min="2018"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ date_to }}</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" formControlName =\'DateTo\' (ionChange)="LoadOpCheck()" max="2050-12-30" min="2018"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ description }}</ion-label>\n\n      <ion-input type="text" formControlName =\'Desc\'></ion-input>\n\n  </ion-item>\n\n\n\n\n\n  \n\n    <div formArrayName="OpVehPay" margin-bottom>\n\n      <section [formGroupName]="i" *ngFor="let opvp of form.controls.OpVehPay.controls; let i = index">\n\n        <ion-item-group>\n\n          <ion-item-divider color="light"> {{ operator_vehicle }} {{i+1}}           \n\n            <span float-right ion-button icon-left clear \n\n            *ngIf="form.controls.OpVehPay.length > 1" (click)="removeInputField(i)">\n\n              <ion-icon name="close"></ion-icon>\n\n            </span></ion-item-divider>\n\n          <ion-item>\n\n            <ion-label floating>{{ operator_name }}:</ion-label>\n\n            <ion-select formControlName="Opname" (click)="ValidateDate($event)">\n\n              <ion-option *ngFor="let op of OpTD[i+1]; let k = index" value="{{op.email}}">\n\n                {{op.name}} &nbsp; - &nbsp;{{op.availbility}}\n\n              </ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label floating>{{vehicle}}:</ion-label>\n\n              <ion-select formControlName="Vehtype">\n\n                  <ion-option *ngFor="let veh of VehicleTD[i+1]" value="{{veh.sno}}">{{veh.dissno}} - {{veh.vtype}} - {{veh.availability}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n\n\n        </ion-item-group>\n\n      </section>\n\n    </div>\n\n    <span ion-button float-left icon-left clear\n\n      (click)="addNewInputField()">{{ add }}</span>\n\n\n\n   <button ion-button block [disabled]="!form.valid" style="visibility: hidden">{{ submit }}</button>\n\n\n\n  </form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button full (click) = "manage(form.value)" [disabled]="!form.valid">{{ submit }}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/addjob/addjob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], AddjobPage);
    return AddjobPage;
}());

//# sourceMappingURL=addjob.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_apiurls_serverurls_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_editjob_editjob__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the JobinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobinfoPage = /** @class */ (function () {
    function JobinfoPage(navCtrl, appprov, storage, navParams, alertCtrl, view, camera, gloc, iab, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.appprov = appprov;
        this.storage = storage;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this.camera = camera;
        this.gloc = gloc;
        this.iab = iab;
        this._translate = _translate;
        this.photos = [];
        this.buttonDisabled = true;
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.jid = navParams.get('jid');
                _this.retrieveJobDetails(_this.jid);
                _this.retrieveJobOperators(_this.jid);
                _this.getJobCards(_this.jid, '3');
                _this._initializeTranslation();
            }
        });
    }
    JobinfoPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    JobinfoPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    JobinfoPage.prototype._initializeTranslation = function () {
        this.txtitle = this._translate.instant("jobinfo.txtitle");
        this.complete_job = this._translate.instant("jobinfo.complete_job");
        this.reports = this._translate.instant("jobinfo.reports");
        this.past = this._translate.instant("jobinfo.past");
        this.days = this._translate.instant("jobinfo.days");
        this.all = this._translate.instant("jobinfo.all");
        this.cancel = this._translate.instant("jobinfo.cancel");
        this.completemsgtitle = this._translate.instant("jobinfo.completemsgtitle");
        this.completemsg = this._translate.instant("jobinfo.completemsg");
    };
    JobinfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
        });
        this.storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.jid = _this.navParams.get('jid');
                _this.retrieveJobDetails(_this.jid);
                _this.retrieveJobOperators(_this.jid);
                _this.getJobCards(_this.jid, '3');
            }
        });
    };
    JobinfoPage.prototype.getJobCards = function (jid, no_of_days) {
        var _this = this;
        console.log("getting job card method called");
        this.appprov.getJobCards(this.access_token, jid, no_of_days).then(function (res) {
            console.log(JSON.stringify(res));
            _this.report_cards = res;
            _this.report_imgs = _this.report_cards.img_urls;
            _this.report_descs = _this.report_cards.job_descs;
            _this.report_locations = _this.report_cards.locations;
            _this.report_operator_names = _this.report_cards.operator_names;
            _this.report_serial_nos = _this.report_cards.serial_nos;
            _this.report_model_nos = _this.report_cards.model_nos;
            _this.report_vehicle_types = _this.report_cards.vehicle_types;
            _this.report_faults = _this.report_cards.faults;
            _this.ReportCards = [];
            if (_this.report_imgs != undefined || _this.report_imgs != null) {
                for (var i = 0; i < _this.report_imgs.length; i++) {
                    _this.ReportCards.push({
                        report_img: __WEBPACK_IMPORTED_MODULE_6__app_apiurls_serverurls_js__["a" /* apiKey */].slice(0, -1) + _this.report_imgs[i].toString(),
                        report_desc: _this.report_descs[i],
                        report_location: _this.report_locations[i],
                        report_operator_name: _this.report_operator_names[i],
                        report_serial_no: _this.report_serial_nos[i],
                        report_model_no: _this.report_model_nos[i],
                        report_vehicle_type: _this.report_vehicle_types[i],
                        report_fault: _this.report_faults[i],
                    });
                }
                console.log(_this.ReportCards);
                console.log("Job card retrieved");
            }
            else {
                console.log("No report Card");
            }
        }, function (err) {
            console.log(err);
        });
    };
    JobinfoPage.prototype.retrieveJobOperators = function (jid) {
        var _this = this;
        this.appprov.retrieveJobOperators(this.access_token, jid).then(function (res) {
            _this.operators = res;
            console.log(res);
            _this.profile_url = _this.operators.profileUrl;
            console.log(_this.profile_url);
            _this.name = _this.operators.names;
            _this.vehicle_url = _this.operators.vehicles_url;
            _this.jobOperators = [];
            if (_this.profile_url != undefined || _this.profile_url != null) {
                for (var i = 0; i < _this.profile_url.length; i++) {
                    _this.jobOperators.push({
                        profile_url: _this.profile_url[i],
                        name: _this.name[i],
                        vehicle_url: _this.vehicle_url[i]
                    });
                }
                console.log("Job details retrieved");
            }
            else {
                console.log("No Operators");
            }
        }, function (err) {
            console.log(err);
        });
    };
    JobinfoPage.prototype.retrieveJobDetails = function (jid) {
        var _this = this;
        this.appprov.retrieveJobDetails(this.access_token, jid).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            console.log("Job details retrieved");
            _this.jid = data['jid'];
            _this.payout = data['payout'];
            _this.date_from = data['date_from'].substring(0, 10);
            _this.date_to = data['date_to'].substring(0, 10);
            _this.location = data['location'];
            _this.description = data['description'];
            _this.title = data['title'];
            _this.completed = data['completed'];
            if (_this.completed == '1') {
                _this.buttonDisabled = true;
                _this.buttonColor = 'secondary';
            }
            else {
                _this.buttonDisabled = false;
                _this.buttonColor = 'danger';
            }
        }, function (err) {
            console.log(err);
        });
    };
    JobinfoPage.prototype.completeJob = function () {
        var _this = this;
        console.log("job completed");
        console.log(this.buttonDisabled);
        var alert = this.alertCtrl.create({
            title: this.completemsgtitle,
            message: this.completemsg,
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.buttonColor = 'secondary';
                        _this.buttonDisabled = true;
                        _this.updateJobComplete();
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    };
    JobinfoPage.prototype.updateJobComplete = function () {
        this.appprov.updateJobComplete(this.access_token, this.jid).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            console.log("Job completed");
        }, function (err) {
            console.log(err);
        });
    };
    JobinfoPage.prototype.editJob = function () {
        console.log("editing");
        // this.navCtrl.push(EditjobPage, {'jid':this.jid, 'access_token':this.access_token});
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_editjob_editjob__["a" /* EditjobPage */], { 'access_token': this.access_token, 'jid': this.jid });
    };
    JobinfoPage.prototype.onSelectChange = function (selectedValue) {
        console.log('Selected', selectedValue);
        this.getJobCards(this.jid, selectedValue);
    };
    JobinfoPage.prototype.ionViewDidEnter = function () {
        this._initializeTranslation();
    };
    JobinfoPage.prototype.openMap = function (loc) {
        console.log('https://www.google.com/maps/@' + loc + ',16z');
        var browser = this.iab.create('https://www.google.com/maps/@' + loc + ',16z', '_blank');
    };
    JobinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-jobinfo',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/jobinfo/jobinfo.html"*/'<!--\n\n  Generated template for the JobinfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ txtitle }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <h2>{{title}}</h2>\n\n      </ion-col>\n\n      <ion-col>\n\n          <ion-icon name="create" (click)=editJob();></ion-icon>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button color={{buttonColor}} [disabled]="buttonDisabled" (click)=completeJob();>{{ complete_job }}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-7>\n\n        {{date_from}} - {{date_to}}\n\n      </ion-col>\n\n      <ion-col col-5>\n\n        $ &nbsp;{{payout}}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      {{location}}\n\n    </ion-row>\n\n    <ion-row>\n\n      {{description}}\n\n    </ion-row>\n\n  </ion-grid>\n\n<br>\n\n\n\n  <ion-list>\n\n      <ion-grid>\n\n          <ion-item *ngFor="let jobOperator of jobOperators">\n\n            <ion-row class="bottomRow">\n\n              <ion-col col-3>\n\n                  <ion-avatar>\n\n                    <img [src] = jobOperator.profile_url >\n\n                  </ion-avatar>\n\n              </ion-col>\n\n              <ion-col col-7>\n\n                {{ jobOperator.name }} \n\n                </ion-col>\n\n                <ion-col col-2>\n\n                <img [src] = jobOperator.vehicle_url style="width:4rem; height:4rem"> \n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-item>    \n\n        </ion-grid>\n\n  </ion-list>\n\n\n\n  <br>\n\n  <h3>{{ reports }}</h3>\n\n  <ion-item>\n\n    <ion-label></ion-label>\n\n    <ion-select [(ngModel)]="duration" (ionChange)="onSelectChange($event)">\n\n      <ion-option value="3" [selected]="true">{{ past }} 3 {{ days }}</ion-option>\n\n      <ion-option value="7">{{ past }} 7 {{ days }}</ion-option>\n\n      <ion-option value="30">{{ past }} 30 {{ days }}</ion-option>\n\n      <ion-option value="1">{{ all }}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <ion-card *ngFor="let report of ReportCards">\n\n    <ion-card-content>\n\n      {{report.report_operator_name}}<br>\n\n      <ion-icon name="pin"></ion-icon> &nbsp; <a href="#" (click)= "openMap(report.report_location)">{{report.report_location}}</a>\n\n      <img [src]=report.report_img><br> \n\n      {{report.report_desc}}<br>\n\n      {{report.report_vehicle_type}} &nbsp;&nbsp;&nbsp; ({{report.report_serial_no}}&nbsp;-&nbsp;{{report.report_model_no}})<br>\n\n      <font color="red">{{report.report_fault}}</font>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/jobinfo/jobinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]])
    ], JobinfoPage);
    return JobinfoPage;
}());

//# sourceMappingURL=jobinfo.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditjobPage = /** @class */ (function () {
    function EditjobPage(navCtrl, navParams, _FB, appprov, storage, viewctrl, _translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._FB = _FB;
        this.appprov = appprov;
        this.storage = storage;
        this.viewctrl = viewctrl;
        this._translate = _translate;
        // storage.ready().then(() => {
        // });
        // storage.get('access_token').then((val) => {
        //   if (val == null){
        //     console.log("No acccess token");
        //     this.navCtrl.setRoot(LoginPage);
        //   }
        //   else{
        //     console.log("Got access token");
        //     this.access_token = val.toString();
        //     this.jid = navParams.get('jid');
        //     this.getJobInfo();  
        //   }
        // });
        this.jid = navParams.get('jid');
        this.access_token = navParams.get('access_token');
        this.VehicleTD = [];
        this.OpTD = [];
        this.selectedOp = [];
        this.selectedVeh = [];
        this.counter = 0;
        this.form = this._FB.group({
            ClientName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            PayOut: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Loc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            DateFrom: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            DateTo: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Desc: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            OpVehPay: this._FB.array([
                this.initOpVehPay()
            ])
        });
        this.getJobInfo();
        this._initializeTranslation();
    }
    EditjobPage.prototype.ionViewDidEnter = function () {
        this._initializeTranslation();
    };
    EditjobPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    EditjobPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    EditjobPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("addjob.title");
        this.client = this._translate.instant("addjob.client");
        this.project_earning = this._translate.instant("addjob.project_earning");
        this.date_from = this._translate.instant("addjob.date_from");
        this.date_to = this._translate.instant("addjob.date_to");
        this.description = this._translate.instant("addjob.description");
        this.operator_vehicle = this._translate.instant("addjob.operator_vehicle");
        this.operator_name = this._translate.instant("addjob.operator_name");
        this.vehicle = this._translate.instant("addjob.vehicle");
        this.submit = this._translate.instant("addjob.submit");
        this.add = this._translate.instant("addjob.add");
        this.back = this._translate.instant("addjob.back");
        this.addjobmsgtitle = this._translate.instant("addjob.addjobmsgtitle");
        this.addjobmsg = this._translate.instant("addjob.addjobmsg");
        this.update = this._translate.instant("addjob.update");
    };
    EditjobPage.prototype.getJobInfo = function () {
        var _this = this;
        this.appprov.getJobInfo(this.access_token, this.jid).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            console.log("Job details retrieved");
            _this.Client_Name = data['Client_Name'];
            _this.Earning = data['Earning'];
            // console.log("Earning got: " + this.Earning);
            _this.locatio = data['location'];
            _this.date_from_ = data['date_from'];
            _this.date_to_ = data['date_to'];
            _this.description_ = data['description'];
        }, function (err) {
            console.log(err);
        });
    };
    /*Operator & vehicle pay*/
    EditjobPage.prototype.initOpVehPay = function () {
        this.counter++;
        this.getOperators(this.access_token);
        return this._FB.group({
            Opname: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Vehtype: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
        });
    };
    EditjobPage.prototype.addNewInputField = function () {
        if (this.form.valid) {
            this.UpdateSelectedOpVeh(this.form.value.OpVehPay);
            var control = this.form.controls.OpVehPay;
            control.push(this.initOpVehPay());
        }
        else {
            console.log('Nope');
        }
    };
    EditjobPage.prototype.removeInputField = function (i) {
        var control = this.form.controls.OpVehPay;
        control.removeAt(i);
    };
    EditjobPage.prototype.manage = function (val) {
        var _this = this;
        var result;
        console.log(val);
        // console.log(val.OpVehPay)
        this.appprov.updateJob(this.access_token, val.PayOut, val.DateFrom.toString(), val.DateTo.toString(), val.Loc, val.Desc, val.ClientName, this.jid)
            .then(function (res) {
            console.log(res);
            result = res;
            var operatorjobs = val.OpVehPay;
            var names = [];
            var vehicles = [];
            for (var i = 0; i < operatorjobs.length; i++) {
                names[i] = operatorjobs[i].Opname;
                vehicles[i] = operatorjobs[i].Vehtype;
            }
            _this.appprov.updateOperatorJob(_this.access_token, result.jid, names, vehicles).then(function (res) {
                _this.appprov.presentAlert('Sucess!', 'Job Has been sucessfully updated!');
                _this.viewctrl.dismiss('1');
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    EditjobPage.prototype.getEmail = function () {
        var _this = this;
        this.appprov.getemail().then(function (res) {
            _this.UsrEmail = res;
            _this.getOperators(res.toString());
            console.log("Email is: " + _this.UsrEmail);
        }, function (err) {
            console.log(err);
        });
    };
    EditjobPage.prototype.getOperators = function (email) {
        var _this = this;
        this.OpTD[this.counter] = [];
        this.appprov.getOperatorNames(this.access_token, this.date_from_, this.date_to_).then(function (res) {
            console.log("no error");
            _this.OpList = res;
            console.log(_this.OpList);
            _this.opname = _this.OpList.operators;
            console.log(_this.opname);
            _this.opemail = _this.OpList.emails;
            console.log(_this.opemail);
            var i = _this.opemail.length;
            while (i--) {
                if (_this.selectedOp.indexOf(_this.opemail[i]) > -1) {
                    _this.opemail.splice(i, 1);
                    _this.opname.splice(i, 1);
                }
            }
            for (var i_1 = 0; i_1 < _this.opemail.length; i_1++) {
                _this.OpTD[_this.counter][i_1] = {
                    email: _this.opemail[i_1],
                    name: _this.opname[i_1]
                };
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditjobPage.prototype.getVehicles = function (email) {
        var _this = this;
        this.VehicleTD[this.counter] = [];
        this.appprov.getOperatorVehicles(this.access_token, this.date_from_, this.date_to_).then(function (res) {
            console.log('1');
            console.log(JSON.stringify(res));
            _this.DispSno = [];
            _this.VehList = res;
            _this.vehsno = _this.VehList.vehsno;
            _this.vehtype = _this.VehList.vehtype;
            _this.vehModel = _this.VehList.model_no;
            var i = _this.vehsno.length;
            console.log('2');
            for (var k = 0; k < i; k++) {
                _this.DispSno.push(_this.vehsno[k]);
                var concat = _this.vehsno[k].toString() + '==**8**-' + _this.vehModel[k].toString();
                _this.vehsno[k] = concat;
            }
            console.log('3');
            // while(i--){
            //   if(this.selectedVeh.indexOf(this.vehsno[i]) > -1){
            //     this.vehsno.splice(i,1);
            //     this.vehtype.splice(i,1);
            //     // this.DispSno.splice(i,1);
            //   }
            // }
            console.log('4');
            console.log(_this.vehsno.length);
            for (var i_2 = 0; i_2 < _this.vehsno.length; i_2++) {
                _this.VehicleTD[_this.counter][i_2] = {
                    sno: _this.vehsno[i_2],
                    vtype: _this.vehtype[i_2],
                    dissno: _this.DispSno[i_2]
                };
                console.log('Vehicle TD -----');
                console.log(JSON.stringify(_this.VehicleTD));
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditjobPage.prototype.UpdateSelectedOpVeh = function (Selected) {
        for (var i = 0; i < Selected.length; i++) {
            if (this.selectedOp.indexOf(Selected[i].Opname) < 0) {
                this.selectedOp.push(Selected[i].Opname);
            }
            if (this.selectedVeh.indexOf(Selected[i].Vehtype) < 0) {
                this.selectedVeh.push(Selected[i].Vehtype);
            }
        }
    };
    EditjobPage.prototype.test = function (event) {
        this.getVehicles(event);
    };
    EditjobPage.prototype.close = function () {
        this.viewctrl.dismiss('1');
    };
    EditjobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editjob',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/editjob/editjob.html"*/'<!--\n\n  Generated template for the AddjobPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <ion-title>{{ title }}</ion-title> \n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <form [formGroup]="form" (ngSubmit)="manage(form.value)">\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ client }}</ion-label>\n\n      <ion-input type="text" formControlName =\'ClientName\' value= {{Client_Name}}></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ project_earning }}</ion-label>\n\n      <ion-input type="number" formControlName =\'PayOut\' value= {{Earning}}></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ location }}</ion-label>\n\n      <ion-input type="text" formControlName =\'Loc\' value = {{locatio}}></ion-input>\n\n  </ion-item>\n\n \n\n  <ion-item>\n\n      <ion-label stacked>{{ date_from }}</ion-label>\n\n      <ion-datetime displayFormat="YYYY/MM/DD" formControlName =\'DateFrom\' [(ngModel)]="date_from_" max="2050-12-30" min="2018"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ date_to }}</ion-label>\n\n      <ion-datetime displayFormat="YYYY/MM/DD" formControlName =\'DateTo\' [(ngModel)]="date_to_" max="2050-12-30" min="2018"></ion-datetime>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n      <ion-label stacked>{{ description }}</ion-label>\n\n      <ion-input type="text" formControlName =\'Desc\' value={{description}}></ion-input>\n\n  </ion-item>\n\n\n\n    <div formArrayName="OpVehPay" margin-bottom>\n\n      <section [formGroupName]="i" *ngFor="let opvp of form.controls.OpVehPay.controls; let i = index">\n\n        <ion-item-group>\n\n          <ion-item-divider color="light"> {{ operator_vehicle }} {{i+1}}           \n\n            <span float-right ion-button icon-left clear \n\n            *ngIf="form.controls.OpVehPay.length > 1" (click)="removeInputField(i)">\n\n              <ion-icon name="close"></ion-icon>\n\n            </span></ion-item-divider>\n\n          <ion-item>\n\n            <ion-label floating>{{ operator_name }}:</ion-label>\n\n            <ion-select formControlName="Opname" (ionChange)="test($event)">\n\n              <ion-option *ngFor="let op of OpTD[i+1]; let k = index" value="{{op.email}}">{{op.name}}</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n\n\n          <ion-item>\n\n              <ion-label floating>{{ vehicle }}:</ion-label>\n\n              <ion-select formControlName="Vehtype">\n\n                  <ion-option *ngFor="let veh of VehicleTD[i+1]" value="{{veh.sno}}">{{veh.dissno}} - {{veh.vtype}}</ion-option>\n\n              </ion-select>\n\n          </ion-item>\n\n\n\n        </ion-item-group>\n\n      </section>\n\n    </div>\n\n    <span ion-button float-left icon-left clear\n\n      (click)="addNewInputField()">{{ add }}</span>\n\n\n\n   <button ion-button block [disabled]="!form.valid" style="visibility: hidden">{{ submit }}</button>\n\n\n\n  </form>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n    <button ion-button full (click) = "manage(form.value)" [disabled]="!form.valid">{{ update }}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/editjob/editjob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], EditjobPage);
    return EditjobPage;
}());

//# sourceMappingURL=editjob.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorhomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updatecapop_updatecapop__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the OperatorhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OperatorhomePage = /** @class */ (function () {
    function OperatorhomePage(navCtrl, http, authService, alertCtrl, navParams, appprov, storage, popO, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.storage = storage;
        this.popO = popO;
        this._translate = _translate;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        storage.ready().then(function () {
        });
        //storage.clear();
        // storage.set('access_token', 'accessop');
        //storage.set('access_token', 'accesstokenop');
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                //this.navCtrl.setRoot(LoginPage);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.getUserInfo();
                _this.getOperatorJoblist();
                _this.getCapabilities();
                _this._initializeTranslation();
            }
        });
    } //end of constructor
    /*app starts here. All are functions
    */
    OperatorhomePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad OperatorhomePage');
        this._initializeTranslation();
    };
    OperatorhomePage.prototype.ionViewWillEnter = function () {
        this.getUserInfo();
        this.getOperatorJoblist();
    };
    OperatorhomePage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    OperatorhomePage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    OperatorhomePage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("operatorhome.title");
        this.welcome = this._translate.instant("operatorhome.welcome");
        this.forecast = this._translate.instant("operatorhome.forecast");
        this.jobstats = this._translate.instant("operatorhome.jobstats");
        this.fleet = this._translate.instant("operatorhome.fleet");
        this.skill_sets = this._translate.instant("operatorhome.skill_sets");
    };
    OperatorhomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    OperatorhomePage.prototype.onEventSelected = function (event) {
        console.log("Event selected:" + event.startTime + '-' + event.endTime + "," + event.title);
    };
    OperatorhomePage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    OperatorhomePage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    OperatorhomePage.prototype.onTimeSelected = function (ev) {
        console.log("Selected time: " + ev.selectedTime + ", hasEvents: " + (ev.events !== undefined && ev.events.length !== 0) + ", disabled: " + ev.disabled);
    };
    OperatorhomePage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    OperatorhomePage.prototype.getUserInfo = function () {
        var _this = this;
        this.authService.getUserinfo(this.access_token).then(function (result) {
            _this.userinfo = result;
            _this.userinfo = JSON.parse(_this.userinfo._body);
            _this.Uemail = _this.userinfo.email;
            _this.Unum = _this.userinfo.phone_no;
            _this.Uname = _this.userinfo.name;
            _this.uimg = _this.userinfo.profile_image_url;
            _this.Ucompany = _this.userinfo.company_name;
            _this.Ucompanyadd = _this.userinfo.company_add;
            _this.appprov.setemail(_this.userinfo.email);
        }, function (err) {
            console.log(err);
        });
    };
    OperatorhomePage.prototype.getOperatorJoblist = function () {
        var _this = this;
        this.appprov.getOperatorJoblist(this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            var job_desc = data['job_desc'];
            var job_datefrom = data['job_datefrom'];
            var job_dateto = data['job_dateto'];
            console.log(job_dateto);
            var job = { 'job_desc': job_desc, 'job_dateto': job_dateto, 'job_datefrom': job_datefrom };
            console.log(job);
            _this.loadEvents(job);
            _this.plotSchedule(job);
            _this.getJobStats({ 'date_from': job_datefrom });
        }, function (err) {
            console.log(err);
        });
    };
    OperatorhomePage.prototype.loadEvents = function (job) {
        this.eventSource = this.plotSchedule(job);
    };
    OperatorhomePage.prototype.plotSchedule = function (jobs) {
        var job = [];
        var dates_from = jobs.job_datefrom;
        var dates_to = jobs.job_dateto;
        var jids = jobs.job_desc;
        var today = new Date();
        for (var i = 0; i < dates_from.length; i++) {
            // var temp = parseInt(dates_to[i].substring(8,10), 10) + 1;
            // dates_to[i] = temp+dates_to[i].substring(5,7)+dates_to[i].substring(0,4);
            // var d = dates_from[i].substring(4,8)+"/"+dates_from[i].substring(0,2)+"/"+dates_from[i].substring(2,4);
            var start_day = new Date(Date.UTC(dates_from[i].substring(0, 4), dates_from[i].substring(5, 7) - 1, parseInt(dates_from[i].substring(8, 10), 10) + 1));
            var end_day = new Date(Date.UTC(dates_to[i].substring(0, 4), dates_to[i].substring(5, 7) - 1, parseInt(dates_to[i].substring(8, 10), 10) + 1));
            console.log("pushing job");
            job.push({
                title: jids[i],
                startTime: start_day,
                endTime: end_day,
                allDay: true
            });
        }
        return job;
    };
    OperatorhomePage.prototype.SwithProfile = function () {
        this.storage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    OperatorhomePage.prototype.getCapabilities = function () {
        var _this = this;
        this.capabilities = [];
        this.appprov.getOpCapabilities(this.access_token.toString()).then(function (res) {
            var caps = JSON.stringify(res);
            caps = JSON.parse(caps);
            var urls = caps['vehicle_url'];
            var types = caps['vehicle_type'];
            for (var i = 0; i < urls.length; i++) {
                _this.capabilities.push({
                    vehicle_url: urls[i],
                    vehicle_type: types[i]
                });
            }
        });
    };
    OperatorhomePage.prototype.showCap = function () {
        var _this = this;
        var popover = this.popO.create(__WEBPACK_IMPORTED_MODULE_3__updatecapop_updatecapop__["a" /* UpdatecapopPage */]);
        popover.present();
        popover.onDidDismiss(function () { return _this.getCapabilities(); });
    };
    OperatorhomePage.prototype.getJobStats = function (jobs) {
        //add label x-axis
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var today = new Date();
        var month = today.getUTCMonth();
        var labels_month = [];
        var month_range = 4;
        for (var i = 0; i < month_range; i++) {
            labels_month.push(months[(month + 12 - i) % 12]);
        }
        labels_month.reverse();
        for (var i = 1; i < month_range; i++) {
            labels_month.push(months[(month + 12 + i) % 12]);
        }
        /*
        //Old codes
        var labels_end = month-6;
        for (let i = 0; i<6; i++){
          labels_month.push(months[month-5+i]);
        }
        */
        // add data y-axis
        var date_from = jobs.date_from;
        var data_y = [0, 0, 0, 0, 0, 0];
        for (var j = 0; j < date_from.length; j++) {
            var temp = parseInt(date_from[j].substring(5, 7), 10);
            for (var p = 0; p < 6; p++) {
                if ((temp - 1) == (month - p)) {
                    data_y[5 - p] += 1;
                }
            }
        }
        this.barChart = new __WEBPACK_IMPORTED_MODULE_8_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: labels_month,
                datasets: [{
                        label: "Job Statistics",
                        data: data_y,
                        backgroundColor: "rgba(0, 110,255, 0.2)",
                        borderColor: "rbga(0, 110, 255, 1)",
                        borderWidth: 1
                    }]
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], OperatorhomePage.prototype, "barCanvas", void 0);
    OperatorhomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-operatorhome',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/operatorhome/operatorhome.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n  <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>\n\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <ion-avatar>\n\n          <img [src] = "uimg">\n\n        </ion-avatar>\n\n      </ion-col>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-7> \n\n          <b style="font-size:1.4em"> {{ welcome }}, {{Uname}} </b>\n\n          <b style="font-size:1.1em">{{Uemail}}</b>\n\n          <br><b style="font-size:1em">{{Unum}}</b>\n\n      </ion-col>          \n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col><a href="#" (click)="SwithProfile()">Switch Profile (Developement only)</a></ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col><h3>{{ skill_sets }}&nbsp;  <ion-icon name="create" (click)="showCap($event)"></ion-icon></h3></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col *ngFor="let veh of capabilities">\n\n          <img [src] = veh.vehicle_url style="width:6rem; height:6rem">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  \n\n  <h2>{{ forecast }}</h2>\n\n\n\n\n\n\n\n  <!-- <ion-buttons end>\n\n    <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n    <button ion-button (click)="changeMode(\'month\')">M</button>\n\n    <button ion-button (click)="changeMode(\'week\')">W</button>\n\n    <button ion-button (click)="changeMode(\'day\')">D</button>\n\n    <button ion-button (click)="loadEvents()">Load Events</button>\n\n  </ion-buttons> -->\n\n  <div padding>\n\n  <h3 align="center">{{viewTitle}}</h3>\n\n    <calendar [eventSource] = "eventSource"\n\n              [calendarMode] = "calendar.mode"\n\n              [currentDate] = "calendar.currentDate"\n\n              (onCurrentDateChanged) = "onCurrentDateChanged($event)"\n\n              (onEventSelected) = "onEventSelected($event)"\n\n              (onTitleChanged) = "onViewTitleChanged($event)"\n\n              (onTimeSelected) = "onTimeSelected($event)"\n\n              step="30">\n\n    </calendar>\n\n  </div>\n\n  \n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{ jobstats }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/operatorhome/operatorhome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], OperatorhomePage);
    return OperatorhomePage;
}()); //class OperatorhomePage

//# sourceMappingURL=operatorhome.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatecapopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_apiurls_serverurls_js__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the UpdatecapopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatecapopPage = /** @class */ (function () {
    function UpdatecapopPage(navCtrl, navParams, storage, appprov, viewCtrl, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.appprov = appprov;
        this.viewCtrl = viewCtrl;
        this._translate = _translate;
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log(_this.access_token);
                console.log("No acccess token");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            }
            else {
                //the url to display the image icon of the vehicles is the public DNS of AWS instance
                var vehurl = [__WEBPACK_IMPORTED_MODULE_6__app_apiurls_serverurls_js__["a" /* apiKey */] + 'static/vehicles/compactor.png',
                    __WEBPACK_IMPORTED_MODULE_6__app_apiurls_serverurls_js__["a" /* apiKey */] + 'static/vehicles/Excavator.png',
                    __WEBPACK_IMPORTED_MODULE_6__app_apiurls_serverurls_js__["a" /* apiKey */] + 'static/vehicles/loader.png',
                    __WEBPACK_IMPORTED_MODULE_6__app_apiurls_serverurls_js__["a" /* apiKey */] + 'static/vehicles/truck.png'];
                var vehtype = ['Compactor', 'Excavator', 'Loader', 'Truck'];
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.vehicles = [];
                _this.capabilities = [];
                for (var i = 0; i < vehurl.length; i++) {
                    _this.vehicles.push({
                        vehicle_url: vehurl[i],
                        vehicle_type: vehtype[i]
                    });
                }
                _this._initializeTranslation();
            }
        });
    }
    UpdatecapopPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad UpdatecapopPage');
        this._initializeTranslation();
    };
    UpdatecapopPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    UpdatecapopPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    UpdatecapopPage.prototype._initializeTranslation = function () {
        this.skill_sets = this._translate.instant("operatorhome.skill_sets");
        this.submit = this._translate.instant("opjobdetails.submit");
    };
    UpdatecapopPage.prototype.selectVehicle = function (data) {
        if (data.checked == true) {
            if (!(this.capabilities.indexOf(data.vehicle_type) > -1)) {
                this.capabilities.push(data.vehicle_type);
            }
        }
        else {
            if (this.capabilities.indexOf(data.vehicle_type) > -1) {
                var index = this.capabilities.indexOf(data.vehicle_type, 0);
                this.capabilities.splice(index, 1);
            }
        }
        console.log(this.capabilities.toString());
    };
    UpdatecapopPage.prototype.UpdateCap = function () {
        var _this = this;
        console.log(this.access_token);
        console.log(this.capabilities.toString());
        this.appprov.UpdateCapabilities(this.access_token, this.capabilities.toString()).then(function (res) {
            _this.appprov.presentAlert('Success!', 'Skillsets successfully updated!');
            _this.close();
        });
    };
    UpdatecapopPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    UpdatecapopPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-updatecapop',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/updatecapop/updatecapop.html"*/'\n\n<ion-content>\n\n    <ion-list no-lines>\n\n        <ion-list-header>\n\n        {{ skill_sets }}\n\n        </ion-list-header>\n\n        <ion-item *ngFor="let veh of vehicles">\n\n          <ion-avatar item-left>\n\n            <!--<img src ="assets/imgs/VolvoLogo.png" style="width:6rem; height:6rem" alt = "Compactor">-->  \n\n            <img [src] = veh.vehicle_url style="width:6rem; height:6rem" alt = "Compactor">\n\n          </ion-avatar>\n\n          <ion-label></ion-label>\n\n          <ion-checkbox [(ngModel)]="veh.checked" item-right check="false" (click)="selectVehicle(veh)"></ion-checkbox>\n\n        </ion-item>\n\n      </ion-list>\n\n</ion-content>\n\n<ion-footer>\n\n    <button full ion-button (click)="UpdateCap()">{{ submit }}</button>\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/updatecapop/updatecapop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], UpdatecapopPage);
    return UpdatecapopPage;
}());

//# sourceMappingURL=updatecapop.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorjobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__opjobdetails_opjobdetails__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the OperatorjobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OperatorjobPage = /** @class */ (function () {
    function OperatorjobPage(navCtrl, navParams, appprov, storage, modalCtrl, alertCtrl, camera, androidPermissions, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.androidPermissions = androidPermissions;
        this._translate = _translate;
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.job = "Ongoing";
                _this.retrievePastJobs();
                _this.retrieveOngoingJobs();
                _this.retrieveUpcomingJobs();
                _this._initializeTranslation();
            }
        });
    }
    OperatorjobPage.prototype.ionViewDidEnter = function () {
        console.log("this is jobs page");
        this.retrievePastJobs();
        this.retrieveOngoingJobs();
        this.retrieveUpcomingJobs();
        this._initializeTranslation();
    };
    OperatorjobPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    OperatorjobPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    OperatorjobPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("operatorjob.title");
        this.history = this._translate.instant("operatorjob.history");
        this.txongoing = this._translate.instant("operatorjob.txongoing");
        this.upcomming = this._translate.instant("operatorjob.upcomming");
    };
    OperatorjobPage.prototype.retrievePastJobs = function () {
        var _this = this;
        var totalPayout = 0;
        this.appprov.retrievePastJobsOps(this.access_token).then(function (res) {
            _this.past = res;
            _this.pastJid = _this.past.jid;
            _this.pastTitle = _this.past.title;
            _this.past_description = _this.past.description;
            _this.past_date_from = _this.past.date_from;
            _this.past_date_to = _this.past.date_to;
            _this.past_location = _this.past.location;
            _this.past_payout = _this.past.payout;
            _this.pastJobs = [];
            for (var i = 0; i < _this.pastTitle.length; i++) {
                totalPayout += parseInt(_this.past.payout[i], 10);
            }
            try {
                for (var i = 0; i < _this.pastTitle.length; i++) {
                    _this.pastJobs.push({
                        jid: _this.pastJid[i],
                        title: _this.pastTitle[i],
                        description: _this.past_description[i],
                        date_from: _this.past_date_from[i].substring(0, 10),
                        date_to: _this.past_date_to[i].substring(0, 10),
                        location: _this.past_location[i],
                        payout: _this.past_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Past job cannot retrieve length");
            }
            console.log("pastTitle: " + _this.pastTitle);
            console.log("pastPayout: " + _this.past_payout);
            console.log("1st Payout: " + _this.past_payout[0] + " 2ndPayout: " + _this.past_payout[1]);
            console.log("Get the total pastPayout: " + totalPayout);
            console.log("History job pushed");
        }, function (err) {
            console.log(err);
        });
    };
    OperatorjobPage.prototype.retrieveOngoingJobs = function () {
        var _this = this;
        this.appprov.retrieveOngoingJobsOps(this.access_token).then(function (res) {
            _this.ongoing = res;
            _this.ongoingJid = _this.ongoing.jid;
            _this.ongoingTitle = _this.ongoing.title;
            _this.ongoing_description = _this.ongoing.description;
            _this.ongoing_date_from = _this.ongoing.date_from;
            _this.ongoing_date_to = _this.ongoing.date_to;
            _this.ongoing_location = _this.ongoing.location;
            _this.ongoing_payout = _this.ongoing.payout;
            _this.ongoingJobs = [];
            try {
                for (var i = 0; i < _this.ongoingTitle.length; i++) {
                    _this.ongoingJobs.push({
                        jid: _this.ongoingJid[i],
                        title: _this.ongoingTitle[i],
                        description: _this.ongoing_description[i],
                        date_from: _this.ongoing_date_from[i].substring(0, 10),
                        date_to: _this.ongoing_date_to[i].substring(0, 10),
                        location: _this.ongoing_location[i],
                        payout: _this.ongoing_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Ongoing job cannot retrieve length");
            }
            console.log("Ongoing jobs pushed");
        }, function (err) {
            console.log(err);
        });
    };
    OperatorjobPage.prototype.retrieveUpcomingJobs = function () {
        var _this = this;
        this.appprov.retrieveUpcomingJobsOps(this.access_token).then(function (res) {
            _this.upcoming = res;
            _this.upcomingJid = _this.upcoming.jid;
            _this.upcomingTitle = _this.upcoming.title;
            _this.upcoming_description = _this.upcoming.description;
            _this.upcoming_date_from = _this.upcoming.date_from;
            _this.upcoming_date_to = _this.upcoming.date_to;
            _this.upcoming_location = _this.upcoming.location;
            _this.upcoming_payout = _this.upcoming.payout;
            _this.upcomingJobs = [];
            try {
                for (var i = 0; i < _this.upcomingTitle.length; i++) {
                    _this.upcomingJobs.push({
                        jid: _this.upcomingJid[i],
                        title: _this.upcomingTitle[i],
                        description: _this.upcoming_description[i],
                        date_from: _this.upcoming_date_from[i].substring(0, 10),
                        date_to: _this.upcoming_date_to[i].substring(0, 10),
                        location: _this.upcoming_location[i],
                        payout: _this.upcoming_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Upcoming Job cannot retrieve length");
            }
            console.log("Upcoming job pushed");
        }, function (err) {
            console.log(err);
        });
    };
    OperatorjobPage.prototype.viewJob = function ($event, jid, title) {
        //    console.log("hi");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__opjobdetails_opjobdetails__["a" /* OpjobdetailsPage */], {
            Jid: jid,
            JTitle: title
        });
    };
    OperatorjobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-operatorjob',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/operatorjob/operatorjob.html"*/'<ion-header padding-top>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div padding>\n\n      <ion-segment [(ngModel)]="job">\n\n        <ion-segment-button value="History">\n\n          {{ history }}\n\n        </ion-segment-button>\n\n        <ion-segment-button value="Ongoing">\n\n          {{ txongoing }}\n\n        </ion-segment-button>\n\n        <ion-segment-button value="Upcoming">\n\n          {{ upcomming }}\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n    \n\n    <div [ngSwitch]="job">\n\n      <ion-list *ngSwitchCase="\'History\'">\n\n        <ion-card *ngFor="let pastJob of pastJobs, let i = index" (click)="viewJob($event, pastJob.jid,pastJob.title);">\n\n        <ion-grid>\n\n          <ion-item >\n\n            <ion-row class="bottomRow">\n\n              <ion-col col-2>\n\n                  <ion-avatar>\n\n                    <img src = \'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg\'>\n\n                  </ion-avatar>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                <b>{{pastJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="pin"></ion-icon>\n\n                {{pastJob.location}} \n\n                <br>\n\n                {{pastJob.date_from}} &nbsp;&nbsp; - &nbsp; {{pastJob.date_to}}\n\n                <!-- <img src = \'http://k.kakaocdn.net/dn/bFslS5/btqo3xtP7zp/AKWJEbPeSH6Fok0EH02bk1/profile_110x110c.jpg\' style="width:4rem; height:4rem">   \n\n                <br> -->\n\n                <!-- <h3>$ &nbsp; {{pastJob.payout}}</h3> -->\n\n              </ion-col>\n\n              <!-- <ion-col col-2>\n\n                <img src = "../../assets/imgs/more_button.png" style="width:2rem; height:2rem" (click)="viewJob($event, pastJob.jid);">\n\n              </ion-col> -->\n\n            </ion-row>\n\n          </ion-item>    \n\n        </ion-grid>\n\n      </ion-card>\n\n      </ion-list>\n\n    \n\n      <ion-list *ngSwitchCase="\'Ongoing\'">\n\n        <ion-card *ngFor="let ongoingJob of ongoingJobs, let i = index" (click)="viewJob($event, ongoingJob.jid,ongoingJob.title);">\n\n        <ion-grid>\n\n          <ion-item>\n\n            <ion-row class="bottomRow">\n\n              <ion-col col-2>\n\n                  <ion-avatar>\n\n                    <img src = \'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg\'>\n\n                  </ion-avatar>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                <b>{{ongoingJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name="pin"></ion-icon>\n\n                {{ongoingJob.location}} \n\n                <br>\n\n                {{ongoingJob.date_from}} &nbsp;&nbsp; - &nbsp; {{ongoingJob.date_to}}\n\n                <!-- <img src = \'http://k.kakaocdn.net/dn/bFslS5/btqo3xtP7zp/AKWJEbPeSH6Fok0EH02bk1/profile_110x110c.jpg\' style="width:4rem; height:4rem">   \n\n                <br> -->\n\n                <!-- <h3>$ &nbsp; {{ongoingJob.payout}}</h3> -->\n\n              </ion-col>\n\n              <!-- <ion-col col-2>\n\n                <img src = "../../assets/imgs/more_button.png" style="width:2rem; height:2rem" (click)="viewJob($event, ongoingJob.jid);">\n\n              </ion-col> -->\n\n            </ion-row>\n\n          </ion-item>    \n\n        </ion-grid>\n\n      </ion-card>\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'Upcoming\'">\n\n        <ion-card *ngFor="let upcomingJob of upcomingJobs, let i = index" (click)="viewJob($event, upcomingJob.jid,upcomingJob.title);">\n\n        <ion-grid>\n\n        <ion-item >\n\n          <ion-row class="bottomRow">\n\n            <ion-col col-2>\n\n                <ion-avatar>\n\n                  <img src = \'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg\'>\n\n                </ion-avatar>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <b>{{upcomingJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<ion-icon name="pin"></ion-icon>\n\n              {{upcomingJob.location}} \n\n              <br>\n\n              {{upcomingJob.date_from}} &nbsp;&nbsp; - &nbsp; {{upcomingJob.date_to}}\n\n              <!-- <img src = \'http://k.kakaocdn.net/dn/bFslS5/btqo3xtP7zp/AKWJEbPeSH6Fok0EH02bk1/profile_110x110c.jpg\' style="width:4rem; height:4rem">   \n\n              <br> -->\n\n              <!-- <h3>$ &nbsp; {{upcomingJob.payout}}</h3> -->\n\n            </ion-col>\n\n            <!-- <ion-col col-2>\n\n              <img src = "../../assets/imgs/more_button.png" style="width:2rem; height:2rem" (click)="viewJob($event, upcomingJob.jid);">\n\n            </ion-col> -->\n\n          </ion-row>\n\n        </ion-item>    \n\n      </ion-grid>\n\n      </ion-card>\n\n    </ion-list>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/operatorjob/operatorjob.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], OperatorjobPage);
    return OperatorjobPage;
}());

//# sourceMappingURL=operatorjob.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    // constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    function RegisterPage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    RegisterPage.prototype.register = function () {
        // this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(res => {
        //   console.log('got data', res);
        //   this.showAlert('Register success!');
        //   this.navCtrl.push(LoginPage);
        // }).catch(error => {
        //   console.log('got error', error);
        //   this.showAlert(error.message);
        // });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n	<ion-list>\n	  <ion-item>\n	    <ion-label floating>Email</ion-label>\n	    <ion-input type="text" #email></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Password</ion-label>\n	    <ion-input type="password" #password></ion-input>\n	  </ion-item>\n	</ion-list>\n\n	<button ion-button block (click)="register()">Register</button>\n</ion-content>\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_kakao_sdk__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AppProvider = /** @class */ (function () {
    function AppProvider(http, store, alertCtrl, filetransfer, kakao, gloc) {
        this.http = http;
        this.store = store;
        this.alertCtrl = alertCtrl;
        this.filetransfer = filetransfer;
        this.kakao = kakao;
        this.gloc = gloc;
    }
    AppProvider.prototype.setemail = function (email) {
        this.store.set('Email', email);
    };
    AppProvider.prototype.getemail = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.store.get('Email').then(function (val) {
                resolve(val);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.presentAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    AppProvider.prototype.addVeh = function (email, sn, mn, pd, manu, desc, vtype) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'addVehicle?email=' + email + '&sn=' + sn + '&mn=' + mn + '&pd=' + pd + '&manu=' + manu + '&desc=' + desc + '&Vtype=' + vtype)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.GetFleet = function (email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getFleet?email=' + email).subscribe(function (res) {
                resolve(res);
                console.log("heyyyy2");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getVehicleStatus = function (email, datetime) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getVehicleStatus?email=' + email + '&datetime=' + datetime).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getOperatorList = function (access_token, email) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOperatorList?email=' + email + '&access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("heyyyy2");
                console.log("access token: " + access_token);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getEmail = function (access_token) {
        var _this = this;
        console.log("getting email");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getEmail?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("success get email");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getVehicleUrl = function (access_token) {
        var _this = this;
        console.log("getting vehicle url");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getVehicleUrl?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Vehicle URL returned");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.checkEmail = function (access_token, email) {
        var _this = this;
        console.log("checking email");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'checkEmail?access_token=' + access_token + '&email=' + email).subscribe(function (res) {
                resolve(res);
                console.log("Check email complete");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.addOperator = function (access_token, operator_email, vehicle_type) {
        var _this = this;
        console.log("adding operator");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'addOperator?access_token=' + access_token + '&operator_email=' + operator_email + '&vehicle_type=' + vehicle_type).subscribe(function (res) {
                resolve(res);
                console.log("Operator add success");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getOperatorDetails = function (email, access_token) {
        var _this = this;
        console.log("Getting operator details");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOperatorDetails?email=' + email + '&access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Operator details fetched");
                console.log("access token: " + access_token);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getChartData = function (email, access_token) {
        var _this = this;
        console.log("Getting Chart Information");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getChartData?email=' + email + '&access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Chart data fetched");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.deleteOperator = function (email, access_token) {
        var _this = this;
        console.log("Deleting Operator");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'deleteOperator?email=' + email + '&access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Operator Deleted");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getOwnerJoblist = function (access_token) {
        var _this = this;
        console.log("Getting Owner job list");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOwnerJoblist?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Retrieve owner job");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveVehPurchaseDate = function (serial_no, access_token) {
        var _this = this;
        console.log("Retrieving vehicle purchase date");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveVehPurchaseDate?serial_no=' + serial_no + '&access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("retrieved purchase date");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveMachineHour = function (serial_no, access_token) {
        var _this = this;
        console.log("Retrieving Vehicle Machine Hour");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveVehMachineHour?serial_no=' + serial_no + '&access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Retrieve machine hour");
                console.log("access token: " + access_token);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveMaintenanceCompleted = function (serial_no, access_token, todaydate) {
        var _this = this;
        console.log("Retrieving completed servicing");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveMaintenanceCompleted?serial_no=' + serial_no + '&access_token=' + access_token + '&todaydate=' + todaydate).subscribe(function (res) {
                resolve(res);
                console.log("Retrieve Completed Maintenance");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveMaintenanceUpcoming = function (serial_no, access_token, todaydate) {
        var _this = this;
        console.log("Retrieving upcoming service");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveMaintenanceUpcoming?serial_no=' + serial_no + '&access_token=' + access_token + '&todaydate=' + todaydate).subscribe(function (res) {
                resolve(res);
                console.log("Retrieve Upcoming Maintenance");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveVehicleSchedule = function (serial_no, access_token) {
        var _this = this;
        console.log("Retrieving vehicle schedule");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveVehicleSchedule?serial_no=' + serial_no + '&access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Retrieved Vehicle Schedule");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveVehicleUtil = function (serial_no, access_token) {
        var _this = this;
        console.log("Retrieving Vehicle Utilization graph");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveVehicleUtil?serial_no=' + serial_no + '&access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Retrieved Vehicle Utilization Graph");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.addMaintenance = function (access_token, serial_no, date_from, date_to, location, desc, modelnum) {
        var _this = this;
        console.log("Adding Vehicle Maintenance");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'addMaintenance?access_token=' + access_token + '&serial_no=' + serial_no + '&date_from=' + date_from + '&date_to=' + date_to + '&location=' + location + '&desc=' + desc + '&model_no=' + modelnum).subscribe(function (res) {
                resolve(res);
                console.log("Vehicle Maintenance Added");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveMaintenance = function (access_token, serial_no) {
        var _this = this;
        console.log("Retrieving all Vehicle Maintenance");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveMaintenance?access_token=' + access_token + '&serial_no=' + serial_no).subscribe(function (res) {
                resolve(res);
                console.log("Vehicle All Maintenance Retrieved");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.deleteMaintenance = function (access_token, serial_no, date_from, date_to, location, desc) {
        var _this = this;
        console.log("Deleting one vehicle maintenance");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'deleteMaintenance?access_token=' + access_token + '&serial_no=' + serial_no + '&date_from=' + date_from + '&date_to=' + date_to + '&location=' + location + '&desc=' + desc).subscribe(function (res) {
                resolve(res);
                console.log("Maintenance record deleted");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.deleteVehicle = function (access_token, serial_no, model_no) {
        var _this = this;
        console.log("Deleting vehicle");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'deleteVehicle?access_token=' + access_token + '&serial_no=' + serial_no + '&model_no=' + model_no).subscribe(function (res) {
                resolve(res);
                console.log("Vehicle deleted");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrievePastJobs = function (access_token) {
        var _this = this;
        console.log("Retrieving History Jobs");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrievePastJobs?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("History Jobs Retrieved");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveOngoingJobs = function (access_token) {
        var _this = this;
        console.log("Retrieving Ongoing Jobs");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveOngoingJobs?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Ongoing Jobs Retrieved");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveUpcomingJobs = function (access_token) {
        var _this = this;
        console.log("Retrieving Upcoming Jobs");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveUpcomingJobs?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Upcoming Jobs Retrieved");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.addJob = function (access_token, payField, datefromField, datetoField, locationField, descField, titleField) {
        var _this = this;
        console.log("Adding Jobs");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'addJob?access_token=' + access_token + '&payout=' + payField + '&date_from=' + datefromField + '&date_to=' + datetoField + '&location=' + locationField + '&description=' + descField + '&title=' + titleField).subscribe(function (res) {
                resolve(res);
                console.log("Jobs Added");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.insertOperatorJob = function (access_token, jid, operator_names, operator_vehicles) {
        var _this = this;
        console.log("Adding Operator Jobs");
        console.log(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'insertOperatorJob?access_token=' + access_token + '&jid=' + jid + '&operator_names=' + operator_names + '&operator_vehicles=' + operator_vehicles);
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'insertOperatorJob?access_token=' + access_token + '&jid=' + jid + '&operator_names=' + operator_names + '&operator_vehicles=' + operator_vehicles).subscribe(function (res) {
                resolve(res);
                console.log("Operator jobs added");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveJobDetails = function (access_token, jid) {
        var _this = this;
        console.log("Retrieving job details");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveJobDetails?access_token=' + access_token + '&jid=' + jid).subscribe(function (res) {
                resolve(res);
                console.log("heyyyy");
                console.log("Job Details Retrieved");
                console.log("jid: " + jid);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.retrieveJobOperators = function (access_token, jid) {
        var _this = this;
        console.log("Retrieving job operators");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'retrieveJobOperators?access_token=' + access_token + '&jid=' + jid).subscribe(function (res) {
                resolve(res);
                console.log("Job Operators Retrieved");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.updateJobComplete = function (access_token, jid) {
        var _this = this;
        console.log("Updating completion of job");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'updateJobComplete?access_token=' + access_token + '&jid=' + jid).subscribe(function (res) {
                resolve(res);
                console.log("Job Update completed");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.updateOwnerRole = function (access_token, role) {
        var _this = this;
        console.log("Update owner role");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'updateOwnerRole?access_token=' + access_token + '&role=' + role).subscribe(function (res) {
                resolve(res);
                console.log("Update owner role");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.checkExistingUser = function (email) {
        var _this = this;
        console.log("Checking existing user");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'checkExistingUser?email=' + email).subscribe(function (res) {
                resolve(res);
                console.log("Check user done");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.updateAccessToken = function (email, access_token, profile_url) {
        var _this = this;
        console.log("Getting new Access Token");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'updateAccessToken?email=' + email + '&access_token=' + access_token + '&profile_url=' + profile_url).subscribe(function (res) {
                resolve(res);
                console.log("New access token");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.addUser = function (email, access_token, name, profile_url, role) {
        var _this = this;
        console.log("Adding new user");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'addUser?email=' + email + '&access_token=' + access_token + '&name=' + name + '&profile_url=' + profile_url + '&role=' + role).subscribe(function (res) {
                resolve(res);
                console.log("User added");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.addCompany = function (access_token, company_name, company_add, phone_no, working_days) {
        var _this = this;
        console.log("Adding company");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'addCompany?access_token=' + access_token + '&company_name=' + company_name + '&company_add=' + company_add + '&phone_no=' + phone_no + '&working_days=' + working_days).subscribe(function (res) {
                resolve(res);
                console.log("Company added");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getOperatorSchedule = function (access_token, email) {
        var _this = this;
        console.log("Getting Operator Calendar");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOperatorSchedule?access_token=' + access_token + '&email=' + email).subscribe(function (res) {
                resolve(res);
                console.log("Operator Schedule Retrieved");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getOperatorNames = function (access_token, datefrom, dateto) {
        var _this = this;
        console.log("Getting Owner's operators");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOperatorNames?access_token=' + access_token + '&date_from=' + datefrom + '&date_to=' + dateto).subscribe(function (res) {
                resolve(res);
                console.log("Owner's Operators Retrieved");
                console.log("access token: " + access_token);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getJobCards = function (access_token, jid, no_of_days) {
        var _this = this;
        console.log("Getting Job Reports");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getJobCards?access_token=' + access_token + '&jid=' + jid + '&no_of_days=' + no_of_days).subscribe(function (res) {
                resolve(res);
                console.log("Job reports retrieved");
                console.log("jid: " + jid);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getOperatorVehicles = function (access_token, datefrom, dateto) {
        var _this = this;
        console.log("Getting Operator's vehicles");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOperatorVehicles?access_token=' + access_token + '&date_from=' + datefrom + '&date_to=' + dateto).subscribe(function (res) {
                resolve(res);
                console.log("Operator vehicles retrieved");
            }, function (err) {
                console.log(err);
            });
        });
    };
    //-------------- Steff Added ----------------------//
    AppProvider.prototype.retrievePastJobsOps = function (access_token) {
        var _this = this;
        console.log("Retrieving History Jobs - operator");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'OpsretrievePastJobs?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("History Jobs Retrieved");
                console.log("access token: " + access_token);
            }, function (err) {
                console.log(err);
            });
        });
        // console.log("Retrieving History Jobs - operator");
        // return new Promise(resolve => {
        //   this.http.get(apiKey+'retrievePastJobs?access_token='+access_token).subscribe((res) => {
        //     resolve(res);
        //     console.log("History Jobs Retrieved");
        //   }, err => {
        //     console.log(err);
        //   })
        // })
    };
    AppProvider.prototype.retrieveOngoingJobsOps = function (access_token) {
        var _this = this;
        console.log("Retrieving ongoing Jobs - operator");
        return new Promise(function (resolve) {
            console.log(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'OpsretrieveOngoingJobsOps?access_token=' + access_token);
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'OpsretrieveOngoingJobsOps?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Ongoing Jobs Retrieved");
            }, function (err) {
                console.log(err);
            });
        });
        //   return new Promise(resolve => {
        //   this.http.get(apiKey+'retrieveOngoingJobs?access_token='+access_token).subscribe((res) => {
        //     resolve(res);
        //     console.log("Ongoing Jobs Retrieved");
        //   }, err => {
        //     console.log(err);
        //   })
        // })
    };
    AppProvider.prototype.retrieveUpcomingJobsOps = function (access_token) {
        var _this = this;
        console.log("OpsRetrieving ongoing Jobs - operator");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'OpsretrieveUpcomingJobsOps?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Ongoing Jobs Retrieved");
            }, function (err) {
                console.log(err);
            });
            //   this.http.get(apiKey+'retrieveUpcomingJobs?access_token='+access_token).subscribe((res) => {
            //     resolve(res);
            //     console.log("Ongoing Jobs Retrieved");
            //   }, err => {
            //     console.log(err);
            //   })
        });
    };
    AppProvider.prototype.UploadReportImage = function (targetPath, options) {
        var url = __WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'UpRepImage';
        var fileTransfer = this.filetransfer.create();
        fileTransfer.upload(targetPath, encodeURI(url), options).then(function (data) {
            console.log('Upload Sucess!');
        }, function (err) {
            console.log('ERROR!');
            console.log(JSON.stringify(err));
        });
    };
    //----------------------------------------------------//
    AppProvider.prototype.checkRole = function (access_token) {
        var _this = this;
        console.log("Retrieving role");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'checkRole?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Role returned");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.CheckOTP = function (otp) {
        var _this = this;
        console.log('Checking OTP');
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'checkOTP?otp=' + otp).subscribe(function (res) {
                resolve(res);
                console.log('OTP CHecked');
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.OperatorLogin = function (access_token, otp, phone) {
        var _this = this;
        console.log('Operator Login');
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'OperatorLogin?access_token=' + access_token + '&phoneno=' + phone + '&otp=' + otp).subscribe(function (res) {
                resolve(res);
                console.log('Operator Login Sucess!');
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.MakeOTP = function (access_token) {
        var _this = this;
        console.log('Generating OTP');
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOTP?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log('OTP Returned');
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.OpGetvehType = function (access_token, jid) {
        var _this = this;
        console.log('Getting Veh Type');
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'opgetvehtype?access_token=' + access_token + '&JID=' + jid).subscribe(function (res) {
                resolve(res);
                console.log('Vehicle Type retrieved sucessfully');
                console.log(res);
                console.log(res.vehicle_type);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.InsertReport = function (jid, access_token, rtype, img, desc, loc, faults) {
        var _this = this;
        console.log('Inserting Report');
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'addReport?jid=' + jid + '&access_token=' + access_token + '&rtype=' + rtype + '&imgloc=' + img + '&Desc=' + desc + '&loc=' + loc + '&faults=' + faults).subscribe(function (res) {
                resolve(res);
                console.log('Report Added Sucessfully!');
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getJobInfo = function (access_token, jid) {
        var _this = this;
        console.log("Retrieving job information to edit");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getJobInfo?access_token=' + access_token + '&jid=' + jid).subscribe(function (res) {
                resolve(res);
                console.log("Job information retrieved");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.updateOperatorJob = function (access_token, jid, operator_names, operator_vehicles) {
        var _this = this;
        console.log("Updating Operator Jobs");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'updateOperatorJob?access_token=' + access_token + '&jid=' + jid + '&operator_names=' + operator_names + '&operator_vehicles=' + operator_vehicles).subscribe(function (res) {
                resolve(res);
                console.log("Operator jobs updated");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.updateJob = function (access_token, payField, datefromField, datetoField, locationField, descField, titleField, jid) {
        var _this = this;
        console.log("Adding Jobs");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'updateJob?access_token=' + access_token + '&payout=' + payField + '&date_from=' + datefromField + '&date_to=' + datetoField + '&location=' + locationField + '&description=' + descField + '&title=' + titleField + '&jid=' + jid).subscribe(function (res) {
                resolve(res);
                console.log("Jobs Updated");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getOperatorJoblist = function (access_token) {
        var _this = this;
        console.log("Getting Operator job list");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOperatorJoblist?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log("Retrieve operator job");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.UpdateCapabilities = function (access_token, vehicle_type) {
        var _this = this;
        console.log("Updating Capabilities");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'updateCapabilities?access_token=' + access_token + '&vehicle_type=' + vehicle_type).subscribe(function (res) {
                resolve(res);
                console.log("Capabilities Updated Sucessfully");
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.getOpCapabilities = function (access_token) {
        var _this = this;
        console.log("Getting Capabilities");
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getOpCapabilities?access_token=' + access_token).subscribe(function (res) {
                resolve(res);
                console.log('Capabilities Retrieved');
            }, function (err) {
                console.log(err);
            });
        });
    };
    AppProvider.prototype.GetCurrentLoc = function () {
        var _this = this;
        console.log('Getting GeLocation');
        return new Promise(function (resolve) {
            _this.gloc.getCurrentPosition().then(function (res) {
                console.log('Sucessfully gathered Location');
                resolve(res);
            }, function (err) {
                console.log('err');
                console.log(err);
            });
        });
    };
    AppProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_6_kakao_sdk__["b" /* KakaoCordovaSDK */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */]])
    ], AppProvider);
    return AppProvider;
}());

//# sourceMappingURL=app.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-maintenance/add-maintenance.module": [
		909,
		2
	],
	"../pages/addjob/addjob.module": [
		917,
		14
	],
	"../pages/addoperator/addoperator.module": [
		910,
		1
	],
	"../pages/createcompany/createcompany.module": [
		911,
		13
	],
	"../pages/edit-maintenance/edit-maintenance.module": [
		912,
		0
	],
	"../pages/editjob/editjob.module": [
		918,
		12
	],
	"../pages/jobinfo/jobinfo.module": [
		919,
		11
	],
	"../pages/joblists/joblists.module": [
		913,
		10
	],
	"../pages/login-kk/login-kk.module": [
		920,
		9
	],
	"../pages/login/login.module": [
		921,
		8
	],
	"../pages/operatorhome/operatorhome.module": [
		922,
		7
	],
	"../pages/operatorjob/operatorjob.module": [
		923,
		6
	],
	"../pages/otp-operator/otp-operator.module": [
		914,
		5
	],
	"../pages/register/register.module": [
		915,
		4
	],
	"../pages/updatecapop/updatecapop.module": [
		916,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FleetsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fleet_info_fleet_info__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addvehicle_addvehicle__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FleetsPage = /** @class */ (function () {
    function FleetsPage(navCtrl, navParams, storage, appprov, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.appprov = appprov;
        this._translate = _translate;
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.getFleetin();
                _this._initializeTranslation();
            }
        });
    }
    FleetsPage.prototype.ionViewDidEnter = function () {
        this._initializeTranslation();
    };
    FleetsPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    FleetsPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    FleetsPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("fleets.title");
        this.add = this._translate.instant("fleets.add");
    };
    FleetsPage.prototype.ionViewWillEnter = function () {
        this.getFleetin();
    };
    FleetsPage.prototype.AddVeh = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addvehicle_addvehicle__["a" /* AddvehiclePage */]);
    };
    FleetsPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fleet_info_fleet_info__["a" /* FleetInfoPage */], {
            item: item
        });
    };
    FleetsPage.prototype.getFleets = function (emailin) {
        var _this = this;
        this.appprov.GetFleet(emailin).then(function (res) {
            _this.fleets = res;
            _this.serial = _this.fleets.serialno;
            _this.Models = _this.fleets.modelno;
            _this.PurchaseD = _this.fleets.pdate;
            _this.Descs = _this.fleets.desc;
            _this.vehtype = _this.fleets.Vtype;
            _this.manufacturer = _this.fleets.Manu;
            _this.imgs = _this.fleets.img;
            _this.vehicles = [];
            for (var i = 0; i < _this.imgs.length; i++) {
                _this.vehicles.push({
                    serialno: _this.serial[i],
                    Modelno: _this.Models[i],
                    pdate: _this.PurchaseD[i],
                    Desc: _this.Descs[i],
                    vtype: _this.vehtype[i],
                    manu: _this.manufacturer[i],
                    img: _this.imgs[i]
                });
            }
        }, function (err) {
            console.log('error');
        });
    };
    FleetsPage.prototype.getFleetin = function () {
        var _this = this;
        this.appprov.getemail().then(function (res) {
            _this.UsrEmail = res;
            _this.getFleets(res);
        }, function (err) {
            console.log(err);
        });
    };
    FleetsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Fleets',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/fleets/fleets.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{ title }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n      <button ion-item *ngFor="let vehicle of vehicles" (click)="itemTapped($event,vehicle)">\n\n        <ion-thumbnail item-start>\n\n            <img [src] =vehicle.img>\n\n        </ion-thumbnail>\n\n        <h2>{{vehicle.Modelno}}</h2>\n\n        <p>{{vehicle.Desc}}</p>\n\n      </button>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n\n\n<ion-footer no-shadow>\n\n  <ion-toolbar position="bottom">\n\n    <button ion-button full (click)="AddVeh()" >{{ add }}</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/fleets/fleets.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], FleetsPage);
    return FleetsPage;
}());

//# sourceMappingURL=fleets.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FleetInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the FleetInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FleetInfoPage = /** @class */ (function () {
    function FleetInfoPage(navCtrl, navParams, appprov, storage, popoverCtrl, modalCtrl, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.storage = storage;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this._translate = _translate;
        this.eventSource = [];
        this.selectedDay = new Date();
        // Vehdata = {
        //   modelno: '',
        //   serialno: '',
        //   owner: ''
        // };
        this.vehicle = {
            img: '',
            model_no: '',
            serial_no: '',
            purchase_date: '',
            machine_hour: '',
            completed_count: '0',
            last_service: 'N/A',
            upcoming_count: '0',
            upcoming_date: '',
            upcoming_place: ''
        };
        this.calendar = {
            mode: 'month',
            currentDate: this.selectedDay
        };
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.SelectedVeh = navParams.get('item');
                console.log(_this.SelectedVeh);
                _this.todaydate = new Date();
                _this.retrieveVehicleInfo(_this.SelectedVeh);
                _this.retrievePurchaseDate(_this.vehicle.serial_no);
                _this.retrieveMachineHour(_this.vehicle.serial_no);
                _this.retrieveMaintenanceCompleted(_this.vehicle.serial_no, _this.todaydate);
                _this.retrieveMaintenanceUpcoming(_this.vehicle.serial_no, _this.todaydate);
                _this.retrieveVehicleSchedule(_this.vehicle.serial_no);
                _this.retrieveVehicleUtil(_this.vehicle.serial_no);
                _this._initializeTranslation();
            }
        });
    }
    FleetInfoPage.prototype.ionViewDidEnter = function () {
        this._initializeTranslation();
    };
    FleetInfoPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    FleetInfoPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    FleetInfoPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("fleet-info.title");
        this.serial_no = this._translate.instant("fleet-info.serial_no");
        this.purchase_date = this._translate.instant("fleet-info.purchase_date");
        this.remove_vehicle = this._translate.instant("fleet-info.remove_vehicle");
        this.machine_hour = this._translate.instant("fleet-info.machine_hour");
        this.maintenance = this._translate.instant("fleet-info.maintenance");
        this.completed = this._translate.instant("fleet-info.completed");
        this.last_service = this._translate.instant("fleet-info.last_service");
        this.upcomming = this._translate.instant("fleet-info.upcomming");
        this.employment = this._translate.instant("fleet-info.employment");
        this.utilization = this._translate.instant("fleet-info.utilization");
        this.month = this._translate.instant("fleet-info.month");
        this.year = this._translate.instant("fleet-info.year");
        this.deletemsgtitle = this._translate.instant("fleet-info.deletemsgtitle");
        this.deletemsg = this._translate.instant("fleet-info.deletemsg");
        this.total_job_count = this._translate.instant("fleet-info.total_job_count");
        this.total_no_job = this._translate.instant("fleet-info.total_no_job");
        this.assigned = this._translate.instant("fleet-info.assigned");
    };
    FleetInfoPage.prototype.retrieveVehicleInfo = function (vehicle) {
        this.vehicle.img = vehicle.img;
        this.vehicle.model_no = vehicle.Modelno;
        this.vehicle.serial_no = vehicle.serialno;
    };
    FleetInfoPage.prototype.retrievePurchaseDate = function (serial_no) {
        var _this = this;
        this.appprov.retrieveVehPurchaseDate(serial_no, this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.vehicle.purchase_date = data['purchase_date'];
        }, function (err) {
            console.log(err);
        });
    };
    FleetInfoPage.prototype.retrieveMachineHour = function (serial_no) {
        var _this = this;
        this.appprov.retrieveMachineHour(serial_no, this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.vehicle.machine_hour = data['machine_hour'];
        }, function (err) {
            console.log(err);
        });
    };
    FleetInfoPage.prototype.retrieveMaintenanceCompleted = function (serial_no, todaydate) {
        var _this = this;
        this.appprov.retrieveMaintenanceCompleted(serial_no, this.access_token, todaydate).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.vehicle.completed_count = data['count'];
            _this.vehicle.last_service = data['lastservice'];
        }, function (err) {
            console.log(err);
        });
    };
    FleetInfoPage.prototype.retrieveMaintenanceUpcoming = function (serial_no, todaydate) {
        var _this = this;
        this.appprov.retrieveMaintenanceUpcoming(serial_no, this.access_token, todaydate).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.vehicle.upcoming_count = data['count'];
            _this.vehicle.upcoming_date = data['upcoming'];
            _this.vehicle.upcoming_place = "@ " + data['location'];
        }, function (err) {
            console.log(err);
        });
    };
    FleetInfoPage.prototype.retrieveVehicleSchedule = function (serial_no) {
        var _this = this;
        this.appprov.retrieveVehicleSchedule(serial_no, this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            var job_desc = data['desc'];
            var date_from = data['date_from'];
            var date_to = data['date_to'];
            var job = { 'job_desc': job_desc, 'job_datefrom': date_from, 'job_dateto': date_to };
            console.log(job);
            _this.loadEvents(job);
        }, function (err) {
            console.log(err);
        });
    };
    FleetInfoPage.prototype.retrieveVehicleUtil = function (serial_no) {
        var _this = this;
        this.appprov.retrieveVehicleUtil(serial_no, this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            var vehicle_month = data['vehicle_month'];
            var vehicle_year = data['vehicle_year'];
            var month_total = data['month_total'];
            var year_total = data['year_total'];
            _this.getJobStats(vehicle_month, month_total);
            // sthis.getJobStats2(vehicle_year, year_total); //comment this sn 27
        }, function (err) {
            console.log(err);
        });
    };
    FleetInfoPage.prototype.loadEvents = function (job) {
        this.eventSource = this.plotSchedule(job);
    };
    FleetInfoPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    FleetInfoPage.prototype.onTimeSelected = function (ev) {
        console.log(ev);
    };
    FleetInfoPage.prototype.onEventSelected = function (event) {
        console.log(event);
    };
    FleetInfoPage.prototype.allmethods = function (serial_no) {
        this.retrieveMaintenanceCompleted(serial_no, this.todaydate);
        this.retrieveMaintenanceUpcoming(serial_no, this.todaydate);
        this.retrieveVehicleSchedule(serial_no);
    };
    FleetInfoPage.prototype.AddMaintenance = function () {
        var _this = this;
        var PopMod = this.popoverCtrl.create("AddMaintenancePage", { vehicle: this.vehicle }, { showBackdrop: true, enableBackdropDismiss: true, cssClass: 'popoverStyle' });
        PopMod.present();
        PopMod.onDidDismiss(function () { return _this.allmethods(_this.vehicle.serial_no); });
    };
    FleetInfoPage.prototype.EditMaintenance = function () {
        var _this = this;
        var Modal = this.modalCtrl.create("EditMaintenancePage", { vehicle: this.vehicle }, { showBackdrop: true, enableBackdropDismiss: true });
        Modal.present();
        Modal.onDidDismiss(function () { return _this.allmethods(_this.vehicle.serial_no); });
    };
    FleetInfoPage.prototype.plotEvents = function (event) {
        var eventdata = event;
        eventdata.startTime = new Date(event.startTime);
        eventdata.endTime = new Date(event.endTime);
        var events = this.eventSource;
        events.push(eventdata);
        this.eventSource = [];
        this.eventSource = events;
    };
    FleetInfoPage.prototype.plotSchedule = function (jobs) {
        var job = [];
        var dates_from = jobs.job_datefrom;
        var dates_to = jobs.job_dateto;
        var jids = jobs.job_desc;
        var today = new Date();
        for (var i = 0; i < dates_from.length; i++) {
            var start_day = new Date(Date.UTC(dates_from[i].substring(0, 4), dates_from[i].substring(5, 7) - 1, parseInt(dates_from[i].substring(8, 10), 10)));
            var end_day = new Date(Date.UTC(dates_to[i].substring(0, 4), dates_to[i].substring(5, 7) - 1, parseInt(dates_to[i].substring(8, 10), 10) + 1));
            console.log("pushing job");
            job.push({
                title: jids[i],
                startTime: start_day,
                endTime: end_day,
                allDay: true
            });
        }
        return job;
    };
    FleetInfoPage.prototype.getJobStats = function (vehicle_month, month_total) {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var today = new Date();
        var month = today.getUTCMonth();
        var labels_month = [];
        var month_range = 4;
        var dataPack1 = ['7', '14', '14', '4', '22', '20', '15'];
        for (var i = 0; i < month_range; i++) {
            labels_month.push(months[(month + 12 - i) % 12]);
        }
        labels_month.reverse();
        for (var i = 1; i < month_range; i++) {
            labels_month.push(months[(month + 12 + i) % 12]);
        }
        this.barVehChart = new __WEBPACK_IMPORTED_MODULE_5_chart_js__["Chart"](this.barVehCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: labels_month,
                datasets: [{
                        label: 'Statistics',
                        data: dataPack1,
                        backgroundColor: "rgba(0, 110,255, 0.2)",
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    xAxes: [{
                            gridLines: { display: false },
                        }],
                    yAxes: [{
                            ticks: {
                                min: 0,
                                max: 30,
                                gridLines: { display: false },
                                callback: function (value) { return value; }
                            },
                            scaleLabel: {
                                display: true,
                                labelString: "Days"
                            }
                        }],
                },
                legend: { display: false }
            }
        });
        //old codes
        // if (month_total == '0'){
        //   month_total = '1';
        // }
        // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        //   type: 'doughnut',
        //   data:{
        //     labels: [this.assigned, this.total_job_count],
        //     datasets: [{
        //       label: "Vehicle Utilization",
        //       //data: [this.vehicle_month, month_total - this.vehicle_month],
        //       data: [vehicle_month, month_total-vehicle_month],
        //       backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
        //       borderColor: "rbga(0, 110, 255, 1)",
        //       borderWidth:1
        //     }]
        //   }
        // });
    };
    //comment this block sn 27
    //YEAR chart
    // getJobStats2(vehicle_year, year_total ){
    //   if (year_total == '0'){
    //     year_total = '1';
    //   }
    //   this.doughnutChart2 = new Chart(this.doughnutCanvas2.nativeElement, {
    //     type: 'doughnut',
    //     data:{
    //       labels: [this.assigned, this.total_job_count],
    //       datasets: [{
    //         label: "Vehicle utilization",
    //         data: [vehicle_year, year_total-vehicle_year],
    //         backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
    //         borderColor: "rbga(0, 110, 255, 1)",
    //         borderWidth:1
    //       }]
    //     }
    //   });
    // }
    FleetInfoPage.prototype.deleteVehicle = function (serial_no, model_no) {
        var _this = this;
        this.appprov.deleteVehicle(this.access_token, serial_no, model_no).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            console.log("vehicle deleted");
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barVehCanvas'),
        __metadata("design:type", Object)
    ], FleetInfoPage.prototype, "barVehCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas2'),
        __metadata("design:type", Object)
    ], FleetInfoPage.prototype, "doughnutCanvas2", void 0);
    FleetInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fleet-info',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/fleet-info/fleet-info.html"*/'<!--\n\n  Generated template for the FleetInfoPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ title }} </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col><ion-img src="{{vehicle.img}}" width="140" height="140"></ion-img></ion-col>\n\n      <ion-col>\n\n        <h4>{{ vehicle.model_no }}</h4> <br />\n\n        <b>{{ serial_no }} </b>: {{ vehicle.serial_no }} <br />\n\n        <b>{{ purchase_date }}</b>: {{ vehicle.purchase_date }} <br />\n\n        <b>{{ machine_hour }}</b>: {{ vehicle.machine_hour }}\n\n        <br/>\n\n        <button ion-button float-center small color="danger"  (click)="deleteVehicle(vehicle.serial_no, vehicle.model_no)">{{ remove_vehicle }}</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n          <b style="font-size:2em">{{ maintenance }}</b><br/>\n\n          <b style="font-size:2em">{{ vehicle.completed_count }}</b> {{ completed }}<br/>\n\n          {{ last_service }}: {{vehicle.last_service }}\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n\n            <b style="font-size:2em">{{ vehicle.upcoming_count }}</b> {{ upcomming }} \n\n            <button ion-button icon-only float-center small color="dark" round style="margin-top: -10px" (click)="AddMaintenance()"> \n\n                <ion-icon name="add" style="font-size:1em"></ion-icon>\n\n            </button>\n\n            <button ion-button icon-only float-center small color="dark" round style="margin-top: -10px" (click)="EditMaintenance()"> \n\n                <ion-icon name="create" style="font-size:1em"></ion-icon>\n\n            </button>\n\n              <br/>\n\n            {{ vehicle.upcoming_date }} {{ vehicle.upcoming_place }}\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <b style="font-size:2em">{{ employment }}</b><br/>\n\n            <div text-center><b>{{ viewTitle }}</b></div>\n\n\n\n            <calendar \n\n            [eventSource]="eventSource"\n\n            [calendarMode]="calendar.mode"\n\n            [currentDate]="calendar.currentDate"\n\n            (onEventSelected)="onEventSelected($event)"\n\n            (onTitleChanged)="onViewTitleChanged($event)"\n\n            (onTimeSelected)="onTimeSelected($event)"\n\n            step="30"\n\n            class="calendar"></calendar>\n\n        </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n        <ion-col>\n\n            <b style="font-size:2em">{{ utilization }}</b><br/>\n\n        </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{ month }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barVehCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <!-- <ion-card>\n\n      <ion-card-header>\n\n        {{ year }}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #doughnutCanvas2></canvas>\n\n      </ion-card-content>\n\n    </ion-card> -->\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/fleet-info/fleet-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], FleetInfoPage);
    return FleetInfoPage;
}());

//# sourceMappingURL=fleet-info.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_kk_login_kk__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__operatorstabs_operatorstabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createcompany_createcompany__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__otp_operator_otp_operator__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_app_app__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { Facebook } from '@ionic-native/facebook';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
// import { AngularFireAuth } from 'angularfire2/auth';
// import firebase from 'firebase';










/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    // constructor(private alertCtrl: AlertController, private fire: AngularFireAuth, private fb: Facebook,
    //   public navCtrl: NavController, public navParams: NavParams) {
    // }
    function LoginPage(alertCtrl, fb, navCtrl, loadingCtrl, storage, appprov, navParams, _translate) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.appprov = appprov;
        this.navParams = navParams;
        this._translate = _translate;
        this.isLoggedIn = false;
        this.provider = {
            loggedin: false,
            name: '',
            email: '',
            profilePicture: ''
        };
        storage.ready().then(function () {
            storage.get('access_token').then(function (val) {
                _this.showLoader();
                if (val !== null) {
                    console.log("Got access token");
                    _this.access_token = val.toString();
                    _this.appprov.checkRole(_this.access_token).then(function (res) {
                        var data = JSON.stringify(res);
                        data = JSON.parse(data);
                        _this.loading.dismiss();
                        if (data['result'] == "1") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */], storage);
                        }
                        else if (data['result'] == "0") {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__operatorstabs_operatorstabs__["a" /* OperatorstabsPage */], storage);
                        }
                        else {
                            console.log("Not in database");
                        }
                    }, function (err) {
                        console.log(err);
                    });
                }
                _this.loading.dismiss();
            });
        });
    }
    LoginPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    LoginPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("login.title");
        this.owner = this._translate.instant("login.owner");
        this.operator = this._translate.instant("login.operator");
        this.rolemsgtitle = this._translate.instant("login.rolemsgtitle");
        this.rolemsg = this._translate.instant("login.rolemsg");
    };
    LoginPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
        this._initializeTranslation();
    };
    LoginPage.prototype.role = function (value) {
        this.Role = value;
    };
    LoginPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    }; //showLoader()
    LoginPage.prototype.signIn = function () {
        // this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(res => {
        //   this.provider.loggedin = true;
        //   this.provider.name = res.user.displayName;
        //   this.provider.email = res.user.email;
        //   this.provider.profilePicture = res.user.photoURL;
        //   console.log('from Email', res);
        //   this.showAlert('Success! you\'re logged in by Email');
        //   this.navCtrl.setRoot(HomePage, this.provider);
        // }).catch(error => {
        //   console.log('got error', error);
        //   this.showAlert(error.message);
        // });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.loginWithFacebook = function () {
        // this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res => {
        //   this.provider.loggedin = true;
        //   this.provider.name = res.user.displayName;
        //   this.provider.email = res.user.email;
        //   this.provider.profilePicture = res.user.photoURL;
        //   console.log('from Facebook', res);
        //   this.showAlert('Success! you\'re logged in by Facebook');
        //   this.navCtrl.setRoot(HomePage, this.provider);
        // }).catch(error => {
        //   console.log('got error', error);
        //   this.showAlert(error.message);
        // });
    };
    LoginPage.prototype.loginWithFacebook1 = function () {
        var _this = this;
        if (this.Role == null || this.Role == undefined) {
            var alert_1 = this.alertCtrl.create({
                title: this.rolemsgtitle,
                subTitle: this.rolemsg,
                buttons: ['OK']
            });
            alert_1.present();
            return;
        } //if role
        this.showLoader();
        this.fb.login(['public_profile', 'user_friends', 'email']).then(function (res) {
            _this.loading.dismiss();
            if (res.status === "connected") {
                //this.showAlert(res.authResponse.userID + ": " + res.authResponse.accessToken);
                _this.storage.set('access_token', res.authResponse.accessToken);
                _this.isLoggedIn = true;
                if (_this.Role == 'Owner') {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__createcompany_createcompany__["a" /* CreatecompanyPage */], _this.storage);
                }
                else {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__otp_operator_otp_operator__["a" /* OtpOperatorPage */], _this.storage);
                }
            }
            else {
                _this.isLoggedIn = false;
                _this.showAlert(res.status);
            }
        }).catch(function (e) {
            console.log('Error logging into Facebook:', e);
        });
        this.loading.dismiss();
    };
    LoginPage.prototype.loginWithGoogle = function () {
        // this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(res => {
        //   this.provider.loggedin = true;
        //   this.provider.name = res.user.displayName;
        //   this.provider.email = res.user.email;
        //   this.provider.profilePicture = res.user.photoURL;
        //   console.log('from Google', res);
        //   this.showAlert('Success! you\'re logged in by Google');
        //   this.navCtrl.setRoot(HomePage, this.provider);
        // }).catch(error => {
        //   console.log('got error', error);
        //   this.showAlert(error.message);
        // });
    };
    LoginPage.prototype.loginWithTwitter = function () {
        // this.fire.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider()).then(res => {
        //   this.provider.loggedin = true;
        //   this.provider.name = res.user.displayName;
        //   this.provider.email = res.user.email;
        //   this.provider.profilePicture = res.user.photoURL;
        //   console.log('from Twitter', res);
        //   this.showAlert('Success! you\'re logged in by Twitter');
        //   this.navCtrl.setRoot(HomePage, this.provider);
        // }).catch(error => {
        //   console.log('got error', error);
        //   this.showAlert(error.message);
        // });
    };
    LoginPage.prototype.loginWithGithub = function () {
        // this.fire.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(res => {
        //   this.provider.loggedin = true;
        //   this.provider.name = res.user.displayName;
        //   this.provider.email = res.user.email;
        //   this.provider.profilePicture = res.user.photoURL;
        //   console.log('from Github', res);
        //   this.showAlert('Success! you\'re logged in by Github');
        //   this.navCtrl.setRoot(HomePage, this.provider);
        // });
    };
    LoginPage.prototype.loginWithKakaoTalk = function () {
        // this.fire.auth.signInWithRedirect(new firebase.auth.OAuthProvider()).then(function () {
        //   firebase.auth().getRedirectResult().then(function (result) {
        //     // This gives you a Google Access Token.
        //     // You can use it to access the Google API.
        //     //var token = result.credential.accessToken;
        //     // The signed-in user info.
        //     var user = result.user;
        //   }).catch(function (error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        //   });
        // });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_kk_login_kk__["a" /* LoginKkPage */]);
    };
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.fb.logout()
            .then(function (res) { return _this.isLoggedIn = false; })
            .catch(function (e) { return console.log('Error logout from Facebook', e); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<!--creating login field. padding provides padding into container -->\n<ion-content padding>\n  <img src="assets/imgs/LoginIcon.png">\n  <br />\n  <ion-list radio-group [(ngModel)]="Role" (ionChange)="role($event)">\n    <ion-item>\n      <ion-label>{{ owner }}</ion-label>\n      <ion-radio value="Owner" (ionSelect)="Owner"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>{{ operator }}</ion-label>\n      <ion-radio value="Operator" (ionSelect)="Operator"></ion-radio>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block outline (click)="loginWithFacebook1()" *ngIf="!provider.loggedin">\n    <ion-icon name="logo-facebook"></ion-icon>\n    Login With Facebook\n  </button>\n\n  <!--\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" #email></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" #password></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block (click)="signIn()">Sign In</button>\n  <button ion-button block (click)="register()">Register</button>\n\n  <button ion-button block outline (click)="loginWithKakaoTalk()" *ngIf="!provider.loggedin">\n    <ion-icon name="logo-kakaoTalk"></ion-icon>\n    Login With KakaoTalk\n  </button>\n\n  <button ion-button block outline (click)="loginWithFacebook()" *ngIf="!provider.loggedin">\n    <ion-icon name="logo-facebook"></ion-icon>\n    Login With Facebook\n  </button>\n\n  <button ion-button block outline (click)="loginWithFacebook1()" *ngIf="!provider.loggedin">\n    <ion-icon name="logo-facebook"></ion-icon>\n    Login With Facebook Native\n  </button>\n\n  <button ion-button block outline (click)="loginWithGoogle()" *ngIf="!provider.loggedin">\n    <ion-icon name="logo-google"></ion-icon>\n    Login With Google\n  </button>\n\n  <button ion-button block outline (click)="loginWithTwitter()" *ngIf="!provider.loggedin">\n		<ion-icon name="logo-twitter"></ion-icon>\n		Login With Twitter\n  </button>\n  \n	<button ion-button block outline (click)="loginWithGithub()" *ngIf="!provider.loggedin">\n		<ion-icon name="logo-github"></ion-icon>\n		Login With Github\n  </button> -->\n\n</ion-content>'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_11__providers_app_app__["a" /* AppProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddvehiclePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AddvehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddvehiclePage = /** @class */ (function () {
    function AddvehiclePage(navCtrl, navParams, appprov, _translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this._translate = _translate;
        this.SelVeh = '';
        this.VehTypeTb = false;
        this.SelManu = '';
        this.ManuTB = false;
        this.getEmail();
        this._initializeTranslation();
    }
    AddvehiclePage.prototype.ionViewDidEnter = function () {
        this._initializeTranslation();
    };
    AddvehiclePage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    AddvehiclePage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    AddvehiclePage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("addvehicle.title");
        this.vehicle_type = this._translate.instant("addvehicle.vehicle_type");
        this.manufacturer = this._translate.instant("addvehicle.manufacturer");
        this.vehicle_details = this._translate.instant("addvehicle.vehicle_details");
        this.model_no = this._translate.instant("addvehicle.model_no");
        this.serial_no = this._translate.instant("addvehicle.serial_no");
        this.purchase_date = this._translate.instant("addvehicle.purchase_date");
        this.description = this._translate.instant("addvehicle.description");
        this.add = this._translate.instant("addvehicle.add");
        this.addmsgtitle = this._translate.instant("addvehicle.addmsgtitle");
        this.addmsg = this._translate.instant("addvehicle.addmsg");
    };
    /*Add vehicle page content */
    AddvehiclePage.prototype.AddVehicle = function () {
        var _this = this;
        if (this.SerialNo != '' &&
            this.ModelNo != '' &&
            this.PurchaseDate &&
            this.SelManu != '' &&
            this.Description != '' &&
            this.SelVeh != '') {
            var datestr = this.PurchaseDate.toString();
            this.appprov.addVeh(this.UsrEmail, this.SerialNo, this.ModelNo, datestr, this.SelManu, this.Description, this.SelVeh).then(function (res) {
                _this.appprov.presentAlert('Success!', 'Vehicle Successfully Added');
                _this.SerialNo = '';
                _this.ModelNo = '';
                _this;
                _this.Description = '';
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.appprov.presentAlert('Error!', 'Please fill up the form!');
        }
    };
    /*if vehicle type is none of the given*/
    AddvehiclePage.prototype.showOthrVType = function () {
        if (this.SelVeh == 'Others') {
            this.VehTypeTb = true;
        }
        else {
            this.VehTypeTb = false;
        }
    };
    /*if veh manufacturer type is none of the given*/
    AddvehiclePage.prototype.showOthrManu = function () {
        if (this.SelManu == 'Others') {
            this.ManuTB = true;
        }
        else {
            this.ManuTB = false;
        }
    };
    AddvehiclePage.prototype.getEmail = function () {
        var _this = this;
        this.appprov.getemail().then(function (res) {
            _this.UsrEmail = res;
            console.log('YAY' + _this.UsrEmail);
        }, function (err) {
            console.log(err);
        });
    };
    AddvehiclePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addvehicle',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/addvehicle/addvehicle.html"*/'<!--\n\n  Generated template for the AddvehiclePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title padding-top>\n\n      {{ title }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <form (ngsubmit)="AddVehicle()">\n\n    <ion-card>\n\n      <ion-card-header>\n\n        {{ vehicle_type }}: {{ SelVeh }}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-segment [(ngModel)]="SelVeh" name="VehicleType" (ionChange)="showOthrVType()">\n\n          <ion-segment-button value="Excavator">\n\n            <ion-icon name="custom-excavator2" color="dark"></ion-icon>\n\n          </ion-segment-button>\n\n          <ion-segment-button value="Compactor">\n\n            <ion-icon name="custom-dozer" color="dark"></ion-icon>\n\n          </ion-segment-button>\n\n          <ion-segment-button value="Loader">\n\n            <ion-icon name="custom-shovel" color="dark"></ion-icon>\n\n          </ion-segment-button>\n\n          <ion-segment-button value="Truck">\n\n              <ion-icon name="custom-truck" color="dark"></ion-icon>\n\n          </ion-segment-button>\n\n          <!-- <ion-segment-button value="Others">\n\n              Othrs\n\n          </ion-segment-button> -->\n\n        </ion-segment>\n\n        <ion-input type="text" placeholder="Vehicle Type" *ngIf="VehTypeTb" [(ngModel)]="OthrVehType" name="OthrVehTypeVal"></ion-input>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n          {{ manufacturer }} : {{ SelManu }}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-segment [(ngModel)]="SelManu" name="manufacturer" (ionChange)="showOthrManu()">\n\n            <ion-segment-button value="Volvo">\n\n                <ion-img src="assets/imgs/VolvoLogo.png" class="center_volvo_logo"></ion-img>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Hyundai">\n\n                <ion-img src="assets/imgs/hyundai.png" class="center_hyundai_logo"></ion-img>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Doosan">\n\n                <ion-img src="assets/imgs/Doosan.png" class="center_doosan_logo"></ion-img>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Komatsu">\n\n                <ion-img src="assets/imgs/Komatsu.png" class="center_komatsu_logo"></ion-img>\n\n            </ion-segment-button>\n\n            <ion-segment-button value="Others">\n\n                Others\n\n            </ion-segment-button>\n\n          </ion-segment>\n\n          <ion-input type="text" placeholder="Manufacturer" *ngIf="ManuTB" [(ngModel)]="OthrManu" name="OthrManuVal"></ion-input>\n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n      <ion-card-header>{{ vehicle_details }}</ion-card-header>\n\n      <ion-card-content>\n\n        <ion-item>\n\n          <ion-label color="primary" stacked>{{ model_no }}. </ion-label>\n\n          <ion-input type="text" placeholder="E.g. EC250" [(ngModel)]="ModelNo" name="ModelNoVal"></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label color="primary" stacked>{{ serial_no }}. </ion-label>\n\n          <ion-input type="text" placeholder="E.g. 987123" [(ngModel)]="SerialNo" name="SerialNoVal"></ion-input>\n\n        </ion-item>\n\n          <ion-item>\n\n            <ion-label color="primary" stacked>{{ purchase_date }}. </ion-label>\n\n            <ion-datetime displayFormat="YYYY/MM/DD" placeholder="YYYY-MM-DD" [(ngModel)]="PurchaseDate" name="PDateVal"></ion-datetime>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label color="primary" stacked>{{ description }}. </ion-label>\n\n            <ion-input type="text" placeholder="Please enter vehicle description here" [(ngModel)]="Description" name="DescriptionVal"></ion-input>\n\n          </ion-item>\n\n      </ion-card-content>\n\n    </ion-card>\n\n\n\n  </form>\n\n\n\n  </ion-content>\n\n\n\n  <ion-footer no-shadow>\n\n    <ion-toolbar position="bottom">\n\n  <button ion-button full (click) = "AddVehicle()">{{ add }}</button>\n\n  </ion-toolbar>\n\n  </ion-footer>'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/addvehicle/addvehicle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */]])
    ], AddvehiclePage);
    return AddvehiclePage;
}());

//# sourceMappingURL=addvehicle.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_viewoperator_viewoperator__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_kakao_sdk__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var OperatorsPage = /** @class */ (function () {
    function OperatorsPage(navCtrl, http, authService, navParams, appprov, modal, storage, _kakaoCordovaSDK, facebookNative, loadingCtrl, _translate, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.authService = authService;
        this.navParams = navParams;
        this.appprov = appprov;
        this.modal = modal;
        this.storage = storage;
        this._kakaoCordovaSDK = _kakaoCordovaSDK;
        this.facebookNative = facebookNative;
        this.loadingCtrl = loadingCtrl;
        this._translate = _translate;
        this.socialSharing = socialSharing;
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.getOperatorList(_this.access_token);
                _this._initializeTranslation();
            }
        });
    }
    OperatorsPage.prototype.ionViewDidEnter = function () {
        this._initializeTranslation();
    };
    OperatorsPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    OperatorsPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    OperatorsPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("operators.title");
        this.available = this._translate.instant("operators.available");
        this.busy = this._translate.instant("operators.busy");
        this.add_operator = this._translate.instant("operators.add_operator");
        this.downloadappmsgtitle = this._translate.instant("operators.downloadappmsgtitle");
        this.downloadappmsg1 = this._translate.instant("operators.downloadappmsg1");
        this.downloadappmsg2 = this._translate.instant("operators.downloadappmsg2");
    };
    OperatorsPage.prototype.getEmail = function (access_token) {
        var _this = this;
        this.appprov.getEmail(access_token).then(function (res) {
            _this.UsrEmail = res;
            //      this.getOperatorList(this.UsrEmail);
        }, function (err) {
            console.log(err);
        });
    };
    OperatorsPage.prototype.getOperatorList = function (email) {
        var _this = this;
        email = JSON.stringify(email);
        email = JSON.parse(email).email;
        this.appprov.getOperatorList(this.access_token, email).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            _this.operatorlist = data['operatorlist'];
            console.log(_this.operatorlist);
            _this.operatordetails_profileurl = data['operatordetails_profileurl'];
            _this.operatordetails_name = data['operatordetails_name'];
            _this.operatordetails_role = data['operatordetails_role'];
            _this.operatordetails_status = data['operatordetails_status'];
            _this.operatordetails_vehicles = data['operatordetails_vehicles'];
            _this.operatordetails_busydate = data['operatordetails_role'];
            _this.operators = [];
            console.log("fist checkpoint");
            for (var i = 0; i < _this.operatordetails_profileurl.length; i++) {
                if (_this.operatordetails_status[i] == "1") {
                    _this.operatordetails_status[i] = "assets/imgs/greencircle.jpg";
                    _this.operatordetails_busydate[i] = _this.available;
                }
                else {
                    var year = _this.operatordetails_status[i].substring(0, 4);
                    var month2 = month[parseInt(_this.operatordetails_status[i].substring(5, 7)) - 1];
                    var day = _this.operatordetails_status[i].substring(8, 10);
                    var date = day + " " + month2 + " " + year;
                    _this.operatordetails_busydate[i] = _this.busy + date.toString();
                    _this.operatordetails_status[i] = "assets/imgs/redcircle.png";
                }
                if (_this.operatordetails_vehicles[i] == "") {
                    _this.operators.push({
                        operatorlist: _this.operatorlist[i],
                        operatordetails_profileurl: _this.operatordetails_profileurl[i],
                        operatordetails_name: _this.operatordetails_name[i],
                        operatordetails_role: _this.operatordetails_role[i],
                        operatordetails_status: _this.operatordetails_status[i],
                        operatordetails_vehicles: "",
                        operatordetails_busydate: _this.operatordetails_busydate[i],
                    });
                }
                else {
                    console.log("pushing");
                    console.log(_this.operatorlist);
                    _this.operators.push({
                        operatorlist: _this.operatorlist[i],
                        operatordetails_profileurl: _this.operatordetails_profileurl[i],
                        operatordetails_name: _this.operatordetails_name[i],
                        operatordetails_role: _this.operatordetails_role[i],
                        operatordetails_status: _this.operatordetails_status[i],
                        operatordetails_vehicles: _this.operatordetails_vehicles[i],
                        operatordetails_busydate: _this.operatordetails_busydate[i],
                    });
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    OperatorsPage.prototype.addOperator = function () {
        var _this = this;
        console.log('clicked');
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal.create("AddoperatorPage", { access_token: this.access_token }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log(data);
            _this.getEmail(_this.access_token);
            _this.getOperatorList(_this.access_token);
        });
    };
    OperatorsPage.prototype.viewOperator = function (event, email) {
        var _this = this;
        console.log("Viewing operator");
        //this.navCtrl.push(ViewoperatorPage, {'email':email});
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var myModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_6__pages_viewoperator_viewoperator__["a" /* ViewoperatorPage */], { email: email }, myModalOptions);
        myModal.present();
        myModal.onDidDismiss(function (data) {
            console.log(data);
            _this.getEmail(_this.access_token);
            _this.getOperatorList(_this.access_token);
        });
    };
    OperatorsPage.prototype.kkShare = function () {
        var _this = this;
        this.showLoader();
        var OTP;
        this.appprov.MakeOTP(this.access_token).then(function (res) {
            console.log(res);
            OTP = res.otp;
            console.log('i am using this' + OTP);
            console.log("Going to kakao invite api");
            var InviteTemplate = {
                templateId: '13618',
                title: _this.downloadappmsgtitle,
                description: _this.downloadappmsg1 + ': ' + OTP + _this.downloadappmsg2
            };
            _this._kakaoCordovaSDK.sendLinkCustom(InviteTemplate).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
            _this.loading.dismiss();
        });
    };
    OperatorsPage.prototype.fbShare = function () {
        var _this = this;
        this.showLoader();
        var OTP;
        this.appprov.MakeOTP(this.access_token).then(function (res) {
            console.log(res);
            OTP = res.otp;
            console.log('i am using this ' + OTP);
            _this.socialSharing.canShareVia("com.facebook.katana")
                .then(function (res) {
                if (res == "OK") {
                    console.log("canShareVia, with response- " + res);
                    // this.socialSharing.shareViaFacebook("Share one awesome APP ConstructEQ for you.", "ConstructEQ", "http://play.google.com/store/apps/details?id=com.digitalce.digitalce")
                    _this.socialSharing.shareViaFacebook(_this.downloadappmsg1 + ': ' + OTP + " " + _this.downloadappmsg2 + " " +
                        'http://play.google.com/store/apps/details?id=com.digitalce.digitalce')
                        .catch(function (ex) {
                        console.log(ex);
                    })
                        .then(function (res) {
                        console.log("shareViaFacebook: Success, with response- " + res);
                    }, function (error) {
                        console.log(error);
                        _this.loading.dismiss();
                    });
                }
            }, function (error) {
                console.log(error);
                _this.loading.dismiss();
            });
            _this.loading.dismiss();
        });
    };
    OperatorsPage.prototype.emailShare = function () {
        var _this = this;
        this.showLoader();
        var OTP;
        this.appprov.MakeOTP(this.access_token).then(function (res) {
            console.log(res);
            OTP = res.otp;
            console.log('i am using this ' + OTP);
            // Check if sharing via email is supported
            _this.socialSharing.canShareViaEmail()
                .then(function (res) {
                if (res == "OK") {
                    console.log(res);
                    // Share via email
                    _this.socialSharing.shareViaEmail(_this.downloadappmsg1 + ': ' + OTP + " " + _this.downloadappmsg2 + " " +
                        'http://play.google.com/store/apps/details?id=com.digitalce.digitalce', _this.downloadappmsgtitle, ['recipient@example.org'])
                        .then(function (res) {
                        console.log("ShareViaEmail status: " + res);
                    }, function (error) {
                        console.log("ShareViaEmail error: " + error);
                    });
                }
            }, function (error) {
                console.log(error);
            });
            _this.loading.dismiss();
        });
    };
    OperatorsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    OperatorsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-operators',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/operators/operators.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      {{ title }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <!-- <ion-grid>\n\n      <ion-col col-2><img src="../../assets/imgs/add_button.png" style="width:4rem; height:4rem" (click)="addOperator($event);"></ion-col>\n\n  </ion-grid> -->\n\n\n\n\n\n  <ion-list>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item *ngFor="let operator of operators">\n\n        <ion-row class="bottomRow" (click)="viewOperator($event, operator.operatorlist);">\n\n          <ion-col col-2>\n\n              <ion-avatar>\n\n                <img [src] = operator.operatordetails_profileurl>\n\n              </ion-avatar>\n\n          </ion-col>\n\n          <ion-col col-8>\n\n            {{operator.operatordetails_name}}\n\n            <img [src] = operator.operatordetails_status style="width:1rem; height:1rem"> {{operator.operatordetails_busydate}}\n\n            <br>\n\n            <img *ngFor="let vehicles of operator.operatordetails_vehicles" [src] = vehicles style="width:4rem; height:4rem">   \n\n          </ion-col>\n\n          <!-- <ion-col col-2>\n\n            <img src = "../../assets/imgs/more_button.png" style="width:2rem; height:2rem" (click)="viewOperator($event, operator.operatorlist);">\n\n          </ion-col> -->\n\n        </ion-row>\n\n      </ion-item>    \n\n    </ion-grid>\n\n  </ion-list>\n\n    \n\n</ion-content>\n\n\n\n<ion-footer no-shadow>\n\n    <ion-toolbar position="bottom">\n\n    <button ion-button (click)="addOperator($event)" style="width: 70%"> {{ add_operator }}</button>\n\n    <!-- <img src="assets/imgs/kakaotalk.png" style="width:50px; height:50px" (click)="kkShare($event)" style="vertical-align: bottom"> -->\n\n    <img src="assets/imgs/facebook.png" style="width:40px; height:40px" (click)="fbShare($event)" style="vertical-align: bottom">\n\n    <img src="assets/imgs/email.png" style="width:50px; height:50px" (click)="emailShare($event)" style="vertical-align: bottom">\n\n    </ion-toolbar>\n\n</ion-footer>\n\n\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/operators/operators.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8_kakao_sdk__["b" /* KakaoCordovaSDK */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], OperatorsPage);
    return OperatorsPage;
}());

//# sourceMappingURL=operators.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewoperatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the ViewoperatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var ViewoperatorPage = /** @class */ (function () {
    function ViewoperatorPage(navCtrl, navParams, appprov, storage, view, alertCtrl, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.storage = storage;
        this.view = view;
        this.alertCtrl = alertCtrl;
        this._translate = _translate;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.getOperatorDetails(_this.email);
                _this.getChartData(_this.email);
                _this.getOperatorSchedule(_this.email);
                _this._initializeTranslation();
            }
        });
        this.email = navParams.get('email');
    }
    ViewoperatorPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad ViewoperatorPage');
        console.log("operator email is " + this.email);
        this._initializeTranslation();
        // this.getOperatorDetails(this.email);
        // this.getChartData(this.email);
        // this.getOperatorSchedule(this.email);
        // var job = {date_from:["2018-09-20", "2018-09-30","2018-09-12","2018-10-12"]}
    };
    ViewoperatorPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    ViewoperatorPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    ViewoperatorPage.prototype._initializeTranslation = function () {
        this.txtoday = this._translate.instant("viewoperator.txtoday");
        this.delete_contact = this._translate.instant("viewoperator.delete_contact");
        this.assigned = this._translate.instant("viewoperator.assigned");
        this.job_count = this._translate.instant("viewoperator.job_count");
        this.week = this._translate.instant("viewoperator.week");
        this.month = this._translate.instant("viewoperator.month");
        this.year = this._translate.instant("viewoperator.year");
        this.deletemsgtitle = this._translate.instant("viewoperator.deletemsgtitle");
        this.deletemsg = this._translate.instant("viewoperator.deletemsg");
        this.confirm = this._translate.instant("viewoperator.confirm");
    };
    ViewoperatorPage.prototype.getOperatorSchedule = function (email) {
        var _this = this;
        this.appprov.getOperatorSchedule(this.access_token, email).then(function (res) {
            console.log(res);
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            var job_desc = data['job_desc'];
            var job_datefrom = data['job_datefrom'];
            var job_dateto = data['job_dateto'];
            console.log(job_dateto);
            var job = { 'job_desc': job_desc, 'job_dateto': job_dateto, 'job_datefrom': job_datefrom };
            console.log(job);
            _this.loadEvents(job);
            _this.plotSchedule(job);
        }, function (err) {
            console.log(err);
        });
    };
    ViewoperatorPage.prototype.getOperatorDetails = function (email) {
        var _this = this;
        this.appprov.getOperatorDetails(email, this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.name = data['name'];
            _this.vehicle_img = data['vehicle_img'];
            _this.vehicle_type = data['vehicle_type'];
            _this.PhotoUrl = data['profile_image_url'];
            _this.vehicles = [];
            for (var i = 0; i < _this.vehicle_img.length; i++) {
                _this.vehicles.push({
                    vehicle_type: _this.vehicle_type[i],
                    vehicle_img: _this.vehicle_img[i],
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    //comment this block sn 26
    //TODAY chart
    ViewoperatorPage.prototype.getJobStats = function () {
        if (this.owner_job[0] == '0') {
            this.owner_job[0] = '2';
        }
        if (this.operator_job[0] == '0') {
            this.owner_job[0] = (parseInt(this.owner_job[0]) + 1).toString();
        }
        // console.log (this.owner_job[0]);
        // console.log(this.operator_job[0]);
        this.doughnutChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
                labels: [this.assigned, this.job_count],
                datasets: [{
                        label: "Operator Utilization",
                        // data: [this.operator_job[0], parseInt(this.owner_job[0])-1],
                        data: ['5', '10'],
                        backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
                        borderColor: "rbga(0, 110, 255, 1)",
                        borderWidth: 1
                    }]
            }
        });
    };
    ViewoperatorPage.prototype.getJobStats2 = function () {
        if (this.owner_job[1] == '0') {
            this.owner_job[1] = '2';
        }
        if (this.operator_job[1] == '0') {
            this.owner_job[1] = (parseInt(this.owner_job[0]) + 1).toString();
        }
        this.doughnutChart2 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas2.nativeElement, {
            type: 'doughnut',
            data: {
                labels: [this.assigned, this.job_count],
                datasets: [{
                        label: "Operator utilization",
                        data: [this.operator_job[1], parseInt(this.owner_job[1]) - 1],
                        backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
                        borderColor: "rbga(0, 110, 255, 1)",
                        borderWidth: 1
                    }]
            }
        });
    };
    ViewoperatorPage.prototype.getJobStats3 = function () {
        if (this.owner_job[2] == '0') {
            this.owner_job[2] = '2';
        }
        if (this.operator_job[2] == '0') {
            this.owner_job[2] = (parseInt(this.owner_job[0]) + 1).toString();
        }
        this.doughnutChart3 = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.doughnutCanvas3.nativeElement, {
            type: 'doughnut',
            data: {
                labels: [this.assigned, this.job_count],
                datasets: [{
                        label: "Operator utilization",
                        data: [this.operator_job[2], parseInt(this.owner_job[2]) - 1],
                        backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
                        borderColor: "rbga(0, 110, 255, 1)",
                        borderWidth: 1
                    }]
            }
        });
    };
    //comment this blok sn 26
    //YEAR chart
    // getJobStats4(){
    //   if (this.owner_job[3] == '0'){
    //     this.owner_job[3] = '2';
    //   }
    //   if (this.operator_job[3] == '0'){
    //     this.owner_job[3] = (parseInt(this.owner_job[0])+ 1).toString();
    //   }
    //   this.doughnutChart4 = new Chart(this.doughnutCanvas4.nativeElement, {
    //     type: 'doughnut',
    //     data:{
    //       labels: [this.assigned, this.job_count],
    //       datasets: [{
    //         label: "Operator utilization",
    //         data: [this.operator_job[3], parseInt(this.owner_job[3])-1],
    //         backgroundColor: ["rgba(0, 110,255, 0.2)", "rgba(255,0,0,0.2)"],
    //         borderColor: "rbga(0, 110, 255, 1)",
    //         borderWidth:1
    //       }]
    //     }
    //   });
    // }
    ViewoperatorPage.prototype.getChartData = function (email) {
        var _this = this;
        this.appprov.getChartData(email, this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            //2 lines below does not work. does not assign value to variable.
            _this.operator_job = data['operator'];
            _this.owner_job = data['owner'];
            console.log(_this.operator_job);
            if (_this.owner_job) {
                _this.getJobStats();
                _this.getJobStats2();
                _this.getJobStats3();
                // this.getJobStats4();
            }
            else {
                _this.owner_job = ['0', '0', '0', '0'];
                _this.operator_job = ['0', '0', '0', '0'];
                _this.getJobStats();
                _this.getJobStats2();
                _this.getJobStats3();
                // this.getJobStats4();
            }
        }, function (err) {
            console.log(err);
        });
    };
    ViewoperatorPage.prototype.loadEvents = function (job) {
        //var job = {jid:["001", "002"], date_from:["2018-10-10", "2018-10-12"], date_to:["2018-10-20","2018-10-22"]}
        this.eventSource = this.plotSchedule(job);
    };
    ViewoperatorPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    ViewoperatorPage.prototype.onEventSelected = function (event) {
        console.log("Event selected:" + event.startTime + '-' + event.endTime + "," + event.title);
    };
    ViewoperatorPage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    ViewoperatorPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    ViewoperatorPage.prototype.onTimeSelected = function (ev) {
        console.log("Selected time: " + ev.selectedTime + ", hasEvents: " + (ev.events !== undefined && ev.events.length !== 0) + ", disabled: " + ev.disabled);
    };
    ViewoperatorPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    ViewoperatorPage.prototype.plotSchedule = function (jobs) {
        var job = [];
        var dates_from = jobs.job_datefrom;
        var dates_to = jobs.job_dateto;
        var jids = jobs.job_desc;
        var today = new Date();
        for (var i = 0; i < dates_from.length; i++) {
            // var temp = parseInt(dates_to[i].substring(8,10), 10) + 1;
            // dates_to[i] = temp+dates_to[i].substring(5,7)+dates_to[i].substring(0,4);
            // var d = dates_from[i].substring(4,8)+"/"+dates_from[i].substring(0,2)+"/"+dates_from[i].substring(2,4);
            var start_day = new Date(Date.UTC(dates_from[i].substring(0, 4), dates_from[i].substring(5, 7) - 1, parseInt(dates_from[i].substring(8, 10), 10)));
            var end_day = new Date(Date.UTC(dates_to[i].substring(0, 4), dates_to[i].substring(5, 7) - 1, parseInt(dates_to[i].substring(8, 10), 10) + 1));
            console.log("pushing job");
            job.push({
                title: jids[i],
                startTime: start_day,
                endTime: end_day,
                allDay: true
            });
        }
        return job;
    };
    ViewoperatorPage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    ViewoperatorPage.prototype.deleteOperator = function () {
        var _this = this;
        console.log("Deleting Contact");
        var alert = this.alertCtrl.create({
            title: this.deletemsgtitle,
            message: this.deletemsg,
            buttons: [
                {
                    text: this.confirm,
                    handler: function () {
                        console.log('Deleting');
                        _this.appprov.deleteOperator(_this.email, _this.access_token).then(function (res) {
                            var data = JSON.stringify(res);
                            data = JSON.parse(data);
                            console.log(data['result']);
                        }, function (err) {
                            console.log(err);
                        });
                        //this.navCtrl.pop();
                        _this.closeModal();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("Canceled");
                    }
                }
            ]
        });
        alert.present();
    };
    ViewoperatorPage.prototype.closeModal = function () {
        console.log("closing modal");
        this.view.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas'),
        __metadata("design:type", Object)
    ], ViewoperatorPage.prototype, "doughnutCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas2'),
        __metadata("design:type", Object)
    ], ViewoperatorPage.prototype, "doughnutCanvas2", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas3'),
        __metadata("design:type", Object)
    ], ViewoperatorPage.prototype, "doughnutCanvas3", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('doughnutCanvas4'),
        __metadata("design:type", Object)
    ], ViewoperatorPage.prototype, "doughnutCanvas4", void 0);
    ViewoperatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewoperator',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/viewoperator/viewoperator.html"*/'<!--\n\n  Generated template for the ViewoperatorPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- This page is to the owner\'s operator tab to view the individual operator work details -->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n      <button ion-buttons (click)="closeModal()">\n\n          <ion-icon name="arrow-back"></ion-icon>\n\n        </button>\n\n    <ion-buttons end>\n\n      <button ion-bitton (click)="deleteOperator()">{{ delete_contact }}</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n      <ion-row>\n\n      <ion-col col-4>\n\n          <ion-avatar>\n\n              <img [src] = "PhotoUrl">\n\n            </ion-avatar>    \n\n      </ion-col>\n\n      <ion-col col-1></ion-col>\n\n      <ion-col col-7>\n\n        <h2>{{ name }}</h2>\n\n        <br>\n\n        <img *ngFor="let vehicle of vehicles" [src] = vehicle.vehicle_img style="width:4rem; height:4rem">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n    <!-- <ion-buttons end>\n\n    <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n    <button ion-button (click)="changeMode(\'month\')">M</button>\n\n    <button ion-button (click)="changeMode(\'week\')">W</button>\n\n    <button ion-button (click)="changeMode(\'day\')">D</button>\n\n    <button ion-button (click)="loadEvents()">Load Events</button>\n\n  </ion-buttons> -->\n\n  <div padding> \n\n      <h3 align="center">{{viewTitle}}</h3>\n\n        <calendar [eventSource] = "eventSource"\n\n                  [calendarMode] = "calendar.mode"\n\n                  [currentDate] = "calendar.currentDate"\n\n                  (onCurrentDateChanged) = "onCurrentDateChanged($event)"\n\n                  (onEventSelected) = "onEventSelected($event)"\n\n                  (onTitleChanged) = "onViewTitleChanged($event)"\n\n                  (onTimeSelected) = "onTimeSelected($event)"\n\n                  step="30">\n\n        </calendar>\n\n      </div>\n\n<!-- //comment this block sn 26 -->\n\n<ion-card>\n\n  <ion-card-header>\n\n    {{ txtoday }}\n\n  </ion-card-header>\n\n  <ion-card-content>\n\n    <canvas #doughnutCanvas></canvas>\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<ion-card>\n\n    <ion-card-header>\n\n      {{ week }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #doughnutCanvas2></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-card-header>\n\n        {{ month }}\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <canvas #doughnutCanvas3></canvas>\n\n      </ion-card-content>\n\n    </ion-card>\n\n    <!-- //comment this block sn 26 -->\n\n    <!-- <ion-card>\n\n        <ion-card-header>\n\n          {{ year }}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <canvas #doughnutCanvas4></canvas>\n\n        </ion-card-content>\n\n      </ion-card> -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/viewoperator/viewoperator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], ViewoperatorPage);
    return ViewoperatorPage;
}());

//# sourceMappingURL=viewoperator.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_kakao_sdk__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http, authService, alertCtrl, navParams, appprov, storage, kakao, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.http = http;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.storage = storage;
        this.kakao = kakao;
        this._translate = _translate;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        storage.ready().then(function () {
            storage.get('access_token').then(function (val) {
                if (val == null) {
                    console.log("No acccess token");
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                }
                else {
                    console.log("Got access token");
                    _this.access_token = val.toString();
                    _this.getUserInfo();
                    _this.getVehicleStatus('');
                    _this.getOwnerJoblist();
                    _this._initializeTranslation();
                }
            }); //storage.get('access_token').then((val)
        }); //storage.ready().then(()
        //storage.set('access_token', 'LgiiqQDpq2jI_tJTVLxFSd9yJM7agvjomsd2oAopdtYAAAFmFHth7Q');
        //storage.clear();
    } // constructor
    /*app starts here. meaning all the id, translation, user info, job info, vehicle info, and all the info etc
      All are functions
    */
    HomePage.prototype.ionViewDidEnter = function () {
        this.getUserInfo();
        this.getVehicleStatus('');
        this.getOwnerJoblist();
        this._initializeTranslation();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this._initializeTranslation();
    };
    HomePage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    HomePage.prototype._translateLanguage = function () {
        //  this._translate.use(this.language);
        this._translate.setDefaultLang(this.language);
        this._initializeTranslation();
    };
    HomePage.prototype._initializeTranslation = function () {
        var _this = this;
        setTimeout(function () {
            _this.title = _this._translate.instant("home.title");
            _this.welcome = _this._translate.instant("home.welcome");
            _this.forecast = _this._translate.instant("home.forecast");
            _this.fleet = _this._translate.instant("home.fleet");
            _this.jobstats = _this._translate.instant("home.jobstats");
        }, 200);
    };
    HomePage.prototype.addCommaNumber = function (text) {
        var x = (text.replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        return x;
    };
    HomePage.prototype.presentAlert = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: msg,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    //On start and access database to retrieve owner information
    HomePage.prototype.getOwnerJoblist = function () {
        var _this = this;
        this.appprov.getOwnerJoblist(this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            var job_desc = data['job_desc'];
            var job_datefrom = data['job_datefrom'];
            var job_dateto = data['job_dateto'];
            console.log(job_dateto);
            var job = { 'job_desc': job_desc, 'job_dateto': job_dateto, 'job_datefrom': job_datefrom };
            console.log(job);
            _this.loadEvents(job);
            _this.plotSchedule(job);
            _this.getJobStats({ 'date_from': job_datefrom });
            _this.getEarnings();
            _this.getFleetUsage();
            _this.getOperatorUsage();
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getUserInfo = function () {
        var _this = this;
        this.authService.getUserinfo(this.access_token).then(function (result) {
            _this.userinfo = result;
            _this.userinfo = JSON.parse(_this.userinfo._body);
            _this.Uemail = _this.userinfo.email;
            _this.Udob = _this.userinfo.dob;
            _this.Uname = _this.userinfo.name;
            _this.uimg = _this.userinfo.profile_image_url;
            _this.Ucompany = _this.userinfo.company_name;
            _this.Ucompanyadd = _this.userinfo.company_add;
            _this.appprov.setemail(_this.userinfo.email);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getVehicleStatus = function (datetime) {
        var _this = this;
        console.log("-----------------------------");
        this.appprov.getEmail(this.access_token).then(function (res) {
            _this.UsrEmail = res;
            _this.getVehicle(res, datetime);
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.getVehicle = function (email, datetime) {
        var _this = this;
        email = JSON.stringify(email);
        email = JSON.parse(email).email;
        this.appprov.getVehicleStatus(email, datetime).then(function (res) {
            _this.fleets = res;
            _this.vehicle_type = _this.fleets.vehicle_type;
            _this.ImgUrl = _this.fleets.ImgUrl;
            _this.vehicle_count = _this.fleets.vehicle_count;
            _this.vehicles = [];
            _this.vehicle_status = _this.fleets.vehicle_type;
            console.log(JSON.stringify(res));
            console.log(_this.vehicle_type.length);
            //To list the number of vehicle types and vehicles in the fleet added by owner
            for (var i = 0; i < _this.vehicle_type.length; i++) {
                if (_this.vehicle_count[i] == "0") {
                    _this.vehicle_status[i] = "assets/imgs/redcircle.png";
                }
                else {
                    _this.vehicle_status[i] = "assets/imgs/greencircle.jpg";
                }
                _this.vehicles.push({
                    vehicle_type: _this.vehicle_type[i],
                    ImgUrl: _this.ImgUrl[i],
                    vehicle_status: _this.vehicle_status[i],
                    vehicle_count: _this.vehicle_count[i],
                });
            } // end of for loop
        }, function (err) {
            console.log('error');
        });
    }; //end of getVehicle
    /*To create the job statistics on home page (owner)*/
    HomePage.prototype.getJobStats = function (jobs) {
        //add label x-axis
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var today = new Date();
        var month = today.getUTCMonth();
        var labels_month = [];
        var month_range = 4;
        for (var i = 0; i < month_range; i++) {
            labels_month.push(months[(month + 12 - i) % 12]);
        }
        labels_month.reverse();
        for (var i = 1; i < month_range; i++) {
            labels_month.push(months[(month + 12 + i) % 12]);
        }
        /*
        Old codes
        var labels_end = month-6;
        for (let i = 0; i<6; i++){
          labels_month.push(months[month-5+i]);
        } */
        // add data y-axis
        var date_from = jobs.date_from;
        var data_y = [0, 0, 0, 0, 0, 0];
        for (var j = 0; j < date_from.length; j++) {
            var temp = parseInt(date_from[j].substring(5, 7), 10);
            console.log(temp);
            console.log(".....................................");
            for (var p = 0; p < 6; p++) {
                if ((temp - 1) == (month - p)) {
                    data_y[5 - p] += 1;
                }
            }
        }
        //creating of the bar graph
        console.log(data_y);
        this.barChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"](this.barCanvas.nativeElement, {
            type: 'bar',
            data: {
                labels: labels_month,
                datasets: [{
                        label: this.jobstats,
                        data: data_y,
                        backgroundColor: "rgba(0, 110,255, 0.2)",
                        borderColor: "rbga(0, 110, 255, 1)",
                        borderWidth: 1
                    }]
            }
        });
    }; // end of getJobStats
    // numberwithcommas(x) {
    //   return x.toString().replace(/\B(?=(\d{3}+(?!\d)))/g, ",");
    // };
    HomePage.prototype.getEarnings = function () {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var today = new Date();
        var month = today.getUTCMonth();
        var labels_month = [];
        var month_range = 4;
        for (var i = 0; i < month_range; i++) {
            labels_month.push(months[(month + 12 - i) % 12]);
        }
        labels_month.reverse();
        for (var i = 1; i < month_range; i++) {
            labels_month.push(months[(month + 12 + i) % 12]);
        }
        var dataPack1 = ['5', '14', '14', '4', '30', '45', '60'];
        var dataPack2 = ['10', '35', '50', '10', '35', '50', '90'];
        this.EarningsChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"](this.barCanvasEarnings.nativeElement, {
            type: 'bar',
            data: {
                labels: labels_month,
                datasets: [
                    {
                        label: 'Expected',
                        data: dataPack1,
                        // backgroundColor: "rgba(0, 110,255, 0.2)",
                        backgroundColor: "rgba(107,142,35, 0.2)",
                        borderWidth: 1
                    },
                    {
                        label: 'Total',
                        data: dataPack2,
                        // backgroundColor: "rgba(51, 102, 102, 0.2)", //light green
                        // backgroundColor: "rgba(225, 58, 55, 0.7)", //red            
                        backgroundColor: "rgba(152,251,152, 0.2)",
                        borderWidth: 1
                    },
                ]
            },
            options: {
                animation: {
                    duration: 10,
                },
                tooltips: {
                    mode: 'label',
                    callbacks: {
                        label: function (tooltipItem, data) {
                            return data.datasets[tooltipItem.datasetIndex].label + ": " + tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                            // return this.addCommaNumber(tooltipItem.yLabel.toString());                       
                        },
                    },
                },
                scales: {
                    xAxes: [{
                            stacked: true,
                            gridLines: { display: false },
                        }],
                    yAxes: [{
                            stacked: false,
                            // gridLines: {display:false},
                            ticks: {
                                // callback: function(value){ return this.addCommaNumber(value);},          
                                // beginatZero: true,
                                min: 0,
                            },
                        }],
                },
                legend: { display: true }
            }
        });
    };
    HomePage.prototype.getFleetUsage = function () {
        // var specificMachine = [10,15,6,12];
        var baseDays = 22;
        var vehNum = 4;
        var fleetDays = baseDays * vehNum;
        var fleetPercentage = Math.round(((10 + 15 + 6 + 12) / fleetDays) * 100);
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var today = new Date();
        var month = today.getUTCMonth();
        var labels_month = [];
        var month_range = 4;
        var dataPack1 = [fleetPercentage, '14', '14', '4', '30', '45', '60'];
        for (var i = 0; i < month_range; i++) {
            labels_month.push(months[(month + 12 - i) % 12]);
        }
        labels_month.reverse();
        for (var i = 1; i < month_range; i++) {
            labels_month.push(months[(month + 12 + i) % 12]);
        }
        this.FleetUsageChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"](this.barCanvasFleetUsage.nativeElement, {
            type: 'bar',
            data: {
                labels: labels_month,
                datasets: [{
                        label: 'Statistics',
                        data: dataPack1,
                        backgroundColor: "rgba(0, 110,255, 0.2)",
                        borderColor: "rbga(0, 110, 255, 1)",
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                min: 0,
                                max: 100,
                                callback: function (value) { return value + "%"; }
                            },
                            scaleLabel: { display: true }
                        }],
                },
                legend: { display: true }
            }
        });
    };
    HomePage.prototype.getOperatorUsage = function () {
        // var specificMachine = [10,15,6,12];
        var baseDays = 22;
        var vehNum = 4;
        var fleetDays = baseDays * vehNum;
        var fleetPercentage = Math.round(((10 + 15 + 6 + 12) / fleetDays) * 100);
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var today = new Date();
        var month = today.getUTCMonth();
        var labels_month = [];
        var month_range = 4;
        var dataPack1 = [fleetPercentage, '14', '14', '4', '30', '45', '60'];
        for (var i = 0; i < month_range; i++) {
            labels_month.push(months[(month + 12 - i) % 12]);
        }
        labels_month.reverse();
        for (var i = 1; i < month_range; i++) {
            labels_month.push(months[(month + 12 + i) % 12]);
        }
        this.OperatorUsageChart = new __WEBPACK_IMPORTED_MODULE_7_chart_js__["Chart"](this.barCanvasOperatorUsage.nativeElement, {
            type: 'bar',
            data: {
                labels: labels_month,
                datasets: [{
                        label: 'Statistics',
                        data: dataPack1,
                        backgroundColor: "rgba(0, 110,255, 0.2)",
                        borderColor: "rbga(0, 110, 255, 1)",
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                min: 0,
                                max: 100,
                                callback: function (value) { return value + "%"; }
                            },
                            scaleLabel: { display: true }
                        }],
                },
                legend: { display: true }
            }
        });
    };
    HomePage.prototype.loadEvents = function (job) {
        this.eventSource = this.plotSchedule(job);
    };
    /*title of job*/
    HomePage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    HomePage.prototype.onEventSelected = function (event) {
        console.log("Event selected:" + event.startTime + '-' + event.endTime + "," + event.title);
    };
    HomePage.prototype.changeMode = function (mode) {
        this.calendar.mode = mode;
    };
    HomePage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    HomePage.prototype.onTimeSelected = function (ev) {
        console.log("Selected time: " + ev.selectedTime + ", hasEvents: " + (ev.events !== undefined && ev.events.length !== 0) + ", disabled: " + ev.disabled);
        this.getVehicleStatus(ev.selectedTime);
        this.displaydate = ev.selectedTime.toString().substring(4, 15);
    };
    HomePage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    /*creating of new job. add job button*/
    HomePage.prototype.plotSchedule = function (jobs) {
        var job = [];
        var dates_from = jobs.job_datefrom;
        var dates_to = jobs.job_dateto;
        var jids = jobs.job_desc;
        var today = new Date();
        for (var i = 0; i < dates_from.length; i++) {
            // var temp = parseInt(dates_to[i].substring(8,10), 10) + 1;
            // dates_to[i] = temp+dates_to[i].substring(5,7)+dates_to[i].substring(0,4);
            // var d = dates_from[i].substring(4,8)+"/"+dates_from[i].substring(0,2)+"/"+dates_from[i].substring(2,4);
            var start_day = new Date(Date.UTC(dates_from[i].substring(0, 4), dates_from[i].substring(5, 7) - 1, parseInt(dates_from[i].substring(8, 10), 10)));
            var end_day = new Date(Date.UTC(dates_to[i].substring(0, 4), dates_to[i].substring(5, 7) - 1, parseInt(dates_to[i].substring(8, 10), 10) + 1));
            console.log("pushing job");
            job.push({
                title: jids[i],
                startTime: start_day,
                endTime: end_day,
                allDay: true
            });
        }
        return job;
    }; // end of plotSchedule
    HomePage.prototype.SwithProfile = function () {
        console.log('Clicked');
        this.storage.clear();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        console.log('yes');
    };
    HomePage.prototype.onRangeChanged = function (ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvas'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvasEarnings'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvasEarnings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvasFleetUsage'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvasFleetUsage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('barCanvasOperatorUsage'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "barCanvasOperatorUsage", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n  <script src="//developers.kakao.com/sdk/js/kakao.min.js"></script>\n\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.min.js"></script>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-3>\n\n        <ion-avatar>\n\n          <img [src] = "uimg">\n\n        </ion-avatar>\n\n      </ion-col>\n\n      <ion-col col-2></ion-col>\n\n      <ion-col col-7> \n\n        <h3> {{ welcome }}, {{Uname}} </h3>\n\n          <b style="font-size:1.2em">{{Ucompany}},</b>\n\n          <br><b style="font-size:1.2em">{{Ucompanyadd}}</b>\n\n      </ion-col>          \n\n    </ion-row>\n\n    \n\n    <ion-row>\n\n      <ion-col><a href="#" (click)="SwithProfile()">Switch Profile (Developement only)</a></ion-col>\n\n    </ion-row>\n\n      \n\n    <ion-item>\n\n      <ion-select [(ngModel)]="language" (ionChange)="changeLanguage()" placeholder=language>\n\n        <ion-option value="en">English</ion-option>\n\n        <ion-option value="kr">한국어</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n\n\n  </ion-grid>\n\n  <h2> {{ forecast }}</h2>\n\n  <u>{{ fleet }} {{ displaydate }}</u>\n\n  \n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col col-4 *ngFor="let vehicle of vehicles">\n\n        <img [src] = vehicle.ImgUrl style="width:4rem; height:4rem">\n\n        <img [src] = vehicle.vehicle_status style="width:1rem; height:1rem">\n\n          {{vehicle.vehicle_count}}\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <!-- <ion-buttons end>\n\n    <button ion-button [disabled]="isToday" (click)="today()">Today</button>\n\n    <button ion-button (click)="changeMode(\'month\')">M</button>\n\n    <button ion-button (click)="changeMode(\'week\')">W</button>\n\n    <button ion-button (click)="changeMode(\'day\')">D</button>\n\n    <button ion-button (click)="loadEvents()">Load Events</button>\n\n  </ion-buttons> -->\n\n  <div padding>\n\n  <h3 align="center">{{viewTitle}}</h3>\n\n    <calendar [eventSource] = "eventSource"\n\n              [calendarMode] = "calendar.mode"\n\n              [currentDate] = "calendar.currentDate"\n\n              (onCurrentDateChanged) = "onCurrentDateChanged($event)"\n\n              (onEventSelected) = "onEventSelected($event)"\n\n              (onTitleChanged) = "onViewTitleChanged($event)"\n\n              (onTimeSelected) = "onTimeSelected($event)"\n\n              step="30">\n\n    </calendar>\n\n  </div> \n\n  \n\n  <ion-card>\n\n    <ion-card-header>\n\n      {{ jobstats }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvas></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n      <ion-card-header>   \n\n             Earnings (MWon)       \n\n        </ion-card-header>\n\n    <ion-card-content>\n\n      <canvas #barCanvasEarnings></canvas>\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>   \n\n           Fleet Usage %\n\n      </ion-card-header>\n\n  <ion-card-content>\n\n    <canvas #barCanvasFleetUsage></canvas>\n\n  </ion-card-content>\n\n  </ion-card>\n\n  \n\n  <ion-card>\n\n    <ion-card-header>   \n\n           Operator Usage %\n\n      </ion-card-header>\n\n  <ion-card-content>\n\n    <canvas #barCanvasOperatorUsage></canvas>\n\n  </ion-card-content>\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_8_kakao_sdk__["b" /* KakaoCordovaSDK */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], HomePage);
    return HomePage;
}()); //class HomePage

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addjob_addjob__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_jobinfo_jobinfo__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var JobsPage = /** @class */ (function () {
    function JobsPage(navCtrl, navParams, appprov, storage, modalCtrl, alertCtrl, camera, androidPermissions, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.androidPermissions = androidPermissions;
        this._translate = _translate;
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.job = "Ongoing";
                _this.retrievePastJobs();
                _this.retrieveOngoingJobs();
                _this.retrieveUpcomingJobs();
                _this._initializeTranslation();
            }
        });
    }
    JobsPage.prototype.ionViewDidEnter = function () {
        console.log("this is jobs page");
        this.retrievePastJobs();
        this.retrieveOngoingJobs();
        this.retrieveUpcomingJobs();
        this._initializeTranslation();
    };
    JobsPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    JobsPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    JobsPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("jobstx.title");
        this.history = this._translate.instant("jobstx.history");
        this.txongoing = this._translate.instant("jobstx.ongoing");
        this.upcomming = this._translate.instant("jobstx.upcomming");
        this.add_job = this._translate.instant("jobstx.add_job");
    };
    JobsPage.prototype.retrievePastJobs = function () {
        var _this = this;
        this.appprov.retrievePastJobs(this.access_token).then(function (res) {
            _this.past = res;
            _this.pastJid = _this.past.jid;
            _this.pastTitle = _this.past.title;
            _this.past_description = _this.past.description;
            _this.past_date_from = _this.past.date_from;
            _this.past_date_to = _this.past.date_to;
            _this.past_location = _this.past.location;
            _this.past_payout = _this.past.payout;
            _this.pastJobs = [];
            try {
                for (var i = 0; i < _this.pastTitle.length; i++) {
                    _this.pastJobs.push({
                        jid: _this.pastJid[i],
                        title: _this.pastTitle[i],
                        description: _this.past_description[i],
                        date_from: _this.past_date_from[i].substring(0, 10),
                        date_to: _this.past_date_to[i].substring(0, 10),
                        location: _this.past_location[i],
                        payout: _this.past_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Past job cannot retrieve length");
            }
            console.log("History job pushed");
        }, function (err) {
            console.log(err);
        });
    };
    JobsPage.prototype.retrieveOngoingJobs = function () {
        var _this = this;
        var totalPayout = 0;
        this.appprov.retrieveOngoingJobs(this.access_token).then(function (res) {
            _this.ongoing = res;
            _this.ongoingJid = _this.ongoing.jid;
            _this.ongoingTitle = _this.ongoing.title;
            _this.ongoing_description = _this.ongoing.description;
            _this.ongoing_date_from = _this.ongoing.date_from;
            _this.ongoing_date_to = _this.ongoing.date_to;
            _this.ongoing_location = _this.ongoing.location;
            _this.ongoing_payout = _this.ongoing.payout;
            _this.ongoingJobs = [];
            for (var i = 0; i < _this.ongoingTitle.length; i++) {
                totalPayout += parseInt(_this.ongoing.payout[i], 10);
            }
            try {
                for (var i = 0; i < _this.ongoingTitle.length; i++) {
                    _this.ongoingJobs.push({
                        jid: _this.ongoingJid[i],
                        title: _this.ongoingTitle[i],
                        description: _this.ongoing_description[i],
                        date_from: _this.ongoing_date_from[i].substring(0, 10),
                        date_to: _this.ongoing_date_to[i].substring(0, 10),
                        location: _this.ongoing_location[i],
                        payout: _this.ongoing_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Ongoing job cannot retrieve length");
            }
            console.log("Ongoing jobs pushed");
            console.log("Total Ongoing Payout: " + totalPayout);
        }, function (err) {
            console.log(err);
        });
    };
    JobsPage.prototype.retrieveUpcomingJobs = function () {
        var _this = this;
        var totalPayout = 0;
        this.appprov.retrieveUpcomingJobs(this.access_token).then(function (res) {
            _this.upcoming = res;
            _this.upcomingJid = _this.upcoming.jid;
            _this.upcomingTitle = _this.upcoming.title;
            _this.upcoming_description = _this.upcoming.description;
            _this.upcoming_date_from = _this.upcoming.date_from;
            _this.upcoming_date_to = _this.upcoming.date_to;
            _this.upcoming_location = _this.upcoming.location;
            _this.upcoming_payout = _this.upcoming.payout;
            _this.upcomingJobs = [];
            for (var i = 0; i < _this.upcomingTitle.length; i++) {
                totalPayout += parseInt(_this.upcoming.payout[i], 10);
            }
            try {
                for (var i = 0; i < _this.upcomingTitle.length; i++) {
                    _this.upcomingJobs.push({
                        jid: _this.upcomingJid[i],
                        title: _this.upcomingTitle[i],
                        description: _this.upcoming_description[i],
                        date_from: _this.upcoming_date_from[i].substring(0, 10),
                        date_to: _this.upcoming_date_to[i].substring(0, 10),
                        location: _this.upcoming_location[i],
                        payout: _this.upcoming_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Upcoming Job cannot retrieve length");
            }
            console.log("Upcoming job pushed");
            console.log("Total Upcoming Payout: " + totalPayout);
        }, function (err) {
            console.log(err);
        });
    };
    JobsPage.prototype.AddJob = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__addjob_addjob__["a" /* AddjobPage */], { 'access_token': this.access_token });
    };
    JobsPage.prototype.viewJob = function (event, jid) {
        console.log(jid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_jobinfo_jobinfo__["a" /* JobinfoPage */], { 'jid': jid });
    };
    JobsPage.prototype.deletePhoto = function (index) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: "Sure you want?",
            message: "",
            buttons: [{
                    text: "No",
                    handler: function () {
                        console.log("canceled");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Agree clicked");
                        _this.image.splice(index, 1);
                    }
                }]
        });
        confirm.present();
    };
    JobsPage.prototype.takePhoto = function () {
        var _this = this;
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (res) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) {
                _this.androidCamera();
            });
        });
    };
    JobsPage.prototype.androidCamera = function () {
        this.image = 'im an here';
        var options = {
            quality: 50,
            targetHeight: 320,
            targetWidth: 320,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.takePhoto2(options);
    };
    JobsPage.prototype.takePhoto2 = function (options) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.image = 'im an here2';
                try {
                    this.camera.getPicture(options).then(function (img) {
                        _this.image = 'im an here3';
                        _this.image = "data:image/jpeg;base64," + img;
                        console.log(_this.image);
                    });
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    JobsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Jobs',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/jobs/jobs.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- This is for Job Management tab page -->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header> \n\n\n\n<ion-content padding>\n\n    <div padding>\n\n      <ion-segment [(ngModel)]="job">\n\n        <ion-segment-button value="History">\n\n          {{ history }}\n\n        </ion-segment-button>\n\n        <ion-segment-button value="Ongoing">\n\n          {{ txongoing }}\n\n        </ion-segment-button>\n\n        <ion-segment-button value="Upcoming">\n\n          {{ upcomming }}\n\n        </ion-segment-button>\n\n      </ion-segment>\n\n    </div>\n\n    \n\n    <div [ngSwitch]="job">\n\n      <ion-list *ngSwitchCase="\'History\'">\n\n        <ion-card *ngFor="let pastJob of pastJobs, let i = index" (click)="viewJob($event, pastJob.jid);">\n\n        <ion-grid>\n\n          <ion-item >\n\n            <ion-row class="bottomRow">\n\n              <ion-col col-2>\n\n                  <ion-avatar>\n\n                    <img src = \'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg\'>\n\n                  </ion-avatar>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                <b>{{pastJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name="pin"></ion-icon>\n\n                {{pastJob.location}} \n\n                <br>\n\n                {{pastJob.date_from}} &nbsp;&nbsp; - &nbsp; {{pastJob.date_to}}\n\n                <!-- <img src = \'http://k.kakaocdn.net/dn/bFslS5/btqo3xtP7zp/AKWJEbPeSH6Fok0EH02bk1/profile_110x110c.jpg\' style="width:4rem; height:4rem">   \n\n                <br> -->\n\n                <h3>$ &nbsp; {{pastJob.payout}}</h3>\n\n              </ion-col>\n\n              <!-- <ion-col col-2>\n\n                <img src = "../../assets/imgs/more_button.png" style="width:2rem; height:2rem" (click)="viewJob($event, pastJob.jid);">\n\n              </ion-col> -->\n\n            </ion-row>\n\n          </ion-item>    \n\n        </ion-grid>\n\n      </ion-card>\n\n      </ion-list>\n\n    \n\n      <ion-list *ngSwitchCase="\'Ongoing\'">\n\n        <ion-card *ngFor="let ongoingJob of ongoingJobs, let i = index" (click)="viewJob($event, ongoingJob.jid);">\n\n        <ion-grid>\n\n          <ion-item>\n\n            <ion-row class="bottomRow">\n\n              <ion-col col-2>\n\n                  <ion-avatar>\n\n                    <img src = \'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg\'>\n\n                  </ion-avatar>\n\n              </ion-col>\n\n              <ion-col col-10>\n\n                <b>{{ongoingJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name="pin"></ion-icon>\n\n                {{ongoingJob.location}} \n\n                <br>\n\n                {{ongoingJob.date_from}} &nbsp;&nbsp; - &nbsp; {{ongoingJob.date_to}}\n\n                <!-- <img src = \'http://k.kakaocdn.net/dn/bFslS5/btqo3xtP7zp/AKWJEbPeSH6Fok0EH02bk1/profile_110x110c.jpg\' style="width:4rem; height:4rem">   \n\n                <br> -->\n\n                <h3>$ &nbsp; {{ongoingJob.payout}}</h3>\n\n              </ion-col>\n\n              <!-- <ion-col col-2>\n\n                <img src = "../../assets/imgs/more_button.png" style="width:2rem; height:2rem" (click)="viewJob($event, ongoingJob.jid);">\n\n              </ion-col> -->\n\n            </ion-row>\n\n          </ion-item>    \n\n        </ion-grid>\n\n      </ion-card>\n\n      </ion-list>\n\n\n\n      <ion-list *ngSwitchCase="\'Upcoming\'">\n\n        <ion-card *ngFor="let upcomingJob of upcomingJobs, let i = index" (click)="viewJob($event, upcomingJob.jid);">\n\n        <ion-grid>\n\n        <ion-item >\n\n          <ion-row class="bottomRow">\n\n            <ion-col col-2>\n\n                <ion-avatar>\n\n                  <img src = \'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg\'>\n\n                </ion-avatar>\n\n            </ion-col>\n\n            <ion-col col-10>\n\n              <b>{{upcomingJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name="pin"></ion-icon>\n\n              {{upcomingJob.location}} \n\n              <br>\n\n              {{upcomingJob.date_from}} &nbsp;&nbsp; - &nbsp; {{upcomingJob.date_to}}\n\n              <!-- <img src = \'http://k.kakaocdn.net/dn/bFslS5/btqo3xtP7zp/AKWJEbPeSH6Fok0EH02bk1/profile_110x110c.jpg\' style="width:4rem; height:4rem">   \n\n              <br> -->\n\n              <h3>$ &nbsp; {{upcomingJob.payout}}</h3>\n\n            </ion-col>\n\n            <!-- <ion-col col-2>\n\n              <img src = "../../assets/imgs/more_button.png" style="width:2rem; height:2rem" (click)="viewJob($event, upcomingJob.jid);">\n\n            </ion-col> -->\n\n          </ion-row>\n\n        </ion-item>    \n\n      </ion-grid>\n\n      </ion-card>\n\n    </ion-list>\n\n    </div>\n\n\n\n    <!-- <button ion-button full (click)="takePhoto()">\n\n      <ion-icon name="camera"></ion-icon>Take Photo\n\n    </button>\n\n   -->\n\n    <!-- <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button (click) = "takePhoto()">Test Camera</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n\n          <img *ngIf="image" [src]="image" alt="">\n\n        </ion-col>\n\n      </ion-row>\n\n      </ion-grid> -->\n\n<!-- \n\n    <ion-fab right bottom>\n\n      <button ion-fab color="light" (click) = "AddJob()"><ion-icon name="add"></ion-icon></button>\n\n    </ion-fab> -->\n\n</ion-content>\n\n\n\n<ion-footer no-shadow>\n\n    <ion-toolbar position="bottom">\n\n      <button ion-button full (click)="AddJob()" > {{ add_job }}</button>\n\n    </ion-toolbar>\n\n  </ion-footer>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/jobs/jobs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
    ], JobsPage);
    return JobsPage;
}());

//# sourceMappingURL=jobs.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpjobdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the OpjobdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OpjobdetailsPage = /** @class */ (function () {
    function OpjobdetailsPage(navCtrl, navParams, storage, appprov, camera, plt, androidPermissions, file, filetransfer, filepath, ASctrl, loadingCtrl, gloc, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.appprov = appprov;
        this.camera = camera;
        this.plt = plt;
        this.androidPermissions = androidPermissions;
        this.file = file;
        this.filetransfer = filetransfer;
        this.filepath = filepath;
        this.ASctrl = ASctrl;
        this.loadingCtrl = loadingCtrl;
        this.gloc = gloc;
        this._translate = _translate;
        this.lastImage = null;
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                _this.image = 'http://localhost:8000/static/vehicles/Others.png';
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.jid = navParams.get('Jid');
                _this.JobTitle = navParams.get('JTitle');
                console.log(_this.jid);
                _this.FaultOfVType();
                _this.GetCurrentLoc();
                _this._initializeTranslation();
            }
        });
    }
    OpjobdetailsPage.prototype.GetCurrentLoc = function () {
        var _this = this;
        console.log('Getting GeLocation');
        this.gloc.getCurrentPosition().then(function (res) {
            console.log('Sucessfully gathered Location');
            console.log(res.coords.latitude);
            console.log(res.coords.longitude);
            _this.LocLat = res.coords.latitude.toString();
            _this.LocLong = res.coords.longitude.toString();
            _this.allowloc = true;
        }, function (err) {
            _this.allowloc = false;
        });
    };
    OpjobdetailsPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad OpjobdetailsPage');
        this._initializeTranslation();
    };
    OpjobdetailsPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    OpjobdetailsPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    OpjobdetailsPage.prototype._initializeTranslation = function () {
        this.take_photo = this._translate.instant("opjobdetails.take_photo");
        this.selectgallery = this._translate.instant("opjobdetails.selectgallery");
        this.txcamera = this._translate.instant("opjobdetails.txcamera");
        this.txfaults = this._translate.instant("opjobdetails.txfaults");
        this.txfilter = this._translate.instant("opjobdetails.txfilter");
        this.txoil = this._translate.instant("opjobdetails.txoil");
        this.txdiscs = this._translate.instant("opjobdetails.txdiscs");
        this.description = this._translate.instant("opjobdetails.description");
        this.submit = this._translate.instant("opjobdetails.submit");
        this.selectsource = this._translate.instant("opjobdetails.selectsource");
        this.errormsgtitle = this._translate.instant('opjobdetails.errormsgtitle');
        this.errormsg = this._translate.instant('opjobdetails.errormsg');
        this.reportmsgtitle = this._translate.instant('opjobdetails.reportmsgtitle');
        this.reportmsg = this._translate.instant('opjobdetails.reportmsg');
    };
    OpjobdetailsPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    OpjobdetailsPage.prototype.presentAS = function () {
        var _this = this;
        var as = this.ASctrl.create({
            title: this.selectsource,
            buttons: [
                {
                    text: this.selectgallery,
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: this.take_photo,
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        as.present();
    };
    OpjobdetailsPage.prototype.takePicture = function (type) {
        var _this = this;
        var options = {
            quality: 30,
            targetWidth: 416,
            targetHeight: 416,
            sourceType: type,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.plt.is('android') && type === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filepath.resolveNativePath(imagePath).then(function (filePath) {
                    var correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    var currName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currName, _this.createFileName());
                });
            }
            else {
                var currName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currName, _this.createFileName());
            }
        }, function (err) {
            console.log(err);
        });
    };
    OpjobdetailsPage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        console.log(newFileName);
        return newFileName;
    };
    OpjobdetailsPage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) {
            console.log('error Copy');
            console.log(error);
        });
    };
    OpjobdetailsPage.prototype.pathForImage = function (img) {
        if (img == null)
            return '';
        else {
            if (this.plt.is('android')) {
                return this.file.dataDirectory + img;
            }
            else {
                return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* normalizeURL */])(this.file.dataDirectory + img);
            }
        }
    };
    OpjobdetailsPage.prototype.UploadImg = function () {
        this.showLoader();
        if (this.lastImage != null && this.Desc != null) {
            console.log('Upload Image entered!');
            var targetPath = this.file.dataDirectory + this.lastImage;
            var filename = this.lastImage;
            var options = {
                fileKey: 'file',
                fileName: filename,
                chunkedMode: false,
                params: { 'fileName': filename }
            };
            this.appprov.UploadReportImage(targetPath, options);
            this.InsertReport();
        }
        else {
            this.appprov.presentAlert(this.errormsgtitle, this.errormsg);
        }
    };
    OpjobdetailsPage.prototype.FaultOfVType = function () {
        var _this = this;
        var Vtype;
        this.appprov.OpGetvehType(this.access_token, this.jid).then(function (res) {
            Vtype = res.vehicle_type;
            console.log(Vtype);
            switch (Vtype) {
                case 'Excavator': {
                    _this.faultOpt = [_this.txfilter, _this.txoil];
                    break;
                }
                case 'Loader': {
                    _this.faultOpt = [_this.txfilter, _this.txoil, _this.txdiscs];
                    break;
                }
                case 'Dozer': {
                    _this.faultOpt = [_this.txfilter, _this.txoil, _this.txdiscs];
                    break;
                }
                case 'Truck': {
                    _this.faultOpt = [_this.txfilter, _this.txoil, _this.txdiscs];
                    break;
                }
                default: {
                    _this.faultOpt = [_this.txfilter, _this.txoil, _this.txdiscs];
                    break;
                }
            }
        });
    };
    OpjobdetailsPage.prototype.InsertReport = function () {
        var _this = this;
        this.faultsSelected = '{';
        for (var i = 0; i < this.faultOpt.length; i++) {
            if (this.faults == null) {
                if (i == (this.faultOpt.length - 1)) {
                    this.faultsSelected += this.faultOpt[i] + ':0';
                }
                else {
                    this.faultsSelected += this.faultOpt[i] + ':0,';
                }
            }
            else {
                if (this.faults.indexOf(this.faultOpt[i]) > -1) {
                    if (i == (this.faultOpt.length - 1)) {
                        this.faultsSelected += this.faultOpt[i] + ':1';
                    }
                    else {
                        this.faultsSelected += this.faultOpt[i] + ':1,';
                    }
                }
                else {
                    if (i == (this.faultOpt.length - 1)) {
                        this.faultsSelected += this.faultOpt[i] + ':0';
                    }
                    else {
                        this.faultsSelected += this.faultOpt[i] + ':0,';
                    }
                }
            }
        }
        var location;
        if (this.allowloc) {
            location = this.LocLat + ',' + this.LocLong;
        }
        else {
            location = 'nil , nil';
        }
        this.faultsSelected += '}';
        var now = new Date();
        console.log('JID: ' + this.jid);
        console.log('Email from access token: ' + this.access_token);
        console.log('Serial No.: Get from JID + email');
        console.log('Model No.: ' + 'Get from JID + email');
        console.log('TimeStamp: ' + now);
        console.log('Type: Job Report');
        console.log("Image Loc: " + 'jobReport/' + this.lastImage);
        console.log("Desc: " + this.Desc);
        console.log("Location:" + location);
        console.log("faults: " + this.faultsSelected);
        var imageLoc = 'jobReport/' + this.lastImage;
        this.appprov.InsertReport(this.jid, this.access_token, 'Standard Report', imageLoc, this.Desc, location, this.faultsSelected).then(function (res) {
            _this.appprov.presentAlert(_this.reportmsgtitle, _this.reportmsg);
            console.log(res);
            console.log('report added sucessfully!');
            _this.loading.dismiss();
            _this.navCtrl.pop();
        }, function (err) {
            console.log(err);
        });
    };
    OpjobdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-opjobdetails',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/opjobdetails/opjobdetails.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{JobTitle}}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-grid>\n\n    <ion-row justify-content:center>\n\n      <ion-col>\n\n          <img src = "{{pathForImage(lastImage)}}" style="width:26em;height:26em">\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n          <button ion-button full (click)="presentAS()">\n\n              <ion-icon name="camera"></ion-icon>{{ take_photo }}\n\n            </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n          <ion-select [(ngModel)]="faults" multiple="true" class="faultsSel" placeholder="Faults">\n\n            <ion-option *ngFor="let fault of faultOpt">{{fault}}</ion-option>\n\n          </ion-select>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-textarea rows="5" maxLength="1000" placeholder="Description" [(ngModel)]="Desc"></ion-textarea>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-grid>\n\n\n\n</ion-content>\n\n\n\n<ion-footer>\n\n  <button ion-button full (click)="UploadImg()">\n\n      {{ submit }}\n\n    </button>\n\n</ion-footer>'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/opjobdetails/opjobdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["c" /* TranslateService */]])
    ], OpjobdetailsPage);
    return OpjobdetailsPage;
}());

//# sourceMappingURL=opjobdetails.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoblistsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the JoblistsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JoblistsPage = /** @class */ (function () {
    function JoblistsPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.mode = navParams.get('mode');
        if (this.mode == "Today") {
            console.log("This is todya tab");
            // this.data = [
            //   {name: 'Sambo E&C', location:'Seoul', payout: '1m', opvehcost: [
            //     {opname: 'Dr Strange', vehtype: 'custom-shovel', oppay: '7000', opimg:'../assets/imgs/strange.jpeg'},
            //     {opname: 'Deadpool', vehtype: 'custom-shovel', oppay: '8000', opimg:'../assets/imgs/deadpool.jpeg'}
            //   ]
            //   },
            //   {name: 'Chye Joo', location:'Busan', payout: '1.4m', opvehcost: [
            //     {opname: 'Dr Strange', vehtype: 'custom-shovel', oppay: '10000', opimg:'../assets/imgs/strange.jpeg'},
            //     {opname: 'Dr Strange', vehtype: 'custom-excavator', oppay: '20000', opimg:'../assets/imgs/strange.jpeg'}
            //   ]
            //   },
            //   {name: 'Hup Tiong', location:'Chun Cheon', payout: '1.8m', opvehcost: [
            //     {opname: 'Deadpool', vehtype: 'custom-shovel', oppay: '10000', opimg:'../assets/imgs/deadpool.jpeg'},
            //     {opname: 'Deadpool', vehtype: 'custom-excavator', oppay: '20000', opimg:'../assets/imgs/deadpool.jpeg'},
            //     {opname: 'Dr Strange', vehtype: 'custom-dozer', oppay: '3000', opimg:'../assets/imgs/strange.jpeg'}
            //   ]
            //   }
            // ];
        }
        else if (this.mode == 'History') {
            console.log("this is history tab");
        }
        else {
            console.log("this is upcoming tab");
        }
        // let res = this.data.map(function (obj){
        //   return Object.keys(obj).map(function (key){
        //     return obj[key];
        //   });
        // });
        // this.jobs = res;
    }
    JoblistsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JoblistsPage');
    };
    JoblistsPage.prototype.itemTapped = function (event, item) {
        var Modal = this.modalCtrl.create("JobinfoPage", { jobdata: item }, { showBackdrop: true, enableBackdropDismiss: true });
        Modal.present();
    };
    JoblistsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-joblists',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/joblists/joblists.html"*/'\n\n<ion-content padding class = "list-avatar-page">\n\n    <div style="font-size: 2em">{{ mode }}</div>\n\n    <ion-list *ngFor="let job of jobs; let i = index" (click) = "itemTapped($event,job)">\n\n      <ion-list-header class="listHeader">\n\n        <b>{{jobs[i][0]}}</b>\n\n        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\n\n      <br/> \n\n        <ion-icon name="pin"></ion-icon> {{jobs[i][1]}}\n\n        <ion-note float-right>{{jobs[i][2]}} Won</ion-note>\n\n      </ion-list-header>\n\n      <ion-item *ngFor="let opveh of jobs[i][3]" class="listHeader">\n\n        <ion-avatar item-start>\n\n            <ion-img src={{opveh.opimg}}></ion-img> \n\n            <ion-icon name={{opveh.vehtype}} color="dark"></ion-icon>\n\n        </ion-avatar>\n\n        <p>{{opveh.opname}}</p>\n\n        <p item-end>{{opveh.oppay}} Won</p>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/joblists/joblists.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], JoblistsPage);
    return JoblistsPage;
}());

//# sourceMappingURL=joblists.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(525);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(896);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_updatecapop_updatecapop__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_fleets_fleets__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_operators_operators__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_operatorstabs_operatorstabs__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_operatorhome_operatorhome__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_operatorjob_operatorjob__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_opjobdetails_opjobdetails__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_otp_operator_otp_operator__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_login_kk_login_kk__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_register_register__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_jobs_jobs__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_joblists_joblists__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_fleet_info_fleet_info__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_addvehicle_addvehicle__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_addjob_addjob__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_viewoperator_viewoperator__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_jobinfo_jobinfo__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_createcompany_createcompany__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_editjob_editjob__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_common_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ionic2_calendar__ = __webpack_require__(897);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_geolocation__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ngx_translate_http_loader__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43_kakao_sdk__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__ionic_native_facebook__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_social_sharing__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














































function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_42__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, "./assets/i18n/", ".json");
}
/*actual main module file of Angular that will be presented in browser*/
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_fleets_fleets__["a" /* FleetsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_operators_operators__["a" /* OperatorsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_operatorstabs_operatorstabs__["a" /* OperatorstabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_login_kk_login_kk__["a" /* LoginKkPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_jobs_jobs__["a" /* JobsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_fleet_info_fleet_info__["a" /* FleetInfoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_addvehicle_addvehicle__["a" /* AddvehiclePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_joblists_joblists__["a" /* JoblistsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_addjob_addjob__["a" /* AddjobPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_viewoperator_viewoperator__["a" /* ViewoperatorPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_jobinfo_jobinfo__["a" /* JobinfoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_createcompany_createcompany__["a" /* CreatecompanyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_operatorhome_operatorhome__["a" /* OperatorhomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_operatorjob_operatorjob__["a" /* OperatorjobPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_opjobdetails_opjobdetails__["a" /* OpjobdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_editjob_editjob__["a" /* EditjobPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_otp_operator_otp_operator__["a" /* OtpOperatorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_updatecapop_updatecapop__["a" /* UpdatecapopPage */]
            ],
            /*
               importing browser module for making use of browser APs
               forRoot: ionic module used to customize ionic app if want to customize and not check inside ()
            */
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-maintenance/add-maintenance.module#AddMaintenancePageModule', name: 'AddMaintenancePage', segment: 'add-maintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addoperator/addoperator.module#AddoperatorPageModule', name: 'AddoperatorPage', segment: 'addoperator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/createcompany/createcompany.module#CreatecompanyPageModule', name: 'CreatecompanyPage', segment: 'createcompany', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-maintenance/edit-maintenance.module#EditMaintenancePageModule', name: 'EditMaintenancePage', segment: 'edit-maintenance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/joblists/joblists.module#JoblistsPageModule', name: 'JoblistsPage', segment: 'joblists', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp-operator/otp-operator.module#OtpOperatorPageModule', name: 'OtpOperatorPage', segment: 'otp-operator', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/updatecapop/updatecapop.module#UpdatecapopPageModule', name: 'UpdatecapopPage', segment: 'updatecapop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addjob/addjob.module#AddjobPageModule', name: 'AddjobPage', segment: 'addjob', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editjob/editjob.module#EditjobPageModule', name: 'EditjobPage', segment: 'editjob', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobinfo/jobinfo.module#JobinfoPageModule', name: 'JobinfoPage', segment: 'jobinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login-kk/login-kk.module#LoginKkPageModule', name: 'LoginKkPage', segment: 'login-kk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/operatorhome/operatorhome.module#OperatorhomePageModule', name: 'OperatorhomePage', segment: 'operatorhome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/operatorjob/operatorjob.module#OperatorjobPageModule', name: 'OperatorjobPage', segment: 'operatorjob', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_35__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_36__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_37__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_38_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_41__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_41__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_37__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            /*below contains pages as in NgModule to tell angular keep comp. ready in use to make use anytime angular takes time to load*/
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_fleets_fleets__["a" /* FleetsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_operators_operators__["a" /* OperatorsPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_operatorstabs_operatorstabs__["a" /* OperatorstabsPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_login_kk_login_kk__["a" /* LoginKkPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_jobs_jobs__["a" /* JobsPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_fleet_info_fleet_info__["a" /* FleetInfoPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_addvehicle_addvehicle__["a" /* AddvehiclePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_joblists_joblists__["a" /* JoblistsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_addjob_addjob__["a" /* AddjobPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_viewoperator_viewoperator__["a" /* ViewoperatorPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_jobinfo_jobinfo__["a" /* JobinfoPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_createcompany_createcompany__["a" /* CreatecompanyPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_operatorhome_operatorhome__["a" /* OperatorhomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_operatorjob_operatorjob__["a" /* OperatorjobPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_opjobdetails_opjobdetails__["a" /* OpjobdetailsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_editjob_editjob__["a" /* EditjobPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_otp_operator_otp_operator__["a" /* OtpOperatorPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_updatecapop_updatecapop__["a" /* UpdatecapopPage */]
            ],
            /*user service to be provided in the ionic*/
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_22__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_39__providers_app_app__["a" /* AppProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_43_kakao_sdk__["b" /* KakaoCordovaSDK */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_44__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_45__ionic_native_social_sharing__["a" /* SocialSharing */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__["a" /* apiKey */] + 'auth/users/create/', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                //  this.token = data.token;
                //this.storage.set('token', data.token);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append('Acess-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
            headers.append('Accept', 'application/json');
            headers.append('content-type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__["a" /* apiKey */] + 'auth/jwt/create', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.storage.set('token', '');
    };
    AuthProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                // this.token = value;
                _this.token = "";
                resolve(_this.token);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.GetProducts = function () {
        // return new Promise((resolve,reject) => {
        //   let headers = new Headers();
        //   headers.append('Access-Control-Allow-Origin', '*');
        //   headers.append('Acess-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        //   headers.append('Accept','application/json');
        //   headers.append('content-type','application/json');
        var _this = this;
        //   this.http.get(apiKey+'data/mrtstop',{headers:headers})
        //   .subscribe(res => {
        //     let data = res.json();
        //     resolve(JSON.stringify(data));
        //   }, (err) => {
        //     reject(err);
        //   });
        // });
        return new Promise(function (resolve) {
            // let headers = new Headers();
            // headers.append('Access-Control-Allow-Origin', '*');
            // headers.append('Acess-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
            // headers.append('Accept','application/json');
            // headers.append('content-type','application/json');
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__["a" /* apiKey */]).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    AuthProvider.prototype.getUserinfo = function (AToken) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_apiurls_serverurls_js__["a" /* apiKey */] + 'getUserInfo?access_token=' + AToken).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log("error in auth getuserinfo");
                console.log(err);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 255,
	"./af.js": 255,
	"./ar": 256,
	"./ar-dz": 257,
	"./ar-dz.js": 257,
	"./ar-kw": 258,
	"./ar-kw.js": 258,
	"./ar-ly": 259,
	"./ar-ly.js": 259,
	"./ar-ma": 260,
	"./ar-ma.js": 260,
	"./ar-sa": 261,
	"./ar-sa.js": 261,
	"./ar-tn": 262,
	"./ar-tn.js": 262,
	"./ar.js": 256,
	"./az": 263,
	"./az.js": 263,
	"./be": 264,
	"./be.js": 264,
	"./bg": 265,
	"./bg.js": 265,
	"./bm": 266,
	"./bm.js": 266,
	"./bn": 267,
	"./bn.js": 267,
	"./bo": 268,
	"./bo.js": 268,
	"./br": 269,
	"./br.js": 269,
	"./bs": 270,
	"./bs.js": 270,
	"./ca": 271,
	"./ca.js": 271,
	"./cs": 272,
	"./cs.js": 272,
	"./cv": 273,
	"./cv.js": 273,
	"./cy": 274,
	"./cy.js": 274,
	"./da": 275,
	"./da.js": 275,
	"./de": 276,
	"./de-at": 277,
	"./de-at.js": 277,
	"./de-ch": 278,
	"./de-ch.js": 278,
	"./de.js": 276,
	"./dv": 279,
	"./dv.js": 279,
	"./el": 280,
	"./el.js": 280,
	"./en-au": 281,
	"./en-au.js": 281,
	"./en-ca": 282,
	"./en-ca.js": 282,
	"./en-gb": 283,
	"./en-gb.js": 283,
	"./en-ie": 284,
	"./en-ie.js": 284,
	"./en-il": 285,
	"./en-il.js": 285,
	"./en-nz": 286,
	"./en-nz.js": 286,
	"./eo": 287,
	"./eo.js": 287,
	"./es": 288,
	"./es-do": 289,
	"./es-do.js": 289,
	"./es-us": 290,
	"./es-us.js": 290,
	"./es.js": 288,
	"./et": 291,
	"./et.js": 291,
	"./eu": 292,
	"./eu.js": 292,
	"./fa": 293,
	"./fa.js": 293,
	"./fi": 294,
	"./fi.js": 294,
	"./fo": 295,
	"./fo.js": 295,
	"./fr": 296,
	"./fr-ca": 297,
	"./fr-ca.js": 297,
	"./fr-ch": 298,
	"./fr-ch.js": 298,
	"./fr.js": 296,
	"./fy": 299,
	"./fy.js": 299,
	"./gd": 300,
	"./gd.js": 300,
	"./gl": 301,
	"./gl.js": 301,
	"./gom-latn": 302,
	"./gom-latn.js": 302,
	"./gu": 303,
	"./gu.js": 303,
	"./he": 304,
	"./he.js": 304,
	"./hi": 305,
	"./hi.js": 305,
	"./hr": 306,
	"./hr.js": 306,
	"./hu": 307,
	"./hu.js": 307,
	"./hy-am": 308,
	"./hy-am.js": 308,
	"./id": 309,
	"./id.js": 309,
	"./is": 310,
	"./is.js": 310,
	"./it": 311,
	"./it.js": 311,
	"./ja": 312,
	"./ja.js": 312,
	"./jv": 313,
	"./jv.js": 313,
	"./ka": 314,
	"./ka.js": 314,
	"./kk": 315,
	"./kk.js": 315,
	"./km": 316,
	"./km.js": 316,
	"./kn": 317,
	"./kn.js": 317,
	"./ko": 318,
	"./ko.js": 318,
	"./ky": 319,
	"./ky.js": 319,
	"./lb": 320,
	"./lb.js": 320,
	"./lo": 321,
	"./lo.js": 321,
	"./lt": 322,
	"./lt.js": 322,
	"./lv": 323,
	"./lv.js": 323,
	"./me": 324,
	"./me.js": 324,
	"./mi": 325,
	"./mi.js": 325,
	"./mk": 326,
	"./mk.js": 326,
	"./ml": 327,
	"./ml.js": 327,
	"./mn": 328,
	"./mn.js": 328,
	"./mr": 329,
	"./mr.js": 329,
	"./ms": 330,
	"./ms-my": 331,
	"./ms-my.js": 331,
	"./ms.js": 330,
	"./mt": 332,
	"./mt.js": 332,
	"./my": 333,
	"./my.js": 333,
	"./nb": 334,
	"./nb.js": 334,
	"./ne": 335,
	"./ne.js": 335,
	"./nl": 336,
	"./nl-be": 337,
	"./nl-be.js": 337,
	"./nl.js": 336,
	"./nn": 338,
	"./nn.js": 338,
	"./pa-in": 339,
	"./pa-in.js": 339,
	"./pl": 340,
	"./pl.js": 340,
	"./pt": 341,
	"./pt-br": 342,
	"./pt-br.js": 342,
	"./pt.js": 341,
	"./ro": 343,
	"./ro.js": 343,
	"./ru": 344,
	"./ru.js": 344,
	"./sd": 345,
	"./sd.js": 345,
	"./se": 346,
	"./se.js": 346,
	"./si": 347,
	"./si.js": 347,
	"./sk": 348,
	"./sk.js": 348,
	"./sl": 349,
	"./sl.js": 349,
	"./sq": 350,
	"./sq.js": 350,
	"./sr": 351,
	"./sr-cyrl": 352,
	"./sr-cyrl.js": 352,
	"./sr.js": 351,
	"./ss": 353,
	"./ss.js": 353,
	"./sv": 354,
	"./sv.js": 354,
	"./sw": 355,
	"./sw.js": 355,
	"./ta": 356,
	"./ta.js": 356,
	"./te": 357,
	"./te.js": 357,
	"./tet": 358,
	"./tet.js": 358,
	"./tg": 359,
	"./tg.js": 359,
	"./th": 360,
	"./th.js": 360,
	"./tl-ph": 361,
	"./tl-ph.js": 361,
	"./tlh": 362,
	"./tlh.js": 362,
	"./tr": 363,
	"./tr.js": 363,
	"./tzl": 364,
	"./tzl.js": 364,
	"./tzm": 365,
	"./tzm-latn": 366,
	"./tzm-latn.js": 366,
	"./tzm.js": 365,
	"./ug-cn": 367,
	"./ug-cn.js": 367,
	"./uk": 368,
	"./uk.js": 368,
	"./ur": 369,
	"./ur.js": 369,
	"./uz": 370,
	"./uz-latn": 371,
	"./uz-latn.js": 371,
	"./uz.js": 370,
	"./vi": 372,
	"./vi.js": 372,
	"./x-pseudo": 373,
	"./x-pseudo.js": 373,
	"./yo": 374,
	"./yo.js": 374,
	"./zh-cn": 375,
	"./zh-cn.js": 375,
	"./zh-hk": 376,
	"./zh-hk.js": 376,
	"./zh-tw": 377,
	"./zh-tw.js": 377
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 580;

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//Production on AWS - Public DNS
//export const apiKey = 'http://18.222.185.105/'

//Testing on local pc - Jeremy IPv4 address
//export const apiKey = 'http://192.168.8.100:8000/'

const apiKey = 'http://18.216.233.84/'
/* harmony export (immutable) */ __webpack_exports__["a"] = apiKey;


/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fleets_fleets__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__operators_operators__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jobs_jobs__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(_translate) {
        this._translate = _translate;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__fleets_fleets__["a" /* FleetsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__operators_operators__["a" /* OperatorsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__jobs_jobs__["a" /* JobsPage */];
        this._initializeTranslation();
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        this._initializeTranslation();
    };
    TabsPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    TabsPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    TabsPage.prototype._initializeTranslation = function () {
        this.home = this._translate.instant("tabs.home");
        this.fleets = this._translate.instant("tabs.fleets");
        this.operators = this._translate.instant("tabs.operators");
        this.jobs = this._translate.instant("tabs.jobs");
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/tabs/tabs.html"*/'<ion-tabs>\n\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab1Root" tabIcon="home"></ion-tab>\n\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab2Root" tabIcon="custom-excavator"></ion-tab>\n\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab3Root" tabIcon="contacts"></ion-tab>\n\n  <ion-tab [tabsHideOnSubPages]="true" [root]="tab4Root" tabIcon="briefcase"></ion-tab>\n\n</ion-tabs>\n\n<!--sets the tabs on screen/app-->'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_kakao_sdk__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, authService, splashScreen, kakao, _translate) {
        var _this = this;
        this.authService = authService;
        this.kakao = kakao;
        this._translate = _translate;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this._initTranslate();
        });
        this.authService.checkAuthentication().then(function (res) {
            console.log("res:" + res);
            if (res === '') {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
        });
    }
    /* EDIT HERE TO DO TRANSLATION */
    MyApp.prototype._initTranslate = function () {
        //this._translate.setDefaultLang('kr');
        this._translate.setDefaultLang('en');
        // if (this._translate.getBrowserLang() !== undefined){
        //   this._translate.use(this._translate.getBrowserLang());
        // }
        // else{
        //   this._translate.use('en');
        // }
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<!--ionic navigation controller. will connect to the file/page that links the nav which is ion-navbar-->\n\n'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8_kakao_sdk__["b" /* KakaoCordovaSDK */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 901:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[520]);
//# sourceMappingURL=main.js.map