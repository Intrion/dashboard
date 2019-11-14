/**
* DevExpress Dashboard (chorolpeth-map.js)
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
var _chorolpeth_map_1 = require("./metadata/_chorolpeth-map");
var ChoroplethMap = (function (_super) {
    __extends(ChoroplethMap, _super);
    function ChoroplethMap(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._displayNameSeparator = "vs";
        return _this;
    }
    return ChoroplethMap;
}(serializable_model_1.TypedSerializableModel));
exports.ChoroplethMap = ChoroplethMap;
var ValueMap = (function (_super) {
    __extends(ValueMap, _super);
    function ValueMap(dataItemProvider, modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        dataItemProvider._attachDataItem(_this, _chorolpeth_map_1.chorolpethMapValue.propertyName);
        return _this;
    }
    ValueMap.prototype.getInfo = function () {
        return _chorolpeth_map_1.valueMapSerializationsInfo;
    };
    ValueMap.prototype._getBindingModel = function () {
        return [
            {
                propertyName: _chorolpeth_map_1.chorolpethMapValue.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardWebStringId.Binding.SetValue"
            }
        ];
    };
    ValueMap.prototype._getDefaultItemType = function () { return "ValueMap"; };
    return ValueMap;
}(ChoroplethMap));
exports.ValueMap = ValueMap;
var DeltaMap = (function (_super) {
    __extends(DeltaMap, _super);
    function DeltaMap(dataItemProvider, modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        dataItemProvider._attachDataItem(_this, _chorolpeth_map_1.deltaMapActualValue.propertyName);
        dataItemProvider._attachDataItem(_this, _chorolpeth_map_1.deltaMapTargetValue.propertyName);
        return _this;
    }
    DeltaMap.prototype.getInfo = function () {
        return _chorolpeth_map_1.deltaMapSerializationsInfo;
    };
    DeltaMap.prototype._getBindingModel = function () {
        return [
            {
                propertyName: _chorolpeth_map_1.deltaMapActualValue.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.ActualValueCaption"
            },
            {
                propertyName: _chorolpeth_map_1.deltaMapTargetValue.propertyName,
                dataItemType: 'Measure',
                emptyPlaceholder: "DashboardStringId.TargetValueCaption"
            }
        ];
    };
    DeltaMap.prototype._getDefaultItemType = function () { return "DeltaMap"; };
    return DeltaMap;
}(ChoroplethMap));
exports.DeltaMap = DeltaMap;
