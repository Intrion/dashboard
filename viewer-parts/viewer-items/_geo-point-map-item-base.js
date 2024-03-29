﻿/**
* DevExpress Dashboard (_geo-point-map-item-base.js)
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
var themes_1 = require("devextreme/viz/themes");
var $ = require("jquery");
var _z_index_1 = require("../../data/_z-index");
var geoPointMapItemBase = (function (_super) {
    __extends(geoPointMapItemBase, _super);
    function geoPointMapItemBase(container, options) {
        var _this = _super.call(this, container, options) || this;
        var that = _this;
        that.raiseTimerClusterizationDataRequest = function () {
            var clientState = that._getClientContext();
            if (clientState.clientSize.width > 0 && clientState.clientSize.height > 0) {
                that._onDataRequest();
            }
            clearTimeout(that.timer);
            that.timer = false;
        };
        return _this;
    }
    geoPointMapItemBase.prototype.initialDataRequestUnsafe = function () {
        this._raiseClusterizationDataRequest();
    };
    geoPointMapItemBase.prototype.selectTupleUnsafe = function (tuple, state) {
        var that = this;
        $.each(that._getMarkerLayers(), function (_, layer) {
            $.each(layer.getElements(), function (_, item) {
                if (item.attribute('latSelection') == tuple[0].Value[0] && item.attribute('lonSelection') == tuple[0].Value[1]) {
                    item.selected(state);
                }
            });
        });
    };
    geoPointMapItemBase.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        var that = this;
        that.clearSelection();
        $.each(that._getMarkerLayers(), function (_, layer) {
            $.each(layer.getElements(), function (_, item) {
                $.each(values, function (i, value) {
                    if (item.attribute('latSelection') == value[0] && item.attribute('lonSelection') == value[1]) {
                        item.selected(true);
                    }
                });
            });
        });
    };
    geoPointMapItemBase.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var options = _utils_1.deepExtend(this._getMapViewerOptions(), this._getGeoPointMapViewerOptions());
        this._renderContentInternal(element, changeExisting, options);
        return false;
    };
    geoPointMapItemBase.prototype.renderPartialContentUnsafe = function () {
        var viewModel = this.options.ViewModel;
        this._updateMarkerLayers(viewModel);
    };
    geoPointMapItemBase.prototype.resetClientViewport = function () {
        _super.prototype.resetClientViewport.call(this);
        this._raiseClusterizationDataRequest();
    };
    geoPointMapItemBase.prototype.updateContentStateUnsafe = function () {
        var that = this, layers = that.mapViewer.option("layers");
        $.each(layers, function (_, layer) {
            if (layer.type === 'marker')
                layer.hoverEnabled = that._getCustomHoverEnabled();
        });
        this.mapViewer.option("layers", layers);
    };
    geoPointMapItemBase.prototype.forceUpdateClientState = function () {
        if (this.hasWidget) {
            this._onClientStateUpdate(this._getClientContext());
        }
    };
    geoPointMapItemBase.prototype._getGeoPointMapViewerOptions = function () {
        var that = this, viewModel = that.options.ViewModel;
        return {
            layers: that._configureLayers(viewModel),
            onClick: function (e) {
                if (e.target && e.target.layer.type === 'marker')
                    that._raiseItemClick(e.target);
            },
            legends: that._getLegends(viewModel),
            tooltip: {
                enabled: true,
                zIndex: _z_index_1.zIndex.dashboardItemTooltips,
                container: _utils_1.tooltipContainerSelector,
                customizeTooltip: function (arg) {
                    var dimensionText, measureText, mainText, resultHtml = "";
                    if (arg.layer.type === "marker") {
                        dimensionText = arg.attribute('dimensionsTooltip');
                        mainText = arg.attribute('tooltip');
                        measureText = arg.attribute('measuresTooltip');
                        if (dimensionText)
                            resultHtml += '<tr><td>' + dimensionText + '</td></tr>';
                        if (mainText)
                            resultHtml += '<tr><td>' + mainText + (measureText ? '' : '</td></tr>');
                        if (measureText)
                            resultHtml += (mainText ? '<br>' : '</td></tr>') + measureText + '</td></tr>';
                    }
                    return {
                        html: (resultHtml != "") ? '<table align="left">' + resultHtml + '</table>' : ""
                    };
                }
            }
        };
    };
    geoPointMapItemBase.prototype._getMarkerLayers = function () {
    };
    geoPointMapItemBase.prototype._configureLayers = function (viewModel) {
        var mapDataSource = this._getMapDataSource(viewModel.MapItems, viewModel.ShapeTitleAttributeName);
        return this._configureGeometryLayers(mapDataSource, this._getArea(viewModel)).concat(this._configureMarkerLayers(viewModel));
    };
    geoPointMapItemBase.prototype._configureMarkerLayers = function (viewModel) {
    };
    geoPointMapItemBase.prototype._updateMarkerLayers = function (viewModel) {
        var layers = this.mapViewer.option("layers"), markerLayers = this._configureMarkerLayers(viewModel);
        $.each(markerLayers, function (index, layer) {
            layers[index + 1] = layer;
        });
        this.mapViewer.option('layers', layers);
    };
    geoPointMapItemBase.prototype._getMarker = function (viewModel, markerDataSource) {
        var style;
        return {
            customize: function (items) {
                $.each(items, function (_, item) {
                    item.selected(item.attribute('selected'));
                    style = { color: item.attribute('color') };
                    var size = item.attribute('size');
                    if (size)
                        style.size = size;
                    item.applySettings(style);
                });
            },
            selectionMode: 'multiple'
        };
    };
    geoPointMapItemBase.prototype._getArea = function (viewModel) {
        var that = this;
        return __assign({}, that._getLabelSettings(viewModel), { hoverEnabled: false, selectionMode: that._selectionMode() });
    };
    geoPointMapItemBase.prototype._getLegends = function (viewModel) {
        var legends = [], colorLegend = this._getColorLegend(viewModel), sizeLegend = this._getWeightLegend(viewModel);
        if (colorLegend) {
            legends.push(colorLegend);
        }
        if (sizeLegend) {
            legends.push(sizeLegend);
        }
        return legends;
    };
    geoPointMapItemBase.prototype._getColorLegend = function (viewModel) {
        var legend = this._getLegend(viewModel.ColorLegend);
        if (legend) {
            legend.source = { grouping: "color" };
        }
        return legend;
    };
    geoPointMapItemBase.prototype._getWeightLegend = function (viewModel) {
        var legend = this._getLegend(viewModel.WeightedLegend);
        if (legend) {
            legend.source = { grouping: "size" };
            legend.markerShape = "circle";
            legend.markerColor = themes_1.getTheme(themes_1.currentTheme()).map["layer:area"].color;
            legend.orientation = "vertical";
        }
        return legend;
    };
    geoPointMapItemBase.prototype._getMinMaxValues = function (markerDataSource) {
        var min, max;
        if (markerDataSource.length > 0) {
            for (var i = 0; i < markerDataSource.length; i++) {
                if (max === undefined || markerDataSource[i].attributes.value !== undefined && (markerDataSource[i].attributes.value > max)) {
                    max = markerDataSource[i].attributes.value;
                }
                if (min === undefined || markerDataSource[i].attributes.value !== undefined && (markerDataSource[i].attributes.value < min)) {
                    min = markerDataSource[i].attributes.value;
                }
            }
        }
        return {
            min: min,
            max: max
        };
    };
    geoPointMapItemBase.prototype._pointsCountTooltip = function (count) {
        return '<b>' + count + ' points</b>';
    };
    geoPointMapItemBase.prototype._getElementInteractionValue = function (element, viewModel) {
        return [element.attribute('latSelection'), element.attribute('lonSelection')];
    };
    geoPointMapItemBase.prototype._getDimensionsTooltipHtml = function (tooltipDimensions) {
        var values = [];
        if (tooltipDimensions.length === 1) {
            if (tooltipDimensions[0].values) {
                for (var i = 0; i < tooltipDimensions[0].values.length; i++) {
                    values.push('<b>' + this._getHtml(tooltipDimensions[0].values[i]) + '</b>');
                }
                return values.join('<br>');
            }
        }
        else {
            for (var i = 0; i < tooltipDimensions.length; i++) {
                var tooltipDimension = tooltipDimensions[i];
                if (tooltipDimension.values) {
                    values.push('<b>' + this._getHtml(tooltipDimension.caption) + '</b>');
                    for (var j = 0; j < tooltipDimension.values.length; j++) {
                        values.push(this._getHtml(tooltipDimension.values[j]));
                    }
                }
            }
            return values.join('<br>');
        }
        return '';
    };
    geoPointMapItemBase.prototype._getMeasuresTooltipHtml = function (tooltipMeasures) {
        var result = [];
        for (var i = 0; i < tooltipMeasures.length; i++) {
            result.push(this._getToolTip(tooltipMeasures[i].caption, tooltipMeasures[i].value));
        }
        return result.join('<br>');
    };
    geoPointMapItemBase.prototype._getDataPoint = function (element) {
        var that = this, viewModel = that.options.ViewModel;
        return {
            getValues: function () {
                return that._getElementInteractionValue(element, viewModel);
            },
            getMeasureIds: function () {
                return that._getDataPointMeasureIds();
            },
            getDeltaIds: function () {
                return [];
            }
        };
    };
    geoPointMapItemBase.prototype._getDataPointMeasureIds = function () {
    };
    geoPointMapItemBase.prototype._updateContentSizeUnsafe = function () {
        _super.prototype._updateContentSizeUnsafe.call(this);
        if (!!this.mapViewer) {
            this._raiseClusterizationDataRequest();
        }
    };
    geoPointMapItemBase.prototype._raiseClusterizationDataRequest = function () {
        if (this.options.ViewModel.EnableClustering) {
            var clientContext = this._getClientContext();
            this._onClientStateUpdate(clientContext);
            if (clientContext.clientSize.width > 0 && clientContext.clientSize.height > 0) {
                this._onDataRequest();
            }
        }
    };
    geoPointMapItemBase.prototype._onViewPortChanged = function () {
        _super.prototype._onViewPortChanged.call(this);
        if (this.options.ViewModel.EnableClustering && !this._isLocked() && !this.timer) {
            this.timer = setTimeout(this.raiseTimerClusterizationDataRequest, 500);
        }
    };
    geoPointMapItemBase.prototype._onInitialExtentUnsafe = function (viewport) {
        _super.prototype._onInitialExtentUnsafe.call(this, viewport);
        this._raiseClusterizationDataRequest();
    };
    return geoPointMapItemBase;
}(_map_item_1.mapItem));
exports.geoPointMapItemBase = geoPointMapItemBase;
