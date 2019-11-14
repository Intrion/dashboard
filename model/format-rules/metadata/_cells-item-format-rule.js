/**
* DevExpress Dashboard (_cells-item-format-rule.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _dashboard_item_format_rule_1 = require("./_dashboard-item-format-rule");
exports.applyToRow = { propertyName: 'applyToRow', modelName: '@ApplyToRow', displayName: "DashboardStringId.FormatRuleApplyToRow", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.formatRuleDataItem = { propertyName: 'dataItemName', modelName: '@DataItem', displayName: "DashboardWebStringId.ConditionalFormatting.CalculatedBy", editor: _base_metadata_1.editorTemplates.combobox };
exports.dataItemApplyTo = { propertyName: 'dataItemApplyToName', displayName: "DashboardStringId.FormatRuleApplyTo", editor: _base_metadata_1.editorTemplates.combobox };
var _dataItemApplyTo = { propertyName: '_dataItemApplyToName', modelName: '@DataItemApplyTo' };
exports.cellsItemFormatRuleSerializationsInfo = _dashboard_item_format_rule_1.dashboardItemFormatRuleSerializationsInfo.concat([exports.applyToRow, exports.formatRuleDataItem, _dataItemApplyTo]);
