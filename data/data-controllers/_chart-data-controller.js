/**
* DevExpress Dashboard (_chart-data-controller.js)
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
var _chart_data_controller_base_1 = require("./_chart-data-controller-base");
var special_values_1 = require("../special-values");
var _localizer_1 = require("../_localizer");
var _localization_ids_1 = require("../_localization-ids");
var _chart_helper_1 = require("../_chart-helper");
var _render_helper_1 = require("../../viewer-parts/widgets/_render-helper");
var _utils_1 = require("../_utils");
var _formatter_1 = require("../_formatter");
var _item_data_axis_names_1 = require("../../viewer-parts/viewer/_item-data-axis-names");
var $ = require("jquery");
var _format_helper_1 = require("../_format-helper");
var enums_1 = require("../../model/enums");
var chartDataController = (function (_super) {
    __extends(chartDataController, _super);
    function chartDataController(options) {
        var _this = _super.call(this, options) || this;
        _this._legendSeriesPrefix = '__legend__series__';
        _this._argumentAxisPoints = _this.getArgumentAxisPoints();
        return _this;
    }
    chartDataController.prototype.getLegendSeriesName = function (seriesName) {
        return this._legendSeriesPrefix + seriesName;
    };
    chartDataController.prototype.getLegendSeriesDisplayName = function (seriesName) {
        return seriesName.indexOf(this._legendSeriesPrefix) !== -1 ? seriesName.replace(this._legendSeriesPrefix, "") : seriesName;
    };
    chartDataController.prototype.getDataSourceAndSeries = function (encodeHtml, range) {
        var _this = this;
        if (range === void 0) { range = false; }
        var that = this;
        if (!that.viewModel || that._argumentAxisPoints.length == 0) {
            return {
                dataSource: null,
                series: null,
                argumentAxis: {
                    categories: []
                }
            };
        }
        var isDiscreteArgument = that.isDiscreteArgument(), seriesInfoList = that._getSeriesInfo(encodeHtml), legendInfoList = that.viewModel.Legend ? that._getLegendInfo() : [], categories = [], result = {
            dataSource: [],
            series: [],
            argumentAxis: null
        };
        if (seriesInfoList.length > 0) {
            seriesInfoList.forEach(function (seriesInfo) {
                if (seriesInfo.seriesItem) {
                    result.series.push(seriesInfo.seriesItem);
                }
            });
            legendInfoList.forEach(function (legendInfo) {
                result.series.push({
                    name: _this.getLegendSeriesName(legendInfo.name),
                    color: legendInfo.color,
                    type: legendInfo.type
                });
            });
            that._argumentAxisPoints.forEach(function (argumentAxisPoint, pointIndex) {
                var argument = that.getArgumentBindingValue(argumentAxisPoint, pointIndex, range), dataSourceItem = {
                    x: argument
                };
                if (that._isSelectionTagsRequired()) {
                    dataSourceItem["tag"] = {
                        axisPoint: argumentAxisPoint
                    };
                }
                if (isDiscreteArgument) {
                    categories.push(argument);
                }
                $.each(seriesInfoList, function (__, seriesInfo) {
                    if (seriesInfo.originalSeriesType === 'HighLowClose') {
                        dataSourceItem['nullColumn'] = null;
                    }
                    $.each(seriesInfo.valueFields, function (___, valueField) {
                        var value = valueField.getValue(argumentAxisPoint);
                        if (value === special_values_1.specialValues.errorValueGuid)
                            value = 0;
                        dataSourceItem[valueField.name] = value;
                    });
                });
                result.dataSource.push(dataSourceItem);
            });
            result.argumentAxis = { categories: categories };
        }
        return result;
    };
    chartDataController.prototype.getArgumentBindingValue = function (argumentPoint, pointIndex, range) {
        if (range === void 0) { range = false; }
        if (!range && (this.isQualitativeArgument() || this.isDiscreteArgument())) {
            if (argumentPoint.getParent() != null) {
                return pointIndex.toString();
            }
            else {
                return _localizer_1.localizer.getString(_localization_ids_1.localizationId.ChartTotalValue);
            }
        }
        return argumentPoint.getValue();
    };
    chartDataController.prototype.generatePaneName = function (paneName, paneIndex) {
        return paneName || 'Pane ' + paneIndex;
    };
    chartDataController.prototype._getSeriesInfo = function (encodeHtml) {
        var that = this, info, seriesIndex = 0, seriesAxisPoints = this.getSeriesAxisPoints(), isGrandTotal = !this.viewModel.SummarySeriesMember, includeTags = that._isSelectionTagsRequired(), reversed = this.viewModel.AxisX && this.viewModel.AxisX.Reverse, result = [], add = function (info) {
            var canReverse = info.seriesItem.type !== 'stackedbar' && info.seriesItem.type !== 'fullstackedbar';
            if (reversed && canReverse)
                result.unshift(info);
            else
                result.push(info);
        };
        that._iterateSeriesTemplates(function (pane, seriesTemplate, paneIndex) {
            var paneName = pane ? that.generatePaneName(pane.Name, paneIndex) : undefined, specifyTitleByName = pane ? pane.SpecifySeriesTitlesWithSeriesName : false, pointLabelInfo = that._getPointLabelInfo(seriesTemplate.PointLabel);
            $.each(seriesAxisPoints, function (___, seriesAxisPoint) {
                info = {
                    name: seriesTemplate.Name,
                    paneName: paneName,
                    pointVisible: that._showPointMarker(seriesTemplate),
                    seriesType: _chart_helper_1.chartHelper.convertSeriesType(seriesTemplate.SeriesType),
                    originalSeriesType: seriesTemplate.SeriesType,
                    plotOnSecondaryAxis: seriesTemplate.PlotOnSecondaryAxis,
                    ignoreEmptyPoints: seriesTemplate.IgnoreEmptyPoints,
                    axisPoint: seriesAxisPoint,
                    dataMembers: seriesTemplate.DataMembers,
                    colorMeasureId: seriesTemplate.ColorMeasureID,
                    valueFormats: [],
                    valueFields: [],
                    pointLabel: pointLabelInfo
                };
                $.each(info.dataMembers, function (____, dataMember) {
                    info.valueFormats.push(that.multiData.getMeasureFormat(dataMember));
                    info.valueFields.push({
                        name: 'y' + seriesIndex.toString(),
                        getValue: function (argumentAxisPoint) {
                            return that._getCrossSlice(argumentAxisPoint, seriesAxisPoint).getMeasureValue(dataMember).getValue();
                        }
                    });
                    seriesIndex++;
                });
                if (!isGrandTotal) {
                    info.title = that.getTitle(seriesAxisPoint);
                    if (specifyTitleByName) {
                        info.title += ' - ' + seriesTemplate.Name;
                    }
                }
                else {
                    info.title = seriesTemplate.Name;
                }
                info.seriesItem = that._createSeriesItem(info, includeTags, encodeHtml);
                add(info);
            });
        });
        return result;
    };
    chartDataController.prototype.customizeTooltipText = function (series, point, seriesFormats, encodeHtml) {
        if (!this._validatePoint(point, series.type))
            return null;
        var color = this._getCustomizeTooltipTextColor(point);
        return this._getTooltipHtml(series, point, seriesFormats, encodeHtml, color);
    };
    chartDataController.prototype._getTooltipHtml = function (series, point, seriesFormats, encodeHtml, color) {
        var text = this._getTooltipTextInternal(series, point, seriesFormats, encodeHtml);
        if (color) {
            text = "<div>" + _render_helper_1.RenderHelper.rectangle(color, 10, 10) + "&nbsp;&nbsp;" + text + "</div>";
        }
        return text;
    };
    chartDataController.prototype._getTooltipTextInternal = function (series, point, seriesFormats, encodeHtml) {
        var that = this, text = series.name + ": ";
        text = encodeHtml ? _utils_1.encodeHtml(text) : text;
        switch (series.type) {
            case 'rangebar':
            case 'rangearea':
                text += that._formatValuesList([point.originalMinValue, point.originalValue], seriesFormats, encodeHtml);
                break;
            case 'bubble':
                text += that._formatValuesList([point.originalValue, point.size], seriesFormats, encodeHtml);
                break;
            case 'stock':
            case 'candlestick':
                text += that._formatOpenHighLowCloseValues([point.originalOpenValue, point.originalHighValue, point.originalLowValue, point.originalCloseValue], seriesFormats, series.getOptions().openValueField !== 'nullColumn', encodeHtml, '<br>');
                break;
            default:
                text += that._formatValuesList([point.originalValue], seriesFormats, encodeHtml);
                break;
        }
        return text;
    };
    chartDataController.prototype.getTooltipArgumentText = function (obj) {
        return this.getArgumentText({ value: obj.originalArgument });
    };
    chartDataController.prototype.getZoomArguments = function () {
        var that = this, axisX = that.viewModel ? that.viewModel.AxisX : undefined;
        if (axisX && axisX.LimitVisiblePoints && that._argumentAxisPoints.length > axisX.VisiblePointsCount) {
            var endIndex = axisX.VisiblePointsCount - 1;
            return {
                start: that.getArgumentBindingValue(that._argumentAxisPoints[0], 0, false),
                end: that.getArgumentBindingValue(that._argumentAxisPoints[endIndex], endIndex, false)
            };
        }
    };
    chartDataController.prototype.getArgumentUniquePath = function (value) {
        var that = this;
        for (var i = 0; i < that._argumentAxisPoints.length; i++) {
            if (that.getArgument(that._argumentAxisPoints[i]) === value)
                return that._argumentAxisPoints[i].getUniquePath();
        }
    };
    chartDataController.prototype._getArgumentAutoFormat = function () {
        var that = this, min = 0, max = 1;
        if (that._argumentAxisPoints.length > 0) {
            min = that._argumentAxisPoints[0].getValue();
            max = that._argumentAxisPoints[that._argumentAxisPoints.length - 1].getValue();
        }
        return _formatter_1.getAxisFormat(min, max);
    };
    chartDataController.prototype._createArgumentFormat = function () {
        var that = this, argumentAxisLabelFormat = undefined, argument = that.viewModel ? that.viewModel.Argument : undefined;
        if (argument && !that.isDiscreteArgument()) {
            argumentAxisLabelFormat = _formatter_1.convertToFormat(argument.AxisXLabelFormat);
            if (that._isNumericDataType(argument.Type)) {
                if (!argumentAxisLabelFormat || !argument.AxisXLabelFormat.NumericFormat) {
                    argumentAxisLabelFormat = that._getArgumentAutoFormat();
                }
                else {
                    if (argument.AxisXLabelFormat.NumericFormat.Unit == 'Auto') {
                        argumentAxisLabelFormat = that._getArgumentAutoFormat();
                    }
                }
                argumentAxisLabelFormat.dateType = null;
            }
            if (argumentAxisLabelFormat) {
                argumentAxisLabelFormat.showTrailingZeros = false;
            }
        }
        else if (that.isSingleArgument()) {
            argumentAxisLabelFormat = that.getSingleArgumentDimensionFormat();
        }
        return argumentAxisLabelFormat;
    };
    chartDataController.prototype._createAxisXFormat = function () {
        if (this.viewModel.AxisX.Format && (this.viewModel.AxisX.Format.NumericFormat != null || this.viewModel.AxisX.Format.DateTimeFormat != null))
            return _formatter_1.convertToFormat(this.viewModel.AxisX.Format);
        return this.getArgumentFormat();
    };
    chartDataController.prototype.getArgumentFormat = function () {
        if (this._argumentFormat == null)
            this._argumentFormat = this._createArgumentFormat();
        return this._argumentFormat;
    };
    chartDataController.prototype.getAxisXFormat = function () {
        if (this._axisXFormat == null)
            this._axisXFormat = this._createAxisXFormat();
        return this._axisXFormat;
    };
    chartDataController.prototype.getArgumentText = function (argument) {
        var _this = this;
        return this._getArgumentText(argument.value, function () { return _this.getArgumentFormat(); });
    };
    chartDataController.prototype.getAxisXLabelText = function (axisValue) {
        var _this = this;
        return this._getArgumentText(axisValue.value, function () { return _this.getAxisXFormat(); });
    };
    chartDataController.prototype._getArgumentText = function (argumentValue, formatGetter) {
        var predefinedValue = _localizer_1.localizer.getPredefinedString(argumentValue);
        if (_utils_1.type.isDefined(predefinedValue))
            return predefinedValue;
        if (this.isDiscreteArgument() || this.isQualitativeArgument()) {
            var axisPoint = this._argumentAxisPoints[argumentValue];
            if (this.viewModel.Argument.AxisXDateTimeFormatSupported)
                return _format_helper_1.formatHelper.format(axisPoint.getValue(), formatGetter());
            return axisPoint ? this.getTitle(axisPoint, '\n') : argumentValue;
        }
        return _format_helper_1.formatHelper.format(argumentValue, formatGetter());
    };
    chartDataController.prototype._validatePoint = function (point, seriesType) {
        switch (seriesType) {
            case 'rangebar':
            case 'rangearea':
                return !(point.originalMinValue === null && point.originalValue === null);
            case 'bubble':
                return !(point.originalValue === null && point.size === null);
            case 'stock':
            case 'candlestick':
                return !(point.originalOpenValue === null && point.originalHighValue === null && point.originalLowValue === null && point.originalCloseValue === null);
            default:
                return !(point.originalValue === null);
        }
    };
    chartDataController.prototype._getCustomizeTooltipTextColor = function (point) {
        if (point.getColor) {
            return point.getColor();
        }
    };
    chartDataController.prototype._getLegendInfo = function () {
        var _this = this;
        var that = this, values = [], result = [], colorMeasures = that.multiData.getColorMeasures(), argumentPoints = that.getArgumentAxisPoints(that.viewModel.ArgumentColorDimension), seriesPoints = that.getSeriesAxisPoints(that.viewModel.SeriesColorDimension), includeProc = function (axisPoint) {
            var dim = axisPoint.getDimension();
            return (dim && _this.viewModel.ColorPathMembers && _this.viewModel.ColorPathMembers.indexOf(dim.id) !== -1);
        }, getColorValuesProc = function (axisPoint) {
            return axisPoint.getValuePath(includeProc);
        }, getColorDisplayTextsProc = function (axisPoint) {
            return axisPoint.getDisplayPath(includeProc);
        };
        $.each(colorMeasures, function (_, colorMeasure) {
            $.each(argumentPoints, function (__, argumentPoint) {
                $.each(seriesPoints, function (___, seriesPoint) {
                    var color = that._getColorFromData(argumentPoint, seriesPoint, colorMeasure.id);
                    if (color) {
                        var valueSet = getColorValuesProc(argumentPoint).concat(getColorValuesProc(seriesPoint));
                        var displayTexts = getColorDisplayTextsProc(argumentPoint).concat(getColorDisplayTextsProc(seriesPoint));
                        if (colorMeasure.name) {
                            valueSet.push(colorMeasure);
                            displayTexts.push(colorMeasure.name);
                        }
                        if (!that._valuesContainsValueSet(values, valueSet)) {
                            values.push(valueSet);
                            var colorText = displayTexts.join(' - ');
                            if (!colorText || colorText == '') {
                                colorText = that._getDisplayTextBySeriesTemplates();
                            }
                            var transparentColor = !that.viewModel.ArgumentColorDimension && _chart_helper_1.chartHelper.isTransparentColorType(that._getLastSeriesType(colorMeasure.id));
                            result.push({
                                name: colorText,
                                color: color,
                                type: transparentColor ? 'bubble' : 'line',
                                argumentField: "legendFakeArgument",
                                valueField: "legendFakeValue"
                            });
                        }
                    }
                });
            });
        });
        return result;
    };
    chartDataController.prototype._valuesContainsValueSet = function (values, valueSet) {
        for (var i = 0; i < values.length; i++) {
            if (values[i].length !== valueSet.length)
                continue;
            var equal = true;
            for (var j = 0; j < values[i].length; j++) {
                if (values[i][j] !== valueSet[j]) {
                    equal = false;
                    break;
                }
            }
            if (equal)
                return true;
        }
        return false;
    };
    chartDataController.prototype._getLastSeriesType = function (colorMeasureId) {
        var panes = this.viewModel.Panes;
        for (var i = panes.length - 1; i >= 0; i--) {
            for (var j = panes[i].SeriesTemplates.length - 1; j >= 0; j--) {
                if (colorMeasureId === panes[i].SeriesTemplates[j].ColorMeasureID) {
                    return _chart_helper_1.chartHelper.convertSeriesType(panes[i].SeriesTemplates[j].SeriesType);
                }
            }
        }
    };
    chartDataController.prototype._getDisplayTextBySeriesTemplates = function () {
        var displayTexts = [];
        this._iterateSeriesTemplates(function (pane, seriesTemplate, paneIndex, templateIndex) {
            var name = seriesTemplate.Name;
            if (displayTexts.indexOf(name) === -1) {
                displayTexts.push(name);
            }
        });
        return displayTexts.join(', ');
    };
    chartDataController.prototype._iterateSeriesTemplates = function (proc) {
        $.each(this.viewModel.Panes, function (paneIndex, pane) {
            $.each(pane.SeriesTemplates, function (_, seriesTemplate) {
                proc(pane, seriesTemplate, paneIndex);
            });
        });
    };
    chartDataController.prototype._isSelectionTagsRequired = function () {
        return true;
    };
    chartDataController.prototype._createSeriesItem = function (seriesInfo, includeTags, encodeHtml) {
        var that = this, seriesItem = {
            argumentField: 'x',
            type: seriesInfo.seriesType,
            showInLegend: seriesInfo.seriesType === 'stock' || seriesInfo.seriesType === 'candlestick'
        }, setNamesListProc = function (names) {
            if (seriesInfo.originalSeriesType === 'HighLowClose') {
                seriesItem[names[0]] = 'nullColumn';
                names.splice(0, 1);
            }
            for (var i = 0; i < Math.min(names.length, seriesInfo.valueFields.length); i++) {
                seriesItem[names[i]] = seriesInfo.valueFields[i].name;
            }
        };
        if (_utils_1.type.isDefined(seriesInfo.title)) {
            seriesItem.name = seriesInfo.title;
        }
        if (_utils_1.type.isDefined(seriesInfo.paneName)) {
            seriesItem.pane = seriesInfo.paneName;
        }
        if (includeTags) {
            seriesItem.tag = {
                axisPoint: seriesInfo.axisPoint,
                dataMembers: seriesInfo.dataMembers,
                valueFormats: seriesInfo.valueFormats,
                colorMeasureId: seriesInfo.colorMeasureId
            };
        }
        if (seriesInfo.pointVisible) {
            seriesItem.point = {
                visible: seriesInfo.pointVisible
            };
        }
        switch (seriesItem.type) {
            case 'rangebar':
            case 'rangearea':
                setNamesListProc(["rangeValue1Field", "rangeValue2Field"]);
                break;
            case 'bubble':
                setNamesListProc(["valueField", "sizeField"]);
                break;
            case 'stock':
            case 'candlestick':
                setNamesListProc(["openValueField", "highValueField", "lowValueField", "closeValueField"]);
                break;
            default:
                setNamesListProc(["valueField"]);
                break;
        }
        seriesItem.axis = (seriesInfo.paneName || '') + (seriesInfo.plotOnSecondaryAxis ? 'secondary' : 'primary');
        if (seriesInfo.ignoreEmptyPoints) {
            seriesItem.ignoreEmptyPoints = seriesInfo.ignoreEmptyPoints;
        }
        if (that.showPointLabels(seriesInfo.pointLabel)) {
            var pointLabel = seriesInfo.pointLabel;
            seriesItem.label = {
                visible: true,
                rotationAngle: pointLabel.rotationAngle,
                customizeText: function () {
                    return that._customizePointLabelText(this, pointLabel, seriesInfo);
                }
            };
            if (seriesItem.type === 'bar') {
                seriesItem.label.showForZeroValues = pointLabel.showForZeroValues;
            }
            if (seriesItem.type === 'bar' || seriesItem.type === 'bubble') {
                seriesItem.label.position = pointLabel.position;
            }
            else if (seriesItem.type === 'fullstackedbar') {
                seriesItem.label.position = 'inside';
            }
        }
        var color = undefined;
        if (_utils_1.type.isDefined(seriesInfo.colorMeasureId)) {
            color = that._getColorFromData(that._argumentAxisPoints[0], seriesInfo.axisPoint, seriesInfo.colorMeasureId);
        }
        if (_chart_helper_1.chartHelper.isSeriesColorSupported(seriesItem.type)) {
            var argumentRootAxisPoint = this.multiData.getAxis(_item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis).getRootPoint();
            color = that._getElementCustomColor(argumentRootAxisPoint, seriesInfo.axisPoint, seriesInfo.dataMembers, color);
        }
        if (color) {
            seriesItem.color = color;
        }
        if (_chart_helper_1.chartHelper.isStackedAreaType(seriesItem.type)) {
            seriesItem.opacity = 1;
        }
        return seriesItem;
    };
    chartDataController.prototype._customizePointLabelText = function (valueContainer, pointLabel, seriesInfo) {
        var that = this, contentType = pointLabel.contentType, formatArgumentProc = function () {
            return that.getArgumentText({ value: valueContainer.argument });
        }, formatValueProc = function () {
            var formats = seriesInfo.valueFormats;
            switch (seriesInfo.seriesType) {
                case 'rangebar':
                case 'rangearea':
                    return that._formatValuesList([valueContainer.value], [formats[valueContainer.index]], false);
                case 'bubble':
                    return that._formatValuesList([valueContainer.value, valueContainer.size], formats, false);
                case 'stock':
                case 'candlestick':
                    return that._formatOpenHighLowCloseValues([valueContainer.openValue, valueContainer.highValue, valueContainer.lowValue, valueContainer.closeValue], formats, seriesInfo.originalSeriesType !== 'HighLowClose', false, '\n\r');
                default:
                    return that._formatValuesList([valueContainer.value], formats, false);
            }
        };
        var hasArgument = (contentType & enums_1.PointLabelContentType.Argument) > 0, hasSeriesName = (contentType & enums_1.PointLabelContentType.SeriesName) > 0, hasValue = (contentType & enums_1.PointLabelContentType.Value) > 0, hasPercent = (contentType & enums_1.PointLabelContentType.Percent) > 0 && this._getPercentSupported(seriesInfo);
        var firstPart = "";
        var secondPart = "";
        var argument = hasArgument ? formatArgumentProc() : "";
        var series = hasSeriesName ? valueContainer.seriesName : "";
        var value = hasValue ? formatValueProc() : "";
        var percent = hasPercent ? _formatter_1.formatPercentValue(valueContainer.percent) : "";
        if (hasArgument) {
            firstPart = hasSeriesName ? argument + " (" + series + ")" : "" + argument;
        }
        else if (hasSeriesName) {
            firstPart = "" + series;
        }
        if (hasValue) {
            secondPart = hasPercent ? value + " (" + percent + ")" : "" + value;
        }
        else if (hasPercent) {
            secondPart = "" + percent;
        }
        return ["" + firstPart, "" + secondPart].filter(function (s) { return s != ""; }).join(": ");
    };
    chartDataController.prototype._getPercentSupported = function (seriesInfo) {
        return ["fullstackedbar", "fullstackedline", "fullstackedarea", "fullStackedSplineArea"].indexOf(seriesInfo.seriesType) >= 0;
    };
    chartDataController.prototype._formatOpenHighLowCloseValues = function (values, formats, hasOpenValueField, encodeHtml, delimiter) {
        var result = '', delimiter = delimiter || ' ', formatsLength = formats ? formats.length : 0, i, formatIndex, valueNames = [
            _localizer_1.localizer.getString(_localization_ids_1.localizationId.OpenCaption),
            _localizer_1.localizer.getString(_localization_ids_1.localizationId.HighCaption),
            _localizer_1.localizer.getString(_localization_ids_1.localizationId.LowCaption),
            _localizer_1.localizer.getString(_localization_ids_1.localizationId.CloseCaption)
        ];
        if (values && (formatsLength > 0) && (formatsLength <= values.length)) {
            for (formatIndex = 0, i = hasOpenValueField ? 0 : 1; formatIndex < formatsLength; formatIndex++, i++) {
                result += delimiter + valueNames[i] + ': ' + this._formatValue(values[i], formats[formatIndex], encodeHtml);
            }
        }
        return result;
    };
    chartDataController.prototype._formatValuesList = function (valuesList, formats, encodeHtml) {
        var result = '';
        if (formats && formats.length === valuesList.length) {
            for (var i = 0; i < valuesList.length; i++) {
                result = result + (i === 0 ? '' : ' - ') + this._formatValue(valuesList[i], formats[i], encodeHtml);
            }
        }
        return result;
    };
    chartDataController.prototype._formatValue = function (value, format, encodeHtml) {
        var text = _formatter_1.format(value ? value : 0, format);
        return encodeHtml ? _utils_1.encodeHtml(text) : text;
    };
    chartDataController.prototype._isNumericDataType = function (type) {
        return type == 'Integer' || type == 'Float' || type == 'Double' || type == 'Decimal';
    };
    chartDataController.prototype._convertContentType = function (typeModel) {
        return enums_1.parsePointLabelContentType(typeModel);
    };
    chartDataController.prototype._showPointMarker = function (seriesTemplate) {
        switch (seriesTemplate.SeriesType) {
            case "Point":
                return true;
            case "Line":
            case "StackedLine":
            case "FullStackedLine":
            case "StepLine":
            case "Spline":
            case "Area":
            case "StackedArea":
            case "FullStackedArea":
            case "StepArea":
            case "SplineArea":
            case "StackedSplineArea":
            case "FullStackedSplineArea":
            case "RangeArea":
                return seriesTemplate.ShowPointMarkers;
            default:
                false;
        }
    };
    chartDataController.prototype.checkSeriesTemplatePointLabels = function (seriesTemplateViewModel) {
        return this.showPointLabels(this._getPointLabelInfo(seriesTemplateViewModel.PointLabel));
    };
    chartDataController.prototype.showPointLabels = function (pointLabelInfo) {
        return pointLabelInfo && pointLabelInfo.contentType != enums_1.PointLabelContentType.None;
    };
    chartDataController.prototype._getPointLabelInfo = function (pointLabelViewModel) {
        if (pointLabelViewModel) {
            return {
                showPointLabels: pointLabelViewModel.ShowPointLabels,
                rotationAngle: _chart_helper_1.chartHelper.convertPointLabelRotationAngle(pointLabelViewModel.Orientation),
                position: _chart_helper_1.chartHelper.convertPointLabelPosition(pointLabelViewModel.Position),
                showForZeroValues: pointLabelViewModel.ShowForZeroValues,
                contentType: this._convertContentType(pointLabelViewModel.ContentType),
                scatterContent: pointLabelViewModel.ScatterContent
            };
        }
    };
    return chartDataController;
}(_chart_data_controller_base_1.chartDataControllerBase));
exports.chartDataController = chartDataController;
