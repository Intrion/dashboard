/**
* DevExpress Dashboard (_kpi-element.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delta_options_1 = require("../../options/delta-options");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
exports.kpiItemdeltaOptions = { propertyName: 'deltaOptions', modelName: 'DeltaOptions', displayName: "DashboardWebStringId.Grid.DeltaOptions", type: delta_options_1.DeltaOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.kpiItemActualValue = { propertyName: _base_metadata_1.actualValuePropertyName, modelName: "ActualValue", info: _data_item_1.dataItemLinkSerializationsInfo, displayName: "DashboardStringId.ActualValueCaption", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.kpiItemTargetValue = { propertyName: _base_metadata_1.targetValuePropertyName, modelName: "TargetValue", info: _data_item_1.dataItemLinkSerializationsInfo, displayName: "DashboardStringId.TargetValueCaption", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.kpiElementSerializationsInfo = [_base_metadata_1.itemType, _base_metadata_1.name, exports.kpiItemdeltaOptions, exports.kpiItemActualValue, exports.kpiItemTargetValue, _data_item_1.absoluteVariationNumericFormat, _data_item_1.percentVariationNumericFormat, _data_item_1.percentOfTargetNumericFormat];
