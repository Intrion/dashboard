/**
* DevExpress Dashboard (_federation-data-source.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_source_1 = require("./_data-source");
var _base_metadata_1 = require("../../metadata/_base-metadata");
exports.aliasProperty = { propertyName: "alias", modelName: "@Alias" };
exports.queryNodeSerializationsInfo = [_base_metadata_1.itemType, exports.aliasProperty];
exports.queryNodes = { propertyName: "queries", modelName: "Queries", array: true };
exports.idProperty = { propertyName: "id", modelName: "@ID" };
exports.contextItemSerializationsInfo = [_base_metadata_1.itemType, exports.idProperty];
exports.context = { propertyName: "context", modelName: "Context", array: true };
exports.dataSourceProperty = { propertyName: "dataSource", modelName: "DataSource" };
exports.dataMemberProperty = { propertyName: "dataMember", modelName: "DataMember" };
exports.sourceSerializationsInfo = [_base_metadata_1.itemType, exports.dataSourceProperty, exports.dataMemberProperty, _base_metadata_1.name];
exports.sources = { propertyName: "sources", modelName: "Sources", array: true };
exports.federationDataSourceSerializationsInfo = _data_source_1.dataSourceSerializationsInfo.concat([exports.queryNodes, exports.context, exports.sources]);
