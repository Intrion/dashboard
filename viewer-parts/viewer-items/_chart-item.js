/**
* DevExpress Dashboard (_chart-item.js)
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _base_item_1 = require("./_base-item");
var _selection_helper_1 = require("../../data/_selection-helper");
var _utils_1 = require("../../data/_utils");
var _item_data_axis_names_1 = require("../viewer/_item-data-axis-names");
var _chart_helper_1 = require("../../data/_chart-helper");
var _common_1 = require("../../data/_common");
var chart_1 = require("devextreme/viz/chart");
var _formatter_1 = require("../../data/_formatter");
var _render_helper_1 = require("../widgets/_render-helper");
var _utils_2 = require("../../data/_utils");
var $ = require("jquery");
var _format_helper_1 = require("../../data/_format-helper");
var _dx_devextreme_themes_integration_1 = require("../_dx-devextreme-themes-integration");
var _z_index_1 = require("../../data/_z-index");
var chartItem = (function (_super) {
    __extends(chartItem, _super);
    function chartItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this.itemElementCustomColor = $.Callbacks();
        return _this;
    }
    chartItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.chartViewer && this.chartViewer.dispose();
    };
    chartItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        if (this.dataController) {
            this.dataController.elementCustomColor = $.proxy(this._elementCustomColor, this);
        }
    };
    chartItem.prototype._clearSelectionUnsafe = function () {
        this.chartViewer.clearSelection();
    };
    chartItem.prototype.selectTupleUnsafe = function (tuple, state) {
        _selection_helper_1.selectionHelper.setSelectedPoint(this.chartViewer, _utils_1.getAxisPointValue(tuple, _item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis), _utils_1.getAxisPointValue(tuple, _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis), state);
    };
    chartItem.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        this.clearSelection();
        this._applySelection();
    };
    chartItem.prototype.updateContentStateUnsafe = function () {
        if (this._getCustomHoverEnabled()) {
            var hoverMode = null, targetAxes = this._getTargetAxes();
            if (targetAxes.length == 1) {
                if (targetAxes[0] == _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis)
                    hoverMode = _chart_helper_1.chartHelper.SelectionMode.Argument;
                else
                    hoverMode = _chart_helper_1.chartHelper.SelectionMode.Series;
            }
            else if (targetAxes.length == 2) {
                hoverMode = _chart_helper_1.chartHelper.SelectionMode.Points;
            }
            this.chartViewer.option('commonSeriesSettings.hoverMode', this._convertHoverMode(hoverMode));
            this.chartViewer.option("commonSeriesSettings.point.hoverMode", this._convertPointHoverMode(hoverMode));
        }
    };
    chartItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var opts = this._getViewOptions();
        if (changeExisting && this.chartViewer) {
            switch (this.options.ContentType) {
                case _common_1.contentType.viewModel:
                    break;
                default:
                    _utils_2.deepExtend(opts, this._getCommonOptions());
                    break;
            }
            this.chartViewer.option(opts);
        }
        else {
            this.chartViewer = new chart_1.default(element, __assign({}, opts, this._getCommonOptions()));
        }
        var zoomArguments = this.dataController ? this.dataController.getZoomArguments() : null;
        if (zoomArguments) {
            this.chartViewer.getArgumentAxis().visualRange([zoomArguments.start, zoomArguments.end]);
        }
        return false;
    };
    chartItem.prototype.getInfoUnsafe = function () {
        var info = _super.prototype.getInfoUnsafe.call(this);
        var zoomAndPanMode = this.chartViewer.option('zoomAndPan');
        if (zoomAndPanMode && (zoomAndPanMode === "both" || zoomAndPanMode === 'pan')) {
            var viewport = this.chartViewer.getVisibleArgumentBounds();
            info = _utils_2.deepExtend(info, {
                chartViewport: {
                    min: this.dataController.getArgumentUniquePath(viewport.minVisible),
                    max: this.dataController.getArgumentUniquePath(viewport.maxVisible)
                }
            });
        }
        return info;
    };
    chartItem.prototype._elementCustomColor = function (eventArgs) {
        this.itemElementCustomColor.fire(this.getName(), eventArgs);
    };
    chartItem.prototype._getZoomAndPanOption = function (viewModel) {
        var zoomAndPanOptions = {
            argumentAxis: 'none'
        };
        if (viewModel.AxisX.EnableZooming) {
            zoomAndPanOptions.argumentAxis = 'both';
        }
        else if (viewModel.AxisX.LimitVisiblePoints) {
            zoomAndPanOptions.argumentAxis = 'pan';
        }
        return zoomAndPanOptions;
    };
    chartItem.prototype._getViewOptions = function () {
        var _this = this;
        var viewModel = this.options ? this.options.ViewModel : undefined;
        if (!viewModel)
            return {};
        var that = this, dataSourceAndSeries = that.dataController.getDataSourceAndSeries(that._isEncodeHtml()), panes = viewModel.Panes, isSelectable = that.isInteractivityActionEnabled(), seriesFormats = {}, isDiscreteArgument = that.dataController.isDiscreteArgument(), argumentAxisLabelFormat = that.dataController.getAxisXFormat(), rotated = viewModel.Rotated, axisGridColor = _dx_devextreme_themes_integration_1.getBaseColorScheme() === "light" ? "#d3d3d3" : "#555555", isOverlappingModeHide = function () {
            var isHideMode = false;
            $.each(panes, function (_, pane) {
                $.each(pane.SeriesTemplates, function (_, seriesTemplate) {
                    if (seriesTemplate.PointLabel) {
                        var pointLabelsEnabled = that.dataController.checkSeriesTemplatePointLabels(seriesTemplate);
                        if (pointLabelsEnabled && (seriesTemplate.PointLabel.OverlappingMode == 'Hide' || seriesTemplate.PointLabel.OverlappingMode == 'Reposition'))
                            isHideMode = true;
                    }
                });
            });
            return isHideMode;
        }, configureLogarithmicOptions = function (axis, axisModel) {
            if (axisModel.Logarithmic) {
                axis.type = 'logarithmic';
                axis.logarithmBase = axisModel.LogarithmicBase;
            }
        }, customizeTextProc = function (isPercentAxis, isScientificAxis, customFormat) {
            return function () {
                if (customFormat != null)
                    return _format_helper_1.formatHelper.format(this.value, _formatter_1.convertToFormat({ NumericFormat: customFormat }));
                if (isPercentAxis)
                    return _formatter_1.formatPercentValue(this.value);
                if (isScientificAxis)
                    return _formatter_1.formatScientificAxisValue(this.value);
                return _formatter_1.formatAxisValue(this.value, this.min, this.max);
            };
        }, options = {
            panes: [],
            valueAxis: [],
            rotated: rotated,
            zoomAndPan: this._getZoomAndPanOption(viewModel),
            scrollBar: {
                visible: viewModel.AxisX.EnableZooming || viewModel.AxisX.LimitVisiblePoints,
                position: "bottom"
            }
        };
        options.resolveLabelsOverlapping = isOverlappingModeHide();
        options.disableTwoWayBinding = true;
        options.resolveLabelOverlapping = isOverlappingModeHide() ? 'hide' : 'none';
        $.each(panes, function (index, pane) {
            var paneName = that.dataController.generatePaneName(pane.Name, index), isPrimaryAxisInPercentFormat = that._isAxisInPercentFormat(pane, false), isPrimaryAxisInScientificFormat = that._isAxisInScientificFormat(pane, false), isSecondaryAxisInPercentFormat = that._isAxisInPercentFormat(pane, true), isSecondaryAxisInScientificFormat = that._isAxisInScientificFormat(pane, true);
            seriesFormats[paneName] = {};
            options.panes.push({
                name: paneName
            });
            var axis = {
                name: paneName + 'primary',
                position: rotated ? 'bottom' : 'left',
                pane: paneName,
                inverted: pane.PrimaryAxisY.Reverse,
                color: axisGridColor,
                tick: {
                    visible: false,
                },
                minorTick: {
                    visible: false,
                },
                label: {
                    visible: pane.PrimaryAxisY.Visible,
                    customizeText: customizeTextProc(isPrimaryAxisInPercentFormat, isPrimaryAxisInScientificFormat, pane.PrimaryAxisY.Format && pane.PrimaryAxisY.Format.NumericFormat)
                },
                title: {
                    text: pane.PrimaryAxisY.Visible ? pane.PrimaryAxisY.Title : null
                },
                visible: pane.PrimaryAxisY.Visible,
                grid: {
                    visible: pane.PrimaryAxisY.ShowGridLines
                },
                showZero: pane.PrimaryAxisY.ShowZeroLevel
            };
            configureLogarithmicOptions(axis, pane.PrimaryAxisY);
            options.valueAxis.push(axis);
            if (pane.SecondaryAxisY) {
                var axis_1 = {
                    name: paneName + 'secondary',
                    position: rotated ? 'top' : 'right',
                    pane: paneName,
                    inverted: pane.SecondaryAxisY.Reverse,
                    color: axisGridColor,
                    tick: {
                        visible: false,
                    },
                    minorTick: {
                        visible: false,
                    },
                    label: {
                        visible: pane.SecondaryAxisY.Visible,
                        customizeText: customizeTextProc(isSecondaryAxisInPercentFormat, isSecondaryAxisInScientificFormat, pane.SecondaryAxisY.Format && pane.SecondaryAxisY.Format.NumericFormat)
                    },
                    title: {
                        text: pane.SecondaryAxisY.Visible ? pane.SecondaryAxisY.Title : null
                    },
                    visible: pane.SecondaryAxisY.Visible,
                    grid: {
                        visible: pane.SecondaryAxisY.ShowGridLines
                    },
                    showZero: pane.SecondaryAxisY.ShowZeroLevel
                };
                configureLogarithmicOptions(axis_1, pane.SecondaryAxisY);
                options.valueAxis.push(axis_1);
            }
        });
        if (rotated) {
            options.panes.reverse();
        }
        options.commonSeriesSettings = {
            hoverMode: isSelectable ? that._convertHoverMode(viewModel.SelectionMode) : 'none',
            point: {
                visible: false,
                hoverMode: isSelectable ? that._convertPointHoverMode(viewModel.SelectionMode) : 'none'
            },
            stackedbar: {
                label: {
                    backgroundColor: 'none'
                }
            }
        };
        options.argumentAxis = {
            argumentType: null,
            inverted: viewModel.AxisX.Reverse,
            color: axisGridColor,
            tick: {
                visible: false,
            },
            minorTick: {
                visible: false,
            },
            label: {
                visible: viewModel.AxisX.Visible,
                overlappingBehavior: (!viewModel.Argument.IsOrderedDiscrete && isDiscreteArgument ? 'auto' : 'hide'),
                customizeText: function (argument) {
                    return that.dataController.getAxisXLabelText(argument);
                }
            },
            title: {
                text: viewModel.AxisX.Visible ? viewModel.AxisX.Title : null
            },
            grid: {
                visible: viewModel.AxisX.ShowGridLines
            },
            visible: viewModel.AxisX.Visible,
            valueMarginsEnabled: _chart_helper_1.chartHelper.allowArgumentAxisMargins(panes),
            tickInterval: null
        };
        configureLogarithmicOptions(options.argumentAxis, viewModel.AxisX);
        if (isDiscreteArgument) {
            options.argumentAxis.type = 'discrete';
            options.argumentAxis.argumentType = 'string';
        }
        else {
            if (options.argumentAxis.type === undefined)
                options.argumentAxis.type = 'continuous';
        }
        options.dataPrepareSettings = {
            sortingMethod: false
        };
        if (argumentAxisLabelFormat && !(viewModel.Argument && viewModel.Argument.IsContinuousDateTimeScale)) {
            options.argumentAxis.axisDivisionFactor = 70;
            switch (argumentAxisLabelFormat.format) {
                case 'monthYear':
                    options.argumentAxis.tickInterval = { months: 1 };
                    options.argumentAxis.label.minSpacing = 10;
                    break;
                case 'dayMonthYear':
                    options.argumentAxis.tickInterval = { days: 1 };
                    options.argumentAxis.label.minSpacing = 10;
                    break;
                case 'quarterYear':
                    options.argumentAxis.tickInterval = { quarters: 1 };
                    options.argumentAxis.label.minSpacing = 10;
                    break;
                case 'dateHour':
                    options.argumentAxis.tickInterval = { hours: 1 };
                    options.argumentAxis.label.minSpacing = 10;
                    break;
                case 'dateHourMinute':
                    options.argumentAxis.tickInterval = { minutes: 1 };
                    options.argumentAxis.label.minSpacing = 10;
                    break;
                case 'dateHourMinuteSecond':
                    options.argumentAxis.tickInterval = { seconds: 1 };
                    options.argumentAxis.label.minSpacing = 10;
                    break;
                default:
                    break;
            }
        }
        if (viewModel.Legend) {
            var legendParams = viewModel.Legend.IsInsideDiagram ?
                _chart_helper_1.chartHelper.convertLegendInsidePosition(viewModel.Legend.InsidePosition) :
                _chart_helper_1.chartHelper.convertLegendOutsidePosition(viewModel.Legend.OutsidePosition);
            legendParams.border = {
                visible: viewModel.Legend.IsInsideDiagram
            };
            options.legend = __assign({}, legendParams, { position: viewModel.Legend.IsInsideDiagram ? 'inside' : 'outside', visible: viewModel.Legend.Visible, itemTextPosition: 'right', customizeText: function (args) { return _this.dataController.getLegendSeriesDisplayName(args.seriesName); } });
            if (viewModel.Legend.IsInsideDiagram)
                options.legend.margin = 10;
        }
        return _utils_2.deepExtend(dataSourceAndSeries, options);
    };
    chartItem.prototype._getCommonOptions = function () {
        var that = this, animation = that._getAnimationOptions(), options = {
            sortSeriesPointsByAxis: true,
            redrawOnResize: false,
            pointSelectionMode: 'multiple',
            seriesSelectionMode: 'multiple',
            palette: _render_helper_1.RenderHelper.getDefaultPalette(),
            encodeHtml: that._isEncodeHtml(),
            onIncidentOccurred: function (e) {
                if (e['target'].id === "W2002" && (e['target'].args.indexOf("legendFakeArgument") || (e['target'].args.indexOf("legendFakeValue"))))
                    return;
                if (e['target'].id === "W2103" || e['target'].id === "W2104" || e['target'].id === "W2105" || e['target'].id === "W2106")
                    return;
                _render_helper_1.RenderHelper.widgetIncidentOccurred(e);
            },
            adjustOnZoom: false,
            customizePoint: function () {
                var argumentTag = this.tag, seriesTag = this.series.tag, result = {};
                if (!_chart_helper_1.chartHelper.isFinancialType(this.series.type)) {
                    result.color = that.dataController.getColor(argumentTag.axisPoint, seriesTag.axisPoint, that._getMeasuresIds(seriesTag), seriesTag.colorMeasureId);
                }
                var interactionValue = that._getElementInteractionValue(this, that.options.ViewModel);
                if (interactionValue && interactionValue.axisPoint && !_utils_1.allowSelectValue(interactionValue.axisPoint.getUniquePath())) {
                    result.hoverStyle = { hatching: 'none' };
                }
                return result;
            }
        };
        options.onPointClick = function (e) {
            that._raiseItemClick(e.target);
            e.event["cancel"] = true;
        };
        options.onSeriesClick = function (e) {
            that._raiseItemClick({ series: e.target });
        };
        options.onPointHoverChanged = function (e) {
            that._raiseItemHover(e.target);
        };
        options.tooltip = {
            enabled: true,
            container: _utils_1.tooltipContainerSelector,
            customizeTooltip: function (obj) {
                var pane = obj.point.series.pane, argumentText = that.dataController.getTooltipArgumentText(obj), allSeries = that.chartViewer.getAllSeries(), resultHtml = '<table>';
                var ARGUMENT_VALUE_CLASS = 'dx-argument-value';
                var createCell = function (text, className) {
                    return '<tr><td ' + (className ? 'class="' + className + '"' : '') + '>' + text + '</td></tr>';
                };
                resultHtml += createCell(that._getHtml(argumentText), ARGUMENT_VALUE_CLASS);
                var valueCount = 0;
                var truncated = false;
                for (var i = 0; i < allSeries.length; i++) {
                    var series = allSeries[i];
                    if (series.pane === pane) {
                        var points = series.getPointsByArg(obj.argument), point = points.length > 1 ? obj.point : points[0];
                        if (point) {
                            var text = that.dataController.customizeTooltipText(series, point, series.tag.valueFormats, that._isEncodeHtml());
                            if (text) {
                                if (valueCount < chartItem._maxTooltipValues) {
                                    resultHtml += createCell(text);
                                    valueCount++;
                                }
                                else {
                                    truncated = true;
                                    break;
                                }
                            }
                        }
                    }
                }
                if (truncated) {
                    resultHtml += createCell('...');
                }
                resultHtml += '</table>';
                return {
                    html: resultHtml
                };
            },
            font: {
                size: 14
            },
            zIndex: _z_index_1.zIndex.dashboardItemTooltips
        };
        options.commonPaneSettings = {
            border: {
                visible: true
            }
        };
        options.animation = {
            enabled: animation.enabled,
            duration: animation.duration
        };
        options.margin = {
            top: 10,
            right: 22,
            bottom: 22,
            left: 22
        };
        return options;
    };
    chartItem.prototype._applySelectionUnsafe = function () {
        var that = this, viewModel = that.options.ViewModel, tuples = that.getSelectedTuples();
        if (viewModel && viewModel.SelectionEnabled && tuples.length > 0) {
            that.chartViewer.clearSelection();
            $.each(tuples, function (_, tuple) {
                that.selectTuple(tuple, true);
            });
        }
    };
    chartItem.prototype._getDataPoint = function (element) {
        var that = this, elementTag = element.tag, elementSeries = element.series, elementSeriesTag = elementSeries ? elementSeries.tag : undefined, seriesValues = elementSeriesTag ? _utils_1.getTagValue(elementSeriesTag) : [], argumentValues = elementTag ? _utils_1.getTagValue(elementTag) : [], seriesIndex = elementSeries ? elementSeries.index : undefined;
        return {
            getValues: function (name) {
                switch (name) {
                    case _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis:
                        return argumentValues;
                    case _item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis:
                        return seriesValues;
                    default:
                        return null;
                }
            },
            getDeltaIds: function () {
                return [];
            },
            getMeasureIds: function () {
                return that._getMeasuresIds(elementSeriesTag);
            }
        };
    };
    chartItem.prototype._getMeasuresIds = function (elementSeriesTag) {
        return elementSeriesTag ? elementSeriesTag.dataMembers : [];
    };
    chartItem.prototype._isMultiDataSupported = function () {
        return true;
    };
    chartItem.prototype._getElementInteractionValue = function (element, viewModel) {
        return (viewModel.SelectionEnabled && viewModel.SelectionMode === _chart_helper_1.chartHelper.SelectionMode.Series) ? element.series.tag : element.tag;
    };
    chartItem.prototype._isAxisInPercentFormat = function (pane, isSecondaryAxis) {
        var seriesTemplate;
        for (var i = 0; i < pane.SeriesTemplates.length; i++) {
            seriesTemplate = pane.SeriesTemplates[i];
            if (isSecondaryAxis == seriesTemplate.PlotOnSecondaryAxis && !seriesTemplate.OnlyPercentValues && !this._isFullStackedSeriesType(seriesTemplate.SeriesType))
                return false;
        }
        return true;
    };
    chartItem.prototype._isAxisInScientificFormat = function (pane, isSecondaryAxis) {
        var seriesTemplate;
        for (var i = 0; i < pane.SeriesTemplates.length; i++) {
            seriesTemplate = pane.SeriesTemplates[i];
            if (isSecondaryAxis == seriesTemplate.PlotOnSecondaryAxis && !seriesTemplate.OnlyScientificValues)
                return false;
        }
        return true;
    };
    chartItem.prototype._isFullStackedSeriesType = function (seriesType) {
        switch (seriesType) {
            case 'FullStackedArea':
            case 'FullStackedBar':
            case 'FullStackedLine':
            case 'FullStackedSplineArea':
                return true;
            default:
                return false;
        }
    };
    chartItem.prototype._convertHoverMode = function (selectionMode) {
        switch (selectionMode) {
            case _chart_helper_1.chartHelper.SelectionMode.Argument:
                return 'allArgumentPoints';
            case _chart_helper_1.chartHelper.SelectionMode.Series:
                return 'allSeriesPoints';
            case _chart_helper_1.chartHelper.SelectionMode.Points:
            default:
                return 'none';
        }
    };
    chartItem.prototype._convertPointHoverMode = function (selectionMode) {
        switch (selectionMode) {
            case _chart_helper_1.chartHelper.SelectionMode.Argument:
                return 'allArgumentPoints';
            case _chart_helper_1.chartHelper.SelectionMode.Series:
                return 'allSeriesPoints';
            case _chart_helper_1.chartHelper.SelectionMode.Points:
                return "onlyPoint";
            default:
                return 'none';
        }
    };
    chartItem.prototype._resizeUnsafe = function () {
        _super.prototype._resizeUnsafe.call(this);
        if ($(this.container).is(":visible")) {
            this.chartViewer.render();
        }
    };
    chartItem.prototype._getWidget = function () {
        return this.chartViewer;
    };
    chartItem._maxTooltipValues = 20;
    return chartItem;
}(_base_item_1.baseItem));
exports.chartItem = chartItem;
