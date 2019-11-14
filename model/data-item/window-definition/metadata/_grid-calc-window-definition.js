/**
* DevExpress Dashboard (_grid-calc-window-definition.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _measure_calc_window_definition_1 = require("./_measure-calc-window-definition");
exports.gridDefinitionMode = {
    propertyName: 'definitionMode', modelName: '@DefinitionMode', defaultVal: "Rows", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Rows": "DashboardStringId.GridCalculationAlongRows",
        "SparklineArgument": "DashboardStringId.GridCalculationAlongSparklineArgument",
        "RowsAndSparklineArgument": "DashboardStringId.GridCalculationAlongRowsAndSparklineArgument",
        "SparklineArgumentAndRows": "DashboardStringId.GridCalculationAlongSparklineArgumentAndRows"
    }
};
exports.gridWindowDefinitionSerializationsInfo = _measure_calc_window_definition_1.measureCalculationWindowDefinitionSerializationsInfo.concat([exports.gridDefinitionMode]);
