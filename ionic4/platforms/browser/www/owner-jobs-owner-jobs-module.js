(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["owner-jobs-owner-jobs-module"],{

/***/ "./src/app/pages/owner-jobs/owner-jobs.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-jobs/owner-jobs.module.ts ***!
  \*******************************************************/
/*! exports provided: OwnerJobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerJobsPageModule", function() { return OwnerJobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _owner_jobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-jobs.page */ "./src/app/pages/owner-jobs/owner-jobs.page.ts");







var routes = [
    {
        path: '',
        component: _owner_jobs_page__WEBPACK_IMPORTED_MODULE_6__["OwnerJobsPage"]
    }
];
var OwnerJobsPageModule = /** @class */ (function () {
    function OwnerJobsPageModule() {
    }
    OwnerJobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_owner_jobs_page__WEBPACK_IMPORTED_MODULE_6__["OwnerJobsPage"]]
        })
    ], OwnerJobsPageModule);
    return OwnerJobsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/owner-jobs/owner-jobs.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-jobs/owner-jobs.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ownerJobs</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div padding>\n    <ion-segment ngDefaultControl [(ngModel)]=\"job\">\n      <ion-segment-button value=\"History\">\n        History\n        <!-- {{ history }} -->\n      </ion-segment-button>\n      <ion-segment-button value=\"Ongoing\">\n        Ongoing\n        <!-- {{ txongoing }} -->\n      </ion-segment-button>\n      <ion-segment-button value=\"Upcoming\">\n        Upcoming\n        <!-- {{ upcomming }} -->\n      </ion-segment-button>\n      <ion-segment-button value=\"Cancelled\">\n        Cancelled\n        <!-- {{ cancelled }} -->\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  \n  <div [ngSwitch]=\"job\">\n    <ion-list *ngSwitchCase=\"'History'\">\n      <ion-card *ngFor=\"let pastJob of pastJobs, let i = index\" (click)=\"viewJob($event, pastJob.jid);\">\n      <ion-grid>\n        <ion-item >\n          <ion-row class=\"bottomRow\">\n            <ion-col col-2>\n                <ion-avatar>\n                  <img src = 'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg'>\n                </ion-avatar>\n            </ion-col>\n            <ion-col col-10>\n              <b>Title</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name=\"pin\"></ion-icon>\n              <!-- <b>{{pastJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name=\"pin\"></ion-icon> -->\n              Location \n              <!-- {{pastJob.location}}  -->\n              <br>\n              Date From &nbsp;&nbsp; - &nbsp; Date To\n              <!-- {{pastJob.date_from}} &nbsp;&nbsp; - &nbsp; {{pastJob.date_to}} -->\n              <h3>$ &nbsp; $$$$</h3>\n              <!-- <h3>$ &nbsp; {{pastJob.payout}}</h3> -->\n            </ion-col>\n          </ion-row>\n        </ion-item>    \n      </ion-grid>\n    </ion-card>\n    </ion-list>\n  \n    <ion-list *ngSwitchCase=\"'Ongoing'\">\n      <ion-card *ngFor=\"let ongoingJob of ongoingJobs, let i = index\" (click)=\"viewJob($event, ongoingJob.jid);\">\n      <ion-grid>\n        <ion-item>\n          <ion-row class=\"bottomRow\">\n            <ion-col col-2>\n                <ion-avatar>\n                  <img src = 'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg'>\n                </ion-avatar>\n            </ion-col>\n            <ion-col col-10>\n              <b>Title</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name=\"pin\"></ion-icon>\n              <!-- <b>{{ongoingJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name=\"pin\"></ion-icon> -->\n              Location \n              <!-- {{ongoingJob.location}}  -->\n              <br>\n              Date From &nbsp;&nbsp; - &nbsp; Date To\n              <!-- {{ongoingJob.date_from}} &nbsp;&nbsp; - &nbsp; {{ongoingJob.date_to}} -->\n              <h3>$ &nbsp; $$$$</h3>\n              <!-- <h3>$ &nbsp; {{ongoingJob.payout}}</h3> -->\n            </ion-col>\n          </ion-row>\n        </ion-item>    \n      </ion-grid>\n    </ion-card>\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'Upcoming'\">\n      <ion-card *ngFor=\"let upcomingJob of upcomingJobs, let i = index\" (click)=\"viewJob($event, upcomingJob.jid);\">\n      <ion-grid>\n      <ion-item >\n        <ion-row class=\"bottomRow\">\n          <ion-col col-2>\n              <ion-avatar>\n                <img src = 'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg'>\n              </ion-avatar>\n          </ion-col>\n          <ion-col col-10>\n            <b>Title</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name=\"pin\"></ion-icon>\n            <!-- <b>{{upcomingJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name=\"pin\"></ion-icon> -->\n            Location \n            <!-- {{upcomingJob.location}}  -->\n            <br>\n            Date from &nbsp;&nbsp; - &nbsp; Date to\n            <!-- {{upcomingJob.date_from}} &nbsp;&nbsp; - &nbsp; {{upcomingJob.date_to}} -->\n            <h3>$ &nbsp; $$$$</h3>\n            <!-- <h3>$ &nbsp; {{upcomingJob.payout}}</h3> -->\n          </ion-col>\n        </ion-row>\n      </ion-item>    \n    </ion-grid>\n    </ion-card>\n  </ion-list>\n  \n  <ion-list *ngSwitchCase=\"'Cancelled'\">\n    <!-- cancelled jobs tab segment -->\n    <ion-card *ngFor=\"let cancelJob of cancelJobs, let i = index\" (click)=\"viewJob($event, cancelJob.jid);\">\n      <ion-grid>\n      <ion-item >\n        <ion-row class=\"bottomRow\">\n          <ion-col col-2>\n              <ion-avatar>\n                img\n                <!-- <img src = 'https://ukplantoperators.com/wp-content/uploads/2016/07/276107.jpg'> -->\n              </ion-avatar>\n          </ion-col>\n          <ion-col col-10>\n            <b>Job Title</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name=\"pin\"></ion-icon>\n            <!-- <b>{{cancelJob.title}}</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br><ion-icon name=\"pin\"></ion-icon> -->\n            Location \n            <!-- {{cancelJob.location}}  -->\n            <br>\n            {{cancelJob.date_from}} &nbsp;&nbsp; - &nbsp; {{cancelJob.date_to}}\n            <h3>$ &nbsp; $$$$</h3>\n            <!-- <h3>$ &nbsp; {{cancelJob.payout}}</h3> -->\n          </ion-col>\n        </ion-row>\n      </ion-item>    \n    </ion-grid>\n    </ion-card>\n  </ion-list>\n  </div>\n\n\n</ion-content>\n<ion-footer>\n    <ion-button expand=\"full\" (click)=\"goto()\">Add job</ion-button>\n    <!-- <ion-button expand=\"full\" (click)=\"manage(form.value)\" [disabled]=\"!form.valid\">{{ submit }}</button> -->\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/owner-jobs/owner-jobs.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/owner-jobs/owner-jobs.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLWpvYnMvb3duZXItam9icy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/owner-jobs/owner-jobs.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/owner-jobs/owner-jobs.page.ts ***!
  \*****************************************************/
