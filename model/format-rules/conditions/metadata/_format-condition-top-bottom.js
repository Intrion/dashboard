/**
* DevExpress Dashboard (_format-condition-top-bottom.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _format_condition_style_base_1 = require("./_format-condition-style-base");
exports.rank = { propertyName: 'rank', modelName: '@Rank', displayName: "DashboardStringId.SummaryTypeCount", defaultVal: 5, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, editorOptions: { min: 1 }, validationRules: [_base_metadata_1.integerValidationRule] };
exports.rankType = {
    propertyName: 'rankType', modelName: '@RankType', displayName: "DashboardWebStringId.Calculations.RankType", defaultVal: "Automatic", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Number": "DashboardStringId.FormatConditionNumberValueType",
        "Percent": "DashboardStringId.FormatConditionPercentValueType"
    }
};
exports.topBottom = {
    propertyName: 'topBottom', modelName: '@TopBottomType', displayName: 'DashboardWebStringId.TopNMode', defaultVal: "Top", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Top": "DashboardStringId.CommandFormatRuleTopN",
        "Bottom": "DashboardStringId.CommandFormatRuleBottomN"
    }
};
exports.formatConditionTopBottomSerializationsInfo = _format_condition_style_base_1.formatConditionStyleBaseSerializationsInfo.concat([exports.rank, exports.rankType, exports.topBottom]);
