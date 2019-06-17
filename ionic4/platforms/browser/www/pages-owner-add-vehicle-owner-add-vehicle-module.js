(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-add-vehicle-owner-add-vehicle-module"],{

/***/ "./src/app/pages/owner-add-vehicle/owner-add-vehicle.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/owner-add-vehicle/owner-add-vehicle.module.ts ***!
  \*********************************************************************/
/*! exports provided: OwnerAddVehiclePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAddVehiclePageModule", function() { return OwnerAddVehiclePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _owner_add_vehicle_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-add-vehicle.page */ "./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.ts");







var routes = [
    {
        path: '',
        component: _owner_add_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["OwnerAddVehiclePage"]
    }
];
var OwnerAddVehiclePageModule = /** @class */ (function () {
    function OwnerAddVehiclePageModule() {
    }
    OwnerAddVehiclePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_owner_add_vehicle_page__WEBPACK_IMPORTED_MODULE_6__["OwnerAddVehiclePage"]]
        })
    ], OwnerAddVehiclePageModule);
    return OwnerAddVehiclePageModule;
}());



/***/ }),

/***/ "./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ownerAddVehicle</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/owner/tabs/owner-fleet\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding [class]=\"outer-content\">\n\n  <form (ngsubmit)=\"AddVehicle()\">\n    <ion-card>\n      <ion-card-header>\n        Vehicle Type: Select Vehicle\n      </ion-card-header>\n      <!-- <ion-card-header>\n        {{ vehicle_type }}: {{ SelVeh }}\n      </ion-card-header> -->\n      <ion-card-content>\n        <ion-segment [(ngModel)]=\"SelVeh\" name=\"VehicleType\" (ionChange)=\"showOthrVType()\">\n          <ion-segment-button value=\"Excavator\">\n            <!-- <ion-icon name=\"custom-excavator2\" color=\"dark\"></ion-icon> -->\n            <ion-icon src=\"assets/icon/excavator.svg\" color=\"dark\"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value=\"Compactor\">\n            <!-- <ion-icon name=\"custom-dozer\" color=\"dark\"></ion-icon> -->\n            <ion-icon src=\"assets/icon/dozer.svg\" color=\"dark\"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value=\"Loader\">\n            <!-- <ion-icon name=\"custom-shovel\" color=\"dark\"></ion-icon> -->\n            <ion-icon src=\"assets/icon/shovel.svg\" color=\"dark\"></ion-icon>\n          </ion-segment-button>\n          <ion-segment-button value=\"Truck\">\n              <!-- <ion-icon name=\"custom-truck\" color=\"dark\"></ion-icon> -->\n              <ion-icon src=\"assets/icon/truck.svg\" color=\"dark\"></ion-icon>\n          </ion-segment-button>\n          <!-- <ion-segment-button value=\"Others\">\n              Othrs\n          </ion-segment-button> -->\n        </ion-segment>\n        <ion-input type=\"text\" placeholder=\"Vehicle Type\" *ngIf=\"VehTypeTb\" [(ngModel)]=\"OthrVehType\" name=\"OthrVehTypeVal\"></ion-input>\n      </ion-card-content>\n    </ion-card>\n      \n    <ion-card>\n      <ion-card-header>\n        Manufacturer : Select Manufacturer\n      </ion-card-header>\n      <!-- <ion-card-header>\n        {{ manufacturer }} : {{ SelManu }}\n      </ion-card-header> -->\n      <ion-card-content>\n        <ion-segment [(ngModel)]=\"SelManu\" name=\"manufacturer\" (ionChange)=\"showOthrManu()\">\n          <ion-segment-button value=\"Volvo\">\n              <ion-img src=\"assets/imgs/VolvoLogo.png\" class=\"center_volvo_logo\"></ion-img>\n          </ion-segment-button>\n          <ion-segment-button value=\"Hyundai\">\n              <ion-img src=\"assets/imgs/hyundaiJob.png\" class=\"center_hyundai_logo\"></ion-img>\n          </ion-segment-button>\n          <ion-segment-button value=\"Doosan\">\n              <ion-img src=\"assets/imgs/Doosan.png\" class=\"center_doosan_logo\"></ion-img>\n          </ion-segment-button>\n          <ion-segment-button value=\"Komatsu\">\n              <ion-img src=\"assets/imgs/Komatsu.png\" class=\"center_komatsu_logo\"></ion-img>\n          </ion-segment-button>\n          <ion-segment-button value=\"Others\">\n              Others\n          </ion-segment-button>\n        </ion-segment>\n        <ion-input type=\"text\" placeholder=\"Manufacturer\" *ngIf=\"ManuTB\" [(ngModel)]=\"OthrManu\" name=\"OthrManuVal\"></ion-input>\n      </ion-card-content>\n    </ion-card>\n      \n    <ion-card>\n      <ion-card-header>Vehicle Details</ion-card-header>\n      <!-- <ion-card-header>{{ vehicle_details }}</ion-card-header> -->\n        <ion-card-content>\n          <ion-item>\n            <!-- <ion-label color=\"primary\" stacked>{{ model_no }}. </ion-label> -->\n            <ion-label color=\"primary\" stacked>Model No. </ion-label>\n            <ion-input type=\"text\" placeholder=\"E.g. EC250\" [(ngModel)]=\"ModelNo\" name=\"ModelNoVal\"></ion-input>\n          </ion-item>\n          <ion-item>\n            <!-- <ion-label color=\"primary\" stacked>{{ serial_no }}. </ion-label> -->\n            <ion-label color=\"primary\" stacked>Serial No. </ion-label>\n            <ion-input type=\"text\" placeholder=\"E.g. 987123\" [(ngModel)]=\"SerialNo\" name=\"SerialNoVal\"></ion-input>\n          </ion-item>\n            <ion-item>\n            <!-- <ion-label color=\"primary\" stacked>{{ purchase_date }}. </ion-label> -->\n            <ion-label color=\"primary\" stacked>Purchase Date. </ion-label>\n            <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"DD/MM/YYYY\" [(ngModel)]=\"PurchaseDate\" name=\"PDateVal\"></ion-datetime>\n          </ion-item>\n          <ion-item>\n            <!-- <ion-label color=\"primary\" stacked>{{ description }}. </ion-label> -->\n            <ion-label color=\"primary\" stacked>Description. </ion-label>\n            <ion-input type=\"text\" placeholder=\"Please enter vehicle description here\" [(ngModel)]=\"Description\" name=\"DescriptionVal\"></ion-input>\n          </ion-item>\n      </ion-card-content>\n    </ion-card>\n      \n  </form>\n\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n  <!-- <button ion-button full (click) = \"AddVehicle()\">{{ add }}</button> -->\n  <ion-button expand=\"full\" (click) = \"AddVehicle()\">Add Vehicle</ion-button>\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLWFkZC12ZWhpY2xlL293bmVyLWFkZC12ZWhpY2xlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.ts ***!
  \*******************************************************************/
