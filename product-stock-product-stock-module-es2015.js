(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-stock-product-stock-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a class=\"btn btn-secondary\" (click)=\"getEditPage()\" routerLink=\"['editData']\">\r\n    {{btnName}}\r\n</a>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"input-group search-box\">\r\n  <input type=\"text\" class=\"form-control\" #search (keyup.enter)=\"searchAction(search.value)\" name=\"search\"\r\n    autocomplete=\"off\" placeholder=\"{{placeholder}}\">\r\n  <div class=\"input-group-append\">\r\n    <button type=\"button\" (click)=\"searchAction(search.value)\" class=\"input-group-text pointer\"><i\r\n        class=\"la la-search\"></i></button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<style>\r\n  .search-box {\r\n    width: 280px;\r\n  }\r\n\r\n  .search-box .form-control {\r\n    background-color: white;\r\n    border: none;\r\n  }\r\n\r\n  .search-box .input-group-text {\r\n    background-color: #a5a2e2;\r\n    border: 1px solid white;\r\n    color: white;\r\n    border-radius: 0 3px 3px 0;\r\n  }\r\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"page-header border-b\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n      </div>\n    </div>\n  </div>\n  <div class=\"card\">\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\n      <div class=\"card-body\">\n\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\"> Bin Location <em>*</em> </label>\n            <div class=\"col-md-5\">\n              <ng-select [formControl]=\"addForm.controls['location_detail']\" [items]=\"binArray\" bindLabel=\"label\"\n                bindValue=\"value\" placeholder=\"Select Damage Bin\" (change)=\"getProducts($event)\">\n              </ng-select>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\"> Product <em>*</em> </label>\n            <div class=\"col-md-5\">\n              <ng-select [formControl]=\"addForm.controls['product_id']\" [items]=\"productArray\" bindLabel=\"label\"\n                bindValue=\"value\" placeholder=\"Select Damage product\" (change)=\"setProductObj($event)\">\n              </ng-select>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\"> Total Product Quantity in Bin </label>\n            <div class=\"col-md-5\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Total Products in bin\" readonly\n                [value]=\"selectedProductQty\">\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"form-group row\">\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\"> Product Damage Quantity <em>*</em> </label>\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.qty}\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Enter the quantity\"\n                [formControl]=\"addForm.controls['qty']\" number (input)=\"quantityCheck()\">\n            </div>\n            <span *ngIf=\"formErrors.qty\" class=\"help-block\" [innerHTML]=\"formErrors.qty\"></span>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\n        <button type=\"button\" class=\"btn btn-light\" (click)=\"back()\">Cancel</button>\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\n      </div>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header border-b\">\r\n        <div class=\"row m-0\">\r\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n            <div class=\"ml-3\">\r\n                <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n            </div>\r\n            <div class=\"ml-3\">\r\n                <app-btn-add [btnName]=\"'Add Damage Product'\" [editData]=\"'/stock/search-product/add-damage'\">\r\n                </app-btn-add>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link active\" id=\"productStock-tab\" data-toggle=\"tab\" href=\"#productStock\" role=\"tab\"\r\n                        aria-controls=\"productStock\" [routerLink]=\"['/stock/search-product']\"\r\n                        routerLinkActive=\"router-link-active\" aria-selected=\"true\">Product Stock</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" data-toggle=\"tab\" role=\"tab\" aria-controls=\"productStock\" aria-selected=\"true\"\r\n                        [routerLink]=\"['/stock/search-product/summary']\" routerLinkActive=\"router-link-active\">Stock\r\n                        Summary</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"tab-content\" id=\"myTabContent\">\r\n                <div class=\"tab-pane fade show active\" id=\"productStock\" role=\"tabpanel\"\r\n                    aria-labelledby=\"productStock-tab\">\r\n                    <div class=\"table-responsive-md mt-3\">\r\n                        <table class=\"table\">\r\n                            <thead class=\"thead-dark\">\r\n                                <tr>\r\n                                    <th>Product</th>\r\n                                    <th>SKU</th>\r\n                                    <th>Category</th>\r\n                                    <th>Qty</th>\r\n                                    <th>Bin</th>\r\n                                    <th>Bin Location</th>\r\n                                    <th>Stock In Date</th>\r\n                                    <th>Stock In Days</th>\r\n                                    <th>Stock Out Date</th>\r\n                                    <th>Status</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let item of objectArray; let i=index\">\r\n                                    <td>{{item?.product?.label ? item?.product?.label :\"-\"}}</td>\r\n                                    <td>{{item?.product?.sku_no ? item?.product?.sku_no :\"-\"}}</td>\r\n                                    <td>{{item?.category?.label ? item?.category?.label :\"-\"}}</td>\r\n                                    <td>{{item?.qty}} {{item?.unit?.label}}</td>\r\n                                    <td>{{item?.bin?.bin_code ? item?.bin?.bin_code :\"-\"}}</td>\r\n                                    <td>{{item?.location_code}}</td>\r\n                                    <td>{{item?.stock_datetime | date:date_format :timezone}} </td>\r\n                                    <td>{{calcDate(item.stock_datetime)}}</td>\r\n                                    <td>\r\n                                        <span *ngIf=\"item?.stock_out_date;else outdate\">\r\n                                            {{item?.stock_out_date | date:date_format :timezone}}\r\n                                        </span>\r\n                                        <ng-template #outdate>\r\n                                            <span> - </span>\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class=\"badge\" [ngClass]=\"classes[item.status.value]\">\r\n                                            {{item.status.label}}\r\n                                        </span>\r\n                                    </td>\r\n                                </tr>\r\n                                <tr *ngIf=\"!loadingState && objectArray?.length == 0\">\r\n                                    <td colspan=\"10\">No records found</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n                        (onPageChange)=\"getPage($event)\">\r\n                    </pagination>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"page-header border-b\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">{{PageTitle}}</h2>\n            <div class=\"ml-3\">\n                <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\n            </div>\n\n        </div>\n\n    </div>\n    <div class=\"card\">\n        <div class=\"card-body\">\n            <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" id=\"productStock-tab\" data-toggle=\"tab\" href=\"#productStock\" role=\"tab\"\n                        aria-controls=\"productStock\" [routerLink]=\"['/stock/search-product']\" routerLinkActive=\"router-link-active\" aria-selected=\"true\">Product Stock</a>\n                </li>\n                \n                <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"productStocksummary-tab\" data-toggle=\"tab\" href=\"#productStocksummary\" role=\"tab\"\n                        aria-controls=\"productStocksummary\"  aria-selected=\"true\">Stock Summary</a>\n                </li>\n\n            </ul>\n            <div class=\"tab-content\" id=\"myTabContent\">\n                <div class=\"tab-pane fade show active\" id=\"productStocksummary\" role=\"tabpanel\"\n                    aria-labelledby=\"productStocksummary-tab\">\n                    <div class=\"table-responsive-md mt-3\">\n                        <table class=\"table\">\n                            <thead class=\"thead-dark\">\n                                <tr>\n                                    <th>Product</th>\n                                    <th>SKU</th>\n                                    <th>Category</th>\n                                    <th>Qty</th>\n                                    <th>Volume Total</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let item of objectArray; let i=index\">\n                                    <td>{{item?.product?.label ? item?.product?.label :\"-\"}}</td>\n                                    <td>{{item?.product?.sku_no ? item?.product?.sku_no :\"-\"}}</td>\n                                    <td>{{item?.category?.label ? item?.category?.label :\"-\"}}</td>\n                                    <td>{{item?.qty}} {{item?.unit?.label}}</td>\n                                    <td>{{item?.volume}}</td>\n                                </tr>\n                                <tr *ngIf=\"!loadingState && objectArray?.length == 0\">\n                                    <td colspan=\"5\">No records found</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                    <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\n                        (onPageChange)=\"getPage($event)\">\n                    </pagination>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p class=\"help is-danger\" [class.hide]=\"_hide\" [innerHTML]=\"_text\"></p>");

