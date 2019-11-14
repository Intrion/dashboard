/**
* DevExpress Dashboard (_chart-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var chart_legend_1 = require("../chart-legend");
var chart_axis_1 = require("../chart-axis");
var _chart_item_base_1 = require("../../metadata/_chart-item-base");
var interactivity_options_1 = require("../../options/interactivity-options");
exports.chartRotated = { propertyName: "rotated", modelName: "@Rotated", displayName: "DashboardWebStringId.Chart.Rotated", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.panes = { propertyName: "panes", modelName: "Panes", displayName: "DashboardWebStringId.Chart.Panes", array: true, editor: _base_metadata_1.editorTemplates.commonCollection };
exports.chartLegend = { propertyName: "legend", modelName: "ChartLegend", displayName: "DashboardWebStringId.Chart.Legend", type: chart_legend_1.ChartLegend, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.chartAxisX = { propertyName: "axisX", modelName: "AxisX", displayName: "DashboardWebStringId.Chart.AxisX", type: chart_axis_1.ChartAxisX, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.chartItemSerializationInfo = _chart_item_base_1.chartItemBaseSerializationsInfo.concat([exports.panes, exports.chartRotated, exports.chartLegend, exports.chartAxisX, interactivity_options_1._chartItemInteractivityOptionsMeta]);
