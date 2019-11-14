/**
* DevExpress Dashboard (map-legend.js)
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
var _map_legend_1 = require("./metadata/_map-legend");
var MapLegendBase = (function (_super) {
    __extends(MapLegendBase, _super);
    function MapLegendBase(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    MapLegendBase.prototype.getInfo = function () {
        return _map_legend_1.mapLegendBaseSerializationsInfo;
    };
    return MapLegendBase;
}(serializable_model_1.SerializableModel));
exports.MapLegendBase = MapLegendBase;
var WeightedLegend = (function (_super) {
    __extends(WeightedLegend, _super);
    function WeightedLegend(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    WeightedLegend.prototype.getInfo = function () {
        return _map_legend_1.weightedLegendSerializationsInfo;
    };
    return WeightedLegend;
}(MapLegendBase));
exports.WeightedLegend = WeightedLegend;
var MapLegend = (function (_super) {
    __extends(MapLegend, _super);
    function MapLegend(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer) || this;
    }
    MapLegend.prototype.getInfo = function () {
        return _map_legend_1.mapLegendSerializationsInfo;
    };
    return MapLegend;
}(MapLegendBase));
exports.MapLegend = MapLegend;
