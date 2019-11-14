/**
* DevExpress Dashboard (gauge.js)
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
var kpi_element_1 = require("../kpi/kpi-element");
var _gauge_1 = require("./metadata/_gauge");
var Gauge = (function (_super) {
    __extends(Gauge, _super);
    function Gauge(dataItemProvider, modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataItemProvider, modelJson, serializer) || this;
        _this.__targetValue._specifics.skipFormatting = true;
        return _this;
    }
    Gauge.prototype.getInfo = function () {
        return _gauge_1.gaugeSerializationsInfo;
    };
    return Gauge;
}(kpi_element_1.KpiElement));
exports.Gauge = Gauge;
