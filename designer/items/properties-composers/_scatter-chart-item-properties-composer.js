/**
* DevExpress Dashboard (_scatter-chart-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _chart_item_1 = require("../../../model/items/chart/metadata/_chart-item");
var _display_name_provider_1 = require("../../_display-name-provider");
var _chart_axis_1 = require("../../../model/items/chart/metadata/_chart-axis");
var ko = require("knockout");
var ScatterChartItemPropertiesComposer = (function () {
    function ScatterChartItemPropertiesComposer() {
    }
    ScatterChartItemPropertiesComposer.prototype.composeTabs = function (model, dataSourceBrowser) {
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model, [_chart_item_1.chartRotated])),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.AxisX, "DashboardWebStringId.Chart.AxisX", _shared_composers_1.SharedComposers.getAxisWrapper(model.axisX, ko.computed(function () {
                return model.axisXMeasure() && _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, model, model.axisXMeasure());
            }), null)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.AxisY, "DashboardWebStringId.Chart.AxisY", _shared_composers_1.SharedComposers.getAxisWrapper(model.axisY, ko.computed(function () {
                return model.axisYMeasure() && _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, model, model.axisYMeasure());
            }), _chart_axis_1.alwaysShowZeroLevelScatter)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Labels, "DashboardWebStringId.AccordionTab.Labels", _shared_composers_1.SharedComposers.getLabelsWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Legend, "DashboardWebStringId.AccordionTab.ChartLegend", _shared_composers_1.SharedComposers.getLegendWrapper(model))
        ];
        return result;
    };
    return ScatterChartItemPropertiesComposer;
}());
exports.ScatterChartItemPropertiesComposer = ScatterChartItemPropertiesComposer;
