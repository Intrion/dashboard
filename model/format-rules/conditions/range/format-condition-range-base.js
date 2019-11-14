/**
* DevExpress Dashboard (format-condition-range-base.js)
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
var format_condition_base_1 = require("../format-condition-base");
var _format_condition_range_base_1 = require("./metadata/_format-condition-range-base");
var _format_rules_common_1 = require("../../metadata/_format-rules-common");
var appearance_settings_1 = require("../../style-settings/appearance-settings");
var FormatConditionRangeBase = (function (_super) {
    __extends(FormatConditionRangeBase, _super);
    function FormatConditionRangeBase(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.getSpecificType = function () { return _this.getActualPredefinedType(); };
        _this.setSpecificType = function (specificType) { return _this.setActualPredefinedType(specificType); };
        return _this;
    }
    Object.defineProperty(FormatConditionRangeBase.prototype, "actualStyles", {
        get: function () {
            var _this = this;
            var ranges = this._getSortedRanges();
            return ranges.map(function (range, index) {
                var style = range.styleSettings();
                if (!style) {
                    style = _this._getRangeIndexSettings(index);
                }
                return style;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormatConditionRangeBase.prototype, "stopStyles", {
        get: function () {
            return this._getSortedRanges().filter(function (range) { return !!range.styleSettings(); }).map(function (range) { return range.styleSettings(); });
        },
        enumerable: true,
        configurable: true
    });
    FormatConditionRangeBase.prototype.getInfo = function () {
        return _format_condition_range_base_1.formatConditionRangeBaseSerializationsInfo;
    };
    FormatConditionRangeBase.prototype.isValid = function () {
        return _super.prototype.isValid.call(this);
    };
    FormatConditionRangeBase.prototype.isRange = function () {
        return true;
    };
    FormatConditionRangeBase.prototype.setValues = function (values) {
        var _this = this;
        if (values.length > this.rangeSet.ranges().length)
            throw new Error("The number of values exceeds the number of ranges.");
        var index = 0;
        values.forEach(function (v) { return _this.rangeSet.ranges()[index++].value.setValue(v, _format_rules_common_1.fieldTypes[_this.dataType()]); });
    };
    FormatConditionRangeBase.prototype.createStyleSettings = function (styleListItem) {
        return new appearance_settings_1.AppearanceSettings({ '@AppearanceType': styleListItem });
    };
    FormatConditionRangeBase.prototype._getSortedRanges = function () {
        return this.rangeSet.ranges();
    };
    FormatConditionRangeBase.prototype._getRangeIndexSettings = function (index) {
        return null;
    };
    return FormatConditionRangeBase;
}(format_condition_base_1.FormatConditionBase));
exports.FormatConditionRangeBase = FormatConditionRangeBase;
