(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-master-master-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/aside-nav/aside-nav.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/aside-nav/aside-nav.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar side-navbar align-items-start\">\r\n  <ul class=\"navbar-nav w-100\">\r\n    <li *ngFor=\"let asideNa of asideNav\">\r\n      <a class=\"nav-link\" routerAct routerLink=\"{{asideNa.asidUrl}}\" title=\"{{asideNa.asidText}}\"\r\n        routerLinkActive=\"active\">\r\n        {{asideNa.asidText}}\r\n      </a>\r\n    </li>\r\n\r\n    <h6 class=\"pl-3 mt-3\" style=\"font-size: 14px; border-bottom: 1px solid #edecf5;padding-bottom: 10px;\">\r\n      Location</h6>\r\n    <li *ngFor=\"let locNa of locationNav\">\r\n      <a class=\"nav-link\" routerAct routerLink=\"{{locNa.asidUrl}}\" title=\"{{locNa.asidText}}\" routerLinkActive=\"active\">\r\n        {{locNa.asidText}}\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/brand/brand-list/brand-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/brand/brand-list/brand-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">Manage Brand</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <a class=\"btn btn-secondary\" (click)=\"showForm()\">\r\n          Add Brand\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <div class=\"table-responsive\">\r\n        <table class=\"table m-0\">\r\n          <thead class=\"thead-dark\">\r\n            <tr>\r\n              <th>Name</th>\r\n              <th class=\"table-field-actions text-right\">Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"showAddForm && !isEditing\">\r\n              <td colspan=\"2\">\r\n                <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm()\">\r\n                  <div class=\"table-group d-flex pb-2\">\r\n                    <div class=\"col-sm-10 p-0\" [ngClass]=\"{'has-error': formErrors.brand_name}\">\r\n                      <input placeholder=\"Enter Name\" [formControl]=\"addForm.controls['brand_name']\" type=\"text\"\r\n                        class=\"form-control w-100\" />\r\n                      <span *ngIf=\"formErrors.brand_name\" class=\"help-block\" [innerHTML]=\"formErrors.brand_name\"></span>\r\n                    </div>\r\n                    <div class=\"button-set text-nowrap\">\r\n                      <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\r\n                        [disabled]=\"showLoader\" class=\"btn btn-secondary button-with-textbox px-3 mx-2\"><span\r\n                          class=\"la la-check fa-lg\"></span></button>\r\n                      <button type=\"button\" (click)=\"resetForm()\" class=\"btn btn-light button-with-textbox px-3\"><span\r\n                          class=\"la la-times fa-lg\"></span></button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </td>\r\n            </tr>\r\n\r\n            <tr *ngFor=\"let item of objectArray; let i=index\">\r\n              <ng-container *ngIf=\"editId != item.brand_id\">\r\n                <td>{{item?.brand_name ? item?.brand_name :'-'}}</td>\r\n                <td class=\"table-field-actions text-right\">\r\n                  <div class=\"action-drop dropdown\">\r\n                    <a href=\"#\" data-toggle=\"dropdown\" class=\"btn btn-default shadow-none btn-sm btn-icon-only\"\r\n                      title=\"\">\r\n                      <i class=\"fa fa-ellipsis-h\"></i>\r\n                    </a>\r\n                    <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right\" style=\"width: 100px;\">\r\n                      <a class=\"dropdown-item\" (click)=\"editObject(item, i)\"><i class=\"fa fa-edit fa-fw text-primary\">\r\n                        </i> Edit</a>\r\n                      <a class=\"dropdown-item\" (click)=\"deleteObject(item)\"><i class=\"fa fa-trash fa-fw text-primary\">\r\n                        </i> Delete</a>\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"isEditing && editId == item.brand_id && i == editIndex\">\r\n\r\n                <td colspan=\"2\">\r\n                  <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm()\">\r\n                    <div class=\"table-group d-flex pb-2\">\r\n                      <div class=\"col-sm-10 p-0\" [ngClass]=\"{'has-error': formErrors.brand_name}\">\r\n                        <input placeholder=\"Enter Name\" [formControl]=\"addForm.controls['brand_name']\" type=\"text\"\r\n                          class=\"form-control w-100\" />\r\n                        <span *ngIf=\"formErrors.brand_name\" class=\"help-block\"\r\n                          [innerHTML]=\"formErrors.brand_name\"></span>\r\n                      </div>\r\n                      <div class=\"button-set text-nowrap\">\r\n                        <button type=\"submit\" [ngClass]=\"{'qt-loader qt-loader-mini qt-loader-left': showLoader}\"\r\n                          [disabled]=\"showLoader\" class=\"btn btn-secondary button-with-textbox px-3 mx-2\"><span\r\n                            class=\"la la-check fa-lg\"></span></button>\r\n                        <button type=\"button\" (click)=\"resetForm()\" class=\"btn btn-light button-with-textbox px-3\"><span\r\n                            class=\"la la-times fa-lg\"></span></button>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </td>\r\n\r\n              </ng-container>\r\n\r\n            </tr>\r\n\r\n            <tr *ngIf=\"objectArray.length == 0\">\r\n              <td colspan=\"2\">No records found </td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/manage-bin/add-bin/add-bin.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/manage-bin/add-bin/add-bin.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}}</h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <form class=\"form-horizontal\" [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div class=\"mt-2\">\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Bin Name\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['bin_name']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Bin Code\r\n              <em>*</em></label>\r\n            <div class=\"col-md-5\" [ngClass]=\"{'has-error': formErrors.bin_code}\">\r\n              <input [formControl]=\"addForm.controls['bin_code']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n              <span *ngIf=\"formErrors.bin_code\" class=\"help-block\" [innerHTML]=\"formErrors.bin_code\"></span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Bin Tag Id\r\n              <em>*</em></label>\r\n            <div class=\" col-md-5\">\r\n              <input [formControl]=\"addForm.controls['tag_id']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Area <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['area_id']\" [items]=\"areaListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Area\"\r\n                (change)=\"getAisleData($event?.value,true,$event?.area_code)\"></ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Aisle <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['aisle_id']\" bindValue=\"value\" [items]=\"aisleListArray\"\r\n                bindLabel=\"label\" placeholder=\"Select Aisle\"\r\n                (change)=\"getBayData($event?.value,true,$event?.aisle_code)\"></ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Bay <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['bay_id']\" bindValue=\"value\" [items]=\"bayListArray\"\r\n                bindLabel=\"label\" placeholder=\"Select Bay\" (change)=\"getLevelData($event?.value,true,$event.bay_code)\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Level <em>*</em></label>\r\n            <div class=\"col-md-5\">\r\n              <ng-select [formControl]=\"addForm.controls['level_id']\" bindValue=\"value\" [items]=\"levelListArray\"\r\n                bindLabel=\"label\" (change)=\"getLevelChange(true,$event?.level_code)\" placeholder=\"Select Level\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"form-group row align-items-center\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3 mb-0\">Location Code\r\n              </label>\r\n            <div class=\"col-md-5\">\r\n              <input [formControl]=\"addForm.controls['location_code']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Volume(cm) <em>*</em></label>\r\n            <div class=\"col-md-5 mr-2\">\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <input number (input)=\"volumeCal()\" [formControl]=\"addForm.controls['height']\" type=\"text\"\r\n                    class=\"form-control\" placeholder=\"Height\">\r\n                </div>\r\n                <i class=\"la la-times mt-2\" aria-hidden=\"true\"></i>\r\n                <div class=\"col\">\r\n                  <input number (input)=\"volumeCal()\" [formControl]=\"addForm.controls['width']\" type=\"text\"\r\n                    class=\"form-control\" placeholder=\"Width\">\r\n                </div>\r\n                <i class=\"la la-times mt-2\" aria-hidden=\"true\"></i>\r\n                <div class=\"col\">\r\n                  <input number (input)=\"volumeCal()\" [formControl]=\"addForm.controls['depth']\" type=\"text\"\r\n                    class=\"form-control\" placeholder=\"Depth\">\r\n                </div>\r\n                <i class=\"la la-equals mt-2\"></i>\r\n                <div class=\"col\">\r\n                  <input number [formControl]=\"addForm.controls['total_volume']\" type=\"text\" class=\"form-control\"\r\n                    placeholder=\"\" disabled=\"true\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group row\">\r\n            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Description</label>\r\n            <div class=\" col-md-5\">\r\n              <textarea [formControl]=\"addForm.controls['description']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/manage/bin\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/manage-bin/bin-list/bin-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/manage-bin/bin-list/bin-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"side-container\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row m-0\">\r\n      <h2 class=\"mr-auto\">{{PageTitle}}</h2>\r\n      <div class=\"ml-3\">\r\n        <search-box (text)=\"searchObject($event)\" [placeholder]=\"'Search Here...'\"></search-box>\r\n      </div>\r\n      <div class=\"ml-3\">\r\n        <app-btn-add [btnName]=\"'Add Bin'\" [editData]=\"'/manage/bin/add'\"></app-btn-add>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-body\">\r\n      <app-table-list [headerData]=\"headerData\" [rawData]=\"objectArray\" (reloadEvent)=\"onReloadEvent()\">\r\n      </app-table-list>\r\n      <pagination *ngIf=\"showPagination\" [paginationList]=\"pagination\" [currentPage]=\"currentPage\"\r\n        (onPageChange)=\"getPage($event)\">\r\n      </pagination>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/master-layout/master-layout.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/master-layout/master-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-aside-nav [locationNav]=\"locationLinks\" [asideNav]=\"res\"></app-aside-nav>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/common-module/aside-nav/aside-nav-routing-module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/common-module/aside-nav/aside-nav-routing-module.ts ***!
  \*********************************************************************/
/*! exports provided: AsideNavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavRoutingModule", function() { return AsideNavRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const routes = [];
let AsideNavRoutingModule = class AsideNavRoutingModule {
};
AsideNavRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AsideNavRoutingModule);



/***/ }),

