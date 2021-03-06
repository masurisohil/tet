(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bay-bay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/add-bay/add-bay.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/add-bay/add-bay.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Bay Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['bay_name']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Bay Code <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.bay_code}\">\r\n              <input [formControl]=\"addForm.controls['bay_code']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              <span *ngIf=\"formErrors.bay_code\" class=\"help-block\" [innerHTML]=\"formErrors.bay_code\"></span>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">\r\n              Aisle Name <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['aisle_id']\" [items]=\"aisleListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Aisle\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\"></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-container *ngIf=\"isEditing; else elseTemplate\">\r\n                <img class=\"bcode\" [src]=\"barCodeFile\" alt=\"\" sizes=\"\" srcset=\"\">\r\n              </ng-container>\r\n              <ng-template #elseTemplate>\r\n                <img class=\"bcode\" id=\"barCodeShow\" alt=\"\" sizes=\"\" srcset=\"\" [hidden]=\"!addForm.valid\">\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top pt-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/bay\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\"\r\n          [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\" [disabled]=\"showLoader\">Submit</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/bay-list/bay-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/bay-list/bay-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Bay'\" [editData]=\"'/manage/bay/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/bay-view/bay-view.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/bay-view/bay-view.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">Aisle Details</h2>\r\n      <div class=\"ml-3\">\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <button class=\"btn btn-secondary\" (click)=\"VoucherPrint()\">Print</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"tab-pane fade show active\" id=\"details\" role=\"tabpanel\" aria-labelledby=\"details-tab\">\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Bay Name</label>\r\n            <div>{{objectArray?.bay_name}}</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Bay Code</label>\r\n            <div>{{objectArray?.bay_code}}</div>\r\n          </div>\r\n          <div class=\"col-md-4\">\r\n            <label class=\"text-muted mb-1 font-weight-bold\">Bar code No</label>\r\n            <div>{{objectArray?.bay_bar_code}}</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-4\">\r\n          <div class=\"col\">\r\n            <div>\r\n              <img [src]=\"objectArray?.bay_bar_code_image\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/master/bay/add-bay/add-bay.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/master/bay/add-bay/add-bay.component.ts ***!
  \***************************************************************/
/*! exports provided: AddBayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBayComponent", function() { return AddBayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_bay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/bay.service */ "./src/app/service/bay.service.ts");
/* harmony import */ var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/common.service */ "./src/app/service/common.service.ts");






let AddBayComponent = class AddBayComponent {
    constructor(router, activatedRoute, fb, bayservice, commonservice) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.bayservice = bayservice;
        this.commonservice = commonservice;
        this.PageTitle = "Bay";
        this.aisleListArray = [];
        this.addNewRadio = false;
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            bay_code: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            bay_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            bay_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            aisle_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            bay_bar_code: [null]
        });
    }
    ngOnInit() {
        this.getMasterData();
        if (this.isEditing) {
            this.getEditObject();
        }
        else {
            this.getAreaBarcode();
        }
    }
    getMasterData() {
        this.bayservice.getMasterData().subscribe((res) => {
            if (res.success) {
                this.aisleListArray = res.data.aisle;
            }
        });
    }
    getAreaBarcode() {
        this.commonservice.getGenerateBarcode().subscribe((res) => {
            this.addForm.patchValue({ bay_bar_code: res.type });
            const urlCreator = window.URL || window.webkitURL;
            document.getElementById('barCodeShow').src = urlCreator.createObjectURL(res);
            this.selectedFile = new File([res], 'noname.jpeg', { type: 'image/jpeg' });
        });
    }
    getEditObject() {
        this.bayservice.getBayById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue(response.data);
                this.barCodeFile = response.data.bay_bar_code_image;
            }
            else {
                this.router.navigateByUrl('/manage/bay');
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('bay_name', formData.value.bay_name);
            data.append('bay_code', formData.value.bay_code);
            data.append('aisle_id', formData.value.aisle_id);
            data.append('bay_bar_code', formData.value.bay_bar_code);
            if (this.selectedFile) {
                data.append('file', this.selectedFile);
            }
            if (this.isEditing) {
                this.bayservice.editBay(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/bay');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('bay_code')) {
                                this.formErrors['bay_code'] = obj['bay_code'];
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
                this.bayservice.addBay(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/bay');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('bay_code')) {
                                this.formErrors['bay_code'] = obj['bay_code'];
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
};
AddBayComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_bay_service__WEBPACK_IMPORTED_MODULE_4__["BayService"] },
    { type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
AddBayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-bay',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-bay.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/add-bay/add-bay.component.html")).default
    })
], AddBayComponent);



/***/ }),

/***/ "./src/app/pages/master/bay/bay-list/bay-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/master/bay/bay-list/bay-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: BayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BayListComponent", function() { return BayListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_bay_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/bay.service */ "./src/app/service/bay.service.ts");





