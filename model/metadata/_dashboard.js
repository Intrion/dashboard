/**
* DevExpress Dashboard (_dashboard.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var title_1 = require("../title");
var _title_1 = require("./_title");
var _base_metadata_1 = require("./_base-metadata");
exports.currencyCultureName = { propertyName: "currencyCultureName", modelName: "@CurrencyCulture" };
exports.dashboardTitle = { propertyName: "title", modelName: "Title", displayName: "DashboardStringId.Title", type: title_1.DashboardTitle, info: _title_1.dashboardTitleSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.items = { propertyName: "items", modelName: "Items", displayName: "DashboardWebStringId.Dashboard.Items", array: true };
exports.parameters = { propertyName: "parameters", modelName: "Parameters", displayName: "DashboardWebStringId.DashboardParameters", array: true };
exports.colorScheme = { propertyName: "colorScheme", modelName: "ColorScheme", displayName: "DashboardWebStringId.DashboardMenuColorScheme", array: true };
exports.groups = { propertyName: "groups", modelName: "Groups", displayName: "DashboardWebStringId.Dashboard.Groups", array: true };
exports.dataSources = { propertyName: "dataSources", modelName: "DataSources", displayName: "DashboardWebStringId.DashboardMenuDataSources", array: true };
exports.layout = { propertyName: "layout", modelName: "LayoutTree" };
exports.dashboardSerializationsInfo = [exports.dashboardTitle, exports.items, exports.groups, exports.dataSources, exports.currencyCultureName, exports.layout, exports.parameters, exports.colorScheme];
