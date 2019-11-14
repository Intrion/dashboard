/**
* DevExpress Dashboard (data-item-format.js)
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
var serializable_model_1 = require("../serializable-model");
var _data_item_format_1 = require("./metadata/_data-item-format");
var DataItemNumericFormat = (function (_super) {
    __extends(DataItemNumericFormat, _super);
    function DataItemNumericFormat(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DataItemNumericFormat.prototype.getInfo = function () {
        return _data_item_format_1.dataItemNumericFormatSerializationsInfo;
    };
    DataItemNumericFormat.prototype._getViewModel = function () {
        return {
            NumericFormat: {
                CurrencyCulture: this.currencyCultureName(),
                FormatType: this.formatType(),
                Precision: this.precision(),
                Unit: this.unit(),
                IncludeGroupSeparator: this.includeGroupSeparator()
            }
        };
    };
    return DataItemNumericFormat;
}(serializable_model_1.SerializableModel));
exports.DataItemNumericFormat = DataItemNumericFormat;
var AbsoluteVariationNumericFormat = (function (_super) {
    __extends(AbsoluteVariationNumericFormat, _super);
    function AbsoluteVariationNumericFormat(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    AbsoluteVariationNumericFormat.prototype.getInfo = function () {
        return _data_item_format_1.absoluteVariationNumericFormatSerializationsInfo;
    };
    return AbsoluteVariationNumericFormat;
}(DataItemNumericFormat));
exports.AbsoluteVariationNumericFormat = AbsoluteVariationNumericFormat;
var PercentVariationNumericFormat = (function (_super) {
    __extends(PercentVariationNumericFormat, _super);
    function PercentVariationNumericFormat(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    PercentVariationNumericFormat.prototype.getInfo = function () {
        return _data_item_format_1.percentVariationNumericFormatSerializationsInfo;
    };
    return PercentVariationNumericFormat;
}(DataItemNumericFormat));
exports.PercentVariationNumericFormat = PercentVariationNumericFormat;
var PercentOfTargetNumericFormat = (function (_super) {
    __extends(PercentOfTargetNumericFormat, _super);
    function PercentOfTargetNumericFormat(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    PercentOfTargetNumericFormat.prototype.getInfo = function () {
        return _data_item_format_1.percentOfTargetNumericFormatSerializationsInfo;
    };
    return PercentOfTargetNumericFormat;
}(DataItemNumericFormat));
exports.PercentOfTargetNumericFormat = PercentOfTargetNumericFormat;
var DataItemDateTimeFormat = (function (_super) {
    __extends(DataItemDateTimeFormat, _super);
    function DataItemDateTimeFormat(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DataItemDateTimeFormat.prototype.getInfo = function () {
        return _data_item_format_1.dataItemDateTimeFormatSerializationsInfo;
    };
    DataItemDateTimeFormat.prototype._getViewModel = function (groupInterval) {
        return {
            DateTimeFormat: {
                GroupInterval: groupInterval || 'None',
                YearFormat: this.yearFormat(),
                QuarterFormat: this.quarterFormat(),
                MonthFormat: this.monthFormat(),
                DayOfWeekFormat: this.dayOfWeekFormat(),
                DateFormat: this.dateFormat(),
                DateHourFormat: this.dateHourFormat(),
                DateHourMinuteFormat: this.dateHourMinuteFormat(),
                DateTimeFormat: this.dateTimeFormat(),
                HourFormat: this.hourFormat(),
                ExactDateFormat: this.exactDateFormat()
            }
        };
    };
    return DataItemDateTimeFormat;
}(serializable_model_1.SerializableModel));
exports.DataItemDateTimeFormat = DataItemDateTimeFormat;