/***/ "./src/app/common-module/aside-nav/aside-nav.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/common-module/aside-nav/aside-nav.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".side-navbar {\r\n    position: fixed;\r\n    top: 56px;\r\n    left: 0;\r\n    width: 200px;\r\n    height: calc(100% - 56px);\r\n    width: 220px;\r\n    text-align: left;\r\n    /* background: #f4f5f7; */\r\n    background: #fff;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,0.2);\r\n    color: #fff;\r\n    z-index: 999;\r\n    overflow-y: auto;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n    padding: 0;\r\n}\r\n.side-navbar ul{\r\n    margin: 0px;\r\n    padding: 20px 0 0;\r\n}\r\n.side-navbar li a{\r\n    color: #706f84;\r\n    padding: 10px 10px 10px 22px;\r\n    /* border-bottom: 1px solid rgba(99,94,190,0.2); */\r\n    font-size: 15px;\r\n    -webkit-transition: all 0.2s ease;\r\n    transition: all 0.2s ease;\r\n    font-weight: 500;\r\n    position: relative;\r\n}\r\n.side-navbar li a::after{\r\n    position: absolute;\r\n    content: '';\r\n    background-color: rgba(99,94,190,0.1);\r\n    width: 50%;\r\n    height: 100%;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: -1;\r\n    /* border-radius: 7px; */\r\n    opacity: 0;\r\n    -webkit-transition: all 0.2s ease-in;\r\n    transition: all 0.2s ease-in;\r\n}\r\n/* .side-navbar li a:focus::after, */\r\n.side-navbar li a:hover::after{\r\n    opacity: 1;\r\n    width: 100%;\r\n}\r\n.side-navbar li a.active{\r\n    /* background-color: rgba(99,94,190,0.7) ;\r\n    color: #fff; */\r\n    background-color: rgba(99,94,190,0.1);\r\n    color: #635ebe ;\r\n    /* border-radius: 7px; */\r\n    border-left: 3px solid #635ebe;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uLW1vZHVsZS9hc2lkZS1uYXYvYXNpZGUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0RBQWtEO0lBQ2xELGVBQWU7SUFDZixpQ0FBeUI7SUFBekIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gscUNBQXFDO0lBQ3JDLFVBQVU7SUFDVixZQUFZO0lBQ1osT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixvQ0FBNEI7SUFBNUIsNEJBQTRCO0FBQ2hDO0FBQ0Esb0NBQW9DO0FBQ3BDO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0k7a0JBQ2M7SUFDZCxxQ0FBcUM7SUFDckMsZUFBZTtJQUNmLHdCQUF3QjtJQUN4Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9jb21tb24tbW9kdWxlL2FzaWRlLW5hdi9hc2lkZS1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlLW5hdmJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDU2cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1NnB4KTtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiAjZjRmNWY3OyAqL1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5zaWRlLW5hdmJhciB1bHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgcGFkZGluZzogMjBweCAwIDA7XHJcbn1cclxuLnNpZGUtbmF2YmFyIGxpIGF7XHJcbiAgICBjb2xvcjogIzcwNmY4NDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDIycHg7XHJcbiAgICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg5OSw5NCwxOTAsMC4yKTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zaWRlLW5hdmJhciBsaSBhOjphZnRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSw5NCwxOTAsMC4xKTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiA3cHg7ICovXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbjtcclxufVxyXG4vKiAuc2lkZS1uYXZiYXIgbGkgYTpmb2N1czo6YWZ0ZXIsICovXHJcbi5zaWRlLW5hdmJhciBsaSBhOmhvdmVyOjphZnRlcntcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uc2lkZS1uYXZiYXIgbGkgYS5hY3RpdmV7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk5LDk0LDE5MCwwLjcpIDtcclxuICAgIGNvbG9yOiAjZmZmOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5OSw5NCwxOTAsMC4xKTtcclxuICAgIGNvbG9yOiAjNjM1ZWJlIDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDdweDsgKi9cclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzYzNWViZTtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/common-module/aside-nav/aside-nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/common-module/aside-nav/aside-nav.component.ts ***!
  \****************************************************************/
/*! exports provided: AsideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavComponent", function() { return AsideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AsideNavComponent = class AsideNavComponent {
    constructor() { }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AsideNavComponent.prototype, "asideNav", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AsideNavComponent.prototype, "locationNav", void 0);
AsideNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aside-nav',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./aside-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/aside-nav/aside-nav.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./aside-nav.component.css */ "./src/app/common-module/aside-nav/aside-nav.component.css")).default]
    })
], AsideNavComponent);



