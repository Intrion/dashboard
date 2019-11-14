/**
* DevExpress Dashboard (_color-scheme-entry.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _measure_1 = require("../../data-item/metadata/_measure");
var color_1 = require("../../color");
exports.colorSchemeDataSource = { propertyName: 'dataSource', modelName: '@DataSource', displayName: 'DevExpress.DashboardCommon.DynamicListLookUpSettings.DataSource', defaultVal: "", editor: _base_metadata_1.editorTemplates.text };
exports.colorSchemeDataMember = { propertyName: 'dataMember', modelName: '@DataMember', displayName: 'DashboardStringId.DataSourceDataMember', defaultVal: "", editor: _base_metadata_1.editorTemplates.text };
exports.colorSchemeColor = { propertyName: 'color', modelName: '@Color', displayName: "DashboardStringId.DescriptionItemColor", defaultVal: null, editor: _base_metadata_1.editorTemplates.text, from: color_1.Color._colorFromModel, toJsonObject: color_1.Color._colorToModel };
exports.paletteIndex = { propertyName: 'paletteIndex', modelName: '@PaletteIndex', displayName: "DashboardStringId.ColorPaletteIndex", defaultVal: null, editor: _base_metadata_1.editorTemplates.numeric };
exports.colorSchemeSummaryType = { propertyName: 'summaryType', modelName: '@SummaryType', displayName: 'DashboardWebStringId.SummaryType', defaultVal: "Sum", editor: _base_metadata_1.editorTemplates.text };
exports.measureKeySerializationInfo = [exports.colorSchemeDataMember, exports.colorSchemeSummaryType, _measure_1.calculation, _measure_1.windowDefinition, _measure_1.expression];
exports.dimensionKeys = { propertyName: "dimensionKeys", modelName: "DimensionKeys", displayName: "DashboardStringId.DescriptionDimensions", array: true };
exports.measureKey = { propertyName: "measureKeys", modelName: "MeasureKey", displayName: "DashboardStringId.DescriptionMeasures", array: true, info: exports.measureKeySerializationInfo };
exports.colorSchemeEntrySerializationInfo = [_base_metadata_1.itemType, exports.colorSchemeDataSource, exports.colorSchemeDataMember, exports.colorSchemeColor, exports.paletteIndex, exports.dimensionKeys, exports.measureKey];
exports.dimensionInfoDateTimeGroupInterval = { propertyName: 'dateTimeGroupInterval', modelName: '@DateTimeGroupInterval', displayName: "DashboardWebStringId.Colorization.GroupInterval", defaultVal: "Year", editor: _base_metadata_1.editorTemplates.text };
exports.definitionInfo = [exports.colorSchemeDataMember, exports.dimensionInfoDateTimeGroupInterval];
exports.colorShemetype = { propertyName: 'type', modelName: '@Type', displayName: 'DashboardWebStringId.Type', editor: _base_metadata_1.editorTemplates.text };
exports.dimensionValue = { propertyName: 'value', modelName: '@Value', displayName: "DashboardStringId.ValueCaption", editor: _base_metadata_1.editorTemplates.text };
exports.valueInfo = [exports.colorShemetype, exports.dimensionValue];
exports.definition = { propertyName: 'definition', modelName: 'Definition', info: exports.definitionInfo, defaultVal: "", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.colorShemeValue = { propertyName: 'value', modelName: 'Value', displayName: "DashboardStringId.ValueCaption", info: exports.valueInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.dimensionKeySerializationInfo = [exports.definition, exports.colorShemeValue];
