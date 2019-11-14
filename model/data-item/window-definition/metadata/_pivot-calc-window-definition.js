/**
* DevExpress Dashboard (_pivot-calc-window-definition.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _measure_calc_window_definition_1 = require("./_measure-calc-window-definition");
exports.pivotDefinitionMode = {
    propertyName: 'definitionMode', modelName: '@DefinitionMode', defaultVal: "Columns", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Columns": "DashboardStringId.PivotCalculationAlongColumns",
        "Rows": "DashboardStringId.PivotCalculationAlongRows",
        "ColumnsAndRows": "DashboardStringId.PivotCalculationAlongColumnsAndRows",
        "RowsAndColumns": "DashboardStringId.PivotCalculationAlongRowsAndColumns",
        "GroupsInColumns": "DashboardStringId.PivotCalculationAlongGroupsInColumns",
        "GroupsInRows": "DashboardStringId.PivotCalculationAlongGroupsInRows",
        "GroupsInColumnsAndRows": "DashboardStringId.PivotCalculationAlongGroupsInColumnsAndRows",
        "GroupsInRowsAndColumns": "DashboardStringId.PivotCalculationAlongGroupsInRowsAndColumns"
    }
};
exports.pivotWindowDefinitionSerializationsInfo = _measure_calc_window_definition_1.measureCalculationWindowDefinitionSerializationsInfo.concat([exports.pivotDefinitionMode]);
