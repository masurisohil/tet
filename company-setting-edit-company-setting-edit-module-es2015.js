(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-setting-edit-company-setting-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company-setting/company-setting-edit/company-setting-edit.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company-setting/company-setting-edit/company-setting-edit.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"page-header\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n            <div class=\"card-body\">\n              <div>\n                <div class=\"row\">\n                  <div class=\"col-4\">\n                    <div class=\"clearfix\">\n                      <div class=\"fileinput text-center fileinput-new\" data-provides=\"fileinput\">\n                        <div class=\"btn-file mt-3\">\n                          <div class=\"thumbnail fileinput-new uploaded-user-image rounded-circle\"\n                            style=\"width: 150px; height: 150px;\">\n                            <img [src]=\"editImageUrl ? editImageUrl : 'assets/no_image.png'\" alt=\"\">\n                          </div>\n                          <div class=\"clearfix\"></div>\n                          <button class=\"fileinput-new btn btn-dark btn-sm btn-file mt-3\"> Browse\n                            Image\n                          </button>\n                          <input accept=\"image/x-png,image/jpeg\" (change)=\"fileChangeEvent($event)\" type=\"file\"\n                            file-model=\"myFile\">\n                          <div class=\"fileinput-preview fileinput-exists thumbnail uploaded-user-image rounded-circle\"\n                            style=\"width: 150px; height: 150px;\"></div>\n                        </div>\n                        <div class=\"text-center\">\n                          <a (click)=\"removeFile()\" class=\"btn btn-link btn-sm fileinput-exists mt-3\"\n                            data-dismiss=\"fileinput\">Remove</a> </div>\n                        <div class=\"clearfix mt-3\">\n                          <p class=\"upload-img-label text-muted font-size-12\">*Recommended\n                            Size:<br>Minimum\n                            250 * 250</p>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-8\">\n                    <div class=\"row\">\n      \n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Name <em>*</em></label>\n                          <div class=\"\">\n                            <input [formControl]=\"addForm.controls['company_name']\" type=\"text\" class=\"form-control\"\n                              placeholder=\"\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Email <em>*</em></label>\n                          \n                          <div class=\"\" [ngClass]=\"{'has-error': formErrors.company_email}\">\n                            <input [formControl]=\"addForm.controls['company_email']\" type=\"text\" class=\"form-control\"\n                              placeholder=\"\">\n                            <span *ngIf=\"formErrors.company_email\" class=\"help-block\"\n                              [innerHTML]=\"formErrors.company_email\"></span>\n                          </div>\n      \n                        </div>\n                      </div>\n      \n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Company Domain <em>*</em></label>\n                          <div class=\"\">\n                            <input [formControl]=\"addForm.controls['company_domain']\" type=\"text\" class=\"form-control\"\n                              placeholder=\"\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Company Subdomain <em>*</em></label>\n                          <div class=\"\">\n                            <input [formControl]=\"addForm.controls['company_subdomain']\" type=\"text\" class=\"form-control\"\n                              placeholder=\"\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Currency <em>*</em></label>\n                          <div class=\"\">\n                            <ng-select [formControl]=\"addForm.controls['currency']\"\n                              [items]=\"currencyListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Currency\">\n                            </ng-select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Language <em>*</em></label>\n                          <div class=\"\">\n                            <ng-select [formControl]=\"addForm.controls['language']\" \n                              [items]=\"languageListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Language\">\n                            </ng-select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Time Format <em>*</em></label>\n                          <div class=\"\">\n                            <ng-select [formControl]=\"addForm.controls['time_format']\"\n                              [items]=\"timeFormatListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Time Format\">\n                            </ng-select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Timezone <em>*</em></label>\n                          <div class=\"\">\n                            <ng-select [formControl]=\"addForm.controls['timezone']\" \n                              [items]=\"timezoneListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Timezone\">\n                            </ng-select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Date Format <em>*</em></label>\n                          <div class=\"\">\n                            <ng-select [formControl]=\"addForm.controls['date_format']\" \n                              [items]=\"dateFormatListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Date Format\">\n                            </ng-select>\n                          </div>\n                        </div>\n                      </div>\n                      \n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Country <em>*</em></label>\n                          <div class=\"\">\n                            <ng-select [formControl]=\"addForm.controls['country_id']\" (change)=\"getCountryName($event)\"\n                              [items]=\"countryListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Country\">\n                            </ng-select>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">State <em>*</em></label>\n                          <div class=\"\">\n                            <input [formControl]=\"addForm.controls['state']\" type=\"text\" class=\"form-control\" placeholder=\"\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">City <em>*</em></label>\n                          <div class=\"\">\n                            <input [formControl]=\"addForm.controls['city']\" type=\"text\" class=\"form-control\" placeholder=\"\">\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label class=\"control-label text-md-right\">Street Address <em>*</em></label>\n                          <div class=\"\">\n                            <input [formControl]=\"addForm.controls['street_address']\" type=\"text\" class=\"form-control\"\n                              placeholder=\"\">\n                          </div>\n                        </div>\n                      </div>\n                      \n                    </div>\n                    <div class=\"form-group\">\n                      <label class=\"control-label text-md-right\">Phone Number <em>*</em></label>\n                      <div class=\"d-flex\">\n                        <input number [formControl]=\"addForm.controls['dial_code']\" type=\"text\" class=\"form-control mr-2\"\n                          style=\"width: 100px;\" placeholder=\"Dial code\">\n                        <input number [formControl]=\"addForm.controls['phone_no']\" type=\"text\" class=\"form-control\"\n                          placeholder=\"Enter phone number\">\n                      </div>\n                    </div>\n                    <!-- <div class=\"form-group\">\n                      <label class=\"control-label text-md-right\">Address</label>\n                      <textarea [formControl]=\"addForm.controls['address']\" class=\"form-control\" rows=\"2\"></textarea>\n                    </div> -->\n                  </div>\n                </div>\n      \n      \n              </div>\n            </div>\n            <div class=\"text-right border-top py-4 mt-5 card-footer\">\n              <button type=\"button\" class=\"btn btn-light\" routerLink=\"/setting\">Cancel</button>\n              <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\" class=\"btn btn-secondary ml-2\">Submit</button>\n            </div>\n          </form>\n\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/company-setting/company-setting-edit/company-setting-edit.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/company-setting/company-setting-edit/company-setting-edit.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CompanySettingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySettingEditComponent", function() { return CompanySettingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/company.service */ "./src/app/service/company.service.ts");







let CompanySettingEditComponent = class CompanySettingEditComponent {
    constructor(router, activatedRoute, fb, companyservice, dataservice, commonService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.companyservice = companyservice;
        this.dataservice = dataservice;
        this.commonService = commonService;
        this.PageTitle = "Edit Setting";
        this.editImageUrl = null;
        this.addNewRadio = false;
        this.timezoneListArray = [];
        this.dateFormatListArray = [];
        this.timeFormatListArray = [];
        this.languageListArray = [];
        this.currencyListArray = [];
        this.countryListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            company_email: null,
            apierror: null,
        };
        this.editId = null;
        this.addForm = this.fb.group({
            company_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            company_email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            phone_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            dial_code: ['+', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            address: [null],
            country_name: [null],
            company_domain: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            company_subdomain: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            language: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            currency: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            time_format: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            timezone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            date_format: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            country_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            street_address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ngOnInit() {
        this.dataservice.currentCompany.subscribe((responce) => {
            if (responce) {
                this.currentCompany = responce;
            }
        });
        this.getCountryList();
        this.getMasterData();
        this.getEditObject();
    }
    getMasterData() {
        this.companyservice.getCompanyMasterData().subscribe((res) => {
            if (res.success) {
                this.timezoneListArray = res.data.timezone;
                this.dateFormatListArray = res.data.date_format;
                this.timeFormatListArray = res.data.time_format;
                this.languageListArray = res.data.language;
                this.currencyListArray = res.data.currency;
            }
        });
    }
    getCountryList() {
        this.commonService.getCountryList().subscribe((res) => {
            if (res.success) {
                this.countryListArray = res.data.country_list;
            }
        });
    }
    getEditObject() {
        this.dataservice.currentCompany.subscribe((response) => {
            if (response) {
                this.editId = response.company_id;
                this.editImageUrl = response.company_logo,
                    this.addForm.patchValue({
                        company_name: response.company_name,
                        category_id: response.category_id,
                        dial_code: response.dial_code,
                        company_email: response.company_email,
                        time_format: response.time_format.value,
                        timezone: response.timezone.value,
                        date_format: response.date_format.value,
                        company_domain: response.company_domain,
                        company_subdomain: response.company_subdomain,
                        language: response.language.value,
                        phone_no: response.phone_no,
                        currency: response.currency.value,
                        country_name: response.address.country_name,
                        country_id: response.address.country_id,
                        state: response.address.state,
                        city: response.address.city,
                        street_address: response.address.street_address ? response.address.street_address : ''
                    });
            }
        });
    }
    fileChangeEvent(fileInput) {
        const reg = /(.*?)\.(jpg|jpeg|png|gif|giff)$/;
        if (!fileInput.target.files[0].name.match(reg)) {
            swal.fire('Invalid File!', 'Please select valid file ', 'error');
            this.removeFile();
            return false;
        }
        else {
            this.removeFile();
            this.selectedFile = fileInput.target.files[0];
        }
    }
    removeFile() {
        this.selectedFile = null;
    }
    getCountryName(data) {
        this.addForm.patchValue({ country_name: data.label });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('company_name', formData.value.company_name);
            data.append('company_email', formData.value.company_email);
            data.append('phone_no', formData.value.phone_no);
            data.append('company_domain', formData.value.company_domain);
            data.append('company_subdomain', formData.value.company_subdomain);
            data.append('dial_code', formData.value.dial_code);
            data.append('language', formData.value.language);
            data.append('currency', formData.value.currency);
            data.append('time_format', formData.value.time_format);
            data.append('timezone', formData.value.timezone);
            data.append('date_format', formData.value.date_format);
            let address = {
                country_id: formData.value.country_id,
                country_name: formData.value.country_name,
                state: formData.value.state,
                city: formData.value.city,
                street_address: formData.value.street_address
            };
            data.append('address', JSON.stringify(address));
            if (this.selectedFile) {
                data.append('file', this.selectedFile);
            }
            this.companyservice.editCompany(this.editId, data).subscribe((response) => {
                this.showLoader = false;
                if (response.success) {
                    this.commonService.getProfile().subscribe((response) => {
                        if (response.success) {
                            this.dataservice.setAuth(response.data);
                            this.router.navigateByUrl('/setting');
                        }
                    });
                }
                else {
                    response.error.map(obj => {
                        if (obj.hasOwnProperty('company_email')) {
                            this.formErrors['company_email'] = obj['company_email'];
                        }
                        else {
                            this.formErrors['apierror'] = `* ${response.error}`;
                        }
                    });
                }
            }, (error) => {
                this.showLoader = false;
            });
        }
    }
};
CompanySettingEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
CompanySettingEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-company-setting-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./company-setting-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/company-setting/company-setting-edit/company-setting-edit.component.html")).default
    })
], CompanySettingEditComponent);



/***/ }),

/***/ "./src/app/pages/company-setting/company-setting-edit/company-setting-edit.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/company-setting/company-setting-edit/company-setting-edit.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: routes, CompanySettingEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySettingEditModule", function() { return CompanySettingEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _company_setting_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./company-setting-edit.component */ "./src/app/pages/company-setting/company-setting-edit/company-setting-edit.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_service_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/company.service */ "./src/app/service/company.service.ts");










const routes = [
    {
        path: '', component: _company_setting_edit_component__WEBPACK_IMPORTED_MODULE_3__["CompanySettingEditComponent"]
    }
];
let CompanySettingEditModule = class CompanySettingEditModule {
};
CompanySettingEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_company_setting_edit_component__WEBPACK_IMPORTED_MODULE_3__["CompanySettingEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ], providers: [src_app_service_company_service__WEBPACK_IMPORTED_MODULE_9__["CompanyService"]]
    })
], CompanySettingEditModule);



/***/ })

}]);
//# sourceMappingURL=company-setting-edit-company-setting-edit-module-es2015.js.map