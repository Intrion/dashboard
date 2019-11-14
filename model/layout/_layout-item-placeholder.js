/**
* DevExpress Dashboard (_layout-item-placeholder.js)
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
var ko = require("knockout");
var DashboardLayoutItemPlaceholder = (function (_super) {
    __extends(DashboardLayoutItemPlaceholder, _super);
    function DashboardLayoutItemPlaceholder(parent, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, {}, serializer) || this;
        _this.parentNode(parent);
        return _this;
    }
    Object.defineProperty(DashboardLayoutItemPlaceholder.prototype, "_template", {
        get: function () { return "dx-dashboard-item-placeholder"; },
        enumerable: true,
        configurable: true
    });
    DashboardLayoutItemPlaceholder.prototype.moveTo = function (itemModel, location) { };
    DashboardLayoutItemPlaceholder.prototype._delete = function () { };
    DashboardLayoutItemPlaceholder.prototype._createViewModel = function () {
        var _this = this;
        var baseViewModel = _super.prototype._createViewModel.call(this);
        baseViewModel.create = function (modelItemJson, location) {
            var newItemModel = _this.parentNode()._dashboard()._createDashboardLayoutItem(modelItemJson);
            _this.parentNode()._addItem(newItemModel);
            return newItemModel._createViewModel();
        };
        baseViewModel.moveTo = function (itemModel, location) { };
        baseViewModel.hasItem = ko.observable(true);
        return baseViewModel;
    };
    DashboardLayoutItemPlaceholder.prototype._insertItemCore = function (layoutNodeToInsert, position) {
        if (this.parentNode()) {
            this.parentNode().childNodes.push(layoutNodeToInsert);
        }
    };
    DashboardLayoutItemPlaceholder.prototype._getDefaultItemType = function () { return ""; };
    return DashboardLayoutItemPlaceholder;
}(dashboard_layout_node_1.DashboardLayoutNode));
exports.DashboardLayoutItemPlaceholder = DashboardLayoutItemPlaceholder;