/***/ }),

/***/ "./src/app/common-module/btn-add/btn-add.component.css":
/*!*************************************************************!*\
  !*** ./src/app/common-module/btn-add/btn-add.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi1tb2R1bGUvYnRuLWFkZC9idG4tYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/common-module/btn-add/btn-add.component.ts":
/*!************************************************************!*\
  !*** ./src/app/common-module/btn-add/btn-add.component.ts ***!
  \************************************************************/
/*! exports provided: BtnAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAddComponent", function() { return BtnAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let BtnAddComponent = class BtnAddComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    getEditPage() {
        this.router.navigateByUrl(this.editData);
    }
};
BtnAddComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnAddComponent.prototype, "editData", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BtnAddComponent.prototype, "btnName", void 0);
BtnAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btn-add',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./btn-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/btn-add/btn-add.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./btn-add.component.css */ "./src/app/common-module/btn-add/btn-add.component.css")).default]
    })
], BtnAddComponent);



/***/ }),

/***/ "./src/app/common-module/btn-add/btn-add.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/common-module/btn-add/btn-add.module.ts ***!
  \*********************************************************/
/*! exports provided: BtnAddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnAddModule", function() { return BtnAddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _btn_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btn-add.component */ "./src/app/common-module/btn-add/btn-add.component.ts");




