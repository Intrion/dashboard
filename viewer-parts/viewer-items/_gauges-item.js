﻿/**
* DevExpress Dashboard (_gauges-item.js)
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
var _kpi_item_1 = require("./_kpi-item");
var _utils_1 = require("../../data/_utils");
var _formatter_1 = require("../../data/_formatter");
var $ = require("jquery");
var gaugesItem = (function (_super) {
    __extends(gaugesItem, _super);
    function gaugesItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    gaugesItem.prototype._getSpecificWidgetViewerOptions = function () {
        var that = this, viewModel = that.options.ViewModel, specificOptions = {
            itemOptions: {
                ignoreProportions: true
            }
        }, baseOptions = _super.prototype._getSpecificWidgetViewerOptions.call(this);
        if (viewModel) {
            switch (viewModel.ViewType) {
                case _utils_1.gaugeViewType.CircularHalf:
                    specificOptions.itemOptions.proportions = 0.85;
                    specificOptions.itemOptions.minWidth = 155;
                    break;
                case _utils_1.gaugeViewType.CircularQuarterLeft:
                case _utils_1.gaugeViewType.CircularQuarterRight:
                    specificOptions.itemOptions.proportions = 1.25;
                    specificOptions.itemOptions.minWidth = 150;
                    break;
                case _utils_1.gaugeViewType.CircularThreeFourth:
                case _utils_1.gaugeViewType.CircularFull:
                    specificOptions.itemOptions.proportions = 1;
                    specificOptions.itemOptions.minWidth = 180;
                    break;
                case _utils_1.gaugeViewType.LinearVertical:
                    specificOptions.itemOptions.proportions = 1.5;
                    specificOptions.itemOptions.minWidth = 150;
                    break;
                case _utils_1.gaugeViewType.LinearHorizontal:
                    specificOptions.itemOptions.proportions = 0.5;
                    specificOptions.itemOptions.minWidth = 200;
                    break;
            }
        }
        return _utils_1.deepExtend(specificOptions, baseOptions);
    };
    gaugesItem.prototype._supportAnimation = function () {
        return true;
    };
    gaugesItem.prototype._getWidgetType = function () {
        var viewModel = this.options.ViewModel;
        if (viewModel) {
            switch (viewModel.ViewType) {
                case _utils_1.gaugeViewType.LinearVertical:
                case _utils_1.gaugeViewType.LinearHorizontal:
                    return 'lineargauge';
                default:
                    return 'circulargauge';
            }
        }
        return 'circulargauge';
    };
    gaugesItem.prototype._getElementsName = function () {
        return 'Gauges';
    };
    gaugesItem.prototype._showTitle = function () {
        if (this.options.ViewModel) {
            return this.options.ViewModel.ShowGaugeCaptions;
        }
        else {
            return _super.prototype._showTitle.call(this);
        }
    };
    gaugesItem.prototype._getWidget = function () {
        if (this.widgetsViewer) {
            var gaugeList = [];
            $.each(this.widgetsViewer.itemsList, function () {
                gaugeList.push(this._widget);
            });
            return gaugeList;
        }
        else {
            return undefined;
        }
    };
    gaugesItem.prototype._setSourceItemProperties = function (sourceItem, gaugeModel, props) {
        _super.prototype._setSourceItemProperties.call(this, sourceItem, gaugeModel, props);
        var captions = props.getCaptions(), range = props.getGaugeRange(), targetValue;
        this._setVisualProperties(sourceItem, gaugeModel, range);
        if (gaugeModel.DataItemType === _utils_1.KpiValueMode.Measure) {
            sourceItem.value = props.getMeasureValue();
            sourceItem.indicator = {
                text: {
                    value: props.getMeasureDisplayText(),
                    useDefaultColor: gaugeModel.IgnoreDeltaColor
                }
            };
        }
        else {
            sourceItem.value = props.getActualValue();
            targetValue = props.getTargetValue();
            if (targetValue)
                sourceItem.subvalues = [targetValue];
            sourceItem.indicator = {
                type: props.getIndicatorType(),
                hasPositiveMeaning: props.getIsGood(),
                text: {
                    value: props.getMainValueText(),
                    useDefaultColor: gaugeModel.IgnoreDeltaColor
                }
            };
        }
        if (this._showTitle() && captions.length > 0) {
            sourceItem.title = {
                text: captions.join(' - '),
                font: { size: 16 },
                subtitle: { font: { size: 14 } },
                margin: { top: 4, left: 0, right: 0, bottom: 0 }
            };
        }
    };
    gaugesItem.prototype._setVisualProperties = function (sourceItem, gaugeModel, range) {
        var that = this, viewModel = that.options.ViewModel, minRangeValue = range.min, maxRangeValue = range.max, width = maxRangeValue - minRangeValue, intervalCount = range.majorTickCount - 1, tickInterval, scaleFormat = gaugeModel.ScaleFormat != null ? _formatter_1.convertToFormat({ NumericFormat: gaugeModel.ScaleFormat }) : _formatter_1.defaultNumericFormat;
        switch (viewModel.ViewType) {
            case _utils_1.gaugeViewType.CircularHalf:
                sourceItem.geometry = {
                    startAngle: 180,
                    endAngle: 0
                };
                break;
            case _utils_1.gaugeViewType.CircularQuarterLeft:
                sourceItem.geometry = {
                    startAngle: 180,
                    endAngle: 90
                };
                break;
            case _utils_1.gaugeViewType.CircularQuarterRight:
                sourceItem.geometry = {
                    startAngle: 90,
                    endAngle: 0
                };
                break;
            case _utils_1.gaugeViewType.CircularThreeFourth:
                sourceItem.geometry = {
                    startAngle: 220,
                    endAngle: 320
                };
                break;
            case _utils_1.gaugeViewType.CircularFull:
                sourceItem.geometry = {
                    startAngle: 240,
                    endAngle: 300
                };
                break;
            case _utils_1.gaugeViewType.LinearVertical:
                sourceItem.geometry = {
                    orientation: 'vertical'
                };
                break;
            case _utils_1.gaugeViewType.LinearHorizontal:
                sourceItem.geometry = {
                    orientation: 'horizontal'
                };
                break;
        }
        sourceItem.valueIndicator = {
            type: sourceItem.geometry.orientation ? 'rangebar' : 'twocolorneedle'
        };
        sourceItem.subvalueIndicator = {
            offset: sourceItem.geometry.orientation ? 8 : 0
        };
        sourceItem.scale = {
            startValue: minRangeValue,
            endValue: maxRangeValue,
            label: {
                format: scaleFormat
            }
        };
        if (width > 0) {
            tickInterval = width / intervalCount;
            sourceItem.scale.tick = {
                tickInterval: (width >= intervalCount) ? Math.round(tickInterval) : tickInterval,
                useTicksAutoArrangement: false
            };
        }
        sourceItem.animation = that._getAnimationOptions();
    };
    return gaugesItem;
}(_kpi_item_1.kpiItem));
exports.gaugesItem = gaugesItem;
