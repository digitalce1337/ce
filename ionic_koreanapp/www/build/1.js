webpackJsonp([1],{

/***/ 905:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddoperatorPageModule", function() { return AddoperatorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addoperator__ = __webpack_require__(918);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddoperatorPageModule = /** @class */ (function () {
    function AddoperatorPageModule() {
    }
    AddoperatorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__addoperator__["a" /* AddoperatorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addoperator__["a" /* AddoperatorPage */]),
            ],
        })
    ], AddoperatorPageModule);
    return AddoperatorPageModule;
}());

//# sourceMappingURL=addoperator.module.js.map

/***/ }),

/***/ 918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddoperatorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_kakao_sdk__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(17);
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
 * Generated class for the AddoperatorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddoperatorPage = /** @class */ (function () {
    function AddoperatorPage(navCtrl, navParams, view, appprov, alertCtrl, http, iab, storage, _kakaoCordovaSDK, loadingCtrl, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.appprov = appprov;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.iab = iab;
        this.storage = storage;
        this._kakaoCordovaSDK = _kakaoCordovaSDK;
        this.loadingCtrl = loadingCtrl;
        this._translate = _translate;
        this.emailField = "";
        this.selectedArray = [];
        storage.ready().then(function () {
        });
        storage.get('access_token').then(function (val) {
            if (val == null) {
                console.log("No acccess token");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
            }
            else {
                console.log("Got access token");
                _this.access_token = val.toString();
                _this.getVehicleUrl();
                _this._initializeTranslation();
            }
        });
    }
    AddoperatorPage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad AddoperatorPage');
        this._initializeTranslation();
        //this.getVehicleUrl();
    };
    AddoperatorPage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    AddoperatorPage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    AddoperatorPage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("addoperator.title");
        this.email = this._translate.instant("addoperator.email");
        this.skills = this._translate.instant("addoperator.skills");
        this.add = this._translate.instant("addoperator.add");
        this.errormsgtitle = this._translate.instant("addoperator.errormsgtitle");
        this.errormsg = this._translate.instant("addoperator.errormsg");
        this.addmsg = this._translate.instant("addoperator.addmsg");
    };
    AddoperatorPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    AddoperatorPage.prototype.getVehicleUrl = function () {
        var _this = this;
        console.log("getting vehicle url");
        this.appprov.getVehicleUrl(this.access_token).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.vehicle_url = data['vehicle_url'];
            _this.vehicle_type = data['vehicle_type'];
            _this.vehicle = [];
            console.log(_this.vehicle_url);
            for (var i = 0; i < _this.vehicle_url.length; i++) {
                _this.vehicle.push({
                    vehicle_url: _this.vehicle_url[i],
                    vehicle_type: _this.vehicle_type[i],
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    AddoperatorPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Loading...'
        });
        this.loading.present();
    };
    AddoperatorPage.prototype.itemTappedAdd = function () {
        var _this = this;
        console.log("adding oeprator");
        this.appprov.checkEmail(this.access_token, this.emailField).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.check_email = data['result'];
            if (_this.check_email == 'false') {
                var alert_1 = _this.alertCtrl.create({
                    title: 'Email does not exists',
                    subTitle: 'Double check email or invite him via kakaotalk',
                    buttons: ['OK']
                });
                alert_1.present();
            }
            else {
                var vehicletype = [];
                for (var i = 0; i < _this.selectedArray.length; i++) {
                    vehicletype[i] = _this.selectedArray[i]['vehicle_type'];
                }
                _this.appprov.addOperator(_this.access_token, _this.emailField, vehicletype).then(function (res) {
                    var data = JSON.stringify(res);
                    data = JSON.parse(data);
                    _this.add_operator = data['result'];
                    if (_this.add_operator == 'false') {
                        var alert_2 = _this.alertCtrl.create({
                            title: 'Fail to add operator',
                            subTitle: 'Please try again',
                            buttons: ['OK']
                        });
                        alert_2.present();
                    }
                    else {
                        var alert_3 = _this.alertCtrl.create({
                            title: 'Operator added successfully',
                            buttons: ['OK']
                        });
                        alert_3.present();
                        _this.closeModal();
                    }
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    // itemTappedAd(){
    //   console.log(this.emailField);
    //   console.log(this.selectedArray);
    //   console.log(this.selectedArray.length);
    //   console.log(this.selectedArray[0]['vehicle_type']);
    //   let vehicletype = [];
    //   for (let i=0; i<this.selectedArray.length; i++){
    //     vehicletype[i] = this.selectedArray[i]['vehicle_type'];
    //   }
    //   console.log (vehicletype);
    // }
    AddoperatorPage.prototype.selectVehicle = function (data) {
        if (data.checked == true) {
            this.selectedArray.push(data);
        }
        else {
            var newArray = this.selectedArray.filter(function (el) {
                return el.vehicle_type !== data.vehicle_type;
            });
            this.selectedArray = newArray;
        }
        console.log(this.selectedArray);
    };
    AddoperatorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addoperator',template:/*ion-inline-start:"C:\Users\yo_wa\Desktop\IWSP Volvo\ionic_koreanapp\src\pages\addoperator\addoperator.html"*/'\n<!--\n  Generated template for the AddoperatorPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title >{{ title }}</ion-title>\n    <ion-buttons>\n      <button ion-button (click)="closeModal()">\n          <ion-icon name="arrow-back"></ion-icon>  \n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label stacked>{{ email }}</ion-label>\n    <ion-input type="text" [(ngModel)]="emailField"></ion-input>\n  </ion-item>\n\n</ion-content>\n<ion-footer no-shadow>\n    <button full ion-button (click)="itemTappedAdd($event)">{{ add }}</button>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\yo_wa\Desktop\IWSP Volvo\ionic_koreanapp\src\pages\addoperator\addoperator.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7_kakao_sdk__["b" /* KakaoCordovaSDK */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]])
    ], AddoperatorPage);
    return AddoperatorPage;
}());

//# sourceMappingURL=addoperator.js.map

/***/ })

});
//# sourceMappingURL=1.js.map