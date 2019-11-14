/**
* DevExpress Dashboard (period-limit.js)
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
var serializable_model_1 = require("../../serializable-model");
var _period_limit_1 = require("./metadata/_period-limit");
var ko = require("knockout");
var FixedDateTimePeriodLimit = (function (_super) {
    __extends(FixedDateTimePeriodLimit, _super);
    function FixedDateTimePeriodLimit(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.isEmpty = ko.observable(false);
        return _this;
    }
    FixedDateTimePeriodLimit.prototype.getInfo = function () {
        return _period_limit_1.fixedDateTimePeriodLimitSerializationsInfo;
    };
    FixedDateTimePeriodLimit.prototype.getDateTimeValue = function () {
        return this.date();
    };
    return FixedDateTimePeriodLimit;
}(serializable_model_1.SerializableModel));
exports.FixedDateTimePeriodLimit = FixedDateTimePeriodLimit;
var FlowDateTimePeriodLimit = (function (_super) {
    __extends(FlowDateTimePeriodLimit, _super);
    function FlowDateTimePeriodLimit(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.isEmpty = ko.observable(false);
        _this.argumentInterval = ko.observable("Year");
        return _this;
    }
    FlowDateTimePeriodLimit.prototype.getInfo = function () {
        return _period_limit_1.flowDateTimePeriodLimitSerializationsInfo;
    };
    FlowDateTimePeriodLimit.prototype._getAvailableIntervals = function () {
        return _period_limit_1.flowIntervalOrderedValues
            .slice(0, _period_limit_1.flowIntervalOrderedValues.indexOf(_period_limit_1.convertDateTimeGroupInterval(this.argumentInterval())) + 1)
            .map(function (value) {
            return {
                value: value,
                displayValue: _period_limit_1.flowIntervalValues[value]
            };
        });
    };
    return FlowDateTimePeriodLimit;
}(serializable_model_1.SerializableModel));
exports.FlowDateTimePeriodLimit = FlowDateTimePeriodLimit;
