/**
* DevExpress Dashboard (_filter-item-surface.js)
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
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _filter_item_properties_composer_1 = require("../properties-composers/_filter-item-properties-composer");
var FilterItemSurface = (function (_super) {
    __extends(FilterItemSurface, _super);
    function FilterItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    FilterItemSurface.prototype.fillSections = function () {
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.FilterDimensions));
    };
    FilterItemSurface.prototype.getPropertiesComposer = function () {
        return new _filter_item_properties_composer_1.FilterItemPropertiesComposer();
    };
    return FilterItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.FilterItemSurface = FilterItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("ComboBox", FilterItemSurface);
_section_descriptors_1.surfaceItemsFactory.register("ListBox", FilterItemSurface);
_section_descriptors_1.surfaceItemsFactory.register("TreeView", FilterItemSurface);
