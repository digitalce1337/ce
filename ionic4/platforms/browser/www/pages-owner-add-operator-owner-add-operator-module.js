(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-add-operator-owner-add-operator-module"],{

/***/ "./src/app/pages/owner-add-operator/owner-add-operator.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/owner-add-operator/owner-add-operator.module.ts ***!
  \***********************************************************************/
/*! exports provided: OwnerAddOperatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAddOperatorPageModule", function() { return OwnerAddOperatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _owner_add_operator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-add-operator.page */ "./src/app/pages/owner-add-operator/owner-add-operator.page.ts");







var routes = [
    {
        path: '',
        component: _owner_add_operator_page__WEBPACK_IMPORTED_MODULE_6__["OwnerAddOperatorPage"]
    }
];
var OwnerAddOperatorPageModule = /** @class */ (function () {
    function OwnerAddOperatorPageModule() {
    }
    OwnerAddOperatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_owner_add_operator_page__WEBPACK_IMPORTED_MODULE_6__["OwnerAddOperatorPage"]]
        })
    ], OwnerAddOperatorPageModule);
    return OwnerAddOperatorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/owner-add-operator/owner-add-operator.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/owner-add-operator/owner-add-operator.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ownerAddOperator</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/owner/tabs/owner-operators\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\nadd operator details \n</ion-content>\n\n<ion-footer no-shadow>\n    <!-- <button full ion-button (click)=\"itemTappedAdd($event)\">{{ add }}</button> -->\n    <ion-button expand=\"full\" (click)=\"itemTappedAdd($event)\">Add Operator</ion-button>\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/pages/owner-add-operator/owner-add-operator.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/owner-add-operator/owner-add-operator.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLWFkZC1vcGVyYXRvci9vd25lci1hZGQtb3BlcmF0b3IucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/owner-add-operator/owner-add-operator.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/owner-add-operator/owner-add-operator.page.ts ***!
  \*********************************************************************/
/*! exports provided: OwnerAddOperatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAddOperatorPage", function() { return OwnerAddOperatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var OwnerAddOperatorPage = /** @class */ (function () {
    function OwnerAddOperatorPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    OwnerAddOperatorPage.prototype.ngOnInit = function () {
    };
    OwnerAddOperatorPage.prototype.itemTappedAdd = function () {
        console.log("going backkkkkkk");
        this.navCtrl.navigateBack('/owner/tabs/owner-operators');
    };
    OwnerAddOperatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-add-operator',
            template: __webpack_require__(/*! ./owner-add-operator.page.html */ "./src/app/pages/owner-add-operator/owner-add-operator.page.html"),
            styles: [__webpack_require__(/*! ./owner-add-operator.page.scss */ "./src/app/pages/owner-add-operator/owner-add-operator.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], OwnerAddOperatorPage);
    return OwnerAddOperatorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-owner-add-operator-owner-add-operator-module.js.map