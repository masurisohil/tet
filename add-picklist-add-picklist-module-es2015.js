(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-picklist-add-picklist-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header border-b\">\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <h2 class=\"mr-auto\">Generate Picklist</h2>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\r\n            <div class=\"card-body\">\r\n                <div class=\"form-group row\">\r\n                    <label class=\"control-label text-md-right col-md-3\">Order Number <em>*</em></label>\r\n                    <div class=\"d-flex\" [ngClass]=\"{'has-error': formErrors.sales_order_id}\">\r\n                        <ng-select style=\"width:175px\" [formControl]=\"addForm.controls['sales_order_id']\"\r\n                            [items]=\"orderNumberArray\" (change)=\"onOrderChange($event)\" bindLabel=\"label\"\r\n                            bindValue=\"value\" placeholder=\"Select Order\">\r\n                        </ng-select>\r\n                        <span *ngIf=\"formErrors.sales_order_id\" class=\"help-block\"\r\n                            [innerHTML]=\"formErrors.sales_order_id\"></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-2\">\r\n                    <!-- <div class=\"col-md-12\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"control-label text-md-right col-md-3\">Number Of Order</label>\r\n                            <input number type=\"text\" class=\"form-control \" style=\"width: 175px;\" placeholder=\"\">\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group row\">\r\n                            <label class=\"control-label text-md-right col-md-3\">Date of Receipt</label>\r\n                            <div class=\"date-picker\" style=\"width: 175px;\">\r\n                                <ng2-flatpickr [setDate]=\"currentDate\" [formControl]=\"addForm.controls['receipt_date']\"\r\n                                    [config]=\"exampleOptions\">\r\n                                </ng2-flatpickr>\r\n                                <span class=\"date-picker-icon\">\r\n                                    <span class=\"fa fa-calendar\"></span>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group row\">\r\n                    <label class=\"control-label text-md-right col-md-3\">Add New Products :</label>\r\n                    <button type=\"button\" (click)=\"addProduct()\" class=\"btn btn-primary\">Add</button>\r\n                </div>\r\n\r\n                <div *ngIf=\"orderDetails\" class=\"mt-4 border-top border-bottom pt-3\">\r\n                    <div class=\"row mb-4\">\r\n                        <div class=\"col-12 text-center\">\r\n                            <p class=\"mb-0\">PickList No. : {{orderDetails?.pick_list_no}}</p>\r\n                            <h6 class=\"ml-3 mb-0 border-bottom d-inline pb-2 px-3\">{{orderDetails?.client_id?.label}}\r\n                            </h6>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-sm-6\">\r\n                            <div class=\"row\">\r\n                                <div *ngIf=\"orderDetails?.client_address[0]\" class=\"col-md-5\">\r\n                                    <h6>Sold To:</h6>\r\n                                    <div class=\"mt-1\">\r\n\r\n                                        {{orderDetails?.client_address[0]?.street_address}}<br />\r\n                                        {{orderDetails?.client_address[0]?.label}}-\r\n                                        {{orderDetails?.client_address[0]?.pin_code}}<br />\r\n                                        {{orderDetails?.client_address[0]?.state}} ,\r\n                                        {{orderDetails?.client_address[0]?.country_name}}\r\n                                        <br />\r\n                                    </div>\r\n                                </div>\r\n                                <div *ngIf=\"orderDetails?.client_address[0]\" class=\"col-md-5\">\r\n                                    <h6>Ship To:</h6>\r\n                                    <p class=\"mt-1\">\r\n                                        {{orderDetails?.client_address[0]?.street_address}}<br />\r\n                                        {{orderDetails?.client_address[0]?.label}}-\r\n                                        {{orderDetails?.client_address[0]?.pin_code}}<br />\r\n                                        {{orderDetails?.client_address[0]?.state}} ,\r\n                                        {{orderDetails?.client_address[0]?.country_name}}\r\n                                        <br />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-sm-6\">\r\n\r\n                            <div class=\"row  justify-content-end text-right\">\r\n                                <div class=\"col-md-6 col-lg-4\">\r\n                                    <div><label class=\"mb-0 text-muted font-w\">Sales Order Number</label>\r\n                                        <div class=\"\"> {{orderDetails?.sales_order_no}} </div>\r\n                                    </div>\r\n                                    <div class=\"mt-2\"><label class=\"mb-0 text-muted font-w\">Customer Number</label>\r\n                                        <div class=\"\"> {{orderDetails?.client_id?.client_code}}\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6 col-lg-4\">\r\n                                    <div><label class=\"mb-0 text-muted font-w\">Sales Order Date</label>\r\n                                        <div class=\"\">\r\n                                            {{orderDetails?.sales_order_date |date:date_format :timezone}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"mt-2\"><label class=\"mb-0 text-muted font-w\">PickList Date</label>\r\n                                        <div class=\"\"> {{currentDate |date:date_format :timezone}}</div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"mt-3\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\">\r\n                            <h5>Products</h5>\r\n                            <span *ngIf=\"formErrors.product\" class=\"help-block\" [innerHTML]=\"formErrors.product\"></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row mt-2\">\r\n                        <div class=\"col\">\r\n                            <div class=\"table-responsive-md\">\r\n                                <table class=\"table\">\r\n                                    <thead class=\"thead-dark\">\r\n                                        <tr>\r\n                                            <th class=\"align-items-center d-flex\">\r\n                                                <div class=\"form-check form-check-inline mr-0\">\r\n                                                    <div class=\"checkbox-container\">\r\n                                                        <input id=\"checkBoxproAll\"\r\n                                                            (change)=\"markAllProduct($event.target.checked)\"\r\n                                                            class=\"form-check-input\" type=\"checkbox\" value=\"all\">\r\n                                                        <span class=\"checkmark\"></span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th>SKU</th>\r\n                                            <th>Product</th>\r\n                                            <th>Location</th>\r\n                                            <th class=\"text-center\">Order Quantity</th>\r\n                                            <th>Price</th>\r\n                                            <th>Amount</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let item of productDetailList; let i=index\">\r\n                                            <td class=\"align-items-center d-flex\">\r\n                                                <div class=\"form-check form-check-inline mr-0\">\r\n                                                    <div class=\"checkbox-container\">\r\n                                                        <input id=\"checkBoxpro{{i}}\"\r\n                                                            (change)=\"oneProduct(item, $event.target.checked)\"\r\n                                                            class=\"form-check-input pro-chk\" type=\"checkbox\">\r\n                                                        <span class=\"checkmark\"></span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td>{{item?.product?.sku_no}}</td>\r\n                                            <td>{{item?.product?.label}}</td>\r\n                                            <td>{{item?.location}}</td>\r\n                                            <td class=\"text-center\">{{item?.product_qty |number}}</td>\r\n                                            <td> {{currentCompany?.currency?.label }} {{item?.price |number}}</td>\r\n                                            <td> {{currentCompany?.currency?.label }} {{item?.amount |number}}</td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"productDetailList.length == 0\">\r\n                                            <td colspan=\"7\">No records found</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <div class=\"text-right border-top pt-4 mt-5 mb-3\">\r\n                            <button type=\"button\" [routerLink]=\"['/outbound/pick-list-new/']\"\r\n                                class=\"btn btn-light\">Cancel</button>\r\n                            <button type=\"submit\" class=\"btn btn-secondary ml-2\">Generate</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>\r\n<app-product-list-popup [ProductList]=\"orderDetails?.product_list\" (onProductSubmit)=\"onProductSubmit($event)\">\r\n</app-product-list-popup>");

