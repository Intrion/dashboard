/**
* DevExpress Dashboard (_gauge-data-controller.js)
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
var _kpi_data_controller_1 = require("./_kpi-data-controller");
var _gauge_range_calculator_1 = require("../_gauge-range-calculator");
var _utils_1 = require("../_utils");
var $ = require("jquery");
var gaugeDataController = (function (_super) {
    __extends(gaugeDataController, _super);
    function gaugeDataController(options) {
        var _this = _super.call(this, options) || this;
        _this._gaugeRanges = {};
        return _this;
    }
    gaugeDataController.prototype._iterateKpiItems = function (delegate) {
        var that = this;
        if (that.viewModel) {
            $.each(that.viewModel.Gauges, function (_, gauge) {
                delegate(gauge);
            });
        }
    };
    gaugeDataController.prototype._getGaugeRange = function (element) {
        var elementId = element.ID, range = this._gaugeRanges[elementId], calculator;
        if (!range) {
            calculator = new _gauge_range_calculator_1.gaugeRangeCalculator({
                values: this._getGaugeValues(element),
                gaugeModel: {
                    Type: this._gaugeViewType,
                    MinValue: element.MinValue,
                    MaxValue: element.MaxValue
                }
            });
            range = calculator.getGaugeRange();
            this._gaugeRanges[elementId] = range;
        }
        return range;
    };
    gaugeDataController.prototype._getGaugeValues = function (element) {
        var multiData = this.multiData, gaugeValues = [], axisPoints = this._axisPoints || [null], getMeasureValue = function (axisPoint) {
            var getMeasure = axisPoint ? multiData.getMeasureValueByAxisPoints : multiData.getMeasureValue;
            gaugeValues.push(getMeasure.call(multiData, element.ID, [axisPoint]).getValue());
        }, getDeltaValue = function (axisPoint) {
            var getDelta = axisPoint ? multiData.getDeltaValueByAxisPoints : multiData.getDeltaValue, deltaValue = getDelta.call(multiData, element.ID, [axisPoint]), actualValue = deltaValue.getActualValue(), targetValue = deltaValue.getTargetValue();
            gaugeValues.push(actualValue.getValue());
            gaugeValues.push(targetValue.getValue());
        }, getter = element.DataItemType === _utils_1.KpiValueMode.Measure ? getMeasureValue : getDeltaValue;
        $.each(axisPoints, function (_, axisPoint) {
            getter(axisPoint);
        });
        return gaugeValues;
    };
    gaugeDataController.prototype._initialize = function () {
        _super.prototype._initialize.call(this);
        this._gaugeViewType = this.viewModel ? this.viewModel.ViewType : undefined;
    };
    return gaugeDataController;
}(_kpi_data_controller_1.kpiDataController));
exports.gaugeDataController = gaugeDataController;
