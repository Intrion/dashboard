/**
* DevExpress Dashboard (_card.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var delta_options_1 = require("../../options/delta-options");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var sparkline_options_1 = require("../../options/sparkline-options");
var _kpi_element_1 = require("../../kpi/metadata/_kpi-element");
exports.cardDeltaOptions = { propertyName: 'cardDeltaOptions', modelName: 'CardDeltaOptions', displayName: "DashboardWebStringId.Grid.DeltaOptions", type: delta_options_1.CardDeltaOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.cardSparklineOptions = { propertyName: "sparklineOptions", modelName: "SparklineOptions", displayName: "DashboardWebStringId.Card.SparklineOptions", type: sparkline_options_1.SparklineOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.showSparkline = { propertyName: "showSparkline", modelName: "@ShowStartEndValues", displayName: "DashboardWebStringId.Card.SparklineVisible", defaultVal: true, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.layoutTemplate = { propertyName: "layoutTemplate", modelName: "LayoutTemplate" };
exports.cardSerializationsInfo = _kpi_element_1.kpiElementSerializationsInfo.concat([exports.cardDeltaOptions, exports.cardSparklineOptions, exports.showSparkline, exports.layoutTemplate]);
