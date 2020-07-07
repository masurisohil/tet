(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-category-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/category/add-category/add-category.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/category/add-category/add-category.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Category Name\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['category_name']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Category code\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.category_code}\">\r\n              <input [formControl]=\"addForm.controls['category_code']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              <span *ngIf=\"formErrors.category_code\" class=\"help-block\" [innerHTML]=\"formErrors.category_code\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Parent Category Name\r\n            </label>\r\n            <div class=\"col-md-5\">\r\n\r\n              <ng-select [formControl]=\"addForm.controls['parent_category_id']\" [items]=\"categoryListArray\"\r\n                bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Parent Category\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Volume(cm) <em>*</em></label>\r\n            <div class=\"col-md-5 mr-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <input number (change)=\"volumeCal()\" [formControl]=\"addForm.controls['height']\" type=\"text\"\r\n                    class=\"form-control\" placeholder=\"Height\">\r\n                </div>\r\n                <i class=\"la la-times mt-2\" aria-hidden=\"true\"></i>\r\n                <div class=\"col\">\r\n                  <input number (change)=\"volumeCal()\" [formControl]=\"addForm.controls['width']\" type=\"text\"\r\n                    class=\"form-control\" placeholder=\"Width\">\r\n                </div>\r\n                <i class=\"la la-times mt-2\" aria-hidden=\"true\"></i>\r\n                <div class=\"col\">\r\n                  <input number (change)=\"volumeCal()\" [formControl]=\"addForm.controls['depth']\" type=\"text\"\r\n                    class=\"form-control\" placeholder=\"Depth\">\r\n                </div>\r\n                <i class=\"la la-equals mt-2\"></i>\r\n                <div class=\"col\">\r\n                  <input number [formControl]=\"addForm.controls['total_volume']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"\" disabled>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Description</label>\r\n            <div class=\" col-md-5\">\r\n              <textarea [formControl]=\"addForm.controls['description']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/category\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/category/category-list/category-list.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/category/category-list/category-list.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}} <span *ngIf=\"categoryName\" class=\"badge badge-pill badge-light\"\r\n          style=\"font-size: 14px; font-weight: 400;\">\r\n          {{categoryName}}\r\n          <span *ngIf=\"parentCategoryCount\" class=\"badge badge-pill badge-info\">{{parentCategoryCount}}\r\n          </span>\r\n          <span class=\"badge\">\r\n            <a (click)=\"resetData()\">\r\n              <i data-toggle=\"tooltip\" data-placement=\"top\" title=\"Reset Filter\" class=\"ml-2 fa fa-times\"\r\n                aria-hidden=\"true\"></i>\r\n            </a>\r\n          </span>\r\n\r\n        </span>\r\n      </h2>\r\n\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Category'\" [editData]=\"'/manage/category/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\"\r\n        >\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/master/category/add-category/add-category.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/master/category/add-category/add-category.component.ts ***!
  \******************************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/category.service */ "./src/app/service/category.service.ts");





