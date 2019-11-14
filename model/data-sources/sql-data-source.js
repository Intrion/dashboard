/**
* DevExpress Dashboard (sql-data-source.js)
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
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var data_source_1 = require("./data-source");
var _sql_data_source_1 = require("./metadata/_sql-data-source");
var SqlDataSource = (function (_super) {
    __extends(SqlDataSource, _super);
    function SqlDataSource(dataSourceJSON, serializer) {
        if (dataSourceJSON === void 0) { dataSourceJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataSourceJSON, serializer) || this;
        _this.queries = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dataSourceJSON.Queries, function (item) {
            if (item["@Type"] === dx_querybuilder_1.default.Analytics.Data.Utils.SqlQueryType.customSqlQuery) {
                return new dx_querybuilder_1.default.Analytics.Data.CustomSqlQuery(item, null, serializer);
            }
            else if (item["@Type"] === dx_querybuilder_1.default.Analytics.Data.Utils.SqlQueryType.tableQuery) {
                return new dx_querybuilder_1.default.Analytics.Data.TableQuery(item, null, serializer);
            }
            else if (item["@Type"] === dx_querybuilder_1.default.Analytics.Data.Utils.SqlQueryType.storedProcQuery) {
                return new dx_querybuilder_1.default.Analytics.Data.StoredProcQuery(item, null, serializer);
            }
            else {
                throw new Error("Unknown sql query type.");
            }
        });
        _this.hasCalculatedFields = true;
        _this.supportDataMembers = true;
        return _this;
    }
    SqlDataSource.prototype.getInfo = function () {
        return _sql_data_source_1.sqlDataSourceSerializationsInfo;
    };
    SqlDataSource.prototype.getDisplayNamePrefix = function () {
        return "DashboardStringId.DefaultSqlDataSourceName";
    };
    SqlDataSource.prototype._getDefaultItemType = function () {
        return "SqlDataSource";
    };
    return SqlDataSource;
}(data_source_1.DataSource));
exports.SqlDataSource = SqlDataSource;
