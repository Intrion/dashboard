/**
* DevExpress Dashboard (_range-filter-item-surface.js)
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
var range_filter_item_1 = require("../../../model/items/range-filter/range-filter-item");
var _base_item_surface_1 = require("./_base-item-surface");
var chart_series_creator_1 = require("../../../model/items/chart/chart-series-creator");
var _chart_series_properties_composer_1 = require("../properties-composers/_chart-series-properties-composer");
var _data_item_container_collection_surface_1 = require("../sections/_data-item-container-collection-surface");
var _single_data_item_surface_1 = require("../sections/_single-data-item-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _range_filter_item_properties_composer_1 = require("../properties-composers/_range-filter-item-properties-composer");
var _custom_range_properties_composer_1 = require("../properties-composers/_custom-range-properties-composer");
var ko = require("knockout");
var RangeFilterItemSurface = (function (_super) {
    __extends(RangeFilterItemSurface, _super);
    function RangeFilterItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    RangeFilterItemSurface.prototype.fillSections = function () {
        var _this = this;
        var creator = chart_series_creator_1.ChartSeriesCreator.getSeriesCreator(this.dashboardItem);
        var sectionInfo = {
            title: "DashboardWebStringId.Binding.Values",
            bindingProperty: {
                propertyName: "series",
                emptyPlaceholder: "DashboardWebStringId.Binding.AddValue",
                selectedPlaceholder: "DashboardWebStringId.Binding.ConfigureValue",
                creator: function (itemType) {
                    if (itemType === void 0) { itemType = "Line"; }
                    return creator(itemType);
                },
                containersMap: range_filter_item_1.RangeFilterItem.rangeSeriesViewTypesMap,
                dataItemType: "Measure"
            },
            detailsPropertiesComposer: new _chart_series_properties_composer_1.ChartSeriesPropertiesComposer(range_filter_item_1.RangeFilterItem.rangeSeriesViewTypesMap, false, false)
        };
        this.sections.push(new _data_item_container_collection_surface_1.DataItemContainerCollectionSurface(this, this.dashboardItem, sectionInfo, ko.computed(function () { return !_this.dashboardItem.series().length && (!!_this.dashboardItem.argument() || !!_this.dashboardItem.seriesDimensions().length); })));
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.SingleArgument,
            fieldConstraint: function (dataField) { return _data_field_1.DataField.isContinous(dataField) && !_data_field_1.DataField.isOlapHierarchy(dataField); },
            warning: ko.computed(function () { return (!!_this.dashboardItem.series().length || !!_this.dashboardItem.seriesDimensions().length) && !_this.dashboardItem.argument(); })
        }));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.SeriesDimension));
    };
    RangeFilterItemSurface.prototype.getPropertiesComposer = function () {
        var _this = this;
        return new _range_filter_item_properties_composer_1.RangeFilterItemPropertiesComposer(function (model) {
            var composer = new _custom_range_properties_composer_1.CustomRangePropertiesComposer();
            var tabs = composer.composeTabs(model, _this.dashboardItem.argument(), _this.dashboardItem);
            _this.propertiesController.secondaryModel({
                name: "dx-dashboard-secondary-item-surface",
                displayText: model.name,
                data: {
                    model: model,
                    propertiesTabs: ko.observableArray(tabs),
                    propertiesController: _this.propertiesController
                },
                containingCollection: _this.dashboardItem.dateTimePeriods
            });
        });
    };
    return RangeFilterItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.RangeFilterItemSurface = RangeFilterItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("RangeFilter", RangeFilterItemSurface);
