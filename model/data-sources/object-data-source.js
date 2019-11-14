﻿/**
* DevExpress Dashboard (object-data-source.js)
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
var _object_data_source_1 = require("./metadata/_object-data-source");
var ObjectDataSource = (function (_super) {
    __extends(ObjectDataSource, _super);
    function ObjectDataSource(dataSourceJSON, serializer) {
        if (dataSourceJSON === void 0) { dataSourceJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataSourceJSON, serializer) || this;
        _this.hasCalculatedFields = true;
        _this.hasFilter = true;
        return _this;
    }
    ObjectDataSource.prototype.getInfo = function () {
        return _object_data_source_1.objectDataSourceSerializationsInfo;
    };
    ObjectDataSource.prototype.getDisplayNamePrefix = function () {
        return "DashboardStringId.DefaultObjectDataSourceName";
    };
    ObjectDataSource.prototype._getDefaultItemType = function () {
        return "ObjectDataSource";
    };
    return ObjectDataSource;
}(data_source_1.DataSource));
exports.ObjectDataSource = ObjectDataSource;
