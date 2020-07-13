function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-sales-order-add-sales-order-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-sales-product/add-sales-product.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-sales-product/add-sales-product.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCommonModuleAddSalesProductAddSalesProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Modal -->\n<div class=\"modal fade\" id=\"AddSalesOrderProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <form [formGroup]=\"productAddForm\" (ngSubmit)=\"submitForm(productAddForm)\" class=\"form-horizontal\"\n                role=\"form\">\n\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Product Sales</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"form-group\">\n                        <label class=\"control-label text-md-right\">Order No. <em>*</em></label>\n                        <div class=\"\">\n                            <input [formControl]=\"productAddForm.controls['order_no']\" type=\"text\" class=\"form-control\"\n                                disabled>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label text-md-right\">Brand <em>*</em></label>\n                        <ng-select [formControl]=\"productAddForm.controls['brand_id']\" (change)=\"getMasterData()\"\n                            [items]=\"brandListArray\" bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Brand\">\n                        </ng-select>\n\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label text-md-right\">Product <em>*</em></label>\n                        <ng-select [formControl]=\"productAddForm.controls['product_id']\" [items]=\"productListArray\"\n                            bindLabel=\"label\" bindValue=\"value\" placeholder=\"Select Product\"\n                            (change)=checkProductAddedd($event)>\n                        </ng-select>\n                        <span *ngIf=\"formErrors.product_id\" class=\"help-block\"\n                            [innerHTML]=\"formErrors.product_id\"></span>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-md-right\">Available Quantity </label>\n                                <div class=\"\">\n                                    <input [formControl]=\"productAddForm.controls['available_qty']\" type=\"text\"\n                                        class=\"form-control\" placeholder=\"\" readonly>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-md-right\">Order Quantity <em>*</em></label>\n                                <div [ngClass]=\"{'has-error': formErrors.qty}\">\n                                    <input number (input)=\"qunatitycheck()\"\n                                        [formControl]=\"productAddForm.controls['qty']\" type=\"text\" class=\"form-control\"\n                                        placeholder=\"\">\n                                    <span *ngIf=\"formErrors.qty\" class=\"help-block\" [innerHTML]=\"formErrors.qty\"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-md-right\">Amount </label>\n                                <div class=\"\">\n                                    <input number [formControl]=\"productAddForm.controls['amount']\" type=\"text\"\n                                        class=\"form-control\" placeholder=\"\" readonly>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-6\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label text-md-right\">Price <em>*</em></label>\n                                <div class=\"\">\n                                    <input number [formControl]=\"productAddForm.controls['price']\" type=\"text\"\n                                        class=\"form-control\" placeholder=\"\">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-light\" data-dismiss=\"modal\">Cancel</button>\n                    <button type=\"submit\" [disabled]=\"showLoader\" class=\"btn btn-secondary\">Submit</button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOutboundSalesOrderAddSalesOrderAddSalesOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\r\n  <div class=\"page-header\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h2 class=\"mr-auto\">{{ isEditing ? 'Update' : 'Create' }} {{PageTitle}} </h2>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card\">\r\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"submitForm(addForm)\" class=\"form-horizontal\" role=\"form\">\r\n      <div class=\"card-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\" [ngClass]=\"{'has-error': formErrors.order_no}\">\r\n              <label class=\"control-label text-md-right\">Order No. <em>*</em></label>\r\n              <div class=\"\">\r\n                <input [formControl]=\"addForm.controls['sales_order_no']\" (change)=\"removeError()\" type=\"text\"\r\n                  class=\"form-control\" placeholder=\"\">\r\n                <span *ngIf=\"formErrors.order_no\" class=\"help-block\" [innerHTML]=\"formErrors.order_no\"></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Order Date <em>*</em></label>\r\n              <div class=\"date-picker\">\r\n                <ng2-flatpickr [setDate]=\"orderDate\" [formControl]=\"addForm.controls['sales_order_date']\"\r\n                  [config]=\"exampleOptions\">\r\n                </ng2-flatpickr>\r\n                <span class=\"date-picker-icon\">\r\n                  <span class=\"fa fa-calendar\"></span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Client <em>*</em></label>\r\n              <ng-select [formControl]=\"addForm.controls['client_id']\" [items]=\"clientListArray\" bindLabel=\"label\"\r\n                bindValue=\"value\" placeholder=\"Select Client\" (change)=\"getShippingAddressData(true)\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-4\" *ngIf=\"addForm.controls['client_id'].valid\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Shipping Address <em>*</em></label>\r\n              <ng-select [formControl]=\"addForm.controls['shipping_address_id']\" [items]=\"shippingListArray\"\r\n                bindLabel=\"label\" [multiple]=\"true\" bindValue=\"value\" placeholder=\"Select Shipping Address\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-4\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Invoice No. </label>\r\n              <input [formControl]=\"addForm.controls['invoice_no']\" type=\"text\" class=\"form-control\" placeholder=\"\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n        <div class=\"row mt-5\">\r\n          <div class=\"col-7 d-flex align-items-center\">\r\n            <h5>Product</h5>\r\n          </div>\r\n          <div class=\"col-5 text-right\">\r\n            <button type=\"button\" class=\"btn btn-light\" (click)=\"addform()\">\r\n              <i class=\"la la-plus\"></i>\r\n              Add Product\r\n            </button><br>\r\n            <span *ngIf=\"formErrors.product\" class=\"help-block\" [innerHTML]=\"formErrors.product\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"row mt-3\">\r\n          <div class=\"col\">\r\n            <div class=\"table-responsive-md\">\r\n              <table class=\"table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>No.</th>\r\n                    <th>Product</th>\r\n                    <th>Sku No</th>\r\n                    <th>Order Quantity</th>\r\n                    <th>Price</th>\r\n                    <th>Total Price</th>\r\n                    <th class=\"text-right\" width=\"80\">Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of objectArray; let i=index\">\r\n                    <td>{{i+1}}</td>\r\n                    <td>{{item?.product_name}}</td>\r\n                    <td>{{item?.sku_no}}</td>\r\n                    <td>{{item?.qty}}</td>\r\n                    <td>{{currentCompany?.currency?.label }} {{item?.price}}</td>\r\n                    <td>{{currentCompany?.currency?.label }} {{(item?.qty) * (item?.price) | number}}</td>\r\n                    <td>\r\n                      <div class=\"action-drop dropdown text-right\">\r\n                        <a href=\"#\" data-toggle=\"dropdown\" class=\"btn shadow-none btn-default btn-sm btn-icon-only\"\r\n                          title=\"\">\r\n                          <i class=\"fa fa-ellipsis-h\"></i>\r\n                        </a>\r\n                        <div class=\"dropdown-menu dropdown-icon-menu drop-menu-right\" style=\"width: 100px;\">\r\n                          <a *ngIf=\"isEditing\" class=\"dropdown-item\"\r\n                            (click)=\"editform(item?.sales_order_detail_id,i,item)\"><i\r\n                              class=\"fa fa-edit fa-fw text-primary\">\r\n                            </i> Edit</a>\r\n                          <a class=\"dropdown-item\" (click)=\"deleteObject(item,i)\">\r\n                            <i class=\"fa fa-trash fa-fw text-primary\"></i>\r\n                            Delete\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr *ngIf=\"!loadingState && objectArray.length === 0\">\r\n                    <td colspan=\"7\">No records found</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <pagination [paginationList]=\"pagination\" [currentPage]=\"currentPage\" (onPageChange)=\"getPage($event)\">\r\n            </pagination>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-5\">\r\n            <div class=\"form-group\">\r\n              <label class=\"control-label text-md-right\">Notes</label>\r\n              <textarea [formControl]=\"addForm.controls['notes']\" class=\"form-control\" rows=\"2\"></textarea>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-right border-top py-4 mt-5 card-footer\">\r\n        <button type=\"button\" class=\"btn btn-light\" routerLink=\"/outbound/sales-order\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-secondary ml-2\">Submit</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<app-add-sales-product (onRelodeEvent)=\"onRelodeEvent($event)\" [ProductList]=\"objectArray\"\r\n  [orderNo]=\"addForm.value.sales_order_no\" (onProductSubmit)=\"onProductSubmit($event)\"></app-add-sales-product>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedFormValidationControlErrorControlErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p class=\"help is-danger\" [class.hide]=\"_hide\" [innerHTML]=\"_text\"></p>";
    /***/
  },

  /***/
  "./src/app/common-module/add-sales-product/add-sales-product.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/common-module/add-sales-product/add-sales-product.component.ts ***!
    \********************************************************************************/

  /*! exports provided: AddSalesProductComponent */

  /***/
  function srcAppCommonModuleAddSalesProductAddSalesProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSalesProductComponent", function () {
      return AddSalesProductComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common */
    "./src/app/common.ts");
    /* harmony import */


    var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/sales-order.service */
    "./src/app/service/sales-order.service.ts");

    var AddSalesProductComponent =
    /*#__PURE__*/
    function () {
      function AddSalesProductComponent(fb, salesOrderService) {
        _classCallCheck(this, AddSalesProductComponent);

        this.fb = fb;
        this.salesOrderService = salesOrderService;
        this.orderNo = false;
        this.ProductList = [];
        this.onProductSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onRelodeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.brandListArray = [];
        this.productListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
          apierror: null,
          product_id: null,
          qty: null
        };
        this.productIdList = [];
        this.isEditing = false;
        this.index = false;
        this.productAddForm = this.fb.group({
          order_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          sku_no: [null],
          brand_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          product_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          available_qty: [null],
          qty: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          price: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          amount: [0]
        });
      }

      _createClass(AddSalesProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addObject",
        value: function addObject() {
          this.resetForm();
          $('#AddSalesOrderProduct').modal('show');
          this.getMasterData();
          this.productAddForm.patchValue({
            order_no: this.orderNo
          });
        }
      }, {
        key: "editObject",
        value: function editObject(id, index, data, order_id, order_no) {
          this.order_id = order_id;
          this.getMasterData();
          this.resetForm();
          $('#AddSalesOrderProduct').modal('show');
          this.productAddForm.patchValue({
            order_no: order_no,
            sku_no: data.sku_no,
            brand_id: data.brand_id,
            product_id: data.product_id,
            qty: data.qty,
            price: data.price,
            amount: data.amount
          });
          this.getMasterData();

          if (id) {
            this.isEditing = true;
            this.editId = id;
          } else {
            this.index = index;
          }
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this = this;

          var params = {};
          var brand_id = this.productAddForm.value.brand_id;

          if (brand_id) {
            params.brand_id = brand_id;
          }

          this.salesOrderService.getSalesOrderProductMasterData(params).subscribe(function (response) {
            if (response.success) {
              if (brand_id) {
                _this.productListArray = response.data.product ? response.data.product : [];

                _this.productListArray.map(function (res) {
                  if (res.value == _this.productAddForm.value.product_id) {
                    _this.productAddForm.patchValue({
                      available_qty: res.qty
                    });
                  }
                });
              } else {
                _this.brandListArray = response.data.brand ? response.data.brand : [];
              }
            }
          });
        }
      }, {
        key: "checkProductAddedd",
        value: function checkProductAddedd(event) {
          var selected_product_id = this.productAddForm.value.product_id;
          var already_added = false;
          this.ProductList.filter(function (obj) {
            if (selected_product_id == obj.product_id) {
              already_added = true;
            }
          });

          if (already_added) {
            this.formErrors.product_id = "* Product Allredy Exit.";
            this.showLoader = true;
          } else {
            this.formErrors.product_id = null;
            this.productAddForm.patchValue({
              sku_no: event.sku_no,
              available_qty: event.qty,
              amount: event.amount
            });
            this.showLoader = false;
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this2 = this;

          var product_name; // this.qunatitycheck();

          if (formData.valid) {
            this.showLoader = true;
            this.productListArray.filter(function (item) {
              if (item.value == formData.value.product_id) {
                product_name = item.label;
              }
            });
            var data = {};
            data.order_no = formData.value.order_no;
            data.sku_no = formData.value.sku_no;
            data.product_id = formData.value.product_id;
            data.brand_id = formData.value.brand_id;
            data.product_name = product_name;
            data.qty = formData.value.qty;
            data.price = formData.value.price;
            data.amount = Number(formData.value.price * formData.value.qty);

            if (this.isEditing) {
              data.order_id = this.order_id;
              this.salesOrderService.editSalesOrderProduct(this.editId, data).subscribe(function (response) {
                if (response.success) {
                  _this2.onRelodeEvent.emit(true);
                }
              }, function (error) {
                _this2.showLoader = false;
              });
              $('#AddSalesOrderProduct').modal('hide');
            } else {
              if (this.orderNo) {
                data.index = this.index;
                this.onProductSubmit.emit(data);
                this.showLoader = false;
                $('#AddSalesOrderProduct').modal('hide');
              }
            }
          }
        }
      }, {
        key: "qunatitycheck",
        value: function qunatitycheck() {
          var qty = Number(this.productAddForm.value.qty);
          var available_qty = Number(this.productAddForm.value.available_qty);

          if (qty <= available_qty) {
            this.formErrors.qty = null;
            this.productAddForm.controls['qty'].setErrors(null);
          } else {
            this.formErrors.qty = "* Please Enter equval or small value in Available Qunatity";
            this.productAddForm.controls['qty'].setErrors({
              'incorrect': true
            });
          }
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.loadingState = false;
          this.isEditing = false;
          this.editId = null;
          src_app_common__WEBPACK_IMPORTED_MODULE_3__["CommonFunction"].resetForm(this.productAddForm, this.formErrors);
        }
      }]);

      return AddSalesProductComponent;
    }();

    AddSalesProductComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_4__["SalesOrderService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddSalesProductComponent.prototype, "orderNo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AddSalesProductComponent.prototype, "ProductList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddSalesProductComponent.prototype, "onProductSubmit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AddSalesProductComponent.prototype, "onRelodeEvent", void 0);
    AddSalesProductComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-sales-product',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-sales-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/common-module/add-sales-product/add-sales-product.component.html")).default
    })], AddSalesProductComponent);
    /***/
  },

  /***/
  "./src/app/common-module/add-sales-product/add-sales-product.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/common-module/add-sales-product/add-sales-product.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: AddSalesProductModule */

  /***/
  function srcAppCommonModuleAddSalesProductAddSalesProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSalesProductModule", function () {
      return AddSalesProductModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_service_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/order.service */
    "./src/app/service/order.service.ts");
    /* harmony import */


    var _add_sales_product_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-sales-product.component */
    "./src/app/common-module/add-sales-product/add-sales-product.component.ts");

    var AddSalesProductModule = function AddSalesProductModule() {
      _classCallCheck(this, AddSalesProductModule);
    };

    AddSalesProductModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_sales_product_component__WEBPACK_IMPORTED_MODULE_8__["AddSalesProductComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_6__["FormValidationModule"]],
      exports: [_add_sales_product_component__WEBPACK_IMPORTED_MODULE_8__["AddSalesProductComponent"]],
      providers: [src_app_service_order_service__WEBPACK_IMPORTED_MODULE_7__["OrderService"]]
    })], AddSalesProductModule);
    /***/
  },

  /***/
  "./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: AddSalesOrderComponent */

  /***/
  function srcAppPagesOutboundSalesOrderAddSalesOrderAddSalesOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSalesOrderComponent", function () {
      return AddSalesOrderComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/common */
    "./src/app/common.ts");
    /* harmony import */


    var src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/service/pagination.service */
    "./src/app/service/pagination.service.ts");
    /* harmony import */


    var src_app_messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/messages */
    "./src/app/messages.ts");
    /* harmony import */


    var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/service/sales-order.service */
    "./src/app/service/sales-order.service.ts");
    /* harmony import */


    var src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/service/common.service */
    "./src/app/service/common.service.ts");
    /* harmony import */


    var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/data.service */
    "./src/app/service/data.service.ts");
    /* harmony import */


    var src_app_common_module_add_sales_product_add_sales_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/common-module/add-sales-product/add-sales-product.component */
    "./src/app/common-module/add-sales-product/add-sales-product.component.ts");

    var AddSalesOrderComponent =
    /*#__PURE__*/
    function () {
      function AddSalesOrderComponent(router, activatedRoute, fb, salesOrderService, paginationService, cdr, commonService, dataservice) {
        _classCallCheck(this, AddSalesOrderComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.salesOrderService = salesOrderService;
        this.paginationService = paginationService;
        this.cdr = cdr;
        this.commonService = commonService;
        this.dataservice = dataservice;
        this.PageTitle = "Sales Order";
        this.exampleOptions = {
          defaultDate: new Date(),
          dateFormat: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["DATEFORMAT"] //enableTime: true

        };
        this.shippingListArray = [];
        this.countryListArray = [];
        this.objectArray = [];
        this.clientListArray = [];
        this.loadingState = false;
        this.showLoader = false;
        this.formErrors = {
          apierror: null,
          order_no: null,
          product: null
        };
        this.isEditing = false;
        this.editId = null;
        this.orderId = false;
        this.currentPage = 1;

        if (this.activatedRoute.snapshot.paramMap.get('id')) {
          this.isEditing = true;
          this.editId = this.activatedRoute.snapshot.paramMap.get('id');
        }

        this.addForm = this.fb.group({
          sales_order_no: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          sales_order_date: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          shipping_address_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          client_id: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
          notes: [null],
          invoice_no: [""]
        });
      }

      _createClass(AddSalesOrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.dataservice.currentCompany.subscribe(function (response) {
            _this3.currentCompany = response;
          });
          this.addForm.patchValue({
            sales_order_date: new Date()
          });
          this.getMasterData();
          this.getCountryList();

          if (this.isEditing) {
            this.getEditObject();
            this.getOrderProductList();
          }
        }
      }, {
        key: "getCountryName",
        value: function getCountryName(data) {
          this.addForm.patchValue({
            country_name: data.label
          });
        }
      }, {
        key: "getCountryList",
        value: function getCountryList() {
          var _this4 = this;

          this.commonService.getCountryList().subscribe(function (res) {
            if (res.success) {
              _this4.countryListArray = res.data.country_list;
            }
          });
        }
      }, {
        key: "getMasterData",
        value: function getMasterData() {
          var _this5 = this;

          this.salesOrderService.getSalesOrderMasterData().subscribe(function (response) {
            if (response.success) {
              _this5.clientListArray = response.data.client;
            }
          });
        }
      }, {
        key: "getShippingAddressData",
        value: function getShippingAddressData(temp) {
          var _this6 = this;

          if (temp) {
            this.addForm.patchValue({
              shipping_address_id: ''
            });
          }

          this.salesOrderService.getShippingAddressData(this.addForm.value.client_id).subscribe(function (response) {
            if (response.success) {
              _this6.shippingListArray = response.data.shipping_address;
            }
          });
        }
      }, {
        key: "getOrderProductList",
        value: function getOrderProductList() {
          var _this7 = this;

          var params = {
            sales_order_id: this.editId
          };
          this.salesOrderService.getSalesOrderProductList(params).subscribe(function (response) {
            _this7.loadingState = false;

            if (response.success && response.data) {
              _this7.objectArray = response.data.list;
              _this7.pagination = _this7.paginationService.getPager(response.data.pagination['total_page'], _this7.currentPage);
            } else {
              _this7.objectArray = [];
              _this7.pagination = null;
            }
          }, function (error) {
            _this7.loadingState = false;
            _this7.objectArray = [];
            _this7.pagination = null;
          });
        }
      }, {
        key: "getEditObject",
        value: function getEditObject() {
          var _this8 = this;

          this.salesOrderService.getSalesOrderById(this.editId).subscribe(function (response) {
            if (response.success) {
              _this8.orderDate = response.data.sales_order_date;

              _this8.addForm.patchValue({
                sales_order_no: response.data.sales_order_no,
                shipping_address_id: response.data.shipping_address_id ? response.data.shipping_address_id : [],
                client_id: response.data.client_id,
                sales_order_date: response.data.sales_order_date,
                notes: response.data.notes ? response.data.notes : '',
                invoice_no: response.data.invoice_no
              });

              _this8.getShippingAddressData(false);
            } else {
              _this8.router.navigateByUrl('/outbound/sales-order');
            }
          });
        }
      }, {
        key: "getPage",
        value: function getPage(page) {
          this.currentPage = page;
          this.currentPage = 1;
          this.getOrderProductList();
        }
      }, {
        key: "onProductSubmit",
        value: function onProductSubmit(data) {
          if (data) {
            if (data.index) {
              this.objectArray[data.index] = data;
            } else {
              this.objectArray.push(data);
            }
          }

          if (this.objectArray && this.objectArray.length > 0) {
            this.formErrors.product = null;
          } else {
            this.formErrors.product = "* Please Add Product";
          }
        }
      }, {
        key: "submitForm",
        value: function submitForm(formData) {
          var _this9 = this;

          if (formData.valid) {
            if (this.objectArray && this.objectArray.length > 0) {
              this.formErrors.product = null;
              this.showLoader = true;
              var data = new FormData();
              data.append('sales_order_no', formData.value.sales_order_no);
              data.append('sales_order_date', src_app_common__WEBPACK_IMPORTED_MODULE_4__["CommonFunction"].changedateFormate(formData.value.sales_order_date[0]));

              if (this.addForm.value.shipping_address_id.length > 0) {
                data.append('shipping_address_id', JSON.stringify(this.addForm.value.shipping_address_id));
              }

              data.append('client_id', formData.value.client_id);
              data.append('invoice_no', formData.value.invoice_no);
              data.append('notes', formData.value.notes ? formData.value.notes : '');

              if (this.isEditing) {
                this.salesOrderService.editSalesOrder(this.editId, data).subscribe(function (response) {
                  _this9.showLoader = false;

                  if (response.success) {
                    if (_this9.objectArray && _this9.objectArray.length > 0) {
                      var EditobjectArray = [];

                      _this9.objectArray.filter(function (item) {
                        if (!item.sales_order_detail_id) {
                          EditobjectArray.push(item);
                        }
                      });

                      EditobjectArray.filter(function (item) {
                        item.sales_order_id = _this9.editId;
                      });

                      _this9.salesOrderService.addSalesOrderProduct(EditobjectArray).subscribe(function (res) {
                        _this9.showLoader = false;

                        if (res.success) {}
                      }, function (error) {
                        _this9.showLoader = false;
                      });
                    }

                    _this9.router.navigateByUrl('/outbound/sales-order');
                  }
                }, function (error) {
                  _this9.showLoader = false;
                });
              } else {
                this.salesOrderService.addSalesOrder(data).subscribe(function (response) {
                  _this9.showLoader = false;

                  if (response.success) {
                    var sales_order_id = response.data.sales_order_id;

                    if (_this9.objectArray && _this9.objectArray.length > 0) {
                      _this9.objectArray.filter(function (item) {
                        item.sales_order_id = sales_order_id;
                      });

                      _this9.salesOrderService.addSalesOrderProduct(_this9.objectArray).subscribe(function (res) {
                        _this9.showLoader = false;

                        if (res.success) {}
                      }, function (error) {
                        _this9.showLoader = false;
                      });
                    }

                    _this9.router.navigateByUrl('/outbound/sales-order');
                  }
                }, function (error) {
                  _this9.showLoader = false;
                });
              }
            } else {
              this.formErrors.product = "* Please Add Product";
            }
          }
        }
      }, {
        key: "addform",
        value: function addform() {
          var _this10 = this;

          if (this.addForm.value.sales_order_no) {
            setTimeout(function () {
              _this10.productAdd.addObject();

              _this10.orderDate = _this10.addForm.value.sales_order_date;
            }, 200);
          } else {
            this.formErrors.order_no = "* Please Enter Order Number";
          }
        }
      }, {
        key: "editform",
        value: function editform(id, index, data) {
          var _this11 = this;

          setTimeout(function () {
            _this11.productAdd.editObject(id, index, data, _this11.editId, _this11.addForm.value.sales_order_no);

            _this11.orderDate = _this11.addForm.value.sales_order_date;
          }, 200);
        }
      }, {
        key: "onRelodeEvent",
        value: function onRelodeEvent(value) {
          if (value) {
            this.getOrderProductList();
            this.addForm.patchValue({
              sales_order_date: new Date()
            });
          }
        }
      }, {
        key: "deleteObject",
        value: function deleteObject(object, index) {
          var _this12 = this;

          swal.fire({
            title: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_header_text,
            text: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_smalll_text,
            icon: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_dialogue_type,
            showCancelButton: true,
            confirmButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_confirm_button,
            cancelButtonText: src_app_messages__WEBPACK_IMPORTED_MODULE_6__["errorMessage"].delete_cancel_button
          }).then(function (result) {
            if (result.value) {
              if (object.sales_order_detail_id) {
                _this12.salesOrderService.deleteSalesOrderProduct(object.sales_order_detail_id).subscribe(function (response) {
                  if (response.success) {
                    _this12.getOrderProductList();
                  }
                });
              } else {
                _this12.objectArray.splice(index, 1);
              }
            }
          }).catch(swal.noop);
        }
      }, {
        key: "removeError",
        value: function removeError() {
          if (this.addForm.value.sales_order_no) {
            this.formErrors.order_no = null;
          }
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.cdr.detectChanges();
        }
      }]);

      return AddSalesOrderComponent;
    }();

    AddSalesOrderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_7__["SalesOrderService"]
      }, {
        type: src_app_service_pagination_service__WEBPACK_IMPORTED_MODULE_5__["PaginationService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: src_app_service_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }, {
        type: src_app_service_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_common_module_add_sales_product_add_sales_product_component__WEBPACK_IMPORTED_MODULE_10__["AddSalesProductComponent"], {
      static: false
    })], AddSalesOrderComponent.prototype, "productAdd", void 0);
    AddSalesOrderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-sales-order',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./add-sales-order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.html")).default
    })], AddSalesOrderComponent);
    /***/
  },

  /***/
  "./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: AddSalesOrderModule */

  /***/
  function srcAppPagesOutboundSalesOrderAddSalesOrderAddSalesOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSalesOrderModule", function () {
      return AddSalesOrderModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-flatpickr */
    "./node_modules/ng2-flatpickr/__ivy_ngcc__/fesm2015/ng2-flatpickr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-select/ng-select */
    "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
    /* harmony import */


    var src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/form-validation/form-validation.module */
    "./src/app/shared/form-validation/form-validation.module.ts");
    /* harmony import */


    var src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/common-module/pagination/pagination.module */
    "./src/app/common-module/pagination/pagination.module.ts");
    /* harmony import */


    var _add_sales_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./add-sales-order.component */
    "./src/app/pages/outbound/sales-order/add-sales-order/add-sales-order.component.ts");
    /* harmony import */


    var src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/service/sales-order.service */
    "./src/app/service/sales-order.service.ts");
    /* harmony import */


    var src_app_common_module_add_sales_product_add_sales_product_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/common-module/add-sales-product/add-sales-product.module */
    "./src/app/common-module/add-sales-product/add-sales-product.module.ts");

    var routes = [{
      path: '',
      component: _add_sales_order_component__WEBPACK_IMPORTED_MODULE_10__["AddSalesOrderComponent"]
    }];

    var AddSalesOrderModule = function AddSalesOrderModule() {
      _classCallCheck(this, AddSalesOrderModule);
    };

    AddSalesOrderModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_add_sales_order_component__WEBPACK_IMPORTED_MODULE_10__["AddSalesOrderComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), src_app_common_module_add_sales_product_add_sales_product_module__WEBPACK_IMPORTED_MODULE_12__["AddSalesProductModule"], ng2_flatpickr__WEBPACK_IMPORTED_MODULE_4__["Ng2FlatpickrModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"], src_app_common_module_pagination_pagination_module__WEBPACK_IMPORTED_MODULE_9__["PaginationModule"], src_app_shared_form_validation_form_validation_module__WEBPACK_IMPORTED_MODULE_8__["FormValidationModule"]],
      providers: [src_app_service_sales_order_service__WEBPACK_IMPORTED_MODULE_11__["SalesOrderService"]]
    })], AddSalesOrderModule);
    /***/
  },

  /***/
  "./src/app/shared/directive/number.directive.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/directive/number.directive.ts ***!
    \******************************************************/

  /*! exports provided: NumberDirective, FloatNumberDirective */

  /***/
  function srcAppSharedDirectiveNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberDirective", function () {
      return NumberDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FloatNumberDirective", function () {
      return FloatNumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NumberDirective =
    /*#__PURE__*/
    function () {
      function NumberDirective(_el) {
        _classCallCheck(this, NumberDirective);

        this._el = _el;
      }

      _createClass(NumberDirective, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var e = event;

          if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 || // Allow: Ctrl+A
          e.keyCode === 65 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+C
          // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+V
          // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+X
          e.keyCode === 88 && (e.ctrlKey || e.metaKey) || // Allow: home, end, left, right
          e.keyCode >= 35 && e.keyCode <= 39) {
            // let it happen, don't do anything
            return;
          } // Ensure that it is a number and stop the keypress


          if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105 || e.keyCode === 110 || e.keyCode === 190)) {
            e.preventDefault();
          }
        }
      }]);

      return NumberDirective;
    }();

    NumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], NumberDirective.prototype, "onKeyDown", null);
    NumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[number]'
    })], NumberDirective);

    var FloatNumberDirective =
    /*#__PURE__*/
    function () {
      function FloatNumberDirective(_el) {
        _classCallCheck(this, FloatNumberDirective);

        this._el = _el;
      }

      _createClass(FloatNumberDirective, [{
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var e = event;

          if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 || // Allow: Ctrl+A
          e.keyCode === 65 && (e.ctrlKey || e.metaKey) || // Allow: Ctrl+C
          // (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+V
          // (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
          // Allow: Ctrl+X
          e.keyCode === 88 && (e.ctrlKey || e.metaKey) || // Allow: home, end, left, right
          e.keyCode >= 35 && e.keyCode <= 39) {
            // let it happen, don't do anything
            return;
          } // Ensure that it is a number and stop the keypress


          if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
          }
        }
      }]);

      return FloatNumberDirective;
    }();

    FloatNumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])], FloatNumberDirective.prototype, "onKeyDown", null);
    FloatNumberDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[floatNumber]'
    })], FloatNumberDirective);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/control-error/control-error.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/shared/form-validation/control-error/control-error.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: ControlErrorComponent */

  /***/
  function srcAppSharedFormValidationControlErrorControlErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlErrorComponent", function () {
      return ControlErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ControlErrorComponent =
    /*#__PURE__*/
    function () {
      function ControlErrorComponent(cdr) {
        _classCallCheck(this, ControlErrorComponent);

        this.cdr = cdr;
        this._hide = true;
      }

      _createClass(ControlErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "text",
        set: function set(value) {
          if (value !== this._text) {
            this._text = value;
            this._hide = !value;
            this.cdr.detectChanges();
          }
        }
      }]);

      return ControlErrorComponent;
    }();

    ControlErrorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlErrorComponent.prototype, "text", null);
    ControlErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-control-error',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./control-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/form-validation/control-error/control-error.component.html")).default,
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
    })], ControlErrorComponent);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/directive/control-error-container.directive.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/shared/form-validation/directive/control-error-container.directive.ts ***!
    \***************************************************************************************/

  /*! exports provided: ControlErrorContainerDirective */

  /***/
  function srcAppSharedFormValidationDirectiveControlErrorContainerDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlErrorContainerDirective", function () {
      return ControlErrorContainerDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ControlErrorContainerDirective = function ControlErrorContainerDirective(vcr) {
      _classCallCheck(this, ControlErrorContainerDirective);

      this.vcr = vcr;
    };

    ControlErrorContainerDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }];
    };

    ControlErrorContainerDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[controlErrorContainer]'
    })], ControlErrorContainerDirective);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/directive/control-errors.directive.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/form-validation/directive/control-errors.directive.ts ***!
    \******************************************************************************/

  /*! exports provided: ControlErrorsDirective */

  /***/
  function srcAppSharedFormValidationDirectiveControlErrorsDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlErrorsDirective", function () {
      return ControlErrorsDirective;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../control-error/control-error.component */
    "./src/app/shared/form-validation/control-error/control-error.component.ts");
    /* harmony import */


    var _control_error_container_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./control-error-container.directive */
    "./src/app/shared/form-validation/directive/control-error-container.directive.ts");
    /* harmony import */


    var _form_submit_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./form-submit.directive */
    "./src/app/shared/form-validation/directive/form-submit.directive.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _form_errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../form-errors */
    "./src/app/shared/form-validation/form-errors.ts");

    var ControlErrorsDirective =
    /*#__PURE__*/
    function () {
      function ControlErrorsDirective(vcr, resolver, controlErrorContainer, form, controlDir) {
        _classCallCheck(this, ControlErrorsDirective);

        this.vcr = vcr;
        this.resolver = resolver;
        this.form = form;
        this.controlDir = controlDir;
        this.customErrors = {};
        this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
        this.submit$ = this.form ? this.form.submit$ : rxjs__WEBPACK_IMPORTED_MODULE_6__["EMPTY"];
      }

      _createClass(ControlErrorsDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          if (this.control && this.control.valueChanges) {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this.control.valueChanges, this.submit$).subscribe(function (v) {
              var controlErrors = _this13.control.errors;

              if (controlErrors) {
                var control_name = _this13.getFormControlName(_this13.control); // console.log(control_name, controlErrors);


                var firstKey = Object.keys(controlErrors)[0];
                var messages = _form_errors__WEBPACK_IMPORTED_MODULE_7__["VALIDATION_MESSAGES"][control_name];

                if (messages !== undefined && messages !== null && messages !== '') {
                  _this13.setError(messages[firstKey]);
                }
              } else if (_this13.ref) {
                _this13.setError(null);
              }
            });
          }
        }
      }, {
        key: "getFormControlName",
        value: function getFormControlName(c) {
          var formGroup = c.parent.controls;
          return Object.keys(formGroup).find(function (name) {
            return c === formGroup[name];
          }) || null;
        }
      }, {
        key: "setError",
        value: function setError(text) {
          if (!this.ref) {
            var factory = this.resolver.resolveComponentFactory(_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_3__["ControlErrorComponent"]);
            this.ref = this.container.createComponent(factory);
          }

          this.ref.instance.text = text;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "control",
        get: function get() {
          return this.controlDir.control;
        }
      }]);

      return ControlErrorsDirective;
    }();

    ControlErrorsDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }, {
        type: _control_error_container_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorContainerDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _form_submit_directive__WEBPACK_IMPORTED_MODULE_5__["FormSubmitDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlErrorsDirective.prototype, "customErrors", void 0);
    ControlErrorsDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[formControl], [formControlName]'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], ControlErrorsDirective);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/directive/form-submit.directive.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/shared/form-validation/directive/form-submit.directive.ts ***!
    \***************************************************************************/

  /*! exports provided: FormSubmitDirective */

  /***/
  function srcAppSharedFormValidationDirectiveFormSubmitDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormSubmitDirective", function () {
      return FormSubmitDirective;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FormSubmitDirective =
    /*#__PURE__*/
    function () {
      function FormSubmitDirective(host) {
        var _this14 = this;

        _classCallCheck(this, FormSubmitDirective);

        this.host = host;
        this.submit$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.element, 'submit').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
          if (_this14.element.classList.contains('submitted') === false) {
            _this14.element.classList.add('submitted');
          }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
      }

      _createClass(FormSubmitDirective, [{
        key: "element",
        get: function get() {
          return this.host.nativeElement;
        }
      }]);

      return FormSubmitDirective;
    }();

    FormSubmitDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    FormSubmitDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'form'
    })], FormSubmitDirective);
    /***/
  },

  /***/
  "./src/app/shared/form-validation/form-errors.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/form-validation/form-errors.ts ***!
    \*******************************************************/

  /*! exports provided: VALIDATION_MESSAGES */

  /***/
  function srcAppSharedFormValidationFormErrorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VALIDATION_MESSAGES", function () {
      return VALIDATION_MESSAGES;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VALIDATION_MESSAGES = {
      first_name: {
        required: "* Please enter first name"
      },
      last_name: {
        required: "* Please enter last name"
      },
      email: {
        required: "* Please enter email",
        email: "* Please enter valid email",
        validateEmail: "* Please enter valid email"
      },
      phone_number: {
        required: "Please enter phone number",
        minlength: "Please enter at least 8 digits",
        maxlength: "Please enter at least 18 digits"
      },
      password: {
        required: "* Please enter password",
        pattern: "* Password must contains at least 6 characters"
      },
      confirm_password: {
        required: "* Please enter confirm password",
        validatePassword: "* Your Password is not matched"
      },
      login_pin: {
        required: "* Please enter PIN",
        maxlength: "Pin Max 4 Digit",
        minlength: "Please enter at least 4 digits"
      },
      number_tag_to_create: {
        required: "* Please enter vlaue",
        max: "Maximum 100",
        min: " Minimum 1"
      }
    };
    /***/
  },

  /***/
  "./src/app/shared/form-validation/form-validation.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/shared/form-validation/form-validation.module.ts ***!
    \******************************************************************/

  /*! exports provided: FormValidationModule */

  /***/
  function srcAppSharedFormValidationFormValidationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormValidationModule", function () {
      return FormValidationModule;
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


    var _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directive/form-submit.directive */
    "./src/app/shared/form-validation/directive/form-submit.directive.ts");
    /* harmony import */


    var _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./directive/control-errors.directive */
    "./src/app/shared/form-validation/directive/control-errors.directive.ts");
    /* harmony import */


    var _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directive/control-error-container.directive */
    "./src/app/shared/form-validation/directive/control-error-container.directive.ts");
    /* harmony import */


    var _control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./control-error/control-error.component */
    "./src/app/shared/form-validation/control-error/control-error.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var FormValidationModule = function FormValidationModule() {
      _classCallCheck(this, FormValidationModule);
    };

    FormValidationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
      declarations: [_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"], _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__["ControlErrorContainerDirective"], _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorsDirective"], _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__["FormSubmitDirective"]],
      exports: [_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"], _directive_control_error_container_directive__WEBPACK_IMPORTED_MODULE_5__["ControlErrorContainerDirective"], _directive_control_errors_directive__WEBPACK_IMPORTED_MODULE_4__["ControlErrorsDirective"], _directive_form_submit_directive__WEBPACK_IMPORTED_MODULE_3__["FormSubmitDirective"]],
      entryComponents: [_control_error_control_error_component__WEBPACK_IMPORTED_MODULE_6__["ControlErrorComponent"]]
    })], FormValidationModule);
    /***/
  },

  /***/
  "./src/app/shared/pipe/status.pipe.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/pipe/status.pipe.ts ***!
    \********************************************/

  /*! exports provided: TransactionStatusPipe, PricePipe, TransactionIconsPipe */

  /***/
  function srcAppSharedPipeStatusPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionStatusPipe", function () {
      return TransactionStatusPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PricePipe", function () {
      return PricePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionIconsPipe", function () {
      return TransactionIconsPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TransactionStatusPipe =
    /*#__PURE__*/
    function () {
      function TransactionStatusPipe() {
        _classCallCheck(this, TransactionStatusPipe);
      }

      _createClass(TransactionStatusPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var text = null;

          if (value) {
            switch (value.value) {
              case 1:
                text = "<small class=\"badge badge-pill badge-default\">".concat(value.label, "</small>");
                break;

              case 2:
                text = "<small class=\"badge badge-pill badge-primary\">".concat(value.label, "</small>");
                break;

              case 3:
                text = "<small class=\"badge badge-pill badge-success\">".concat(value.label, "</small>");
                break;

              case 4:
                text = "<small class=\"badge badge-pill badge-danger\">".concat(value.label, "</small>");
                break;

              default:
                text = null;
                break;
            }

            return text;
          }
        }
      }]);

      return TransactionStatusPipe;
    }();

    TransactionStatusPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'transactionStatus'
    })], TransactionStatusPipe);

    var PricePipe =
    /*#__PURE__*/
    function () {
      function PricePipe() {
        _classCallCheck(this, PricePipe);
      }

      _createClass(PricePipe, [{
        key: "transform",
        value: function transform(value, args) {
          return value ? parseFloat(value).toLocaleString(undefined, {
            minimumFractionDigits: 2
          }) : '00'; // return parseFloat(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }
      }]);

      return PricePipe;
    }();

    PricePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'price'
    })], PricePipe);

    var TransactionIconsPipe =
    /*#__PURE__*/
    function () {
      function TransactionIconsPipe() {
        _classCallCheck(this, TransactionIconsPipe);
      }

      _createClass(TransactionIconsPipe, [{
        key: "transform",
        value: function transform(value, args) {
          var text = null;

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
      }]);

      return TransactionIconsPipe;
    }();

    TransactionIconsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'transactionIcons'
    })], TransactionIconsPipe);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directive/number.directive */
    "./src/app/shared/directive/number.directive.ts");
    /* harmony import */


    var _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pipe/status.pipe */
    "./src/app/shared/pipe/status.pipe.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"], _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionStatusPipe"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionIconsPipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["NumberDirective"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["PricePipe"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionStatusPipe"], _pipe_status_pipe__WEBPACK_IMPORTED_MODULE_4__["TransactionIconsPipe"], _directive_number_directive__WEBPACK_IMPORTED_MODULE_3__["FloatNumberDirective"]]
    })], SharedModule);
    /***/
  }
}]);
//# sourceMappingURL=add-sales-order-add-sales-order-module-es5.js.map