/**
* DevExpress Dashboard (dashboard-tab-page.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var dashboard_item_1 = require("../dashboard-item");
var _dashboard_tab_page_1 = require("./metadata/_dashboard-tab-page");
var DashboardTabPage = (function (_super) {
    __extends(DashboardTabPage, _super);
    function DashboardTabPage(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this._uniqueNamePrefix = 'dashboardTabPage';
        return _this;
    }
    DashboardTabPage.prototype.getInfo = function () {
        return _dashboard_tab_page_1.tabPageSerializationInfo;
    };
    DashboardTabPage.prototype.getUniqueNamePrefix = function () {
        return this._uniqueNamePrefix;
    };
    DashboardTabPage.prototype._getDefaultItemType = function () {
        return "Page";
    };
    return DashboardTabPage;
}(dashboard_item_1.DashboardItem));
exports.DashboardTabPage = DashboardTabPage;
