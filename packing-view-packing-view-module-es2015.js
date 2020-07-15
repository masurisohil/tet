(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["packing-view-packing-view-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing-view/packing-view.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing-view/packing-view.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n    <div class=\"page-header border-b\">\n        <div class=\"row m-0\">\n            <h2 class=\"mr-auto\">Packing view </h2>\n            <div class=\"ml-3\"><a class=\"btn shadow-none btn-link\" (click)=\"back()\"><i\n                        class=\"fa fa-chevron-left mr-2 mt-1\"></i>Back to\n                    Packing </a></div>\n            <div class=\"ml-3\"><a (click)=\"print()\" class=\"btn btn-dark\"><i class=\"fa fa-print mr-2 mt-1\"></i>Print </a>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"objectArray\" class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <div class=\"col-8 d-flex align-items-center mb-0\">\n                    <div>\n                        <img src=\"./assets/images/barcodegen.png\" alt=\"\" width=\"150\" />\n                    </div>\n\n                </div>\n\n            </div>\n            <div class=\"row mb-4\">\n                <div class=\"col-12 text-center\">\n                    <p class=\"mb-0\">Sales Order Number : {{objectArray?.sales_order_no}}</p>\n                    <h6 class=\"ml-3 mb-0 border-bottom d-inline pb-2 px-3\">{{objectArray?.client?.label}}</h6>\n\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <div *ngIf=\"objectArray?.client_address\" class=\"row\">\n                        <div class=\"col-md-5\">\n                            <h6>Sold To:</h6>\n                            <div class=\"mt-1\">\n                                {{objectArray?.client_address[0]?.street_address}}<br />\n                                {{objectArray?.client_address[0]?.label}}-\n                                {{objectArray?.client_address[0]?.pin_code}}<br />\n                                {{objectArray?.client_address[0]?.state}} ,\n                                {{objectArray?.client_address[0]?.country_name}}\n                                <br />\n                            </div>\n                        </div>\n                        <div class=\"col-md-5\">\n                            <h6>Ship To:</h6>\n                            <p class=\"mt-1\">\n                                {{objectArray?.client_address[0]?.street_address}}<br />\n                                {{objectArray?.client_address[0]?.label}}-\n                                {{objectArray?.client_address[0]?.pin_code}}<br />\n                                {{objectArray?.client_address[0]?.state}} ,\n                                {{objectArray?.client_address[0]?.country_name}}\n                                <br />\n                            </p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6\">\n                    <div class=\"row  justify-content-end text-right\">\n                        <div class=\"col-md-6 col-lg-4\">\n                            <div><label class=\"mb-0 text-muted font-w\">Sales Order Number</label>\n                                <div class=\"\"> {{objectArray?.sales_order_no}} </div>\n                            </div>\n                            <div class=\"mt-2\"><label class=\"mb-0 text-muted font-w\">Customer Number</label>\n                                <div class=\"\"> {{objectArray?.client?.client_code}} </div>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6 col-lg-4\">\n                            <div><label class=\"mb-0 text-muted font-w\">Sales Order Date</label>\n                                <div class=\"\">{{objectArray?.sales_order_date |date:date_format :timezone}}</div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"border my-2 border-left-0 border-right-0\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th width=\"5%\">No.</th>\n                                        <th width=\"35%\">Cartoon No.</th>\n                                        <th width=\"5%\">Packing Date</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <ng-container *ngFor=\"let item of objectArray?.packing_list; let i=index\">\n                                        <tr>\n                                            <td> {{i+1}} </td>\n                                            <td> <a href=\"#collapseme{{i}}\" data-toggle=\"collapse\">{{item?.cartoon_no}}\n                                                </a></td>\n                                            <td> {{item?.packing_date  |date:date_format :timezone}} </td>\n                                        </tr>\n                                        <tr>\n                                            <td colspan=\"3\">\n                                                <div class=\"collapse show\" id=\"collapseme{{i}}\">\n                                                    <div class=\"content mr-5 ml-5\">\n                                                        <table class=\"table table-sm\">\n                                                            <thead>\n                                                                <tr>\n                                                                    <th scope=\"col\">Product</th>\n                                                                    <th scope=\"col\">SKU No.</th>\n                                                                    <th scope=\"col\">Qty</th>\n                                                                    <th scope=\"col\">Tag</th>\n                                                                    <th scope=\"col\">weight</th>\n\n                                                                </tr>\n                                                            </thead>\n                                                            <tbody>\n                                                                <tr *ngFor=\"let temp of item?.product_list\">\n                                                                    <td> {{temp?.product?.label}} </td>\n                                                                    <td> {{temp?.product?.sku_no}} </td>\n                                                                    <td>{{temp?.product_qty}}</td>\n                                                                    <td>{{temp?.tag?.label}}</td>\n                                                                    <td>{{temp?.weight}} {{temp?.weight_unit}}</td>\n                                                                </tr>\n                                                            </tbody>\n                                                        </table>\n                                                    </div>\n                                                </div>\n                                            </td>\n                                        </tr>\n                                    </ng-container>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/outbound/packing/packing-view/packing-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/outbound/packing/packing-view/packing-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PackingViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingViewComponent", function() { return PackingViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/packing.service */ "./src/app/service/packing.service.ts");






let PackingViewComponent = class PackingViewComponent {
    constructor(activatedRoute, dataService, location, packingService) {
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.location = location;
        this.packingService = packingService;
        this.date_format = "M/d/yy";
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.viewId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.dataService.currentCompany.subscribe((response) => {
            if (response) {
                this.currentCompany = response;
                this.timezone = String(response.timezone.format);
                this.time_format = response.time_format.label;
                this.date_format = response.date_format.label;
            }
        });
    }
    ngOnInit() {
        this.packingService.getPackingviewOrderById(this.viewId).subscribe((response) => {
            if (response.success) {
                this.objectArray = response.data;
            }
        });
    }
    print() {
        window.print();
    }
    back() {
        this.location.back();
    }
};
PackingViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_5__["PackingService"] }
];
PackingViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-packing-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./packing-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing-view/packing-view.component.html")).default,
    })
], PackingViewComponent);



/***/ }),

/***/ "./src/app/pages/outbound/packing/packing-view/packing-view.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/outbound/packing/packing-view/packing-view.module.ts ***!
  \****************************************************************************/
/*! exports provided: PackingViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingViewModule", function() { return PackingViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _packing_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./packing-view.component */ "./src/app/pages/outbound/packing/packing-view/packing-view.component.ts");





const routes = [
    {
        path: '',
        component: _packing_view_component__WEBPACK_IMPORTED_MODULE_4__["PackingViewComponent"]
    }
];
let PackingViewModule = class PackingViewModule {
};
PackingViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_packing_view_component__WEBPACK_IMPORTED_MODULE_4__["PackingViewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
        ]
    })
], PackingViewModule);



/***/ })

}]);
//# sourceMappingURL=packing-view-packing-view-module-es2015.js.map