/**
* DevExpress Dashboard (_scatter-chart-item-surface.js)
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
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _scatter_chart_item_properties_composer_1 = require("../properties-composers/_scatter-chart-item-properties-composer");
var ko = require("knockout");
var ScatterChartItemSurface = (function (_super) {
    __extends(ScatterChartItemSurface, _super);
    function ScatterChartItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    ScatterChartItemSurface.prototype.fillSections = function () {
        var _this = this;
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.AxisXMeasure,
            warning: ko.computed(function () { return !_this.dashboardItem.axisXMeasure() && (!!_this.dashboardItem.arguments().length || !!_this.dashboardItem.weight() || !!_this.dashboardItem.axisYMeasure()); })
        }));
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.AxisYMeasure,
            warning: ko.computed(function () { return !_this.dashboardItem.axisYMeasure() && (!!_this.dashboardItem.arguments().length || !!_this.dashboardItem.weight() || !!_this.dashboardItem.axisXMeasure()); })
        }));
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.Weight
        }));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Arguments, undefined, ko.computed(function () { return !!_this.dashboardItem.weight() && !_this.dashboardItem.arguments().length; })));
    };
    ScatterChartItemSurface.prototype.getPropertiesComposer = function () {
        return new _scatter_chart_item_properties_composer_1.ScatterChartItemPropertiesComposer();
    };
    return ScatterChartItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.ScatterChartItemSurface = ScatterChartItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("ScatterChart", ScatterChartItemSurface);
