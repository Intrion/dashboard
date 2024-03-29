﻿/**
* DevExpress Dashboard (_gauge-item-surface.js)
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
var gauge_1 = require("../../../model/items/gauge/gauge");
var _gauge_element_properties_composer_1 = require("../properties-composers/_gauge-element-properties-composer");
var _data_item_container_collection_surface_1 = require("../sections/_data-item-container-collection-surface");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _gauge_item_properties_composer_1 = require("../properties-composers/_gauge-item-properties-composer");
var ko = require("knockout");
var _collection_editor_viewmodel_1 = require("../../ui-widgets/collection-editor/_collection-editor-viewmodel");
var _delta_numeric_format_surface_1 = require("./_delta-numeric-format-surface");
var GaugeItemSurface = (function (_super) {
    __extends(GaugeItemSurface, _super);
    function GaugeItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    GaugeItemSurface.prototype.fillSections = function () {
        var _this = this;
        var sectionInfo = {
            title: "DashboardWebStringId.Binding.Gauges",
            bindingProperty: {
                propertyName: "gauges",
                emptyPlaceholder: "DashboardWebStringId.Binding.AddGauge",
                selectedPlaceholder: "DashboardWebStringId.Binding.ConfigureGauge",
                creator: function (itemType) {
                    if (itemType === void 0) { itemType = "GaugeElement"; }
                    return new gauge_1.Gauge(_this.dashboardItem, { "@ItemType": itemType });
                },
                dataItemType: "Measure"
            },
            detailsPropertiesComposer: new _gauge_element_properties_composer_1.GaugeElementPropertiesComposer(function (model) {
                var surface = new _delta_numeric_format_surface_1.DeltaNumericFormatSurface(model, _this.propertiesController);
                surface.startEditing(new _collection_editor_viewmodel_1.CollectionEditorEditItemArguments());
            })
        };
        this.sections.push(new _data_item_container_collection_surface_1.DataItemContainerCollectionSurface(this, this.dashboardItem, sectionInfo, ko.computed(function () { return !_this.dashboardItem.gauges().length && !!_this.dashboardItem.seriesDimensions().length; })));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.SeriesDimension));
    };
    GaugeItemSurface.prototype.getPropertiesComposer = function () {
        return new _gauge_item_properties_composer_1.GaugeItemPropertiesComposer();
    };
    return GaugeItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.GaugeItemSurface = GaugeItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("Gauge", GaugeItemSurface);
