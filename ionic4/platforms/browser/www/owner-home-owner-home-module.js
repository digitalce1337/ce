(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["owner-home-owner-home-module"],{

/***/ "./src/app/pages/owner-home/owner-home.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-home/owner-home.module.ts ***!
  \*******************************************************/
/*! exports provided: OwnerHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerHomePageModule", function() { return OwnerHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _owner_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-home.page */ "./src/app/pages/owner-home/owner-home.page.ts");







var routes = [
    {
        path: '',
        component: _owner_home_page__WEBPACK_IMPORTED_MODULE_6__["OwnerHomePage"]
    }
];
var OwnerHomePageModule = /** @class */ (function () {
    function OwnerHomePageModule() {
    }
    OwnerHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_owner_home_page__WEBPACK_IMPORTED_MODULE_6__["OwnerHomePage"]]
        })
    ], OwnerHomePageModule);
    return OwnerHomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/owner-home/owner-home.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-home/owner-home.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ownerHome</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <u>{{ fleet }} {{ displaydate }}</u> -->\n  <u>Fleet 13 Jun 2019</u>\n\n<ion-grid>\n  <ion-row>\n    vehicle img mini icons\n    <!-- <ion-col col-4 *ngFor=\"let vehicle of vehicles\">\n      <img [src] = vehicle.ImgUrl style=\"width:4rem; height:4rem\">\n      <img [src] = vehicle.vehicle_status style=\"width:1rem; height:1rem\">\n        {{vehicle.vehicle_count}}\n    </ion-col> -->\n  </ion-row>\n</ion-grid>\n\n<div padding>\n<!-- <h3 align=\"center\">{{viewTitle}}</h3> -->\n<h3 align=\"center\">Calendar</h3>\n  <!-- <calendar [eventSource] = \"eventSource\"\n            [calendarMode] = \"calendar.mode\"\n            [currentDate] = \"calendar.currentDate\"\n            (onCurrentDateChanged) = \"onCurrentDateChanged($event)\"\n            (onEventSelected) = \"onEventSelected($event)\"\n            (onTitleChanged) = \"onViewTitleChanged($event)\"\n            (onTimeSelected) = \"onTimeSelected($event)\"\n            step=\"30\">\n  </calendar> -->\n</div> \n\n<!-- <ion-card>\n  <ion-card-header>\n    {{ jobstats }}\n  </ion-card-header>\n  <ion-card-content>\n    <canvas #barCanvas></canvas>\n  </ion-card-content>\n</ion-card> -->\n\n<ion-card>\n    <ion-card-header>   \n           Earnings (MWon)       \n      </ion-card-header>\n  <ion-card-content>\n    <canvas #barCanvasEarnings></canvas>\n  </ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-header>   \n         Fleet Usage %\n    </ion-card-header>\n<ion-card-content>\n  <canvas #barCanvasFleetUsage></canvas>\n</ion-card-content>\n</ion-card>\n\n<ion-card>\n  <ion-card-header>   \n         Operator Usage %\n    </ion-card-header>\n<ion-card-content>\n  <canvas #barCanvasOperatorUsage></canvas>\n</ion-card-content>\n</ion-card> \n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/owner-home/owner-home.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-home/owner-home.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLWhvbWUvb3duZXItaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/owner-home/owner-home.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/owner-home/owner-home.page.ts ***!
  \*****************************************************/
/*! exports provided: OwnerHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerHomePage", function() { return OwnerHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OwnerHomePage = /** @class */ (function () {
    function OwnerHomePage() {
    }
    OwnerHomePage.prototype.ngOnInit = function () {
    };
    OwnerHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-home',
            template: __webpack_require__(/*! ./owner-home.page.html */ "./src/app/pages/owner-home/owner-home.page.html"),
            styles: [__webpack_require__(/*! ./owner-home.page.scss */ "./src/app/pages/owner-home/owner-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OwnerHomePage);
    return OwnerHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=owner-home-owner-home-module.js.map