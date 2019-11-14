/**
* DevExpress Dashboard (dashboard-layout-tab-page.js)
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
var dashboard_layout_group_1 = require("./dashboard-layout-group");
var _layout_utils_1 = require("./_layout-utils");
var DashboardLayoutTabPage = (function (_super) {
    __extends(DashboardLayoutTabPage, _super);
    function DashboardLayoutTabPage(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    Object.defineProperty(DashboardLayoutTabPage.prototype, "_template", {
        get: function () { return "dx-layout-group-container"; },
        enumerable: true,
        configurable: true
    });
    DashboardLayoutTabPage.prototype._getDefaultItemType = function () { return "LayoutTabPage"; };
    DashboardLayoutTabPage.prototype._deleteDashbordItem = function () {
        _super.prototype._deleteDashbordItem.call(this);
        var tabContainer = this.parentNode().item;
        var page = this.item;
        var deletedPageIndex = tabContainer.tabPages().indexOf(page);
        if (tabContainer._activeTabPage() === page) {
            var newIndex = deletedPageIndex === tabContainer.tabPages().length - 1 && tabContainer.tabPages().length > 1 ? deletedPageIndex - 1 : deletedPageIndex;
            tabContainer.tabPages.remove(page);
            tabContainer._activeTabPage(tabContainer.tabPages()[newIndex]);
        }
        else {
            tabContainer.tabPages.remove(page);
        }
    };
    return DashboardLayoutTabPage;
}(dashboard_layout_group_1.DashboardLayoutGroup));
exports.DashboardLayoutTabPage = DashboardLayoutTabPage;
_layout_utils_1._layoutItemTypeMap["LayoutTabPage"] = DashboardLayoutTabPage;
