﻿/**
* DevExpress Dashboard (format-condition-range-gradient.js)
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
var format_condition_range_base_1 = require("./format-condition-range-base");
var _format_condition_range_gradient_1 = require("./metadata/_format-condition-range-gradient");
var range_generator_1 = require("./range-generator");
var range_index_settings_1 = require("../../style-settings/range-index-settings");
var range_info_1 = require("./range-info");
var appearance_settings_1 = require("../../style-settings/appearance-settings");
var ko = require("knockout");
var FormatConditionRangeGradient = (function (_super) {
    __extends(FormatConditionRangeGradient, _super);
    function FormatConditionRangeGradient(modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.getSpecificType = function () { return _this.getActualPredefinedType(); };
        _this.setSpecificType = function (specificType) { return _this.setActualPredefinedType(specificType); };
        _this.segmentNumber = ko.computed({
            read: function () { return _this.rangeSet.ranges().length; },
            write: function (value) {
                _this._generateByDefault(value);
            }
        });
        return _this;
    }
    FormatConditionRangeGradient.isGradientStop = function (predefined, color) {
        return predefined == 'Custom' && !!color || predefined != 'None' && predefined.indexOf('Gradient') != -1;
    };
    FormatConditionRangeGradient.prototype.isGradient = function () {
        return true;
    };
    FormatConditionRangeGradient.prototype.getInfo = function () {
        return _format_condition_range_gradient_1.formatConditionRangeGradientSerializationsInfo;
    };
    FormatConditionRangeGradient.prototype.getActualPredefinedType = function () {
        return range_generator_1.FormatConditionRangeGenerator.getGradientPredefinedType(this.actualStyles, function (type) {
            var c = new FormatConditionRangeGradient();
            range_generator_1.FormatConditionRangeGenerator.generateGradientByType(c, type, 10);
            return c;
        });
    };
    FormatConditionRangeGradient.prototype.setActualPredefinedType = function (type) {
        range_generator_1.FormatConditionRangeGenerator.generateGradientByType(this, type, 10);
    };
    FormatConditionRangeGradient.prototype._generateByDefault = function (segmentNumber) {
        range_generator_1.FormatConditionRangeGenerator.generateGradientByStyles(this, this.stopStyles, segmentNumber);
    };
    FormatConditionRangeGradient.prototype.generateAsPercent = function (startStyle, endStyle, segmentNumber) {
        if (segmentNumber >= this.stopStyles.length) {
            this.valueType('Percent');
            this._generate(startStyle, endStyle, segmentNumber);
            this.setValues(range_generator_1.FormatConditionRangeGenerator.calculateRangePercentValues(segmentNumber));
        }
    };
    FormatConditionRangeGradient.prototype.generateAsNumber = function (startStyle, endStyle, values) {
        var segmentNumber = values.length;
        if (segmentNumber >= this.stopStyles.length) {
            this.valueType('Number');
            this._generate(startStyle, endStyle, segmentNumber);
            this.setValues(values);
        }
    };
    FormatConditionRangeGradient.prototype._getRangeIndexSettings = function (index) {
        return new range_index_settings_1.RangeIndexSettings(index);
    };
    FormatConditionRangeGradient.prototype._getSortedRanges = function () {
        var ranges = this.rangeSet.ranges();
        ranges.sort(function (a, b) {
            var aValue = a.value.value(), bValue = b.value.value();
            var c = range_generator_1.FormatConditionRangeGenerator.compareValues(aValue, bValue, true);
            if (c != 0)
                return c;
            if (a.valueComparison() == b.valueComparison())
                return 0;
            if (a.valueComparison() == 'Greater')
                return 1;
            return -1;
        });
        return ranges;
    };
    FormatConditionRangeGradient.prototype._generate = function (startStyle, endStyle, rangeCount) {
        var ranges = [];
        for (var i = 0; i < rangeCount; i++) {
            ranges.push(new range_info_1.RangeInfo());
        }
        ranges[0].styleSettings(this._validateStyle(startStyle));
        ranges[ranges.length - 1].styleSettings(this._validateStyle(endStyle));
        this.rangeSet.ranges(ranges);
    };
    FormatConditionRangeGradient.prototype._isGradientStop = function (style) {
        if (style instanceof appearance_settings_1.AppearanceSettings) {
            return FormatConditionRangeGradient.isGradientStop(style.appearanceType(), style.backColor());
        }
        else {
            return false;
        }
    };
    FormatConditionRangeGradient.prototype._validateStyle = function (style) {
        if (!this._isGradientStop(style))
            throw new Error("Use colors with the 'Gradient' prefix from the FormatConditionAppearanceType enumeration to initialize the AppearanceSettings.appearanceType property or set the AppearanceSettings.appearanceType property to 'Custom' and specify the AppearanceSettings.backColor property.");
        return style;
    };
    return FormatConditionRangeGradient;
}(format_condition_range_base_1.FormatConditionRangeBase));
exports.FormatConditionRangeGradient = FormatConditionRangeGradient;
