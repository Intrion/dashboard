/**
* DevExpress Dashboard (_data-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var data_item_format_1 = require("../data-item-format");
exports.dataItem = { propertyName: "dataItem", displayName: "DashboardWebStringId.DataItem", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.uniqueName = { propertyName: "uniqueName", modelName: "@DefaultId" };
exports.dataItemDataMember = { propertyName: "dataMember", modelName: "@DataMember" };
exports.numericFormat = { propertyName: 'numericFormat', modelName: 'NumericFormat', displayName: 'DashboardWebStringId.TextBoxFormatText', type: data_item_format_1.DataItemNumericFormat, template: "dx-dashboard-numeric-format-editor", editor: _base_metadata_1.editorTemplates.numericFormatEditor };
exports.dateTimeFormat = { propertyName: 'dateTimeFormat', modelName: 'DateTimeFormat', displayName: 'DashboardWebStringId.TextBoxFormatText', type: data_item_format_1.DataItemDateTimeFormat, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.absoluteVariationNumericFormat = { propertyName: "absoluteVariationNumericFormat", modelName: "AbsoluteVariationNumericFormat", type: data_item_format_1.AbsoluteVariationNumericFormat, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.percentVariationNumericFormat = { propertyName: "percentVariationNumericFormat", modelName: "PercentVariationNumericFormat", type: data_item_format_1.PercentVariationNumericFormat, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.percentOfTargetNumericFormat = { propertyName: "percentOfTargetNumericFormat", modelName: "PercentOfTargetNumericFormat", type: data_item_format_1.PercentOfTargetNumericFormat, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.showValues = { propertyName: "showValues", modelName: "@ShowValues", displayName: "DashboardWebStringId.DataItem.ShowValues", defaultVal: true, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.showTotals = { propertyName: "showTotals", modelName: "@ShowTotals", displayName: "DashboardWebStringId.DataItem.ShowTotals", defaultVal: true, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.showGrandTotals = { propertyName: "showGrandTotals", modelName: "@ShowGrandTotals", displayName: "DashboardWebStringId.DataItem.ShowGrandTotals", defaultVal: true, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.dataItemLinkSerializationsInfo = [_base_metadata_1.itemType, exports.uniqueName, exports.dataItem];
exports.dataItemSerializationsInfo = [_base_metadata_1.itemType, exports.dataItemDataMember, _base_metadata_1.name, exports.uniqueName, exports.numericFormat, exports.dateTimeFormat, exports.showValues, exports.showTotals, exports.showGrandTotals];
