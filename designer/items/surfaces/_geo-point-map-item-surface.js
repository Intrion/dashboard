/**
* DevExpress Dashboard (_geo-point-map-item-surface.js)
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
var _single_data_item_surface_1 = require("../sections/_single-data-item-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _geopoint_map_item_properties_composer_1 = require("../properties-composers/_geopoint-map-item-properties-composer");
var ko = require("knockout");
var GeoPointItemSurface = (function (_super) {
    __extends(GeoPointItemSurface, _super);
    function GeoPointItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    GeoPointItemSurface.prototype.fillSections = function () {
        var _this = this;
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.Latitude,
            fieldConstraint: function (field) { return _data_field_1.DataField.isNumeric(field); },
            warning: ko.computed(function () { return !_this.dashboardItem.latitude() && !!(_this.dashboardItem.longitude() || _this.dashboardItem.value() || _this.dashboardItem.tooltipDimensions().length || _this.dashboardItem.tooltipMeasures().length); })
        }));
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.Longitude,
            fieldConstraint: function (field) { return _data_field_1.DataField.isNumeric(field); },
            warning: ko.computed(function () { return !_this.dashboardItem.longitude() && !!(_this.dashboardItem.latitude() || _this.dashboardItem.value() || _this.dashboardItem.tooltipDimensions().length || _this.dashboardItem.tooltipMeasures().length); })
        }));
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.Value,
            warning: ko.computed(function () { return !_this.dashboardItem.value() && !!(_this.dashboardItem.latitude() || _this.dashboardItem.longitude() || _this.dashboardItem.tooltipDimensions().length || _this.dashboardItem.tooltipMeasures().length); })
        }));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.TooltipDimensions));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.TooltipMeasures));
    };
    GeoPointItemSurface.prototype.getPropertiesComposer = function () {
        return new _geopoint_map_item_properties_composer_1.GeoPointMapItemPropertiesComposer();
    };
    return GeoPointItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.GeoPointItemSurface = GeoPointItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("GeoPointMap", GeoPointItemSurface);
