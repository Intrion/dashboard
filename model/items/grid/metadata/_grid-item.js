/**
* DevExpress Dashboard (_grid-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var grid_options_1 = require("../grid-options");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var _data_dashboard_item_1 = require("../../metadata/_data-dashboard-item");
var interactivity_options_1 = require("../../options/interactivity-options");
exports.gridOptions = { propertyName: 'gridOptions', modelName: 'GridOptions', displayName: "DashboardWebStringId.Grid.Options", type: grid_options_1.GridOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.gridColumns = { propertyName: 'columns', modelName: "GridColumns", displayName: "DashboardStringId.PivotCalculationAlongColumns", array: true, editor: _base_metadata_1.editorTemplates.commonCollection };
exports.sparklineArgument = { propertyName: _base_metadata_1.sparklineArgumentPropertyName, modelName: "SparklineArgument", displayName: "DashboardStringId.GridCalculationAlongSparklineArgument", info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor, visible: false };
exports.dashboardGridItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat(exports.gridColumns, exports.sparklineArgument, exports.gridOptions, interactivity_options_1._dashboardItemInteractivityOptionsMeta);