/***/ }),

/***/ "./src/app/common-module/aside-nav/aside-nav.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/common-module/aside-nav/aside-nav.module.ts ***!
  \*************************************************************/
/*! exports provided: AsideNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideNavModule", function() { return AsideNavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _aside_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aside-nav.component */ "./src/app/common-module/aside-nav/aside-nav.component.ts");
/* harmony import */ var _aside_nav_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aside-nav-routing-module */ "./src/app/common-module/aside-nav/aside-nav-routing-module.ts");





let AsideNavModule = class AsideNavModule {
};
AsideNavModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_aside_nav_component__WEBPACK_IMPORTED_MODULE_3__["AsideNavComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _aside_nav_routing_module__WEBPACK_IMPORTED_MODULE_4__["AsideNavRoutingModule"]
        ],
        exports: [
            _aside_nav_component__WEBPACK_IMPORTED_MODULE_3__["AsideNavComponent"]
        ]
    })
], AsideNavModule);



/***/ }),

/***/ "./src/app/pages/master/brand/brand-list/brand-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/master/brand/brand-list/brand-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: BrandListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandListComponent", function() { return BrandListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/messages */ "./src/app/messages.ts");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common */ "./src/app/common.ts");
/* harmony import */ var src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/brand.service */ "./src/app/service/brand.service.ts");







