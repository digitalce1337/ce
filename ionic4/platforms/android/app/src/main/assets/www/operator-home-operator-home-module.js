(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["operator-home-operator-home-module"],{

/***/ "./src/app/pages/operator-home/operator-home.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/operator-home/operator-home.module.ts ***!
  \*************************************************************/
/*! exports provided: OperatorHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHomePageModule", function() { return OperatorHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _operator_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operator-home.page */ "./src/app/pages/operator-home/operator-home.page.ts");







var routes = [
    {
        path: '',
        component: _operator_home_page__WEBPACK_IMPORTED_MODULE_6__["OperatorHomePage"]
    }
];
var OperatorHomePageModule = /** @class */ (function () {
    function OperatorHomePageModule() {
    }
    OperatorHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_operator_home_page__WEBPACK_IMPORTED_MODULE_6__["OperatorHomePage"]]
        })
    ], OperatorHomePageModule);
    return OperatorHomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/operator-home/operator-home.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/operator-home/operator-home.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>operatorHome</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n  <ion-content padding>\n    <!-- <u>{{ fleet }} {{ displaydate }}</u> -->\n    <u>Display Current Date</u>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h3>Display Skill Sets</h3>\n      </ion-col>     \n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <h3>Display images from assets</h3>\n        </ion-col>     \n      </ion-row>\n  </ion-grid>\n  \n  <div padding>\n  <!-- <h3 align=\"center\">{{viewTitle}}</h3> -->\n  <h3 align=\"center\">Calendar</h3>\n    <!-- <calendar [eventSource] = \"eventSource\"\n              [calendarMode] = \"calendar.mode\"\n              [currentDate] = \"calendar.currentDate\"\n              (onCurrentDateChanged) = \"onCurrentDateChanged($event)\"\n              (onEventSelected) = \"onEventSelected($event)\"\n              (onTitleChanged) = \"onViewTitleChanged($event)\"\n              (onTimeSelected) = \"onTimeSelected($event)\"\n              step=\"30\">\n    </calendar> -->\n  </div> \n  \n  <ion-card>\n    <ion-card-header>   \n           Job Stats\n      </ion-card-header>\n  <ion-card-content>\n    <canvas #barCanvas></canvas>\n  </ion-card-content>\n  </ion-card> \n  \n  \n  </ion-content>\n  "

/***/ }),

/***/ "./src/app/pages/operator-home/operator-home.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/operator-home/operator-home.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdG9yLWhvbWUvb3BlcmF0b3ItaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/operator-home/operator-home.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/operator-home/operator-home.page.ts ***!
  \***********************************************************/
/*! exports provided: OperatorHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorHomePage", function() { return OperatorHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OperatorHomePage = /** @class */ (function () {
    function OperatorHomePage() {
    }
    OperatorHomePage.prototype.ngOnInit = function () {
    };
    OperatorHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-operator-home',
            template: __webpack_require__(/*! ./operator-home.page.html */ "./src/app/pages/operator-home/operator-home.page.html"),
            styles: [__webpack_require__(/*! ./operator-home.page.scss */ "./src/app/pages/operator-home/operator-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OperatorHomePage);
    return OperatorHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=operator-home-operator-home-module.js.map