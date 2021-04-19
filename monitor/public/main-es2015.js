(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/somnath/workspace/youknow/monitor/client/src/main.ts */"zUnb");


/***/ }),

/***/ "0Ux6":
/*!****************************************!*\
  !*** ./src/app/interfaces/listItem.ts ***!
  \****************************************/
/*! exports provided: ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
class ListItem {
    constructor(name, value, selected = false) {
        this.name = name;
        this.value = value;
        this.selected = selected;
    }
}


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "CBUe":
/*!*********************************************************!*\
  !*** ./src/app/components/servers/servers.component.ts ***!
  \*********************************************************/
/*! exports provided: ServersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersComponent", function() { return ServersComponent; });
/* harmony import */ var _models_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../models/server */ "jL0J");
/* harmony import */ var _server_config_server_config_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../server-config/server-config.component */ "Ey2G");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _services_servers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/servers.service */ "xeQw");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function ServersComponent_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Server ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServersComponent_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r18.agent_id, " ");
} }
function ServersComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " IP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServersComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("href", "https://" + element_r19.ip, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r19.ip);
} }
function ServersComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServersComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r20.details, " ");
} }
function ServersComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " CPUs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServersComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r21.cpu_count, " ");
} }
function ServersComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Platform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServersComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", element_r22.platform, " ");
} }
function ServersComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 15);
} }
function ServersComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServersComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 15);
} }
function ServersComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServersComponent_td_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const element_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.openServerEditDialog(element_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServersComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "th", 15);
} }
function ServersComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ServersComponent_td_25_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const element_r27 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.viewBtnClick(element_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "insert_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ServersComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 22);
} }
function ServersComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 23);
} }
const _c0 = function () { return [5, 10, 20]; };
class ServersComponent {
    constructor(serversService, configDialog, router) {
        this.serversService = serversService;
        this.configDialog = configDialog;
        this.router = router;
        this.displayedColumns = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]([]);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.serversService.getServers().subscribe(servers => {
            this.displayedColumns = ['agent_id', 'ip', 'details', 'cpu_count', 'platform', 'delete', 'edit', 'watch'];
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](servers);
            this.dataSource.paginator = this.paginator;
        });
    }
    openServerEditDialog(server) {
        let self = this;
        this.oldServer = server;
        this.selectedServer = _models_server__WEBPACK_IMPORTED_MODULE_0__["Server"].clone(server);
        const dialogRef = this.configDialog.open(_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_1__["ServerConfigComponent"], {
            data: this.selectedServer,
            width: '30%',
            // minHeight: 'calc(100vh - 90px)',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.serversService.updateServer(this.oldServer.agent_id, this.selectedServer).then(data => {
                    console.log(data);
                    this.oldServer = this.selectedServer;
                }).catch(err => {
                    console.log('error=', err);
                });
            }
        });
    }
    viewBtnClick(server) {
        this.router.navigateByUrl('/server?agent_id=' + server.agent_id);
    }
    addNewServer() {
        this.selectedServer = _models_server__WEBPACK_IMPORTED_MODULE_0__["Server"].clone({});
        const dialogRef = this.configDialog.open(_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_1__["ServerConfigComponent"], {
            data: this.selectedServer,
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.serversService.addServer(this.selectedServer).then(data => {
                    console.log(data);
                }).catch(err => {
                    console.log('error=', err);
                });
            }
        });
    }
}
ServersComponent.ɵfac = function ServersComponent_Factory(t) { return new (t || ServersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_servers_service__WEBPACK_IMPORTED_MODULE_5__["ServersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
ServersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ServersComponent, selectors: [["app-servers"]], viewQuery: function ServersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 29, vars: 5, consts: [[1, "mat-elevation-z8"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "agent_id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ip"], ["matColumnDef", "details"], ["matColumnDef", "cpu_count"], ["matColumnDef", "platform"], ["matColumnDef", "delete"], ["matColumnDef", "edit"], ["matColumnDef", "watch"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", "color", "primary", "target", "_blank", 3, "href"], ["mat-button", "", "color", "primary", "href", "https://www.google.com/search?q=linux+x86_64", "target", "_blank"], ["mat-icon-button", "", "color", "warn", "aria-label", "Detach the server"], ["mat-icon-button", "", "color", "warn", "aria-label", "Edit the server", 3, "click"], ["mat-icon-button", "", "color", "warn", "aria-label", "Watch the server", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ServersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ServersComponent_th_3_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ServersComponent_td_4_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ServersComponent_th_6_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ServersComponent_td_7_Template, 3, 2, "td", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ServersComponent_td_16_Template, 3, 1, "td", 4);
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](4, _c0));
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-column-delete[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n\n.mat-column-edit[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n\n.mat-column-watch[_ngcontent-%COMP%] {\n  width: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzZXJ2ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWNvbHVtbi1kZWxldGUge1xuICB3aWR0aDogMnJlbTtcbn1cblxuLm1hdC1jb2x1bW4tZWRpdCB7XG4gIHdpZHRoOiAycmVtO1xufVxuXG4ubWF0LWNvbHVtbi13YXRjaCB7XG4gIHdpZHRoOiAycmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ServersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-servers',
                templateUrl: './servers.component.html',
                styleUrls: ['./servers.component.css']
            }]
    }], function () { return [{ type: _services_servers_service__WEBPACK_IMPORTED_MODULE_5__["ServersService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "D9WN":
/*!***************************************************!*\
  !*** ../node_modules/moment/locale sync ^\.\/.*$ ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
	if(!__webpack_require__.o(map, req)) {
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

/***/ }),

/***/ "Ey2G":
/*!*********************************************************************!*\
  !*** ./src/app/components/server-config/server-config.component.ts ***!
  \*********************************************************************/
/*! exports provided: ServerConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerConfigComponent", function() { return ServerConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _models_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../models/server */ "jL0J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









class ServerConfigComponent {
    constructor(server) {
        this.server = server;
        this.server = server;
    }
    ngOnInit() {
    }
    setServerProperty(property, e) {
        this.server[property] = e.target.value;
    }
}
ServerConfigComponent.ɵfac = function ServerConfigComponent_Factory(t) { return new (t || ServerConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ServerConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerConfigComponent, selectors: [["app-server-config"]], decls: 35, vars: 6, consts: [["mat-dialog-title", ""], [1, "mat-typography"], [1, "nostyle"], ["matInput", "", "disabled", "true", 3, "value", "change"], ["matInput", "", "disabled", "true", "resizeToFitContent", "true", 3, "value", "change"], ["matInput", "", "resizeToFitContent", "true", 3, "value", "change"], ["matInput", "", 3, "value", "change"], [1, "full-width"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function ServerConfigComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_9_listener($event) { return ctx.setServerProperty("agent_id", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "IP Address(IPv4)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_14_listener($event) { return ctx.setServerProperty("ip", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_19_listener($event) { return ctx.setServerProperty("details", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Periodic Data Interval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_24_listener($event) { return ctx.setServerProperty("stats_interval_ms", $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Process to watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ServerConfigComponent_Template_input_change_29_listener($event) { return ctx.setServerProperty("watch_process", $event); });
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
    } if (rf & 2) {
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
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: ["li.nostyle[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.half-width[_ngcontent-%COMP%] {\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci1jb25maWcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNlcnZlci1jb25maWcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpLm5vc3R5bGUge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oYWxmLXdpZHRoIHtcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server-config',
                templateUrl: './server-config.component.html',
                styleUrls: ['./server-config.component.css']
            }]
    }], function () { return [{ type: _models_server__WEBPACK_IMPORTED_MODULE_2__["Server"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "Swid":
/*!****************************************!*\
  !*** ./src/app/services/ws.service.ts ***!
  \****************************************/
/*! exports provided: WsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WsService", function() { return WsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/webSocket */ "3uOa");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "4USb");




var Event;
(function (Event) {
    Event[Event["Up"] = 1] = "Up";
    Event[Event["Down"] = 2] = "Down";
    Event[Event["Left"] = 3] = "Left";
    Event[Event["Right"] = 4] = "Right";
})(Event || (Event = {}));
class WsService {
    constructor() {
        this.callbacks = {};
        this.events = {};
        this.callbacks = {};
        this.events = {};
        console.log(window.location.host);
        this.host = 'ws://' + ((window.location.host === 'localhost:4200') ? 'localhost:2600' : window.location.host);
        this.ws = Object(rxjs_webSocket__WEBPACK_IMPORTED_MODULE_1__["webSocket"])(this.host + '/youknow/ws');
        this.callbacks = {};
        this.events = {};
        this.ws.subscribe((packet) => { this.onMessage(packet); }, err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
        () => { console.log('complete'); } // Called when connection is closed (for whatever reason).
        );
    }
    /**
     * @description send message and receive a response over callback
     * @param data
     * @param callback
     */
    send(cmd, data, callback) {
        let packet = { token: Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])(), cmd, data };
        this.ws.next(data);
        this.callbacks[packet.token] = callback;
    }
    /**
     * @description Attach permanent event
     * @param data
     * @param callback
     */
    attachEvent(event, agent_id, callback) {
        this.events[event] = callback;
        this.ws.next({ event, agent_id, action: 'subscribe' });
    }
    /**
     * @description Attach permanent event
     * @param data
     * @param callback
     */
    detachEvent(event, agent_id) {
        delete this.events[event];
        this.ws.next({ event, agent_id, action: 'unsubscribe' });
    }
    onMessage(packet) {
        if (packet.token) {
            this.callbacks[packet.token].call(packet.data);
            delete this.callbacks[packet.token];
        }
        else if (this.events[packet.event]) { // If its not simple function call then it must be event if not detached
            this.events[packet.event].call(null, packet.data);
        }
    }
}
WsService.ɵfac = function WsService_Factory(t) { return new (t || WsService)(); };
WsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WsService, factory: WsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'YouKnow';
    }
    ngOnInit() {
        google.charts.load('current', { packages: ['corechart', 'bar'] });
    }
    ngAfterViewInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [[3, "title"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title);
    } }, directives: [_components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_1__["NavBarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/servers/servers.component */ "CBUe");
/* harmony import */ var _components_server_server_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/server/server.component */ "hUZ4");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "g/Dx");
/* harmony import */ var _components_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/server-config/server-config.component */ "Ey2G");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_7__["ServersComponent"],
        _components_server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"],
        _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
        _components_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_10__["ServerConfigComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_7__["ServersComponent"],
                    _components_server_server_component__WEBPACK_IMPORTED_MODULE_8__["ServerComponent"],
                    _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
                    _components_server_config_server_config_component__WEBPACK_IMPORTED_MODULE_10__["ServerConfigComponent"]
                ],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "g/Dx":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ "STbY");







class NavBarComponent {
    constructor(router) {
        this.router = router;
        this.title = '';
    }
    ngOnInit() {
    }
    go2ServersPage() {
        this.router.navigateByUrl('/');
    }
}
NavBarComponent.ɵfac = function NavBarComponent_Factory(t) { return new (t || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavBarComponent, selectors: [["app-nav-bar"]], inputs: { title: "title" }, decls: 66, vars: 3, consts: [[2, "cursor", "pointer", 3, "click"], [1, "small-caption"], [1, "example-spacer"], ["mat-button", "", "aria-label", "Servers", 3, "click"], ["mat-button", "", "aria-label", "Operations", 3, "matMenuTriggerFor"], ["operationsMenu", "matMenu"], ["mat-menu-item", ""], ["mat-button", "", "aria-label", "Performance", 3, "matMenuTriggerFor"], ["performanceMenu", "matMenu"], [2, "margin-top", "6px"], ["href", "https://github.com/somnathpanja/youknow", "data-color-scheme", "no-preference: dark; light: light; dark: dark;", "data-icon", "octicon-star", "data-size", "small", "data-show-count", "false", "aria-label", "Star somnathpanja/youknow on GitHub", 1, "github-button"], ["href", "https://github.com/somnathpanja/youknow/subscription", "data-color-scheme", "no-preference: dark; light: light; dark: dark;", "data-icon", "octicon-eye", "data-size", "small", "data-show-count", "false", "aria-label", "Watch somnathpanja/youknow on GitHub", 1, "github-button"], ["href", "https://github.com/somnathpanja/youknow/issues", "data-color-scheme", "no-preference: dark; light: light; dark: dark;", "data-icon", "octicon-issue-opened", "data-size", "small", "data-show-count", "false", "aria-label", "Issue somnathpanja/youknow on GitHub", 1, "github-button"], ["href", "https://github.com/somnathpanja", "data-color-scheme", "no-preference: dark; light: light; dark: dark;", "data-show-count", "true", "aria-label", "Follow @somnathpanja on GitHub", 1, "github-button"]], template: function NavBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_mat_icon_click_1_listener() { return ctx.go2ServersPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "self_improvement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_span_click_3_listener() { return ctx.go2ServersPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "The farther you go the less you know. ~ Socrates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_9_listener() { return ctx.go2ServersPage(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Star");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Watch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Issue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Follow @somnathpanja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__["MatMenuItem"]], styles: [".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.small-caption[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 10px;\n  left:-82px;\n  height: 8px;\n  top:20px;\n  -webkit-text-size-adjust: auto;\n     -moz-text-size-adjust: auto;\n          text-size-adjust: auto;\n  line-height: 0px;\n  color:lightslategray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFVBQVU7RUFDVixXQUFXO0VBQ1gsUUFBUTtFQUNSLDhCQUFzQjtLQUF0QiwyQkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5zbWFsbC1jYXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxlZnQ6LTgycHg7XG4gIGhlaWdodDogOHB4O1xuICB0b3A6MjBweDtcbiAgdGV4dC1zaXplLWFkanVzdDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDBweDtcbiAgY29sb3I6bGlnaHRzbGF0ZWdyYXk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav-bar',
                templateUrl: './nav-bar.component.html',
                styleUrls: ['./nav-bar.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hUZ4":
/*!*******************************************************!*\
  !*** ./src/app/components/server/server.component.ts ***!
  \*******************************************************/
/*! exports provided: ServerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerComponent", function() { return ServerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../models/server */ "jL0J");
/* harmony import */ var _assets_common_eventTypes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../assets/common/eventTypes.json */ "wtnX");
var _assets_common_eventTypes_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../../assets/common/eventTypes.json */ "wtnX", 1);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "TiKg");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _interfaces_listItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../interfaces/listItem */ "0Ux6");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_ws_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/ws.service */ "Swid");
/* harmony import */ var _services_servers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/servers.service */ "xeQw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "FKr1");






















function ServerComponent_mat_option_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const unit_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", unit_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", unit_r9.viewValue, " ");
} }
function ServerComponent_mat_list_option_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r10.value)("selected", item_r10.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.name, " ");
} }
function ServerComponent_mat_list_option_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", item_r11.value)("selected", item_r11.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r11.name, " ");
} }
const _c0 = function (a0) { return { "width.%": a0 }; };
var SJ = SilverJs;
var Chart = SilverJs.Chart;
class ServerComponent {
    constructor(route, router, wsService, serversService) {
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
        this.zoomUnits = [
            { value: 'second', viewValue: 'Second' },
            { value: 'minute', viewValue: 'Minute' },
            { value: 'hour', viewValue: 'Hour' },
            { value: 'day', viewValue: 'Day' },
            { value: 'week', viewValue: 'Week' },
            { value: 'quarter', viewValue: 'Quarter' },
            { value: 'month', viewValue: 'Month' },
            { value: 'year', viewValue: 'Year' }
        ];
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.agent_id = params['agent_id'];
            this.serversService.getServer(this.agent_id).subscribe(server => {
                this.server = server;
            });
        });
    }
    ngOnDestroy() {
        console.log('DESTROY===>');
        this.wsService.detachEvent(_assets_common_eventTypes_json__WEBPACK_IMPORTED_MODULE_2__["OS_UPDATE"], this.agent_id);
    }
    ngAfterViewInit() {
        let self = this;
        google.charts.setOnLoadCallback(() => {
            this.createCPUGraph();
            this.createLoadAvgGraph();
            this.createRamGraph();
            this.createSwapMemGraph();
            this.createDiskGraph();
            this.createCpu4ProcessGraph();
            // this.createMemory4ProcessGraph();
            this.wsService.attachEvent(_assets_common_eventTypes_json__WEBPACK_IMPORTED_MODULE_2__["OS_UPDATE"], this.agent_id, function (data) {
                console.log(data);
                //Sort by app name
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
    selectedTabChange(event) {
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
                this.selectedHistoryTabChange({ index: 0 });
                break;
            case 3:
                break;
        }
    }
    onConfigChange() {
        this.selectedHistoryTabChange({ index: this.historyTabSelectedIndex });
    }
    selectedHistoryTabChange(event) {
        console.log("Index" + event.index);
        this.historyTabSelectedIndex = event.index;
        let startTs = new Date(this.startDate).getTime();
        let endTs = new Date(this.endDate).getTime();
        let apps = ['sys'];
        let fields = [];
        let unit = this.unitSelected;
        let divId;
        let yAxisSettings = {};
        let chartOptions = {};
        switch (event.index) {
            case 0:
                divId = 'loadAvgHistoryChart';
                fields = ['load_avg1', 'load_avg5', 'load_avg15'];
                chartOptions.tooltip = { sharing: 'singleShared' };
                break;
            case 1:
                divId = 'diskHistoryChart';
                fields = ['disk_total', 'disk_used', 'disk_free'];
                yAxisSettings.valueFormatRange = [1, 'MB', 1000, 'GB'];
                chartOptions.tooltip = { sharing: 'singleShared' };
                break;
            case 2:
                divId = 'swapHistoryChart';
                fields = ['mem_swap_total', 'mem_swap_free', 'mem_swap_used', 'mem_swap_avail'];
                yAxisSettings.valueFormatRange = [1, 'KB', 1000, 'MB', 1e+6, 'GB'];
                chartOptions.tooltip = { sharing: 'singleShared' };
                break;
            case 3:
                divId = 'cpuHistoryChart';
                fields = ['cpu_percent'];
                apps = [];
                chartOptions.tooltip = { sharing: 'singleShared' };
                break;
            case 4:
                divId = 'memoryHistoryChart';
                fields = ['mem_res'];
                apps = [];
                chartOptions.tooltip = { sharing: 'singleShared' };
                yAxisSettings.valueFormatRange = [1, 'KB', 1000, 'MB', 1e+6, 'GB'];
                break;
        }
        this.serversService.getHistoryData(this.agent_id, startTs, endTs, apps, fields, unit).then(chartData => {
            this.createOrUpdateHistoryGraph(divId, chartData, unit, yAxisSettings, chartOptions);
        });
    }
    createMemory4ProcessGraph() {
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
                        labelFont: { fontWeight: 'bold', fontSize: 10 },
                        axisLineThickness: 0.2
                    }]
            });
        }
    }
    createCpu4ProcessGraph() {
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
                        labelFont: { fontWeight: 'bold', fontSize: 10 },
                        axisLineThickness: 0.2
                    }]
            });
        }
    }
    createCPUGraph() {
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
                    axisLineThickness: 0.2,
                }],
            axesX: [{
                    tickLength: 1,
                    axisLineThickness: 0.2,
                    title: "CPU %"
                }]
        });
    }
    createLoadAvgGraph() {
        this.loadAvgChart = new Chart("loadAvgChartDiv", {
            // width: 300, height: 160,
            border: this.borderThickness,
            bevel: false,
            shadow: this.shadowEnabled,
            borderColor: 'black',
            cornerRadius: this.cornerRadius,
            padding: [0, 0, 0, 0],
            titles: [{ text: "Load Average", fontSize: 12, fontWeight: 'bold', padding: [0, 0, 0, 0] }],
            axesY: [{
                    visible: false,
                    tickEnabled: false,
                    tickLength: 1,
                    min: 0,
                    interval: 2,
                    axisLineThickness: 0.2,
                }],
            axesX: [{
                    tickLength: 1,
                    axisLineThickness: 0.2,
                    tickEnabled: false
                }]
        });
    }
    createRamGraph() {
        this.ramGraph = new Chart("ramChartDiv", {
            // width: 300, height: 160,
            border: this.borderThickness,
            bevel: false,
            shadow: this.shadowEnabled,
            borderColor: 'black',
            cornerRadius: this.cornerRadius,
            padding: [0, 0, 0, 0],
            titles: [{ text: "Physical Memory", fontSize: 12, fontWeight: 'bold' }],
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
                    tickEnabled: false,
                }]
        });
    }
    createSwapMemGraph() {
        this.swapMemGraph = new Chart("swapChartDiv", {
            // width: 300, height: 160,
            border: this.borderThickness,
            bevel: false,
            shadow: this.shadowEnabled,
            borderColor: 'black',
            cornerRadius: this.cornerRadius,
            padding: [0, 0, 0, 0],
            titles: [{ text: "Swap Memory", fontSize: 12, fontWeight: 'bold' }],
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
    createDiskGraph() {
        this.diskGraph = new Chart("diskChartDiv", {
            // width: 300, height: 160,
            border: this.borderThickness,
            bevel: false,
            shadow: this.shadowEnabled,
            borderColor: 'black',
            cornerRadius: this.cornerRadius,
            padding: [0, 0, 0, 0],
            titles: [{ text: "Disk", fontSize: 12, fontWeight: 'bold' }],
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
                    labelFont: { fontSize: 14 }
                }]
        });
    }
    updateCPU4ProcessGraph(data) {
        var chartData;
        if (data) {
            chartData = [{
                    plotAs: 'column',
                    tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
                    labelEnabled: true,
                    labelFont: { fontSize: 9, fontWeight: 'bold' },
                    points: []
                }];
            data.lines.forEach((process) => {
                chartData[0].points.push({ xLabel: process.app, yValue: process.cpu_percent });
            });
            this._tmpDataCpu4ProcessGraph = chartData;
        }
        else {
            chartData = this._tmpDataCpu4ProcessGraph;
        }
        if (this.tabSelectedIndex == 0 && this.cpu4ProcessGraph && chartData) {
            this.cpu4ProcessGraph.setData(chartData);
            this.cpu4ProcessGraph.render();
        }
    }
    updateMemory4ProcessGraph(data) {
        var chartData;
        if (data) {
            chartData = [{
                    plotAs: 'column',
                    labelEnabled: true,
                    labelFont: { fontSize: 9, fontWeight: 'bold' },
                    points: []
                }];
            data.lines.forEach((process) => {
                chartData[0].points.push({
                    xLabel: process.app,
                    yValue: process.mem_used_percent,
                    tooltipText: `<b style='color:{color};'>Memory</b>: {yValue}%<br><b>RES:</b> ${this.readableKiloBytes(process.mem_res)}<br><b>VIRT:</b>${this.readableKiloBytes(process.mem_virt)}`
                });
            });
            this._tmpDataMem4ProcessGraph = chartData;
        }
        else {
            chartData = this._tmpDataMem4ProcessGraph;
        }
        if (this.tabSelectedIndex == 1 && this.mem4ProcessGraph && chartData) {
            this.mem4ProcessGraph.setData(chartData);
            this.mem4ProcessGraph.render();
        }
    }
    updateCPUGraph(data) {
        var chartData = [{
                plotAs: 'bar',
                tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}%",
                labelEnabled: true,
                points: [
                    { xLabel: 'ST', yValue: data.sys.cpu_st, },
                    //{ xLabel: 'si', yValue: data.sys.cpu_si },
                    //{ xLabel: 'hi', yValue: data.sys.cpu_hi },
                    { xLabel: 'WA', yValue: data.sys.cpu_wa },
                    { xLabel: 'ID', yValue: data.sys.cpu_id },
                    // { xLabel: 'ni', yValue: data.sys.cpu_ni },
                    { xLabel: 'SY', yValue: data.sys.cpu_sy },
                    { xLabel: 'US', yValue: data.sys.cpu_us },
                ]
            }];
        this.cpuChart.setData(chartData);
        this.cpuChart.render();
        this.idealCPUInPercent = data.sys.cpu_id;
    }
    updateLoadAvgGraph(data) {
        var ds = [{
                plotAs: 'bar',
                tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
                labelText: "{yValue}",
                labelEnabled: true,
                points: [
                    { xLabel: '1m', color: "orange", yValue: data.sys.load_avg1 },
                    { xLabel: '5m', color: "green", yValue: data.sys.load_avg5 },
                    { xLabel: '15m', color: "red", yValue: data.sys.load_avg15 }
                ]
            }];
        let max = Math.max(data.sys.load_avg1, data.sys.load_avg5, data.sys.load_avg15);
        this.loadAvgChart.axesY[0].max(max + 1);
        this.loadAvgChart.setData(ds);
        this.loadAvgChart.render();
    }
    updateRAMGraph(data) {
        var ds = [{
                plotAs: 'bar',
                tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
                labelEnabled: true,
                points: [
                    { xLabel: 'Buffer/Cache', color: "orange", yValue: data.sys.mem_buff_cache },
                    { xLabel: 'Free', color: "green", yValue: data.sys.mem_free },
                    { xLabel: 'Used', color: "red", yValue: data.sys.mem_used },
                    { xLabel: 'Total', color: "gray", yValue: data.sys.mem_total }
                ]
            }];
        // this.ramGraph.axesY[0].max(data.sys.mem_total);
        this.ramGraph.setData(ds);
        this.ramGraph.render();
    }
    updateSwapMemGraph(data) {
        var ds = [{
                plotAs: 'bar',
                tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
                labelEnabled: true,
                points: [
                    { xLabel: 'Available', color: "orange", yValue: data.sys.mem_swap_avail },
                    { xLabel: 'Free', color: "green", yValue: data.sys.mem_swap_free },
                    { xLabel: 'Used', color: "red", yValue: data.sys.mem_swap_used },
                    { xLabel: 'Total', color: "gray", yValue: data.sys.mem_swap_total },
                ]
            }];
        //this.swapMemGraph.axesY[0].max(Math.max(data.sys.mem_swap_total, data.sys.mem_swap_avail));
        this.swapMemGraph.setData(ds);
        this.swapMemGraph.render();
    }
    updateDiskGraph(data) {
        var ds = [{
                plotAs: 'bar',
                tooltipText: "<b style='color:{color};'>{xLabel}</b>: {yValue}",
                labelEnabled: true,
                points: [
                    { xLabel: 'Free', color: "green", yValue: data.sys.disk_free },
                    { xLabel: 'Used', color: "red", yValue: data.sys.disk_used },
                    { xLabel: 'Total', color: "gray", yValue: data.sys.disk_total },
                ]
            }];
        //this.diskGraph.axesY[0].max(data.sys.disk_total);
        this.diskGraph.setData(ds);
        this.diskGraph.render();
    }
    createHistoryGraph(id, yAxisSettings, chartOptions) {
        return new Chart(id, Object.assign({
            // width: 300, height: 160,
            border: this.borderThickness,
            bevel: false,
            shadow: this.shadowEnabled,
            borderColor: 'black',
            cornerRadius: this.cornerRadius,
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
                    labelAngel: -90,
                    labelFont: { fontSize: 8, fontWeight: 'bold' }
                }]
        }, chartOptions));
    }
    onCPUHistoryLegendItemsSelected(selectedItems) {
        this.selectedDsNamesOfCPUHistory = selectedItems.map((item) => item.value);
        console.log(this.selectedDsNamesOfCPUHistory);
        let series = [];
        this.cpuHistoryData.forEach((ds, index) => {
            let selected = true;
            if (this.selectedDsNamesOfCPUHistory) {
                selected = (this.selectedDsNamesOfCPUHistory.indexOf(ds.name) !== -1);
            }
            if (selected)
                series.push(ds);
        });
        this.cpuHistoryChart.setData(series);
        this.cpuHistoryChart.render();
    }
    onMemoryHistoryLegendItemsSelected(selectedItems) {
        this.selectedDsNamesOfMemHistory = selectedItems.map((item) => item.value);
        console.log(this.selectedDsNamesOfMemHistory);
        let series = [];
        this.memHistoryData.forEach((ds, index) => {
            let selected = true;
            if (this.selectedDsNamesOfMemHistory) {
                selected = (this.selectedDsNamesOfMemHistory.indexOf(ds.name) !== -1);
            }
            if (selected)
                series.push(ds);
        });
        this.memoryHistoryChart.setData(series);
        this.memoryHistoryChart.render();
    }
    createOrUpdateHistoryGraph(id, chartData, unit, yAxisSettings, chartOptions) {
        chartData.forEach((ds) => {
            ds.lineWidth = 2;
            ds.plotAs = 'line';
            ds.lineWidth = 0.8;
            ds.showInLegend = false;
            ds.legendText = ds.name.substr(ds.name.length - 16);
            ds.tooltipText = "<span style='color:{color};font-size:12px;'><b style='color:{color};font-size:12px;'>{name}</b>: {yValue}</span>";
        });
        let chart;
        switch (id) {
            case 'loadAvgHistoryChart':
                chart = this.loadAvgHistoryChart = this.loadAvgHistoryChart || this.createHistoryGraph(id, yAxisSettings, chartOptions);
                break;
            case 'diskHistoryChart':
                chart = this.diskHistoryChart = this.diskHistoryChart || this.createHistoryGraph(id, yAxisSettings, chartOptions);
                break;
            case 'swapHistoryChart':
                chart = this.swapHistoryChart = this.swapHistoryChart || this.createHistoryGraph(id, yAxisSettings, chartOptions);
                this.cpuHistoryData = chartData;
                break;
            case 'cpuHistoryChart':
                chart = this.cpuHistoryChart = this.cpuHistoryChart || this.createHistoryGraph(id, yAxisSettings, chartOptions);
                this.cpuHistoryData = chartData;
                let series = [];
                // Load the default selection first 3 series
                if (!this.selectedDsNamesOfCPUHistory) {
                    this.selectedDsNamesOfCPUHistory = chartData.slice(0, 3).map((ds) => {
                        return ds.name;
                    });
                }
                this.legendEntriesCpuHistory = chartData.map((ds, index) => {
                    let selected = true;
                    if (this.selectedDsNamesOfCPUHistory) {
                        selected = (this.selectedDsNamesOfCPUHistory.indexOf(ds.name) !== -1);
                    }
                    if (selected)
                        series.push(ds);
                    return new _interfaces_listItem__WEBPACK_IMPORTED_MODULE_4__["ListItem"](ds.name.substr(ds.name - 15), ds.name, selected);
                });
                chartData = series;
                break;
            case 'memoryHistoryChart':
                chart = this.memoryHistoryChart = this.memoryHistoryChart || this.createHistoryGraph(id, yAxisSettings, chartOptions);
                this.memHistoryData = chartData;
                let memSeries = [];
                // Load the default selection first 3 series
                if (!this.selectedDsNamesOfMemHistory) {
                    this.selectedDsNamesOfMemHistory = chartData.slice(0, 3).map((ds) => {
                        return ds.name;
                    });
                }
                this.legendEntriesMemHistory = chartData.map((ds, index) => {
                    let selected = true;
                    if (this.selectedDsNamesOfMemHistory) {
                        selected = (this.selectedDsNamesOfMemHistory.indexOf(ds.name) !== -1);
                    }
                    if (selected)
                        memSeries.push(ds);
                    return new _interfaces_listItem__WEBPACK_IMPORTED_MODULE_4__["ListItem"](ds.name.substr(ds.name - 15), ds.name, selected);
                });
                chartData = memSeries;
                break;
        }
        chart.setData(chartData);
        chart.render();
    }
    loadScript(url) {
        const body = document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
    readableBytes(bytes) {
        var i = Math.floor(Math.log(bytes) / Math.log(1024));
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    }
    readableKiloBytes(kb) {
        var bytes = kb * 1024;
        var i = Math.floor(Math.log(bytes) / Math.log(1024));
        var sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
    }
    goToLink(url) {
        window.open(url, "_blank");
    }
}
ServerComponent.ɵfac = function ServerComponent_Factory(t) { return new (t || ServerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_servers_service__WEBPACK_IMPORTED_MODULE_7__["ServersService"])); };
ServerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServerComponent, selectors: [["app-server"]], inputs: { server: "server", idealCPUInPercent: "idealCPUInPercent", tabSelectedIndex: "tabSelectedIndex", historyTabSelectedIndex: "historyTabSelectedIndex", startDate: "startDate", endDate: "endDate", unitSelected: "unitSelected", legendEntriesCpuHistory: "legendEntriesCpuHistory", legendEntriesMemHistory: "legendEntriesMemHistory", zoomUnits: "zoomUnits" }, decls: 111, vars: 20, consts: [[1, "container"], [1, "header-display", "hot-linear-gradient"], ["id", "hotness", 1, "color-layer", "child-right", 3, "ngStyle"], ["mat-button", "", "color", "primary", "aria-label", "Platform"], ["mat-button", "", "aria-label", "Platform"], ["mat-button", "", "aria-label", "CPU Count"], ["mat-button", "", "aria-label", "IP Address", 3, "click"], ["fxLayout", ""], ["id", "cpuChartDiv", "mat-list-item", "", 1, "nano-chart"], ["src", "assets/icons/info-24px.svg", "matTooltip", "Info about the action", "matTooltip", "US: User cpu time (or) % CPU time spent in user space \\n\u2022\nSY: System cpu time (or) % CPU time spent in kernel space \\n\u2022\nNI: User nice cpu time (or) % CPU time spent on low priority processes \u2022\nID: Idle cpu time (or) % CPU time spent idle \u2022\nWA: I/O wait cpu time (or) % CPU time spent in wait (on disk) \u2022\nHI: Hardware irq (or) % CPU time spent servicing/handling hardware interrupts \u2022\nSI: Software irq (or) % CPU time spent servicing/handling software interrupts \u2022\nST: Steal time - - % CPU time in involuntary wait by virtual cpu while hypervisor is servicing another processor (or) % CPU time stolen from a virtual machine", "matTooltipPosition", "right", "matTooltipHideDelay", "100000", 1, "infoIcon", 3, "matTooltipClass"], ["tooltip", "matTooltip"], ["id", "loadAvgChartDiv", "mat-list-item", "", 1, "nano-chart"], ["id", "ramChartDiv", "mat-list-item", "", 1, "nano-chart"], ["id", "swapChartDiv", "mat-list-item", "", 1, "nano-chart"], ["id", "diskChartDiv", "mat-list-item", "", 1, "nano-chart"], ["dynamicHeight", "", 1, "fullWidth", "remove-top-margin", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["label", "RealTime CPU"], ["id", "cpuChart4ProcessDiv", 1, "full-width-chart"], ["label", "RealTime Memory"], ["id", "memChart4ProcessDiv", 1, "full-width-chart"], ["label", "History"], ["autosize", "", 1, "example-container"], ["mode", "over", 1, "example-sidenav"], ["drawer", ""], [2, "width", "250px"], [1, "date-time-picker"], ["type", "datetime-local", "id", "history-start-datetime", "name", "history-start-datetime", 3, "ngModel", "value", "ngModelChange"], ["type", "datetime-local", "id", "history-end-datetime", "name", "history-end-datetime", 3, "ngModel", "value", "ngModelChange"], ["appearance", "fill", 2, "width", "100%"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "center"], ["type", "button", "mat-raised-button", "", "color", "primary", 3, "click"], [1, "example-sidenav-content"], ["mat-button", "", 1, "slide-bar-opener", 3, "click"], ["animationDuration", "0ms", 1, "fullWidth", 3, "selectedIndex", "selectedIndexChange", "selectedTabChange"], ["label", "Load Average"], ["id", "loadAvgHistoryChart", 1, "full-width-history-chart"], ["label", "Disk"], ["id", "diskHistoryChart", 1, "full-width-history-chart"], ["label", "Swap"], ["id", "swapHistoryChart", 1, "full-width-history-chart"], ["label", "CPU"], ["drawerCPU", ""], ["type", "button", "mat-raised-button", "", "color", "primary", 2, "margin-top", "5px", 3, "click"], ["cpuHistoryLegend", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "history-slide-bar-opener", 3, "click"], ["id", "cpuHistoryChart", 1, "full-width-history-chart"], ["label", "Memory"], ["drawerMEM", ""], ["memHistoryLegend", ""], ["id", "memoryHistoryChart", 1, "full-width-history-chart"], [3, "value"], [3, "value", "selected"]], template: function ServerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_button_click_18_listener() { return ctx.goToLink("https://" + ctx.server.ip); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "dns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-nav-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-tab-group", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ServerComponent_Template_mat_tab_group_selectedIndexChange_30_listener($event) { return ctx.tabSelectedIndex = $event; })("selectedTabChange", function ServerComponent_Template_mat_tab_group_selectedTabChange_30_listener($event) { return ctx.selectedTabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-tab", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-tab", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-tab", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-drawer-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-drawer", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServerComponent_Template_input_ngModelChange_43_listener($event) { return ctx.startDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ServerComponent_Template_input_ngModelChange_47_listener($event) { return ctx.endDate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Zoom Level");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-select", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ServerComponent_Template_mat_select_valueChange_56_listener($event) { return ctx.unitSelected = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ServerComponent_mat_option_57_Template, 2, 2, "mat-option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Include processes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_button_click_69_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38); _r1.toggle(); return ctx.onConfigChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-icon", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_mat_icon_click_72_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38); return _r1.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-tab-group", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ServerComponent_Template_mat_tab_group_selectedIndexChange_74_listener($event) { return ctx.historyTabSelectedIndex = $event; })("selectedTabChange", function ServerComponent_Template_mat_tab_group_selectedTabChange_74_listener($event) { return ctx.selectedHistoryTabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-tab", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-tab", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-tab", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-tab", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-drawer-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-drawer", 22, 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_button_click_87_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](90); _r3.toggle(); return ctx.onCPUHistoryLegendItemsSelected(_r4.selectedOptions.selected); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "mat-selection-list", null, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, ServerComponent_mat_list_option_91_Template, 2, 3, "mat-list-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_mat_icon_click_93_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](84); return _r3.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " tune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-tab", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-drawer-container", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-drawer", 22, 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "button", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_button_click_102_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](99); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](105); _r6.toggle(); return ctx.onMemoryHistoryLegendItemsSelected(_r7.selectedOptions.selected); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Apply ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-selection-list", null, 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](106, ServerComponent_mat_list_option_106_Template, 2, 3, "mat-list-option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "mat-icon", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServerComponent_Template_mat_icon_click_108_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](99); return _r6.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, " tune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.idealCPUInPercent));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.server.agent_id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.server.platform, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.server.cpu_count, " CPU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A0", ctx.server.ip, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltipClass", "my-tooltip");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.tabSelectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startDate)("value", ctx.startDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.endDate)("value", ctx.endDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.startDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A0", ctx.endDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.unitSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.zoomUnits);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx.historyTabSelectedIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.legendEntriesCpuHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.legendEntriesMemHistory);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTab"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatDrawer"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggle"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDivider"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatSelectionList"], _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatOption"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListOption"]], styles: [".blue[_ngcontent-%COMP%] {\n  color:dodgerblue\n}\n\n.red[_ngcontent-%COMP%] {\n  color:indianred\n}\n\n.header1[_ngcontent-%COMP%] {\n  font-size: 35px;\n}\n\n.fullWidth[_ngcontent-%COMP%] {\n width: 100%;\n}\n\n.container[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  padding-top: 0.2rem;\n}\n\n.infoIcon[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10000000;\n  float: right;\n  font-size: 12px;\n  height: 20px;\n  opacity: 0.5;\n}\n\n.my-tooltip[_ngcontent-%COMP%] {\n  white-space: pre-line;\n}\n\n.nano-chart[_ngcontent-%COMP%] {\n  display: inline;\n  float: left;\n  width: 250px; \n  height: 100px;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\n.margin-common[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  margin-top: 0.5rem;\n  margin-bottom: -0.5rem;\n  margin-left: 0.5rem;\n}\n\n.mini-chart[_ngcontent-%COMP%] {\n  display: inline;\n  float: left;\n  width: 300px; \n  height: 150px;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n}\n\n.full-width-chart[_ngcontent-%COMP%] {\n  display: inline;\n  float: left;\n  width: 100%; \n  height: 400px;\n  margin-right: 1rem;\n}\n\n.full-width-history-chart[_ngcontent-%COMP%] {\n  display: inline;\n  float: left;\n  width: 100%; \n  height: 480px;\n  margin-right: 1rem;\n  font-size: 8px;\n}\n\n.header-display[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n}\n\n.child-right[_ngcontent-%COMP%] {\n  height: 100%;\n  \n  position: absolute;\n  right: 0;\n  top: 0;\n  transition: width 2s;\n}\n\n.color-layer[_ngcontent-%COMP%] {\n  background:rgb(245, 245, 245);\n}\n\n.hot-linear-gradient[_ngcontent-%COMP%] {\n  background-color:transparent;\n  background-image: linear-gradient(to right,rgba(4, 255, 8, 0.191),rgba(241, 245, 0, 0.191), rgba(255, 0, 0, 0.191));\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content;\n   \n}\n\n.child-right-float[_ngcontent-%COMP%]{\n  float: right;\n  width:-webkit-fit-content;\n  width:-moz-fit-content;\n  width:fit-content;\n  height:-webkit-fit-content;\n  height:-moz-fit-content;\n  height:fit-content;\n  \n  z-index: 10000;\n  margin-top: -3px;\n}\n\n.back-gray[_ngcontent-%COMP%]{\n  background-color: rgb(236, 236, 236);\n}\n\n.back-white[_ngcontent-%COMP%]{\n  background-color: rgb(256, 256, 256);\n}\n\n.slide-bar-opener[_ngcontent-%COMP%]{\n  float: left;\n  position: absolute;\n  z-index: 10000;\n  width: 30px;\n  margin-top: 10px;\n  cursor: pointer;\n}\n\n.date-time-picker[_ngcontent-%COMP%]{\n background-color: rgb(233, 233, 233);\n padding: 0.5rem;\n margin-bottom: 1rem;\n border:1 solid rgb(179, 179, 179);\n}\n\n.date-time-picker[_ngcontent-%COMP%]   input[type=\"datetime-local\"][_ngcontent-%COMP%] {\n  width: 97%;\n  margin-right: 0.5rem;\n  \n  \n}\n\n.remove-top-margin[_ngcontent-%COMP%] {\n  margin-top: 100px;\n}\n\n.history-slide-bar-opener[_ngcontent-%COMP%]{\n  float: left;\n  position: absolute;\n  z-index: 10000;\n  width: 30px;\n  margin-top: 10px;\n  margin-left: 55px;\n  cursor: pointer;\n}\n\nmat-list-option[_ngcontent-%COMP%], mat-ripple[_ngcontent-%COMP%], .mat-list-item-content[_ngcontent-%COMP%]   .mat-list-item-content-reverse[_ngcontent-%COMP%]  {\n  max-height: 28px;\n  height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixtSEFBbUg7QUFDckg7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQWlCO0VBQWpCLHNCQUFpQjtFQUFqQixpQkFBaUI7R0FDaEIsNkJBQTZCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUFpQjtFQUFqQixzQkFBaUI7RUFBakIsaUJBQWlCO0VBQ2pCLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsaUNBQWlDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2QiLCJmaWxlIjoic2VydmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5ibHVlIHtcbiAgY29sb3I6ZG9kZ2VyYmx1ZVxufVxuXG4ucmVkIHtcbiAgY29sb3I6aW5kaWFucmVkXG59XG5cbi5oZWFkZXIxIHtcbiAgZm9udC1zaXplOiAzNXB4O1xufVxuXG4uZnVsbFdpZHRoIHtcbiB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuMnJlbTtcbn1cblxuLmluZm9JY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGhlaWdodDogMjBweDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4ubXktdG9vbHRpcCB7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLm5hbm8tY2hhcnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMjUwcHg7IFxuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5tYXJnaW4tY29tbW9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTAuNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbn1cblxuLm1pbmktY2hhcnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzAwcHg7IFxuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5mdWxsLXdpZHRoLWNoYXJ0IHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7IFxuICBoZWlnaHQ6IDQwMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5mdWxsLXdpZHRoLWhpc3RvcnktY2hhcnQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTsgXG4gIGhlaWdodDogNDgwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbi5oZWFkZXItZGlzcGxheSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGlsZC1yaWdodCB7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogd2lkdGg6IDEwJTsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAycztcbn1cblxuLmNvbG9yLWxheWVyIHtcbiAgYmFja2dyb3VuZDpyZ2IoMjQ1LCAyNDUsIDI0NSk7XG59XG5cbi5ob3QtbGluZWFyLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LHJnYmEoNCwgMjU1LCA4LCAwLjE5MSkscmdiYSgyNDEsIDI0NSwgMCwgMC4xOTEpLCByZ2JhKDI1NSwgMCwgMCwgMC4xOTEpKTtcbn1cblxuLmNlbnRlciB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XG4gICAvKiBib3JkZXI6IDNweCBzb2xpZCBncmF5OyAgKi9cbn1cblxuLmNoaWxkLXJpZ2h0LWZsb2F0e1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOmZpdC1jb250ZW50O1xuICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XG4gIC8qIGJvcmRlcjpzb2xpZCAxcHggIzAwRjsgKi9cbiAgei1pbmRleDogMTAwMDA7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbi5iYWNrLWdyYXl7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcbn1cblxuLmJhY2std2hpdGV7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTYsIDI1NiwgMjU2KTtcbn1cblxuLnNsaWRlLWJhci1vcGVuZXJ7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDAwO1xuICB3aWR0aDogMzBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF0ZS10aW1lLXBpY2tlcntcbiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCAyMzMsIDIzMyk7XG4gcGFkZGluZzogMC41cmVtO1xuIG1hcmdpbi1ib3R0b206IDFyZW07XG4gYm9yZGVyOjEgc29saWQgcmdiKDE3OSwgMTc5LCAxNzkpO1xufVxuXG4uZGF0ZS10aW1lLXBpY2tlciBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl0ge1xuICB3aWR0aDogOTclO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgLyogcGFkZGluZy1yaWdodDogMnJlbTsgKi9cbiAgLyogTW9yZSBzdHlsZXMgaGVyZSAqL1xufVxuXG4ucmVtb3ZlLXRvcC1tYXJnaW4ge1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuLmhpc3Rvcnktc2xpZGUtYmFyLW9wZW5lcntcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDA7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtbGlzdC1vcHRpb24sIG1hdC1yaXBwbGUsIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQgLm1hdC1saXN0LWl0ZW0tY29udGVudC1yZXZlcnNlICB7XG4gIG1heC1oZWlnaHQ6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-server',
                templateUrl: './server.component.html',
                styleUrls: ['./server.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_ws_service__WEBPACK_IMPORTED_MODULE_6__["WsService"] }, { type: _services_servers_service__WEBPACK_IMPORTED_MODULE_7__["ServersService"] }]; }, { server: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], idealCPUInPercent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], tabSelectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], historyTabSelectedIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], unitSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], legendEntriesCpuHistory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], legendEntriesMemHistory: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zoomUnits: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material-moment-adapter */ "1yaQ");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
























const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
    _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__["MatMomentDateModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]
];
class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[MaterialComponents], _angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__["MatMomentDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__["MatMomentDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltipModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_12__["MatListModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_18__["MatMomentDateModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [MaterialComponents],
                exports: [MaterialComponents],
            }]
    }], null, null); })();


