/**
* DevExpress Dashboard (chart-pane.js)
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
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../../serializable-model");
var chart_series_creator_1 = require("./chart-series-creator");
var _chart_pane_1 = require("./metadata/_chart-pane");
var ChartPane = (function (_super) {
    __extends(ChartPane, _super);
    function ChartPane(dataItemProvider, dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.createSeriesByViewType = chart_series_creator_1.ChartSeriesCreator.getSeriesCreator(dataItemProvider);
        _this.series = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Series, function (item) { return chart_series_creator_1.ChartSeriesCreator.createSeries(dataItemProvider, item, serializer); });
        return _this;
    }
    ChartPane.prototype.getInfo = function () {
        return _chart_pane_1.chartPaneSerializationsInfo;
    };
    return ChartPane;
}(serializable_model_1.SerializableModel));
exports.ChartPane = ChartPane;
