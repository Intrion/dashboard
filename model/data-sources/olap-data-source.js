﻿/**
* DevExpress Dashboard (olap-data-source.js)
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
var _olap_data_source_1 = require("./metadata/_olap-data-source");
var OlapDataSource = (function (_super) {
    __extends(OlapDataSource, _super);
    function OlapDataSource(dataSourceJSON, serializer) {
        if (dataSourceJSON === void 0) { dataSourceJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, dataSourceJSON, serializer) || this;
    }
    OlapDataSource.prototype.getInfo = function () {
        return _olap_data_source_1.olapDataSourceSerializationsInfo;
    };
    OlapDataSource.prototype.getDisplayNamePrefix = function () {
        return "DashboardStringId.DefaultOlapDataSourceName";
    };
    OlapDataSource.prototype._getDefaultItemType = function () {
        return "OLAPDataSource";
    };
    return OlapDataSource;
}(data_source_1.DataSource));
exports.OlapDataSource = OlapDataSource;
