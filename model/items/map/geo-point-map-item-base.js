﻿/**
* DevExpress Dashboard (geo-point-map-item-base.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var map_item_1 = require("./map-item");
var data_item_1 = require("../../data-item/data-item");
var _utils_1 = require("../../internal/_utils");
var _geo_point_map_item_base_1 = require("./metadata/_geo-point-map-item-base");
var _dimension_filter_values_1 = require("../../data-item/_dimension-filter-values");
var _data_field_1 = require("../../data-sources/_data-field");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _array_utils_1 = require("../../internal/_array-utils");
var ko = require("knockout");
var GeoPointMapItemBase = (function (_super) {
    __extends(GeoPointMapItemBase, _super);
    function GeoPointMapItemBase(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.tooltipDimensions = ko.observableArray([]);
        _this._selectedClusters = ko.observable();
        _this._clustersContent = ko.observable();
        _this._processDataRequest = function () {
            var clientState = _this._clientState();
            if (clientState) {
                _this._dataRequestArgs(__assign({ unclusteredSelection: _this._selectionValues.peek() }, clientState));
            }
        };
        _this._actualSelectedValues = ko.computed(function () {
            return _this.enableClustering() && _this._selectedClusters() || _this._selectionValues();
        });
        _this.__tooltipDimensions = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.TooltipDimensions, function (item) { return new data_item_1.DataItemLink(_this, item, serializer); });
        _this._subscribeDataItemLinkArrays(_geo_point_map_item_base_1.tooltipDimensions);
        _this._attachDataItem(_this, _geo_point_map_item_base_1.latitude.propertyName);
        _this._attachDataItem(_this, _geo_point_map_item_base_1.longitude.propertyName);
        _this.enableClustering.subscribe(function (newValue) {
            if (newValue) {
                _this._processDataRequest();
            }
        });
        return _this;
    }
    Object.defineProperty(GeoPointMapItemBase.prototype, "_actualSelectionValues", {
        get: function () {
            return this._actualSelectedValues;
        },
        enumerable: true,
        configurable: true
    });
    GeoPointMapItemBase.prototype._clearBindings = function () {
        _super.prototype._clearBindings.call(this);
        this.__tooltipDimensions.removeAll();
        this.__latitude.uniqueName(null);
        this.__longitude.uniqueName(null);
    };
    GeoPointMapItemBase.prototype.getInfo = function () {
        return _geo_point_map_item_base_1.geoPointMapDashboardItemBaseSerializationsInfo;
    };
    GeoPointMapItemBase.prototype._getInteractivityDimensionLinks = function () {
        return [this.__latitude, this.__longitude];
    };
    GeoPointMapItemBase.prototype._getExportingSelection = function () {
        return this._selectedClusters() || (this._outputFilter() && this._outputFilter().values);
    };
    GeoPointMapItemBase.prototype._getDisplayFilterValues = function (limitCount) {
        var _this = this;
        var metaData = this._dataManager() ? this._dataManager().getMetaData() : undefined, selection = this._getExportingSelection(), outFilterValues = [], latName = this.__latitude.uniqueName(), lonName = this.__longitude.uniqueName();
        var dataStorage = this._dataManager() ? this._dataManager().getDataStorage() : undefined;
        if (dataStorage && selection && this.__tooltipDimensions().length) {
            var slice = dataStorage.getSliceByIds(this._getSliceDimensions()
                .map(function (dataItemLink) { return dataItemLink.uniqueName(); })
                .filter(function (uniqueName) { return !!uniqueName; }));
            this.__tooltipDimensions().forEach(function (tooltipDimension) {
                var uniqueValues = {}, valueCount = 0, filterValues = new _dimension_filter_values_1.DimensionFilterValues(_this._getDimensionDisplayName(tooltipDimension.dataItem().uniqueName())), format = metaData ? metaData.getDimensionFormat(tooltipDimension.uniqueName()) : undefined, isOlap = _data_field_1.DataField.isOlap(tooltipDimension.dataItem().dataMember());
                slice.forEach(function (dataKey) {
                    var rowKey = dataKey.rowKey, latitudeValue = slice.getKeyValue(rowKey, latName), longitudeValue = slice.getKeyValue(rowKey, lonName);
                    selection.every(function (selectionValue) {
                        if (latitudeValue === selectionValue[0] && longitudeValue === selectionValue[1]) {
                            if (!!limitCount && valueCount >= limitCount) {
                                filterValues.Truncated = true;
                                return false;
                            }
                            var value = slice.getKeyValue(rowKey, tooltipDimension.uniqueName());
                            if (!uniqueValues[value]) {
                                uniqueValues[value] = value;
                                valueCount++;
                            }
                        }
                        return true;
                    });
                });
                filterValues.Values = Object.keys(uniqueValues).map(function (v) {
                    return {
                        Type: "Value",
                        Value: isOlap ? _this._getOlapDimensionDisplayText(v, tooltipDimension.uniqueName()) : v,
                        Format: format
                    };
                });
                outFilterValues.push(filterValues);
            });
        }
        return outFilterValues;
    };
    GeoPointMapItemBase.prototype._getSliceDimensions = function () {
        return [this.__latitude, this.__longitude].concat(this.__tooltipDimensions());
    };
    GeoPointMapItemBase.prototype._updateContentViewModel = function (content) {
        _super.prototype._updateContentViewModel.call(this, content);
        var mapContent = this._paneContentHolder.getContent(_base_metadata_1.PropertyCategory.Data);
        this._clustersContent(mapContent.ClustersContent);
        if (content && content.SelectedValues) {
            this._setSelectionData(content.SelectedValues);
        }
    };
    GeoPointMapItemBase.prototype._setSelectionData = function (selection) {
        if (this._clustersContent()) {
            var realSelectionPoints_1 = [];
            this._clustersContent().forEach(function (clusterDto) {
                var x = clusterDto.Cluster.Latitude, y = clusterDto.Cluster.Longitude;
                if ((selection || []).filter(function (s) {
                    return s[0] === x && s[1] === y;
                })[0]) {
                    clusterDto.Points.forEach(function (pointInCluster) { return realSelectionPoints_1.push(pointInCluster); });
                }
            });
            this._selectedClusters(selection);
            selection = realSelectionPoints_1;
        }
        if (!_array_utils_1.arrayEquals(this._selectionValues(), selection)) {
            this._selectionValues(selection);
            if (this.enableClustering()) {
                this._processDataRequest();
            }
        }
    };
    GeoPointMapItemBase.prototype._isTopNEnabled = function (dataItem) {
        return this.tooltipDimensions.indexOf(dataItem) == -1 && this.hiddenDimensions().indexOf(dataItem) == -1;
    };
    __decorate([
        _utils_1.collectionItemType("TooltipDimension")
    ], GeoPointMapItemBase.prototype, "__tooltipDimensions", void 0);
    return GeoPointMapItemBase;
}(map_item_1.MapItem));
exports.GeoPointMapItemBase = GeoPointMapItemBase;
