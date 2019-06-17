(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-company-create-company-module"],{

/***/ "./src/app/pages/create-company/create-company.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/create-company/create-company.module.ts ***!
  \***************************************************************/
/*! exports provided: CreateCompanyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyPageModule", function() { return CreateCompanyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _create_company_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-company.page */ "./src/app/pages/create-company/create-company.page.ts");







var routes = [
    {
        path: '',
        component: _create_company_page__WEBPACK_IMPORTED_MODULE_6__["CreateCompanyPage"]
    }
];
var CreateCompanyPageModule = /** @class */ (function () {
    function CreateCompanyPageModule() {
    }
    CreateCompanyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_create_company_page__WEBPACK_IMPORTED_MODULE_6__["CreateCompanyPage"]]
        })
    ], CreateCompanyPageModule);
    return CreateCompanyPageModule;
}());



/***/ }),

/***/ "./src/app/pages/create-company/create-company.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/create-company/create-company.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>createCompany</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/create-company/create-company.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/create-company/create-company.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1jb21wYW55L2NyZWF0ZS1jb21wYW55LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/create-company/create-company.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/create-company/create-company.page.ts ***!
  \*************************************************************/
/*! exports provided: CreateCompanyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyPage", function() { return CreateCompanyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CreateCompanyPage = /** @class */ (function () {
    function CreateCompanyPage() {
    }
    CreateCompanyPage.prototype.ngOnInit = function () {
    };
    CreateCompanyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.page.html */ "./src/app/pages/create-company/create-company.page.html"),
            styles: [__webpack_require__(/*! ./create-company.page.scss */ "./src/app/pages/create-company/create-company.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreateCompanyPage);
    return CreateCompanyPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-company-create-company-module.js.map