let BtnAddModule = class BtnAddModule {
};
BtnAddModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_btn_add_component__WEBPACK_IMPORTED_MODULE_3__["BtnAddComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _btn_add_component__WEBPACK_IMPORTED_MODULE_3__["BtnAddComponent"]
        ]
    })
], BtnAddModule);



/***/ }),

/***/ "./src/app/common-module/search/search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/common-module/search/search.component.ts ***!
  \**********************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() {
        this.text = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    searchAction(text) {
        this.text.emit(text);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchComponent.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SearchComponent.prototype, "placeholder", void 0);
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'search-box',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/search/search.component.html")).default
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/common-module/search/search.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/common-module/search/search.module.ts ***!
  \*******************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search.component */ "./src/app/common-module/search/search.component.ts");




let SearchModule = class SearchModule {
};
SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
        ]
    })
], SearchModule);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AddDamageProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDamageProductComponent", function() { return AddDamageProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/product-stock.service */ "./src/app/service/product-stock.service.ts");





let AddDamageProductComponent = class AddDamageProductComponent {
    constructor(fb, location, productDamageService) {
        this.fb = fb;
        this.location = location;
        this.productDamageService = productDamageService;
        this.binLocation = '';
        this.showLoader = false;
        this.binArray = [];
        this.loadingState = false;
        this.productArray = [];
        this.selectedProductQty = 0;
        this.PageTitle = 'Add Damage Product';
        this.formErrors = { api_error: null, qty: null };
        this.addForm = this.fb.group({
            price: [null],
            status_id: [null],
            qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
            location_detail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])]
        });
    }
    ngOnInit() {
        this.getMasterData();
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = formData.value;
            data.location_code = this.binLocation;
            this.productDamageService.addDamageProduct(formData.value).subscribe((response) => {
                this.showLoader = false;
                if (response.success) {
                    this.back();
                }
                else {
                    response.error.map(obj => {
                        // console.log(obj);
                    });
                }
            }, (error) => {
                this.showLoader = false;
            });
        }
    }
    getMasterData() {
        this.productDamageService.getProductDamageMasterData().subscribe((response) => {
            this.binArray = response.data.bin;
        });
    }
    getProducts(bin) {
        this.binLocation = bin.label;
        this.productDamageService.getDamageProduct({ bin_id: bin.value.bin_id }).subscribe((response) => {
            this.productArray = response.data.product;
        });
    }
    setProductObj(product) {
        this.selectedProductQty = product.quantity;
    }
    quantityCheck() {
        if (Number(this.addForm.value.qty) <= this.selectedProductQty) {
            this.formErrors.qty = null;
            this.addForm.controls.qty.setErrors(null);
        }
        else {
            this.formErrors.qty = '* Please Enter equal or small value in Total Quantity';
            this.addForm.controls.qty.setErrors({ incorrect: true });
        }
    }
    back() {
        this.location.back();
    }
};
AddDamageProductComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_4__["ProductStockService"] }
];
AddDamageProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-damage-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-damage-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.html")).default,
    })
], AddDamageProductComponent);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ProductStockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockListComponent", function() { return ProductStockListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/product-stock.service */ "./src/app/service/product-stock.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");





