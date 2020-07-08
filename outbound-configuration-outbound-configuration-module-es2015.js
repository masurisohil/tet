(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outbound-configuration-outbound-configuration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/outbound-configuration/outbound-configuration-edit/outbound-configuration-edit.component.html":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/outbound-configuration/outbound-configuration-edit/outbound-configuration-edit.component.html ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\n    <div class=\"page-header\">\n        <div class=\"row\">\n            <div class=\"col\">\n                <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n            <div class=\"card-body\">\n                <div>\n\n                    <div class=\"form-group row align-items-center\">\n                        <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Picking Type\n                            <em>*</em></label>\n                        <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.picking_type}\">\n                            <ng-select [formControl]=\"addForm.controls['picking_type']\" [items]=\"pickingTypeListArray\"\n                                bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Type\">\n                            </ng-select>\n                            <span *ngIf=\"formErrors.picking_type\" class=\"help-block\"\n                                [innerHTML]=\"formErrors.picking_type\"></span>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"text-right border-top pt-4 mt-5 card-footer\">\n                <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/outbound-configuration\">Cancel</button>\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\"\n                    [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\n                    [disabled]=\"showLoader\">Submit</button>\n            </div>\n        </form>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/outbound-configuration/outbound-configuration.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/outbound-configuration/outbound-configuration.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\n    <div class=\"page-header\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">Outbound Configuration</h2>\n            <div class=\"ml-3\">\n            </div>\n            <div class=\"ml-3\">\n                <button *ngIf=\"is_add\" class=\"btn btn-secondary\" [routerLink]=\"['add']\">Add</button>\n                <button *ngIf=\"is_edit\" class=\"btn btn-secondary\" [routerLink]=\"['edit',company_id]\">Update</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"tab-pane fade show active\" id=\"details\" role=\"tabpanel\" aria-labelledby=\"details-tab\">\n                <div class=\"row mt-4\">\n                    <div class=\"col-md-4\">\n                        <label class=\"text-muted mb-1 font-weight-bold\">Picking Type</label>\n                        <div>{{objectDetails?.picking_type?.label}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/master/outbound-configuration/outbound-configuration-edit/outbound-configuration-edit.component.ts":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/pages/master/outbound-configuration/outbound-configuration-edit/outbound-configuration-edit.component.ts ***!
  \**************************************************************************************************************************/
/*! exports provided: OutboundConfigurationEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundConfigurationEditComponent", function() { return OutboundConfigurationEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_outbound_configuration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/outbound-configuration.service */ "./src/app/service/outbound-configuration.service.ts");





let OutboundConfigurationEditComponent = class OutboundConfigurationEditComponent {
    constructor(router, activatedRoute, fb, outboundConfigurationService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.outboundConfigurationService = outboundConfigurationService;
        this.PageTitle = "Outbound Configuration";
        this.loadingState = false;
        this.pickingTypeListArray = [];
        this.showLoader = false;
        this.formErrors = {
            picking_type: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        this.addForm = this.fb.group({
            picking_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        this.getMasterData();
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    getMasterData() {
        this.outboundConfigurationService.getOutboundConfigurationMasterData().subscribe((res) => {
            if (res.success) {
                this.pickingTypeListArray = res.data.picking_type ? res.data.picking_type : [];
            }
        });
    }
    getEditObject() {
        this.outboundConfigurationService.getOutboundConfigurationByCompanyId(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue({ picking_type: response.data.picking_type.value });
            }
            else {
                this.router.navigateByUrl('/manage/outbound-configuration');
            }
        });
    }
    submitForm(formData) {
        this.removeError();
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('picking_type', formData.value.picking_type);
            if (this.isEditing) {
                this.outboundConfigurationService.editOutboundConfiguration(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/outbound-configuration');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('number_tag_to_create')) {
                                this.formErrors['number_tag_to_create'] = obj['number_tag_to_create'];
                            }
                            else if (obj.hasOwnProperty('picking_type')) {
                                this.formErrors['picking_type'] = obj['picking_type'];
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
            else {
                this.outboundConfigurationService.addOutboundConfiguration(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/outbound-configuration');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('number_tag_to_create')) {
                                this.formErrors['number_tag_to_create'] = obj['number_tag_to_create'];
                            }
                            else if (obj.hasOwnProperty('picking_type')) {
                                this.formErrors['picking_type'] = obj['picking_type'];
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
    }
    removeError() {
        this.formErrors = {
            picking_type: null,
            apierror: null,
        };
    }
};
OutboundConfigurationEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_outbound_configuration_service__WEBPACK_IMPORTED_MODULE_4__["OutboundConfigurationService"] }
];
OutboundConfigurationEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outbound-configuration-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outbound-configuration-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/outbound-configuration/outbound-configuration-edit/outbound-configuration-edit.component.html")).default,
    })
], OutboundConfigurationEditComponent);