let BrandListComponent = class BrandListComponent {
    constructor(paginationService, BrandService, fBuilder) {
        this.paginationService = paginationService;
        this.BrandService = BrandService;
        this.fBuilder = fBuilder;
        // listing
        this.loadingState = true;
        this.objectArray = [];
        this.questionArray = [];
        this.pagination = null;
        this.showPagination = false;
        this.searchText = null;
        this.currentPage = 1;
        this.formErrors = {
            brand_name: null,
            apierror: null
        };
        this.showLoader = false;
        this.showAddForm = false; // add
        this.isEditing = false; // edit
        this.editId = null; // edit
        this.editIndex = null; // edit
        this.loadform = false;
        this.permissionObject = null;
        this.addForm = this.fBuilder.group({
            'brand_name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
        });
    }
    ngOnInit() {
        // this.dataService.permission.subscribe((perms) => {
        //   this.permissionObject = perms['company'];
        // });
        this.loadform = false;
        this.getObjects();
    }
    getObjects() {
        const params = { page: this.currentPage };
        if (this.searchText) {
            params.search = this.searchText;
        }
        this.BrandService.getBrandList(params).subscribe((response) => {
            this.loadingState = false;
            if (response.success) {
                this.objectArray = response.data.list;
                this.showPagination = true;
                this.pagination = this.paginationService.getPager(response.data.pagination['total_page'], this.currentPage);
            }
            else {
                response.error.filter(() => {
                });
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
    deleteObject(object) {
        swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_2__["errorMessage"].delete_cancel_button,
        }).then((result) => {
            if (result.value) {
                this.BrandService.deleteBrand(object.brand_id).subscribe((response) => {
                    if (response.success) {
                        this.getObjects();
                    }
                });
            }
        }).catch(swal.noop);
    }
    editObject(object, index) {
        this.resetForm();
        this.editIndex = index;
        this.isEditing = true;
        this.editId = object.brand_id;
        this.addForm.patchValue({
            'brand_name': object.brand_name,
        });
    }
    showForm() {
        this.resetForm();
        this.showAddForm = true;
    }
    resetForm() {
        this.showAddForm = false;
        this.isEditing = false;
        this.editId = null;
        src_app_common__WEBPACK_IMPORTED_MODULE_5__["CommonFunction"].resetForm(this.addForm, this.formErrors);
    }
    submitForm() {
        if (this.addForm.valid) {
            this.showLoader = true;
            const formData = {
                'brand_name': this.addForm.value.brand_name,
            };
            if (this.isEditing) {
                this.BrandService.editBrand(this.editId, formData).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.getObjects();
                        this.resetForm();
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('brand_name')) {
                                this.formErrors['brand_name'] = obj['brand_name'];
                            }
                            else {
                                this.formErrors['apierror'] = `* ${response.error}`;
                            }
                        });
                    }
                }, (error) => {
                    this.formErrors['apierror'] = `* ${error.error}`;
                    this.showLoader = false;
                });
            }
            else {
                this.BrandService.addBrand(formData).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.resetForm();
                        this.getObjects();
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('brand_name')) {
                                this.formErrors['brand_name'] = obj['brand_name'];
                            }
                            else {
                                this.formErrors['apierror'] = `* ${response.error}`;
                            }
                        });
                    }
                }, (error) => {
                    this.formErrors['apierror'] = `* ${error.error}`;
                    this.showLoader = false;
                });
            }
        }
    }
};
BrandListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_3__["PaginationService"] },
    { type: src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
BrandListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-brand-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./brand-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/brand/brand-list/brand-list.component.html")).default
    })
], BrandListComponent);



/***/ }),

/***/ "./src/app/pages/master/brand/brand.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/master/brand/brand.module.ts ***!
  \****************************************************/
/*! exports provided: BrandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandModule", function() { return BrandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./brand-list/brand-list.component */ "./src/app/pages/master/brand/brand-list/brand-list.component.ts");
/* harmony import */ var src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/brand.service */ "./src/app/service/brand.service.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");













const routes = [
    {
        path: "",
        component: _brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_10__["BrandListComponent"],
        data: { title: 'brand_list' }
    },
];
let BrandModule = class BrandModule {
};
BrandModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_brand_list_brand_list_component__WEBPACK_IMPORTED_MODULE_10__["BrandListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_12__["PaginationModule"]
        ], providers: [src_app_service_brand_service__WEBPACK_IMPORTED_MODULE_11__["BrandService"]]
    })
], BrandModule);



/***/ }),

/***/ "./src/app/pages/master/manage-bin/add-bin/add-bin.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/master/manage-bin/add-bin/add-bin.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddBinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBinComponent", function() { return AddBinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_bin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/bin.service */ "./src/app/service/bin.service.ts");





