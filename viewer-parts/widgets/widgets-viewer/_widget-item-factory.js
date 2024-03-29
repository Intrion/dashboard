﻿/**
* DevExpress Dashboard (_widget-item-factory.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chart_1 = require("devextreme/viz/chart");
var pie_chart_1 = require("devextreme/viz/pie_chart");
var circular_gauge_1 = require("devextreme/viz/circular_gauge");
var linear_gauge_1 = require("devextreme/viz/linear_gauge");
function getAdditionalCircularGaugeOptions(container, options) {
    return null;
}
var getAdditionalOptionsHandlers = {
    'circulargauge': getAdditionalCircularGaugeOptions
};
exports.widgetItemFactory = {
    createWidget: function (widgetType, container, options) {
        switch ((widgetType || '').toLowerCase()) {
            case 'chart':
                var chart = chart_1.default.getInstance(container);
                if (chart) {
                    chart.option(options);
                }
                else {
                    chart = new chart_1.default(container, options);
                }
                return chart;
            case 'piechart':
                var pieChart = pie_chart_1.default.getInstance(container);
                if (pieChart) {
                    pieChart.option(options);
                }
                else {
                    pieChart = new pie_chart_1.default(container, options);
                }
                return pieChart;
            case 'circulargauge':
                var circularGauge = circular_gauge_1.default.getInstance(container);
                if (circularGauge) {
                    circularGauge.option(options);
                }
                else {
                    circularGauge = new circular_gauge_1.default(container, options);
                }
                return circularGauge;
            case 'lineargauge':
                var linearGauge = linear_gauge_1.default.getInstance(container);
                if (linearGauge) {
                    linearGauge.option(options);
                }
                else {
                    linearGauge = new linear_gauge_1.default(container, options);
                }
                return linearGauge;
            default:
                return null;
        }
    },
    getAdditionalOptions: function (widgetType, container, options) {
        var handler = getAdditionalOptionsHandlers[(widgetType || '').toLowerCase()];
        return handler ? handler(container, options) : null;
    }
};
