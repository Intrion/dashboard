/**
* DevExpress Dashboard (_dashboard-item-format-rule.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var format_condition_value_1 = require("../conditions/format-condition-value");
var format_condition_top_bottom_1 = require("../conditions/format-condition-top-bottom");
var format_condition_average_1 = require("../conditions/format-condition-average");
var format_condition_date_occuring_1 = require("../conditions/format-condition-date-occuring");
var format_condition_expression_1 = require("../conditions/format-condition-expression");
var format_condition_bar_1 = require("../conditions/format-condition-bar");
var format_condition_range_color_bar_1 = require("../conditions/range/format-condition-range-color-bar");
var format_condition_range_gradient_bar_1 = require("../conditions/range/format-condition-range-gradient-bar");
var format_condition_range_gradient_1 = require("../conditions/range/format-condition-range-gradient");
var format_condition_range_set_1 = require("../conditions/range/format-condition-range-set");
exports.formatRuleName = {
    propertyName: 'name', modelName: '@Name', displayName: 'DashboardWebStringId.Options.Caption', editor: _base_metadata_1.editorTemplates.text
};
exports.classCaption = {
    propertyName: '_classCaption', displayName: "DashboardWebStringId.Options.Caption", editor: _base_metadata_1.editorTemplates.text
};
exports.enabled = { propertyName: 'enabled', modelName: '@Enabled', displayName: "DashboardWebStringId.TopNEnabled", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.conditionTypes = [
    { propertyName: 'conditionValue', displayName: "DashboardStringId.CommandFormatRuleValue", modelName: "FormatConditionValue", type: format_condition_value_1.FormatConditionValue },
    { propertyName: 'conditionTopBottom', displayName: "DashboardStringId.CommandFormatRuleTopBottom", modelName: "FormatConditionTopBottom", type: format_condition_top_bottom_1.FormatConditionTopBottom },
    { propertyName: 'conditionAverage', displayName: "DashboardStringId.CommandFormatRuleAboveBelowAverage", modelName: "FormatConditionAverage", type: format_condition_average_1.FormatConditionAverage },
    { propertyName: 'conditionDateOccuring', displayName: "DashboardStringId.CommandFormatRuleDateOccurring", modelName: "FormatConditionDateOccurring", type: format_condition_date_occuring_1.FormatConditionDateOccurring },
    { propertyName: 'conditionExpression', displayName: "DashboardStringId.CommandFormatRuleExpression", modelName: "FormatConditionExpression", type: format_condition_expression_1.FormatConditionExpression },
    { propertyName: 'conditionBar', displayName: "DashboardStringId.CommandFormatRuleBar", modelName: "FormatConditionBar", type: format_condition_bar_1.FormatConditionBar },
    { propertyName: 'conditionColorRangeBar', displayName: "DashboardStringId.CommandFormatRuleColorRangeBar", modelName: "FormatConditionColorRangeBar", type: format_condition_range_color_bar_1.FormatConditionColorRangeBar },
    { propertyName: 'conditionGradientRangeBar', displayName: "DashboardWebStringId.ConditionalFormatting.GradientRangeBar", modelName: "FormatConditionGradientRangeBar", type: format_condition_range_gradient_bar_1.FormatConditionGradientRangeBar },
    { propertyName: 'conditionRangeGradient', displayName: "DashboardWebStringId.ConditionalFormatting.RangeGradient", modelName: "FormatConditionRangeGradient", type: format_condition_range_gradient_1.FormatConditionRangeGradient },
    { propertyName: 'conditionRangeSet', displayName: "DashboardStringId.CommandFormatRuleRangeSet", modelName: "FormatConditionRangeSet", type: format_condition_range_set_1.FormatConditionRangeSet }
];
exports.condition = { propertyName: 'condition', displayName: 'DevExpress.XtraEditors.StyleFormatConditionBase.Condition', editor: _base_metadata_1.editorTemplates.objecteditor };
exports.dashboardItemFormatRuleSerializationsInfo = [_base_metadata_1.itemType, exports.formatRuleName, exports.enabled, exports.condition].concat(exports.conditionTypes);
