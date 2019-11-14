/**
* DevExpress Dashboard (_gauge.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _kpi_element_1 = require("../../kpi/metadata/_kpi-element");
var data_item_format_1 = require("../../../data-item/data-item-format");
exports.minimum = { propertyName: 'minimum', modelName: '@Minimum', displayName: "DashboardWebStringId.Gauge.Min", defaultVal: NaN, editor: _base_metadata_1.editorTemplates.gaugeScale, from: _base_metadata_1.floatFromModel, toJsonObject: _base_metadata_1.nullableFloatToModel };
exports.maximum = { propertyName: 'maximum', modelName: '@Maximum', displayName: "DashboardWebStringId.Gauge.Max", defaultVal: NaN, editor: _base_metadata_1.editorTemplates.gaugeScale, from: _base_metadata_1.floatFromModel, toJsonObject: _base_metadata_1.nullableFloatToModel };
exports.scaleLabelNumericFormat = { propertyName: 'scaleLabelNumericFormat', modelName: 'ScaleLabelNumericFormat', displayName: 'DashboardWebStringId.TextBoxFormatText', type: data_item_format_1.DataItemNumericFormat, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.gaugeSerializationsInfo = _kpi_element_1.kpiElementSerializationsInfo.concat([exports.minimum, exports.maximum, exports.scaleLabelNumericFormat]);
