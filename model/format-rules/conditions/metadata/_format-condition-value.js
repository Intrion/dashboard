/**
* DevExpress Dashboard (_format-condition-value.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var format_rules_common_1 = require("../../format-rules-common");
var _format_condition_style_base_1 = require("./_format-condition-style-base");
exports.conditionInCondition = {
    propertyName: 'condition', modelName: '@Condition', displayName: 'DevExpress.XtraEditors.StyleFormatConditionBase.Condition', defaultVal: "Equal", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Greater": "DashboardStringId.CommandFormatRuleGreaterThan",
        "GreaterOrEqual": "DashboardStringId.CommandFormatRuleGreaterThanOrEqualTo",
        "Less": "DashboardStringId.CommandFormatRuleLessThan",
        "LessOrEqual": "DashboardStringId.CommandFormatRuleLessThanOrEqualTo",
        "Equal": "DashboardStringId.CommandFormatRuleEqualTo",
        "NotEqual": "DashboardStringId.CommandFormatRuleNotEqualTo",
        "Between": "DashboardStringId.CommandFormatRuleBetween",
        "NotBetween": "DashboardStringId.CommandFormatRuleNotBetween",
        "BetweenOrEqual": "DashboardStringId.CommandFormatRuleBetweenOrEqual",
        "NotBetweenOrEqual": "DashboardStringId.CommandFormatRuleNotBetweenOrEqual",
        "ContainsText": "DashboardStringId.CommandFormatRuleContains"
    }
};
exports.formatConditionValue1 = { propertyName: 'value1', modelName: 'Value1', displayName: 'DashboardStringId.Value1Caption', type: format_rules_common_1.ComplexValue };
exports.formatConditionValue2 = { propertyName: 'value2', modelName: 'Value2', displayName: 'DashboardStringId.Value2Caption', type: format_rules_common_1.ComplexValue };
exports.formatConditionValueSerializationsInfo = _format_condition_style_base_1.formatConditionStyleBaseSerializationsInfo.concat([exports.conditionInCondition, exports.formatConditionValue1, exports.formatConditionValue2]);
