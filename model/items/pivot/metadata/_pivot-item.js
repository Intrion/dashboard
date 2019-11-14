/**
* DevExpress Dashboard (_pivot-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_dashboard_item_1 = require("../../metadata/_data-dashboard-item");
var interactivity_options_1 = require("../../options/interactivity-options");
exports.pivotColumns = { propertyName: _base_metadata_1.columnsPropertyName, modelName: 'Columns', displayName: 'DashboardStringId.DescriptionColumns', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.pivotRows = { propertyName: _base_metadata_1.rowsPropertyName, modelName: 'Rows', displayName: 'DashboardStringId.DescriptionRows', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.pivotValues = { propertyName: _base_metadata_1.valuesPropertyName, modelName: 'Values', displayName: 'DashboardStringId.DescriptionValues', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.autoExpandColumnGroups = { propertyName: 'autoExpandColumnGroups', modelName: 'AutoExpandColumnGroups', displayName: "DashboardWebStringId.PivotGrid.AutoExpandColumnGroups", defaultVal: false, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.autoExpandRowGroups = { propertyName: 'autoExpandRowGroups', modelName: 'AutoExpandRowGroups', displayName: "DashboardWebStringId.PivotGrid.AutoExpandRowGroups", defaultVal: false, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.showColumnGrandTotals = { propertyName: 'showColumnGrandTotals', modelName: 'ShowColumnGrandTotals', displayName: "DashboardWebStringId.PivotGrid.ColumnGrandTotals", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.showRowGrandTotals = { propertyName: 'showRowGrandTotals', modelName: 'ShowRowGrandTotals', displayName: "DashboardWebStringId.PivotGrid.RowGrandTotals", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.showColumnTotals = { propertyName: 'showColumnTotals', modelName: 'ShowColumnTotals', displayName: "DashboardWebStringId.PivotGrid.ColumnTotals", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.showRowTotals = { propertyName: 'showRowTotals', modelName: 'ShowRowTotals', displayName: "DashboardWebStringId.PivotGrid.RowTotals", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.valuesPosition = {
    propertyName: 'valuesPosition', modelName: 'ValuesPosition', displayName: "DashboardWebStringId.PivotGrid.ValuesPosition", defaultVal: "Columns", editor: _base_metadata_1.editorTemplates.buttonGroup,
    values: {
        "Columns": "DashboardWebStringId.PivotGrid.ValuesPositionColumns",
        "Rows": "DashboardWebStringId.PivotGrid.ValuesPositionRows"
    }
};
exports.rowTotalsPosition = {
    propertyName: 'rowTotalsPosition', modelName: 'RowTotalsPosition', displayName: "DashboardWebStringId.PivotGrid.RowTotalsPosition", defaultVal: "Bottom", editor: _base_metadata_1.editorTemplates.buttonGroup,
    values: {
        "Bottom": "DashboardWebStringId.PivotGrid.RowTotalsPositionBottom",
        "Top": "DashboardWebStringId.PivotGrid.RowTotalsPositionTop"
    }
};
exports.columnTotalsPosition = {
    propertyName: 'columnTotalsPosition', modelName: 'ColumnTotalsPosition', displayName: "DashboardWebStringId.PivotGrid.ColumnTotalsPosition", defaultVal: "Far", editor: _base_metadata_1.editorTemplates.buttonGroup,
    values: {
        "Far": "DashboardWebStringId.PivotGrid.ColumnTotalsPositionFar",
        "Near": "DashboardWebStringId.PivotGrid.ColumnTotalsPositionNear"
    }
};
exports.layoutType = {
    propertyName: 'layoutType', modelName: 'LayoutType', displayName: "DashboardWebStringId.PivotGrid.LayoutType", defaultVal: "Compact", editor: _base_metadata_1.editorTemplates.buttonGroup,
    values: {
        "Compact": "DashboardWebStringId.PivotGrid.LayoutTypeCompact",
        "Tabular": "DashboardWebStringId.PivotGrid.LayoutTypeTabular"
    }
};
exports.pivotDashboardItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([exports.pivotColumns, exports.pivotRows, exports.pivotValues, exports.autoExpandColumnGroups, exports.autoExpandRowGroups, exports.showColumnGrandTotals, exports.showRowGrandTotals, exports.showColumnTotals, exports.showRowTotals, exports.valuesPosition, exports.rowTotalsPosition, exports.columnTotalsPosition, exports.layoutType, interactivity_options_1._baseInteractivityOptionsMeta]);
