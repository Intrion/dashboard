/**
* DevExpress Dashboard (_difference-calculation.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _measure_calculation_1 = require("./_measure-calculation");
exports.target = {
    propertyName: 'target', modelName: '@Target', displayName: "DashboardStringId.TargetValueCaption", defaultVal: "Previous", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Previous": "DashboardStringId.DifferenceCalculationTargetPrevious",
        "Next": "DashboardStringId.DifferenceCalculationTargetNext",
        "First": "DashboardStringId.DifferenceCalculationTargetFirst",
        "Last": "DashboardStringId.DifferenceCalculationTargetLast"
    }
};
exports.differenceType = {
    propertyName: 'differenceType', modelName: '@DifferenceType', displayName: 'DashboardWebStringId.Calculations.DifferenceType', defaultVal: "Absolute", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Absolute": "DashboardStringId.DeltaThresholdTypeAbsolute",
        "Percentage": "DashboardStringId.DeltaThresholdTypePercent"
    }
};
exports.differenceCalculationSerializationsInfo = _measure_calculation_1.measureCalculationSerializationsInfo.concat([exports.target, exports.differenceType]);
