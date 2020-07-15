function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-packing-add-packing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOutboundPackingAddPackingAddPackingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n    <div class=\"page-header\">\r\n        <div class=\"row\">\r\n            <div class=\"col d-flex\">\r\n                <h2 class=\"mr-auto\">Add Packing </h2>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" role=\"form\">\r\n            <div class=\"card-body\">\r\n                <div class=\"mb-3\">\r\n                    <div class=\"col-12\">\r\n                        <div class=\"form-group row align-items-center\" [ngClass]=\"{'has-error': formErrors.order_id}\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Select Order Number</label>\r\n\r\n                            <ng-select style=\"width:180px\" [formControl]=\"addForm.controls['sales_order_id']\"\r\n                                [items]=\"orderNumberArray\" (change)=\"onOrderChange($event)\" bindLabel=\"label\"\r\n                                bindValue=\"value\" placeholder=\"Select Order\">\r\n                            </ng-select>\r\n                            <span *ngIf=\"formErrors.order_id\" class=\"help-block\"\r\n                                [innerHTML]=\"formErrors.order_id\"></span>\r\n                        </div>\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Packing Type</label>\r\n                            <ng-select style=\"width: 180px;\" [formControl]=\"addForm.controls['pack_type']\"\r\n                                placeholder=\"Select Packing Type\" [items]=\"packTypeArray\" bindLabel=\"label\"\r\n                                bindValue=\"value\">\r\n                            </ng-select>\r\n                        </div>\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Remark</label>\r\n                            <input type=\"text\" style=\"width: 180px;\" [formControl]=\"addForm.controls['remark']\"\r\n                                class=\"form-control \" placeholder=\"\">\r\n                        </div>\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Batch No.</label>\r\n                            <input type=\"text\" style=\"width: 180px;\" [formControl]=\"addForm.controls['batch_no']\"\r\n                                class=\"form-control \" placeholder=\"\">\r\n                        </div>\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Serial No</label>\r\n                            <input type=\"text\" style=\"width: 180px;\" [formControl]=\"addForm.controls['serial_no']\"\r\n                                class=\"form-control \" placeholder=\"\">\r\n                        </div>\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Cartoon No</label>\r\n                            <input type=\"text\" style=\"width: 180px;\" [formControl]=\"addForm.controls['cartoon_no']\"\r\n                                class=\"form-control \" placeholder=\"\" readonly>\r\n                        </div>\r\n                        <div class=\"form-group row align-items-center\">\r\n                            <label class=\"control-label text-md-right col-md-4 col-lg-3\">Add Products</label>\r\n                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addProduct()\">\r\n                                Add\r\n                            </button>\r\n                            <span *ngIf=\"formErrors.product\" class=\"help-block\" [innerHTML]=\"formErrors.product\"></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt-4\">\r\n                    <div class=\"col-12\">\r\n                        <div *ngIf=\"orderDetails?.sales_order_detail\" class=\"border p-2\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-6\">\r\n                                    <h6>{{orderDetails?.sales_order_detail?.client?.label}}</h6>\r\n                                </div>\r\n                                <div class=\"col-6 text-right\">\r\n                                    <div>Pallet Number: {{orderDetails?.sales_order_detail?.pallet_no}}</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mt-2\">\r\n                                <div class=\"col-md-6\">\r\n                                    <p class=\"mb-1\">Order No.\r\n                                        <span>{{orderDetails?.sales_order_detail?.sales_order_no}}</span></p>\r\n                                    <p class=\"mb-1\">Item No. <span>{{orderDetails?.sales_order_detail?.itm_no}}</span>\r\n                                    </p>\r\n                                    <p class=\"mb-1\">Description.\r\n                                        <span>{{orderDetails?.sales_order_detail?.description}}</span></p>\r\n                                </div>\r\n                                <div class=\"col-md-6 text-right\">\r\n                                    <div class=\"w-25 ml-auto\">\r\n                                        {{orderDetails?.sales_order_detail?.shipping_address[0].street_address}}\r\n\r\n                                        {{orderDetails?.sales_order_detail?.shipping_address[0].label}}-\r\n                                        {{orderDetails?.sales_order_detail?.shipping_address[0].state}}\r\n\r\n\r\n\r\n                                        {{orderDetails?.sales_order_detail?.shipping_address[0].country_name}}-\r\n                                        {{orderDetails?.sales_order_detail?.shipping_address[0].pin_code}}\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"mt-2\">\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table\">\r\n                                    <thead class=\"thead-dark\">\r\n                                        <tr>\r\n                                            <th width=\"10%\">No.</th>\r\n                                            <th width=\"15%\">Product Code</th>\r\n                                            <th width=\"55%\">Product </th>\r\n                                            <th width=\"10%\">Tag</th>\r\n                                            <th width=\"10%\">Weight</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr *ngFor=\"let prodLists of productDetailList; let i =index\">\r\n                                            <td>{{i + 1}}</td>\r\n                                            <td>{{prodLists?.product?.sku_no}}</td>\r\n                                            <td>{{prodLists?.product?.label}}</td>\r\n                                            <td>{{prodLists?.tag?.label}}</td>\r\n                                            <td>{{prodLists?.product?.weight}}\r\n                                                {{prodLists?.product?.weight_unit}}\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr *ngIf=\"productDetailList.length == 0\">\r\n                                            <td colspan=\"5\">No records found</td>\r\n                                        </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n            </div>\r\n            <div class=\"text-right border-top py-4 card-footer\">\r\n                <a [routerLink]=\"['/outbound/packing']\" class=\"btn btn-light\">Cancel</a>\r\n                <button type=\"submit\" class=\"btn btn-secondary ml-2\">Done</button></div>\r\n        </form>\r\n    </div>\r\n\r\n</div>\r\n<app-product-list-popup [ProductList]=\"orderDetails?.product_list\" (onProductSubmit)=\"onProductSubmit($event)\">\r\n</app-product-list-popup>";
    /***/
  },

  /***/
  "./src/app/pages/outbound/packing/add-packing/add-packing.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/outbound/packing/add-packing/add-packing.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddPackingComponent */

  /***/
  function srcAppPagesOutboundPackingAddPackingAddPackingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPackingComponent", function () {
      return AddPackingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_common_module_product_list_popup_product_list_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common-module/product-list-popup/product-list-popup.component */
    "./src/app/common-module/product-list-popup/product-list-popup.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/packing.service */
    "./src/app/service/packing.service.ts");

    var AddPackingComponent =
    /*#__PURE__*/
    function () {
      function AddPackingComponent(packingService, activatedRoute, fb, router) {
        _classCallCheck(this, AddPackingComponent);

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
          pack_type: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])],
          remark: [null],
          batch_no: [null],
          serial_no: [null],
          cartoon_no: [null],
          product_detail_list: []
        });
      }

      _createClass(AddPackingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // if (this.isEditing) {
          //   this.getEditObject()
          // }
          this.getMasterData();
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this = this;

          this.packingService.getMasterData({}).subscribe(function (responce) {
            if (responce.success) {
              _this.orderNumberArray = responce.data.sales_order ? responce.data.sales_order : [];
              _this.packTypeArray = responce.data.pack_type ? responce.data.pack_type : [];

              _this.addForm.patchValue({
                cartoon_no: responce.data.cartoon_no
              });
            }
          });
        }
      }, {
        key: "onOrderChange",
        value: function onOrderChange(data) {
          if (data && data.value) {
            this.getSalesOrderDetail(data.value);
            this.formErrors.order_id = null;
          }
        }
      }, {
        key: "getSalesOrderDetail",
        value: function getSalesOrderDetail(id) {
          var _this2 = this;

          this.packingService.getSalesOrderDetail(id).subscribe(function (responce) {
            if (responce.success) {
              _this2.orderDetails = responce.data;
            }
          });
        }
      }, {
        key: "addProduct",
        value: function addProduct() {
          if (this.addForm.value.sales_order_id) {
            this.productAdd.addObject();
          } else {
            this.formErrors.order_id = "* Please Select Order Number";
          }
        }
      }, {
        key: "onProductSubmit",
        value: function onProductSubmit(data) {
          var _this3 = this;

          console.log("data", data);
          this.productDetailList = [];

          if (data && data.length > 0) {
            data.filter(function (obj) {
              if (obj.tag_list && obj.tag_list.length > 0) {
                obj.tag_list.filter(function (temp, i) {
                  temp['id'] = i;

                  _this3.productDetailList.push(temp);
                });
              }
            });
          } else {
            this.productDetailList = [];
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this4 = this;

          if (formData.valid) {
            if (this.productDetailList && this.productDetailList.length > 0) {
              var product_detail_list = [];
              this.productDetailList.map(function (obj) {
                var object = new Object();
                object['product_id'] = obj.product.value;
                object['weight_unit'] = obj.product.weight_unit;
                object['weight'] = obj.product.weight;
                object['product_qty'] = obj.product_qty;
                object['tag_id'] = obj.tag.value;
                product_detail_list.push(object);
              });
              this.formErrors.product = null;
              this.showLoader = true;
              var data = new FormData();
              data.append('sales_order_id', formData.value.sales_order_id);
              data.append('pack_type', formData.value.pack_type);
              data.append('remark', formData.value.remark);
              data.append('batch_no', formData.value.batch_no);
              data.append('serial_no', formData.value.serial_no);
              data.append('cartoon_no', formData.value.cartoon_no);
              data.append('product_detail_list', JSON.stringify(product_detail_list));

              if (this.isEditing) {
                this.packingService.editPacking(this.editId, data).subscribe(function (response) {
                  _this4.showLoader = false;

                  if (response.success) {
                    _this4.router.navigateByUrl('/outbound/packing');
                  } else {
                    response.error.map(function (obj) {
                      if (obj.hasOwnProperty('sales_order_id')) {
                        _this4.formErrors['sales_order_id'] = obj['sales_order_id'];
                      } else {
                        _this4.formErrors['apierror'] = "* ".concat(response.error);
                      }
                    });
                  }
                }, function (error) {
                  _this4.showLoader = false;
                });
              } else {
                this.packingService.addPacking(data).subscribe(function (response) {
                  _this4.showLoader = false;

                  if (response.success) {
                    _this4.router.navigateByUrl('/outbound/packing');
                  } else {
                    response.error.map(function (obj) {
                      if (obj.hasOwnProperty('sales_order_id')) {
                        _this4.formErrors['sales_order_id'] = obj['sales_order_id'];
                      } else {
                        _this4.formErrors['apierror'] = "* ".concat(response.error);
                      }
                    });
                  }
                }, function (error) {
                  _this4.showLoader = false;
                });
              }
            } else {
              this.formErrors.product = "* Please Add Product";
            }
          }
        }
      }]);

      return AddPackingComponent;
    }();

    AddPackingComponent.ctorParameters = function () {
      return [{
        type: src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_5__["PackingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_common_module_product_list_popup_product_list_popup_component__WEBPACK_IMPORTED_MODULE_2__["ProductListPopupComponent"], {
      static: false
    })], AddPackingComponent.prototype, "productAdd", void 0);
    AddPackingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-packing',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-packing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/packing/add-packing/add-packing.component.html")).default
    })], AddPackingComponent);
    /***/
  },

  /***/
  "./src/app/pages/outbound/packing/add-packing/add-packing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/outbound/packing/add-packing/add-packing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: AddPackingModule */

  /***/
  function srcAppPagesOutboundPackingAddPackingAddPackingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPackingModule", function () {
      return AddPackingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _add_packing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-packing.component */
    "./src/app/pages/outbound/packing/add-packing/add-packing.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/packing.service */
    "./src/app/service/packing.service.ts");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_common_module_product_list_popup_product_list_popup_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/common-module/product-list-popup/product-list-popup.module */
    "./src/app/common-module/product-list-popup/product-list-popup.module.ts");

    var routes = [{
      path: '',
      component: _add_packing_component__WEBPACK_IMPORTED_MODULE_3__["AddPackingComponent"]
    }];

    var AddPackingModule = function AddPackingModule() {
      _classCallCheck(this, AddPackingModule);
    };

    AddPackingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_packing_component__WEBPACK_IMPORTED_MODULE_3__["AddPackingComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], src_app_common_module_product_list_popup_product_list_popup_module__WEBPACK_IMPORTED_MODULE_10__["ProductListPopupModule"]],
      providers: [src_app_service_packing_service__WEBPACK_IMPORTED_MODULE_7__["PackingService"]]
    })], AddPackingModule);
    /***/
  }
}]);
//# sourceMappingURL=add-packing-add-packing-module-es5.js.map