(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["packing-packing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col d-flex\">\r\n                <h2 class=\"mr-auto\">Manage Packing</h2>\r\n                <div>\r\n                    <ng-select style=\"width: 180px;\" [(ngModel)]=\"status_id\" (change)=\"getObjects()\"\r\n                        [items]=\"statusListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Status\">\r\n                    </ng-select>\r\n                </div>\r\n                <div class=\"ml-3\">\r\n                    <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n                </div>\r\n                <div class=\"ml-3\">\r\n                    <app-btn-add [btnName]=\"'Add Packing'\" [editData]=\"'/outbound/packing/add'\">\r\n                    </app-btn-add>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n            </app-table-list>\r\n            <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n            </pagination>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/outbound/packing/packing.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/outbound/packing/packing.component.ts ***!
  \*************************************************************/
/*! exports provided: PackingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingComponent", function() { return PackingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/packing.service */ "./src/app/service/packing.service.ts");





let PackingComponent = class PackingComponent {
    constructor(paginationService, packingService) {
        this.paginationService = paginationService;
        this.packingService = packingService;
        this.loadingState = true;
        this.objectArray = [];
        this.headerData = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.statusListArray = [];
    }
    ngOnInit() {
        this.getMasterData();
        this.setHeaderData();
        this.getObjects();
    }
    getMasterData() {
        this.packingService.getListFilterData().subscribe((responce) => {
            if (responce.success) {
                this.statusListArray = responce.data.status;
            }
        });
    }
    setHeaderData() {
        this.headerData.push(
        // new IndexField({
        //   label: "No.",
        // }),
        // new TextViewUrlField({
        //   label: "Pick No",
        //   key: "pick_no",
        //   viewUrl: {
        //     path: '/outbound/packing/view/',
        //     id: 'sales_order_id'
        //   }
        // }),
        new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Order No",
            key: 'sales_order_no',
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Order Date",
            key: "sales_order_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Client",
            key: "client.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Client Code",
            key: "client.client_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["StatusField"]({
            label: "Status",
            key: "status.label",
        }));
        let canEdit = true;
        let canView = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/outbound/packing/edit/',
                id: 'sales_order_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/outbound/packing/view/',
                id: 'sales_order_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'packing/sales-order-list/',
                id: 'sales_order_id'
            };
        }
        let actionColom = new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["ActionField"](actions);
        this.headerData.push(actionColom);
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.status_id) {
            params.status_id = this.status_id;
        }
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.packingService.getPackingList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success && response.data) {
                this.objectArray = response.data.list;
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
        // this.currentPage = 1;
        this.getObjects();
    }
    onReloadEvent() {
        this.getObjects();
    }
    searchObject(text) {
        this.searchText = text;
        this.currentPage = 1;
        this.getObjects();
    }
};
PackingComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_4__["PackingService"] }
];
PackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-packing',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./packing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/packing.component.html")).default
    })
], PackingComponent);



/***/ }),

/***/ "./src/app/pages/outbound/packing/packing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/outbound/packing/packing.module.ts ***!
  \**********************************************************/
/*! exports provided: PackingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingModule", function() { return PackingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var _packing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./packing.component */ "./src/app/pages/outbound/packing/packing.component.ts");
/* harmony import */ var src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/packing.service */ "./src/app/service/packing.service.ts");












const routes = [
    {
        path: '',
        component: _packing_component__WEBPACK_IMPORTED_MODULE_10__["PackingComponent"],
        data: { title: 'packing_list' },
    },
    {
        path: 'add',
        loadChildren: () => Promise.all(/*! import() | add-packing-add-packing-module */[__webpack_require__.e("default~add-packing-add-packing-module~add-picklist-add-picklist-module"), __webpack_require__.e("add-packing-add-packing-module")]).then(__webpack_require__.bind(null, /*! ./add-packing/add-packing.module */ "./src/app/pages/outbound/packing/add-packing/add-packing.module.ts")).then(m => m.AddPackingModule),
        data: { title: 'add_packing' },
    },
    {
        path: 'edit/:id',
        loadChildren: () => Promise.all(/*! import() | add-packing-add-packing-module */[__webpack_require__.e("default~add-packing-add-packing-module~add-picklist-add-picklist-module"), __webpack_require__.e("add-packing-add-packing-module")]).then(__webpack_require__.bind(null, /*! ./add-packing/add-packing.module */ "./src/app/pages/outbound/packing/add-packing/add-packing.module.ts")).then(m => m.AddPackingModule),
        data: { title: 'edit_packing' },
    },
    {
        path: 'view/:id',
        loadChildren: () => __webpack_require__.e(/*! import() | packing-view-packing-view-module */ "packing-view-packing-view-module").then(__webpack_require__.bind(null, /*! ./packing-view/packing-view.module */ "./src/app/pages/outbound/packing/packing-view/packing-view.module.ts")).then(m => m.PackingViewModule),
        data: { title: 'view_packing' },
    },
];
let PackingModule = class PackingModule {
};
PackingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_packing_component__WEBPACK_IMPORTED_MODULE_10__["PackingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_3__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_4__["BtnAddModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"],
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_9__["TableListModule"],
        ], providers: [src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_11__["PackingService"]]
    })
], PackingModule);



/***/ }),

/***/ "./src/app/service/packing.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/packing.service.ts ***!
  \********************************************/
/*! exports provided: PackingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackingService", function() { return PackingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let PackingService = class PackingService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    //list page
    getListFilterData(param = null) {
        return this.http.get(`${this.API_URL}/packing/list-filter-drp`, { params: param });
    }
    getPackingList(param) {
        return this.http.get(`${this.API_URL}/packing/sales-order-list`, { params: param });
    }
    // add page
    getMasterData(param) {
        return this.http.get(`${this.API_URL}/packing/master-data`, { params: param });
    }
    getSalesOrderDetail(id) {
        return this.http.get(`${this.API_URL}/packing/get-product-for-packing/${id}`);
    }
    addPacking(data) {
        return this.http.post(`${this.API_URL}/packing/generate`, data);
    }
    editPacking(id, data) {
        return this.http.put(`${this.API_URL}/Packing/${id}`, data);
    }
    // getPackingById(id, param = null): Observable<any> {
    //     return this.http.get(`${this.API_URL}/picking/sales-order-view-pick-list/${id}`, { params: param });
    // }
    getPackingviewOrderById(id, param = null) {
        return this.http.get(`${this.API_URL}/packing/sales-order-view-packing-list/${id}`, { params: param });
    }
};
PackingService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PackingService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PackingService);



/***/ })

}]);
//# sourceMappingURL=packing-packing-module-es2015.js.map