let ProductStockListComponent = class ProductStockListComponent {
    constructor(paginationService, productStockService, dataService) {
        this.paginationService = paginationService;
        this.productStockService = productStockService;
        this.dataService = dataService;
        this.PageTitle = "Product Stock";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.date_format = "M/d/yy";
        this.classes = {
            0: 'badge-info',
            1: 'badge-danger',
            2: 'badge-warning text-white',
            3: 'badge-success',
            4: 'badge-primary'
        };
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['product_stock'];
        // });
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.timezone = String(response.timezone.format);
                ;
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
                this.currentCompany = response;
            }
        });
        this.loadform = false;
        this.getObjects();
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.productStockService.getProductStockList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.list ? response.data.list : [];
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
    calcDate(date1) {
        date1 = new Date(date1);
        if (date1) {
            let date2 = new Date();
            let diff = Math.floor(date2.getTime() - date1);
            let day = 1000 * 60 * 60 * 24;
            let ndays = Math.floor(diff / day);
            let years = Math.floor(ndays / 365);
            ndays = ndays - (365 * years);
            let months = Math.floor(ndays / 30);
            let days = ndays - Math.floor(months * 30);
            let message = '';
            if (days && days != undefined && days != null) {
                message = Math.abs(days) + " days ";
            }
            if (months) {
                message += Math.abs(months) + " months ";
            }
            if (years) {
                message += Math.abs(years) + " years ";
            }
            if (message) {
                message += "ago \n";
                return 'Last  ' + message;
            }
            else {
                return "Today";
            }
        }
    }
};
ProductStockListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__["ProductStockService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ProductStockListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-stock-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-stock-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.html")).default
    })
], ProductStockListComponent);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ProductStockSummaryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockSummaryListComponent", function() { return ProductStockSummaryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/product-stock.service */ "./src/app/service/product-stock.service.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");





let ProductStockSummaryListComponent = class ProductStockSummaryListComponent {
    constructor(paginationService, productStockService, dataService) {
        this.paginationService = paginationService;
        this.productStockService = productStockService;
        this.dataService = dataService;
        this.PageTitle = "Stock Summary";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
        this.date_format = "M/d/yy";
        //For Dynamic List
        this.headerData = [];
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['product_stock'];
        // });
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.timezone = String(response.timezone.format);
                ;
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
                this.currentCompany = response;
            }
        });
        this.loadform = false;
        this.getObjects();
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.productStockService.getProductStockSummeryList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.list ? response.data.list : [];
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
};
ProductStockSummaryListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_3__["ProductStockService"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
ProductStockSummaryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-stock-summary-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-stock-summary-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.html")).default
    })
], ProductStockSummaryListComponent);



/***/ }),

/***/ "./src/app/pages/operation/product-stock/product-stock.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/operation/product-stock/product-stock.module.ts ***!
  \***********************************************************************/
/*! exports provided: routes, ProductStockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockModule", function() { return ProductStockModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/product-stock.service */ "./src/app/service/product-stock.service.ts");
/* harmony import */ var _product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-stock-list/product-stock-list.component */ "./src/app/pages/operation/product-stock/product-stock-list/product-stock-list.component.ts");
/* harmony import */ var _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-stock-summary-list/product-stock-summary-list.component */ "./src/app/pages/operation/product-stock/product-stock-summary-list/product-stock-summary-list.component.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _add_damage_product_add_damage_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-damage-product/add-damage-product.component */ "./src/app/pages/operation/product-stock/add-damage-product/add-damage-product.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");















