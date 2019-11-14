/**
* DevExpress Dashboard (format-condition-range-gradient-bar.js)
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
var format_condition_range_gradient_1 = require("./format-condition-range-gradient");
var _format_condition_range_gradient_bar_1 = require("./metadata/_format-condition-range-gradient-bar");
var range_generator_1 = require("./range-generator");
var bar_style_settings_1 = require("../../style-settings/bar-style-settings");
var FormatConditionGradientRangeBar = (function (_super) {
    __extends(FormatConditionGradientRangeBar, _super);
    function FormatConditionGradientRangeBar(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    FormatConditionGradientRangeBar.prototype.getInfo = function () {
        return _format_condition_range_gradient_bar_1.formatConditionGradientRangeBarSerializationsInfo;
    };
    FormatConditionGradientRangeBar.prototype.getActualPredefinedType = function () {
        return range_generator_1.FormatConditionRangeGenerator.getGradientPredefinedType(this.actualStyles, function (type) {
            var c = new FormatConditionGradientRangeBar();
            range_generator_1.FormatConditionRangeGenerator.generateGradientByType(c, type, 5, true);
            return c;
        });
    };
    FormatConditionGradientRangeBar.prototype.setActualPredefinedType = function (type) {
        range_generator_1.FormatConditionRangeGenerator.generateGradientByType(this, type, 5, true);
    };
    FormatConditionGradientRangeBar.prototype._isGradientStop = function (style) {
        if (style instanceof bar_style_settings_1.BarStyleSettings) {
            return format_condition_range_gradient_1.FormatConditionRangeGradient.isGradientStop(style.predefinedColor(), style.color());
        }
        else {
            return false;
        }
    };
    FormatConditionGradientRangeBar.prototype._generateByDefault = function (segmentNumber) {
        range_generator_1.FormatConditionRangeGenerator.generateGradientByStyles(this, this.stopStyles, segmentNumber);
    };
    return FormatConditionGradientRangeBar;
}(format_condition_range_gradient_1.FormatConditionRangeGradient));
exports.FormatConditionGradientRangeBar = FormatConditionGradientRangeBar;
