/**
* DevExpress Dashboard (rank-calculation.js)
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
var _rank_calculation_1 = require("./metadata/_rank-calculation");
var RankCalculation = (function (_super) {
    __extends(RankCalculation, _super);
    function RankCalculation(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    RankCalculation._getRankFunction = function (rankType) {
        switch (rankType) {
            case 'Competition':
                return 'RankCompetition';
            case 'Unique':
                return 'RankUnique';
            case 'Dense':
                return 'RankDense';
            case 'Modified':
                return 'RankModified';
            case 'Percentile':
                return 'RankPercentile';
            default:
                throw new Error('Unsupported RankType');
        }
    };
    Object.defineProperty(RankCalculation.prototype, "name", {
        get: function () {
            return "DashboardWebStringId.Calculations.Rank";
        },
        enumerable: true,
        configurable: true
    });
    RankCalculation.prototype.getInfo = function () {
        return _rank_calculation_1.rankCalculationSerializationsInfo;
    };
    RankCalculation.prototype._createInstance = function () {
        return new RankCalculation();
    };
    RankCalculation.prototype._getExpression = function (argument) {
        var order = this.rankOrder() == 'Ascending' ? 'asc' : 'desc';
        return RankCalculation._getRankFunction(this.rankType()) + "(" + argument + ", '" + order + "')";
    };
    return RankCalculation;
}(measure_calculation_1.MeasureCalculation));
exports.RankCalculation = RankCalculation;
measure_calculation_1.calculationsTypesMap["Rank"] = RankCalculation;
