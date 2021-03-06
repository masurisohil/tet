(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pick-list-pick-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/pick-list.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/pick-list.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col d-flex\">\r\n        <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n        <div class=\"ml-3\">\r\n          <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n        </div>\r\n        <div class=\"ml-3\">\r\n          <app-btn-add [btnName]=\"'Add PickList'\" [editData]=\"'/outbound/pick-list/generate'\"></app-btn-add>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/pages/outbound/pick-list/pick-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list/pick-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: PickListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListComponent", function() { return PickListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/pick-list.service */ "./src/app/service/pick-list.service.ts");





let PickListComponent = class PickListComponent {
    constructor(paginationService, picklistService) {
        this.paginationService = paginationService;
        this.picklistService = picklistService;
        this.PageTitle = "Manage PickList";
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        this.showPagination = false;
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
        this.headerData.push(new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextViewUrlField"]({
            label: "Order No",
            key: "sales_order.sales_order_no",
            viewUrl: {
                path: '/outbound/pick-list/view/',
                id: 'pick_list_id'
            }
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Client Name",
            key: "client.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "Order Date",
            key: "sales_order.sales_order_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["DateField"]({
            label: "PickList Date",
            key: "pick_list_date",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Delievery Name",
            key: "delivery_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Receipt Name",
            key: "receiver_name",
        }));
        let canEdit = true;
        let canView = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/outbound/pick-list/edit/',
                id: 'pick_list_id'
            };
        }
        if (canView) {
            actions['view'] = {
                path: '/outbound/pick-list/view/',
                id: 'pick_list_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'picking/',
                id: 'pick_list_id'
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
        this.picklistService.getPickList(params).subscribe((response) => {
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
    onReloadEvent() {
        this.getObjects();
    }
};
PickListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_4__["PickListService"] }
];
PickListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pick-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pick-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/pick-list/pick-list.component.html")).default
    })
], PickListComponent);



/***/ }),

/***/ "./src/app/pages/outbound/pick-list/pick-list.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/outbound/pick-list/pick-list.module.ts ***!
  \**************************************************************/
/*! exports provided: PickListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickListModule", function() { return PickListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var _pick_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pick-list.component */ "./src/app/pages/outbound/pick-list/pick-list.component.ts");
/* harmony import */ var src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/pick-list.service */ "./src/app/service/pick-list.service.ts");










const routes = [
    {
        path: '',
        component: _pick_list_component__WEBPACK_IMPORTED_MODULE_8__["PickListComponent"],
        data: { title: 'pick_list_list' },
    },
    {
        path: 'generate',
        loadChildren: () => Promise.all(/*! import() | generate-generate-module */[__webpack_require__.e("default~add-picklist-add-picklist-module~add-sales-order-add-sales-order-module~generate-generate-mo~7fdd0daa"), __webpack_require__.e("common"), __webpack_require__.e("generate-generate-module")]).then(__webpack_require__.bind(null, /*! ./generate/generate.module */ "./src/app/pages/outbound/pick-list/generate/generate.module.ts")).then(m => m.GenerateModule),
        data: { title: 'add_pick_list' },
    },
    {
        path: 'edit',
        loadChildren: () => Promise.all(/*! import() | generate-generate-module */[__webpack_require__.e("default~add-picklist-add-picklist-module~add-sales-order-add-sales-order-module~generate-generate-mo~7fdd0daa"), __webpack_require__.e("common"), __webpack_require__.e("generate-generate-module")]).then(__webpack_require__.bind(null, /*! ./generate/generate.module */ "./src/app/pages/outbound/pick-list/generate/generate.module.ts")).then(m => m.GenerateModule),
        data: { title: 'edit_pick_list' },
    },
    {
        path: 'view',
        loadChildren: () => Promise.all(/*! import() | pick-list-view-pick-list-view-module */[__webpack_require__.e("common"), __webpack_require__.e("pick-list-view-pick-list-view-module")]).then(__webpack_require__.bind(null, /*! ./pick-list-view/pick-list-view.module */ "./src/app/pages/outbound/pick-list/pick-list-view/pick-list-view.module.ts")).then(m => m.PickListViewModule),
        data: { title: 'view_pick_list' },
    },
    {
        path: 'generate-pick-list',
        loadChildren: () => Promise.all(/*! import() | generate-pick-list-generate-pick-list-module */[__webpack_require__.e("default~add-picklist-add-picklist-module~add-sales-order-add-sales-order-module~generate-generate-mo~7fdd0daa"), __webpack_require__.e("generate-pick-list-generate-pick-list-module")]).then(__webpack_require__.bind(null, /*! ./generate-pick-list/generate-pick-list.module */ "./src/app/pages/outbound/pick-list/generate-pick-list/generate-pick-list.module.ts")).then(m => m.GeneratePickListModule),
        data: { title: 'add_pick_list' },
    },
];
let PickListModule = class PickListModule {
};
PickListModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pick_list_component__WEBPACK_IMPORTED_MODULE_8__["PickListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_3__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_4__["BtnAddModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_6__["PaginationModule"],
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_7__["TableListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
        ], providers: [src_app_service_pick_list_service__WEBPACK_IMPORTED_MODULE_9__["PickListService"]]
    })
], PickListModule);



/***/ })

}]);
//# sourceMappingURL=pick-list-pick-list-module-es2015.js.map