let AddBinComponent = class AddBinComponent {
    constructor(router, activatedRoute, fb, binService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.binService = binService;
        this.PageTitle = 'Bin';
        this.addNewRadio = false;
        this.areaListArray = [];
        this.aisleListArray = [];
        this.bayListArray = [];
        this.levelListArray = [];
        this.area_code = '';
        this.aisle_code = '';
        this.bay_code = '';
        this.level_code = '';
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
            bin_code: null,
            apierror: null,
        };
        this.isEditing = false;
        this.editId = null;
        if (this.activatedRoute.snapshot.paramMap.get('id')) {
            this.isEditing = true;
            this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }
        this.addForm = this.fb.group({
            bin_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            bin_code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            location_code: [null],
            area_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            description: [null],
            level_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            bay_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            aisle_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            tag_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            bin_size: [null],
            width: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            height: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            depth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
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
        this.binService.getBinMasterData().subscribe((response) => {
            if (response.success) {
                this.areaListArray = response.data.area;
            }
        });
    }
    getEditObject() {
        this.binService.getBinById(this.editId).subscribe((response) => {
            this.getAisleData(response.data.area.area_id, false, response.data.area.area_code);
            this.getBayData(response.data.aisle.aisle_id, false, response.data.aisle.aisle_code);
            this.getLevelData(response.data.bay.bay_id, false, response.data.bay.bay_code);
            this.getLevelChange(false, response.data.level.level_code);
            let location = `${response.data.area.area_code}-${response.data.aisle.aisle_code}-${response.data.bay.bay_code}-${response.data.level.level_code}`;
            if (response.success) {
                this.addForm.patchValue({
                    height: response.data.bin_volume.height,
                    width: response.data.bin_volume.width,
                    depth: response.data.bin_volume.depth,
                    total_volume: response.data.bin_volume.total_volume,
                    location_code: location,
                    area_id: response.data.area.area_id,
                    aisle_id: response.data.aisle.aisle_id,
                    level_id: response.data.level.level_id,
                    bay_id: response.data.bay.bay_id,
                    description: response.data.description,
                    tag_id: response.data.tag_id,
                    bin_size: response.data.bin_size,
                    bin_name: response.data.bin_name,
                    bin_code: response.data.bin_code,
                });
            }
            else {
                this.router.navigateByUrl('/manage/bin');
            }
        });
    }
    submitForm(formData) {
        if (formData.valid) {
            this.showLoader = true;
            const data = new FormData();
            data.append('bin_name', formData.value.bin_name);
            data.append('bin_code', formData.value.bin_code);
            data.append('tag_id', formData.value.tag_id);
            data.append('bin_size', formData.value.bin_size);
            data.append('location_code', formData.value.location_code);
            data.append('area_id', formData.value.area_id ? formData.value.area_id : '');
            data.append('aisle_id', formData.value.aisle_id);
            data.append('bay_id', formData.value.bay_id);
            data.append('level_id', formData.value.level_id);
            data.append('description', formData.value.description);
            const volume = {
                height: formData.value.height,
                width: formData.value.width,
                depth: formData.value.depth,
                total_volume: formData.value.total_volume
            };
            data.append('bin_volume', JSON.stringify(volume));
            if (this.isEditing) {
                this.binService.editBin(this.editId, data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/bin');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('bin_code')) {
                                this.formErrors['bin_code'] = obj['bin_code'];
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
                this.binService.addBin(data).subscribe((response) => {
                    this.showLoader = false;
                    if (response.success) {
                        this.router.navigateByUrl('/manage/bin');
                    }
                    else {
                        response.error.map(obj => {
                            if (obj.hasOwnProperty('bin_code')) {
                                this.formErrors['bin_code'] = obj['bin_code'];
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
    getAisleData(data, event, area_code) {
        if (data) {
            this.binService.getAisleDropDownData(data).subscribe((response) => {
                if (response.success) {
                    this.aisleListArray = response.data.aisle;
                }
            });
        }
        this.area_code = area_code;
        if (event) {
            this.aisle_code = null;
            this.bay_code = null;
            this.level_code = null;
            this.addForm.patchValue({
                aisle_id: '',
                bay_id: '',
                level_id: ''
            });
        }
        this.setLocation();
    }
    getBayData(data, event, aisle_code) {
        this.binService.getBayDropDownData(data).subscribe((response) => {
            if (response.success) {
                this.bayListArray = response.data.bay;
            }
        });
        this.aisle_code = aisle_code;
        if (event) {
            this.bay_code = null;
            this.level_code = null;
            this.addForm.patchValue({
                bay_id: '',
                level_id: ''
            });
        }
        this.setLocation();
    }
    getLevelData(data, event, bay_code) {
        this.binService.getLevelDropDownData(data).subscribe((response) => {
            if (response.success) {
                this.levelListArray = response.data.level;
            }
        });
        this.bay_code = bay_code;
        if (event) {
            this.level_code = null;
            this.addForm.patchValue({
                level_id: ''
            });
        }
        this.setLocation();
    }
    getLevelChange(event, level_code) {
        this.level_code = level_code;
        // if (event) {
        //   this.level_code = level_code
        // }
        this.setLocation();
    }
    setLocation() {
        let location_code = '';
        if (this.area_code) {
            location_code = location_code + this.area_code;
        }
        if (this.aisle_code) {
            location_code = location_code + "-" + this.aisle_code;
        }
        if (this.bay_code) {
            location_code = location_code + "-" + this.bay_code;
        }
        if (this.level_code) {
            location_code = location_code + "-" + this.level_code;
        }
        this.addForm.patchValue({ location_code: location_code });
    }
};
AddBinComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_service_bin_service__WEBPACK_IMPORTED_MODULE_4__["BinService"] }
];
AddBinComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-bin',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-bin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/manage-bin/add-bin/add-bin.component.html")).default
    })
], AddBinComponent);



/***/ }),

/***/ "./src/app/pages/master/manage-bin/bin-list/bin-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/master/manage-bin/bin-list/bin-list.component.ts ***!
  \************************************************************************/
/*! exports provided: BinListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinListComponent", function() { return BinListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/pagination.service */ "./src/app/service/pagination.service.ts");
/* harmony import */ var src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common-module/table-list/list-field-type */ "./src/app/common-module/table-list/list-field-type.ts");
/* harmony import */ var src_app_service_bin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/bin.service */ "./src/app/service/bin.service.ts");





