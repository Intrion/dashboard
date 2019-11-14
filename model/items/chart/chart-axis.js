/**
* DevExpress Dashboard (chart-axis.js)
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
var _chart_axis_1 = require("./metadata/_chart-axis");
var ChartAxis = (function (_super) {
    __extends(ChartAxis, _super);
    function ChartAxis(JSON, serializer) {
        if (JSON === void 0) { JSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, JSON, serializer) || this;
    }
    ChartAxis.prototype.getInfo = function () {
        return _chart_axis_1.chartAxisSerializationsInfo;
    };
    return ChartAxis;
}(serializable_model_1.SerializableModel));
exports.ChartAxis = ChartAxis;
var ChartAxisX = (function (_super) {
    __extends(ChartAxisX, _super);
    function ChartAxisX(JSON, serializer) {
        if (JSON === void 0) { JSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, JSON, serializer) || this;
    }
    ChartAxisX.prototype.getInfo = function () {
        return _chart_axis_1.chartAxisXSerializationsInfo;
    };
    return ChartAxisX;
}(ChartAxis));
exports.ChartAxisX = ChartAxisX;
var ChartAxisY = (function (_super) {
    __extends(ChartAxisY, _super);
    function ChartAxisY(JSON, serializer) {
        if (JSON === void 0) { JSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, JSON, serializer) || this;
    }
    ChartAxisY.prototype.getInfo = function () {
        return _chart_axis_1.chartAxisYSerializationsInfo;
    };
    return ChartAxisY;
}(ChartAxis));
exports.ChartAxisY = ChartAxisY;
var ScatterChartAxisY = (function (_super) {
    __extends(ScatterChartAxisY, _super);
    function ScatterChartAxisY(JSON, serializer) {
        if (JSON === void 0) { JSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, JSON, serializer) || this;
    }
    ScatterChartAxisY.prototype.getInfo = function () {
        return _chart_axis_1.scatterChartAxisYSerializationsInfo;
    };
    return ScatterChartAxisY;
}(ChartAxisY));
exports.ScatterChartAxisY = ScatterChartAxisY;
var ChartSecondaryAxisY = (function (_super) {
    __extends(ChartSecondaryAxisY, _super);
    function ChartSecondaryAxisY(JSON, serializer) {
        if (JSON === void 0) { JSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, JSON, serializer) || this;
    }
    ChartSecondaryAxisY.prototype.getInfo = function () {
        return _chart_axis_1.chartSecondaryAxisYSerializationsInfo;
    };
    return ChartSecondaryAxisY;
}(ChartAxisY));
exports.ChartSecondaryAxisY = ChartSecondaryAxisY;
