/**
* DevExpress Dashboard (kpi-item.js)
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
var series_item_1 = require("../series-item");
var _kpi_item_1 = require("./metadata/_kpi-item");
var KpiItem = (function (_super) {
    __extends(KpiItem, _super);
    function KpiItem(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    KpiItem.prototype.getInfo = function () {
        return _kpi_item_1.kpiDashboardItemSerializationsInfo;
    };
    KpiItem.prototype._getMasterFilterMode = function () { return this.interactivityOptions.masterFilterMode(); };
    KpiItem.prototype._getDrillDownEnabled = function () { return this.interactivityOptions.isDrillDownEnabled(); };
    KpiItem.prototype._getIgnoreMasterFilter = function () { return this.interactivityOptions.ignoreMasterFilters(); };
    return KpiItem;
}(series_item_1.SeriesItem));
exports.KpiItem = KpiItem;
