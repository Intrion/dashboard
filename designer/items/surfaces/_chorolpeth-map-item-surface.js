/**
* DevExpress Dashboard (_chorolpeth-map-item-surface.js)
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
var chorolpeth_map_item_1 = require("../../../model/items/map/chorolpeth-map-item");
var _base_item_surface_1 = require("./_base-item-surface");
var _single_data_item_surface_1 = require("../sections/_single-data-item-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _choropleth_map_element_properties_composer_1 = require("../properties-composers/_choropleth-map-element-properties-composer");
var _data_item_container_collection_surface_1 = require("../sections/_data-item-container-collection-surface");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _choropleth_map_item_properties_composer_1 = require("../properties-composers/_choropleth-map-item-properties-composer");
var ko = require("knockout");
var _delta_numeric_format_surface_1 = require("./_delta-numeric-format-surface");
var _collection_editor_viewmodel_1 = require("../../ui-widgets/collection-editor/_collection-editor-viewmodel");
var ChoroplethMapItemSurface = (function (_super) {
    __extends(ChoroplethMapItemSurface, _super);
    function ChoroplethMapItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    ChoroplethMapItemSurface.prototype.fillSections = function () {
        var _this = this;
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.AttributeDimension,
            fieldConstraint: function (field) { return _data_field_1.DataField.isNumeric(field) || field.fieldType() === "Bool" || field.fieldType() === "Text"; },
            warning: ko.computed(function () { return !_this.dashboardItem.attributeDimension() && !!(_this.dashboardItem.maps().length || _this.dashboardItem.tooltipMeasures().length); })
        }));
        var sectionInfo = {
            title: "DashboardWebStringId.Binding.Maps",
            bindingProperty: {
                propertyName: "maps",
                emptyPlaceholder: "DashboardWebStringId.Binding.AddMap",
                selectedPlaceholder: "DashboardWebStringId.Binding.ConfigureMap",
                creator: function (itemType) {
                    if (itemType === void 0) { itemType = "ValueMap"; }
                    return _this.dashboardItem._createMap({ "@ItemType": itemType });
                },
                containersMap: chorolpeth_map_item_1.ChoroplethMapItem.choroplethMapTypesMap,
                dataItemType: "Measure"
            },
            detailsPropertiesComposer: new _choropleth_map_element_properties_composer_1.ChoroplethMapElementPropertiesComposer(function (model) {
                var surface = new _delta_numeric_format_surface_1.DeltaNumericFormatSurface(model, _this.propertiesController);
                surface.startEditing(new _collection_editor_viewmodel_1.CollectionEditorEditItemArguments());
            })
        };
        this.sections.push(new _data_item_container_collection_surface_1.DataItemContainerCollectionSurface(this, this.dashboardItem, sectionInfo, ko.computed(function () { return !_this.dashboardItem.maps().length && !!(_this.dashboardItem.attributeDimension() || _this.dashboardItem.tooltipMeasures().length); })));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.TooltipMeasures));
    };
    ChoroplethMapItemSurface.prototype.getPropertiesComposer = function () {
        return new _choropleth_map_item_properties_composer_1.ChoroplethMapItemPropertiesComposer();
    };
    return ChoroplethMapItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.ChoroplethMapItemSurface = ChoroplethMapItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("ChoroplethMap", ChoroplethMapItemSurface);
