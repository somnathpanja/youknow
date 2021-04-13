(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/somnath/workspace/youknow/monitor/client/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "CBUe":
    /*!*********************************************************!*\
      !*** ./src/app/components/servers/servers.component.ts ***!
      \*********************************************************/

    /*! exports provided: ServersComponent */

    /***/
    function CBUe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServersComponent", function () {
        return ServersComponent;
      });
      /* harmony import */


      var _models_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../models/server */
      "jL0J");
      /* harmony import */


      var _server_config_server_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../server-config/server-config.component */
      "Ey2G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _services_servers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/servers.service */
      "xeQw");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");

      function ServersComponent_th_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Server ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ServersComponent_td_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.agent_id, " ");
        }
      }

      function ServersComponent_th_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " IP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ServersComponent_td_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r19.ip, " ");
        }
      }

      function ServersComponent_th_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ServersComponent_td_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r20.details, " ");
        }
      }

      function ServersComponent_th_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " CPUs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ServersComponent_td_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r21.cpu_count, " ");
        }
      }

      function ServersComponent_th_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Platform ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ServersComponent_td_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r22 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r22.platform, " ");
        }
      }

      function ServersComponent_th_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 15);
        }
      }

      function ServersComponent_td_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ServersComponent_th_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 15);
        }
      }

      function ServersComponent_td_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServersComponent_td_22_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26);

            var element_r24 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r25.openServerEditDialog(element_r24);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ServersComponent_th_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 15);
        }
      }

      function ServersComponent_td_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServersComponent_td_25_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29);

            var element_r27 = ctx.$implicit;

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r28.viewBtnClick(element_r27);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "insert_chart");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function ServersComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 20);
        }
      }

      function ServersComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 21);
        }
      }

      var _c0 = function _c0() {
        return [5, 10, 20];
      };

      var ServersComponent = /*#__PURE__*/function () {
        function ServersComponent(serversService, configDialog, router) {
          _classCallCheck(this, ServersComponent);

          this.serversService = serversService;
          this.configDialog = configDialog;
          this.router = router;
          this.displayedColumns = [];
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
        }

        _createClass(ServersComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this = this;

            this.serversService.getServers().subscribe(function (servers) {
              _this.displayedColumns = ['agent_id', 'ip', 'details', 'cpu_count', 'platform', 'delete', 'edit', 'watch'];
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](servers);
              _this.dataSource.paginator = _this.paginator;
            });
          }
        }, {
          key: "openServerEditDialog",
          value: function openServerEditDialog(server) {
            var _this2 = this;

            var self = this;
            this.oldServer = server;
            this.selectedServer = _models_server__WEBPACK_IMPORTED_MODULE_0__["Server"].clone(server);
            var dialogRef = this.configDialog.open(_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_1__["ServerConfigComponent"], {
              data: this.selectedServer,
              width: '30%',
              // minHeight: 'calc(100vh - 90px)',
              height: 'auto'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this2.serversService.updateServer(_this2.oldServer.agent_id, _this2.selectedServer).then(function (data) {
                  console.log(data);
                  _this2.oldServer = _this2.selectedServer;
                })["catch"](function (err) {
                  console.log('error=', err);
                });
              }
            });
          }
        }, {
          key: "viewBtnClick",
          value: function viewBtnClick(server) {
            this.router.navigateByUrl('/server?agent_id=' + server.agent_id);
          }
        }, {
          key: "addNewServer",
          value: function addNewServer() {
            var _this3 = this;

            this.selectedServer = _models_server__WEBPACK_IMPORTED_MODULE_0__["Server"].clone({});
            var dialogRef = this.configDialog.open(_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_1__["ServerConfigComponent"], {
              data: this.selectedServer
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (result) {
                _this3.serversService.addServer(_this3.selectedServer).then(function (data) {
                  console.log(data);
                })["catch"](function (err) {
                  console.log('error=', err);
                });
              }
            });
          }
        }]);

        return ServersComponent;
      }();

      ServersComponent.ɵfac = function ServersComponent_Factory(t) {
        return new (t || ServersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_servers_service__WEBPACK_IMPORTED_MODULE_5__["ServersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      ServersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: ServersComponent,
        selectors: [["app-servers"]],
        viewQuery: function ServersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
          }
        },
        decls: 29,
        vars: 5,
        consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "agent_id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ip"], ["matColumnDef", "details"], ["matColumnDef", "cpu_count"], ["matColumnDef", "platform"], ["matColumnDef", "delete"], ["matColumnDef", "edit"], ["matColumnDef", "watch"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "color", "warn", "aria-label", "Detach the server"], ["mat-icon-button", "", "color", "warn", "aria-label", "Edit the server", 3, "click"], ["mat-icon-button", "", "color", "warn", "aria-label", "Watch the server", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
        template: function ServersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ServersComponent_th_3_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ServersComponent_td_4_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ServersComponent_th_6_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ServersComponent_td_7_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ServersComponent_th_9_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ServersComponent_td_10_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](11, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ServersComponent_th_12_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ServersComponent_td_13_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](14, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ServersComponent_th_15_Template, 2, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ServersComponent_td_16_Template, 2, 1, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](17, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ServersComponent_th_18_Template, 1, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ServersComponent_td_19_Template, 4, 0, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](20, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, ServersComponent_th_21_Template, 1, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, ServersComponent_td_22_Template, 4, 0, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](23, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ServersComponent_th_24_Template, 1, 0, "th", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ServersComponent_td_25_Template, 4, 0, "td", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, ServersComponent_tr_26_Template, 1, 0, "tr", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ServersComponent_tr_27_Template, 1, 0, "tr", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "mat-paginator", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-column-delete[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n\n.mat-column-edit[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n\n.mat-column-watch[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzZXJ2ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNvbHVtbi1kZWxldGUge1xuICB3aWR0aDogMnJlbTtcbn1cblxuLm1hdC1jb2x1bW4tZWRpdCB7XG4gIHdpZHRoOiAycmVtO1xufVxuXG4ubWF0LWNvbHVtbi13YXRjaCB7XG4gIHdpZHRoOiAycmVtO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ServersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-servers',
            templateUrl: './servers.component.html',
            styleUrls: ['./servers.component.css']
          }]
        }], function () {
          return [{
            type: _services_servers_service__WEBPACK_IMPORTED_MODULE_5__["ServersService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, {
          paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
          }]
        });
      })();
      /***/

    },

    /***/
    "D9WN":
    /*!***************************************************!*\
      !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
      \***************************************************/

    /*! no static exports found */

    /***/
    function D9WN(module, exports, __webpack_require__) {
      var map = {
        "./af": "ggbP",
        "./af.js": "ggbP",
        "./ar": "zaxx",
        "./ar-dz": "fyYX",
        "./ar-dz.js": "fyYX",
        "./ar-kw": "jogf",
        "./ar-kw.js": "jogf",
        "./ar-ly": "zWXE",
        "./ar-ly.js": "zWXE",
        "./ar-ma": "6Nbo",
        "./ar-ma.js": "6Nbo",
        "./ar-sa": "ooRU",
        "./ar-sa.js": "ooRU",
        "./ar-tn": "ZPeb",
        "./ar-tn.js": "ZPeb",
        "./ar.js": "zaxx",
        "./az": "sTnJ",
        "./az.js": "sTnJ",
        "./be": "mOKi",
        "./be.js": "mOKi",
        "./bg": "oaWn",
        "./bg.js": "oaWn",
        "./bm": "TQ38",
        "./bm.js": "TQ38",
        "./bn": "6K5y",
        "./bn.js": "6K5y",
        "./bo": "vPIy",
        "./bo.js": "vPIy",
        "./br": "afE2",
        "./br.js": "afE2",
        "./bs": "JNFb",
        "./bs.js": "JNFb",
        "./ca": "NQcR",
        "./ca.js": "NQcR",
        "./cs": "0V88",
        "./cs.js": "0V88",
        "./cv": "e/5r",
        "./cv.js": "e/5r",
        "./cy": "HTX9",
        "./cy.js": "HTX9",
        "./da": "oBlQ",
        "./da.js": "oBlQ",
        "./de": "DPpk",
        "./de-at": "7epm",
        "./de-at.js": "7epm",
        "./de-ch": "mq6o",
        "./de-ch.js": "mq6o",
        "./de.js": "DPpk",
        "./dv": "FyKI",
        "./dv.js": "FyKI",
        "./el": "U5Cp",
        "./el.js": "U5Cp",
        "./en-SG": "IIgg",
        "./en-SG.js": "IIgg",
        "./en-au": "2tm8",
        "./en-au.js": "2tm8",
        "./en-ca": "bxNt",
        "./en-ca.js": "bxNt",
        "./en-gb": "YmdP",
        "./en-gb.js": "YmdP",
        "./en-ie": "gLHG",
        "./en-ie.js": "gLHG",
        "./en-il": "rTiS",
        "./en-il.js": "rTiS",
        "./en-nz": "Odsn",
        "./en-nz.js": "Odsn",
        "./eo": "GjBA",
        "./eo.js": "GjBA",
        "./es": "SKOl",
        "./es-do": "8wa+",
        "./es-do.js": "8wa+",
        "./es-us": "YL9C",
        "./es-us.js": "YL9C",
        "./es.js": "SKOl",
        "./et": "+JHh",
        "./et.js": "+JHh",
        "./eu": "pAPS",
        "./eu.js": "pAPS",
        "./fa": "zhSd",
        "./fa.js": "zhSd",
        "./fi": "/BTK",
        "./fi.js": "/BTK",
        "./fo": "K/JZ",
        "./fo.js": "K/JZ",
        "./fr": "wehu",
        "./fr-ca": "UKIa",
        "./fr-ca.js": "UKIa",
        "./fr-ch": "sIcz",
        "./fr-ch.js": "sIcz",
        "./fr.js": "wehu",
        "./fy": "RmWi",
        "./fy.js": "RmWi",
        "./ga": "s5bY",
        "./ga.js": "s5bY",
        "./gd": "BWwv",
        "./gd.js": "BWwv",
        "./gl": "794S",
        "./gl.js": "794S",
        "./gom-latn": "jixF",
        "./gom-latn.js": "jixF",
        "./gu": "Uz2K",
        "./gu.js": "Uz2K",
        "./he": "dSB2",
        "./he.js": "dSB2",
        "./hi": "0vPu",
        "./hi.js": "0vPu",
        "./hr": "fnly",
        "./hr.js": "fnly",
        "./hu": "FI+y",
        "./hu.js": "FI+y",
        "./hy-am": "ZxHn",
        "./hy-am.js": "ZxHn",
        "./id": "KxDR",
        "./id.js": "KxDR",
        "./is": "H+sD",
        "./is.js": "H+sD",
        "./it": "GyEJ",
        "./it-ch": "jSwB",
        "./it-ch.js": "jSwB",
        "./it.js": "GyEJ",
        "./ja": "km6H",
        "./ja.js": "km6H",
        "./jv": "WnjQ",
        "./jv.js": "WnjQ",
        "./ka": "WXVf",
        "./ka.js": "WXVf",
        "./kk": "zJNk",
        "./kk.js": "zJNk",
        "./km": "ZuGE",
        "./km.js": "ZuGE",
        "./kn": "VCFo",
        "./kn.js": "VCFo",
        "./ko": "EpfC",
        "./ko.js": "EpfC",
        "./ku": "FvgC",
        "./ku.js": "FvgC",
        "./ky": "Pfmo",
        "./ky.js": "Pfmo",
        "./lb": "wSTE",
        "./lb.js": "wSTE",
        "./lo": "IKWk",
        "./lo.js": "IKWk",
        "./lt": "wUrv",
        "./lt.js": "wUrv",
        "./lv": "xVOH",
        "./lv.js": "xVOH",
        "./me": "riUx",
        "./me.js": "riUx",
        "./mi": "b1YN",
        "./mi.js": "b1YN",
        "./mk": "yPwC",
        "./mk.js": "yPwC",
        "./ml": "dS3T",
        "./ml.js": "dS3T",
        "./mn": "8J7P",
        "./mn.js": "8J7P",
        "./mr": "Cla+",
        "./mr.js": "Cla+",
        "./ms": "Vbbc",
        "./ms-my": "qelJ",
        "./ms-my.js": "qelJ",
        "./ms.js": "Vbbc",
        "./mt": "YkvB",
        "./mt.js": "YkvB",
        "./my": "4lZK",
        "./my.js": "4lZK",
        "./nb": "4dXb",
        "./nb.js": "4dXb",
        "./ne": "dhqa",
        "./ne.js": "dhqa",
        "./nl": "oPI1",
        "./nl-be": "XLIu",
        "./nl-be.js": "XLIu",
        "./nl.js": "oPI1",
        "./nn": "T9ox",
        "./nn.js": "T9ox",
        "./pa-in": "Ly9c",
        "./pa-in.js": "Ly9c",
        "./pl": "MX9p",
        "./pl.js": "MX9p",
        "./pt": "VVP3",
        "./pt-br": "qatJ",
        "./pt-br.js": "qatJ",
        "./pt.js": "VVP3",
        "./ro": "2xJO",
        "./ro.js": "2xJO",
        "./ru": "eqS4",
        "./ru.js": "eqS4",
        "./sd": "6Huv",
        "./sd.js": "6Huv",
        "./se": "opZB",
        "./se.js": "opZB",
        "./si": "Ueyn",
        "./si.js": "Ueyn",
        "./sk": "YIvA",
        "./sk.js": "YIvA",
        "./sl": "s2ex",
        "./sl.js": "s2ex",
        "./sq": "9o/V",
        "./sq.js": "9o/V",
        "./sr": "CZE8",
        "./sr-cyrl": "xXeP",
        "./sr-cyrl.js": "xXeP",
        "./sr.js": "CZE8",
        "./ss": "z3ad",
        "./ss.js": "z3ad",
        "./sv": "AVN5",
        "./sv.js": "AVN5",
        "./sw": "y2+C",
        "./sw.js": "y2+C",
        "./ta": "i/qy",
        "./ta.js": "i/qy",
        "./te": "Zov1",
        "./te.js": "Zov1",
        "./tet": "6ucV",
        "./tet.js": "6ucV",
        "./tg": "cLEX",
        "./tg.js": "cLEX",
        "./th": "cYD4",
        "./th.js": "cYD4",
        "./tl-ph": "+Ls2",
        "./tl-ph.js": "+Ls2",
        "./tlh": "sCZo",
        "./tlh.js": "sCZo",
        "./tr": "Nx06",
        "./tr.js": "Nx06",
        "./tzl": "x0TR",
        "./tzl.js": "x0TR",
        "./tzm": "eHpI",
        "./tzm-latn": "ceDr",
        "./tzm-latn.js": "ceDr",
        "./tzm.js": "eHpI",
        "./ug-cn": "a1x9",
        "./ug-cn.js": "a1x9",
        "./uk": "jAw7",
        "./uk.js": "jAw7",
        "./ur": "UZ6Q",
        "./ur.js": "UZ6Q",
        "./uz": "eYI/",
        "./uz-latn": "MTcW",
        "./uz-latn.js": "MTcW",
        "./uz.js": "eYI/",
        "./vi": "riLI",
        "./vi.js": "riLI",
        "./x-pseudo": "ESkz",
        "./x-pseudo.js": "ESkz",
        "./yo": "tL86",
        "./yo.js": "tL86",
        "./zh-cn": "/cTU",
        "./zh-cn.js": "/cTU",
        "./zh-hk": "dH0k",
        "./zh-hk.js": "dH0k",
        "./zh-tw": "0+Cr",
        "./zh-tw.js": "0+Cr"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "D9WN";
      /***/
    },

    /***/
    "Ey2G":
    /*!*********************************************************************!*\
      !*** ./src/app/components/server-config/server-config.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ServerConfigComponent */

    /***/
    function Ey2G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerConfigComponent", function () {
        return ServerConfigComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _models_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../models/server */
      "jL0J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var ServerConfigComponent = /*#__PURE__*/function () {
        function ServerConfigComponent(server) {
          _classCallCheck(this, ServerConfigComponent);

          this.server = server;
          this.server = server;
        }

        _createClass(ServerConfigComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setServerProperty",
          value: function setServerProperty(property, e) {
            this.server[property] = e.target.value;
          }
        }]);

        return ServerConfigComponent;
      }();

      ServerConfigComponent.ɵfac = function ServerConfigComponent_Factory(t) {
        return new (t || ServerConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      ServerConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ServerConfigComponent,
        selectors: [["app-server-config"]],
        decls: 35,
        vars: 6,
        consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "nostyle"], ["matInput", "", "disabled", "true", 3, "value", "change"], ["matInput", "", "disabled", "true", "resizeToFitContent", "true", 3, "value", "change"], ["matInput", "", "resizeToFitContent", "true", 3, "value", "change"], ["matInput", "", 3, "value", "change"], [1, "full-width"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]],
        template: function ServerConfigComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Config Server");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ol");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Unique Name Of the Server");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_9_listener($event) {
              return ctx.setServerProperty("agent_id", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "IP Address(IPv4)");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_14_listener($event) {
              return ctx.setServerProperty("ip", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_19_listener($event) {
              return ctx.setServerProperty("details", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Periodic Data Interval");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_24_listener($event) {
              return ctx.setServerProperty("stats_interval_ms", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Process to watch");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_29_listener($event) {
              return ctx.setServerProperty("watch_process", $event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-dialog-actions", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Apply");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.server.agent_id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.server.ip);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.server.details);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.server.stats_interval_ms);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.server.watch_process);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          }
        },
        directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]],
        styles: ["li.nostyle[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.half-width[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1jb25maWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNlcnZlci1jb25maWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpLm5vc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYWxmLXdpZHRoIHtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerConfigComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-server-config',
            templateUrl: './server-config.component.html',
            styleUrls: ['./server-config.component.css']
          }]
        }], function () {
          return [{
            type: _models_server__WEBPACK_IMPORTED_MODULE_2__["Server"],
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Swid":
    /*!****************************************!*\
      !*** ./src/app/services/ws.service.ts ***!
      \****************************************/

    /*! exports provided: WsService */

    /***/
    function Swid(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WsService", function () {
        return WsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/webSocket */
      "3uOa");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! uuid */
      "4USb");

      var Event;

      (function (Event) {
        Event[Event["Up"] = 1] = "Up";
        Event[Event["Down"] = 2] = "Down";
        Event[Event["Left"] = 3] = "Left";
        Event[Event["Right"] = 4] = "Right";
      })(Event || (Event = {}));

      var WsService = /*#__PURE__*/function () {
        function WsService() {
          var _this4 = this;

          _classCallCheck(this, WsService);

          this.callbacks = {};
          this.events = {};
          this.callbacks = {};
          this.events = {};
          console.log(window.location.host);
          this.host = 'ws://' + (window.location.host === 'localhost:4200' ? 'localhost:2600' : window.location.host);
          this.ws = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__["webSocket"])(this.host + '/youknow/ws');
          this.callbacks = {};
          this.events = {};
          this.ws.subscribe(function (packet) {
            _this4.onMessage(packet);
          }, function (err) {
            return console.log(err);
          }, // Called if at any point WebSocket API signals some kind of error.
          function () {
            console.log('complete');
          } // Called when connection is closed (for whatever reason).
          );
        }
        /**
         * @description send message and receive a response over callback
         * @param data
         * @param callback
         */


        _createClass(WsService, [{
          key: "send",
          value: function send(cmd, data, callback) {
            var packet = {
              token: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(),
              cmd: cmd,
              data: data
            };
            this.ws.next(data);
            this.callbacks[packet.token] = callback;
          }
          /**
           * @description Attach permanent event
           * @param data
           * @param callback
           */

        }, {
          key: "attachEvent",
          value: function attachEvent(event, agent_id, callback) {
            this.events[event] = callback;
            this.ws.next({
              event: event,
              agent_id: agent_id,
              action: 'subscribe'
            });
          }
          /**
           * @description Attach permanent event
           * @param data
           * @param callback
           */

        }, {
          key: "detachEvent",
          value: function detachEvent(event, agent_id) {
            delete this.events[event];
            this.ws.next({
              event: event,
              agent_id: agent_id,
              action: 'unsubscribe'
            });
          }
        }, {
          key: "onMessage",
          value: function onMessage(packet) {
            if (packet.token) {
              this.callbacks[packet.token].call(packet.data);
              delete this.callbacks[packet.token];
            } else if (this.events[packet.event]) {
              // If its not simple function call then it must be event if not detached
              this.events[packet.event].call(null, packet.data);
            }
          }
        }]);

        return WsService;
      }();

      WsService.ɵfac = function WsService_Factory(t) {
        return new (t || WsService)();
      };

      WsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WsService,
        factory: WsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/nav-bar/nav-bar.component */
      "g/Dx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = 'YouKnow';
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            google.charts.load('current', {
              packages: ['corechart', 'bar']
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 3,
        vars: 1,
        consts: [[3, "title"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title);
          }
        },
        directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./material/material.module */
      "hctd");
      /* harmony import */


      var _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/servers/servers.component */
      "CBUe");
      /* harmony import */


      var _components_server_server_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/server/server.component */
      "hUZ4");
      /* harmony import */


      var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/nav-bar/nav-bar.component */
      "g/Dx");
      /* harmony import */


      var _components_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/server-config/server-config.component */
      "Ey2G");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_7__["ServersComponent"], _components_server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _components_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_10__["ServerConfigComponent"]],
          imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_7__["ServersComponent"], _components_server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"], _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"], _components_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_10__["ServerConfigComponent"]],
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "g/Dx":
    /*!*********************************************************!*\
      !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
      \*********************************************************/

    /*! exports provided: NavBarComponent */

    /***/
    function gDx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
        return NavBarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");

      var NavBarComponent = /*#__PURE__*/function () {
        function NavBarComponent(router) {
          _classCallCheck(this, NavBarComponent);

          this.router = router;
          this.title = '';
        }

        _createClass(NavBarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "go2ServersPage",
          value: function go2ServersPage() {
            this.router.navigateByUrl('/');
          }
        }]);

        return NavBarComponent;
      }();

      NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
        return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavBarComponent,
        selectors: [["app-nav-bar"]],
        inputs: {
          title: "title"
        },
        decls: 61,
        vars: 3,
        consts: [[2, "cursor", "pointer", 3, "click"], [1, "small-caption"], [1, "example-spacer"], ["mat-button", "", "aria-label", "Servers", 3, "click"], ["mat-button", "", "aria-label", "Operations", 3, "matMenuTriggerFor"], ["operationsMenu", "matMenu"], ["mat-menu-item", ""], ["mat-button", "", "aria-label", "Performance", 3, "matMenuTriggerFor"], ["performanceMenu", "matMenu"], ["target", "_blank", "href", "https://github.com/somnathpanja/youknow/star"], ["mat-icon-button", "", "aria-label", "Share your Love", 1, "example-icon", "favorite-icon"], ["target", "_blank", "href", "https://github.com/somnathpanja/youknow"], ["mat-icon-button", "", "aria-label", "Share with friends", 1, "example-icon"]],
        template: function NavBarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_mat_icon_click_1_listener() {
              return ctx.go2ServersPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "self_improvement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_span_click_3_listener() {
              return ctx.go2ServersPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The farther you go the less you know. ~ Socrates");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_9_listener() {
              return ctx.go2ServersPage();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "desktop_mac");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Servers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "engineering");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Operations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-menu", null, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "shutter_speed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Watch Realtime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "switch_camera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Compare Realtime");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "auto_graph");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Performance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-menu", null, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "shutter_speed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Single Server");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "switch_camera");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Comparison between 2 Servers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "analytics");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Performance Deep Analysis");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "favorite");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "share");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
          }
        },
        directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]],
        styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.small-caption[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10px;\n  left:-82px;\n  height: 8px;\n  top:20px;\n  -webkit-text-size-adjust: auto;\n     -moz-text-size-adjust: auto;\n          text-size-adjust: auto;\n  line-height: 0px;\n  color:lightslategray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLDhCQUFzQjtLQUF0QiwyQkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zbWFsbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxlZnQ6LTgycHg7XG4gIGhlaWdodDogOHB4O1xuICB0b3A6MjBweDtcbiAgdGV4dC1zaXplLWFkanVzdDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgY29sb3I6bGlnaHRzbGF0ZWdyYXk7XG59XG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav-bar',
            templateUrl: './nav-bar.component.html',
            styleUrls: ['./nav-bar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hUZ4":
    /*!*******************************************************!*\
      !*** ./src/app/components/server/server.component.ts ***!
      \*******************************************************/

    /*! exports provided: ServerComponent */

    /***/
    function hUZ4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServerComponent", function () {
        return ServerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _models_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../models/server */
      "jL0J");
      /* harmony import */


      var _assets_common_eventTypes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../assets/common/eventTypes.json */
      "wtnX");

      var _assets_common_eventTypes_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ./../../../assets/common/eventTypes.json */
      "wtnX", 1);
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moment */
      "TiKg");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_ws_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../../services/ws.service */
      "Swid");
      /* harmony import */


      var _services_servers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../../services/servers.service */
      "xeQw");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");

      function ServerComponent_mat_option_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var unit_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unit_r3.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unit_r3.viewValue, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "width.%": a0
        };
      };

      var SJ = SilverJs;
      var Chart = SilverJs.Chart;

      var ServerComponent = /*#__PURE__*/function () {
        function ServerComponent(route, router, wsService, serversService) {
          _classCallCheck(this, ServerComponent);

          this.route = route;
          this.router = router;
          this.wsService = wsService;
          this.serversService = serversService;
          this.server = new _models_server__WEBPACK_IMPORTED_MODULE_1__["Server"]('NOC', '', '12', 1, '212', 22, [], 3333);
          this.agent_id = '';
          this.idealCPUInPercent = 0;
          this.tabSelectedIndex = 0;
          this.historyTabSelectedIndex = 0;
          this.startDate = moment__WEBPACK_IMPORTED_MODULE_3__["utc"]().local().subtract(1, 'days').format('YYYY-MM-DDTHH:mm:ss');
          this.endDate = moment__WEBPACK_IMPORTED_MODULE_3__["utc"]().local().format('YYYY-MM-DDTHH:mm:ss');
          this.unitSelected = 'minute';
          this.cornerRadius = [7, 7, 7, 7];
          this.shadowEnabled = true;
          this.borderThickness = 0.01;
          this.zoomUnits = [{
            value: 'second',
            viewValue: 'Second'
          }, {
            value: 'minute',
            viewValue: 'Minute'
          }, {
            value: 'hour',
            viewValue: 'Hour'
          }, {
            value: 'day',
            viewValue: 'Day'
          }, {
            value: 'week',
            viewValue: 'Week'
          }, {
            value: 'quarter',
            viewValue: 'Quarter'
          }, {
            value: 'month',
            viewValue: 'Month'
          }, {
            value: 'year',
            viewValue: 'Year'
          }];
        }

        _createClass(ServerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.route.queryParams.subscribe(function (params) {
              _this5.agent_id = params['agent_id'];

              _this5.serversService.getServer(_this5.agent_id).subscribe(function (server) {
                _this5.server = server;
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            console.log('DESTROY===>');
            this.wsService.detachEvent(_assets_common_eventTypes_json__WEBPACK_IMPORTED_MODULE_2__["OS_UPDATE"], this.agent_id);
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this6 = this;

            var self = this;
            google.charts.setOnLoadCallback(function () {
              _this6.createCPUGraph();

              _this6.createLoadAvgGraph();

              _this6.createRamGraph();

              _this6.createSwapMemGraph();

              _this6.createDiskGraph();

              _this6.createCpu4ProcessGraph(); // this.createMemory4ProcessGraph();


              _this6.wsService.attachEvent(_assets_common_eventTypes_json__WEBPACK_IMPORTED_MODULE_2__["OS_UPDATE"], _this6.agent_id, function (data) {
                console.log(data); //Sort by app name

                data.lines.sort(function (a, b) {
                  if (a.app < b.app) {
                    return -1;
                  }

                  if (a.app > b.app) {
                    return 1;
                  }

                  return 0;
                });
                self.updateCPUGraph(data);
                self.updateLoadAvgGraph(data);
                self.updateRAMGraph(data);
                self.updateSwapMemGraph(data);
                self.updateDiskGraph(data);
                self.updateCPU4ProcessGraph(data);
                self.updateMemory4ProcessGraph(data);
              });
            });
          }
        }, {
          key: "selectedTabChange",
          value: function selectedTabChange(event) {
            console.log("Index" + event.index);
            this.tabSelectedIndex = event.index;

            switch (event.index) {
              case 0:
                this.createCpu4ProcessGraph();
                this.updateCPU4ProcessGraph(null);
                break;

              case 1:
                this.createMemory4ProcessGraph();
                this.updateMemory4ProcessGraph(null);
                break;

              case 2:
                this.selectedHistoryTabChange({
                  index: 0
                });
                break;

              case 3:
                break;
            }
          }
        }, {
          key: "onConfigChange",
          value: function onConfigChange() {
            this.selectedHistoryTabChange({
              index: this.historyTabSelectedIndex
            });
          }
        }, {
          key: "selectedHistoryTabChange",
          value: function selectedHistoryTabChange(event) {
            var _this7 = this;

            console.log("Index" + event.index);
            this.historyTabSelectedIndex = event.index;
            var startTs = new Date(this.startDate).getTime();
            var endTs = new Date(this.endDate).getTime();
            var apps = ['sys'];
            var fields = [];
            var unit = this.unitSelected;
            var divId;
            var yAxisSettings = {};

            switch (event.index) {
              case 0:
                divId = 'loadAvgHistoryChart';
                fields = ['load_avg1', 'load_avg5', 'load_avg15'];
                break;

              case 1:
                divId = 'diskHistoryChart';
                fields = ['disk_total', 'disk_used', 'disk_free'];
                yAxisSettings.valueFormatRange = [1, 'MB', 1000, 'GB'];
                break;

              case 2:
                divId = 'swapHistoryChart';
                fields = ['mem_swap_total', 'mem_swap_free', 'mem_swap_used', 'mem_swap_avail'];
                yAxisSettings.valueFormatRange = [1, 'KB', 1000, 'MB', 1e+6, 'GB'];
                break;

              case 3:
                divId = 'cpuHistoryChart';
                fields = ['cpu_percent'];
                apps = [];
                break;

              case 4:
                divId = 'memoryHistoryChart';
                fields = ['mem_res'];
                apps = [];
                yAxisSettings.valueFormatRange = [1, 'KB', 1000, 'MB', 1e+6, 'GB'];
                break;
            }

            this.serversService.getHistoryData(this.agent_id, startTs, endTs, apps, fields, unit).then(function (chartData) {
              _this7.createOrUpdateHistoryGraph(divId, chartData, unit, yAxisSettings);
            });
          }
        }, {
          key: "createMemory4ProcessGraph",
          value: function createMemory4ProcessGraph() {
            if (!this.mem4ProcessGraph) {
              this.mem4ProcessGraph = new Chart("memChart4ProcessDiv", {
                // width: 300, height: 160,
                border: this.borderThickness,
                bevel: false,
                shadow: false,
                borderColor: 'black',
                cornerRadius: this.cornerRadius,
                dataPointWidthInPercent: 0.6,
                padding: [0, 3, 0, -5],
                // titles: [{ text: "CPU", fontSize: 12, fontWeight: 'bold',margin: [0, 5, 0, 0] }],
                axesY: [{
                  //visible: false,
                  //max: 120,
                  //min: 0,
                  // interval: 2,
                  axisLineThickness: 0.2,
                  valueFormat: '###.#'
                }],
                axesX: [{
                  labelFont: {
                    fontWeight: 'bold',
                    fontSize: 10
                  },
                  axisLineThickness: 0.2
                }]
              });
            }
          }
        }, {
          key: "createCpu4ProcessGraph",
          value: function createCpu4ProcessGraph() {
            if (!this.cpu4ProcessGraph) {
              this.cpu4ProcessGraph = new Chart("cpuChart4ProcessDiv", {
                // width: 300, height: 160,
                border: this.borderThickness,
                bevel: false,
                shadow: false,
                borderColor: 'black',
                cornerRadius: this.cornerRadius,
                dataPointWidthInPercent: 0.6,
                padding: [0, 3, 0, -5],
                // titles: [{ text: "CPU", fontSize: 12, fontWeight: 'bold',margin: [0, 5, 0, 0] }],
                axesY: [{
                  //visible: false,
                  //max: 120,
                  //min: 0,
                  // interval: 2,
                  axisLineThickness: 0.2,
                  valueFormat: '###.#'
                }],
                axesX: [{
                  labelFont: {
                    fontWeight: 'bold',
                    fontSize: 10
                  },
                  axisLineThickness: 0.2
                }]
              });
            }
          }
        }, {
          key: "createCPUGraph",
          value: function createCPUGraph() {
            this.cpuChart = new Chart("cpuChartDiv", {
              // width: 300, height: 160,
              border: this.borderThickness,
              bevel: false,
              shadow: this.shadowEnabled,
              borderColor: 'black',
              cornerRadius: this.cornerRadius,
              padding: [0, 3, 0, -5],
              // titles: [{ text: "CPU", fontSize: 12, fontWeight: 'bold',margin: [0, 5, 0, 0] }],
              axesY: [{
                visible: false,
                max: 120,
                min: 0,
                interval: 2,
                axisLineThickness: 0.2
              }],
              axesX: [{
                tickLength: 1,
                axisLineThickness: 0.2,
                title: "CPU %"
              }]
            });
          }
        }, {
          key: "createLoadAvgGraph",
          value: function createLoadAvgGraph() {
            this.loadAvgChart = new Chart("loadAvgChartDiv", {
              // width: 300, height: 160,
              border: this.borderThickness,
              bevel: false,
              shadow: this.shadowEnabled,
              borderColor: 'black',
              cornerRadius: this.cornerRadius,
              padding: [0, 0, 0, 0],
              titles: [{
                text: "Load Average",
                fontSize: 12,
                fontWeight: 'bold',
                padding: [0, 0, 0, 0]
              }],
              axesY: [{
                visible: false,
                tickEnabled: false,
                tickLength: 1,
                min: 0,
                interval: 2,
                axisLineThickness: 0.2
              }],
              axesX: [{
                tickLength: 1,
                axisLineThickness: 0.2,
                tickEnabled: false
              }]
            });
          }
        }, {
          key: "createRamGraph",
          value: function createRamGraph() {
            this.ramGraph = new Chart("ramChartDiv", {
              // width: 300, height: 160,
              border: this.borderThickness,
              bevel: false,
              shadow: this.shadowEnabled,
              borderColor: 'black',
              cornerRadius: this.cornerRadius,
              padding: [0, 0, 0, 0],
              titles: [{
                text: "Physical Memory",
                fontSize: 12,
                fontWeight: 'bold'
              }],
              axesY: [{
                visible: false,
                min: 0,
                interval: 4,
                valueFormat: "0",
                valueFormatRange: [1, 'KB', 1000, 'MB', 1e+6, 'GB']
              }],
              axesX: [{
                axisLineThickness: 0.2,
                tickLength: 1,
                tickEnabled: false
              }]
            });
          }
        }, {
          key: "createSwapMemGraph",
          value: function createSwapMemGraph() {
            this.swapMemGraph = new Chart("swapChartDiv", {
              // width: 300, height: 160,
              border: this.borderThickness,
              bevel: false,
              shadow: this.shadowEnabled,
              borderColor: 'black',
              cornerRadius: this.cornerRadius,
              padding: [0, 0, 0, 0],
              titles: [{
                text: "Swap Memory",
                fontSize: 12,
                fontWeight: 'bold'
              }],
              axesY: [{
                visible: false,
                tickEnabled: false,
                tickLength: 1,
                axisLineThickness: 0.2,
                interval: 5,
                min: 0,
                valueFormat: "0",
                valueFormatRange: [1, 'KB', 1000, 'MB', 1e+6, 'GB']
              }],
              axesX: [{
                tickEnabled: false,
                tickLength: 1,
                axisLineThickness: 0.2
              }]
            });
          }
        }, {
          key: "createDiskGraph",
          value: function createDiskGraph() {
            this.diskGraph = new Chart("diskChartDiv", {
              // width: 300, height: 160,
              border: this.borderThickness,
              bevel: false,
              shadow: this.shadowEnabled,
              borderColor: 'black',
              cornerRadius: this.cornerRadius,
              padding: [0, 0, 0, 0],
              titles: [{
                text: "Disk",
                fontSize: 12,
                fontWeight: 'bold'
              }],
              axesY: [{
                visible: false,
                includeZero: true,
                min: 0,
                axisLineThickness: 0.2,
                valueFormat: "0.00",
                valueFormatRange: [1, 'MB', 1000, 'GB']
              }],
              axesX: [{
                tickEnabled: false,
                tickLength: 1,
                axisLineThickness: 0.2,
                labelFont: {
                  fontSize: 14
                }
              }]
            });
          }
        }, {
          key: "updateCPU4ProcessGraph",
          value: function updateCPU4ProcessGraph(data) {
            var chartData;

            if (data) {
              chartData = [{
                plotAs: 'column',
                tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
                labelEnabled: true,
                labelFont: {
                  fontSize: 9,
                  fontWeight: 'bold'
                },
                points: []
              }];
              data.lines.forEach(function (process) {
                chartData[0].points.push({
                  xLabel: process.app,
                  yValue: process.cpu_percent
                });
              });
              this._tmpDataCpu4ProcessGraph = chartData;
            } else {
              chartData = this._tmpDataCpu4ProcessGraph;
            }

            if (this.tabSelectedIndex == 0 && this.cpu4ProcessGraph && chartData) {
              this.cpu4ProcessGraph.setData(chartData);
              this.cpu4ProcessGraph.render();
            }
          }
        }, {
          key: "updateMemory4ProcessGraph",
          value: function updateMemory4ProcessGraph(data) {
            var _this8 = this;

            var chartData;

            if (data) {
              chartData = [{
                plotAs: 'column',
                labelEnabled: true,
                labelFont: {
                  fontSize: 9,
                  fontWeight: 'bold'
                },
                points: []
              }];
              data.lines.forEach(function (process) {
                chartData[0].points.push({
                  xLabel: process.app,
                  yValue: process.mem_used_percent,
                  tooltipText: "<b style='color:{color};'>Memory</b>: {yValue}%<br><b>RES:</b> ".concat(_this8.readableKiloBytes(process.mem_res), "<br><b>VIRT:</b>").concat(_this8.readableKiloBytes(process.mem_virt))
                });
              });
              this._tmpDataMem4ProcessGraph = chartData;
            } else {
              chartData = this._tmpDataMem4ProcessGraph;
            }

            if (this.tabSelectedIndex == 1 && this.mem4ProcessGraph && chartData) {
              this.mem4ProcessGraph.setData(chartData);
              this.mem4ProcessGraph.render();
            }
          }
        }, {
          key: "updateCPUGraph",
          value: function updateCPUGraph(data) {
            var chartData = [{
              plotAs: 'bar',
              tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
              labelEnabled: true,
              points: [{
                xLabel: 'ST',
                yValue: data.sys.cpu_st
              }, //{ xLabel: 'si', yValue: data.sys.cpu_si },
              //{ xLabel: 'hi', yValue: data.sys.cpu_hi },
              {
                xLabel: 'WA',
                yValue: data.sys.cpu_wa
              }, {
                xLabel: 'ID',
                yValue: data.sys.cpu_id
              }, // { xLabel: 'ni', yValue: data.sys.cpu_ni },
              {
                xLabel: 'SY',
                yValue: data.sys.cpu_sy
              }, {
                xLabel: 'US',
                yValue: data.sys.cpu_us
              }]
            }];
            this.cpuChart.setData(chartData);
            this.cpuChart.render();
            this.idealCPUInPercent = data.sys.cpu_id;
          }
        }, {
          key: "updateLoadAvgGraph",
          value: function updateLoadAvgGraph(data) {
            var ds = [{
              plotAs: 'bar',
              tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
              labelText: "{yValue}",
              labelEnabled: true,
              points: [{
                xLabel: '1m',
                color: "orange",
                yValue: data.sys.load_avg1
              }, {
                xLabel: '5m',
                color: "green",
                yValue: data.sys.load_avg5
              }, {
                xLabel: '15m',
                color: "red",
                yValue: data.sys.load_avg15
              }]
            }];
            var max = Math.max(data.sys.load_avg1, data.sys.load_avg5, data.sys.load_avg15);
            this.loadAvgChart.axesY[0].max(max + 1);
            this.loadAvgChart.setData(ds);
            this.loadAvgChart.render();
          }
        }, {
          key: "updateRAMGraph",
          value: function updateRAMGraph(data) {
            var ds = [{
              plotAs: 'bar',
              tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
              labelEnabled: true,
              points: [{
                xLabel: 'Buffer/Cache',
                color: "orange",
                yValue: data.sys.mem_buff_cache
              }, {
                xLabel: 'Free',
                color: "green",
                yValue: data.sys.mem_free
              }, {
                xLabel: 'Used',
                color: "red",
                yValue: data.sys.mem_used
              }, {
                xLabel: 'Total',
                color: "gray",
                yValue: data.sys.mem_total
              }]
            }]; // this.ramGraph.axesY[0].max(data.sys.mem_total);

            this.ramGraph.setData(ds);
            this.ramGraph.render();
          }
        }, {
          key: "updateSwapMemGraph",
          value: function updateSwapMemGraph(data) {
            var ds = [{
              plotAs: 'bar',
              tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
              labelEnabled: true,
              points: [{
                xLabel: 'Available',
                color: "orange",
                yValue: data.sys.mem_swap_avail
              }, {
                xLabel: 'Free',
                color: "green",
                yValue: data.sys.mem_swap_free
              }, {
                xLabel: 'Used',
                color: "red",
                yValue: data.sys.mem_swap_used
              }, {
                xLabel: 'Total',
                color: "gray",
                yValue: data.sys.mem_swap_total
              }]
            }]; //this.swapMemGraph.axesY[0].max(Math.max(data.sys.mem_swap_total, data.sys.mem_swap_avail));

            this.swapMemGraph.setData(ds);
            this.swapMemGraph.render();
          }
        }, {
          key: "updateDiskGraph",
          value: function updateDiskGraph(data) {
            var ds = [{
              plotAs: 'bar',
              tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
              labelEnabled: true,
              points: [{
                xLabel: 'Free',
                color: "green",
                yValue: data.sys.disk_free
              }, {
                xLabel: 'Used',
                color: "red",
                yValue: data.sys.disk_used
              }, {
                xLabel: 'Total',
                color: "gray",
                yValue: data.sys.disk_total
              }]
            }]; //this.diskGraph.axesY[0].max(data.sys.disk_total);

            this.diskGraph.setData(ds);
            this.diskGraph.render();
          }
        }, {
          key: "createHistoryGraph",
          value: function createHistoryGraph(id, yAxisSettings) {
            return new Chart(id, {
              // width: 300, height: 160,
              border: this.borderThickness,
              bevel: false,
              shadow: this.shadowEnabled,
              borderColor: 'black',
              cornerRadius: this.cornerRadius,
              tooltip: {
                sharing: 'singleShared'
              },
              verticalHairLineEnabled: true,
              // padding: [0, 3, 0, -5],
              // titles: [{ text: "CPU", fontSize: 12, fontWeight: 'bold',margin: [0, 5, 0, 0] }],
              axesY: [Object.assign({
                // max: 120,
                // min: 0,
                // interval: 2,
                axisLineThickness: 0.2,
                axisType: "primary",
                valueFormat: '###.##'
              }, yAxisSettings)],
              axesX: [{
                // tickLength: 1,
                // axisLineThickness: 0.2,
                scaleType: "datetime",
                valueFormat: "MM-dd-yyyy HH:mm:ss",
                intervalType: 'minute',
                labelAngel: -90
              }]
            });
          }
        }, {
          key: "createOrUpdateHistoryGraph",
          value: function createOrUpdateHistoryGraph(id, chartData, unit, yAxisSettings) {
            var chart;

            switch (id) {
              case 'loadAvgHistoryChart':
                chart = this.loadAvgHistoryChart = this.loadAvgHistoryChart || this.createHistoryGraph(id, yAxisSettings);
                break;

              case 'diskHistoryChart':
                chart = this.diskHistoryChart = this.diskHistoryChart || this.createHistoryGraph(id, yAxisSettings);
                break;

              case 'swapHistoryChart':
                chart = this.swapHistoryChart = this.swapHistoryChart || this.createHistoryGraph(id, yAxisSettings);
                break;

              case 'cpuHistoryChart':
                chart = this.cpuHistoryChart = this.cpuHistoryChart || this.createHistoryGraph(id, yAxisSettings);
                break;

              case 'memoryHistoryChart':
                chart = this.memoryHistoryChart = this.memoryHistoryChart || this.createHistoryGraph(id, yAxisSettings);
                break;
            }

            chartData.forEach(function (ds) {
              ds.lineWidth = 2;
              ds.plotAs = 'line';
            });
            chart.setData(chartData);
            chart.render();
          }
        }, {
          key: "loadScript",
          value: function loadScript(url) {
            var body = document.body;
            var script = document.createElement('script');
            script.innerHTML = '';
            script.src = url;
            script.async = false;
            script.defer = true;
            body.appendChild(script);
          }
        }, {
          key: "readableBytes",
          value: function readableBytes(bytes) {
            var i = Math.floor(Math.log(bytes) / Math.log(1024));
            var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
          }
        }, {
          key: "readableKiloBytes",
          value: function readableKiloBytes(kb) {
            var bytes = kb * 1024;
            var i = Math.floor(Math.log(bytes) / Math.log(1024));
            var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
          }
        }]);

        return ServerComponent;
      }();

      ServerComponent.ɵfac = function ServerComponent_Factory(t) {
        return new (t || ServerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ws_service__WEBPACK_IMPORTED_MODULE_5__["WsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servers_service__WEBPACK_IMPORTED_MODULE_6__["ServersService"]));
      };

      ServerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ServerComponent,
        selectors: [["app-server"]],
        inputs: {
          server: "server",
          idealCPUInPercent: "idealCPUInPercent",
          tabSelectedIndex: "tabSelectedIndex",
          historyTabSelectedIndex: "historyTabSelectedIndex",
          startDate: "startDate",
          endDate: "endDate",
          unitSelected: "unitSelected",
          zoomUnits: "zoomUnits"
        },
        decls: 86,
        vars: 18,
        consts: [[1, "container"], [1, "header-display", "hot-linear-gradient"], ["id", "hotness", 1, "color-layer", "child-right", 3, "ngStyle"], ["mat-button", "", "color", "primary", "aria-label", "Platform"], ["mat-button", "", "aria-label", "Platform"], ["mat-button", "", "aria-label", "CPU Count"], ["mat-button", "", "aria-label", "IP Address"], ["fxLayout", ""], ["id", "cpuChartDiv", "mat-list-item", "", 1, "nano-chart"], ["src", "assets/icons/info-24px.svg", "matTooltip", "Info about the action", "matTooltip", "US: User cpu time (or) % CPU time spent in user space \\n\u2022\nSY: System cpu time (or) % CPU time spent in kernel space \\n\u2022\nNI: User nice cpu time (or) % CPU time spent on low priority processes \u2022\nID: Idle cpu time (or) % CPU time spent idle \u2022\nWA: I/O wait cpu time (or) % CPU time spent in wait (on disk) \u2022\nHI: Hardware irq (or) % CPU time spent servicing/handling hardware interrupts \u2022\nSI: Software irq (or) % CPU time spent servicing/handling software interrupts \u2022\nST: Steal time - - % CPU time in involuntary wait by virtual cpu while hypervisor is servicing another processor (or) % CPU time stolen from a virtual machine", "matTooltipPosition", "right", "matTooltipHideDelay", "100000", 1, "infoIcon", 3, "matTooltipClass"], ["tooltip", "matTooltip"], ["id", "loadAvgChartDiv", "mat-list-item", "", 1, "nano-chart"], ["id", "ramChartDiv", "mat-list-item", "", 1, "nano-chart"], ["id", "swapChartDiv", "mat-list-item", "", 1, "nano-chart"], ["id", "diskChartDiv", "mat-list-item", "", 1, "nano-chart"], [1, "fullWidth", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["label", "RealTime CPU"], ["id", "cpuChart4ProcessDiv", 1, "full-width-chart"], ["label", "RealTime Memory"], ["id", "memChart4ProcessDiv", 1, "full-width-chart"], ["label", "History"], ["autosize", "", 1, "example-container"], ["mode", "over", 1, "example-sidenav"], ["drawer", ""], [2, "width", "250px"], [1, "date-time-picker"], ["type", "datetime-local", "id", "history-start-datetime", "name", "history-start-datetime", 3, "ngModel", "value", "ngModelChange"], ["type", "datetime-local", "id", "history-end-datetime", "name", "history-end-datetime", 3, "ngModel", "value", "ngModelChange"], ["appearance", "fill", 2, "width", "100%"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "center"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "example-sidenav-content"], ["mat-button", "", 1, "slide-bar-opener", 3, "click"], ["animationDuration", "0", 1, "fullWidth", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["label", "Load Average"], ["id", "loadAvgHistoryChart", 1, "full-width-chart"], ["label", "Disk"], ["id", "diskHistoryChart", 1, "full-width-chart"], ["label", "Swap"], ["id", "swapHistoryChart", 1, "full-width-chart"], ["label", "CPU"], ["id", "cpuHistoryChart", 1, "full-width-chart"], ["label", "Memory"], ["id", "memoryHistoryChart", 1, "full-width-chart"], [3, "value"]],
        template: function ServerComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "computer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "select_all");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "dns");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-nav-list", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 9, 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-tab-group", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ServerComponent_Template_mat_tab_group_selectedIndexChange_31_listener($event) {
              return ctx.tabSelectedIndex = $event;
            })("selectedTabChange", function ServerComponent_Template_mat_tab_group_selectedTabChange_31_listener($event) {
              return ctx.selectedTabChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-tab", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-tab", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-tab", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-drawer-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-drawer", 22, 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Start Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServerComponent_Template_input_ngModelChange_44_listener($event) {
              return ctx.startDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "End Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServerComponent_Template_input_ngModelChange_48_listener($event) {
              return ctx.endDate = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Zoom Level");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-select", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ServerComponent_Template_mat_select_valueChange_57_listener($event) {
              return ctx.unitSelected = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ServerComponent_mat_option_58_Template, 2, 2, "mat-option", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-slide-toggle");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Include processes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-divider");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_button_click_70_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

              _r1.toggle();

              return ctx.onConfigChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Apply ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "mat-icon", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_mat_icon_click_73_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

              return _r1.toggle();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " menu ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-tab-group", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ServerComponent_Template_mat_tab_group_selectedIndexChange_75_listener($event) {
              return ctx.historyTabSelectedIndex = $event;
            })("selectedTabChange", function ServerComponent_Template_mat_tab_group_selectedTabChange_75_listener($event) {
              return ctx.selectedHistoryTabChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "mat-tab", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "div", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "mat-tab", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "mat-tab", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-tab", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "mat-tab", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.idealCPUInPercent));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.server.agent_id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.server.platform, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.server.cpu_count, " CPU");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.server.ip, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipClass", "my-tooltip");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tabSelectedIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startDate)("value", ctx.startDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endDate)("value", ctx.endDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.startDate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\xA0", ctx.endDate, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.unitSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zoomUnits);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.historyTabSelectedIndex);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatNavList"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTab"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatDrawer"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_17__["MatSlideToggle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDivider"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOption"]],
        styles: [".blue[_ngcontent-%COMP%] {\n  color:dodgerblue\n}\n\n.red[_ngcontent-%COMP%] {\n  color:indianred\n}\n\n.header1[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.fullWidth[_ngcontent-%COMP%] {\n width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 1rem;\n  padding-top: 0.2rem;\n}\n\n.infoIcon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10000000;\n  float: right;\n  font-size: 12px;\n  height: 20px;\n  opacity: 0.5;\n}\n\n.my-tooltip[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n\n.nano-chart[_ngcontent-%COMP%] {\n  display: inline;\n  float: left;\n  width: 250px; \n  height: 100px;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\n.margin-common[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  margin-top: 0.5rem;\n  margin-bottom: -0.5rem;\n  margin-left: 0.5rem;\n}\n\n.mini-chart[_ngcontent-%COMP%] {\n  display: inline;\n  float: left;\n  width: 300px; \n  height: 150px;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\n.full-width-chart[_ngcontent-%COMP%] {\n  display: inline;\n  float: left;\n  width: 100%; \n  height: 400px;\n  margin-right: 1rem;\n}\n\n.header-display[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.child-right[_ngcontent-%COMP%] {\n  height: 100%;\n  \n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: width 2s;\n}\n\n.color-layer[_ngcontent-%COMP%] {\n  background:rgb(245, 245, 245);\n}\n\n.hot-linear-gradient[_ngcontent-%COMP%] {\n  background-color:transparent;\n  background-image: linear-gradient(to right,rgba(4, 255, 8, 0.191),rgba(241, 245, 0, 0.191), rgba(255, 0, 0, 0.191));\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content;\n   \n}\n\n.child-right-float[_ngcontent-%COMP%]{\n  float: right;\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content;\n  height:-webkit-fit-content;\n  height:-moz-fit-content;\n  height:fit-content;\n  \n  z-index: 10000;\n  margin-top: -3px;\n}\n\n.back-gray[_ngcontent-%COMP%]{\n  background-color: rgb(236, 236, 236);\n}\n\n.back-white[_ngcontent-%COMP%]{\n  background-color: rgb(256, 256, 256);\n}\n\n.slide-bar-opener[_ngcontent-%COMP%]{\n  float: left;\n  position: absolute;\n  z-index: 10000;\n  width: 30px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.date-time-picker[_ngcontent-%COMP%]{\n background-color: rgb(233, 233, 233);\n padding: 0.5rem;\n margin-bottom: 1rem;\n border:1 solid rgb(179, 179, 179);\n}\n\n.date-time-picker[_ngcontent-%COMP%]   input[type=\"datetime-local\"][_ngcontent-%COMP%] {\n  width: 97%;\n  margin-right: 0.5rem;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtSEFBbUg7QUFDckg7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQWlCO0VBQWpCLHNCQUFpQjtFQUFqQixpQkFBaUI7R0FDaEIsNkJBQTZCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUFpQjtFQUFqQixzQkFBaUI7RUFBakIsaUJBQWlCO0VBQ2pCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsaUNBQWlDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNlcnZlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYmx1ZSB7XG4gIGNvbG9yOmRvZGdlcmJsdWVcbn1cblxuLnJlZCB7XG4gIGNvbG9yOmluZGlhbnJlZFxufVxuXG4uaGVhZGVyMSB7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLmZ1bGxXaWR0aCB7XG4gd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBwYWRkaW5nOiAxcmVtO1xuICBwYWRkaW5nLXRvcDogMC4ycmVtO1xufVxuXG4uaW5mb0ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDAwMDAwO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5teS10b29sdGlwIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xufVxuXG4ubmFuby1jaGFydCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyNTBweDsgXG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLm1hcmdpbi1jb21tb24ge1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMC41cmVtO1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4ubWluaS1jaGFydCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMDBweDsgXG4gIGhlaWdodDogMTUwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmZ1bGwtd2lkdGgtY2hhcnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTsgXG4gIGhlaWdodDogNDAwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLmhlYWRlci1kaXNwbGF5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoaWxkLXJpZ2h0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiB3aWR0aDogMTAlOyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDJzO1xufVxuXG4uY29sb3ItbGF5ZXIge1xuICBiYWNrZ3JvdW5kOnJnYigyNDUsIDI0NSwgMjQ1KTtcbn1cblxuLmhvdC1saW5lYXItZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQscmdiYSg0LCAyNTUsIDgsIDAuMTkxKSxyZ2JhKDI0MSwgMjQ1LCAwLCAwLjE5MSksIHJnYmEoMjU1LCAwLCAwLCAwLjE5MSkpO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDpmaXQtY29udGVudDtcbiAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIGdyYXk7ICAqL1xufVxuXG4uY2hpbGQtcmlnaHQtZmxvYXR7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gIGhlaWdodDpmaXQtY29udGVudDtcbiAgLyogYm9yZGVyOnNvbGlkIDFweCAjMDBGOyAqL1xuICB6LWluZGV4OiAxMDAwMDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuLmJhY2stZ3JheXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xufVxuXG4uYmFjay13aGl0ZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NiwgMjU2LCAyNTYpO1xufVxuXG4uc2xpZGUtYmFyLW9wZW5lcntcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDA7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlLXRpbWUtcGlja2Vye1xuIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcbiBwYWRkaW5nOiAwLjVyZW07XG4gbWFyZ2luLWJvdHRvbTogMXJlbTtcbiBib3JkZXI6MSBzb2xpZCByZ2IoMTc5LCAxNzksIDE3OSk7XG59XG5cbi5kYXRlLXRpbWUtcGlja2VyIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSB7XG4gIHdpZHRoOiA5NyU7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAvKiBwYWRkaW5nLXJpZ2h0OiAycmVtOyAqL1xuICAvKiBNb3JlIHN0eWxlcyBoZXJlICovXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-server',
            templateUrl: './server.component.html',
            styleUrls: ['./server.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _services_ws_service__WEBPACK_IMPORTED_MODULE_5__["WsService"]
          }, {
            type: _services_servers_service__WEBPACK_IMPORTED_MODULE_6__["ServersService"]
          }];
        }, {
          server: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          idealCPUInPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          tabSelectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          historyTabSelectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          startDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          endDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          unitSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          zoomUnits: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "hctd":
    /*!*********************************************!*\
      !*** ./src/app/material/material.module.ts ***!
      \*********************************************/

    /*! exports provided: MaterialModule */

    /***/
    function hctd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
        return MaterialModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "/t3+");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/menu */
      "STbY");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/paginator */
      "M9IT");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/tooltip */
      "Qu3c");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/list */
      "MutI");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/grid-list */
      "zkoq");
      /* harmony import */


      var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/expansion */
      "7EHt");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/core */
      "FKr1");
      /* harmony import */


      var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material-moment-adapter */
      "1yaQ");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "iadO");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/select */
      "d3UM");
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/sidenav */
      "XhcP");
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      "1jcm");

      var MaterialComponents = [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__["MatMomentDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]];

      var MaterialModule = function MaterialModule() {
        _classCallCheck(this, MaterialModule);
      };

      MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MaterialModule
      });
      MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MaterialModule_Factory(t) {
          return new (t || MaterialModule)();
        },
        imports: [[MaterialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__["MatMomentDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
          imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__["MatMomentDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__["MatMomentDateModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [MaterialComponents],
            exports: [MaterialComponents]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jL0J":
    /*!**********************************!*\
      !*** ./src/app/models/server.ts ***!
      \**********************************/

    /*! exports provided: Server */

    /***/
    function jL0J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Server", function () {
        return Server;
      });

      var Server = /*#__PURE__*/function () {
        function Server(agent_id, ip, details, cpu_count, platform, stats_interval_ms, watch_process, last_updated_ts) {
          _classCallCheck(this, Server);

          this.agent_id = agent_id;
          this.ip = ip;
          this.details = details;
          this.cpu_count = cpu_count;
          this.platform = platform;
          this.stats_interval_ms = stats_interval_ms;
          this.watch_process = watch_process;
          this.last_updated_ts = last_updated_ts;
        }
        /**
         * @description Clone this server object
         */


        _createClass(Server, [{
          key: "update",

          /**
           * @description Update reference of this server with the updated data
           * @param server
           */
          value: function update(server) {
            return new Server(this.agent_id, server.details, server.ip, server.cpu_count, server.platform, server.stats_interval_ms, server.watch_process, server.last_updated_ts);
          }
        }], [{
          key: "clone",
          value: function clone(server) {
            return new Server(server.agent_id || '', server.ip || 'N/A', server.details || 'N/A', server.cpu_count || 0, server.platform || 'N/A', server.stats_interval_ms || 5000, server.watch_process || '[]', server.last_updated_ts || 0);
          }
        }]);

        return Server;
      }();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/servers/servers.component */
      "CBUe");
      /* harmony import */


      var _components_server_server_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/server/server.component */
      "hUZ4");

      var routes = [{
        path: '',
        component: _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"]
      }, {
        path: 'server',
        component: _components_server_server_component__WEBPACK_IMPORTED_MODULE_3__["ServerComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wtnX":
    /*!*******************************************!*\
      !*** ./src/assets/common/eventTypes.json ***!
      \*******************************************/

    /*! exports provided: OS_UPDATE, SELECTIVE_PROCESS_UPDATE, default */

    /***/
    function wtnX(module) {
      module.exports = JSON.parse("{\"OS_UPDATE\":\"OS_UPDATE\",\"SELECTIVE_PROCESS_UPDATE\":\"SELECTIVE_PROCESS_UPDATE\"}");
      /***/
    },

    /***/
    "xeQw":
    /*!*********************************************!*\
      !*** ./src/app/services/servers.service.ts ***!
      \*********************************************/

    /*! exports provided: ServersService */

    /***/
    function xeQw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServersService", function () {
        return ServersService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var ServersService = /*#__PURE__*/function () {
        function ServersService(http) {
          _classCallCheck(this, ServersService);

          this.http = http;
          this.host = window.location.protocol + '//' + (window.location.host === 'localhost:4200' ? 'localhost:2600' : window.location.host);
          console.log(this.host);
        }

        _createClass(ServersService, [{
          key: "getServers",
          value: function getServers() {
            // https://stackoverflow.com/questions/49297680/angular-5-get-host-name-and-app-name-from-url
            return this.http.get(this.host + '/agents');
          }
        }, {
          key: "getServer",
          value: function getServer(agent_id) {
            return this.http.get(this.host + '/agent/' + agent_id);
          }
        }, {
          key: "updateServer",
          value: function updateServer(agent_id, server) {
            var url = this.host + '/agent/update/' + agent_id;
            return this.http.post(url, server).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).toPromise();
          }
        }, {
          key: "addServer",
          value: function addServer(server) {
            var url = this.host + '/agent/add';
            return this.http.post(url, server).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).toPromise();
          }
        }, {
          key: "getHistoryData",
          value: function getHistoryData(agent_id, startTs, endTs, apps, fields, unit) {
            var url = this.host + '/agent/' + agent_id + '/history?startTs=' + startTs + '&endTs=' + endTs + '&apps=' + apps.join() + '&fields=' + fields.join() + '&unit=' + unit;
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).toPromise();
          }
        }, {
          key: "handleError",
          value: function handleError(error) {
            if (error.error instanceof ErrorEvent) {
              // A client-side or network error occurred. Handle it accordingly.
              console.error('An error occurred:', error.error.message);
            } else {
              // The backend returned an unsuccessful response code.
              // The response body may contain clues as to what went wrong.
              console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
            } // Return an observable with a user-facing error message.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
          }
        }]);

        return ServersService;
      }();

      ServersService.ɵfac = function ServersService_Factory(t) {
        return new (t || ServersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      ServersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ServersService,
        factory: ServersService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServersService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map