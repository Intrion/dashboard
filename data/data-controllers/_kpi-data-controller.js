/**
* DevExpress Dashboard (_kpi-data-controller.js)
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
var _data_controller_base_1 = require("./_data-controller-base");
var _widget_viewer_item_core_1 = require("../../viewer-parts/viewer-items/_widget-viewer-item-core");
var _render_helper_1 = require("../../viewer-parts/widgets/_render-helper");
var $ = require("jquery");
var kpiDataController = (function (_super) {
    __extends(kpiDataController, _super);
    function kpiDataController(options) {
        var _this = _super.call(this, options) || this;
        _this._initialize();
        return _this;
    }
    kpiDataController.prototype.getDataSource = function () {
        var that = this, axisPoints = that._axisPoints, sourceItem, dataSource = [], i;
        if (that.multiData) {
            that._iterateKpiItems(function (kpiElement) {
                if (axisPoints) {
                    for (i = 0; i < axisPoints.length; i++) {
                        sourceItem = that._createSourceItem(axisPoints[i], kpiElement);
                        dataSource.push(sourceItem);
                    }
                }
                else {
                    sourceItem = that._createSourceItem(null, kpiElement);
                    dataSource.push(sourceItem);
                }
            });
        }
        return dataSource;
    };
    kpiDataController.prototype._createSourceItem = function (axisPoint, element) {
        var that = this, deltaValue = that._getDeltaValue(axisPoint, element), measure = that.multiData.getMeasureById(element.ID), measureValue = that._getMeasureValue(axisPoint, element), sparklineValues = that._getSparklineValues(axisPoint, element), getDeltaValue = function (getter) {
            return deltaValue ? getter(deltaValue) : undefined;
        }, getCaptions = function () {
            if (axisPoint) {
                var axisName = axisPoint.getAxisName();
                if (that.drillDownState[axisName]) {
                    var text = axisPoint.getDisplayText();
                    return text == undefined ? [''] : [text];
                }
                else {
                    return axisPoint.getDisplayPath();
                }
            }
            else
                return [element.Title];
        }, properties = {
            getActualValue: function () {
                var value = getDeltaValue(function (d) { return d.getActualValue().getValue(); });
                return value || measureValue.getValue();
            },
            getActualValueText: function () {
                var text = getDeltaValue(function (d) { return d.getActualValue().getDisplayText(); });
                return text || measureValue.getDisplayText();
            },
            getTargetValue: function () {
                return getDeltaValue(function (d) { return d.getTargetValue().getValue(); });
            },
            getTargetValueText: function () {
                return getDeltaValue(function (d) { return d.getTargetValue().getDisplayText(); });
            },
            getAbsoluteVariationValue: function () {
                return getDeltaValue(function (d) { return d.getAbsoluteVariation().getValue(); });
            },
            getAbsoluteVariationText: function () {
                return getDeltaValue(function (d) { return d.getAbsoluteVariation().getDisplayText(); });
            },
            getPercentVariationValue: function () {
                return getDeltaValue(function (d) { return d.getPercentVariation().getValue(); });
            },
            getPercentVariationText: function () {
                return getDeltaValue(function (d) { return d.getPercentVariation().getDisplayText(); });
            },
            getPercentOfTargetValue: function () {
                return getDeltaValue(function (d) { return d.getPercentOfTarget().getValue(); });
            },
            getPercentOfTargetText: function () {
                return getDeltaValue(function (d) { return d.getPercentOfTarget().getDisplayText(); });
            },
            getDimensionValue: function (dataId) {
                return axisPoint.getParentByDimensionId(dataId).getValue();
            },
            getDimensionValueText: function (dataId) {
                return axisPoint.getParentByDimensionId(dataId).getDisplayText();
            },
            getIndicatorType: function () {
                return that._convertIndicatorType(getDeltaValue(function (d) { return d.getIndicatorType().getValue(); }));
            },
            getIsGood: function () {
                return getDeltaValue(function (d) { return d.getIsGood().getValue(); });
            },
            getMainValueText: function () {
                return getDeltaValue(function (d) { return d.getDisplayValue().getDisplayText(); });
            },
            getSubValue1Text: function () {
                return getDeltaValue(function (d) { return d.getDisplaySubValue1().getDisplayText(); });
            },
            getSubValue2Text: function () {
                return getDeltaValue(function (d) { return d.getDisplaySubValue2().getDisplayText(); });
            },
            getMeasureValue: function () {
                return measureValue.getValue();
            },
            getMeasureDisplayText: function () {
                return measureValue.getDisplayText();
            },
            getSparklineOptions: function () {
                var sparklineOptions = undefined;
                if (sparklineValues) {
                    sparklineOptions = that._generateSparklineOptions(sparklineValues, element.SparklineOptions, measure.format);
                }
                return sparklineOptions;
            },
            getSelectionValues: function () {
                return axisPoint ? axisPoint.getUniquePath() : null;
            },
            getCaptions: function () {
                return getCaptions();
            },
            getTitle: function () {
                var captions = getCaptions();
                if (captions.length > 0)
                    return captions.pop();
            },
            getSubtitle: function () {
                var captions = getCaptions();
                if (captions.length > 1)
                    captions.pop();
                return captions.join(_data_controller_base_1.DEFAULT_SUBTITLE_SEPARATOR);
            },
            getGaugeRange: function () {
                return that._getGaugeRange(element);
            },
            getCardName: function () {
                return element.Title;
            }
        };
        var sourceItem = new _widget_viewer_item_core_1.widgetItemCore();
        sourceItem.onIncidentOccurred = _render_helper_1.RenderHelper.widgetIncidentOccurred;
        that.setSourceItemProperties(sourceItem, element, properties);
        return sourceItem;
    };
    kpiDataController.prototype._getDeltaValue = function (axisPoint, kpiElement) {
        var multiData = this.multiData, measureId = kpiElement.ID;
        if (!multiData.getDeltaById(measureId))
            return undefined;
        return axisPoint ? multiData.getDeltaValueByAxisPoints(measureId, [axisPoint]) : multiData.getDeltaValue(measureId);
    };
    kpiDataController.prototype._getMeasureValue = function (axisPoint, kpiElement) {
        var multiData = this.multiData, measureId = kpiElement.ID;
        return axisPoint ? multiData.getMeasureValueByAxisPoints(measureId, [axisPoint]) : multiData.getMeasureValue(measureId);
    };
    kpiDataController.prototype._getSparklineValues = function (axisPoint, kpiElement) {
        if (!this._sparklineAxisPoints)
            return;
        var that = this, values = [], measureValue, measureId = kpiElement.ID, multiData = that.multiData;
        $.each(that._sparklineAxisPoints, function (_, sparklinePoint) {
            measureValue = axisPoint ?
                multiData.getMeasureValueByAxisPoints(measureId, [axisPoint, sparklinePoint]) :
                multiData.getMeasureValueByAxisPoints(measureId, [sparklinePoint]);
            values.push(measureValue.getValue() || 0);
        });
        return values;
    };
    kpiDataController.prototype._initialize = function () {
        if (!this.multiData)
            return;
        var that = this, viewModel = that.viewModel, multiData = that.multiData;
        that._axisPoints = !!this.viewModel.SeriesAxisName ? multiData.getAxis(viewModel.SeriesAxisName).getPoints() : undefined;
        that._sparklineAxisPoints = !!this.viewModel.SparklineAxisName ? multiData.getAxis(viewModel.SparklineAxisName).getPoints() : undefined;
    };
    kpiDataController.prototype._iterateKpiItems = function (delegate) {
    };
    kpiDataController.prototype._getGaugeRange = function (element) {
    };
    return kpiDataController;
}(_data_controller_base_1.dataControllerBase));
exports.kpiDataController = kpiDataController;
