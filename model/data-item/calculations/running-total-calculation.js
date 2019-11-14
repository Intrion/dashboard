/**
* DevExpress Dashboard (running-total-calculation.js)
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
var measure_calculation_1 = require("./measure-calculation");
var _running_total_calculation_1 = require("./metadata/_running-total-calculation");
var RunningTotalCalculation = (function (_super) {
    __extends(RunningTotalCalculation, _super);
    function RunningTotalCalculation(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    Object.defineProperty(RunningTotalCalculation.prototype, "name", {
        get: function () {
            return "DashboardWebStringId.Calculations.RunningTotal";
        },
        enumerable: true,
        configurable: true
    });
    RunningTotalCalculation.prototype.getInfo = function () {
        return _running_total_calculation_1.runningTotalCalculationSerializationsInfo;
    };
    RunningTotalCalculation.prototype._createInstance = function () {
        return new RunningTotalCalculation();
    };
    RunningTotalCalculation.prototype._getExpression = function (argument) {
        switch (this.summaryType()) {
            case 'Average':
                return "RunningAvg(" + argument + ")";
            case 'Count':
                return "RunningCount(" + argument + ")";
            case 'Max':
                return "RunningMax(" + argument + ")";
            case 'Min':
                return "RunningMin(" + argument + ")";
            case 'Sum':
                return "RunningSum(" + argument + ")";
            default:
                return this._getAggrName(this.summaryType()) + "(" + argument + ", First(), 0)";
        }
    };
    return RunningTotalCalculation;
}(measure_calculation_1.MeasureCalculation));
exports.RunningTotalCalculation = RunningTotalCalculation;
measure_calculation_1.calculationsTypesMap["RunningTotal"] = RunningTotalCalculation;