let BayListComponent = class BayListComponent {
    constructor(paginationService, bayservice) {
        this.paginationService = paginationService;
        this.bayservice = bayservice;
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.PageTitle = "Manage Bay";
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['self'];
        // });
        this.loadform = false;
        this.setHeaderData();
        this.getObjects();
    }
    setHeaderData() {
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bay Name",
            key: "bay_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bay Code",
            key: "bay_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bar Code No",
            key: "bay_bar_code",
        }));
        let canEdit = true;
        let canView = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/bay/edit/',
                id: 'bay_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/manage/bay/view/',
                id: 'bay_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'bay/',
                id: 'bay_id'
            };
        }
        let actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["ActionField"](actions);
        this.headerData.push(actionColom);
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.bayservice.getBayList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.list;
                this.showPagination = true;
                this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                this.objectArray = [];
                this.pagination = null;
            }
        }, (error) => {
            this.loadingState = false;
            this.objectArray = [];
            this.pagination = null;
        });
    }
    getPage(page) {
        this.currentPage = page;
        this.getObjects();
    }
    searchObject(text) {
        this.searchText = text;
        this.currentPage = 1;
        this.getObjects();
    }
    onReloadEvent() {
        this.getObjects();
    }
};
BayListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_bay_service__WEBPACK_IMPORTED_MODULE_4__["BayService"] }
];
BayListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bay-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bay-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/bay-list/bay-list.component.html")).default
    })
], BayListComponent);



/***/ }),

/***/ "./src/app/pages/master/bay/bay-view/bay-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/master/bay/bay-view/bay-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: BayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BayViewComponent", function() { return BayViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_bay_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/bay.service */ "./src/app/service/bay.service.ts");




let BayViewComponent = class BayViewComponent {
    constructor(activatedRoute, bayservice) {
        this.activatedRoute = activatedRoute;
        this.bayservice = bayservice;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
    }
    ngOnInit() {
        this.bayservice.getBayById(this.viewId).subscribe((response) => {
            if (response.success) {
                this.objectArray = response.data;
            }
        });
    }
    VoucherSourcetoPrint() {
        var _a, _b, _c;
        return (`
              <html>
              <head>
                <script>
                  function step1() {
                    setTimeout('step2()', 10);
                  }
                  function step2() {
                    window.print(); window.close()
                  }
                </script>
              </head>

              <body onload='step1()'>
                <h3>Bay Name:- ${(_a = this.objectArray) === null || _a === void 0 ? void 0 : _a.bay_name}</h3>
                <h3>Bay Code:- ${(_b = this.objectArray) === null || _b === void 0 ? void 0 : _b.bay_code}</h3>
                <img src='${(_c = this.objectArray) === null || _c === void 0 ? void 0 : _c.bay_bar_code_image}' />
              </body>
              </html>
        `);
    }
    VoucherPrint() {
        // let pwa = window.open();
        // pwa.document.open();
        // pwa.document.write(this.VoucherSourcetoPrint());
        // pwa.document.close();
        window.print();
    }
};
BayViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_bay_service__WEBPACK_IMPORTED_MODULE_3__["BayService"] }
];
BayViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bay-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bay-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/bay/bay-view/bay-view.component.html")).default
    })
], BayViewComponent);



/***/ }),

/***/ "./src/app/pages/master/bay/bay.module.ts":
/*!************************************************!*\
  !*** ./src/app/pages/master/bay/bay.module.ts ***!
  \************************************************/
/*! exports provided: BayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BayModule", function() { return BayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var _add_bay_add_bay_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-bay/add-bay.component */ "./src/app/pages/master/bay/add-bay/add-bay.component.ts");
/* harmony import */ var _bay_list_bay_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bay-list/bay-list.component */ "./src/app/pages/master/bay/bay-list/bay-list.component.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_service_bay_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/service/bay.service */ "./src/app/service/bay.service.ts");
/* harmony import */ var _bay_view_bay_view_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./bay-view/bay-view.component */ "./src/app/pages/master/bay/bay-view/bay-view.component.ts");
















const routes = [
    {
        path: "",
        component: _bay_list_bay_list_component__WEBPACK_IMPORTED_MODULE_8__["BayListComponent"],
        data: { title: 'bay_list' }
    },
    {
        path: "add",
        component: _add_bay_add_bay_component__WEBPACK_IMPORTED_MODULE_7__["AddBayComponent"],
        data: { title: 'add_bay' }
    },
    {
        path: 'edit/:id',
        component: _add_bay_add_bay_component__WEBPACK_IMPORTED_MODULE_7__["AddBayComponent"],
        data: { title: 'edit_bay' }
    },
    {
        path: 'view/:id',
        component: _bay_view_bay_view_component__WEBPACK_IMPORTED_MODULE_15__["BayViewComponent"],
        data: { title: 'view_bay' }
    }
];
let BayModule = class BayModule {
};
BayModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_bay_add_bay_component__WEBPACK_IMPORTED_MODULE_7__["AddBayComponent"], _bay_list_bay_list_component__WEBPACK_IMPORTED_MODULE_8__["BayListComponent"], _bay_view_bay_view_component__WEBPACK_IMPORTED_MODULE_15__["BayViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_11__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_13__["PaginationModule"]
        ], providers: [src_app_service_bay_service__WEBPACK_IMPORTED_MODULE_14__["BayService"]]
    })
], BayModule);



/***/ }),

/***/ "./src/app/service/bay.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/bay.service.ts ***!
  \****************************************/
/*! exports provided: BayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BayService", function() { return BayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let BayService = class BayService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getBayList(param) {
        return this.http.get(`${this.API_URL}/bay`, { params: param });
    }
    addBay(data) {
        return this.http.post(`${this.API_URL}/bay`, data);
    }
    editBay(id, data) {
        return this.http.put(`${this.API_URL}/bay/${id}`, data);
    }
    getBayById(id, param = null) {
        return this.http.get(`${this.API_URL}/bay/${id}`, { params: param });
    }
    getMasterData() {
        return this.http.get(`${this.API_URL}/bay/master-data`);
    }
};
BayService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BayService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BayService);



/***/ })

}]);
//# sourceMappingURL=bay-bay-module-es2015.js.map