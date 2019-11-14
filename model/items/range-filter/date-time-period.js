/**
* DevExpress Dashboard (date-time-period.js)
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
var _datetime_period_converter_1 = require("../../../viewer-parts/viewer-items/range-selector-item/_datetime-period-converter");
var serializable_model_1 = require("../../serializable-model");
var _date_time_period_1 = require("./metadata/_date-time-period");
var ko = require("knockout");
var _format_helper_1 = require("../../../data/_format-helper");
var _default_1 = require("../../../data/localization/_default");
var index_metadata_1 = require("../../index.metadata");
var DateTimePeriod = (function (_super) {
    __extends(DateTimePeriod, _super);
    function DateTimePeriod(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.argumentInterval = ko.observable("Year");
        _this._getPeriodTextValue = ko.pureComputed(function () {
            var range = _this.getDateTimeValue();
            var startTextValue = _this.format(range.startValue);
            var endTextValue = _this.format(range.endValue);
            if (startTextValue != null && endTextValue != null) {
                return startTextValue + " - " + endTextValue;
            }
            else if (startTextValue != null && endTextValue == null) {
                return "From " + startTextValue;
            }
            else if (startTextValue == null && endTextValue != null) {
                return "To " + endTextValue;
            }
            return _default_1.getLocalizationById("DashboardStringId.EntireRangePeriodCaption");
        });
        ko.computed(function () {
            _this.start.argumentInterval(_this.argumentInterval());
            _this.end.argumentInterval(_this.argumentInterval());
        });
        return _this;
    }
    DateTimePeriod.prototype.getInfo = function () {
        return _date_time_period_1.dateTimePeriodSerializationsInfo;
    };
    DateTimePeriod.prototype._getDefaultItemType = function () { return "DateTimePeriod"; };
    ;
    DateTimePeriod.prototype.getDateTimeValue = function () {
        var convertToLimit = function (limit) {
            if (limit.mode() === 'None')
                return undefined;
            var flowMode = limit.mode() === 'Flow';
            return {
                Relative: flowMode,
                Date: limit.mode() === 'Fixed' ? limit.fixed.date() : undefined,
                Interval: flowMode ? limit.flow.interval() : undefined,
                Offset: flowMode ? limit.flow.offset() : undefined
            };
        };
        var range = _datetime_period_converter_1.DateTimePeriodConverter.toRange({
            Start: convertToLimit(this.start),
            End: convertToLimit(this.end)
        });
        return range;
    };
    DateTimePeriod.prototype.getDateFormat = function () {
        var argumentInterval = index_metadata_1.convertDateTimeGroupInterval(this.argumentInterval()), startInterval = this.start.getInterval() || argumentInterval, endInterval = this.end.getInterval() || argumentInterval;
        var dateFormat = ["year", "quarterYear", "monthYear", "dayMonthYear", "dayHour", "dateHourMinute", "dateHourMinuteSecond"];
        return dateFormat[Math.max(index_metadata_1.flowIntervalOrderedValues.indexOf(startInterval), index_metadata_1.flowIntervalOrderedValues.indexOf(endInterval))];
    };
    DateTimePeriod.prototype.format = function (value) {
        if (value == null)
            return null;
        var combinedInterval = this.getDateFormat(), correctedValue = value;
        switch (combinedInterval) {
            case "year":
                correctedValue = value.getFullYear();
                break;
        }
        return _format_helper_1.formatHelper.format(correctedValue, { dateType: "short", format: this.getDateFormat() });
    };
    return DateTimePeriod;
}(serializable_model_1.TypedSerializableModel));
exports.DateTimePeriod = DateTimePeriod;
