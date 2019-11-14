/**
* DevExpress Dashboard (_treemap-item-surface.js)
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
var _base_item_surface_1 = require("./_base-item-surface");
var _treemap_item_properties_composer_1 = require("../properties-composers/_treemap-item-properties-composer");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var ko = require("knockout");
var TreemapItemSurface = (function (_super) {
    __extends(TreemapItemSurface, _super);
    function TreemapItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    TreemapItemSurface.prototype.fillSections = function () {
        var _this = this;
        var addTileOptions = function (tabs, dataItem) {
            if (dataItem && dataItem.uniqueName()) {
                var argument = _this.dashboardItem.arguments().filter(function (d) { return d.uniqueName() === dataItem.uniqueName(); })[0];
                if (_this.dashboardItem.arguments().indexOf(argument) !== _this.dashboardItem.arguments().length - 1) {
                    tabs.push(_treemap_item_properties_composer_1.TreemapItemPropertiesComposer.getTileOptionsTab(_this.dashboardItem, dataItem));
                }
            }
        };
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Values, undefined, ko.computed(function () { return !_this.dashboardItem.values().length && !!_this.dashboardItem.arguments().length; })));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Arguments, addTileOptions));
    };
    TreemapItemSurface.prototype.getPropertiesComposer = function () {
        return new _treemap_item_properties_composer_1.TreemapItemPropertiesComposer();
    };
    return TreemapItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.TreemapItemSurface = TreemapItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("Treemap", TreemapItemSurface);
