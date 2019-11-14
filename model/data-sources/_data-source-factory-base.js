/**
* DevExpress Dashboard (_data-source-factory-base.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var object_data_source_1 = require("./object-data-source");
var sql_data_source_1 = require("./sql-data-source");
var olap_data_source_1 = require("./olap-data-source");
var ef_data_source_1 = require("./ef-data-source");
var excel_data_source_1 = require("./excel-data-source");
var extract_data_source_1 = require("./extract-data-source");
var json_data_source_1 = require("./json-data-source");
var xpo_data_source_1 = require("./xpo-data-source");
exports._baseDataSourceTypesMap = {
    "ObjectDataSource": object_data_source_1.ObjectDataSource,
    "SqlDataSource": sql_data_source_1.SqlDataSource,
    "OLAPDataSource": olap_data_source_1.OlapDataSource,
    "EFDataSource": ef_data_source_1.EFDataSource,
    "ExcelDataSource": excel_data_source_1.ExcelDataSource,
    "ExtractFileDataSource": extract_data_source_1.ExtractDataSource,
    "JsonDataSource": json_data_source_1.JsonDataSource,
    "XPObjectSource": xpo_data_source_1.XpoDataSource
};