const routes = [
    {
        path: '',
        component: _product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductStockListComponent"],
        data: { title: 'product_stock_list' },
    },
    {
        path: 'summary',
        component: _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductStockSummaryListComponent"],
        data: { title: 'product_summary_list' },
    },
    {
        path: 'add-damage',
        component: _add_damage_product_add_damage_product_component__WEBPACK_IMPORTED_MODULE_11__["AddDamageProductComponent"],
        data: { title: 'add_damage_product' }
    }
];
let ProductStockModule = class ProductStockModule {
};
ProductStockModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_stock_list_product_stock_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductStockListComponent"], _product_stock_summary_list_product_stock_summary_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductStockSummaryListComponent"], _add_damage_product_add_damage_product_component__WEBPACK_IMPORTED_MODULE_11__["AddDamageProductComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_6__["SearchModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_10__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__["NgSelectModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_13__["FormValidationModule"],
        ], providers: [src_app_service_product_stock_service__WEBPACK_IMPORTED_MODULE_7__["ProductStockService"]]
    })
], ProductStockModule);



/***/ }),

/***/ "./src/app/service/pagination.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/pagination.service.ts ***!
  \***********************************************/
/*! exports provided: PaginationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationService", function() { return PaginationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaginationService = class PaginationService {
    constructor() { }
    getPager(totalPages, currentPage = 1) {
        if (totalPages !== undefined && totalPages !== null && totalPages !== 0) {
            // ensure current page isn't out of range
            if (currentPage < 1) {
                currentPage = 1;
            }
            else if (currentPage > totalPages) {
                currentPage = totalPages;
            }
            let startPage, endPage;
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                }
                else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }
            // create an array of pages to ng-repeat in the pager control
            const pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);
            // return object with all pager properties required by the view
            return {
                currentPage: currentPage,
                totalPages: totalPages,
                startPage: startPage,
                endPage: endPage,
                pages: pages
            };
        }
    }
};
PaginationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PaginationService);



/***/ }),

/***/ "./src/app/service/product-stock.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/product-stock.service.ts ***!
  \**************************************************/
/*! exports provided: ProductStockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStockService", function() { return ProductStockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ProductStockService = class ProductStockService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getProductStockList(param) {
        return this.http.get(`${this.API_URL}/product-stock/list`, { params: param });
    }
    getProductStockSummeryList(param) {
        return this.http.get(`${this.API_URL}/product-stock/summary-list`, { params: param });
    }
    getProductDamageMasterData() {
        return this.http.get(`${this.API_URL}/product-stock/damage-master-data`);
    }
    getDamageProduct(param) {
        return this.http.get(`${this.API_URL}/product-stock/damage-master-data`, { params: param });
    }
    addDamageProduct(data) {
        return this.http.post(`${this.API_URL}/product-stock/add-damage-product`, data);
    }
};
ProductStockService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductStockService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ProductStockService);



/***/ }),

/***/ "./src/app/shared/directive/number.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/directive/number.directive.ts ***!
  \******************************************************/
/*! exports provided: NumberDirective, FloatNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberDirective", function() { return NumberDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatNumberDirective", function() { return FloatNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NumberDirective = class NumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onKeyDown(event) {
        const e = event;
        if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105 ||
            (e.keyCode === 110) || (e.keyCode === 190))) {
            e.preventDefault();
        }
    }
};
NumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], NumberDirective.prototype, "onKeyDown", null);
NumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[number]'
    })
], NumberDirective);

let FloatNumberDirective = class FloatNumberDirective {
    constructor(_el) {
        this._el = _el;
    }
    onKeyDown(event) {
        const e = event;
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A
            (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    }
};
FloatNumberDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], FloatNumberDirective.prototype, "onKeyDown", null);
FloatNumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[floatNumber]'
    })
], FloatNumberDirective);



/***/ }),

/***/ "./src/app/shared/form-validation/control-error/control-error.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/form-validation/control-error/control-error.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ControlErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorComponent", function() { return ControlErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ControlErrorComponent = class ControlErrorComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this._hide = true;
    }
    set text(value) {
        if (value !== this._text) {
            this._text = value;
            this._hide = !value;
            this.cdr.detectChanges();
        }
    }
    ngOnInit() {
    }
};
ControlErrorComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlErrorComponent.prototype, "text", null);
ControlErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-control-error',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./control-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
    })
], ControlErrorComponent);



/***/ }),

/***/ "./src/app/shared/form-validation/directive/control-error-container.directive.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/control-error-container.directive.ts ***!
  \***************************************************************************************/
