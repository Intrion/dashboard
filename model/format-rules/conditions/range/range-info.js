/**
* DevExpress Dashboard (range-info.js)
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
var appearance_settings_1 = require("../../style-settings/appearance-settings");
var icon_settings_1 = require("../../style-settings/icon-settings");
var bar_style_settings_1 = require("../../style-settings/bar-style-settings");
var serializable_model_1 = require("../../../serializable-model");
var _range_info_1 = require("./metadata/_range-info");
var format_condition_style_base_1 = require("../format-condition-style-base");
var ko = require("knockout");
var rangeStyleSettingsTypesMap = {
    "AppearanceSettings": appearance_settings_1.AppearanceSettings,
    "IconSettings": icon_settings_1.IconSettings,
    "BarStyleSettings": bar_style_settings_1.BarStyleSettings
};
var RangeInfo = (function (_super) {
    __extends(RangeInfo, _super);
    function RangeInfo(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.styleSettings = ko.observable();
        _this._styleSettingsType = ko.observable();
        _this._styleSettingsType(Object.keys(rangeStyleSettingsTypesMap).filter(function (mapItem) { return !!modelJson && modelJson[mapItem]; })[0]);
        if (_this._styleSettingsType()) {
            _this.styleSettings(new rangeStyleSettingsTypesMap[_this._styleSettingsType()]((modelJson || {})[_this._styleSettingsType()]));
            delete _this["_model"][_this._styleSettingsType()];
        }
        _this.styleSettings.subscribe(function (styleSettings) {
            _this._styleSettingsType(Object.keys(rangeStyleSettingsTypesMap).filter(function (mapItem) { return styleSettings instanceof rangeStyleSettingsTypesMap[mapItem]; })[0]);
        });
        return _this;
    }
    RangeInfo.prototype.getInfo = function () {
        return _range_info_1.rangeInfoSerializationsInfo.concat(format_condition_style_base_1.currentStyleSettingInfo(this._styleSettingsType));
    };
    RangeInfo.prototype.clone = function () {
        var rangeInfo = new RangeInfo();
        rangeInfo.value.setValue(this.value.value(), this.value.type());
        rangeInfo.styleSettings(this.styleSettings().clone());
        return rangeInfo;
    };
    RangeInfo.prototype._getDefaultItemType = function () {
        return "RangeInfo";
    };
    return RangeInfo;
}(serializable_model_1.TypedSerializableModel));
exports.RangeInfo = RangeInfo;
