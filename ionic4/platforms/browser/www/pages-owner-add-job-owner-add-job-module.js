(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-owner-add-job-owner-add-job-module"],{

/***/ "./src/app/pages/owner-add-job/owner-add-job.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/owner-add-job/owner-add-job.module.ts ***!
  \*************************************************************/
/*! exports provided: OwnerAddJobPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAddJobPageModule", function() { return OwnerAddJobPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _owner_add_job_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./owner-add-job.page */ "./src/app/pages/owner-add-job/owner-add-job.page.ts");







var routes = [
    {
        path: '',
        component: _owner_add_job_page__WEBPACK_IMPORTED_MODULE_6__["OwnerAddJobPage"]
    }
];
var OwnerAddJobPageModule = /** @class */ (function () {
    function OwnerAddJobPageModule() {
    }
    OwnerAddJobPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_owner_add_job_page__WEBPACK_IMPORTED_MODULE_6__["OwnerAddJobPage"]]
        })
    ], OwnerAddJobPageModule);
    return OwnerAddJobPageModule;
}());



/***/ }),

/***/ "./src/app/pages/owner-add-job/owner-add-job.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/owner-add-job/owner-add-job.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ownerAddJob</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/owner/tabs/owner-jobs\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  Add Job Page\n  <!-- <form [formGroup]=\"form\" (ngSubmit)=\"manage(form.value)\">\n    <ion-item>\n      <ion-label stacked>Client Name</ion-label> -->\n      <!-- <ion-label stacked>{{ client }}</ion-label> -->\n      <!-- <ion-input type=\"text\" formControlName ='ClientName'></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Project Earning</ion-label> -->\n      <!-- <ion-label stacked>{{ project_earning }}</ion-label> -->\n      <!-- <ion-input type=\"number\" formControlName ='PayOut'></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Location</ion-label> -->\n      <!-- <ion-label stacked>{{ location }}</ion-label> -->\n      <!-- <ion-input type=\"text\" formControlName ='Loc'></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Date From</ion-label> -->\n      <!-- <ion-label stacked>{{ date_from }}</ion-label> -->\n      <!-- <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName ='DateFrom' (ionChange)=\"LoadOpCheck()\" max=\"2050-12-30\" min=\"2018\"></ion-datetime>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Date To</ion-label> -->\n      <!-- <ion-label stacked>{{ date_to }}</ion-label> -->\n      <!-- <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName ='DateTo' (ionChange)=\"LoadOpCheck()\" max=\"2050-12-30\" min=\"2018\"></ion-datetime>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label stacked>Description</ion-label> -->\n      <!-- <ion-label stacked>{{ description }}</ion-label> -->\n      <!-- <ion-input type=\"text\" formControlName ='Desc'></ion-input>\n    </ion-item> -->\n    \n    <!-- <div formArrayName=\"OpVehPay\" margin-bottom>\n      <section [formGroupName]=\"i\" *ngFor=\"let opvp of form.controls.OpVehPay.controls; let i = index\">\n        <ion-item-group>\n          <ion-item-divider color=\"light\"> Operator Vehicle {{i+1}}            -->\n          <!-- <ion-item-divider color=\"light\"> {{ operator_vehicle }} {{i+1}}            -->\n            <!-- <span float-right ion-button icon-left clear *ngIf=\"form.controls.OpVehPay.length > 1\" (click)=\"removeInputField(i)\">\n              <ion-icon name=\"close\"></ion-icon>\n            </span></ion-item-divider>\n          <ion-item>\n            <ion-label floating>Operator:</ion-label> -->\n            <!-- <ion-label floating>{{ operator_name }}:</ion-label> -->\n            <!-- <ion-select formControlName=\"Opname\" (click)=\"ValidateDate($event)\">\n              <ion-option *ngFor=\"let op of OpTD[i+1]; let k = index\" value=\"{{op.email}}\">\n                {{op.name}} &nbsp; - &nbsp;{{op.availbility}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n  \n          <ion-item>\n            <ion-label floating>{{vehicle}}:</ion-label>\n              <ion-select formControlName=\"Vehtype\">\n                <ion-option *ngFor=\"let veh of VehicleTD[i+1]\" value=\"{{veh.sno}}\">{{veh.dissno}} - {{veh.vtype}} - {{veh.availability}}</ion-option>\n              </ion-select>\n          </ion-item>\n  \n        </ion-item-group>\n      </section>\n    </div>\n    <span ion-button float-end icon-end color=\"light\" (click)=\"addNewInputField()\">Add</span> -->\n    <!-- <span ion-button float-end icon-end color=\"light\" (click)=\"addNewInputField()\">{{ add }}</span> -->\n\n  <!-- </form> -->\n\n</ion-content>\n\n<ion-footer>\n    <ion-button expand=\"full\" (click)=\"manage(form.value)\" [disabled]=\"!form.valid\">Submit</ion-button>\n    <!-- <ion-button expand=\"full\" (click)=\"manage(form.value)\" [disabled]=\"!form.valid\">{{ submit }}</button> -->\n</ion-footer>\n\n"