/***/ }),

/***/ "jL0J":
/*!**********************************!*\
  !*** ./src/app/models/server.ts ***!
  \**********************************/
/*! exports provided: Server */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Server", function() { return Server; });
class Server {
    constructor(agent_id, ip, details, cpu_count, platform, stats_interval_ms, watch_process, last_updated_ts) {
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
    static clone(server) {
        return new Server(server.agent_id || '', server.ip || 'N/A', server.details || 'N/A', server.cpu_count || 0, server.platform || 'N/A', server.stats_interval_ms || 5000, server.watch_process || '[]', server.last_updated_ts || 0);
    }
    /**
     * @description Update reference of this server with the updated data
     * @param server
     */
    update(server) {
        return new Server(this.agent_id, server.details, server.ip, server.cpu_count, server.platform, server.stats_interval_ms, server.watch_process, server.last_updated_ts);
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/servers/servers.component */ "CBUe");
/* harmony import */ var _components_server_server_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/server/server.component */ "hUZ4");






const routes = [
    {
        path: '',
        component: _components_servers_servers_component__WEBPACK_IMPORTED_MODULE_2__["ServersComponent"]
    },
    {
        path: 'server',
        component: _components_server_server_component__WEBPACK_IMPORTED_MODULE_3__["ServerComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wtnX":
/*!*******************************************!*\
  !*** ./src/assets/common/eventTypes.json ***!
  \*******************************************/
/*! exports provided: OS_UPDATE, SELECTIVE_PROCESS_UPDATE, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"OS_UPDATE\":\"OS_UPDATE\",\"SELECTIVE_PROCESS_UPDATE\":\"SELECTIVE_PROCESS_UPDATE\"}");

/***/ }),

/***/ "xeQw":
/*!*********************************************!*\
  !*** ./src/app/services/servers.service.ts ***!
  \*********************************************/
/*! exports provided: ServersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServersService", function() { return ServersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ServersService {
    constructor(http) {
        this.http = http;
        this.host = window.location.protocol + '//' + ((window.location.host === 'localhost:4200') ? 'localhost:2600' : window.location.host);
        console.log(this.host);
    }
    getServers() {
        // https://stackoverflow.com/questions/49297680/angular-5-get-host-name-and-app-name-from-url
        return this.http.get(this.host + '/agents');
    }
    getServer(agent_id) {
        return this.http.get(this.host + '/agent/' + agent_id);
    }
    updateServer(agent_id, server) {
        let url = this.host + '/agent/update/' + agent_id;
        return this.http.post(url, server).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).toPromise();
    }
    addServer(server) {
        let url = this.host + '/agent/add';
        return this.http.post(url, server).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).toPromise();
    }
    getHistoryData(agent_id, startTs, endTs, apps, fields, unit) {
        let url = this.host + '/agent/' + agent_id + '/history?startTs=' + startTs +
            '&endTs=' + endTs +
            '&apps=' + apps.join() +
            '&fields=' + fields.join() +
            '&unit=' + unit;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError)).toPromise();
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // Return an observable with a user-facing error message.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    }
}
ServersService.ɵfac = function ServersService_Factory(t) { return new (t || ServersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ServersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServersService, factory: ServersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map