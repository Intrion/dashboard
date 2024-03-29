﻿/**
* DevExpress Dashboard (_choropleth-map-item.js)
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
var _map_item_1 = require("./_map-item");
var _utils_1 = require("../../data/_utils");
var _consts_1 = require("../widgets/indicators/_consts");
var _z_index_1 = require("../../data/_z-index");
var choroplethMapItem = (function (_super) {
    __extends(choroplethMapItem, _super);
    function choroplethMapItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    choroplethMapItem.prototype.selectTuple = function (tuple, state) {
        var that = this;
        that.mapViewer.getLayerByName('area').getElements().forEach(function (item) {
            if (item.attribute('selectionName') == tuple[0].Value)
                item.selected(state);
        });
    };
    choroplethMapItem.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        var that = this;
        this.clearSelection();
        that.mapViewer.getLayerByName('area').getElements().forEach(function (item) {
            values.forEach(function (value) {
                if (item.attribute('selectionName') == value)
                    item.selected(true);
            });
        });
    };
    choroplethMapItem.prototype.updateContentStateUnsafe = function () {
        this.mapViewer.option("layers[0].hoverEnabled", this._getCustomHoverEnabled());
    };
    choroplethMapItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var options = _utils_1.deepExtend(this._getMapViewerOptions(), this._getChoroplethMapViewerOptions());
        this._renderContentInternal(element, changeExisting, options);
        return false;
    };
    choroplethMapItem.prototype._getChoroplethMapViewerOptions = function () {
        var that = this, viewModel = that.options.ViewModel, mapItems = viewModel.MapItems, mapDataSource = that._getMapDataSource(mapItems, viewModel.ShapeTitleAttributeName), choroplethColorizer = viewModel.ChoroplethColorizer, tooltipAttributeName = viewModel.ToolTipAttributeName, tooltipMeasures = viewModel.TooltipMeasures, colors, rangeStops, legend, i;
        for (i = 0; i < mapItems.length; i++) {
            var attributeText = that._findAttributeValueByName(mapItems[i].Attributes, tooltipAttributeName);
            mapDataSource[i].attributes.tooltip = '<b>' + that._getHtml(attributeText) + '</b>';
        }
        if (choroplethColorizer && that.dataController.hasRecords()) {
            if (choroplethColorizer.ValueName) {
                that._fillValueMapDataSourceAttrs(mapDataSource, choroplethColorizer, tooltipMeasures, mapItems);
                rangeStops = that._getRangeStops(choroplethColorizer);
                colors = that._getColors(choroplethColorizer.Colorizer.Colors);
                if (!colors) {
                    colors = rangeStops.length > 2 ? ['#5F8195', '#B55951'] : ['#5F8195'];
                }
                legend = that._getColorLegend(viewModel.Legend, that.dataController.getMeasureDescriptorById(choroplethColorizer.ValueId));
            }
            if (choroplethColorizer.DeltaValueName) {
                that._fillDeltaMapDataSourceAttrs(mapDataSource, choroplethColorizer, tooltipMeasures, mapItems);
                colors = ['rgb(229, 82, 83)', 'rgb(224, 194, 58)', 'rgb(154, 181, 126)'];
                rangeStops = [0, 1, 2, 3];
            }
        }
        return {
            layers: that._configureGeometryLayers(mapDataSource, that._getArea(viewModel, colors, rangeStops)),
            onClick: function (e) {
                if (e.target && e.target.layer.name === "area" && e.target.attribute('selectionName')) {
                    that._raiseItemClick(e.target);
                }
            },
            legends: [legend],
            tooltip: {
                enabled: true,
                zIndex: _z_index_1.zIndex.dashboardItemTooltips,
                container: _utils_1.tooltipContainerSelector,
                customizeTooltip: function (arg) {
                    if (arg.layer.name === "area")
                        return {
                            html: arg.attribute('tooltip')
                        };
                }
            }
        };
    };
    choroplethMapItem.prototype._getColorLegend = function (legendViewModel, measureDescriptor) {
        var legend = this._getLegend(legendViewModel);
        if (legend) {
            legend.source = {
                layer: "area",
                grouping: "color"
            };
            legend.customizeText = function (arg) {
                return measureDescriptor.format(arg.start);
            };
        }
        return legend;
    };
    choroplethMapItem.prototype._fillMeasureToolTip = function (mapDataSourceItem, attribute, tooltipMeasures) {
        var displayText, tooltipViewModel, i;
        if (tooltipMeasures) {
            for (i = 0; i < tooltipMeasures.length; i++) {
                tooltipViewModel = tooltipMeasures[i];
                displayText = this.dataController.getDisplayText(attribute, tooltipViewModel.DataId);
                if (displayText != null) {
                    mapDataSourceItem.attributes.tooltip += '<br>' + this._getToolTip(tooltipViewModel.Caption, displayText);
                }
            }
        }
    };
    choroplethMapItem.prototype._fillValueMapDataSourceAttrs = function (mapDataSource, choroplethColorizer, tooltipMeasures, mapItems) {
        var attributeName = choroplethColorizer.AttributeName, attribute, selectionName, displayText;
        for (var i = 0; i < mapItems.length; i++) {
            attribute = this._findAttributeValueByName(mapItems[i].Attributes, attributeName);
            selectionName = this.dataController.getUniqueValue(attribute);
            if (selectionName) {
                displayText = this.dataController.getDisplayText(attribute, choroplethColorizer.ValueId);
                mapDataSource[i].attributes.selectionName = selectionName;
                mapDataSource[i].attributes.selected = this._isSelected([selectionName]);
                mapDataSource[i].attributes.value = this.dataController.getValue(attribute, choroplethColorizer.ValueId);
                mapDataSource[i].attributes.tooltip += '<br>' + this._getToolTip(choroplethColorizer.ValueName, displayText);
                this._correctAttributesTitle(mapDataSource[i].attributes, displayText);
                this._fillMeasureToolTip(mapDataSource[i], attribute, tooltipMeasures);
            }
        }
    };
    choroplethMapItem.prototype._fillDeltaMapDataSourceAttrs = function (mapDataSource, choroplethColorizer, tooltipMeasures, mapItems) {
        var attributeName = choroplethColorizer.AttributeName, selectionName, attribute, toolTip, deltaValue, value, isGood, displayText, indicatorType;
        for (var i = 0; i < mapItems.length; i++) {
            attribute = this._findAttributeValueByName(mapItems[i].Attributes, attributeName);
            selectionName = this.dataController.getUniqueValue(attribute);
            if (selectionName) {
                mapDataSource[i].attributes.selectionName = selectionName;
                mapDataSource[i].attributes.selected = this._isSelected([selectionName]);
                deltaValue = this.dataController.getDeltaValue(attribute, choroplethColorizer.DeltaValueId);
                isGood = deltaValue.getIsGood().getValue();
                indicatorType = this._convertIndicatorType(deltaValue.getIndicatorType().getValue());
                mapDataSource[i].attributes.value = this._getDeltaColorValue(indicatorType, isGood);
                displayText = deltaValue.getActualValue().getDisplayText();
                toolTip = '<br>' + this._getToolTip(choroplethColorizer.ActualValueName, displayText);
                value = this._getDeltaValue(deltaValue, choroplethColorizer.DeltaValueType);
                if (value) {
                    displayText = value.getDisplayText();
                    toolTip += '<br>' + this._getToolTip(choroplethColorizer.DeltaValueName, displayText);
                }
                mapDataSource[i].attributes.tooltip += toolTip;
                this._correctAttributesTitle(mapDataSource[i].attributes, displayText);
                this._fillMeasureToolTip(mapDataSource[i], attribute, tooltipMeasures);
            }
        }
    };
    choroplethMapItem.prototype._correctAttributesTitle = function (attributes, displayText) {
        var viewModel = this.options.ViewModel;
        if (viewModel.IncludeSummaryValueToShapeTitle) {
            if (attributes.title)
                attributes.title += '\r\n' + displayText;
            else
                attributes.title = displayText;
        }
    };
    choroplethMapItem.prototype._getDeltaValue = function (deltaValue, deltaValueType) {
        switch (deltaValueType) {
            case 'AbsoluteVariation':
                return deltaValue.getAbsoluteVariation();
            case 'PercentVariation':
                return deltaValue.getPercentVariation();
            case 'PercentOfTarget':
                return deltaValue.getPercentOfTarget();
            case 'ActualValue':
            default:
                return null;
        }
    };
    choroplethMapItem.prototype._findAttributeValueByName = function (attributes, attributeName) {
        for (var i = 0; i < attributes.length; i++) {
            if (attributes[i].Name === attributeName) {
                return attributes[i].Value;
            }
        }
    };
    choroplethMapItem.prototype._getRangeStops = function (choroplethColorizer) {
        var minMax = this.dataController.getMinMax(choroplethColorizer.ValueId);
        return this._updateRangeStops(choroplethColorizer.Colorizer.RangeStops, minMax.min, minMax.max, choroplethColorizer.Colorizer.UsePercentRangeStops);
    };
    choroplethMapItem.prototype._convertIndicatorType = function (type) {
        var indicatorTypes = ["none", "up", "down", "warning"];
        return indicatorTypes[type];
    };
    choroplethMapItem.prototype._getDeltaColorValue = function (indicatorType, isGood) {
        switch (indicatorType) {
            case _consts_1.indicatorType.up:
            case _consts_1.indicatorType.down:
                return isGood ? 2.5 : 0.5;
            case _consts_1.indicatorType.warning:
                return 1.5;
            default:
                return -1;
        }
    };
    choroplethMapItem.prototype._getArea = function (viewModel, colors, rangeStops) {
        var that = this, selectionDisabled = that._selectionMode() === 'none';
        return __assign({}, that._getLabelSettings(viewModel), { colorGroupingField: 'value', colorGroups: rangeStops, palette: colors, customize: function (items) {
                items.forEach(function (item) {
                    item.selected(item.attribute('selected'));
                    if (selectionDisabled || item.attribute('value') === undefined) {
                        item.applySettings({
                            hoveredBorderColor: null,
                            hoveredClass: null,
                            hoverEnabled: false
                        });
                    }
                });
            }, selectionMode: 'multiple' });
    };
    choroplethMapItem.prototype._getDataPoint = function (element) {
        var that = this;
        return {
            getValues: function () {
                return that._getElementInteractionValue(element, that.options.ViewModel);
            },
            getMeasureIds: function () {
                return [that.options.ViewModel.ChoroplethColorizer.ValueId];
            },
            getDeltaIds: function () {
                return [];
            }
        };
    };
    choroplethMapItem.prototype._getElementInteractionValue = function (element, viewModel) {
        return !!this.options.ViewModel.ChoroplethColorizer ? [element.attribute('selectionName')] : [];
    };
    return choroplethMapItem;
}(_map_item_1.mapItem));
exports.choroplethMapItem = choroplethMapItem;
