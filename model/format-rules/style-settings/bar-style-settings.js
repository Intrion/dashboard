/**
* DevExpress Dashboard (bar-style-settings.js)
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
var _bar_style_settings_1 = require("./metadata/_bar-style-settings");
var BarStyleSettings = (function (_super) {
    __extends(BarStyleSettings, _super);
    function BarStyleSettings(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    BarStyleSettings.prototype.getInfo = function () {
        return _bar_style_settings_1.barStyleSettingsSerializationsInfo;
    };
    BarStyleSettings.prototype.equals = function (style) {
        return (style instanceof BarStyleSettings) &&
            this.predefinedColor() === style.predefinedColor() &&
            this.color() == style.color();
    };
    BarStyleSettings.prototype.clone = function () {
        var style = new BarStyleSettings({});
        style.predefinedColor(this.predefinedColor());
        style.color(this.color());
        return style;
    };
    BarStyleSettings.prototype.setSpecificType = function (type) {
        this.predefinedColor(type);
    };
    BarStyleSettings.prototype.init = function () {
        this.predefinedColor("PaleRed");
    };
    return BarStyleSettings;
}(style_settings_base_1.StyleSettingsBase));
exports.BarStyleSettings = BarStyleSettings;
