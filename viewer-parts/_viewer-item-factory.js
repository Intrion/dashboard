﻿/**
* DevExpress Dashboard (_viewer-item-factory.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _viewer_item_types_1 = require("./_viewer-item-types");
var _group_item_1 = require("./viewer-items/_group-item");
var _tab_page_item_1 = require("./viewer-items/_tab-page-item");
var _range_selector_item_1 = require("./viewer-items/range-selector-item/_range-selector-item");
var _chart_item_1 = require("./viewer-items/_chart-item");
var _pie_item_1 = require("./viewer-items/_pie-item");
var _cards_item_1 = require("./viewer-items/_cards-item");
var _data_grid_item_1 = require("./viewer-items/data-grid-item/_data-grid-item");
var _pivot_grid_item_1 = require("./viewer-items/_pivot-grid-item");
var _gauges_item_1 = require("./viewer-items/_gauges-item");
var _text_item_1 = require("./viewer-items/_text-item");
var _image_item_1 = require("./viewer-items/_image-item");
var _bound_image_item_1 = require("./viewer-items/_bound-image-item");
var _choropleth_map_item_1 = require("./viewer-items/_choropleth-map-item");
var _geo_point_map_item_1 = require("./viewer-items/_geo-point-map-item");
var _bubble_map_item_1 = require("./viewer-items/_bubble-map-item");
var _pie_map_item_1 = require("./viewer-items/_pie-map-item");
var _treemap_item_1 = require("./viewer-items/_treemap-item");
var _combo_box_element_1 = require("./viewer-items/filter-items/_combo-box-element");
var _list_element_1 = require("./viewer-items/filter-items/_list-element");
var _tree_element_1 = require("./viewer-items/filter-items/_tree-element");
var _date_filter_element_1 = require("./viewer-items/filter-items/_date-filter-element");
var _custom_fake_item_1 = require("./viewer-items/_custom-fake-item");
var ViewerItemFactory = (function () {
    function ViewerItemFactory() {
    }
    ViewerItemFactory.prototype.createItem = function (container, options) {
        switch (options.Type) {
            case _viewer_item_types_1.types.group:
                return new _group_item_1.groupItem(container, options);
            case _viewer_item_types_1.types.tabPage:
                return new _tab_page_item_1.tabPageItem(container, options);
            case _viewer_item_types_1.types.rangeFilter:
                return new _range_selector_item_1.rangeSelectorItem(container, options);
            case _viewer_item_types_1.types.chart:
            case _viewer_item_types_1.types.scatter:
                return new _chart_item_1.chartItem(container, options);
            case _viewer_item_types_1.types.pie:
                return new _pie_item_1.pieItem(container, options);
            case _viewer_item_types_1.types.card:
                return new _cards_item_1.cardsItem(container, options);
            case _viewer_item_types_1.types.grid:
                return new _data_grid_item_1.dataGridItem(container, options);
            case _viewer_item_types_1.types.pivot:
                return new _pivot_grid_item_1.pivotGridItem(container, options);
            case _viewer_item_types_1.types.gauge:
                return new _gauges_item_1.gaugesItem(container, options);
            case _viewer_item_types_1.types.text:
                return new _text_item_1.textItem(container, options);
            case _viewer_item_types_1.types.image:
                return new _image_item_1.imageItem(container, options);
            case _viewer_item_types_1.types.boundImage:
                return new _bound_image_item_1.boundImageItem(container, options);
            case _viewer_item_types_1.types.map:
            case _viewer_item_types_1.types.choroplethMap:
                return new _choropleth_map_item_1.choroplethMapItem(container, options);
            case _viewer_item_types_1.types.geoPointMap:
                return new _geo_point_map_item_1.geoPointMapItem(container, options);
            case _viewer_item_types_1.types.bubbleMap:
                return new _bubble_map_item_1.bubbleMapItem(container, options);
            case _viewer_item_types_1.types.pieMap:
                return new _pie_map_item_1.pieMapItem(container, options);
            case _viewer_item_types_1.types.treemap:
                return new _treemap_item_1.treemapItem(container, options);
            case _viewer_item_types_1.types.comboBox:
                return new _combo_box_element_1.comboBoxFilterElement(container, options);
            case _viewer_item_types_1.types.listBox:
                return new _list_element_1.listFilterElement(container, options);
            case _viewer_item_types_1.types.treeView:
                return new _tree_element_1.treeViewFilterElement(container, options);
            case _viewer_item_types_1.types.dateFilter:
                return new _date_filter_element_1.dateFilterElement(container, options);
            case _viewer_item_types_1.types.custom:
                return new _custom_fake_item_1.customFakeItem(container, options);
            default:
                return {};
        }
    };
    ;
    return ViewerItemFactory;
}());
exports.ViewerItemFactory = ViewerItemFactory;
exports.defaultViewerItemFactory = new ViewerItemFactory();