let BinListComponent = class BinListComponent {
    constructor(paginationService, binService) {
        this.paginationService = paginationService;
        this.binService = binService;
        this.PageTitle = 'Manage Bin';
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
            label: "Bin Name",
            key: "bin_name",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bin Code",
            key: "bin_code",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bin Tag",
            key: "tag_id",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Area",
            key: "area.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Aisle",
            key: "aisle.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Level",
            key: "level.label",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bin Size",
            key: "bin_size",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Bin Volume",
            key: "bin_volume",
        }), new src_app_common_module_table_list_list_field_type__WEBPACK_IMPORTED_MODULE_3__["TextField"]({
            label: "Avliable Volume",
            key: "available_volume",
        }));
        let canEdit = true;
        let canDelete = true;
        let actions = {};
        if (canEdit) {
            actions['edit'] = {
                path: '/manage/bin/edit/',
                id: 'bin_id'
            };
        }
        if (canDelete) {
            actions['delete'] = {
                path: 'bin/',
                id: 'bin_id'
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
        this.binService.getBinList(params).subscribe((response) => {
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
BinListComponent.ctorParameters = () => [
    { type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_2__["PaginationService"] },
    { type: src_app_service_bin_service__WEBPACK_IMPORTED_MODULE_4__["BinService"] }
];
BinListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bin-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./bin-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/manage-bin/bin-list/bin-list.component.html")).default,
    })
], BinListComponent);



/***/ }),

/***/ "./src/app/pages/master/manage-bin/manage-bin.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/master/manage-bin/manage-bin.module.ts ***!
  \**************************************************************/
/*! exports provided: ManageBinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBinModule", function() { return ManageBinModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common-module/search/search.module */ "./src/app/common-module/search/search.module.ts");
/* harmony import */ var src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common-module/btn-add/btn-add.module */ "./src/app/common-module/btn-add/btn-add.module.ts");
/* harmony import */ var src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common-module/table-list/table-list.module */ "./src/app/common-module/table-list/table-list.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/form-validation/form-validation.module */ "./src/app/shared/form-validation/form-validation.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _add_bin_add_bin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-bin/add-bin.component */ "./src/app/pages/master/manage-bin/add-bin/add-bin.component.ts");
/* harmony import */ var src_app_service_bin_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/service/bin.service */ "./src/app/service/bin.service.ts");
/* harmony import */ var _bin_list_bin_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bin-list/bin-list.component */ "./src/app/pages/master/manage-bin/bin-list/bin-list.component.ts");
/* harmony import */ var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/common-module/pagination/pagination.module */ "./src/app/common-module/pagination/pagination.module.ts");















const routes = [
    {
        path: "",
        component: _bin_list_bin_list_component__WEBPACK_IMPORTED_MODULE_13__["BinListComponent"],
        data: { title: 'bin_list' }
    },
    {
        path: "add",
        component: _add_bin_add_bin_component__WEBPACK_IMPORTED_MODULE_11__["AddBinComponent"],
        data: { title: 'add_bin' }
    },
    {
        path: 'edit/:id',
        component: _add_bin_add_bin_component__WEBPACK_IMPORTED_MODULE_11__["AddBinComponent"],
        data: { title: 'edit_bin' }
    },
];
let ManageBinModule = class ManageBinModule {
};
ManageBinModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_add_bin_add_bin_component__WEBPACK_IMPORTED_MODULE_11__["AddBinComponent"], _bin_list_bin_list_component__WEBPACK_IMPORTED_MODULE_13__["BinListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_common_module_table_list_table_list_module__WEBPACK_IMPORTED_MODULE_6__["TableListModule"],
            src_app_common_module_search_search_module__WEBPACK_IMPORTED_MODULE_4__["SearchModule"],
            src_app_common_module_btn_add_btn_add_module__WEBPACK_IMPORTED_MODULE_5__["BtnAddModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_9__["FormValidationModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_14__["PaginationModule"]
        ], providers: [src_app_service_bin_service__WEBPACK_IMPORTED_MODULE_12__["BinService"]]
    })
], ManageBinModule);



/***/ }),

/***/ "./src/app/pages/master/master-layout/master-layout.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/master/master-layout/master-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: MasterLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterLayoutComponent", function() { return MasterLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _side_nav_links__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-nav-links */ "./src/app/pages/master/side-nav-links.ts");



let MasterLayoutComponent = class MasterLayoutComponent {
    constructor() { }
    ngOnInit() {
        this.res = _side_nav_links__WEBPACK_IMPORTED_MODULE_2__["NavLink"].asideNav;
        this.locationLinks = _side_nav_links__WEBPACK_IMPORTED_MODULE_2__["NavLink"].locationNav;
    }
};
MasterLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-master-layout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./master-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/master/master-layout/master-layout.component.html")).default,
    })
], MasterLayoutComponent);



/***/ }),

/***/ "./src/app/pages/master/master-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/master/master-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterRoutingModule", function() { return MasterRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _master_layout_master_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-layout/master-layout.component */ "./src/app/pages/master/master-layout/master-layout.component.ts");