let AddCategoryComponent = class AddCategoryComponent {
    constructor(router, activatedRoute, fb, categoryService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.categoryService = categoryService;
        this.PageTitle = 'Category';
        this.addNewRadio = false;
        this.categoryListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            category_code: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            category_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            category_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            parent_category_id: [''],
            description: [null],
            height: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            width: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            depth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            unit: ['cm', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            total_volume: [0],
        });
    }
    ngOnInit() {
        this.getMasterData();
        if (this.isEditing) {
            this.getEditObject();
        }
    }
    volumeCal() {
        let total = parseInt(this.addForm.value.height ? this.addForm.value.height : 0)
            * parseInt(this.addForm.value.width ? this.addForm.value.width : 0)
            * parseInt(this.addForm.value.depth ? this.addForm.value.depth : 0);
        this.addForm.patchValue({
            total_volume: total ? total : 0
        });
    }
    getMasterData() {
        this.categoryService.getCategoryMasterData().subscribe((response) => {
            if (response.success) {
                this.categoryListArray = response.data.category;
            }
        });
    }
    getEditObject() {
        this.categoryService.getCategoryById(this.editId).subscribe((response) => {
            if (response.success) {
                this.addForm.patchValue({
                    category_name: response.data.category_name,
                    category_code: response.data.category_code,
                    parent_category_id: response.data.parent_category_id,
                    description: response.data.description,
                    width: response.data.volume.width,
                    height: response.data.volume.height,
                    depth: response.data.volume.depth,
                    unit: response.data.volume.unit,
                    total_volume: response.data.volume.total_volume
                });
            }
            else {
                this.router.navigateByUrl('/manage/category');
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('category_name', formData.value.category_name);
            data.append('category_code', formData.value.category_code);
            data.append('parent_category_id', formData.value.parent_category_id ? formData.value.parent_category_id : '');
            data.append('description', formData.value.description);
            const volume = {
                width: formData.value.width,
                unit: formData.value.unit,
                height: formData.value.height,
                depth: formData.value.depth,
                total_volume: formData.value.total_volume
            };
            data.append('volume', JSON.stringify(volume));
            if (this.isEditing) {
                this.categoryService.editCategory(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/category');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('category_code')) {
                                this.formErrors['category_code'] = obj['category_code'];
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
                this.categoryService.addCategory(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/category');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('category_code')) {
                                this.formErrors['category_code'] = obj['category_code'];
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
AddCategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
AddCategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-category',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/category/add-category/add-category.component.html")).default
    })
], AddCategoryComponent);



/***/ }),

/***/ "./src/app/pages/master/category/category-list/category-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/master/category/category-list/category-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/category.service */ "./src/app/service/category.service.ts");





let CategoryListComponent = class CategoryListComponent {
    constructor(paginationService, categoryService) {
        this.paginationService = paginationService;
        this.categoryService = categoryService;
        this.PageTitle = 'Manage Category';
        this.loadform = false;
        this.loadingState = true;
        this.objectArray = [];
        this.pagination = null;
        this.searchText = null;
        this.currentPage = 1;
        this.permissionObject = null;
        //For Dynamic List
        this.headerData = [];
        this.showPagination = false;
        this.parentCategoryId = false;
        this.categoryName = false;
        this.parentCategoryCount = false;
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
            label: "Category name",
            key: "category_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Parent Category ",
            key: "parent_category.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Height(cm)",
            key: "volume.height",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Width(cm)",
            key: "volume.width",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Depth(cm)",
            key: "volume.depth",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/category/edit/',
                id: 'category_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'category/',
                id: 'category_id'
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
        if (this.parentCategoryId) {
            params.parent_category_id = this.parentCategoryId;
        }
        this.categoryService.getCategoryList(params).subscribe((response) => {
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
    // onClickEvent(obj) {
    //   if (obj.category_id && obj.parent_category_id) {
    //     this.categoryName = obj.category_name;
    //     this.parentCategoryCount = obj.parent_category_id;
    //     this.parentCategoryId = obj.category_id;
    //     this.currentPage = 1;
    //     this.getObjects();
    //   }
    // }
    resetData() {
        this.categoryName = false;
        this.parentCategoryCount = false;
        this.parentCategoryId = false;
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
CategoryListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
CategoryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/category/category-list/category-list.component.html")).default
    })
], CategoryListComponent);



/***/ }),

/***/ "./src/app/pages/master/category/category.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/master/category/category.module.ts ***!
  \**********************************************************/
/*! exports provided: CategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModule", function() { return CategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/pages/master/category/category-list/category-list.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/pages/master/category/add-category/add-category.component.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_category_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/service/category.service */ "./src/app/service/category.service.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");















const routes = [
    {
        path: "",
        component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__["CategoryListComponent"],
        data: { title: 'category_list' }
    },
    {
        path: "add",
        component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"],
        data: { title: 'add_category' }
    },
    {
        path: 'edit/:id',
        component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"],
        data: { title: 'edit_category' }
    },
];
let CategoryModule = class CategoryModule {
};
CategoryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_category_list_category_list_component__WEBPACK_IMPORTED_MODULE_6__["CategoryListComponent"], _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_7__["AddCategoryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_8__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_11__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"]
        ], providers: [src_app_service_category_service__WEBPACK_IMPORTED_MODULE_13__["CategoryService"]]
    })
], CategoryModule);



/***/ }),

/***/ "./src/app/service/category.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getCategoryList(param) {
        return this.http.get(`${this.API_URL}/category`, { params: param });
    }
    addCategory(data) {
        return this.http.post(`${this.API_URL}/category`, data);
    }
    editCategory(id, data) {
        return this.http.put(`${this.API_URL}/category/${id}`, data);
    }
    getCategoryById(id, param = null) {
        return this.http.get(`${this.API_URL}/category/${id}`, { params: param });
    }
    getCategoryMasterData() {
        return this.http.get(`${this.API_URL}/category/master-data`);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CategoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], CategoryService);



/***/ })

}]);
//# sourceMappingURL=category-category-module-es2015.js.map