/*! exports provided: ControlErrorContainerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorContainerDirective", function() { return ControlErrorContainerDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ControlErrorContainerDirective = class ControlErrorContainerDirective {
    constructor(vcr) {
        this.vcr = vcr;
    }
};
ControlErrorContainerDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }
];
ControlErrorContainerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[controlErrorContainer]'
    })
], ControlErrorContainerDirective);



/***/ }),

/***/ "./src/app/shared/form-validation/directive/control-errors.directive.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/control-errors.directive.ts ***!
  \******************************************************************************/
/*! exports provided: ControlErrorsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlErrorsDirective", function() { return ControlErrorsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../control-error/control-error.component */ "./src/app/shared/form-validation/control-error/control-error.component.ts");
/* harmony import */ var _control_error_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./control-error-container.directive */ "./src/app/shared/form-validation/directive/control-error-container.directive.ts");
/* harmony import */ var _form_submit_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-submit.directive */ "./src/app/shared/form-validation/directive/form-submit.directive.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _form_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-errors */ "./src/app/shared/form-validation/form-errors.ts");








let ControlErrorsDirective = class ControlErrorsDirective {
    constructor(vcr, resolver, controlErrorContainer, form, controlDir) {
        this.vcr = vcr;
        this.resolver = resolver;
        this.form = form;
        this.controlDir = controlDir;
        this.customErrors = {};
        this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
        this.submit$ = this.form ? this.form.submit$ : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
    }
    ngOnInit() {
        if (this.control && this.control.valueChanges) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.control.valueChanges, this.submit$).subscribe((v) => {
                const controlErrors = this.control.errors;
                if (controlErrors) {
                    const control_name = this.getFormControlName(this.control);
                    // console.log(control_name, controlErrors);
                    const firstKey = Object.keys(controlErrors)[0];
                    const messages = _form_errors__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_MESSAGES"][control_name];
                    if (messages !== undefined && messages !== null && messages !== '') {
                        this.setError(messages[firstKey]);
                    }
                }
                else if (this.ref) {
                    this.setError(null);
                }
            });
        }
    }
    getFormControlName(c) {
        const formGroup = c.parent.controls;
        return Object.keys(formGroup).find(name => c === formGroup[name]) || null;
    }
    get control() {
        return this.controlDir.control;
    }
    setError(text) {
        if (!this.ref) {
            const factory = this.resolver.resolveComponentFactory(_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorComponent"]);
            this.ref = this.container.createComponent(factory);
        }
        this.ref.instance.text = text;
    }
    ngOnDestroy() { }
};
ControlErrorsDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _control_error_container_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorContainerDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] },
    { type: _form_submit_directive__WEBPACK_IMPORTED_MODULE_5__["FormSubmitDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ControlErrorsDirective.prototype, "customErrors", void 0);
ControlErrorsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[formControl], [formControlName]'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())
], ControlErrorsDirective);



/***/ }),

/***/ "./src/app/shared/form-validation/directive/form-submit.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/form-validation/directive/form-submit.directive.ts ***!
  \***************************************************************************/
/*! exports provided: FormSubmitDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function() { return FormSubmitDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let FormSubmitDirective = class FormSubmitDirective {
    constructor(host) {
        this.host = host;
        this.submit$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'submit').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            if (this.element.classList.contains('submitted') === false) {
                this.element.classList.add('submitted');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    get element() {
        return this.host.nativeElement;
    }
};
FormSubmitDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FormSubmitDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'form'
    })
], FormSubmitDirective);



/***/ }),

/***/ "./src/app/shared/form-validation/form-errors.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/form-validation/form-errors.ts ***!
  \*******************************************************/
/*! exports provided: VALIDATION_MESSAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALIDATION_MESSAGES", function() { return VALIDATION_MESSAGES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const VALIDATION_MESSAGES = {
    first_name: {
        required: `* Please enter first name`,
    },
    last_name: {
        required: `* Please enter last name`,
    },
    email: {
        required: `* Please enter email`,
        email: `* Please enter valid email`,
        validateEmail: `* Please enter valid email`,
    },
    phone_number: {
        required: `Please enter phone number`,
        minlength: `Please enter at least 8 digits`,
        maxlength: `Please enter at least 18 digits`
    },
    password: {
        required: `* Please enter password`,
        pattern: `* Password must contains at least 6 characters`,
    },
    confirm_password: {
        required: `* Please enter confirm password`,
        validatePassword: `* Your Password is not matched`,
    },
    login_pin: {
        required: `* Please enter PIN`,
        maxlength: `Pin Max 4 Digit`,
        minlength: `Please enter at least 4 digits`,
    },
    number_tag_to_create: {
        required: `* Please enter vlaue`,
        max: `Maximum 100`,
        min: ` Minimum 1`
    },
};


/***/ }),

