/**
* DevExpress Dashboard (_grid-options.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.allowCellMerge = { propertyName: 'allowCellMerge', modelName: '@AllowGridCellMerge', displayName: 'DashboardWebStringId.Grid.MergeCells', defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.columnWidthMode = {
    propertyName: 'columnWidthMode', modelName: '@ColumnWidthMode', displayName: 'DashboardWebStringId.Grid.ColumnWidthMode', defaultVal: "AutoFitToGrid", editor: _base_metadata_1.editorTemplates.list, category: _base_metadata_1.PropertyCategory.ViewModel, values: {
        "AutoFitToContents": "DashboardWebStringId.Grid.AutoFitToContentsColumnWidthMode",
        "AutoFitToGrid": "DashboardWebStringId.Grid.AutoFitToGridColumnWidthMode",
        "Manual": "DashboardWebStringId.Grid.ManualGridColumnWidthMode"
    }
};
exports.enableBandedRows = { propertyName: 'enableBandedRows', modelName: '@EnableBandedRows', displayName: 'DashboardWebStringId.Grid.BandedRows', defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.showVerticalLines = { propertyName: 'showVerticalLines', modelName: '@ShowVerticalLines', displayName: 'DashboardWebStringId.Grid.VerticalLines', defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.showHorizontalLines = { propertyName: 'showHorizontalLines', modelName: '@ShowHorizontalLines', displayName: 'DashboardWebStringId.Grid.HorizontalLines', defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.showColumnHeaders = { propertyName: 'showColumnHeaders', modelName: '@ShowColumnHeaders', displayName: 'DashboardWebStringId.Grid.ColumnHeaders', defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.wordWrap = { propertyName: 'wordWrap', modelName: '@WordWrap', displayName: 'DashboardWebStringId.Grid.WordWrap', defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.gridOptionsSerializationsInfo = [exports.enableBandedRows, exports.showVerticalLines, exports.showHorizontalLines, exports.allowCellMerge, exports.showColumnHeaders, exports.columnWidthMode, exports.wordWrap];
