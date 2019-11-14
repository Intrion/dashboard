/**
* DevExpress Dashboard (_format-rules-common.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appearance_settings_1 = require("../style-settings/appearance-settings");
var icon_settings_1 = require("../style-settings/icon-settings");
var bar_style_settings_1 = require("../style-settings/bar-style-settings");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var format_condition_bar_options_1 = require("../conditions/format-condition-bar-options");
exports.negativeInfinity = '-Infinity';
exports.fieldTypes = {
    Text: "System.String",
    DateTime: "System.DateTime",
    Bool: "System.Boolean",
    Integer: "System.Int32",
    Float: "System.Single",
    Double: "System.Double",
    Decimal: "System.Decimal",
    Enum: "Enum",
    Custom: "Custom",
    Unknown: "Unknown"
};
exports.complexValueType = { propertyName: 'type', modelName: '@Type', defaultVal: null };
exports.complexValueValue = { propertyName: 'value', modelName: '@Value', defaultVal: null };
exports.complexValueInfo = [exports.complexValueType, exports.complexValueValue];
exports.styleSettingsTypes = [
    { propertyName: 'styleSettingsAppearance', modelName: "AppearanceSettings", type: appearance_settings_1.AppearanceSettings },
    { propertyName: 'styleSettingsIcon', modelName: "IconSettings", type: icon_settings_1.IconSettings },
    { propertyName: 'styleSettingsBar', modelName: "StyleSettings", type: bar_style_settings_1.BarStyleSettings },
    { propertyName: 'styleSettingsRangeBar', modelName: "BarStyleSettings", type: bar_style_settings_1.BarStyleSettings }
];
exports.styleSettings = { propertyName: 'styleSettings', displayName: 'DashboardWebStringId.StyleSettings', editor: _base_metadata_1.editorTemplates.styleSettings };
exports.barOptions = { propertyName: 'barOptions', modelName: 'BarOptions', displayName: "DashboardWebStringId.ConditionalFormatting.BarOptions", type: format_condition_bar_options_1.FormatConditionBarOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
