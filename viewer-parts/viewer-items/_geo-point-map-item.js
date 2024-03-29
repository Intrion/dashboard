﻿/**
* DevExpress Dashboard (_geo-point-map-item.js)
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
var geoPointMapItem = (function (_super) {
    __extends(geoPointMapItem, _super);
    function geoPointMapItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    geoPointMapItem.prototype._getMarkerLayers = function () {
        return [this.mapViewer.getLayerByName('dot'), this.mapViewer.getLayerByName('bubble')];
    };
    geoPointMapItem.prototype._configureMarkerLayers = function (viewModel) {
        var markerDataSource = this._getMarkerDataSource(), dotSettings = markerDataSource.dotDataSource.length > 0 ? this._getDorMarker(viewModel, markerDataSource.dotDataSource) : null, bubbleSettings = markerDataSource.bubbleDataSource.length > 0 ? this._getBubbleMarker(viewModel, markerDataSource.bubbleDataSource) : null;
        return [
            __assign({ name: "dot", type: "marker", elementType: "dot", dataSource: markerDataSource.dotDataSource }, dotSettings),
            __assign({ name: "bubble", type: "marker", elementType: "bubble", dataField: "value", dataSource: markerDataSource.bubbleDataSource }, bubbleSettings)
        ];
    };
    geoPointMapItem.prototype._getMarkerDataSource = function () {
        var viewModel = this.options.ViewModel, dotDataSource = [], bubbleDataSource = [], count = this.dataController ? this.dataController.getCount() : 0, tooltip, geoPoint, point;
        for (var i = 0; i < count; i++) {
            point = this.dataController.getPoint(i);
            tooltip = this._getToolTip(viewModel.ValueName, point.text);
            geoPoint = {
                coordinates: [point.lon, point.lat],
                attributes: {
                    latSelection: point.latSel,
                    lonSelection: point.lonSel,
                    selected: this._isSelected([point.latSel, point.lonSel]),
                    dimensionsTooltip: this._getDimensionsTooltipHtml(point.tooltipDimensions),
                    measuresTooltip: this._getMeasuresTooltipHtml(point.tooltipMeasures)
                }
            };
            if (point.pointsCount && point.pointsCount > 1) {
                geoPoint.attributes.value = this._getClusterBubbleSizeIndex(point.pointsCount);
                geoPoint.attributes.tooltip = this._pointsCountTooltip(point.pointsCount) + '<br>' + tooltip;
                geoPoint.attributes.color = this._getClusterBubbleColor(point.pointsCount);
                bubbleDataSource.push(geoPoint);
            }
            else {
                geoPoint.attributes.text = point.text;
                geoPoint.attributes.tooltip = tooltip;
                dotDataSource.push(geoPoint);
            }
        }
        return {
            dotDataSource: dotDataSource,
            bubbleDataSource: bubbleDataSource
        };
    };
    geoPointMapItem.prototype._getDorMarker = function (viewModel, markerDataSource) {
        return __assign({}, this._getMarker(viewModel, markerDataSource), { label: {
                dataField: 'text'
            } });
    };
    geoPointMapItem.prototype._getBubbleMarker = function (viewModel, markerDataSource) {
        var res = this._getMinMaxValues(markerDataSource);
        return _utils_1.deepExtend(this._getMarker(viewModel, markerDataSource), {
            minSize: 30 + res.min * 10,
            maxSize: 30 + res.max * 10
        });
    };
    geoPointMapItem.prototype._getColorLegend = function (viewModel) {
    };
    geoPointMapItem.prototype._getWeightLegend = function (viewModel) {
    };
    geoPointMapItem.prototype._getClusterBubbleColor = function (value) {
        if (value < 10) {
            return 'rgb(27, 73, 165)';
        }
        if (value < 100) {
            return 'rgb(63, 136, 48)';
        }
        if (value < 1000) {
            return 'rgb(228, 124, 2)';
        }
        return 'rgb(214, 5, 5)';
    };
    geoPointMapItem.prototype._getClusterBubbleSizeIndex = function (value) {
        for (var i = 0;; i++) {
            if (value < Math.pow(10, i)) {
                return i - 1;
            }
        }
    };
    geoPointMapItem.prototype._getDataPointMeasureIds = function () {
        var viewModel = this.options.ViewModel, measureIds = [];
        measureIds.push(viewModel.ValueId);
        return measureIds;
    };
    return geoPointMapItem;
}(_geo_point_map_item_base_1.geoPointMapItemBase));
exports.geoPointMapItem = geoPointMapItem;
