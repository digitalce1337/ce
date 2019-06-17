(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["owner-operators-owner-operators-module"],{

/***/ "./src/app/pages/owner-operators/owner-operators.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/owner-operators/owner-operators.module.ts ***!
  \*****************************************************************/
/*! exports provided: OwnerOperatorsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerOperatorsPageModule", function() { return OwnerOperatorsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _owner_operators_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-operators.page */ "./src/app/pages/owner-operators/owner-operators.page.ts");







var routes = [
    {
        path: '',
        component: _owner_operators_page__WEBPACK_IMPORTED_MODULE_6__["OwnerOperatorsPage"]
    }
];
var OwnerOperatorsPageModule = /** @class */ (function () {
    function OwnerOperatorsPageModule() {
    }
    OwnerOperatorsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_owner_operators_page__WEBPACK_IMPORTED_MODULE_6__["OwnerOperatorsPage"]]
        })
    ], OwnerOperatorsPageModule);
    return OwnerOperatorsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/owner-operators/owner-operators.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/owner-operators/owner-operators.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ownerOperators</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-col></ion-col>\n        </ion-row>\n        <ion-item *ngFor=\"let operator of operators\">\n          <ion-row class=\"bottomRow\" (click)=\"viewOperator($event, operator.operatorlist);\">\n            <ion-col col-2>\n              <ion-avatar>\n                <!-- <img [src]=operator.operatordetails_profileurl> -->\n                profileImg\n              </ion-avatar>\n            </ion-col>\n            <ion-col col-8>\n              <!-- {{operator.operatordetails_name}} -->\n              Operator Name\n              <!-- <img [src]=operator.operatordetails_status style=\"width:1rem; height:1rem\"> -->\n              status icon\n              <!-- {{operator.operatordetails_busydate}} -->\n              Status\n              <br>\n              <!-- <img *ngFor=\"let vehicles of operator.operatordetails_vehicles\" [src]=vehicles style=\"width:4rem; height:4rem\"> -->\n              skills imgs\n            </ion-col>\n            <!-- <ion-col col-2>\n              <img src = \"../../assets/imgs/more_button.png\" style=\"width:2rem; height:2rem\" (click)=\"viewOperator($event, operator.operatorlist);\">\n            </ion-col> -->\n        </ion-row>\n      </ion-item>\n    </ion-grid>\n  </ion-list>\n\n</ion-content>\n\n<ion-footer no-shadow>\n    <ion-toolbar position=\"bottom\">    \n      <!-- <button ion-button full (click)=\"emailShare($event)\"> {{ add_operator }}</button> -->\n      <ion-button expand=\"full\" (click)=\"emailShare($event)\">Add Operator</ion-button>\n    </ion-toolbar>\n  </ion-footer>\n  \n\n"

/***/ }),

/***/ "./src/app/pages/owner-operators/owner-operators.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/owner-operators/owner-operators.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLW9wZXJhdG9ycy9vd25lci1vcGVyYXRvcnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/owner-operators/owner-operators.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/owner-operators/owner-operators.page.ts ***!
  \***************************************************************/
/*! exports provided: OwnerOperatorsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerOperatorsPage", function() { return OwnerOperatorsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var OwnerOperatorsPage = /** @class */ (function () {
    function OwnerOperatorsPage(modal, navCtrl) {
        this.modal = modal;
        this.navCtrl = navCtrl;
    }
    OwnerOperatorsPage.prototype.ngOnInit = function () {
    };
    OwnerOperatorsPage.prototype.viewOperator = function (event, email) {
        console.log("Viewing operator");
        //this.navCtrl.push(ViewoperatorPage, {'email':email});
        // const myModalOptions: ModalOptions = {
        //   enableBackdropDismiss: false
        // };
        // const myModal: Modal = this.modal.create(ViewoperatorPage, { email: email }, myModalOptions);
        // myModal.present();
        // myModal.onDidDismiss((data) => {
        //   console.log(data);
        //   this.getEmail(this.access_token);
        //   // this.getOperatorList(this.access_token);
        // });
    };
    OwnerOperatorsPage.prototype.emailShare = function () {
        console.log("email go!");
        this.navCtrl.navigateForward('/owner-add-operator');
        // this.showLoader();
        // var OTP: any;
        // this.appprov.MakeOTP(this.access_token).then((res: any) => {
        //   console.log(res);
        //   OTP = res.otp;
        //   console.log('i am using this ' + OTP);
        //   // Check if sharing via email is supported
        //   this.socialSharing.canShareViaEmail()
        //     .then(
        //       res => {
        //         if (res == "OK") {
        //           console.log(res);
        //           // Share via email
        //           this.socialSharing.shareViaEmail(this.downloadappmsg1 + ': ' + OTP + " " + this.downloadappmsg2 + " " +
        //             'http://play.google.com/store/apps/details?id=com.digitalce.digitalce', this.downloadappmsgtitle, [''])
        //             // 'http://play.google.com/store/apps/details?id=com.digitalce.digitalce', this.downloadappmsgtitle, ['recipient@example.org'])
        //             .then(
        //               res => {
        //                 console.log("ShareViaEmail status: " + res);
        //               }, error => {
        //                 console.log("ShareViaEmail error: " + error);
        //               });
        //         }
        //       }, error => {
        //         console.log(error);
        //       });
        //   this.loading.dismiss();
        // })
    };
    OwnerOperatorsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-operators',
            template: __webpack_require__(/*! ./owner-operators.page.html */ "./src/app/pages/owner-operators/owner-operators.page.html"),
            styles: [__webpack_require__(/*! ./owner-operators.page.scss */ "./src/app/pages/owner-operators/owner-operators.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], OwnerOperatorsPage);
    return OwnerOperatorsPage;
}());



/***/ })

}]);
//# sourceMappingURL=owner-operators-owner-operators-module.js.map