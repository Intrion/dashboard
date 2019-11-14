/**
* DevExpress Dashboard (excel-data-source.js)
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
var data_source_1 = require("./data-source");
var _excel_data_source_1 = require("./metadata/_excel-data-source");
var ExcelDataSource = (function (_super) {
    __extends(ExcelDataSource, _super);
    function ExcelDataSource(dataSourceJSON, serializer) {
        if (dataSourceJSON === void 0) { dataSourceJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataSourceJSON, serializer) || this;
        _this.hasCalculatedFields = true;
        _this.hasFilter = true;
        return _this;
    }
    ExcelDataSource.prototype.getInfo = function () {
        return _excel_data_source_1.excelDataSourceSerializationsInfo;
    };
    ExcelDataSource.prototype.getDisplayNamePrefix = function () {
        return "DashboardStringId.DefaultExcelDataSourceName";
    };
    ExcelDataSource.prototype._getDefaultItemType = function () {
        return "ExcelDataSource";
    };
    return ExcelDataSource;
}(data_source_1.DataSource));
exports.ExcelDataSource = ExcelDataSource;