/***/ }),

/***/ "./src/app/pages/master/outbound-configuration/outbound-configuration.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/master/outbound-configuration/outbound-configuration.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: OutboundConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundConfigurationComponent", function() { return OutboundConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_outbound_configuration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/outbound-configuration.service */ "./src/app/service/outbound-configuration.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");




let OutboundConfigurationComponent = class OutboundConfigurationComponent {
    constructor(dataService, outboundConfigurationService) {
        this.dataService = dataService;
        this.outboundConfigurationService = outboundConfigurationService;
        this.is_edit = false;
        this.is_add = false;
        this.dataService.currentCompany.subscribe((res) => {
            if (res && res.company_id) {
                this.currentCompany = res;
                this.company_id = res.company_id;
                this.getData();
            }
        });
    }
    ngOnInit() {
    }
    getData() {
        this.outboundConfigurationService.getOutboundConfigurationByCompanyId(this.company_id).subscribe((res) => {
            if (res.success) {
                this.objectDetails = res.data;
                this.is_edit = true;
            }
            else {
                this.is_add = true;
            }
        });
    }
};
OutboundConfigurationComponent.ctorParameters = () => [
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: src_app_service_outbound_configuration_service__WEBPACK_IMPORTED_MODULE_2__["OutboundConfigurationService"] }
];
OutboundConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outbound-configuration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outbound-configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/outbound-configuration/outbound-configuration.component.html")).default,
    })
], OutboundConfigurationComponent);



/***/ }),

/***/ "./src/app/pages/master/outbound-configuration/outbound-configuration.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/master/outbound-configuration/outbound-configuration.module.ts ***!
  \**************************************************************************************/
/*! exports provided: OutboundConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundConfigurationModule", function() { return OutboundConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _outbound_configuration_edit_outbound_configuration_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outbound-configuration-edit/outbound-configuration-edit.component */ "./src/app/pages/master/outbound-configuration/outbound-configuration-edit/outbound-configuration-edit.component.ts");
/* harmony import */ var _outbound_configuration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./outbound-configuration.component */ "./src/app/pages/master/outbound-configuration/outbound-configuration.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_outbound_configuration_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/outbound-configuration.service */ "./src/app/service/outbound-configuration.service.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");











const routes = [
    {
        path: '',
        component: _outbound_configuration_component__WEBPACK_IMPORTED_MODULE_4__["OutboundConfigurationComponent"],
        data: { title: 'view_outbound_configuration' }
    },
    {
        path: 'edit/:id',
        component: _outbound_configuration_edit_outbound_configuration_edit_component__WEBPACK_IMPORTED_MODULE_3__["OutboundConfigurationEditComponent"],
        data: { title: 'edit_outbound_configuration' }
    },
    {
        path: "add",
        component: _outbound_configuration_edit_outbound_configuration_edit_component__WEBPACK_IMPORTED_MODULE_3__["OutboundConfigurationEditComponent"],
        data: { title: 'add_outbound_configuration' }
    }
];
let OutboundConfigurationModule = class OutboundConfigurationModule {
};
OutboundConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_outbound_configuration_edit_outbound_configuration_edit_component__WEBPACK_IMPORTED_MODULE_3__["OutboundConfigurationEditComponent"], _outbound_configuration_component__WEBPACK_IMPORTED_MODULE_4__["OutboundConfigurationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_7__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
        ], providers: [src_app_service_outbound_configuration_service__WEBPACK_IMPORTED_MODULE_9__["OutboundConfigurationService"]]
    })
], OutboundConfigurationModule);



/***/ }),

/***/ "./src/app/service/outbound-configuration.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/service/outbound-configuration.service.ts ***!
  \***********************************************************/
/*! exports provided: OutboundConfigurationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutboundConfigurationService", function() { return OutboundConfigurationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let OutboundConfigurationService = class OutboundConfigurationService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    addOutboundConfiguration(data) {
        return this.http.post(`${this.API_URL}/outbound_config`, data);
    }
    editOutboundConfiguration(id, data) {
        return this.http.put(`${this.API_URL}/outbound_config/${id}`, data);
    }
    getOutboundConfigurationByCompanyId(id, param = null) {
        return this.http.get(`${this.API_URL}/outbound_config/${id}`, { params: param });
    }
    getOutboundConfigurationMasterData() {
        return this.http.get(`${this.API_URL}/outbound_config/master-data`);
    }
};
OutboundConfigurationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OutboundConfigurationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], OutboundConfigurationService);



/***/ })

}]);
//# sourceMappingURL=outbound-configuration-outbound-configuration-module-es2015.js.map