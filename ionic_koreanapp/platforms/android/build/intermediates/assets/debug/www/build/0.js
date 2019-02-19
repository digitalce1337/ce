webpackJsonp([0],{

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMaintenancePageModule", function() { return EditMaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_maintenance__ = __webpack_require__(920);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditMaintenancePageModule = /** @class */ (function () {
    function EditMaintenancePageModule() {
    }
    EditMaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_maintenance__["a" /* EditMaintenancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_maintenance__["a" /* EditMaintenancePage */]),
            ],
        })
    ], EditMaintenancePageModule);
    return EditMaintenancePageModule;
}());

//# sourceMappingURL=edit-maintenance.module.js.map

/***/ }),

/***/ 920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditMaintenancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(17);
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
 * Generated class for the EditMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditMaintenancePage = /** @class */ (function () {
    function EditMaintenancePage(navCtrl, navParams, appprov, storage, alertCtrl, view, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appprov = appprov;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.view = view;
        this._translate = _translate;
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
                _this.vehInfo = _this.navParams.get('vehicle');
                console.log(_this.vehInfo);
                _this.retrieveMaintenance(_this.vehInfo.serial_no);
                _this.serial_no = _this.vehInfo.serial_no;
                _this._initializeTranslation();
            }
        });
    }
    EditMaintenancePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad EditMaintenancePage');
        this._initializeTranslation();
    };
    EditMaintenancePage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    EditMaintenancePage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    EditMaintenancePage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("edit-maintenance.title");
        this.delete = this._translate.instant("edit-maintenance.delete");
    };
    EditMaintenancePage.prototype.retrieveMaintenance = function (serial_no) {
        var _this = this;
        this.appprov.retrieveMaintenance(this.access_token, serial_no).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            _this.maint = res;
            _this.date_from = _this.maint.date_from;
            _this.date_to = _this.maint.date_to;
            _this.location = _this.maint.location;
            _this.desc = _this.maint.desc;
            _this.maintenances = [];
            for (var i = 0; i < _this.date_from.length; i++) {
                _this.maintenances.push({
                    date_from: _this.date_from[i],
                    date_to: _this.date_to[i],
                    location: _this.location[i],
                    desc: _this.desc[i],
                });
            }
        }, function (err) {
            console.log(err);
        });
    };
    EditMaintenancePage.prototype.close = function () {
        this.view.dismiss();
    };
    EditMaintenancePage.prototype.deleteMaintenance = function (date_from, date_to, location, desc) {
        var _this = this;
        this.appprov.deleteMaintenance(this.access_token, this.serial_no, date_from, date_to, location, desc).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
            console.log("record deleted");
            _this.retrieveMaintenance(_this.serial_no);
        }, function (err) {
            console.log(err);
        });
    };
    EditMaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-maintenance',template:/*ion-inline-start:"C:\Users\yo_wa\Desktop\IWSP Volvo\ionic_koreanapp\src\pages\edit-maintenance\edit-maintenance.html"*/'<!--\n\n  Generated template for the EditMaintenancePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n    <ion-title padding-top>\n\n        <ion-icon name="arrow-back" (click)="close()"></ion-icon> &nbsp;&nbsp; {{ title }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n  <ion-item-sliding  *ngFor="let maintenance of maintenances">\n\n    <ion-item>\n\n      <h2> {{ maintenance.location }} </h2>\n\n      <p>{{ maintenance.date_from }} - {{maintenance.date_to }}</p>\n\n    </ion-item>\n\n    <ion-item-options side="right">\n\n      <button ion-button (click)="deleteMaintenance(maintenance.date_from, maintenance.date_to, maintenance.location, maintenance.desc)" color="danger">{{ delete }}</button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\yo_wa\Desktop\IWSP Volvo\ionic_koreanapp\src\pages\edit-maintenance\edit-maintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], EditMaintenancePage);
    return EditMaintenancePage;
}());

//# sourceMappingURL=edit-maintenance.js.map

/***/ })

});
//# sourceMappingURL=0.js.map