/**
* DevExpress Dashboard (_custom-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_dashboard_item_1 = require("../../metadata/_data-dashboard-item");
exports.customItemType = { propertyName: 'customItemType', modelName: '@CustomItemType' };
exports.sliceTables = { propertyName: 'sliceTables', modelName: 'SliceTables', displayName: 'SliceTables', editor: _base_metadata_1.editorTemplates.commonCollection, array: true, category: _base_metadata_1.PropertyCategory.Data };
exports.interactivityTargets = { propertyName: 'interactivityTargets', modelName: 'InteractivityTargets', array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.coloringDimensions = { propertyName: 'coloringDimensions', modelName: 'ColoringDimensions', array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.coloringMeasures = { propertyName: 'coloringMeasures', modelName: 'ColoringMeasures', array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.customDashboardItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([exports.customItemType, exports.sliceTables, exports.interactivityTargets]);
