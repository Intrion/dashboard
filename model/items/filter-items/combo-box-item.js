﻿/**
* DevExpress Dashboard (combo-box-item.js)
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
var filter_element_item_base_1 = require("./filter-element-item-base");
var _combo_box_item_1 = require("./metadata/_combo-box-item");
var serializable_model_1 = require("../../serializable-model");
var ComboBoxItem = (function (_super) {
    __extends(ComboBoxItem, _super);
    function ComboBoxItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, dashboardItemJSON, serializer) || this;
    }
    ComboBoxItem.prototype.getInfo = function () {
        return _combo_box_item_1.comboBoxDashboardItemSerializationsInfo;
    };
    ComboBoxItem.prototype._getDefaultItemType = function () {
        return "ComboBox";
    };
    ComboBoxItem.prototype._allowAllValue = function () { return this._isMultiselectable() || this.showAllValue(); };
    ComboBoxItem.prototype._isMultiselectable = function () { return this.comboBoxType() === 'Checked'; };
    return ComboBoxItem;
}(filter_element_item_base_1.FilterElementItemBase));
exports.ComboBoxItem = ComboBoxItem;
serializable_model_1.itemTypesMap["ComboBox"] = { type: ComboBoxItem, groupName: 'filter', title: "DashboardStringId.DefaultNameComboBoxItem", index: 320 };
