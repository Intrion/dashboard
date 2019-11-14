/**
* DevExpress Dashboard (_chart-calc-window-definition.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _measure_calc_window_definition_1 = require("./_measure-calc-window-definition");
exports.chartDefinitionMode = {
    propertyName: 'definitionMode', modelName: '@DefinitionMode', defaultVal: "Arguments", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Arguments": "DashboardStringId.ChartCalculationAlongArguments",
        "Series": "DashboardStringId.ChartCalculationAlongSeries",
        "ArgumentsAndSeries": "DashboardStringId.ChartCalculationAlongArgumentsAndSeries",
        "SeriesAndArguments": "DashboardStringId.ChartCalculationAlongSeriesAndArguments"
    }
};
exports.chartWindowDefinitionSerializationsInfo = _measure_calc_window_definition_1.measureCalculationWindowDefinitionSerializationsInfo.concat([exports.chartDefinitionMode]);
