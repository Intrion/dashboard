/**
* DevExpress Dashboard (text-box-item.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var data_dashboard_item_1 = require("./data-dashboard-item");
var _utils_1 = require("../internal/_utils");
var data_item_1 = require("../data-item/data-item");
var _text_box_item_1 = require("./metadata/_text-box-item");
var serializable_model_1 = require("../serializable-model");
var ko = require("knockout");
var TextBoxItem = (function (_super) {
    __extends(TextBoxItem, _super);
    function TextBoxItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.values = ko.observableArray([]);
        _this.__values = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Values, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_text_box_item_1.textBoxValues);
        _this.__values.subscribe(function (links) {
            _this._setLinkCollectionAcceptableShapingType(links, data_item_1.AcceptableShapingType.String);
        });
        _this._setLinkCollectionAcceptableShapingType(_this.__values(), data_item_1.AcceptableShapingType.String);
        _this._supportedUIStates(["error"]);
        return _this;
    }
    TextBoxItem.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__values.removeAll();
    };
    TextBoxItem.prototype.getInfo = function () {
        return _text_box_item_1.textBoxDashboardItemSerializationsInfo;
    };
    TextBoxItem.prototype._isCalculationSupported = function () {
        return false;
    };
    TextBoxItem.prototype._getDefaultItemType = function () {
        return "TextBox";
    };
    TextBoxItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    __decorate([
        _utils_1.collectionItemType("Value")
    ], TextBoxItem.prototype, "__values", void 0);
    return TextBoxItem;
}(data_dashboard_item_1.DataDashboardItem));
exports.TextBoxItem = TextBoxItem;
serializable_model_1.itemTypesMap["TextBox"] = { type: TextBoxItem, groupName: 'common', title: "DashboardStringId.DefaultNameTextBoxItem", index: 80 };
