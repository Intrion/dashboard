﻿/**
* DevExpress Dashboard (_map-item.js)
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
var vector_map_1 = require("devextreme/viz/vector_map");
var _base_item_1 = require("./_base-item");
var caption_toolbar_options_1 = require("../widgets/caption-toolbar/caption-toolbar-options");
var _caption_toolbar_css_classes_1 = require("../widgets/caption-toolbar/_caption-toolbar-css-classes");
var _localizer_1 = require("../../data/_localizer");
var _localization_ids_1 = require("../../data/_localization-ids");
var projection_1 = require("devextreme/viz/vector_map/projection");
var string_1 = require("devextreme/core/utils/string");
var _utils_1 = require("../../data/_utils");
var $ = require("jquery");
var projection = (function () {
    var parameters = projection_1.projection.get("mercator").source(), _to = parameters.to, _from = parameters.from;
    parameters.to = function (coordinates) {
        var coords = _to(coordinates);
        return [clamp(coords[0], -1, +1), coords[1]];
    };
    parameters.from = function (coordinates) {
        var coords = [clamp(coordinates[0], -1, +1), coordinates[1]];
        return _from(coords);
    };
    return projection_1.projection(parameters);
    function clamp(value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
}());
var mapItem = (function (_super) {
    __extends(mapItem, _super);
    function mapItem($container, options) {
        var _this = _super.call(this, $container, options) || this;
        _this.isInitialExtentChanged = false;
        return _this;
    }
    mapItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.mapViewer && this.mapViewer.dispose();
    };
    mapItem.prototype._renderContentInternal = function (element, changeExisting, options) {
        if (changeExisting && this.mapViewer) {
            this._unsubscribeItemEvents();
            this.mapViewer.option(options);
            if (this._shouldResetClientViewport(this.options.ViewModel.Viewport)) {
                this.resetClientViewport();
            }
        }
        else {
            this.mapViewer = new vector_map_1.default(element, options);
        }
        this._updatePreviousViewport(this.options.ViewModel.Viewport);
        this._subscribeItemEvents();
    };
    mapItem.prototype.resetClientViewport = function () {
        this.clientState = null;
        this._onClientStateUpdate(this._getClientContext());
    };
    mapItem.prototype._shouldResetClientViewport = function (viewportViewModel) {
        if (this.previousViewportViewModel) {
            var viewportChanged = !this._viewportEquals(this.previousViewportViewModel, viewportViewModel) || this.previousViewportViewModel.CreateViewerPaddings !== viewportViewModel.CreateViewerPaddings;
            if (viewportChanged && this.clientState && this._viewportEquals(this.clientState.viewport, viewportViewModel) && !viewportViewModel.CreateViewerPaddings)
                return false;
            return viewportChanged;
        }
        return false;
    };
    mapItem.prototype._viewportEquals = function (viewport1, viewport2) {
        return viewport1.RightLongitude === viewport2.RightLongitude && viewport1.LeftLongitude === viewport2.LeftLongitude
            && viewport1.BottomLatitude === viewport2.BottomLatitude && viewport1.TopLatitude === viewport2.TopLatitude
            && viewport1.CenterPointLongitude === viewport2.CenterPointLongitude && viewport1.CenterPointLatitude === viewport2.CenterPointLatitude;
    };
    mapItem.prototype._updatePreviousViewport = function (viewport) {
        this.previousViewportViewModel = {
            RightLongitude: viewport.RightLongitude,
            LeftLongitude: viewport.LeftLongitude,
            BottomLatitude: viewport.BottomLatitude,
            TopLatitude: viewport.TopLatitude,
            CenterPointLongitude: viewport.CenterPointLongitude,
            CenterPointLatitude: viewport.CenterPointLatitude,
            CreateViewerPaddings: viewport.CreateViewerPaddings
        };
    };
    mapItem.prototype._clearSelectionUnsafe = function () {
        this.mapViewer.clearSelection();
    };
    mapItem.prototype.getInfoUnsafe = function () {
        return _utils_1.deepExtend(_super.prototype.getInfoUnsafe.call(this), {
            viewport: this._getViewport()
        });
    };
    mapItem.prototype._getSpecificStatePanelItems = function () {
        var _this = this;
        if (this.options.ViewModel.LockNavigation !== true && this.isInitialExtentChanged) {
            return [{
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.initialExtent,
                    click: function (element) {
                        _this._toggleInitialExtentChanged(false);
                    },
                    icon: _caption_toolbar_css_classes_1.cssClasses.iconInitialExtent,
                    type: 'button',
                    hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.InitialExtent)
                }];
        }
        else
            return [];
    };
    mapItem.prototype._getMapViewerOptions = function () {
        var that = this, viewModel = that.options.ViewModel;
        return {
            projection: projection,
            encodeHtml: that._isEncodeHtml(),
            background: { borderWidth: 0, borderColor: 'none' },
            controlBar: { enabled: false },
            zoomFactor: that._calculateZoomFactor(viewModel.Viewport, $(that.contentRoot).width(), $(that.contentRoot).height()),
            maxZoomFactor: 1 << 18,
            center: [viewModel.Viewport.CenterPointLongitude, viewModel.Viewport.CenterPointLatitude],
            panningEnabled: viewModel.LockNavigation !== true,
            zoomingEnabled: viewModel.LockNavigation !== true
        };
    };
    mapItem.prototype._getLabelSettings = function (viewModel) {
        return {
            label: {
                enabled: !!viewModel.ShapeTitleAttributeName || viewModel.IncludeSummaryValueToShapeTitle,
                dataField: 'title'
            }
        };
    };
    mapItem.prototype._calculateZoomFactor = function (viewport, width, height) {
        var min = width < height ? width : height, mapWidth = this._translateLon(viewport.RightLongitude, min) - this._translateLon(viewport.LeftLongitude, min), mapHeight = this._translateLat(viewport.BottomLatitude, min) - this._translateLat(viewport.TopLatitude, min), latitudeZoom = width / mapWidth, longitudeZoom = height / mapHeight, zoom = latitudeZoom < longitudeZoom ? latitudeZoom : longitudeZoom;
        if (viewport.CreateViewerPaddings) {
            zoom *= 0.95;
        }
        return zoom;
    };
    mapItem.prototype._translateLon = function (lon, size) {
        var lon_ = lon * Math.PI / 180;
        return (size / 2) + (size / (2 * Math.PI)) * lon_;
    };
    mapItem.prototype._translateLat = function (lat, size) {
        var lat_ = lat * Math.PI / 180;
        return (size / 2) - (size / (2 * Math.PI)) * Math.log(Math.tan(Math.PI / 4 + lat_ / 2));
    };
    mapItem.prototype._getMapDataSource = function (mapItems, titleName) {
        var mapDataSource = [], data, type, points, boundary, point, segments, segmentData, pushAction;
        for (var i = 0; i < mapItems.length; i++) {
            data = [];
            type = 'area';
            if (mapItems[i].Latitude && mapItems[i].Longitude && mapItems[i].Size) {
                data.push([mapItems[i].Longitude, mapItems[i].Latitude]);
            }
            if (mapItems[i].Segments) {
                segments = mapItems[i].Segments;
                for (var j = 0; j < segments.length; j++) {
                    pushAction = function (row) {
                        if (segments[j].IsClosed && row.length > 1) {
                            var first = row[0], last = row[row.length - 1];
                            if (first[0] != last[0] || first[1] != last[1])
                                row.push(first);
                        }
                        data.push(row);
                    };
                    if (!segments[j].IsFilled)
                        type = 'line';
                    points = segments[j].Points;
                    segmentData = [];
                    for (var k = 0; k < points.length; k++) {
                        segmentData.push([points[k].Longitude, points[k].Latitude]);
                    }
                    pushAction(segmentData);
                    for (var l = 0; l < segments[j].Boundaries.length; l++) {
                        segmentData = [];
                        boundary = segments[j].Boundaries[l];
                        for (var m = 0; m < boundary.Points.length; m++) {
                            point = boundary.Points[m];
                            segmentData.push([point.Longitude, point.Latitude]);
                        }
                        pushAction(segmentData);
                    }
                }
            }
            mapDataSource.push({
                coordinates: data,
                type: type,
                attributes: []
            });
            for (var j = 0; j < mapItems[i].Attributes.length; j++) {
                if (mapItems[i].Attributes[j].Name === titleName) {
                    mapDataSource[i].attributes.title = mapItems[i].Attributes[j].Value;
                    break;
                }
            }
        }
        return mapDataSource;
    };
    mapItem.prototype._configureGeometryLayers = function (mapDataSource, areaSettings) {
        var areaDataSource = [], lineDataSource = [], layers = [];
        for (var i = 0; i < mapDataSource.length; i++) {
            if (mapDataSource[i].type === 'line')
                lineDataSource.push(mapDataSource[i]);
            else
                areaDataSource.push(mapDataSource[i]);
        }
        layers.push(__assign({ name: "area", type: "area", dataSource: areaDataSource }, areaSettings));
        if (lineDataSource.length > 0)
            layers.push({ name: "line", type: "line", dataSource: lineDataSource });
        return layers;
    };
    mapItem.prototype._getLegend = function (legendModel) {
        var legend = legendModel && !!legendModel.Visible ? {} : undefined;
        if (legend) {
            this._updateLegendPosition(legend, legendModel);
        }
        return legend;
    };
    mapItem.prototype._updateLegendPosition = function (legend, legendModel) {
        switch (legendModel.Orientation) {
            case 'Vertical':
                legend.orientation = 'vertical';
                legend.inverted = true;
                break;
            case 'Horizontal':
                legend.orientation = 'horizontal';
                break;
            default:
                break;
        }
        switch (legendModel.Position) {
            case 'TopLeft':
                legend.verticalAlignment = 'top';
                legend.horizontalAlignment = 'left';
                break;
            case 'TopCenter':
                legend.verticalAlignment = 'top';
                legend.horizontalAlignment = 'center';
                break;
            case 'TopRight':
                legend.verticalAlignment = 'top';
                legend.horizontalAlignment = 'right';
                break;
            case 'BottomLeft':
                legend.verticalAlignment = 'bottom';
                legend.horizontalAlignment = 'left';
                break;
            case 'BottomCenter':
                legend.verticalAlignment = 'bottom';
                legend.horizontalAlignment = 'center';
                break;
            case 'BottomRight':
                legend.verticalAlignment = 'bottom';
                legend.horizontalAlignment = 'right';
                break;
            default:
                break;
        }
    };
    mapItem.prototype._isSelected = function (current) {
        var selectedValues = this._getSelectedValues(), selected = false, equals;
        if (selectedValues && selectedValues.length > 0 && selectedValues[0].length === current.length) {
            for (var i = 0; i < selectedValues.length; i++) {
                equals = true;
                for (var j = 0; j < current.length; j++) {
                    if (selectedValues[i][j] !== current[j]) {
                        equals = false;
                        break;
                    }
                }
                if (equals) {
                    selected = true;
                    break;
                }
            }
        }
        return selected;
    };
    mapItem.prototype._getToolTip = function (name, value) {
        return string_1.format("{0}: {1}", this._getHtml(name), this._getHtml(value));
    };
    mapItem.prototype._getColors = function (colorModels) {
        var colors;
        if (colorModels) {
            colors = [];
            for (var i = 0; i < colorModels.length; i++) {
                colors.push('rgb(' + colorModels[i].R + ', ' + colorModels[i].G + ', ' + colorModels[i].B + ')');
            }
            return colors;
        }
    };
    mapItem.prototype._updateRangeStops = function (rangeStops, min, max, percent) {
        var res = [];
        for (var i = 0; i < rangeStops.length; i++) {
            res.push(rangeStops[i]);
        }
        if (percent) {
            this._updatePercentRangeStops(res, min, max);
        }
        if (res.length > 0 && res[0] > min) {
            res[0] = min;
        }
        if (res[res.length - 1] < max) {
            res.push(max);
        }
        else {
            res.push(res[res.length - 1] + 1);
        }
        return res;
    };
    mapItem.prototype._updatePercentRangeStops = function (rangeStops, min, max) {
        for (var i = 0; i < rangeStops.length; i++) {
            rangeStops[i] = min + (rangeStops[i] / 100) * (max - min);
        }
    };
    mapItem.prototype._getViewport = function () {
        var topLeft = this.mapViewer.convertCoordinates(0, 0), bottomRight = this.mapViewer.convertCoordinates($(this.contentRoot).width(), $(this.contentRoot).height()), viewport = this.mapViewer.viewport(), center = this.mapViewer.center();
        return {
            LeftLongitude: !!topLeft[0] ? topLeft[0] : viewport[0],
            TopLatitude: !!topLeft[1] ? topLeft[1] : viewport[1],
            RightLongitude: !!bottomRight[0] ? bottomRight[0] : viewport[2],
            BottomLatitude: !!bottomRight[1] ? bottomRight[1] : viewport[3],
            CenterPointLongitude: center[0],
            CenterPointLatitude: center[1]
        };
    };
    mapItem.prototype._getClientContext = function () {
        return {
            viewport: this._getViewport(),
            clientSize: {
                width: $(this.contentRoot).width(),
                height: $(this.contentRoot).height()
            }
        };
    };
    mapItem.prototype._updateClientStateUnsafe = function (clientState) {
        this._updateViewport(clientState.viewport);
    };
    mapItem.prototype._updateViewport = function (viewport) {
        this._lock();
        try {
            this.mapViewer.zoomFactor(this._calculateZoomFactor(viewport, $(this.contentRoot).width(), $(this.contentRoot).height()));
            this.mapViewer.center([viewport.CenterPointLongitude, viewport.CenterPointLatitude]);
        }
        finally {
            this._unlock();
        }
    };
    mapItem.prototype._updateContentSizeUnsafe = function () {
        _super.prototype._updateContentSizeUnsafe.call(this);
        if (!!this.mapViewer) {
            var viewport = this.clientState ? this.clientState.viewport : this.options.ViewModel.Viewport;
            this._updateViewport(viewport);
            this.mapViewer.render();
            this._onClientStateUpdate(this._getClientContext());
        }
    };
    mapItem.prototype._onViewPortChanged = function () {
        if (!this._isLocked()) {
            this.clientState = this._getClientContext();
            this.viewportChangedCallback && this.viewportChangedCallback(this.clientState.viewport);
            this._onClientStateUpdate(this.clientState);
            this._toggleInitialExtentChanged(true);
        }
    };
    mapItem.prototype.onInitialExtent = function (newViewport) {
        if (this.hasWidget) {
            this._onInitialExtentUnsafe(newViewport);
        }
        else {
            this._onInitialExtentBase(newViewport);
        }
    };
    mapItem.prototype._onInitialExtentUnsafe = function (newViewport) {
        this._updateViewport(newViewport || this.options.ViewModel.Viewport);
        this.clientState = null;
        this._onClientStateUpdate(this._getClientContext());
    };
    mapItem.prototype._onInitialExtentBase = function (newViewport) {
        this.clientState = null;
    };
    mapItem.prototype._getWidget = function () {
        return this.mapViewer;
    };
    mapItem.prototype._subscribeItemEvents = function () {
        var that = this;
        this.mapViewer.option('onCenterChanged', function () { that._onViewPortChanged(); });
        this.mapViewer.option('onZoomFactorChanged', function () { that._onViewPortChanged(); });
    };
    mapItem.prototype._unsubscribeItemEvents = function () {
        this.mapViewer.option('onCenterChanged', null);
        this.mapViewer.option('onZoomFactorChanged', null);
    };
    mapItem.prototype._toggleInitialExtentChanged = function (changed) {
        if (this.isInitialExtentChanged != changed) {
            this.isInitialExtentChanged = changed;
            this.initialExtentChanged && this.initialExtentChanged(this.isInitialExtentChanged);
        }
    };
    return mapItem;
}(_base_item_1.baseItem));
exports.mapItem = mapItem;
