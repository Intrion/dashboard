/**
* DevExpress Dashboard (_chorolpeth-map-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var _map_item_1 = require("./_map-item");
exports.maps = {
    propertyName: 'maps',
    modelName: 'Maps',
    displayName: "DashboardWebStringId.Binding.Maps",
    editor: _base_metadata_1.editorTemplates.commonCollection,
    array: true
};
exports.includeSummaryValueToShapeTitle = {
    propertyName: 'includeSummaryValueToShapeTitle',
    modelName: '@IncludeSummaryValueToShapeTitle',
    displayName: "DashboardWebStringId.Map.IncludeSummaryValueToShapeTitle",
    defaultVal: false,
    editor: _base_metadata_1.editorTemplates.boolYesNo,
    from: _base_metadata_1.parseBool
};
exports.attributeDimension = {
    propertyName: '__attributeDimension',
    modelName: 'AttributeDimension',
    displayName: "DashboardWebStringId.Map.AttributeDimension",
    info: _data_item_1.dataItemLinkSerializationsInfo,
    editor: _base_metadata_1.editorTemplates.objecteditor
};
exports.attributeName = {
    propertyName: 'attributeName',
    modelName: '@AttributeName',
    displayName: "DashboardWebStringId.Map.AttributeName",
    defaultVal: '',
    editor: _base_metadata_1.editorTemplates.combobox,
    category: _base_metadata_1.PropertyCategory.Map
};
exports.tooltipAttributeName = {
    propertyName: 'tooltipAttributeName',
    modelName: '@ToolTopAttributeName',
    displayName: "DashboardWebStringId.Map.TooltipAttribute",
    defaultVal: "",
    editor: _base_metadata_1.editorTemplates.combobox,
    category: _base_metadata_1.PropertyCategory.Map
};
exports.choroplethMapDashboardItemSerializationsInfo = _map_item_1.mapDashboardItemSerializationsInfo.concat([exports.maps, exports.attributeDimension, exports.attributeName, exports.includeSummaryValueToShapeTitle, exports.tooltipAttributeName, _map_item_1.colorLegend]);
