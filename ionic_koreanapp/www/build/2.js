webpackJsonp([2],{

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMaintenancePageModule", function() { return AddMaintenancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_maintenance__ = __webpack_require__(923);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddMaintenancePageModule = /** @class */ (function () {
    function AddMaintenancePageModule() {
    }
    AddMaintenancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_maintenance__["a" /* AddMaintenancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_maintenance__["a" /* AddMaintenancePage */]),
            ],
        })
    ], AddMaintenancePageModule);
    return AddMaintenancePageModule;
}());

//# sourceMappingURL=add-maintenance.module.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddMaintenancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_app_app__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(27);
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
 * Generated class for the AddMaintenancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddMaintenancePage = /** @class */ (function () {
    function AddMaintenancePage(navCtrl, navParams, storage, appprov, viewctrl, _translate) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.appprov = appprov;
        this.viewctrl = viewctrl;
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
                console.log(JSON.stringify(_this.vehInfo));
                _this._initializeTranslation();
            }
        });
    }
    AddMaintenancePage.prototype.ionViewDidEnter = function () {
        console.log('ionViewDidLoad AddMaintenancePage');
        this._initializeTranslation();
    };
    AddMaintenancePage.prototype.changeLanguage = function () {
        this._translateLanguage();
    };
    AddMaintenancePage.prototype._translateLanguage = function () {
        this._translate.use(this.language);
        this._initializeTranslation();
    };
    AddMaintenancePage.prototype._initializeTranslation = function () {
        this.title = this._translate.instant("add-maintenance.title");
        this.start_date = this._translate.instant("add-maintenance.start_date");
        this.end_date = this._translate.instant("add-maintenance.end_date");
        this.location = this._translate.instant("add-maintenance.location");
        this.description = this._translate.instant("add-maintenance.description");
        this.add = this._translate.instant("add-maintenance.add");
        this.cancel = this._translate.instant("add-maintenance.cancel");
    };
    AddMaintenancePage.prototype.addMaintenance = function () {
        var date_from = this.Fromdatetime;
        var date_to = this.Todatetime;
        var location = this.LocationField;
        var desc = this.DescriptionField;
        var serial_no = this.vehInfo.serial_no;
        var modelnum = this.vehInfo.model_no;
        this.appprov.addMaintenance(this.access_token, serial_no, date_from, date_to, location, desc, modelnum).then(function (res) {
            var data = JSON.stringify(res);
            data = JSON.parse(data);
        }, function (err) {
            console.log(err);
        });
        this.close();
    };
    AddMaintenancePage.prototype.close = function () {
        this.viewctrl.dismiss();
    };
    AddMaintenancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-maintenance',template:/*ion-inline-start:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/add-maintenance/add-maintenance.html"*/'<!--\n\n  Generated template for the AddMaintenancePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ title }} </ion-title>\n\n  </ion-navbar> \n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n    <ion-item>\n\n        <ion-label color="primary" stacked>{{ start_date }}</ion-label>\n\n        <ion-datetime displayFormat="YYYY/MM/DD" max="2030" placeholder="From Date" [(ngModel)]="Fromdatetime" name="FromDateVal"></ion-datetime>\n\n    </ion-item>\n\n    </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n    <ion-item>\n\n        <ion-label color="primary" stacked>{{ end_date }}</ion-label>\n\n        <ion-datetime displayFormat="YYYY/MM/DD" max="2030" placeholder="To Date" [(ngModel)]="Todatetime" name="ToDateVal"></ion-datetime>\n\n    </ion-item>\n\n    </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n    <ion-col>\n\n    <ion-item>\n\n        <ion-label stacked>{{ location }}</ion-label>\n\n        <ion-input type="text" maxlength="200" [(ngModel)]="LocationField"></ion-input>\n\n    </ion-item>\n\n    </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n\n        <ion-item>\n\n          <ion-label stacked>{{ description }}</ion-label>\n\n          <ion-input type="text" maxlength="200" [(ngModel)]="DescriptionField"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n\n    </ion-grid>\n\n\n\n</ion-content>\n\n \n\n<ion-footer no-shadow>\n\n  <ion-toolbar position="bottom">\n\n    <button ion-button color = "primary" (click) = "addMaintenance()" float-center >{{ add }}</button>\n\n    <button ion-button color = "primary" (click) = "close()" float-center >{{ cancel }}</button>\n\n  </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"/Users/wen/Work/3.Korea App VCE New/ionic_koreanapp/src/pages/add-maintenance/add-maintenance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_app_app__["a" /* AppProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
    ], AddMaintenancePage);
    return AddMaintenancePage;
}());

//# sourceMappingURL=add-maintenance.js.map

/***/ })

});
//# sourceMappingURL=2.js.map