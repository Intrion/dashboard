/**
* DevExpress Dashboard (measure.js)
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
var _measure_1 = require("./metadata/_measure");
var Measure = (function (_super) {
    __extends(Measure, _super);
    function Measure(dataItemJSON, serializer) {
        if (dataItemJSON === void 0) { dataItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataItemJSON, serializer) || this;
        _this.expression.subscribe(function (val) {
            if (val !== undefined) {
                _this.calculation.calculation(undefined);
            }
        });
        return _this;
    }
    Measure.prototype.getInfo = function () {
        return _measure_1.measureItemSerializationsInfo;
    };
    Measure.prototype.grabFrom = function (dataItem) {
        _super.prototype.grabFrom.call(this, dataItem);
        if (!(dataItem instanceof Measure))
            return;
        this.summaryType(dataItem.summaryType());
    };
    Measure.prototype.isDefinitionEquals = function (dataItem) {
        return _super.prototype.isDefinitionEquals.call(this, dataItem) && (dataItem instanceof Measure) &&
            this.summaryType() === dataItem.summaryType() && this.expression() === dataItem.expression() &&
            this.calculation.calculationType() === dataItem.calculation.calculationType() &&
            this.windowDefinition.equals(dataItem.windowDefinition);
    };
    Measure.prototype._hasCalculation = function () {
        return !this.calculation.isEmpty() || !!this.expression();
    };
    Measure.prototype._getDefaultItemType = function () {
        return "Measure";
    };
    return Measure;
}(data_item_1.DataItem));
exports.Measure = Measure;
