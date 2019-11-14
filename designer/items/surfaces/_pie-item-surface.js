/**
* DevExpress Dashboard (_pie-item-surface.js)
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
var _pie_item_properties_composer_1 = require("../properties-composers/_pie-item-properties-composer");
var ko = require("knockout");
var PieItemSurface = (function (_super) {
    __extends(PieItemSurface, _super);
    function PieItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    PieItemSurface.prototype.fillSections = function () {
        var _this = this;
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Values, undefined, ko.computed(function () { return (_this.dashboardItem.arguments().length > 0 || _this.dashboardItem.seriesDimensions().length > 0) && _this.dashboardItem.values().length === 0; })));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Arguments));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.SeriesDimension));
    };
    PieItemSurface.prototype.getPropertiesComposer = function () {
        return new _pie_item_properties_composer_1.PieItemPropertiesComposer();
    };
    return PieItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.PieItemSurface = PieItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("Pie", PieItemSurface);