const routes = [
    {
        path: '',
        component: _master_layout_master_layout_component__WEBPACK_IMPORTED_MODULE_3__["MasterLayoutComponent"],
        children: [
            {
                path: 'bin',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./manage-bin/manage-bin.module */ "./src/app/pages/master/manage-bin/manage-bin.module.ts")).then(m => m.ManageBinModule)
            },
            {
                path: 'brand',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./brand/brand.module */ "./src/app/pages/master/brand/brand.module.ts")).then(m => m.BrandModule)
            },
            {
                path: 'category',
                loadChildren: () => __webpack_require__.e(/*! import() | category-category-module */ "category-category-module").then(__webpack_require__.bind(null, /*! ./category/category.module */ "./src/app/pages/master/category/category.module.ts")).then(m => m.CategoryModule)
            },
            {
                path: 'product',
                loadChildren: () => __webpack_require__.e(/*! import() | product-product-module */ "product-product-module").then(__webpack_require__.bind(null, /*! ./product/product.module */ "./src/app/pages/master/product/product.module.ts")).then(m => m.ProductModule)
            },
            {
                path: 'suppliers',
                loadChildren: () => __webpack_require__.e(/*! import() | suppliers-suppliers-module */ "suppliers-suppliers-module").then(__webpack_require__.bind(null, /*! ./suppliers/suppliers.module */ "./src/app/pages/master/suppliers/suppliers.module.ts")).then(m => m.SuppliersModule)
            },
            {
                path: 'client',
                loadChildren: () => __webpack_require__.e(/*! import() | client-client-module */ "client-client-module").then(__webpack_require__.bind(null, /*! ./client/client.module */ "./src/app/pages/master/client/client.module.ts")).then(m => m.ClientModule)
            },
            {
                path: 'warehouse',
                loadChildren: () => __webpack_require__.e(/*! import() | warehouse-warehouse-module */ "warehouse-warehouse-module").then(__webpack_require__.bind(null, /*! ./warehouse/warehouse.module */ "./src/app/pages/master/warehouse/warehouse.module.ts")).then(m => m.WarehouseModule)
            },
            {
                path: 'aisle',
                loadChildren: () => __webpack_require__.e(/*! import() | aisle-aisle-module */ "aisle-aisle-module").then(__webpack_require__.bind(null, /*! ./aisle/aisle.module */ "./src/app/pages/master/aisle/aisle.module.ts")).then(m => m.AisleModule)
            },
            {
                path: 'area',
                loadChildren: () => __webpack_require__.e(/*! import() | area-area-module */ "area-area-module").then(__webpack_require__.bind(null, /*! ./area/area.module */ "./src/app/pages/master/area/area.module.ts")).then(m => m.AreaModule)
            },
            {
                path: 'level',
                loadChildren: () => __webpack_require__.e(/*! import() | level-level-module */ "level-level-module").then(__webpack_require__.bind(null, /*! ./level/level.module */ "./src/app/pages/master/level/level.module.ts")).then(m => m.LevelModule)
            },
            {
                path: 'bay',
                loadChildren: () => __webpack_require__.e(/*! import() | bay-bay-module */ "bay-bay-module").then(__webpack_require__.bind(null, /*! ./bay/bay.module */ "./src/app/pages/master/bay/bay.module.ts")).then(m => m.BayModule)
            },
            {
                path: 'carrier',
                loadChildren: () => __webpack_require__.e(/*! import() | carrier-carrier-module */ "carrier-carrier-module").then(__webpack_require__.bind(null, /*! ./carrier/carrier.module */ "./src/app/pages/master/carrier/carrier.module.ts")).then(m => m.CarrierModule)
            },
            {
                path: 'order-type',
                loadChildren: () => __webpack_require__.e(/*! import() | order-type-order-type-module */ "order-type-order-type-module").then(__webpack_require__.bind(null, /*! ./order-type/order-type.module */ "./src/app/pages/master/order-type/order-type.module.ts")).then(m => m.OrderTypeModule)
            },
            {
                path: 'shipping-address',
                loadChildren: () => __webpack_require__.e(/*! import() | shipping-address-shipping-address-module */ "shipping-address-shipping-address-module").then(__webpack_require__.bind(null, /*! ./shipping-address/shipping-address.module */ "./src/app/pages/master/shipping-address/shipping-address.module.ts")).then(m => m.ShippingAddressModule)
            },
            {
                path: 'unit',
                loadChildren: () => __webpack_require__.e(/*! import() | unit-unit-module */ "unit-unit-module").then(__webpack_require__.bind(null, /*! ./unit/unit.module */ "./src/app/pages/master/unit/unit.module.ts")).then(m => m.UnitModule)
            },
            {
                path: 'tag',
                loadChildren: () => __webpack_require__.e(/*! import() | tag-tag-module */ "tag-tag-module").then(__webpack_require__.bind(null, /*! ./tag/tag.module */ "./src/app/pages/master/tag/tag.module.ts")).then(m => m.TagModule)
            },
        ]
    }
];
let MasterRoutingModule = class MasterRoutingModule {
};
MasterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MasterRoutingModule);



/***/ }),

/***/ "./src/app/pages/master/master.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/master/master.module.ts ***!
  \***********************************************/
