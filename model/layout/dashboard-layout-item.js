﻿/**
* DevExpress Dashboard (dashboard-layout-item.js)
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
var dashboard_layout_node_1 = require("./dashboard-layout-node");
var _layout_utils_1 = require("./_layout-utils");
var DashboardLayoutItem = (function (_super) {
    __extends(DashboardLayoutItem, _super);
    function DashboardLayoutItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    Object.defineProperty(DashboardLayoutItem.prototype, "_template", {
        get: function () { return "dx-dashboard-item"; },
        enumerable: true,
        configurable: true
    });
    DashboardLayoutItem.prototype._getDefaultItemType = function () { return "LayoutItem"; };
    DashboardLayoutItem.prototype._deleteDashbordItem = function () {
        if (this._dashboard()) {
            this._dashboard().items.remove(this.item);
        }
    };
    return DashboardLayoutItem;
}(dashboard_layout_node_1.DashboardLayoutNode));
exports.DashboardLayoutItem = DashboardLayoutItem;
_layout_utils_1._layoutItemTypeMap["LayoutItem"] = DashboardLayoutItem;
