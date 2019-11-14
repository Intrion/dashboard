/**
* DevExpress Dashboard (_scatter-chart-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var chart_legend_1 = require("../../chart/chart-legend");
var chart_axis_1 = require("../../chart/chart-axis");
var scatter_point_label_options_1 = require("../scatter-point-label-options");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var _data_dashboard_item_1 = require("../../metadata/_data-dashboard-item");
var interactivity_options_1 = require("../../options/interactivity-options");
var _coloring_options_1 = require("../../options/metadata/_coloring-options");
exports.scatterArgumentsMeta = { propertyName: _base_metadata_1.argumentsPropertyName, modelName: 'Dimensions', displayName: _base_metadata_1.BindingSectionTitles.Arguments, editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.rotated = { propertyName: 'rotated', modelName: '@Rotated', displayName: "DashboardWebStringId.Chart.Rotated", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.legend = { propertyName: 'legend', modelName: 'ChartLegend', displayName: "DashboardWebStringId.Chart.Legend", type: chart_legend_1.ChartLegend, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.axisX = { propertyName: 'axisX', modelName: 'AxisX', displayName: "DashboardWebStringId.Chart.AxisX", type: chart_axis_1.ChartAxisY, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.axisY = { propertyName: 'axisY', modelName: 'AxisY', displayName: "DashboardWebStringId.Chart.AxisY", type: chart_axis_1.ScatterChartAxisY, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.pointLabelOptions = { propertyName: 'pointLabelOptions', modelName: 'PointLabelOptions', displayName: "DashboardWebStringId.Chart.PointLabelOptions", type: scatter_point_label_options_1.ScatterPointLabelOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.axisXMeasure = { propertyName: '__axisXMeasure', modelName: 'MeasureX', displayName: "DashboardWebStringId.Chart.AxisXMeasure", info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.axisYMeasure = { propertyName: '__axisYMeasure', modelName: 'MeasureY', displayName: "DashboardWebStringId.Chart.AxisYMeasure", info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.scatterChartWeight = { propertyName: _base_metadata_1.weightPropertyName, modelName: 'MeasureWeight', displayName: "DashboardWebStringId.Chart.Weight", info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.scatterChartDashboardItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([exports.scatterArgumentsMeta, interactivity_options_1._dashboardItemInteractivityOptionsMeta, exports.rotated, exports.legend, exports.axisX, exports.axisY, exports.pointLabelOptions, exports.axisXMeasure, exports.axisYMeasure, exports.scatterChartWeight, _coloring_options_1.coloringOptions]);