/***/ }),

/***/ "./src/app/pages/owner-add-job/owner-add-job.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/owner-add-job/owner-add-job.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL293bmVyLWFkZC1qb2Ivb3duZXItYWRkLWpvYi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/owner-add-job/owner-add-job.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/owner-add-job/owner-add-job.page.ts ***!
  \***********************************************************/
/*! exports provided: OwnerAddJobPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerAddJobPage", function() { return OwnerAddJobPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var OwnerAddJobPage = /** @class */ (function () {
    function OwnerAddJobPage(_FB, appprov, modalCtrl) {
        this._FB = _FB;
        this.appprov = appprov;
        this.modalCtrl = modalCtrl;
        // this.access_token = this.navParams.get('access_token');
        this.VehicleTD = [];
        this.OpTD = [];
        this.selectedOp = [];
        this.selectedVeh = [];
        this.counter = 0;
        //FormBuilder: Angular form builder that creates desired form 
        this.form = this._FB.group({
            ClientName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            PayOut: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Loc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            DateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            OpVehPay: this._FB.array([
                this.initOpVehPay()
            ]) //OpVehPay
        }); //this.form
        // this._initializeTranslation(); 
    }
    OwnerAddJobPage.prototype.ngOnInit = function () {
    };
    OwnerAddJobPage.prototype.initOpVehPay = function () {
        this.counter++;
        return this._FB.group({
            Opname: [''],
            // Opname: ['',Validators.required],
            Vehtype: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    /* */
    OwnerAddJobPage.prototype.addNewInputField = function () {
        if (this.form.valid) {
            this.UpdateSelectedOpVeh(this.form.value.OpVehPay);
            var control = this.form.controls.OpVehPay;
            control.push(this.initOpVehPay());
        }
        else {
            console.log('Nope');
        }
    };
    OwnerAddJobPage.prototype.removeInputField = function (i) {
        this.counter--;
        var control = this.form.controls.OpVehPay;
        control.removeAt(i);
    };
    OwnerAddJobPage.prototype.manage = function (val) {
        var _this = this;
        var result;
        console.log(val);
        // console.log(val.OpVehPay)
        this.appprov.addJob(this.access_token, val.PayOut, val.DateFrom.toString(), val.DateTo.toString(), val.Loc, val.Desc, val.ClientName)
            .then(function (res) {
            console.log(res);
            result = res;
            //       let operatorjobs = this.form.get('technologies').value;
            //       this.operator_names = [];
            //       this.operator_vehicles = [];
            //       for (let i=0; i<operatorjobs.length; i++){
            //         //this.operator_names[i] = operatorjobs[i].name;
            //         let index = this.operators.indexOf(operatorjobs[i].name);
            //         let email = this.emails[0][index];
            //         this.operator_names[i] = email;
            //         this.operator_vehicles[i]  = operatorjobs[i].type;
            //       }  
            var operatorjobs = val.OpVehPay;
            var names = [];
            var vehicles = [];
            for (var i = 0; i < operatorjobs.length; i++) {
                names[i] = operatorjobs[i].Opname;
                vehicles[i] = operatorjobs[i].Vehtype;
            }
            console.log('i am sending this when i am adding job');
            console.log(vehicles);
            _this.appprov.insertOperatorJob(_this.access_token, result.jid, names, vehicles).then(function (res) {
                _this.appprov.presentAlert(_this.addjobmsgtitle, _this.addjobmsg);
                // this.viewctrl.dismiss('1');
                _this.modalCtrl.dismiss('1');
                _this.appprov.addJobDetails(_this.access_token, val.DateFrom.toString(), val.DateTo.toString(), result.jid, names, vehicles);
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    }; // end of manage
    OwnerAddJobPage.prototype.getEmail = function () {
        var _this = this;
        this.appprov.getemail().then(function (res) {
            _this.UsrEmail = res;
            //this.getOperators(res.toString());
        }, function (err) {
            console.log(err);
        });
    };
    OwnerAddJobPage.prototype.getOperators = function (datefrom, dateto) {
        var _this = this;
        console.log("---call---");
        console.log(datefrom);
        console.log(dateto);
        this.OpTD[this.counter] = [];
        this.appprov.getOperatorNames(this.access_token, datefrom, dateto).then(function (res) {
            console.log("no error");
            _this.OpList = res;
            console.log(JSON.stringify(res));
            _this.opname = _this.OpList.operators;
            console.log(_this.opname);
            _this.opemail = _this.OpList.emails;
            console.log(_this.opemail);
            _this.opavail = _this.OpList.availability;
            console.log(_this.opavail);
            var i = _this.opemail.length;
            while (i--) {
                if (_this.selectedOp.indexOf(_this.opemail[i]) > -1) {
                    _this.opemail.splice(i, 1);
                    _this.opname.splice(i, 1);
                    _this.opavail.splice(i, 1);
                }
            }
            for (var i_1 = 0; i_1 < _this.opemail.length; i_1++) {
                _this.OpTD[_this.counter][i_1] = {
                    email: _this.opemail[i_1],
                    name: _this.opname[i_1],
                    availbility: _this.opavail[i_1]
                };
            }
        }, function (err) {
            console.log(err);
        });
    }; // end of getOperators
    OwnerAddJobPage.prototype.getVehicles = function (datefrom, dateto) {
        var _this = this;
        this.VehicleTD[this.counter] = [];
        this.appprov.getOperatorVehicles(this.access_token, datefrom, dateto).then(function (res) {
            console.log('1');
            console.log(JSON.stringify(res));
            _this.DispSno = [];
            _this.VehList = res;
            _this.vehsno = _this.VehList.vehsno;
            _this.vehtype = _this.VehList.vehtype;
            _this.vehModel = _this.VehList.model_no;
            _this.vehAvail = _this.VehList.availability;
            var i = _this.vehsno.length;
            console.log('2');
            for (var k = 0; k < i; k++) {
                _this.DispSno.push(_this.vehsno[k]);
                var concat = _this.vehsno[k].toString() + '==**8**-' + _this.vehModel[k].toString();
                _this.vehsno[k] = concat;
            }
            console.log('3');
            // while(i--){
            //   if(this.selectedVeh.indexOf(this.vehsno[i]) > -1){
            //     this.vehsno.splice(i,1);
            //     this.vehtype.splice(i,1);
            //     // this.DispSno.splice(i,1);
            //   }
            // }
            console.log('4');
            console.log(_this.vehsno.length);
            for (var i_2 = 0; i_2 < _this.vehsno.length; i_2++) {
                _this.VehicleTD[_this.counter][i_2] = {
                    sno: _this.vehsno[i_2],
                    vtype: _this.vehtype[i_2],
                    dissno: _this.DispSno[i_2],
                    availability: _this.vehAvail[i_2]
                };
                console.log('Vehicle TD -----');
                console.log(JSON.stringify(_this.VehicleTD));
            }
        }, function (err) {
            console.log(err);
        });
    }; //end of getVehicles
    OwnerAddJobPage.prototype.UpdateSelectedOpVeh = function (Selected) {
        for (var i = 0; i < Selected.length; i++) {
            if (this.selectedOp.indexOf(Selected[i].Opname) < 0) {
                this.selectedOp.push(Selected[i].Opname);
            }
            if (this.selectedVeh.indexOf(Selected[i].Vehtype) < 0) {
                this.selectedVeh.push(Selected[i].Vehtype);
            }
        }
    };
    OwnerAddJobPage.prototype.ValidateDate = function (event) {
        var datefrom = (this.form.value.DateFrom);
        var dateto = (this.form.value.DateTo);
        if (dateto == '' || datefrom == '') {
            this.appprov.presentAlert('Error', 'Please Select Date From and Date to to continue');
        }
        if (datefrom > dateto || dateto < datefrom) {
            this.appprov.presentAlert('Error', 'Please make sure Date from is earlier than date to and vice versa');
        }
    };
    OwnerAddJobPage.prototype.close = function () {
        // this.viewctrl.dismiss('1');
        this.modalCtrl.dismiss('1');
    };
    OwnerAddJobPage.prototype.LoadOpCheck = function () {
        var valueCheck = 0;
        var nullcheck = 0;
        var datefrom = (this.form.value.DateFrom);
        var dateto = (this.form.value.DateTo);
        console.log(datefrom);
        console.log(dateto);
        if (datefrom != '' && dateto != '') {
            nullcheck = 1;
        }
        if (datefrom <= dateto && dateto >= datefrom) {
            valueCheck = 1;
        }
        if (nullcheck == 1 && valueCheck == 1) {
            this.getOperators(datefrom.toString(), dateto.toString());
            this.getVehicles(datefrom.toString(), dateto.toString());
        }
    };
    OwnerAddJobPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-owner-add-job',
            template: __webpack_require__(/*! ./owner-add-job.page.html */ "./src/app/pages/owner-add-job/owner-add-job.page.html"),
            styles: [__webpack_require__(/*! ./owner-add-job.page.scss */ "./src/app/pages/owner-add-job/owner-add-job.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], OwnerAddJobPage);
    return OwnerAddJobPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-owner-add-job-owner-add-job-module.js.map