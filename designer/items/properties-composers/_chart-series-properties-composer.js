/**
* DevExpress Dashboard (_chart-series-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var chart_series_1 = require("../../../model/items/chart/chart-series");
var chart_series_creator_1 = require("../../../model/items/chart/chart-series-creator");
var _accordion_tab_1 = require("../../_accordion-tab");
var _chart_series_1 = require("../../../model/items/chart/metadata/_chart-series");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _dashboard_item_coloring_options_1 = require("../../../model/items/options/metadata/_dashboard-item-coloring-options");
var _shared_composers_1 = require("./_shared-composers");
var _container_type_selector_1 = require("../container-type-selector/_container-type-selector");
var _display_name_provider_1 = require("../../_display-name-provider");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var ChartSeriesPropertiesComposer = (function () {
    function ChartSeriesPropertiesComposer(_containerTypesMap, _allowConfigurePointLabels, _allowSecondaryAxis) {
        if (_containerTypesMap === void 0) { _containerTypesMap = chart_series_creator_1.ChartSeriesCreator.chartSeriesViewTypesMap; }
        if (_allowConfigurePointLabels === void 0) { _allowConfigurePointLabels = true; }
        if (_allowSecondaryAxis === void 0) { _allowSecondaryAxis = true; }
        this._containerTypesMap = _containerTypesMap;
        this._allowConfigurePointLabels = _allowConfigurePointLabels;
        this._allowSecondaryAxis = _allowSecondaryAxis;
    }
    ChartSeriesPropertiesComposer.prototype.composeTabs = function (model, dashboardItem, containerType, dataSourceBrowser) {
        var typeTab = new _accordion_tab_1.TypeAccordionTab(_accordion_tab_1.KnownTabs.Type, "DashboardWebStringId.Type"), commonTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.Options"), pointLabelsTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.PointLabels, "DashboardWebStringId.AccordionTab.ScatterChartPointLabelOptions"), coloringTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ColoringOptions, "DashboardWebStringId.ColoringOptions"), result = [typeTab, commonTab, coloringTab, pointLabelsTab];
        this._fillSeriesTypeWrapper(typeTab, model, containerType);
        this._fillSeriesGeneralTab(commonTab, model, dashboardItem, dataSourceBrowser);
        if (model && model[_chart_series_1.plotOnSecondaryAxis.propertyName]) {
            coloringTab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                model: dashboardItem.coloringOptions,
                properties: [_dashboard_item_coloring_options_1.measuresColoringMode]
            }));
        }
        if (this._allowConfigurePointLabels) {
            pointLabelsTab.tabModel(_shared_composers_1.SharedComposers.getLabelsWrapper(model));
        }
        return result;
    };
    ChartSeriesPropertiesComposer.prototype._fillSeriesTypeWrapper = function (tab, model, containerType) {
        if (model) {
            var properties = [
                _chart_series_1.chartSeriesType
            ];
            var hightlightedTypes = [
                "Bar",
                "StackedBar",
                "Point",
                'Line',
                "Area",
                "RangeArea"
            ];
            tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                model: { containerType: new _container_type_selector_1.ContainerTypeSelector(this._containerTypesMap, containerType, chart_series_creator_1.ChartSeriesCreator.chartSeriesGroupLocalization, hightlightedTypes) },
                properties: properties
            }));
        }
    };
    ChartSeriesPropertiesComposer.prototype._showPointMarkersVisible = function (model) {
        var allowedTypesForShowPointMarkers = ["Line", "Spline", "StepLine", "StackedLine", "FullStackedLine", "SplineArea", "Area", "StepArea"];
        return (model instanceof chart_series_1.RangeSeries && model.seriesType() === "RangeArea") ||
            (model instanceof chart_series_1.SimpleSeries && allowedTypesForShowPointMarkers.indexOf(model.seriesType()) !== -1);
    };
    ChartSeriesPropertiesComposer.prototype._showIgnoreEmptyPointsVisible = function (model) {
        var stackedTypes = ["FullStackedLine", "StackedSplineArea", "FullStackedSplineArea", "StackedArea", "FullStackedArea"];
        if (model instanceof chart_series_1.SimpleSeries && stackedTypes.indexOf(model.seriesType()) !== -1)
            return true;
        else
            return this._showPointMarkersVisible(model);
    };
    ChartSeriesPropertiesComposer.prototype._fillSeriesGeneralTab = function (tab, model, dashboardItem, dataSourceBrowser) {
        var _this = this;
        if (model) {
            var properties = [
                __assign({ editorOptions: { placeholder: _display_name_provider_1.getDataItemContainerDisplayName(dataSourceBrowser, dashboardItem, model) } }, _base_metadata_1.name),
                _chart_series_1.plotOnSecondaryAxis,
                _chart_series_1.ignoreEmptyPoints,
                _chart_series_1.showPointMarkers
            ];
            var visibilityFilterRules = {};
            visibilityFilterRules[_chart_series_1.ignoreEmptyPoints.propertyName] = function (propertiesWrapper) { return _this._showIgnoreEmptyPointsVisible(propertiesWrapper.model); };
            visibilityFilterRules[_chart_series_1.showPointMarkers.propertyName] = function (propertiesWrapper) { return _this._showPointMarkersVisible(propertiesWrapper.model); };
            visibilityFilterRules[_chart_series_1.plotOnSecondaryAxis.propertyName] = function (propertiesWrapper) { return _this._allowSecondaryAxis; };
            tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                model: model,
                properties: properties,
                visibilityFilterRules: visibilityFilterRules
            }));
        }
    };
    return ChartSeriesPropertiesComposer;
}());
exports.ChartSeriesPropertiesComposer = ChartSeriesPropertiesComposer;
