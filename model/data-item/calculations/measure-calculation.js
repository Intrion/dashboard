/**
* DevExpress Dashboard (measure-calculation.js)
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
var _measure_calculation_1 = require("./metadata/_measure-calculation");
var MeasureCalculation = (function (_super) {
    __extends(MeasureCalculation, _super);
    function MeasureCalculation(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson || {}, serializer) || this;
    }
    MeasureCalculation._getWindowAggrFunction = function (summaryType) {
        switch (summaryType) {
            case 'Sum':
                return 'WindowSum';
            case 'Average':
                return 'WindowAvg';
            case 'Count':
                return 'WindowCount';
            case 'CountDistinct':
                return 'WindowCountDistinct';
            case 'Max':
                return 'WindowMax';
            case 'Median':
                return 'WindowMedian';
            case 'Mode':
                return 'WindowMode';
            case 'Min':
                return 'WindowMin';
            case 'StdDev':
                return 'WindowStdDev';
            case 'StdDevp':
                return 'WindowStdDevp';
            case 'Var':
                return 'WindowVar';
            case 'Varp':
                return 'WindowVarp';
            default:
                throw new Error('WindowAggrFunction: Unsupported SummaryType');
        }
    };
    MeasureCalculation._getSummaryExpression = function (dataMember, summaryType) {
        var operand = "[" + dataMember + "]";
        switch (summaryType) {
            case 'Average':
                return "Avg(" + operand + ")";
            case 'Count':
                return "CountNotNull(" + operand + ")";
            case 'CountDistinct':
                return "CountDistinct(" + operand + ")";
            case 'Max':
                return "Max(" + operand + ")";
            case 'Median':
                return "Median(" + operand + ")";
            case 'Mode':
                return "Mode(" + operand + ")";
            case 'Min':
                return "Min(" + operand + ")";
            case 'StdDev':
                return "StdDev(" + operand + ")";
            case 'StdDevp':
                return "StdDevp(" + operand + ")";
            case 'Sum':
                return "Sum(" + operand + ")";
            case 'Var':
                return "Var(" + operand + ")";
            case 'Varp':
                return "Varp(" + operand + ")";
        }
        throw new Error("Summary expression cannot be determined for the " + summaryType + " summary type.");
    };
    MeasureCalculation.prototype.getInfo = function () {
        return _measure_calculation_1.measureCalculationSerializationsInfo;
    };
    MeasureCalculation.prototype._getAggrName = function (summaryType) {
        return MeasureCalculation._getWindowAggrFunction(summaryType);
    };
    return MeasureCalculation;
}(serializable_model_1.SerializableModel));
exports.MeasureCalculation = MeasureCalculation;
exports.calculationsTypesMap = {};
