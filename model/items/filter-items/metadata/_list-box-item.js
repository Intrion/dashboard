/**
* DevExpress Dashboard (_list-box-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _filter_element_item_base_1 = require("./_filter-element-item-base");
exports.listBoxType = {
    propertyName: "listBoxType", modelName: "@ListBoxType", displayName: "DashboardWebStringId.FilterItem.Type", defaultVal: "Checked", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Checked": "DashboardWebStringId.FilterItem.Type.Checked",
        "Radio": "DashboardWebStringId.FilterItem.Type.Radio"
    }
};
exports.listBoxDashboardItemSerializationsInfo = _filter_element_item_base_1.filterElementItemBaseSerializationInfo.concat([exports.listBoxType, _filter_element_item_base_1.showAllValue]);
