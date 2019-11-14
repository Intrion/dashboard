/**
* DevExpress Dashboard (_parameter.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var static_list_lookup_settings_1 = require("../static-list-lookup-settings");
var dynamic_list_lookup_settings_1 = require("../dynamic-list-lookup-settings");
var _parameters_helper_1 = require("../_parameters-helper");
exports.parameterVisible = { propertyName: 'parameterVisible', modelName: '@Visible', displayName: 'DevExpress.DashboardCommon.DashboardParameter.Visible', defaultVal: true, editor: _base_metadata_1.editorTemplates.checkBox, from: _base_metadata_1.parseBool };
exports.description = { propertyName: 'description', modelName: '@Description', displayName: 'DevExpress.DashboardCommon.DashboardParameter.Description', defaultVal: "", editor: _base_metadata_1.editorTemplates.text };
exports.allowMultiselect = { propertyName: 'allowMultiselect', modelName: '@AllowMultiselect', displayName: 'DevExpress.DashboardCommon.DashboardParameter.AllowMultiselect', defaultVal: false, editor: _base_metadata_1.editorTemplates.checkBox, from: _base_metadata_1.parseBool };
exports.allowNull = { propertyName: 'allowNull', modelName: '@AllowNull', displayName: 'DevExpress.DashboardCommon.DashboardParameter.AllowNull', defaultVal: false, editor: _base_metadata_1.editorTemplates.checkBox, from: _base_metadata_1.parseBool };
exports.parameterName = { propertyName: 'name', modelName: '@Name', displayName: 'DashboardWebStringId.DataSources.CalculatedField.Name', defaultVal: "", editor: _base_metadata_1.editorTemplates.text, validationRules: dx_analytics_core_1.default.Analytics.Internal.nameValidationRules };
exports.defaultValue = { propertyName: 'defaultValue', modelName: '@Value', displayName: "DashboardWebStringId.Parameters.DefaultValue" };
exports.parameterTypeSerialization = { propertyName: "_type", modelName: "@Type", defaultVal: "System.String" };
exports.parameterTypePropertyGrid = { propertyName: "type", displayName: "DashboardWebStringId.FilterItem.Type", editor: _base_metadata_1.editorTemplates.combobox, valuesArray: (_parameters_helper_1.ParameterHelper.typeValues) };
exports.lookUpSourceType = {
    propertyName: "lookUpSourceType", displayName: "DashboardWebStringId.Parameters.LookUpSettingsTypeCaption", values: {
        "None": "DashboardWebStringId.Parameters.LookUpSettingsType.NoLookUp",
        "StaticListLookUpSettings": "DashboardWebStringId.Parameters.LookUpSettingsType.StaticList",
        "DynamicListLookUpSettings": "DashboardWebStringId.Parameters.LookUpSettingsType.DynamicList"
    }
};
exports.defaultValues = { propertyName: 'defaultValues', modelName: 'Values', array: true };
exports.selectAllValues = { propertyName: 'selectAllValues', modelName: '@SelectAllValues', displayName: 'DevExpress.DashboardCommon.DashboardParameter.SelectAllValues', defaultVal: false, editor: _base_metadata_1.editorTemplates.checkBox, from: _base_metadata_1.parseBool };
exports.dashboardParameterSerializationsInfo = [_base_metadata_1.itemType, exports.parameterName, exports.description, exports.parameterVisible, exports.allowNull, exports.allowMultiselect, exports.parameterTypeSerialization, exports.parameterTypePropertyGrid, exports.defaultValue, exports.selectAllValues, exports.lookUpSourceType, static_list_lookup_settings_1._staticListLookUpSettingsSerializationInfo, dynamic_list_lookup_settings_1._dynamicListLookUpSettingsSerializationInfo, exports.defaultValues];
