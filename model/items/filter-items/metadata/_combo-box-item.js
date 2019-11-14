/**
* DevExpress Dashboard (_combo-box-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _filter_element_item_base_1 = require("./_filter-element-item-base");
exports.comboBoxType = {
    propertyName: 'comboBoxType', modelName: '@ComboBoxType', displayName: "DashboardWebStringId.FilterItem.Type", defaultVal: "Standard", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Standard": "DashboardWebStringId.FilterItem.Type.Standard",
        "Checked": "DashboardWebStringId.FilterItem.Type.Checked"
    }
};
exports.comboBoxDashboardItemSerializationsInfo = _filter_element_item_base_1.filterElementItemBaseSerializationInfo.concat([exports.comboBoxType, _filter_element_item_base_1.showAllValue]);
