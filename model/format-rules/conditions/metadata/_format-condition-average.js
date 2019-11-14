/**
* DevExpress Dashboard (_format-condition-average.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _format_condition_style_base_1 = require("./_format-condition-style-base");
exports.averageType = {
    propertyName: 'averageType', modelName: '@AverageType', displayName: "DashboardWebStringId.ConditionalFormatting.AverageType", defaultVal: "Above", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Above": "DashboardWebStringId.ConditionalFormatting.Above",
        "AboveOrEqual": "DashboardWebStringId.ConditionalFormatting.AboveOrEqual",
        "Below": "DashboardWebStringId.ConditionalFormatting.Below",
        "BelowOrEqual": "DashboardWebStringId.ConditionalFormatting.BelowOrEqual"
    }
};
exports.formatConditionAverageSerializationsInfo = _format_condition_style_base_1.formatConditionStyleBaseSerializationsInfo.concat([exports.averageType]);
