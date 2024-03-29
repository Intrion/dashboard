﻿/**
* DevExpress Dashboard (_pie-map-item.js)
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
var $ = require("jquery");
var Color = require("devextreme/color");
var string_1 = require("devextreme/core/utils/string");
var pieMapItem = (function (_super) {
    __extends(pieMapItem, _super);
    function pieMapItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this.itemElementCustomColor = $.Callbacks();
        _this._pieUniqueArguments = undefined;
        _this._pieArgumentDisplayTexts = undefined;
        _this._pieArgumentColors = undefined;
        _this.itemElementCustomColor = $.Callbacks();
        return _this;
    }
    pieMapItem.prototype._getMarkerLayers = function () {
        return [this.mapViewer.getLayerByName('pie')];
    };
    pieMapItem.prototype._configureMarkerLayers = function (viewModel) {
        var viewModel = this.options.ViewModel, pieSegments = this._getPieSegments(), pies = this._getPiesData(pieSegments, viewModel), markerDataSource = this._getMarkerDataSource(pies, viewModel.IsWeighted), markerSettings = this._getPieMapMarker(viewModel, markerDataSource, pies);
        return [__assign({ name: "pie", type: "marker", elementType: "pie", dataField: "values", dataSource: markerDataSource }, markerSettings)];
    };
    pieMapItem.prototype._getPieMapMarker = function (viewModel, markerDataSource, pies) {
        if (markerDataSource.length === 0) {
            return;
        }
        var markerSettings = this._getMarker(viewModel, markerDataSource);
        if (viewModel.IsWeighted) {
            markerSettings.sizeGroupingField = "sizeValue";
            markerSettings.sizeGroups = this._getPieRangeStops(pies);
            markerSettings.minSize = 20;
            markerSettings.maxSize = 60;
        }
        markerSettings.palette = this._pieArgumentColors;
        return markerSettings;
    };
    pieMapItem.prototype._getMarkerDataSource = function (pies, isWeighted) {
        var markerDataSource = [], attributes, rangeStops = [0, 1, 2];
        for (var name in pies) {
            attributes = pies[name].attributes;
            if (!isWeighted) {
                attributes.size = 20 + this._getRangeStopIndex(pies[name].attributes.sizeValue, rangeStops) * 10;
            }
            markerDataSource.push({
                coordinates: pies[name].coordinates,
                attributes: attributes
            });
        }
        return markerDataSource;
    };
    pieMapItem.prototype._getColorLegend = function (viewModel) {
        var that = this;
        var legend = _super.prototype._getColorLegend.call(this, viewModel);
        if (legend) {
            legend.source.layer = "pie";
            legend.customizeText = function (arg) {
                return that._pieArgumentDisplayTexts[arg.index];
            };
        }
        return legend;
    };
    pieMapItem.prototype._getWeightLegend = function (viewModel) {
        var that = this;
        if (!viewModel.IsWeighted) {
            return;
        }
        var legend = _super.prototype._getWeightLegend.call(this, viewModel);
        if (legend) {
            legend.source.layer = "pie";
            legend.customizeText = function (arg) {
                return that.dataController.formatValue(arg.start);
            };
        }
        return legend;
    };
    pieMapItem.prototype._getPieSegments = function () {
        var that = this, viewModel = this.options.ViewModel, pieSegments = [], pieSegment, filledValues = viewModel.Values && viewModel.Values.length > 0, getPieSegment = function (point) {
            return {
                clusterCount: point.pointsCount,
                lat: point.lat,
                lon: point.lon,
                latSel: point.latSel,
                lonSel: point.lonSel,
                dimensionsTooltipText: that._getDimensionsTooltipHtml(point.tooltipDimensions),
                measuresTooltipText: that._getMeasuresTooltipHtml(point.tooltipMeasures),
                value: point.value,
                valueDisplayText: point.valueDisplayText,
                argumentValue: point.argument,
                argumentDisplayText: point.argumentDisplayText,
                color: point.color,
                valueId: point.valueId,
                axisPoint: point.axisPoint
            };
        };
        that._pieUniqueArguments = [];
        that._pieArgumentDisplayTexts = [];
        that._pieArgumentColors = [];
        for (var i = 0; i < that.dataController.getCount(); i++) {
            if (viewModel.ArgumentDataId) {
                pieSegment = getPieSegment(that.dataController.getPoint(i));
                if (that._pieUniqueArguments.indexOf(pieSegment.argumentValue) === -1) {
                    that._fillArgumentParams(pieSegment);
                }
                pieSegments.push(pieSegment);
            }
            else {
                if (filledValues) {
                    for (var j = 0; j < viewModel.Values.length; j++) {
                        pieSegment = getPieSegment(that.dataController.getPoint(i, j));
                        if (that._pieUniqueArguments.indexOf(pieSegment.argumentValue) === -1 || i === 0) {
                            that._fillArgumentParams(pieSegment);
                        }
                        pieSegments.push(pieSegment);
                    }
                }
            }
        }
        return pieSegments;
    };
    pieMapItem.prototype._fillArgumentParams = function (pieSegment) {
        var that = this, color = pieSegment.color, dxColor = new Color(color);
        this._pieUniqueArguments.push(pieSegment.argumentValue);
        this._pieArgumentDisplayTexts.push(pieSegment.argumentDisplayText);
        if (that.itemElementCustomColor && color) {
            var customElementColorEventArgs = {
                targetElement: [pieSegment.axisPoint],
                measureIds: pieSegment ? [pieSegment.valueId] : null,
                color: dxColor.toHex()
            };
            that.itemElementCustomColor.fire(this.getName(), customElementColorEventArgs);
            color = customElementColorEventArgs.color;
        }
        this._pieArgumentColors.push(color);
    };
    pieMapItem.prototype._getPiesData = function (pieSegments, viewModel) {
        var pies = {}, segment, key, tooltip, dimensionsTooltip, measuresTooltip;
        for (var i = 0; i < pieSegments.length; i++) {
            segment = pieSegments[i];
            key = string_1.format("{0};{1}", segment.lat, segment.lon);
            if (!pies.hasOwnProperty(key)) {
                dimensionsTooltip = segment.dimensionsTooltipText;
                measuresTooltip = segment.measuresTooltipText;
                pies[key] = {
                    coordinates: [segment.lon, segment.lat],
                    attributes: {
                        latSelection: segment.latSel,
                        lonSelection: segment.lonSel,
                        selected: this._isSelected([segment.latSel, segment.lonSel]),
                        values: this._getEmptyValues(this._pieUniqueArguments.length),
                        dimensionsTooltip: dimensionsTooltip,
                        measuresTooltip: measuresTooltip,
                        sizeValue: viewModel.IsWeighted ? 0 : segment.clusterCount > 1 ? 1 : 0
                    }
                };
                if (segment.clusterCount > 1) {
                    pies[key].attributes.tooltip = this._pointsCountTooltip(segment.clusterCount);
                }
            }
            for (var j = 0; j < pies[key].attributes.values.length; j++) {
                if (segment.argumentValue === this._pieUniqueArguments[j]) {
                    pies[key].attributes.values[j] = segment.value;
                }
            }
            if (viewModel.Values && viewModel.Values.length > 0) {
                if (segment.argumentValue && segment.value > 0) {
                    tooltip = this._getToolTip(segment.argumentDisplayText, segment.valueDisplayText);
                }
                else {
                    tooltip = undefined;
                }
            }
            else {
                tooltip = segment.argumentDisplayText;
            }
            if (tooltip) {
                if (pies[key].attributes.tooltip) {
                    pies[key].attributes.tooltip += '<br>' + tooltip;
                }
                else {
                    pies[key].attributes.tooltip = tooltip;
                }
            }
            if (viewModel.IsWeighted) {
                pies[key].attributes.sizeValue += segment.value;
            }
            else if (this._getPieSegmentCount(pies[key]) === 2) {
                pies[key].attributes.sizeValue++;
            }
        }
        return pies;
    };
    pieMapItem.prototype._getPieSegmentCount = function (pie) {
        var count = 0;
        for (var i = 0; i < pie.attributes.values.length; i++) {
            if (pie.attributes.values[i] > 0) {
                count++;
            }
        }
        return count;
    };
    pieMapItem.prototype._getEmptyValues = function (length) {
        var emptyValues = [];
        for (var j = 0; j < length; j++) {
            emptyValues.push(0);
        }
        return emptyValues;
    };
    pieMapItem.prototype._getPieRangeStops = function (pies) {
        var minSizeValue, maxSizeValue;
        for (var name in pies) {
            if (minSizeValue === undefined || pies[name].attributes.sizeValue < minSizeValue) {
                minSizeValue = pies[name].attributes.sizeValue;
            }
            if (maxSizeValue === undefined || pies[name].attributes.sizeValue > maxSizeValue) {
                maxSizeValue = pies[name].attributes.sizeValue;
            }
        }
        return this._updateRangeStops([0, 25, 50, 75], minSizeValue, maxSizeValue, true);
    };
    pieMapItem.prototype._getRangeStopIndex = function (value, rangeStops) {
        if (value < rangeStops[0]) {
            return 0;
        }
        for (var i = 0; i < rangeStops.length - 1; i++) {
            if (value >= rangeStops[i] && value < rangeStops[i + 1]) {
                return i;
            }
        }
        return rangeStops.length - 1;
    };
    pieMapItem.prototype._getDataPointMeasureIds = function () {
        var viewModel = this.options.ViewModel, measureIds = [];
        if (viewModel.ArgumentDataId != null && viewModel.Values.length > 0) {
            measureIds.push(viewModel.Values[0]);
        }
        else {
            $.each(viewModel.Values, function (_, value) {
                measureIds.push(value);
            });
        }
        return measureIds;
    };
    pieMapItem.prototype._elementCustomColor = function (eventArgs) {
        this.itemElementCustomColor.fire(this.getName(), eventArgs);
    };
    return pieMapItem;
}(_geo_point_map_item_base_1.geoPointMapItemBase));
exports.pieMapItem = pieMapItem;
