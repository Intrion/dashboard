/**
* DevExpress Dashboard (data-source.js)
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
var serializable_model_1 = require("../serializable-model");
var calculated_field_1 = require("./calculated-field");
var DataSource = (function (_super) {
    __extends(DataSource, _super);
    function DataSource(dataSourceJSON, serializer) {
        if (dataSourceJSON === void 0) { dataSourceJSON = {}; }
        var _this = _super.call(this, dataSourceJSON, serializer) || this;
        _this.hasCalculatedFields = false;
        _this.supportDataMembers = false;
        _this.hasFilter = false;
        _this.calculatedFields = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dataSourceJSON.CalculatedFields, function (item) { return new calculated_field_1.CalculatedField(item, serializer); });
        return _this;
    }
    DataSource.prototype.getJson = function () {
        return new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false }).serialize(this);
    };
    DataSource.prototype.getUniqueNamePrefix = function () {
        return _super.prototype._getUniqueNamePrefix.call(this);
    };
    return DataSource;
}(serializable_model_1.TypedSerializableModel));
exports.DataSource = DataSource;
