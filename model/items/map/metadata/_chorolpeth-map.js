/**
* DevExpress Dashboard (_chorolpeth-map.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var delta_options_1 = require("../../options/delta-options");
exports.valueName = { propertyName: "valueName", modelName: "@ValueName", displayName: "DashboardWebStringId.Map.TooltipCaption", editor: _base_metadata_1.editorTemplates.text };
exports.chorolpethMapValue = { propertyName: _base_metadata_1.valuePropertyName, modelName: 'Value', displayName: 'DevExpress.DashboardWin.Internal.ChoroplethMapOptionsForm.valueMapCheckEdit.Properties.Caption', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.valueMapSerializationsInfo = [_base_metadata_1.itemType, _base_metadata_1.name, exports.chorolpethMapValue, exports.valueName];
exports.mapType = { propertyName: 'containerType', displayName: 'Map Type', editor: _base_metadata_1.editorTemplates.containerTypeSelector };
exports.deltaMapActualValue = { propertyName: _base_metadata_1.actualValuePropertyName, modelName: 'ActualValue', displayName: "DashboardStringId.ActualValueCaption", info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.deltaMapTargetValue = { propertyName: _base_metadata_1.targetValuePropertyName, modelName: 'TargetValue', displayName: "DashboardStringId.TargetValueCaption", info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.deltaMapDeltaOptions = { propertyName: 'deltaOptions', modelName: 'DeltaOptions', displayName: "DashboardWebStringId.Grid.DeltaOptions", type: delta_options_1.DeltaOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.actualValueName = { propertyName: "actualValueName", modelName: "@ActualValueName", displayName: "DashboardWebStringId.Map.TooltipActualValueCaption", editor: _base_metadata_1.editorTemplates.text };
exports.deltaName = { propertyName: "deltaName", modelName: "@DeltaName", displayName: "DashboardWebStringId.Map.TooltipDeltaCaption", editor: _base_metadata_1.editorTemplates.text };
exports.deltaMapSerializationsInfo = [_base_metadata_1.itemType, _base_metadata_1.name, exports.deltaMapActualValue, exports.deltaMapTargetValue, exports.actualValueName, exports.deltaName, exports.deltaMapDeltaOptions, _data_item_1.absoluteVariationNumericFormat, _data_item_1.percentVariationNumericFormat, _data_item_1.percentOfTargetNumericFormat];