/***/ }),

/***/ "./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddPicklistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPicklistComponent", function() { return AddPicklistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pick-list-new.service */ "./src/app/service/pick-list-new.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var src_app_common_module_product_list_popup_product_list_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/product-list-popup/product-list-popup.component */ "./src/app/common-module/product-list-popup/product-list-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");









let AddPicklistComponent = class AddPicklistComponent {
    constructor(pickListNewService, activatedRoute, cdr, dataService, fb, router) {
        this.pickListNewService = pickListNewService;
        this.activatedRoute = activatedRoute;
        this.cdr = cdr;
        this.dataService = dataService;
        this.fb = fb;
        this.router = router;
        this.exampleOptions = src_app_messages__WEBPACK_IMPORTED_MODULE_2__["DATE_TIME_FORMAT"];
        this.orderNumberArray = [];
        this.date_format = "M/d/yy";
        this.currentDate = Date();
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            apierror: null,
            sales_order_id: null,
            product: null
        };
        this.isEditing = false;
        this.editId = null;
        this.productDetailList = [];
        this.ProductItem = [];
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.currentCompany = response;
                this.timezone = String(response.timezone.format);
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
            }
        });
        this.addForm = this.fb.group({
            sales_order_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            receipt_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            pick_list_date: [null],
            client_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
            product_detail_list: [],
            pick_list_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])],
        });
    }
    ngOnInit() {
        // if (this.isEditing) {
        //   this.getEditObject()
        // }
        this.getMasterData();
    }
    getMasterData() {
        this.pickListNewService.getMasterData().subscribe((responce) => {
            if (responce.success) {
                this.orderNumberArray = responce.data.sales_order ? responce.data.sales_order : [];
            }
        });
    }
    onOrderChange(data) {
        if (data && data.value) {
            this.getSalesOrderDetail(data.value);
            this.formErrors.sales_order_id = null;
        }
    }
    getSalesOrderDetail(id) {
        this.pickListNewService.getSalesOrderDetail(id).subscribe((responce) => {
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
            this.addForm.controls['sales_order_id'].setErrors({ 'incorrect': true });
            this.formErrors.sales_order_id = "* Please Select Order Number";
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
            if (this.ProductItem && this.ProductItem.length > 0) {
                this.formErrors.product = null;
                this.showLoader = true;
                const data = new FormData();
                data.append('sales_order_id', formData.value.sales_order_id);
                data.append('receipt_date', src_app_common__WEBPACK_IMPORTED_MODULE_8__["CommonFunction"].changedateTimeFormate(formData.value.receipt_date[0]));
                data.append('pick_list_date', src_app_common__WEBPACK_IMPORTED_MODULE_8__["CommonFunction"].currentTimeFormate());
                data.append('client_id', formData.value.client_id);
                data.append('pick_list_no', formData.value.pick_list_no);
                data.append('product_detail_list', JSON.stringify(this.ProductItem));
                if (this.isEditing) {
                    this.pickListNewService.editPickListNew(this.editId, data).subscribe((response) => {
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
                    this.pickListNewService.addPickListNew(data).subscribe((response) => {
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
    oneProduct(obj, checked) {
        if (checked) {
            let object = new Object();
            object['id'] = obj.id;
            object['product_id'] = obj.product.value;
            object['price'] = obj.price;
            object['amount'] = obj.amount;
            object['product_qty'] = obj.product_qty;
            object['bin_id'] = obj.location_detail.bin_id;
            object['location'] = obj.location;
            this.ProductItem.push(object);
            if (this.ProductItem.length === this.ProductItem.length) {
                $('#checkBoxproAll').prop('checked', true);
            }
        }
        else {
            $('#checkBoxproAll').prop('checked', false);
            this.ProductItem = this.ProductItem.filter((object) => {
                return String(object.id) !== String(obj.id);
            });
        }
    }
    markAllProduct(checked) {
        if (checked) {
            this.ProductItem = this.productDetailList.map((obj, index) => {
                let object = new Object();
                object['id'] = obj.id;
                object['product_id'] = obj.product.value;
                object['price'] = obj.price;
                object['amount'] = obj.amount;
                object['product_qty'] = obj.product_qty;
                object['bin_id'] = obj.location_detail.bin_id;
                object['location'] = obj.location;
                $('.pro-chk').prop('checked', true);
                return object;
            });
        }
        else {
            $('.pro-chk').prop('checked', false);
            this.ProductItem = [];
        }
    }
    ngAfterViewChecked() {
        this.cdr.detectChanges();
    }
};
AddPicklistComponent.ctorParameters = () => [
    { type: src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_3__["PickListNewService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_common_module_product_list_popup_product_list_popup_component__WEBPACK_IMPORTED_MODULE_5__["ProductListPopupComponent"], { static: false })
], AddPicklistComponent.prototype, "productAdd", void 0);
AddPicklistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-picklist',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-picklist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.component.html")).default,
    })
], AddPicklistComponent);



/***/ }),

/***/ "./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AddPicklistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPicklistModule", function() { return AddPicklistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _add_picklist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-picklist.component */ "./src/app/pages/outbound/pick-list-new/add-picklist/add-picklist.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-flatpickr */ "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/pick-list-new.service */ "./src/app/service/pick-list-new.service.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_common_module_product_list_popup_product_list_popup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common-module/product-list-popup/product-list-popup.module */ "./src/app/common-module/product-list-popup/product-list-popup.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");












const routes = [
    {
        path: '',
        component: _add_picklist_component__WEBPACK_IMPORTED_MODULE_3__["AddPicklistComponent"]
    }
];
let AddPicklistModule = class AddPicklistModule {
};
AddPicklistModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_picklist_component__WEBPACK_IMPORTED_MODULE_3__["AddPicklistComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ng2_flatpickr__WEBPACK_IMPORTED_MODULE_5__["Ng2FlatpickrModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_11__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_common_module_product_list_popup_product_list_popup_module__WEBPACK_IMPORTED_MODULE_10__["ProductListPopupModule"],
        ], providers: [src_app_service_pick_list_new_service__WEBPACK_IMPORTED_MODULE_8__["PickListNewService"]]
    })
], AddPicklistModule);



/***/ })

}]);
//# sourceMappingURL=add-picklist-add-picklist-module-es2015.js.map