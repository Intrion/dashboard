/**
* DevExpress Dashboard (xpo-data-source.js)
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
var _xpo_data_source_1 = require("./metadata/_xpo-data-source");
var XpoDataSource = (function (_super) {
    __extends(XpoDataSource, _super);
    function XpoDataSource(dataSourceJSON, serializer) {
        if (dataSourceJSON === void 0) { dataSourceJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataSourceJSON, serializer) || this;
        _this.hasFilter = true;
        _this.hasCalculatedFields = true;
        return _this;
    }
    XpoDataSource.prototype.getInfo = function () {
        return _xpo_data_source_1.xpoDataSourceSerializationsInfo;
    };
    XpoDataSource.prototype.getDisplayNamePrefix = function () {
        return "DashboardStringId.DefaultXpoDataSourceName";
    };
    XpoDataSource.prototype._getDefaultItemType = function () {
        return "XPObjectSource";
    };
    return XpoDataSource;
}(data_source_1.DataSource));
exports.XpoDataSource = XpoDataSource;
