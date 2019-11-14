/**
* DevExpress Dashboard (_bar-style-settings.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _appearance_settings_1 = require("./_appearance-settings");
var color_1 = require("../../../color");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _style_settings_base_1 = require("./_style-settings-base");
exports.predefinedColor = {
    propertyName: 'predefinedColor', modelName: '@PredefinedColor', displayName: "DashboardWebStringId.ConditionalFormatting.PredefinedColor", defaultVal: _appearance_settings_1.appearanceType.defaultVal, editor: _appearance_settings_1.appearanceType.editor, values: _appearance_settings_1.appearanceType.values
};
exports.barStypeColor = { propertyName: 'color', modelName: '@Color', displayName: 'DashboardStringId.DescriptionItemColor', defaultVal: null, from: color_1.Color._colorFromModel, toJsonObject: color_1.Color._colorToModel, editor: _base_metadata_1.editorTemplates.numeric };
exports.barStyleSettingsSerializationsInfo = _style_settings_base_1.styleSettingsBaseSerializationsInfo.concat([exports.barStypeColor, exports.predefinedColor]);
