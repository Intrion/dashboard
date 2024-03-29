﻿/**
* DevExpress Dashboard (_pivot-item-format-rule.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var pivot_item_format_rule_level_1 = require("../pivot-item-format-rule-level");
var _cells_item_format_rule_1 = require("./_cells-item-format-rule");
exports.applyToColumn = { propertyName: 'applyToColumn', modelName: '@ApplyToColumn', displayName: "DashboardStringId.FormatRuleApplyToColumn", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.intersectionLevelModeValues = {
    "Auto": "DashboardStringId.IntersectionLevelModeAuto",
    "FirstLevel": "DashboardStringId.IntersectionLevelModeFirst",
    "LastLevel": "DashboardStringId.IntersectionLevelModeLast",
    "AllLevels": "DashboardStringId.IntersectionLevelModeAll",
    "SpecificLevel": "DashboardStringId.IntersectionLevelModeSpecific"
};
exports.restrictedIntersectionLevelModeValues = __assign({}, exports.intersectionLevelModeValues);
delete exports.restrictedIntersectionLevelModeValues["AllLevels"];
exports.intersectionLevelMode = {
    propertyName: 'intersectionLevelMode', modelName: '@IntersectionLevelMode', displayName: "DashboardWebStringId.ConditionalFormatting.IntersectionLevelMode", defaultVal: "Auto", editor: _base_metadata_1.editorTemplates.combobox, values: exports.intersectionLevelModeValues
};
exports.pivotLevel = { propertyName: 'level', modelName: 'PivotItemFormatRuleLevel', type: pivot_item_format_rule_level_1.PivotItemFormatRuleLevel };
exports.pivotItemFormatRuleSerializationsInfo = _cells_item_format_rule_1.cellsItemFormatRuleSerializationsInfo.concat([exports.applyToColumn, exports.intersectionLevelMode, exports.pivotLevel]);
