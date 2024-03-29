﻿/**
* DevExpress Dashboard (_bubble-map-item.js)
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
var _geo_point_map_item_base_1 = require("./_geo-point-map-item-base");
var _utils_1 = require("../../data/_utils");
var Color = require("devextreme/color");
var bubbleMapItem = (function (_super) {
    __extends(bubbleMapItem, _super);
    function bubbleMapItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    bubbleMapItem.prototype._getMarkerLayers = function () {
        return [this.mapViewer.getLayerByName('bubble')];
    };
    bubbleMapItem.prototype._configureMarkerLayers = function (viewModel) {
        var markerDataSource = this._getMarkerDataSource(), markerSettings = markerDataSource.length > 0 ? this._getMarker(viewModel, markerDataSource) : null;
        return [__assign({ name: "bubble", type: "marker", elementType: "bubble", dataField: "value", dataSource: markerDataSource }, markerSettings)];
    };
    bubbleMapItem.prototype._getMarkerDataSource = function () {
        var viewModel = this.options.ViewModel, markerDataSource = [], point;
        for (var i = 0; i < this.dataController.getCount(); i++) {
            point = this.dataController.getPoint(i);
            markerDataSource.push({
                coordinates: [point.lon, point.lat],
                attributes: {
                    latSelection: point.latSel,
                    lonSelection: point.lonSel,
                    selected: this._isSelected([point.latSel, point.lonSel]),
                    value: point.weight || (point.pointsCount > 1 ? 1 : 0),
                    colorValue: point.color || 0,
                    tooltip: this._getBubbleTooltip(viewModel, point.weightText, point.colorText, point.pointsCount),
                    dimensionsTooltip: this._getDimensionsTooltipHtml(point.tooltipDimensions),
                    measuresTooltip: this._getMeasuresTooltipHtml(point.tooltipMeasures)
                }
            });
        }
        return markerDataSource;
    };
    bubbleMapItem.prototype._getMarker = function (viewModel, markerDataSource) {
        var rangeStops = viewModel.ColorId ? this._getBubbleRangeStops(viewModel.Colorizer, markerDataSource) : [0, 1], colors = this._getBubbleColors(viewModel.Colorizer.Colors, rangeStops.length - 1), minSize, maxSize, options = {
            palette: colors,
            colorGroups: rangeStops,
            colorGroupingField: 'colorValue',
            sizeGroups: viewModel.WeightId ? this._getBubbleWeightRangeStops(markerDataSource) : null
        }, baseMarkers = _super.prototype._getMarker.call(this, viewModel, markerDataSource);
        if (viewModel.WeightId) {
            minSize = 20;
            maxSize = 60;
        }
        else {
            var res = this._getMinMaxValues(markerDataSource);
            if (res.min !== res.max) {
                minSize = 20;
                maxSize = 40;
            }
            else if (res.min === 1) {
                minSize = 40;
                maxSize = 40;
            }
            else {
                minSize = 20;
                maxSize = 20;
            }
        }
        options.minSize = minSize;
        options.maxSize = maxSize;
        return _utils_1.deepExtend(baseMarkers, options);
    };
    bubbleMapItem.prototype._getColorLegend = function (viewModel) {
        var that = this;
        if (!viewModel.ColorId) {
            return;
        }
        var legend = _super.prototype._getColorLegend.call(this, viewModel);
        if (legend) {
            legend.source.layer = "bubble";
            legend.customizeText = function (arg) {
                return that.dataController.formatColor(arg.start);
            };
        }
        return legend;
    };
    bubbleMapItem.prototype._getWeightLegend = function (viewModel) {
        var that = this;
        if (!viewModel.WeightId) {
            return;
        }
        var legend = _super.prototype._getWeightLegend.call(this, viewModel);
        if (legend) {
            legend.source.layer = "bubble";
            legend.customizeText = function (arg) {
                return that.dataController.formatWeight(arg.start);
            };
        }
        return legend;
    };
    bubbleMapItem.prototype._getBubbleTooltip = function (viewModel, weight, color, pointsCount) {
        var strs = [];
        if (pointsCount && pointsCount > 1) {
            strs.push(this._pointsCountTooltip(pointsCount));
        }
        if (weight) {
            strs.push(this._getToolTip(viewModel.WeightName, weight));
        }
        if (color && viewModel.ColorName !== viewModel.WeightName) {
            strs.push(this._getToolTip(viewModel.ColorName, color));
        }
        return strs.join('<br>');
    };
    bubbleMapItem.prototype._getBubbleRangeStops = function (colorizer, markerDataSource) {
        var max = markerDataSource[0].attributes.colorValue, min = markerDataSource[0].attributes.colorValue;
        for (var i = 1; i < markerDataSource.length; i++) {
            if (markerDataSource[i].attributes.colorValue > max) {
                max = markerDataSource[i].attributes.colorValue;
            }
            if (markerDataSource[i].attributes.colorValue < min) {
                min = markerDataSource[i].attributes.colorValue;
            }
        }
        return this._updateRangeStops(colorizer.RangeStops, min, max, colorizer.UsePercentRangeStops);
    };
    bubbleMapItem.prototype._getBubbleWeightRangeStops = function (markerDataSource) {
        var max = markerDataSource[0].attributes.value, min = markerDataSource[0].attributes.value;
        for (var i = 1; i < markerDataSource.length; i++) {
            if (markerDataSource[i].attributes.value > max) {
                max = markerDataSource[i].attributes.value;
            }
            if (markerDataSource[i].attributes.value < min) {
                min = markerDataSource[i].attributes.value;
            }
        }
        return this._updateRangeStops([0, 25, 50, 75], min, max, true);
    };
    bubbleMapItem.prototype._getBubbleColors = function (colorModels, defaultColorsCount) {
        var colors = this._getColors(colorModels);
        return colors ? colors : this._getDefaultBubbleColorizerColors(defaultColorsCount);
    };
    bubbleMapItem.prototype._getDefaultBubbleColorizerColors = function (count) {
        var startColor = new Color('rgb(54, 170, 206)'), endColor = new Color('rgb(255, 93, 106)'), colors = [];
        if (count === 1) {
            return [startColor.toHex()];
        }
        for (var i = 0; i < count; i++) {
            colors.push(startColor.blend(endColor, i / (count - 1)).toHex());
        }
        return colors;
    };
    bubbleMapItem.prototype._getDataPointMeasureIds = function () {
        var viewModel = this.options.ViewModel, measureIds = [];
        measureIds.push(viewModel.WeightId);
        measureIds.push(viewModel.ColorId);
        return measureIds;
    };
    return bubbleMapItem;
}(_geo_point_map_item_base_1.geoPointMapItemBase));
exports.bubbleMapItem = bubbleMapItem;
