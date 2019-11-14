/**
* DevExpress Dashboard (_static-list-lookup-settings.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var look_up_value_1 = require("../look-up-value");
exports.lookUpValue = { propertyName: 'value', modelName: '#text', displayName: 'DashboardStringId.ParametersFormValueColumnCaption', editor: _base_metadata_1.editorTemplates.text };
exports.lookUpvalues = { propertyName: 'values', modelName: 'Values', displayName: 'DevExpress.DashboardCommon.StaticListLookUpSettings.Values', editor: _base_metadata_1.editorTemplates.commonCollection, array: true, addHandler: function () { return new look_up_value_1.LookUpValue({}); } };
exports.staticListLookUpSettingsSerializationsInfo = [exports.lookUpvalues];