/*! exports provided: MasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasterModule", function() { return MasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _master_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./master-routing.module */ "./src/app/pages/master/master-routing.module.ts");
/* harmony import */ var _manage_bin_manage_bin_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-bin/manage-bin.module */ "./src/app/pages/master/manage-bin/manage-bin.module.ts");
/* harmony import */ var _brand_brand_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brand/brand.module */ "./src/app/pages/master/brand/brand.module.ts");
/* harmony import */ var _master_layout_master_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./master-layout/master-layout.component */ "./src/app/pages/master/master-layout/master-layout.component.ts");
/* harmony import */ var src_app_common_module_aside_nav_aside_nav_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/common-module/aside-nav/aside-nav.module */ "./src/app/common-module/aside-nav/aside-nav.module.ts");
/* harmony import */ var src_app_common_module_table_view_table_view_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common-module/table-view/table-view.module */ "./src/app/common-module/table-view/table-view.module.ts");









let MasterModule = class MasterModule {
};
MasterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_master_layout_master_layout_component__WEBPACK_IMPORTED_MODULE_6__["MasterLayoutComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _master_routing_module__WEBPACK_IMPORTED_MODULE_3__["MasterRoutingModule"],
            _manage_bin_manage_bin_module__WEBPACK_IMPORTED_MODULE_4__["ManageBinModule"],
            _brand_brand_module__WEBPACK_IMPORTED_MODULE_5__["BrandModule"],
            src_app_common_module_aside_nav_aside_nav_module__WEBPACK_IMPORTED_MODULE_7__["AsideNavModule"],
            src_app_common_module_table_view_table_view_module__WEBPACK_IMPORTED_MODULE_8__["TableViewModule"]
        ]
    })
], MasterModule);



/***/ }),

/***/ "./src/app/pages/master/side-nav-links.ts":
/*!************************************************!*\
  !*** ./src/app/pages/master/side-nav-links.ts ***!
  \************************************************/
/*! exports provided: NavLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class NavLink {
}
NavLink.asideNav = [
    {
        asidText: 'Brand',
        asidUrl: '/manage/brand'
    },
    {
        asidText: 'Category',
        asidUrl: '/manage/category'
    },
    {
        asidText: 'Product',
        asidUrl: '/manage/product'
    },
    {
        asidText: 'Suppliers',
        asidUrl: '/manage/suppliers'
    },
    {
        asidText: 'Clients',
        asidUrl: '/manage/client'
    },
    {
        asidText: 'Warehouse',
        asidUrl: '/manage/warehouse'
    },
    {
        asidText: 'Carrier',
        asidUrl: '/manage/carrier'
    },
    {
        asidText: 'Order Type',
        asidUrl: '/manage/order-type'
    },
    {
        asidText: 'Shipping Address',
        asidUrl: '/manage/shipping-address'
    },
    {
        asidText: 'Unit',
        asidUrl: '/manage/unit'
    },
    {
        asidText: 'Tag',
        asidUrl: '/manage/tag'
    }
];
NavLink.locationNav = [
    {
        asidText: 'Area',
        asidUrl: '/manage/area'
    },
    {
        asidText: 'Aisle',
        asidUrl: '/manage/aisle'
    },
    {
        asidText: 'Bay',
        asidUrl: '/manage/bay'
    },
    {
        asidText: 'Level',
        asidUrl: '/manage/level'
    },
    {
        asidText: 'Bin',
        asidUrl: '/manage/bin'
    }
];


/***/ }),

/***/ "./src/app/service/bin.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/bin.service.ts ***!
  \****************************************/
/*! exports provided: BinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinService", function() { return BinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let BinService = class BinService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getBinList(param) {
        return this.http.get(`${this.API_URL}/bin`, { params: param });
    }
    addBin(data) {
        return this.http.post(`${this.API_URL}/bin`, data);
    }
    editBin(id, data) {
        return this.http.put(`${this.API_URL}/bin/${id}`, data);
    }
    getBinById(id, param = null) {
        return this.http.get(`${this.API_URL}/bin/${id}`, { params: param });
    }
    getBinMasterData() {
        return this.http.get(`${this.API_URL}/bin/master-data`);
    }
    getAisleDropDownData(id) {
        return this.http.get(`${this.API_URL}/bin/get-aisle/${id}`);
    }
    getBayDropDownData(id) {
        return this.http.get(`${this.API_URL}/bin/get-bay/${id}`);
    }
    getLevelDropDownData(id) {
        return this.http.get(`${this.API_URL}/bin/get-level/${id}`);
    }
};
BinService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BinService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BinService);



/***/ }),

/***/ "./src/app/service/brand.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/brand.service.ts ***!
  \******************************************/
/*! exports provided: BrandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandService", function() { return BrandService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let BrandService = class BrandService {
    constructor(http) {
        this.http = http;
        this.API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].APIEndpoint;
    }
    getBrandList(param) {
        return this.http.get(`${this.API_URL}/brand`, { params: param });
    }
    addBrand(data) {
        return this.http.post(`${this.API_URL}/brand`, data);
    }
    editBrand(id, data) {
        return this.http.put(`${this.API_URL}/brand/${id}`, data);
    }
    getBrandById(id, param = null) {
        return this.http.get(`${this.API_URL}/brand/${id}`, { params: param });
    }
    deleteBrand(id) {
        return this.http.delete(`${this.API_URL}/brand/${id}`);
    }
};
BrandService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BrandService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], BrandService);



/***/ })

}]);
//# sourceMappingURL=pages-master-master-module-es2015.js.map