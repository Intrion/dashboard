/**
* DevExpress Dashboard (_chart-item-surface.js)
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
var chart_pane_1 = require("../../../model/items/chart/chart-pane");
var _default_1 = require("../../../data/localization/_default");
var chart_series_creator_1 = require("../../../model/items/chart/chart-series-creator");
var _chart_series_properties_composer_1 = require("../properties-composers/_chart-series-properties-composer");
var _data_item_container_collection_surface_1 = require("../sections/_data-item-container-collection-surface");
var _helper_classes_1 = require("../../../model/internal/_helper-classes");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _chart_item_properties_composer_1 = require("../properties-composers/_chart-item-properties-composer");
var ko = require("knockout");
var ChartItemSurface = (function (_super) {
    __extends(ChartItemSurface, _super);
    function ChartItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    ChartItemSurface.prototype.fillSections = function () {
        var _this = this;
        var createPaneSection = function (pane, index) {
            var numberPostfix = _this.dashboardItem.panes().length === 1 ? "" : " (" + pane.name() + ")", sectionsBeforePanes = 1;
            var sectionInfo = {
                title: _default_1.formatLocalizable("DashboardWebStringId.Binding.ValuesPattern", numberPostfix),
                bindingProperty: {
                    propertyName: "series",
                    groupName: "Series",
                    dataItemType: "Measure",
                    emptyPlaceholder: "DashboardWebStringId.Binding.AddValues",
                    selectedPlaceholder: "DashboardWebStringId.Binding.ConfigureValues",
                    creator: function (itemType) {
                        if (itemType === void 0) { itemType = "Bar"; }
                        return pane.createSeriesByViewType(itemType);
                    },
                    containersMap: chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap
                },
                actions: undefined,
                detailsPropertiesComposer: new _chart_series_properties_composer_1.ChartSeriesPropertiesComposer()
            };
            if (index > 0) {
                sectionInfo.actions = [{
                        title: "DashboardWebStringId.Binding.RemovePane",
                        icon: "dx-dashboard-remove-small",
                        action: function () {
                            _this.dashboardItem.panes.remove(pane);
                            return false;
                        }
                    }];
            }
            _this.sections.splice(index + sectionsBeforePanes, 0, new _data_item_container_collection_surface_1.DataItemContainerCollectionSurface(_this, pane, sectionInfo, ko.computed(function () { return (_this.dashboardItem.arguments().length > 0 || _this.dashboardItem.seriesDimensions().length > 0) && _this.dashboardItem.panes().every(function (p) { return p.series().length === 0; }); })));
        };
        this.sections.push({
            template: "dx-dashboard-add-pane-section",
            addPane: function () {
                var pane = new chart_pane_1.ChartPane(_this.dashboardItem, { "@Name": _helper_classes_1.NameGenerator.generateName(_default_1.getLocalizationById("DashboardStringId.DefaultNameChartPane") + " ", _this.dashboardItem.panes(), 'name', 1), "@ItemType": "Pane" });
                _this.dashboardItem.panes.push(pane);
            },
            dispose: function () { }
        });
        this._disposables.push(ko.computed(function () {
            var newPanes = _this.dashboardItem.panes();
            var lastPaneSectionIndex = 1;
            for (; lastPaneSectionIndex < _this.sections().length; lastPaneSectionIndex++) {
                if (!(_this.sections()[lastPaneSectionIndex] instanceof _data_item_container_collection_surface_1.DataItemContainerCollectionSurface)) {
                    break;
                }
            }
            _this.sections.splice(1, lastPaneSectionIndex - 1);
            _this.dashboardItem.panes().forEach(function (pane, index) {
                createPaneSection(pane, index);
            });
        }));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Arguments));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.SeriesDimension));
    };
    ChartItemSurface.prototype.getPropertiesComposer = function () {
        return new _chart_item_properties_composer_1.ChartItemPropertiesComposer();
    };
    return ChartItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.ChartItemSurface = ChartItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("Chart", ChartItemSurface);
