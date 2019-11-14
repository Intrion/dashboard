/**
* DevExpress Dashboard (_sql-data-source.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var connection_1 = require("../connection");
var _data_source_1 = require("./_data-source");
exports.queries = { propertyName: "queries", modelName: "Queries", array: true };
exports.selectedTables = { propertyName: "selectedTables", modelName: "SelectedTables", array: true };
exports.connection = { propertyName: 'connection', modelName: 'Connection', type: connection_1.SqlConnection };
exports.sqlDataSourceSerializationsInfo = _data_source_1.dataSourceSerializationsInfo.concat([exports.queries, exports.connection]);
