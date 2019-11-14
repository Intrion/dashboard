/**
* DevExpress Dashboard (slice-table.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../../serializable-model");
var data_item_1 = require("../../data-item/data-item");
var _slice_table_1 = require("./metadata/_slice-table");
var _utils_1 = require("../../internal/_utils");
var SliceTable = (function (_super) {
    __extends(SliceTable, _super);
    function SliceTable(_dataItemProvider, modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._dataItemProvider = _dataItemProvider;
        _this.dimensions = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Dimensions, function (item) { return new data_item_1.DataItemLink(_dataItemProvider, item, serializer); });
        _this.measures = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.Measures, function (item) { return new data_item_1.DataItemLink(_dataItemProvider, item, serializer); });
        return _this;
    }
    SliceTable.prototype.getInfo = function () {
        return _slice_table_1.sliceTableSerializationsInfo;
    };
    SliceTable.prototype.push = function (bindings, dataItemType) {
        var _this = this;
        var targetArray = dataItemType === 'Dimension' ? this.dimensions : this.measures;
        targetArray.push.apply(targetArray, bindings.map(function (link) { return data_item_1.DataItemLink.create(_this._dataItemProvider, link); }));
    };
    __decorate([
        _utils_1.collectionItemType("Dimension")
    ], SliceTable.prototype, "dimensions", void 0);
    __decorate([
        _utils_1.collectionItemType("Measure")
    ], SliceTable.prototype, "measures", void 0);
    return SliceTable;
}(serializable_model_1.SerializableModel));
exports.SliceTable = SliceTable;
