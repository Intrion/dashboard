/**
* DevExpress Dashboard (difference-calculation.js)
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
var _difference_calculation_1 = require("./metadata/_difference-calculation");
var DifferenceCalculation = (function (_super) {
    __extends(DifferenceCalculation, _super);
    function DifferenceCalculation(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    DifferenceCalculation.getLookupShiftExpression = function (target) {
        switch (target) {
            case 'Previous':
                return "-1";
            case 'Next':
                return "1";
            case 'First':
                return "First()";
            case 'Last':
                return "First()";
            default:
                throw new Error('Unsupported Target');
        }
    };
    Object.defineProperty(DifferenceCalculation.prototype, "name", {
        get: function () {
            return "DashboardWebStringId.Calculations.DifferenceCalculation";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DifferenceCalculation.prototype, "lookupShiftExpression", {
        get: function () {
            return DifferenceCalculation.getLookupShiftExpression(this.target());
        },
        enumerable: true,
        configurable: true
    });
    DifferenceCalculation.prototype.getInfo = function () {
        return _difference_calculation_1.differenceCalculationSerializationsInfo;
    };
    DifferenceCalculation.prototype._createInstance = function () {
        return new DifferenceCalculation();
    };
    DifferenceCalculation.prototype._getExpression = function (argument) {
        switch (this.differenceType()) {
            case 'Absolute':
                return argument + " - Lookup(" + argument + ", " + this.lookupShiftExpression + ")";
            case 'Percentage':
                return "ToDouble(" + argument + " - Lookup(" + argument + ", " + this.lookupShiftExpression + ")) / Lookup(" + argument + ", " + this.lookupShiftExpression + ")";
            default:
                throw new Error('Unexpected DifferenceType');
        }
    };
    return DifferenceCalculation;
}(measure_calculation_1.MeasureCalculation));
exports.DifferenceCalculation = DifferenceCalculation;
measure_calculation_1.calculationsTypesMap["DifferenceCalculation"] = DifferenceCalculation;
