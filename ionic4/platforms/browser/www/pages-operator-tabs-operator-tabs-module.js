(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-operator-tabs-operator-tabs-module"],{

/***/ "./src/app/pages/operator-tabs/operator-tabs.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/operator-tabs/operator-tabs.module.ts ***!
  \*************************************************************/
/*! exports provided: OperatorTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorTabsPageModule", function() { return OperatorTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _operator_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operator-tabs.page */ "./src/app/pages/operator-tabs/operator-tabs.page.ts");







var routes = [
    {
        path: 'tabs',
        component: _operator_tabs_page__WEBPACK_IMPORTED_MODULE_6__["OperatorTabsPage"],
        children: [
            { path: 'operator-home', loadChildren: '../operator-home/operator-home.module#OperatorHomePageModule' },
            { path: 'operator-jobs', loadChildren: '../operator-jobs/operator-jobs.module#OperatorJobsPageModule' },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/operator-home',
        pathMatch: 'full'
    }
];
var OperatorTabsPageModule = /** @class */ (function () {
    function OperatorTabsPageModule() {
    }
    OperatorTabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_operator_tabs_page__WEBPACK_IMPORTED_MODULE_6__["OperatorTabsPage"]]
        })
    ], OperatorTabsPageModule);
    return OperatorTabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/operator-tabs/operator-tabs.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/operator-tabs/operator-tabs.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>operatorTabs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-tabs>\n    <ion-tab-bar slot=\"bottom\">\n  \n      <ion-tab-button tab=\"operator-home\">\n        <ion-icon name=\"home\"></ion-icon>\n      </ion-tab-button>\n  \n      <ion-tab-button tab=\"operator-jobs\">\n        <ion-icon name=\"briefcase\"></ion-icon>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n  </ion-tabs>\n  "

/***/ }),

/***/ "./src/app/pages/operator-tabs/operator-tabs.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/operator-tabs/operator-tabs.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29wZXJhdG9yLXRhYnMvb3BlcmF0b3ItdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/operator-tabs/operator-tabs.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/operator-tabs/operator-tabs.page.ts ***!
  \***********************************************************/
/*! exports provided: OperatorTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorTabsPage", function() { return OperatorTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OperatorTabsPage = /** @class */ (function () {
    function OperatorTabsPage() {
    }
    OperatorTabsPage.prototype.ngOnInit = function () {
    };
    OperatorTabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-operator-tabs',
            template: __webpack_require__(/*! ./operator-tabs.page.html */ "./src/app/pages/operator-tabs/operator-tabs.page.html"),
            styles: [__webpack_require__(/*! ./operator-tabs.page.scss */ "./src/app/pages/operator-tabs/operator-tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OperatorTabsPage);
    return OperatorTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-operator-tabs-operator-tabs-module.js.map