/*! exports provided: OwnerJobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerJobsPage", function() { return OwnerJobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var OwnerJobsPage = /** @class */ (function () {
    function OwnerJobsPage(appprov, alertCtrl, androidPermissions, camera, router, navCtrl) {
        this.appprov = appprov;
        this.alertCtrl = alertCtrl;
        this.androidPermissions = androidPermissions;
        this.camera = camera;
        this.router = router;
        this.navCtrl = navCtrl;
    }
    OwnerJobsPage.prototype.ngOnInit = function () {
    };
    OwnerJobsPage.prototype.goto = function () {
        console.log("clickec. going to add job page");
        this.router.navigateByUrl('/owner-add-job');
    };
    OwnerJobsPage.prototype.retrieveCancelledJobs = function () {
        var _this = this;
        this.appprov.retrieveCancelledJobs(this.access_token).then(function (res) {
            _this.cancel = res;
            _this.cancelJid = _this.cancel.jid;
            _this.cancelTitle = _this.cancel.title;
            _this.cancel_description = _this.cancel.description;
            _this.cancel_date_from = _this.cancel.date_from;
            _this.cancel_date_to = _this.cancel.date_to;
            _this.cancel_location = _this.cancel.location;
            _this.cancel_payout = _this.cancel.payout;
            _this.cancelJobs = [];
            try {
                for (var i = 0; i < _this.cancelTitle.length; i++) {
                    _this.cancelJobs.push({
                        jid: _this.cancelJid[i],
                        title: _this.cancelTitle[i],
                        description: _this.cancel_description[i],
                        date_from: _this.cancel_date_from[i].substring(0, 10),
                        date_to: _this.cancel_date_to[i].substring(0, 10),
                        location: _this.cancel_location[i],
                        payout: _this.cancel_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Cancelled job cannot retrieve length");
            }
            console.log("Cancelled job pushed");
        }, function (err) {
            console.log(err);
        });
    };
    OwnerJobsPage.prototype.retrievePastJobs = function () {
        var _this = this;
        this.appprov.retrievePastJobs(this.access_token).then(function (res) {
            _this.past = res;
            _this.pastJid = _this.past.jid;
            _this.pastTitle = _this.past.title;
            _this.past_description = _this.past.description;
            _this.past_date_from = _this.past.date_from;
            _this.past_date_to = _this.past.date_to;
            _this.past_location = _this.past.location;
            _this.past_payout = _this.past.payout;
            _this.pastJobs = [];
            try {
                for (var i = 0; i < _this.pastTitle.length; i++) {
                    _this.pastJobs.push({
                        jid: _this.pastJid[i],
                        title: _this.pastTitle[i],
                        description: _this.past_description[i],
                        date_from: _this.past_date_from[i].substring(0, 10),
                        date_to: _this.past_date_to[i].substring(0, 10),
                        location: _this.past_location[i],
                        payout: _this.past_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Past job cannot retrieve length");
            }
            console.log("History job pushed");
        }, function (err) {
            console.log(err);
        });
    };
    OwnerJobsPage.prototype.retrieveOngoingJobs = function () {
        var _this = this;
        var totalPayout = 0;
        this.appprov.retrieveOngoingJobs(this.access_token).then(function (res) {
            _this.ongoing = res;
            _this.ongoingJid = _this.ongoing.jid;
            _this.ongoingTitle = _this.ongoing.title;
            _this.ongoing_description = _this.ongoing.description;
            _this.ongoing_date_from = _this.ongoing.date_from;
            // this.tempDate = this.ongoing.date_from;
            _this.ongoing_date_to = _this.ongoing.date_to;
            _this.ongoing_location = _this.ongoing.location;
            _this.ongoing_payout = _this.ongoing.payout;
            _this.ongoingJobs = [];
            for (var i = 0; i < _this.ongoingTitle.length; i++) {
                totalPayout += parseInt(_this.ongoing.payout[i], 10);
            }
            // for(let i=0; i <3; i++)
            // {
            //   this.date_yr = this.tempDate[i].substring(0,4);
            //   this.date_mth = this.tempDate[i].substring(5,7);
            //   this.date_day = this.tempDate[i].substring(8,10);
            //   this.ongoing_date_from[i] = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
            //   alert("ongoing date_from: " + this.ongoing_date_from[i]);
            // }
            try {
                for (var i = 0; i < _this.ongoingTitle.length; i++) {
                    _this.ongoingJobs.push({
                        jid: _this.ongoingJid[i],
                        title: _this.ongoingTitle[i],
                        description: _this.ongoing_description[i],
                        date_from: _this.ongoing_date_from[i].substring(0, 10),
                        date_to: _this.ongoing_date_to[i].substring(0, 10),
                        location: _this.ongoing_location[i],
                        payout: _this.ongoing_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Ongoing job cannot retrieve length");
            }
            // for(let i=0; i <3; i++)
            // {
            //   this.date_yr = this.ongoing_date_from[i].substring(0,4);
            //   this.date_mth = this.ongoing_date_from[i].substring(5,7);
            //   this.date_day = this.ongoing_date_from[i].substring(8,10);
            //   this.ongoing_date_from[i] = this.date_day + '-' + this.date_mth + '-'  + this.date_yr;
            //   alert("ongoing date_from: " + this.ongoing_date_from[i]);
            // }
            // this.ongoing_date_from = this.ongoing.date_from;
            console.log("Ongoing jobs pushed");
            console.log("Total Ongoing Payout: " + totalPayout);
        }, function (err) {
            console.log(err);
        });
    };
    OwnerJobsPage.prototype.retrieveUpcomingJobs = function () {
        var _this = this;
        var totalPayout = 0;
        this.appprov.retrieveUpcomingJobs(this.access_token).then(function (res) {
            _this.upcoming = res;
            _this.upcomingJid = _this.upcoming.jid;
            _this.upcomingTitle = _this.upcoming.title;
            _this.upcoming_description = _this.upcoming.description;
            _this.upcoming_date_from = _this.upcoming.date_from;
            _this.upcoming_date_to = _this.upcoming.date_to;
            _this.upcoming_location = _this.upcoming.location;
            _this.upcoming_payout = _this.upcoming.payout;
            _this.upcomingJobs = [];
            for (var i = 0; i < _this.upcomingTitle.length; i++) {
                totalPayout += parseInt(_this.upcoming.payout[i], 10);
            }
            try {
                for (var i = 0; i < _this.upcomingTitle.length; i++) {
                    _this.upcomingJobs.push({
                        jid: _this.upcomingJid[i],
                        title: _this.upcomingTitle[i],
                        description: _this.upcoming_description[i],
                        date_from: _this.upcoming_date_from[i].substring(0, 10),
                        date_to: _this.upcoming_date_to[i].substring(0, 10),
                        location: _this.upcoming_location[i],
                        payout: _this.upcoming_payout[i]
                    });
                }
            }
            catch (_a) {
                console.log("Upcoming Job cannot retrieve length");
            }
            console.log("Upcoming job pushed");
            console.log("Total Upcoming Payout: " + totalPayout);
        }, function (err) {
            console.log(err);
        });
    };
    OwnerJobsPage.prototype.AddJob = function () {
        // this.nav.push(AddjobPage, {'access_token':this.access_token});
        var navigationExtras = {
            queryParams: {
                token: this.access_token,
            }
        };
        this.router.navigateByUrl('owner-add-job', navigationExtras);
        // this.navCtrl.navigateForward('/owner-add-job')
    };
    OwnerJobsPage.prototype.viewJob = function (event, jid) {
        console.log(jid);
        var navigationExtras = {
            queryParams: {
                TakeJid: jid
            }
        };
        this.router.navigateByUrl('owner-job-info', navigationExtras);
        // this.nav.push(JobinfoPage, {'jid':jid});
    };
    OwnerJobsPage.prototype.deletePhoto = function (index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var confirm;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: "Sure you want?",
                            message: "",
                            buttons: [{
                                    text: "No",
                                    handler: function () {
                                        console.log("canceled");
                                    }
                                },
                                {
                                    text: "Yes",
                                    handler: function () {
                                        console.log("Agree clicked");
                                        _this.image.splice(index, 1);
                                    }
                                }]
                        })];
                    case 1:
                        confirm = _a.sent();
                        return [4 /*yield*/, confirm.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OwnerJobsPage.prototype.takePhoto = function () {
        var _this = this;
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then(function (res) {
            _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(function (res) {
                _this.androidCamera();
            });
        });
    };
    OwnerJobsPage.prototype.androidCamera = function () {
        this.image = 'im an here';
        var options = {
            quality: 50,
            targetHeight: 320,
            targetWidth: 320,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            correctOrientation: true,
            saveToPhotoAlbum: true
        };
        this.takePhoto2(options);
    };
    OwnerJobsPage.prototype.takePhoto2 = function (options) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.image = 'im an here2';
                try {
                    this.camera.getPicture(options).then(function (img) {
                        _this.image = 'im an here3';
                        _this.image = "data:image/jpeg;base64," + img;
                        console.log(_this.image);
                    });
                }
                catch (e) {
                    console.log(e);
                }
                return [2 /*return*/];
            });
        });
    };
    OwnerJobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-jobs',
            template: __webpack_require__(/*! ./owner-jobs.page.html */ "./src/app/pages/owner-jobs/owner-jobs.page.html"),
            styles: [__webpack_require__(/*! ./owner-jobs.page.scss */ "./src/app/pages/owner-jobs/owner-jobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_4__["AndroidPermissions"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]])
    ], OwnerJobsPage);
    return OwnerJobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=owner-jobs-owner-jobs-module.js.map