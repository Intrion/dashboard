/**
* DevExpress Dashboard (_filter-element-item-base.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_dashboard_item_1 = require("../../metadata/_data-dashboard-item");
var interactivity_options_1 = require("../../options/interactivity-options");
exports.filterDimensions = { propertyName: "__filterDimensions", modelName: "FilterDimensions", displayName: "DashboardStringId.DescriptionDimensions", array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.showAllValue = { propertyName: "showAllValue", modelName: "@ShowAllValue", displayName: "DashboardWebStringId.FilterItem.ShowAllValue", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.enableSearch = { propertyName: "enableSearch", modelName: "@EnableSearch", displayName: "DashboardWebStringId.FilterItem.EnableSearch", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.filterElementItemBaseSerializationInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([exports.filterDimensions, interactivity_options_1._filterItemInteractivityOptionsMeta, exports.enableSearch]);
