/**
* DevExpress Dashboard (_moving-calculation.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _measure_calculation_1 = require("./_measure-calculation");
exports.summaryType = {
    propertyName: 'summaryType', modelName: '@SummaryType', displayName: "DashboardWebStringId.SummaryType", defaultVal: "Sum", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Count": "DashboardStringId.SummaryTypeCount",
        "Sum": "DashboardStringId.SummaryTypeSum",
        "Min": "DashboardStringId.SummaryTypeMin",
        "Max": "DashboardStringId.SummaryTypeMax",
        "Average": "DashboardStringId.SummaryTypeAverage",
        "StdDev": "DashboardStringId.SummaryTypeStdDev",
        "StdDevp": "DashboardStringId.SummaryTypeStdDevp",
        "Var": "DashboardStringId.SummaryTypeVar",
        "Varp": "DashboardStringId.SummaryTypeVarp",
        "CountDistinct": "DashboardStringId.SummaryTypeCountDistinct",
        "Median": "DashboardStringId.SummaryTypeMedian",
        "Mode": "DashboardStringId.SummaryTypeMode"
    }
};
exports.previousValuesCount = { propertyName: 'previousValuesCount', modelName: '@PreviousValuesCount', displayName: "DashboardWebStringId.Calculations.PreviousValuesCount", defaultVal: 2, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel };
exports.nextValuesCount = { propertyName: 'nextValuesCount', modelName: '@NextValuesCount', displayName: "DashboardWebStringId.Calculations.NextValuesCount", defaultVal: 0, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel };
exports.movingCalculationSerializationsInfo = _measure_calculation_1.measureCalculationSerializationsInfo.concat([exports.summaryType, exports.previousValuesCount, exports.nextValuesCount]);