/*! exports provided: OwnerAddVehiclePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAddVehiclePage", function() { return OwnerAddVehiclePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");




var OwnerAddVehiclePage = /** @class */ (function () {
    function OwnerAddVehiclePage(navCtrl, appprov, alertCtrl) {
        this.navCtrl = navCtrl;
        this.appprov = appprov;
        this.alertCtrl = alertCtrl;
        this.SelVeh = '';
        this.VehTypeTb = false;
        this.SelManu = '';
        this.ManuTB = false;
    }
    OwnerAddVehiclePage.prototype.ngOnInit = function () {
    };
    OwnerAddVehiclePage.prototype.AddVehicle = function () {
        if (this.SerialNo != '' && this.ModelNo != '' && this.PurchaseDate &&
            this.SelManu != '' && this.Description != '' && this.SelVeh != '') {
            var datestr = this.PurchaseDate.toString();
            // this.appprov.addVeh(this.UsrEmail,
            //                     this.SerialNo,
            //                     this.ModelNo,
            //                     datestr,
            //                     this.SelManu,
            //                     this.Description,
            //                     this.SelVeh).then((res) => {
            //                       // this.appprov.presentAlert('Success!','Vehicle Successfully Added');
            //                       this.SerialNo = '';
            //                       this.ModelNo = '';
            //                       this.PurchaseDate;
            //                       this.Description = '';
            //                       this.promptUser();
            //                     },err=>{
            //                       console.log(err);
            //                     })
        }
        else {
            this.appprov.presentAlert('Error!', 'Please fill up the form!');
        }
    };
    /*if vehicle type is none of the given*/
    OwnerAddVehiclePage.prototype.showOthrVType = function () {
        if (this.SelVeh == 'Others') {
            this.VehTypeTb = true;
        }
        else {
            this.VehTypeTb = false;
        }
    };
    /*if veh manufacturer type is none of the given*/
    OwnerAddVehiclePage.prototype.showOthrManu = function () {
        if (this.SelManu == 'Others') {
            this.ManuTB = true;
        }
        else {
            this.ManuTB = false;
        }
    };
    OwnerAddVehiclePage.prototype.getEmail = function () {
        var _this = this;
        this.appprov.getemail().then(function (res) {
            _this.UsrEmail = res;
            console.log('YAY' + _this.UsrEmail);
        }, function (err) {
            console.log(err);
        });
    };
    OwnerAddVehiclePage.prototype.promptUser = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Success!',
                            message: 'Vehicle Successfully Added. Do you want to continue adding vehicle?',
                            buttons: [
                                {
                                    text: 'No',
                                    role: 'no',
                                    handler: function () {
                                        _this.buttonOpt = true;
                                        _this.popBack();
                                        // console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Yes',
                                    role: 'yes',
                                    handler: function () {
                                        _this.buttonOpt = false;
                                        _this.popBack();
                                        // console.log('Buy clicked');
                                    }
                                }
                            ]
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
    OwnerAddVehiclePage.prototype.popBack = function () {
        // if(this.buttonOpt == true) {
        //   // this.nav.setRoot(FleetsPage);
        //   this.navCtrl.navigateRoot('/FleetsPage')
        // }
        // else {
        //   return;
        // }
        this.navCtrl.navigateBack('/owner/tabs/owner-fleet');
    };
    OwnerAddVehiclePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-add-vehicle',
            template: __webpack_require__(/*! ./owner-add-vehicle.page.html */ "./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.html"),
            styles: [__webpack_require__(/*! ./owner-add-vehicle.page.scss */ "./src/app/pages/owner-add-vehicle/owner-add-vehicle.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], OwnerAddVehiclePage);
    return OwnerAddVehiclePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-owner-add-vehicle-owner-add-vehicle-module.js.map