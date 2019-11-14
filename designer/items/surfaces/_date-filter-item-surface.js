/**
* DevExpress Dashboard (_date-filter-item-surface.js)
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
var _section_descriptors_1 = require("../_section-descriptors");
var _single_data_item_surface_1 = require("../sections/_single-data-item-surface");
var _date_filter_item_1 = require("../../../model/items/filter-items/metadata/_date-filter-item");
var _date_filter_item_properties_composer_1 = require("../properties-composers/_date-filter-item-properties-composer");
var _custom_range_properties_composer_1 = require("../properties-composers/_custom-range-properties-composer");
var ko = require("knockout");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var DateFilterItemSurface = (function (_super) {
    __extends(DateFilterItemSurface, _super);
    function DateFilterItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    DateFilterItemSurface.prototype.fillSections = function () {
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: {
                title: "DashboardStringId.DescriptionItemDimension",
                bindingProperty: {
                    propertyName: _date_filter_item_1.dateFilterDimension.propertyName,
                    dataItemType: "Dimension",
                    emptyPlaceholder: "DashboardStringId.DescriptionItemDimension",
                    selectedPlaceholder: "DashboardStringId.DescriptionItemDimension"
                }
            },
            fieldConstraint: function (dataField) { return _data_field_1.DataField.isDateTime(dataField); }
        }));
    };
    DateFilterItemSurface.prototype.getPropertiesComposer = function () {
        var _this = this;
        return new _date_filter_item_properties_composer_1.DateFilterItemPropertiesComposer(function (model) {
            var composer = new _custom_range_properties_composer_1.CustomRangePropertiesComposer();
            var tabs = composer.composeTabs(model, _this.dashboardItem.dimension(), _this.dashboardItem);
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
    return DateFilterItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.DateFilterItemSurface = DateFilterItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("DateFilter", DateFilterItemSurface);
