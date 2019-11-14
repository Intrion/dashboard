/**
* DevExpress Dashboard (_range-info.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var format_rules_common_1 = require("../../../format-rules-common");
var _base_metadata_1 = require("../../../../metadata/_base-metadata");
exports.rangeValue = { propertyName: 'value', modelName: 'Value', displayName: 'DashboardStringId.CommandFormatRuleValue', type: format_rules_common_1.ComplexValue };
exports.rangeValueComparison = {
    propertyName: 'valueComparison', modelName: '@ValueComparison', displayName: "DashboardWebStringId.ConditionalFormatting.ValueComparison", defaultVal: "GreaterOrEqual", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Greater": ">",
        "GreaterOrEqual": "≥"
    }
};
exports.rangeInfoSerializationsInfo = [_base_metadata_1.itemType, exports.rangeValue, exports.rangeValueComparison];
