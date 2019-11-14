/**
* DevExpress Dashboard (_appearance-settings.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _style_settings_base_1 = require("./_style-settings-base");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var color_1 = require("../../../color");
exports.appearanceType = {
    propertyName: 'appearanceType', modelName: '@AppearanceType', displayName: "DashboardWebStringId.ConditionalFormatting.AppearanceType", defaultVal: _style_settings_base_1.emptyStyleType, editor: _base_metadata_1.editorTemplates.combobox, values: {
        "None": "DashboardStringId.FormatConditionAppearanceNone",
        "Custom": "DashboardStringId.FormatConditionAppearanceCustom",
        "PaleRed": "DashboardStringId.FormatConditionAppearancePaleRed",
        "PaleYellow": "DashboardStringId.FormatConditionAppearancePaleYellow",
        "PaleGreen": "DashboardStringId.FormatConditionAppearancePaleGreen",
        "PaleBlue": "DashboardStringId.FormatConditionAppearancePaleBlue",
        "PalePurple": "DashboardStringId.FormatConditionAppearancePalePurple",
        "PaleCyan": "DashboardStringId.FormatConditionAppearancePaleCyan",
        "PaleOrange": "DashboardStringId.FormatConditionAppearancePaleOrange",
        "PaleGray": "DashboardStringId.FormatConditionAppearancePaleGray",
        "Red": "DashboardStringId.FormatConditionAppearanceRed",
        "Yellow": "DashboardStringId.FormatConditionAppearanceYellow",
        "Green": "DashboardStringId.FormatConditionAppearanceGreen",
        "Blue": "DashboardStringId.FormatConditionAppearanceBlue",
        "Purple": "DashboardStringId.FormatConditionAppearancePurple",
        "Cyan": "DashboardStringId.FormatConditionAppearanceCyan",
        "Orange": "DashboardStringId.FormatConditionAppearanceOrange",
        "Gray": "DashboardStringId.FormatConditionAppearanceGray",
        "GradientRed": "DashboardStringId.FormatConditionAppearanceGradientRed",
        "GradientYellow": "DashboardStringId.FormatConditionAppearanceGradientYellow",
        "GradientGreen": "DashboardStringId.FormatConditionAppearanceGradientGreen",
        "GradientBlue": "DashboardStringId.FormatConditionAppearanceGradientBlue",
        "GradientPurple": "DashboardStringId.FormatConditionAppearanceGradientPurple",
        "GradientCyan": "DashboardStringId.FormatConditionAppearanceGradientCyan",
        "GradientOrange": "DashboardStringId.FormatConditionAppearanceGradientOrange",
        "GradientTransparent": "DashboardStringId.FormatConditionAppearanceGradientTransparent",
        "FontBold": "DashboardStringId.FormatConditionAppearanceFontBold",
        "FontItalic": "DashboardStringId.FormatConditionAppearanceFontItalic",
        "FontUnderline": "DashboardStringId.FormatConditionAppearanceFontUnderline",
        "FontGrayed": "DashboardStringId.FormatConditionAppearanceFontGrayed",
        "FontRed": "DashboardStringId.FormatConditionAppearanceFontRed",
        "FontYellow": "DashboardStringId.FormatConditionAppearanceFontYellow",
        "FontGreen": "DashboardStringId.FormatConditionAppearanceFontGreen",
        "FontBlue": "DashboardStringId.FormatConditionAppearanceFontBlue"
    }
};
exports.fontStyle = {
    propertyName: 'fontStyle', modelName: '@FontStyle', displayName: "DashboardWebStringId.ConditionalFormatting.FontStyle", defaultVal: null, editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Regular": "DashboardWebStringId.ConditionalFormatting.FontRegular",
        "Bold": "DashboardStringId.FormatConditionAppearanceFontBold",
        "Italic": "DashboardStringId.FormatConditionAppearanceFontItalic",
        "Underline": "DashboardStringId.FormatConditionAppearanceFontUnderline",
        "Strikeout": "DashboardStringId.FormatConditionAppearanceFontStrikeout"
    }
};
exports.fontFamily = { propertyName: 'fontFamily', modelName: '@FontFamily', displayName: "DashboardWebStringId.ConditionalFormatting.FontFamily", defaultVal: "Segoe UI", editor: _base_metadata_1.editorTemplates.text };
exports.backColor = { propertyName: 'backColor', modelName: '@BackColor', displayName: 'DashboardWebStringId.ConditionalFormatting.Appearance.BackColor', defaultVal: null, from: color_1.Color._colorFromModel, toJsonObject: color_1.Color._colorToModel, editor: _base_metadata_1.editorTemplates.numeric };
exports.foreColor = { propertyName: 'foreColor', modelName: '@ForeColor', displayName: 'DashboardWebStringId.ConditionalFormatting.Appearance.ForeColor', defaultVal: null, from: color_1.Color._colorFromModel, toJsonObject: color_1.Color._colorToModel, editor: _base_metadata_1.editorTemplates.numeric };
exports.appearanceSettingsSerializationsInfo = _style_settings_base_1.styleSettingsBaseSerializationsInfo.concat([exports.appearanceType, exports.backColor, exports.foreColor, exports.fontFamily, exports.fontStyle]);
