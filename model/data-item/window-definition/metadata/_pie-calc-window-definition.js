/**
* DevExpress Dashboard (_pie-calc-window-definition.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _measure_calc_window_definition_1 = require("./_measure-calc-window-definition");
exports.pieDefinitionMode = {
    propertyName: 'definitionMode', modelName: '@DefinitionMode', defaultVal: "Series", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Arguments": "DashboardStringId.PieCalculationAlongArguments",
        "Series": "DashboardStringId.PieCalculationAlongSeries",
        "ArgumentsAndSeries": "DashboardStringId.PieCalculationAlongArgumentsAndSeries",
        "SeriesAndArguments": "DashboardStringId.PieCalculationAlongSeriesAndArguments"
    }
};
exports.pieWindowDefinitionSerializationsInfo = _measure_calc_window_definition_1.measureCalculationWindowDefinitionSerializationsInfo.concat([exports.pieDefinitionMode]);
