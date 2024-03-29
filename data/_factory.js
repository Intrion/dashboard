﻿/**
* DevExpress Dashboard (_factory.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _viewer_item_types_1 = require("../viewer-parts/_viewer-item-types");
var _range_filter_data_controller_1 = require("./data-controllers/_range-filter-data-controller");
var _chart_data_controller_1 = require("./data-controllers/_chart-data-controller");
var _scatter_chart_data_controller_1 = require("./data-controllers/_scatter-chart-data-controller");
var _pie_data_controller_1 = require("./data-controllers/_pie-data-controller");
var _pivot_data_controller_1 = require("./data-controllers/_pivot-data-controller");
var _choropleth_map_data_controller_1 = require("./data-controllers/_choropleth-map-data-controller");
var _grid_data_controller_1 = require("./data-controllers/_grid-data-controller");
var _card_data_controller_1 = require("./data-controllers/_card-data-controller");
var _gauge_data_controller_1 = require("./data-controllers/_gauge-data-controller");
var _geo_point_map_data_controller_1 = require("./data-controllers/_geo-point-map-data-controller");
var _bubble_map_data_controller_1 = require("./data-controllers/_bubble-map-data-controller");
var _pie_map_data_controller_1 = require("./data-controllers/_pie-map-data-controller");
var _filter_element_data_controller_1 = require("./data-controllers/_filter-element-data-controller");
var _image_data_controller_1 = require("./data-controllers/_image-data-controller");
var _text_item_data_controller_1 = require("./data-controllers/_text-item-data-controller");
var _treemap_data_controller_1 = require("./data-controllers/_treemap-data-controller");
var DataControllerFactory = (function () {
    function DataControllerFactory() {
    }
    DataControllerFactory.prototype.createDataController = function (type, options) {
        switch (type) {
            case _viewer_item_types_1.types.rangeFilter:
                return new _range_filter_data_controller_1.rangeFilterDataController(options);
            case _viewer_item_types_1.types.chart:
                return new _chart_data_controller_1.chartDataController(options);
            case _viewer_item_types_1.types.scatter:
                return new _scatter_chart_data_controller_1.scatterChartDataController(options);
            case _viewer_item_types_1.types.pie:
                return new _pie_data_controller_1.pieDataController(options);
            case _viewer_item_types_1.types.pivot:
                return new _pivot_data_controller_1.pivotDataController(options);
            case _viewer_item_types_1.types.choroplethMap:
                return new _choropleth_map_data_controller_1.choroplethMapDataController(options);
            case _viewer_item_types_1.types.grid:
                return new _grid_data_controller_1.gridDataController(options);
            case _viewer_item_types_1.types.card:
                return new _card_data_controller_1.cardDataController(options);
            case _viewer_item_types_1.types.gauge:
                return new _gauge_data_controller_1.gaugeDataController(options);
            case _viewer_item_types_1.types.geoPointMap:
                return new _geo_point_map_data_controller_1.geoPointMapDataController(options);
            case _viewer_item_types_1.types.bubbleMap:
                return new _bubble_map_data_controller_1.bubbleMapDataController(options);
            case _viewer_item_types_1.types.pieMap:
                return new _pie_map_data_controller_1.pieMapDataController(options);
            case _viewer_item_types_1.types.comboBox:
            case _viewer_item_types_1.types.listBox:
                return new _filter_element_data_controller_1.listViewDataController(options);
            case _viewer_item_types_1.types.treeView:
                return new _filter_element_data_controller_1.treeViewDataController(options);
            case _viewer_item_types_1.types.boundImage:
                return new _image_data_controller_1.imageDataController(options);
            case _viewer_item_types_1.types.text:
                return new _text_item_data_controller_1.textItemDataController(options);
            case _viewer_item_types_1.types.treemap:
                return new _treemap_data_controller_1.treemapDataController(options);
            default:
                return undefined;
        }
    };
    ;
    return DataControllerFactory;
}());
exports.DataControllerFactory = DataControllerFactory;
exports.defaultDataControllerFactory = new DataControllerFactory();
