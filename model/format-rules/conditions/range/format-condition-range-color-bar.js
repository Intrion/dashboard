/**
* DevExpress Dashboard (format-condition-range-color-bar.js)
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
var format_condition_range_set_1 = require("./format-condition-range-set");
var _format_condition_range_color_bar_1 = require("./metadata/_format-condition-range-color-bar");
var range_generator_1 = require("./range-generator");
var bar_style_settings_1 = require("../../style-settings/bar-style-settings");
var FormatConditionColorRangeBar = (function (_super) {
    __extends(FormatConditionColorRangeBar, _super);
    function FormatConditionColorRangeBar(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    FormatConditionColorRangeBar.prototype.getInfo = function () {
        return _format_condition_range_color_bar_1.formatConditionColorRangeBarSerializationsInfo;
    };
    FormatConditionColorRangeBar.prototype.getActualPredefinedType = function () {
        return range_generator_1.FormatConditionRangeGenerator.getPredefinedType(this.actualStyles, function (type) {
            var c = new FormatConditionColorRangeBar();
            range_generator_1.FormatConditionRangeGenerator.generateRangeSet(c, type);
            return c;
        });
    };
    FormatConditionColorRangeBar.prototype.setActualPredefinedType = function (type) {
        _super.prototype.setActualPredefinedType.call(this, type);
    };
    FormatConditionColorRangeBar.prototype.createStyleSettings = function (styleListItem) {
        return new bar_style_settings_1.BarStyleSettings({ '@PredefinedColor': styleListItem });
    };
    return FormatConditionColorRangeBar;
}(format_condition_range_set_1.FormatConditionRangeSet));
exports.FormatConditionColorRangeBar = FormatConditionColorRangeBar;
