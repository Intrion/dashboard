/**
* DevExpress Dashboard (_dynamic-list-lookup-settings.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
exports.dataSourceNameSerialization = { propertyName: 'dataSource', modelName: '@DataSourceName', displayName: 'DevExpress.DashboardCommon.DynamicListLookUpSettings.DataSource', defaultVal: null, editor: _base_metadata_1.editorTemplates.itemDataSource };
exports.dataMemberSerialization = { propertyName: 'dataMember', modelName: '@DataMember', displayName: 'DevExpress.DashboardCommon.DynamicListLookUpSettings.DataMember', defaultVal: null, editor: _base_metadata_1.editorTemplates.itemDataMember };
exports.valueMemberSerialization = { propertyName: 'valueMemberName', modelName: '@ValueMember', displayName: 'DevExpress.DashboardCommon.DynamicListLookUpSettings.ValueMember', defaultVal: null, editor: _base_metadata_1.editorTemplates.itemFieldPicker };
exports.displayMemberSerialization = { propertyName: 'displayMemberName', modelName: '@DisplayMember', displayName: 'DevExpress.DashboardCommon.DynamicListLookUpSettings.DisplayMember', defaultVal: null, editor: _base_metadata_1.editorTemplates.itemFieldPicker };
exports.sortByMember = { propertyName: 'sortByMember', modelName: '@SortByMember', displayName: "DashboardWebStringId.Parameters.SortByMember", defaultVal: null, editor: _base_metadata_1.editorTemplates.itemFieldPicker };
exports.sortOrder = {
    propertyName: 'sortOrder', modelName: '@SortOrder', displayName: 'DevExpress.DashboardCommon.DynamicListLookUpSettings.SortOrder', defaultVal: "Ascending", editor: _base_metadata_1.editorTemplates.list, values: {
        "Ascending": "DevExpress.DashboardCommon.DimensionSortOrder.Ascending",
        "Descending": "DevExpress.DashboardCommon.DimensionSortOrder.Descending",
        "None": "DevExpress.DashboardCommon.DimensionSortOrder.None"
    }
};
exports.dynamicListLookUpSettingsSerializationsInfo = [exports.dataSourceNameSerialization, exports.dataMemberSerialization, exports.valueMemberSerialization, exports.displayMemberSerialization, exports.sortByMember, exports.sortOrder];
