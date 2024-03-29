﻿/**
* DevExpress Dashboard (_pie-item.js)
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
var _widget_viewer_item_1 = require("./_widget-viewer-item");
var _chart_helper_1 = require("../../data/_chart-helper");
var _item_data_axis_names_1 = require("../viewer/_item-data-axis-names");
var _utils_1 = require("../../data/_utils");
var _selection_helper_1 = require("../../data/_selection-helper");
var _render_helper_1 = require("../widgets/_render-helper");
var $ = require("jquery");
var string_1 = require("devextreme/core/utils/string");
var _z_index_1 = require("../../data/_z-index");
var pieSizeGroup = 0;
var pieItem = (function (_super) {
    __extends(pieItem, _super);
    function pieItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this.itemElementCustomColor = $.Callbacks();
        _this.sizeGroupId = undefined;
        _this.sizeGroupId = ++pieSizeGroup;
        _this._createPieMouseEventController();
        return _this;
    }
    pieItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        if (this.dataController) {
            this.dataController.elementCustomColor = $.proxy(this._elementCustomColor, this);
        }
    };
    pieItem.prototype._clearSelectionUnsafe = function () {
        _super.prototype._clearSelectionUnsafe.call(this);
        var that = this, viewModel = that.options.ViewModel, piesViewer = that.widgetsViewer;
        if (viewModel && viewModel.SelectionEnabled && viewModel.SelectionMode !== _chart_helper_1.chartHelper.SelectionMode.Series) {
            $.each(piesViewer.itemsList, function () {
                if (this._widget) {
                    this._widget.clearSelection();
                }
            });
        }
    };
    pieItem.prototype.updateContentStateUnsafe = function () {
        var that = this;
        if (that._getCustomHoverEnabled()) {
            var argumentHoverMode = 'none', seriesHoverEnabled = false, targetAxes = this._getTargetAxes();
            if (targetAxes.length == 1) {
                if (targetAxes[0] == _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis)
                    argumentHoverMode = 'allArgumentPoints';
                else
                    seriesHoverEnabled = true;
            }
            else {
                if (targetAxes.length == 2) {
                    argumentHoverMode = 'point';
                    seriesHoverEnabled = true;
                }
            }
            $.each(this.widgetsViewer.itemsList, function (index, viewer) {
                viewer._widget.option('commonSeriesSettings.hoverMode', argumentHoverMode);
                viewer._hoverEnabled = seriesHoverEnabled;
            });
        }
    };
    pieItem.prototype.selectTupleUnsafe = function (tuple, state) {
        var that = this, isPointSelection = that.options.ViewModel.SelectionMode === _chart_helper_1.chartHelper.SelectionMode.Points, seriesValue = _utils_1.getAxisPointValue(tuple, _item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis), argumentValue = _utils_1.getAxisPointValue(tuple, _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis);
        $.each(that.widgetsViewer.itemsList, function (index, viewer) {
            if (seriesValue) {
                if (_selection_helper_1.selectionHelper._checkWidgetCorrespondsToValue(viewer, seriesValue)) {
                    if (argumentValue)
                        _selection_helper_1.selectionHelper.setSelectedArguments(viewer._widget, [argumentValue], state);
                    else if (isPointSelection)
                        _selection_helper_1.selectionHelper.selectWholePie(viewer._widget, state);
                    else
                        _selection_helper_1.selectionHelper.setSelectedWidgetViewer(viewer, [seriesValue], state);
                }
            }
            else if (argumentValue) {
                _selection_helper_1.selectionHelper.setSelectedArguments(viewer._widget, [argumentValue], state);
            }
        });
    };
    pieItem.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        this.clearSelection();
        this._applySelection();
    };
    pieItem.prototype._elementCustomColor = function (eventArgs) {
        this.itemElementCustomColor.fire(this.getName(), eventArgs);
    };
    pieItem.prototype._createPieMouseEventController = function () {
        var that = this;
        that.pieMouseEventController = new pieMouseEventController();
        that.pieMouseEventController.ready.add(function () {
            var data = { pie: that.pieMouseEventController.pieData, slice: that.pieMouseEventController.sliceData };
            that._raiseItemClick(data);
        });
    };
    pieItem.prototype._isHoverEnabled = function () {
        return _super.prototype._isHoverEnabled.call(this) && this._isItemSelectionEnabled();
    };
    pieItem.prototype._isItemSelectionEnabled = function () {
        var viewModel = this.options.ViewModel;
        return viewModel && viewModel.SelectionEnabled && (viewModel.SelectionMode === _chart_helper_1.chartHelper.SelectionMode.Series);
    };
    pieItem.prototype._isLabelsVisible = function () {
        var viewModel = this.options.ViewModel;
        return viewModel && (viewModel.LabelContentType !== 'None');
    };
    pieItem.prototype._supportAnimation = function () {
        return true;
    };
    pieItem.prototype._getSpecificWidgetViewerOptions = function () {
        var that = this, specificOptions = that._isLabelsVisible() ? {
            itemOptions: {
                minWidth: 200,
                proportions: 0.75,
                ignoreProportions: true
            }
        } : {
            itemOptions: {
                minWidth: 100,
                proportions: 1,
                ignoreProportions: true
            }
        };
        return _utils_1.deepExtend(specificOptions, _super.prototype._getSpecificWidgetViewerOptions.call(this));
    };
    pieItem.prototype._getWidgetType = function () {
        return 'pieChart';
    };
    pieItem.prototype._getDataSource = function () {
        if (!this.options.ViewModel) {
            return {};
        }
        var that = this, viewModel = that.options.ViewModel, isPointSelectionEnabled = that._getPointSelectionEnabled(), selectionMode = that._selectionMode(), seriesAxisPoints = that.dataController.getSeriesAxisPoints(), selectedValuesList = that._getSelectedValues(), dataSource = [], currentSeriesPath, seriesPropsValues;
        $.each(seriesAxisPoints, function (_, seriesAxisPoint) {
            currentSeriesPath = seriesAxisPoint.getUniquePath();
            $.each(that.dataController.getValueDataMembers(), function (valueIndex, valueDataMember) {
                var dataSourceItem = {
                    animation: that._getAnimationOptions(),
                    sizeGroup: that.sizeGroupId,
                    legend: {
                        visible: false
                    },
                    resolveLabelOverlapping: "shift",
                    onIncidentOccurred: _render_helper_1.RenderHelper.widgetIncidentOccurred,
                    onPointClick: that._getSelectPointsHandler(),
                    onPointHoverChanged: that._getHoverPointsHandler(),
                    palette: _render_helper_1.RenderHelper.getDefaultPalette(),
                    pointSelectionMode: "multiple",
                    commonSeriesSettings: {
                        hoverMode: isPointSelectionEnabled && (selectionMode !== 'none') ? 'allArgumentPoints' : 'none'
                    },
                    customizePoint: function () {
                        var result = { color: that.dataController.getColor(this.tag.axisPoint, seriesAxisPoint, that._getMeasuresIds(this.tag), this.tag.colorMeasureId) };
                        var interactionValue = that._getElementInteractionValue(this, that.options.ViewModel);
                        if (interactionValue && interactionValue.axisPoint && !_utils_1.allowSelectValue(interactionValue.axisPoint.getUniquePath())) {
                            result.hoverStyle = { hatching: 'none' };
                        }
                        return result;
                    }
                };
                dataSourceItem.tag = { axisPoint: seriesAxisPoint };
                _utils_1.extend(dataSourceItem, that._configureHover(currentSeriesPath));
                if (selectedValuesList && that._isItemSelectionEnabled()) {
                    $.each(selectedValuesList, function (__, selectedValue) {
                        if (_utils_1.checkValuesAreEqual(currentSeriesPath, selectedValue))
                            dataSourceItem.isSelected = true;
                    });
                }
                if (viewModel.ShowPieCaptions) {
                    dataSourceItem.title = {
                        text: that.dataController.getValueDisplayNames(seriesAxisPoint, valueIndex),
                        font: {
                            size: 18
                        }
                    };
                }
                seriesPropsValues = {
                    type: (viewModel.PieType === 'Donut') ? 'doughnut' : 'pie',
                    argumentField: 'x',
                    valueField: 'y',
                    label: {
                        visible: that._isLabelsVisible(),
                        position: viewModel.LabelPosition == 'Inside' ? 'inside' : 'columns'
                    },
                    point: {
                        visible: true
                    },
                    segmentsDirection: 'anticlockwise',
                    paintNullPoints: true
                };
                if (seriesPropsValues.label.visible) {
                    seriesPropsValues.label.connector = {
                        visible: true,
                        width: 1
                    };
                    seriesPropsValues.label.customizeText = that._getFormatLabelHandler(viewModel.LabelContentType);
                }
                dataSourceItem.series = [seriesPropsValues];
                dataSourceItem.dataSource = that.dataController.createDataSource(seriesAxisPoint, valueDataMember);
                dataSourceItem.tooltip = {
                    enabled: (viewModel.TooltipContentType !== 'None')
                };
                if (dataSourceItem.tooltip.enabled) {
                    dataSourceItem.tooltip.container = _utils_1.tooltipContainerSelector;
                    dataSourceItem.tooltip.customizeTooltip = function (label) {
                        return { text: that._getFormatLabelHandler(viewModel.TooltipContentType)(label) };
                    };
                    dataSourceItem.tooltip.font = {
                        size: 14
                    };
                    dataSourceItem.tooltip.zIndex = _z_index_1.zIndex.dashboardItemTooltips;
                }
                dataSource.push(dataSourceItem);
            });
        });
        return (dataSource.length == 1 && dataSource[0].dataSource.length == 0) ? [] : dataSource;
    };
    pieItem.prototype._getPointSelectionEnabled = function () {
        var viewModel = this.options.ViewModel;
        return viewModel.SelectionEnabled && (viewModel.SelectionMode === _chart_helper_1.chartHelper.SelectionMode.Argument || viewModel.SelectionMode === _chart_helper_1.chartHelper.SelectionMode.Points);
    };
    pieItem.prototype._getFormatLabelHandler = function (valueType) {
        var that = this;
        return function (label) {
            var pointTexts = that.dataController.getPointDisplayTexts(label.point.tag, label.value, label.percent), tooltipPattern = that._getTooltipPattern(valueType);
            switch (valueType) {
                case 'Argument':
                    return pointTexts.argumentText;
                case 'Percent':
                    return pointTexts.percentText;
                case 'Value':
                    return pointTexts.valueText;
                case 'ValueAndPercent':
                    return string_1.format(tooltipPattern, pointTexts.valueText, pointTexts.percentText);
                case 'ArgumentAndPercent':
                    return string_1.format(tooltipPattern, pointTexts.argumentText, pointTexts.percentText);
                case 'ArgumentAndValue':
                    return string_1.format(tooltipPattern, pointTexts.argumentText, pointTexts.valueText);
                case 'ArgumentValueAndPercent':
                    return string_1.format(tooltipPattern, pointTexts.argumentText, pointTexts.valueText, pointTexts.percentText);
                default:
                    return '';
            }
        };
    };
    pieItem.prototype._getTooltipPattern = function (valueType) {
        switch (valueType) {
            case 'ValueAndPercent':
                return '{0} ({1})';
            case 'ArgumentAndPercent':
            case 'ArgumentAndValue':
                return '{0}: {1}';
            case 'ArgumentValueAndPercent':
                return '{0}: {1} ({2})';
            default:
                return '';
        }
    };
    pieItem.prototype._getElementInteractionValue = function (element, viewModel) {
        if (this._isItemSelectionEnabled())
            return _super.prototype._getElementInteractionValue.call(this, element, viewModel);
        return element.tag;
    };
    pieItem.prototype._getOnClickHandler = function () {
        var that = this;
        return function (e) {
            that._pieMouseEventHandler(e.item);
        };
    };
    pieItem.prototype._getSelectPointsHandler = function () {
        var that = this;
        return function (e) {
            var viewModel = that.options.ViewModel, selectionMode = that._selectionMode(), isPointSelectionEnalbed = viewModel.SelectionEnabled && (viewModel.SelectionMode === _chart_helper_1.chartHelper.SelectionMode.Argument) && selectionMode !== 'none';
            that._sliceMouseEventHandler(e.target);
        };
    };
    pieItem.prototype._getOnHoverHandler = function () {
        var that = this;
        return function (e) {
            that.pieMouseEventController.pieData = e.item;
            that._raiseItemHover({ pie: e.item }, e.state);
        };
    };
    pieItem.prototype._getHoverPointsHandler = function () {
        var that = this;
        return function (e) {
            that._raiseItemHover({ pie: that.pieMouseEventController.pieData, slice: e.target });
        };
    };
    pieItem.prototype._pieMouseEventHandler = function (element) {
        this.pieMouseEventController.setPieData(element);
    };
    pieItem.prototype._sliceMouseEventHandler = function (element) {
        this.pieMouseEventController.setSliceData(element);
    };
    pieItem.prototype._getDataPoint = function (element) {
        var that = this, viewModel = that.options.ViewModel, slice = element.slice, sliceTag = slice ? slice.tag : undefined, pie = element.pie, pieTag = pie ? pie.tag : undefined, argumentsValues = sliceTag ? _utils_1.getTagValue(sliceTag) : [], titleValues = pieTag ? _utils_1.getTagValue(pieTag) : [], argumentIndex = (slice && !sliceTag) ? slice.index : undefined, elementIndex = (pie && !pieTag) ? pie.index : undefined, measureIndex = argumentIndex ? argumentIndex : elementIndex ? elementIndex : 0;
        return {
            getValues: function (name) {
                switch (name) {
                    case _item_data_axis_names_1.itemDataAxisNames.chartArgumentAxis:
                        return argumentsValues;
                    case _item_data_axis_names_1.itemDataAxisNames.chartSeriesAxis:
                        return titleValues;
                    default:
                        return null;
                }
            },
            getDeltaIds: function () {
                return [];
            },
            getMeasureIds: function () {
                return slice ? that._getMeasuresIds(slice.tag) : [];
            }
        };
    };
    pieItem.prototype._getMeasuresIds = function (sliceTag) {
        return sliceTag ? sliceTag.dataMembers : [];
    };
    pieItem.prototype._isMultiDataSupported = function () {
        return true;
    };
    pieItem.prototype._getWidget = function () {
        if (this.widgetsViewer) {
            var pieWidgetViewers = this.widgetsViewer.itemsList, piesList = [];
            $.each(pieWidgetViewers, function () {
                piesList.push(this._widget);
            });
            return piesList;
        }
        else {
            return undefined;
        }
    };
    pieItem.prototype._applySelectionUnsafe = function () {
        var that = this;
        that.getSelectedTuples().forEach(function (tuple) { return that.selectTuple(tuple, true); });
    };
    return pieItem;
}(_widget_viewer_item_1.widgetViewerItem));
exports.pieItem = pieItem;
var pieMouseEventController = (function () {
    function pieMouseEventController() {
        this.shouldRaise = false;
        this.ready = $.Callbacks();
        this.timer = 0;
    }
    pieMouseEventController.prototype.setPieData = function (data) {
        this.pieData = data;
        if (this.ready) {
            this.ready.fire();
        }
        this.pieData = undefined;
        this.sliceData = undefined;
    };
    pieMouseEventController.prototype.setSliceData = function (data) {
        this.sliceData = data;
    };
    return pieMouseEventController;
}());
exports.pieMouseEventController = pieMouseEventController;
