(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-packing-add-packing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col d-flex\">\r\n                <h2 class=\"mr-auto\">Add Packing </h2>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\r\n            <div class=\"card-body\">\r\n                <div class=\"mb-3\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"form-group row align-items-center\" [ngClass]=\"{'has-error': formErrors.order_id}\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Select Order Number</label>\r\n\r\n                            <ng-select style=\"width:180px\" [formControl]=\"addForm.controls['sales_order_id']\"\r\n                                [items]=\"orderNumberArray\" (change)=\"onOrderChange($event)\" bindLabel=\"label\"\r\n                                bindValue=\"value\" placeholder=\"Select Order\">\r\n                            </ng-select>\r\n                            <span *ngIf=\"formErrors.order_id\" class=\"help-block\"\r\n                                [innerHTML]=\"formErrors.order_id\"></span>\r\n                        </div>\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Packing Type</label>\r\n                            <ng-select style=\"width: 180px;\" [formControl]=\"addForm.controls['pack_type']\"\r\n                                placeholder=\"Select Packing Type\" [items]=\"packTypeArray\" bindLabel=\"label\"\r\n                                bindValue=\"value\">\r\n                            </ng-select>\r\n                        </div>\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Add Products</label>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addProduct()\">\r\n                                Add\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"border p-2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <h6>John Doe</h6>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                    <div>Pallet Number: 78959197880000709972</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2\">\r\n                                <div class=\"col-md-6\">\r\n                                    <p class=\"mb-1\">Order No. <span>11722</span></p>\r\n                                    <p class=\"mb-1\">Item No. <span>11722</span></p>\r\n                                    <p class=\"mb-1\">Description. <span>11722</span></p>\r\n                                </div>\r\n                                <div class=\"col-md-6 text-right\">\r\n                                    <div class=\"w-25 ml-auto\">\r\n                                        Akshya Nagar 1st Block 1st Cross,\r\n                                        Rammurthy nagar,\r\n                                        Bangalore-560016\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"mt-2\">\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table\">\r\n                                    <thead class=\"thead-dark\">\r\n                                        <tr>\r\n                                            <th width=\"10%\">No.</th>\r\n                                            <th width=\"15%\">Product Code</th>\r\n                                            <th width=\"65%\">Product Details</th>\r\n                                            <th width=\"10%\">Product Total</th>\r\n\r\n                                        </tr>\r\n\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let prodLists of productDetailList; let i =index\">\r\n                                            <td>{{i + 1}}</td>\r\n                                            <td>{{prodLists.prodCode}}</td>\r\n                                            <td>{{prodLists.prodDet}}</td>\r\n                                            <td class=\"text-center\">{{prodLists.prodTotal}}</td>\r\n                                        </tr>\r\n\r\n\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"text-right border-top py-4 card-footer\">\r\n                <a href=\"/outbound/packing\" class=\"btn btn-light\">Cancel</a>\r\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\">Done</button></div>\r\n        </form>\r\n    </div>\r\n\r\n</div>\r\n<app-product-list-popup [ProductList]=\"orderDetails?.product_list\" (onProductSubmit)=\"onProductSubmit($event)\">\r\n</app-product-list-popup>");

/***/ }),

