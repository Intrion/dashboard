﻿/**
* DevExpress Dashboard (bound-image-item.js)
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
var data_dashboard_item_1 = require("./data-dashboard-item");
var _bound_image_item_1 = require("./metadata/_bound-image-item");
var serializable_model_1 = require("../serializable-model");
var BoundImageItem = (function (_super) {
    __extends(BoundImageItem, _super);
    function BoundImageItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this._attachDataItem(_this, _bound_image_item_1.imageItem.propertyName);
        return _this;
    }
    BoundImageItem.prototype.getInfo = function () {
        return _bound_image_item_1.boundImageDashboardItemSerializationsInfo;
    };
    BoundImageItem.prototype._isCalculationSupported = function () {
        return false;
    };
    BoundImageItem.prototype._isSortingEnabled = function () {
        return false;
    };
    BoundImageItem.prototype._isTopNEnabled = function (dataItem) {
        return false;
    };
    BoundImageItem.prototype._getDefaultItemType = function () {
        return "BoundImage";
    };
    BoundImageItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    BoundImageItem.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        content.ViewModel.SizeMode = this.sizeMode();
        content.ViewModel.HorizontalAlignment = this.horizontalAlignment();
        content.ViewModel.VerticalAlignment = this.verticalAlignment();
    };
    return BoundImageItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.BoundImageItem = BoundImageItem;
serializable_model_1.itemTypesMap["BoundImage"] = { type: BoundImageItem, groupName: 'common', title: "DashboardStringId.DefaultNameBoundImageItem", index: 100 };
