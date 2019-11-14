/**
* DevExpress Dashboard (_data-dashboard-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _dashboard_item_1 = require("./_dashboard-item");
exports.dataSource = { propertyName: "dataSource", modelName: "@DataSource", displayName: "DashboardStringId.DefaultDataSourceName", editor: _base_metadata_1.editorTemplates.text };
exports.filterString = { propertyName: "filterString", modelName: "@FilterString" };
exports.isMasterFilterCrossDataSource = { propertyName: "isMasterFilterCrossDataSource", modelName: "@IsMasterFilterCrossDataSource", displayName: "DashboardWebStringId.CrossDataSourceFiltering", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.itemColorScheme = { propertyName: "colorScheme", modelName: "ColorScheme", displayName: "DashboardWebStringId.DashboardMenuColorScheme", array: true };
exports.dataItemsSerializable = { propertyName: "dataItems", modelName: "DataItems", displayName: "DashboardWebStringId.DataSources.DataItems", array: true, editor: _base_metadata_1.editorTemplates.commonCollection };
exports.hiddenDimensions = { propertyName: "__hiddenDimensions", modelName: "HiddenDimensions", displayName: "DashboardWebStringId.Binding.HiddenDimensions", array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.hiddenMeasures = { propertyName: "__hiddenMeasures", modelName: "HiddenMeasures", displayName: "DashboardWebStringId.Binding.HiddenMeasures", array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.formatRules = { propertyName: "formatRules", modelName: "FormatRules", displayName: "DashboardWebStringId.FormatRules", array: true, editor: _base_metadata_1.editorTemplates.formatRules, visible: false };
exports.dataDashboardItemSerializationsInfo = _dashboard_item_1.dashboardItemSerializationsInfo.concat([exports.dataSource, _base_metadata_1.dataMember, exports.filterString, exports.isMasterFilterCrossDataSource, exports.dataItemsSerializable, exports.formatRules, exports.hiddenDimensions, exports.hiddenMeasures, exports.itemColorScheme]);
