/**
* DevExpress Dashboard (_chart-pane.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var chart_axis_1 = require("../chart-axis");
exports.chartSeries = { propertyName: 'series', modelName: 'Series', displayName: 'DashboardStringId.DescriptionItemSeries', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.primaryAxisY = { propertyName: 'primaryAxisY', modelName: 'AxisY', displayName: "DashboardWebStringId.Chart.PrimaryAxisY", type: chart_axis_1.ChartAxisY, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.secondaryAxisY = { propertyName: 'secondaryAxisY', modelName: 'SecondaryAxisY', displayName: "DashboardWebStringId.Chart.SecondaryAxisY", type: chart_axis_1.ChartSecondaryAxisY, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.chartPaneName = { propertyName: 'name', modelName: '@Name', displayName: "DashboardWebStringId.Chart.Name", editor: _base_metadata_1.editorTemplates.text };
exports.chartPaneSerializationsInfo = [exports.chartSeries, exports.primaryAxisY, exports.secondaryAxisY, exports.chartPaneName];