/***/ "./src/app/shared/form-validation/form-validation.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/form-validation/form-validation.module.ts ***!
  \******************************************************************/
/*! exports provided: FormValidationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormValidationModule", function() { return FormValidationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/form-submit.directive */ "./src/app/shared/form-validation/directive/form-submit.directive.ts");
/* harmony import */ var _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive/control-errors.directive */ "./src/app/shared/form-validation/directive/control-errors.directive.ts");
/* harmony import */ var _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive/control-error-container.directive */ "./src/app/shared/form-validation/directive/control-error-container.directive.ts");
/* harmony import */ var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./control-error/control-error.component */ "./src/app/shared/form-validation/control-error/control-error.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let FormValidationModule = class FormValidationModule {
};
FormValidationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        ],
        declarations: [
            _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"],
            _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__["ControlErrorContainerDirective"],
            _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorsDirective"],
            _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__["FormSubmitDirective"]
        ],
        exports: [
            _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"],
            _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__["ControlErrorContainerDirective"],
            _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorsDirective"],
            _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__["FormSubmitDirective"]
        ],
        entryComponents: [
            _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"]
        ]
    })
], FormValidationModule);



/***/ }),

/***/ "./src/app/shared/pipe/status.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/shared/pipe/status.pipe.ts ***!
  \********************************************/
/*! exports provided: TransactionStatusPipe, PricePipe, TransactionIconsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionStatusPipe", function() { return TransactionStatusPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricePipe", function() { return PricePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionIconsPipe", function() { return TransactionIconsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransactionStatusPipe = class TransactionStatusPipe {
    transform(value, args) {
        let text = null;
        if (value) {
            switch (value.value) {
                case 1:
                    text = `<small class="badge badge-pill badge-default">${value.label}</small>`;
                    break;
                case 2:
                    text = `<small class="badge badge-pill badge-primary">${value.label}</small>`;
                    break;
                case 3:
                    text = `<small class="badge badge-pill badge-success">${value.label}</small>`;
                    break;
                case 4:
                    text = `<small class="badge badge-pill badge-danger">${value.label}</small>`;
                    break;
                default:
                    text = null;
                    break;
            }
            return text;
        }
    }
};
TransactionStatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'transactionStatus'
    })
], TransactionStatusPipe);

let PricePipe = class PricePipe {
    transform(value, args) {
        return value ? parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2 }) : '00';
        // return parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
};
PricePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'price'
    })
], PricePipe);

let TransactionIconsPipe = class TransactionIconsPipe {
    transform(value, args) {
        let text = null;
        if (value) {
            switch (value.value) {
                case 1:
                    text = '<span class="la la-check-circle text-success"> </span>';
                    break;
                case 2:
                    text = '<span class="la la-times-circle text-danger"> </span>';
                    break;
                case 3:
                    text = '<span class="la la-check-circle text-success"> </span>';
                    break;
                case 4:
                    text = '<span class="la la-times-circle text-danger"> </span>';
                    break;
                default:
                    text = null;
                    break;
            }
            return text;
        }
    }
};
TransactionIconsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'transactionIcons'
    })
], TransactionIconsPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directive/number.directive */ "./src/app/shared/directive/number.directive.ts");
/* harmony import */ var _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pipe/status.pipe */ "./src/app/shared/pipe/status.pipe.ts");





let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"],
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionStatusPipe"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionIconsPipe"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionStatusPipe"],
            _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionIconsPipe"],
            _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"]
        ]
    })
], SharedModule);



/***/ })

}]);
//# sourceMappingURL=product-stock-product-stock-module-es2015.js.map