/**
* DevExpress Dashboard (appearance-settings.js)
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
var style_settings_base_1 = require("./style-settings-base");
var _appearance_settings_1 = require("./metadata/_appearance-settings");
var AppearanceSettings = (function (_super) {
    __extends(AppearanceSettings, _super);
    function AppearanceSettings(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    AppearanceSettings.prototype.getInfo = function () {
        return _appearance_settings_1.appearanceSettingsSerializationsInfo;
    };
    AppearanceSettings.prototype.equals = function (style) {
        return (style instanceof AppearanceSettings) &&
            this.appearanceType() === style.appearanceType() &&
            this.fontFamily() == style.fontFamily() &&
            this.fontStyle() == style.fontStyle() &&
            this.backColor() == style.backColor() &&
            this.foreColor() == style.foreColor();
    };
    AppearanceSettings.prototype.clone = function () {
        var style = new AppearanceSettings({});
        style.appearanceType(this.appearanceType());
        style.fontFamily(this.fontFamily());
        style.fontStyle(this.fontStyle());
        style.backColor(this.backColor());
        style.foreColor(this.foreColor());
        return style;
    };
    AppearanceSettings.prototype.setSpecificType = function (type) {
        this.appearanceType(type);
    };
    AppearanceSettings.prototype.init = function () {
        this.appearanceType("PaleRed");
    };
    return AppearanceSettings;
}(style_settings_base_1.StyleSettingsBase));
exports.AppearanceSettings = AppearanceSettings;
