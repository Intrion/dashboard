/**
* DevExpress Dashboard (format-condition-bar.js)
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
var format_condition_min_max_base_1 = require("./format-condition-min-max-base");
var _format_condition_bar_1 = require("./metadata/_format-condition-bar");
var ko = require("knockout");
var FormatConditionBar = (function (_super) {
    __extends(FormatConditionBar, _super);
    function FormatConditionBar(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.currentStyleSettingsType = ko.observable('Positive');
        _this.getSpecificType = function () { return null; };
        _this.setSpecificType = function (type) { };
        _this.currentStyleSettings = ko.computed(function () {
            return _this.currentStyleSettingsType() == 'Positive' ? _this.styleSettings() : _this.negativeStyleSettings;
        });
        return _this;
    }
    FormatConditionBar.prototype._getStyleSettingsInfo = function () {
        return _format_condition_bar_1.formatConditionBarSerializationsInfo;
    };
    FormatConditionBar.prototype.getDefaultStyleSettingsType = function () {
        return 'StyleSettings';
    };
    FormatConditionBar.prototype.init = function () {
        if (!!this.currentStyleSettings()) {
            this.currentStyleSettings().init();
        }
        this.isEmpty(false);
    };
    return FormatConditionBar;
}(format_condition_min_max_base_1.FormatConditionMinMaxBase));
exports.FormatConditionBar = FormatConditionBar;
