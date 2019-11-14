/**
* DevExpress Dashboard (format-condition-style-base.js)
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
var appearance_settings_1 = require("../style-settings/appearance-settings");
var icon_settings_1 = require("../style-settings/icon-settings");
var bar_style_settings_1 = require("../style-settings/bar-style-settings");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var format_condition_base_1 = require("./format-condition-base");
var ko = require("knockout");
exports._styleSettingsTypesMap = {
    "AppearanceSettings": appearance_settings_1.AppearanceSettings,
    "IconSettings": icon_settings_1.IconSettings,
    "StyleSettings": bar_style_settings_1.BarStyleSettings
};
exports.currentStyleSettingInfo = function (styleSettingsType) {
    return !styleSettingsType ? [] : [{
            propertyName: 'styleSettings',
            modelName: styleSettingsType(),
            type: exports._styleSettingsTypesMap[styleSettingsType()]
        }];
};
var FormatConditionStyleBase = (function (_super) {
    __extends(FormatConditionStyleBase, _super);
    function FormatConditionStyleBase(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.styleSettings = ko.observable();
        _this._styleSettingsType = ko.observable();
        _this._styleSettingsType(Object.keys(exports._styleSettingsTypesMap).filter(function (mapItem) { return !!modelJson && modelJson[mapItem]; })[0] || _this.getDefaultStyleSettingsType());
        _this.styleSettings(new exports._styleSettingsTypesMap[_this._styleSettingsType()]((modelJson || {})[_this._styleSettingsType()]));
        delete _this["_model"][_this._styleSettingsType()];
        _this.styleSettings.subscribe(function (styleSettings) {
            _this._styleSettingsType(Object.keys(exports._styleSettingsTypesMap).filter(function (mapItem) { return styleSettings instanceof exports._styleSettingsTypesMap[mapItem]; })[0]);
        });
        return _this;
    }
    FormatConditionStyleBase.prototype.getInfo = function () {
        return this._getStyleSettingsInfo().concat(exports.currentStyleSettingInfo(this._styleSettingsType));
    };
    FormatConditionStyleBase.prototype.getDefaultStyleSettingsType = function () {
        return 'AppearanceSettings';
    };
    FormatConditionStyleBase.prototype.isValid = function () {
        return _super.prototype.isValid.call(this);
    };
    FormatConditionStyleBase.prototype.init = function () {
        if (this.styleSettings()) {
            this.styleSettings().init();
        }
        this.isEmpty(false);
    };
    return FormatConditionStyleBase;
}(format_condition_base_1.FormatConditionBase));
exports.FormatConditionStyleBase = FormatConditionStyleBase;