/***/ "./src/app/pages/outbound/packing/add-packing/add-packing.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/outbound/packing/add-packing/add-packing.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddPackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPackingComponent", function() { return AddPackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_common_module_product_list_popup_product_list_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common-module/product-list-popup/product-list-popup.component */ "./src/app/common-module/product-list-popup/product-list-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/packing.service */ "./src/app/service/packing.service.ts");






let AddPackingComponent = class AddPackingComponent {
    constructor(packingService, activatedRoute, fb, router) {
        this.packingService = packingService;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.router = router;
        this.orderNumberArray = [];
        this.packTypeArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            apierror: null,
            order_id: null,
            product: null
        };
        this.isEditing = false;
        this.editId = null;
        this.productDetailList = [];
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            sales_order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            receipt_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            client_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pick_list_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            pack_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            product_detail_list: [],
        });
    }
    ngOnInit() {
        // if (this.isEditing) {
        //   this.getEditObject()
        // }
        this.getMasterData();
    }
    getMasterData() {
        this.packingService.getMasterData({}).subscribe((responce) => {
            if (responce.success) {
                this.orderNumberArray = responce.data.sales_order ? responce.data.sales_order : [];
                this.packTypeArray = responce.data.pack_type ? responce.data.pack_type : [];
            }
        });
    }
    onOrderChange(data) {
        if (data && data.value) {
            this.getSalesOrderDetail(data.value);
            this.formErrors.order_id = null;
        }
    }
    getSalesOrderDetail(id) {
        this.packingService.getSalesOrderDetail(id).subscribe((responce) => {
            if (responce.success) {
                this.orderDetails = responce.data;
                this.setdata();
            }
        });
    }
    setdata() {
        this.addForm.patchValue({
            client_id: this.orderDetails.client_id.value,
            pick_list_no: this.orderDetails.pick_list_no
        });
    }
    addProduct() {
        if (this.addForm.value.sales_order_id) {
            this.productAdd.addObject();
        }
        else {
            this.formErrors.order_id = "* Please Select Order Number";
        }
    }
    onProductSubmit(data) {
        if (data && data.length > 0) {
            data.filter((obj) => {
                if (obj.location_wise_product_list && obj.location_wise_product_list.length > 0) {
                    obj.location_wise_product_list.filter((data, i) => {
                        data['id'] = i;
                        this.productDetailList.push(data);
                    });
                }
            });
        }
    }
    submitForm(formData) {
        if (formData.valid) {
            if (this.productDetailList && this.productDetailList.length > 0) {
                this.formErrors.product = null;
                this.showLoader = true;
                const data = new FormData();
                data.append('sales_order_id', formData.value.sales_order_id);
                data.append('pack_type', formData.value.pack_type);
                data.append('client_id', formData.value.client_id);
                data.append('pick_list_no', formData.value.pick_list_no);
                data.append('product_detail_list', JSON.stringify(this.productDetailList));
                if (this.isEditing) {
                    this.packingService.editPacking(this.editId, data).subscribe((response) => {
                        this.showLoader = false;
                        if (response.success) {
                            this.router.navigateByUrl('/outbound/pick-list-new');
                        }
                        else {
                            response.error.map(obj => {
                                if (obj.hasOwnProperty('sales_order_id')) {
                                    this.formErrors['sales_order_id'] = obj['sales_order_id'];
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
                    this.packingService.addPacking(data).subscribe((response) => {
                        this.showLoader = false;
                        if (response.success) {
                            this.router.navigateByUrl('/outbound/pick-list-new');
                        }
                        else {
                            response.error.map(obj => {
                                if (obj.hasOwnProperty('sales_order_id')) {
                                    this.formErrors['sales_order_id'] = obj['sales_order_id'];
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
            else {
                this.formErrors.product = "* Please Add Product";
            }
        }
    }
};
AddPackingComponent.ctorParameters = () => [
    { type: src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_5__["PackingService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_common_module_product_list_popup_product_list_popup_component__WEBPACK_IMPORTED_MODULE_2__["ProductListPopupComponent"], { static: false })
], AddPackingComponent.prototype, "productAdd", void 0);
AddPackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-packing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-packing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html")).default,
    })
], AddPackingComponent);



/***/ }),

/***/ "./src/app/pages/outbound/packing/add-packing/add-packing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/outbound/packing/add-packing/add-packing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AddPackingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPackingModule", function() { return AddPackingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_packing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-packing.component */ "./src/app/pages/outbound/packing/add-packing/add-packing.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/packing.service */ "./src/app/service/packing.service.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_common_module_product_list_popup_product_list_popup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common-module/product-list-popup/product-list-popup.module */ "./src/app/common-module/product-list-popup/product-list-popup.module.ts");











const routes = [
    {
        path: '',
        component: _add_packing_component__WEBPACK_IMPORTED_MODULE_3__["AddPackingComponent"]
    }
];
let AddPackingModule = class AddPackingModule {
};
AddPackingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_packing_component__WEBPACK_IMPORTED_MODULE_3__["AddPackingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"],
            src_app_common_module_product_list_popup_product_list_popup_module__WEBPACK_IMPORTED_MODULE_10__["ProductListPopupModule"],
        ], providers: [src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_7__["PackingService"]]
    })
], AddPackingModule);



/***/ })

}]);
//# sourceMappingURL=add-packing-add-packing-module-es2015.js.map