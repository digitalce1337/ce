(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["owner-fleet-owner-fleet-module"],{

/***/ "./src/app/pages/owner-fleet/owner-fleet.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/owner-fleet/owner-fleet.module.ts ***!
  \*********************************************************/
/*! exports provided: OwnerFleetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerFleetPageModule", function() { return OwnerFleetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _owner_fleet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-fleet.page */ "./src/app/pages/owner-fleet/owner-fleet.page.ts");







var routes = [
    {
        path: '',
        component: _owner_fleet_page__WEBPACK_IMPORTED_MODULE_6__["OwnerFleetPage"]
    }
];
var OwnerFleetPageModule = /** @class */ (function () {
    function OwnerFleetPageModule() {
    }
    OwnerFleetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_owner_fleet_page__WEBPACK_IMPORTED_MODULE_6__["OwnerFleetPage"]]
        })
    ], OwnerFleetPageModule);
    return OwnerFleetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/owner-fleet/owner-fleet.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/owner-fleet/owner-fleet.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ownerFleet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n      \n    <ion-item button>\n    <!-- <ion-item button  *ngFor=\"let vehicle of vehicles\" (click)=\"itemTapped($event,vehicle)\"> -->\n    <!-- <button ion-item *ngFor=\"let vehicle of vehicles\" (click)=\"itemTapped($event,vehicle)\"> -->\n    <ion-thumbnail slot=\"start\">\n        img\n        <!-- <img [src]=vehicle.img style=\"width:6rem; height:6rem\"> -->\n    </ion-thumbnail>\n      <h2>56789</h2>\n      <!-- <h2>{{vehicle.Modelno}}</h2> -->\n      <p>excavator</p>\n      <!-- <p>{{vehicle.Desc}}</p> -->\n    </ion-item>\n    <!-- </button> -->\n\n    <!-- <button ion-item *ngFor=\"let vehicle of vehicles\" (click)=\"itemTapped($event,vehicle)\">\n      <ion-thumbnail item-start>\n        <img [src] =>\n      </ion-thumbnail>\n      <h2>{{vehicle.Modelno}}</h2>\n      <p>{{vehicle.Desc}}</p>\n    </button> -->\n  \n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-shadow>\n  <ion-toolbar position=\"bottom\">\n    <ion-button expand=\"full\" (click)=\"AddVeh()\"> Add Vehicle</ion-button>\n    <!-- <button ion-button full (click)=\"AddVeh()\" >{{ add }}</button> -->\n  </ion-toolbar>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/owner-fleet/owner-fleet.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/owner-fleet/owner-fleet.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLWZsZWV0L293bmVyLWZsZWV0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/owner-fleet/owner-fleet.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-fleet/owner-fleet.page.ts ***!
  \*******************************************************/
/*! exports provided: OwnerFleetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerFleetPage", function() { return OwnerFleetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var OwnerFleetPage = /** @class */ (function () {
    function OwnerFleetPage(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
    }
    OwnerFleetPage.prototype.ngOnInit = function () {
    };
    OwnerFleetPage.prototype.AddVeh = function () {
        // this.nav.push(AddvehiclePage);
        // this.navCtrl.navigateForward('/OwnerAddVehiclePage');
        this.navCtrl.navigateForward('/owner-add-vehicle');
        // this.route.navigateByUrl('OwnerAddVehiclePage');
    };
    OwnerFleetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-fleet',
            template: __webpack_require__(/*! ./owner-fleet.page.html */ "./src/app/pages/owner-fleet/owner-fleet.page.html"),
            styles: [__webpack_require__(/*! ./owner-fleet.page.scss */ "./src/app/pages/owner-fleet/owner-fleet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], OwnerFleetPage);
    return OwnerFleetPage;
}());



/***/ })

}]);
//# sourceMappingURL=owner-fleet-owner-fleet-module.js.map