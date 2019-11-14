/**
* DevExpress Dashboard (range-index-settings.js)
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
var style_settings_base_1 = require("./style-settings-base");
var ko = require("knockout");
var RangeIndexSettings = (function (_super) {
    __extends(RangeIndexSettings, _super);
    function RangeIndexSettings(index) {
        var _this = _super.call(this, null) || this;
        _this.index = ko.observable(-1);
        _this.isBarStyle = ko.observable(false);
        _this.index(index);
        return _this;
    }
    RangeIndexSettings.prototype.equals = function (style) {
        return (style instanceof RangeIndexSettings) && this.index() === style.index();
    };
    RangeIndexSettings.prototype.clone = function () {
        var style = new RangeIndexSettings(this.index());
        style.isBarStyle(this.isBarStyle());
        return style;
    };
    return RangeIndexSettings;
}(style_settings_base_1.StyleSettingsBase));
exports.RangeIndexSettings = RangeIndexSettings;
