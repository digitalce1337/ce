(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-tabs-owner-tabs-module"],{

/***/ "./src/app/pages/owner-tabs/owner-tabs.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-tabs/owner-tabs.module.ts ***!
  \*******************************************************/
/*! exports provided: OwnerTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerTabsPageModule", function() { return OwnerTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _owner_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-tabs.page */ "./src/app/pages/owner-tabs/owner-tabs.page.ts");







var routes = [
    {
        path: 'tabs',
        component: _owner_tabs_page__WEBPACK_IMPORTED_MODULE_6__["OwnerTabsPage"],
        children: [
            { path: 'owner-home', loadChildren: '../owner-home/owner-home.module#OwnerHomePageModule' },
            { path: 'owner-jobs', loadChildren: '../owner-jobs/owner-jobs.module#OwnerJobsPageModule' },
            { path: 'owner-fleet', loadChildren: '../owner-fleet/owner-fleet.module#OwnerFleetPageModule' },
            { path: 'owner-operators', loadChildren: '../owner-operators/owner-operators.module#OwnerOperatorsPageModule' },
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/owner-home',
        pathMatch: 'full'
    }
];
var OwnerTabsPageModule = /** @class */ (function () {
    function OwnerTabsPageModule() {
    }
    OwnerTabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_owner_tabs_page__WEBPACK_IMPORTED_MODULE_6__["OwnerTabsPage"]]
        })
    ], OwnerTabsPageModule);
    return OwnerTabsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/owner-tabs/owner-tabs.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-tabs/owner-tabs.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>ownerTabs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"owner-home\">\n      <ion-icon name=\"home\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"owner-jobs\">\n      <ion-icon name=\"briefcase\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"owner-fleet\">\n      <ion-icon name=\"car\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"owner-operators\">\n        <ion-icon name=\"people\"></ion-icon>\n      </ion-tab-button>\n  \n    \n  </ion-tab-bar>\n\n\n</ion-tabs>\n"

/***/ }),

/***/ "./src/app/pages/owner-tabs/owner-tabs.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-tabs/owner-tabs.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLXRhYnMvb3duZXItdGFicy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/owner-tabs/owner-tabs.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/owner-tabs/owner-tabs.page.ts ***!
  \*****************************************************/
/*! exports provided: OwnerTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerTabsPage", function() { return OwnerTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OwnerTabsPage = /** @class */ (function () {
    function OwnerTabsPage() {
    }
    OwnerTabsPage.prototype.ngOnInit = function () {
    };
    OwnerTabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-tabs',
            template: __webpack_require__(/*! ./owner-tabs.page.html */ "./src/app/pages/owner-tabs/owner-tabs.page.html"),
            styles: [__webpack_require__(/*! ./owner-tabs.page.scss */ "./src/app/pages/owner-tabs/owner-tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OwnerTabsPage);
    return OwnerTabsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-owner-tabs-owner-tabs-module.js.map