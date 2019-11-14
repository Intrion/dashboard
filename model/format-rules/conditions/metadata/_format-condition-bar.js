/**
* DevExpress Dashboard (_format-condition-bar.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bar_style_settings_1 = require("../../style-settings/bar-style-settings");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _format_condition_min_max_base_1 = require("./_format-condition-min-max-base");
var _format_rules_common_1 = require("../../metadata/_format-rules-common");
exports.barNegativeStyleSettings = { propertyName: 'negativeStyleSettings', modelName: 'NegativeStyleSettings', displayName: 'DashboardStringId.FormatRuleNegativeStyle', type: bar_style_settings_1.BarStyleSettings, editor: _base_metadata_1.editorTemplates.styleSettings };
exports.barCurrentStyleSettingsType = {
    propertyName: 'currentStyleSettingsType', displayName: "DashboardWebStringId.ConditionalFormatting.StyleSettingsType", defaultVal: 'Positive', editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        'Positive': "DashboardWebStringId.ConditionalFormatting.Positive",
        'Negative': "DashboardWebStringId.ConditionalFormatting.Negative"
    }
};
exports.barCurrentStyleSettings = { propertyName: 'currentStyleSettings', type: bar_style_settings_1.BarStyleSettings, editor: _base_metadata_1.editorTemplates.styleSettings };
exports.formatConditionBarSerializationsInfo = _format_condition_min_max_base_1.formatConditionMinMaxBaseSerializationsInfo.concat([exports.barNegativeStyleSettings, _format_rules_common_1.barOptions]);
