/**
* DevExpress Dashboard (_format-condition-range-base.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../../metadata/_base-metadata");
var range_set_1 = require("../range-set");
var _format_condition_base_1 = require("../../metadata/_format-condition-base");
exports.rangeValueType = {
    propertyName: 'valueType', modelName: '@ValueType', displayName: "DashboardWebStringId.Delta.ValueType", defaultVal: "Automatic", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Number": "DashboardStringId.FormatConditionNumberValueType",
        "Percent": "DashboardStringId.FormatConditionPercentValueType",
        "Automatic": "DashboardStringId.FormatConditionAutomaticValueType"
    }
};
exports.rangeSet = { propertyName: 'rangeSet', modelName: 'RangeSet', displayName: 'DashboardStringId.CommandFormatRuleRangeSet', type: range_set_1.RangeSet, editor: _base_metadata_1.editorTemplates.ruleRanges };
exports.formatConditionRangeBaseSerializationsInfo = _format_condition_base_1.formatConditionBaseSerializationsInfo.concat([exports.rangeValueType, exports.rangeSet]);
