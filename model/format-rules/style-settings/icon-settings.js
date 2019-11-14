/**
* DevExpress Dashboard (icon-settings.js)
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
var _icon_settings_1 = require("./metadata/_icon-settings");
var IconSettings = (function (_super) {
    __extends(IconSettings, _super);
    function IconSettings(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    IconSettings.prototype.getInfo = function () {
        return _icon_settings_1.iconSettingsSerializationsInfo;
    };
    IconSettings.prototype.equals = function (style) {
        return (style instanceof IconSettings) && this.iconType() === style.iconType();
    };
    IconSettings.prototype.clone = function () {
        var style = new IconSettings({});
        style.iconType(this.iconType());
        return style;
    };
    IconSettings.prototype.setSpecificType = function (type) {
        this.iconType(type);
    };
    IconSettings.prototype.init = function () {
        this.iconType("DirectionalGreenArrowUp");
    };
    return IconSettings;
}(style_settings_base_1.StyleSettingsBase));
exports.IconSettings = IconSettings;
