/**
* DevExpress Dashboard (dimension.js)
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
var data_item_1 = require("./data-item");
var _dimension_1 = require("./metadata/_dimension");
var ko = require("knockout");
var Dimension = (function (_super) {
    __extends(Dimension, _super);
    function Dimension(dataItemJSON, serializer) {
        if (dataItemJSON === void 0) { dataItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataItemJSON, serializer) || this;
        _this.realSortMode = ko.computed({
            read: function () {
                if (_this.sortMeasure())
                    return _this.sortMeasure();
                var valueModes = ["DXDisplayText", "DXValue", "DXID", "DXKey"];
                var actualModes = ["DisplayText", "Value", "ID", "Key"];
                return valueModes[actualModes.indexOf(_this.sortMode())];
            },
            write: function (val) {
                var valueModes = ["DXDisplayText", "DXValue", "DXID", "DXKey"];
                var actualModes = ["DisplayText", "Value", "ID", "Key"];
                if (valueModes.indexOf(val) !== -1) {
                    _this.sortMode(actualModes[valueModes.indexOf(val)]);
                    _this.sortMeasure(null);
                }
                else {
                    _this.sortMode("Value");
                    _this.sortMeasure(val);
                }
            }
        });
        return _this;
    }
    Dimension.prototype.getInfo = function () {
        return _dimension_1.dimensionItemSerializationsInfo;
    };
    Dimension.prototype.grabFrom = function (dataItem) {
        _super.prototype.grabFrom.call(this, dataItem);
        if (!(dataItem instanceof Dimension))
            return;
        this.sortOrder(dataItem.sortOrder());
        this.sortMeasure(dataItem.sortMeasure());
        this.sortMode(dataItem.sortMode());
        this.dateTimeGroupInterval(dataItem.dateTimeGroupInterval());
        this.textGroupInterval(dataItem.textGroupInterval());
        this.isDiscreteNumericScale(dataItem.isDiscreteNumericScale());
        this.groupChildValues(dataItem.groupChildValues());
        this.coloringMode(dataItem.coloringMode());
        this.topNOptionsEnabled(dataItem.topNOptionsEnabled());
        this.topNOptionsMode(dataItem.topNOptionsMode());
        this.topNOptionsCount(dataItem.topNOptionsCount());
        this.topNOptionsMeasureName(dataItem.topNOptionsMeasureName());
        this.topNOptionsShowOthers(dataItem.topNOptionsShowOthers());
        this.groupIndex(dataItem.groupIndex());
    };
    Dimension.prototype.isDefinitionEquals = function (dataItem) {
        return _super.prototype.isDefinitionEquals.call(this, dataItem) && (dataItem instanceof Dimension) &&
            this.dateTimeGroupInterval() === dataItem.dateTimeGroupInterval() && this.textGroupInterval() == dataItem.textGroupInterval();
    };
    Dimension.prototype._getDefaultItemType = function () {
        return "Dimension";
    };
    return Dimension;
}(data_item_1.DataItem));
exports.Dimension = Dimension;
