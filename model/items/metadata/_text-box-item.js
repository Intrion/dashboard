/**
* DevExpress Dashboard (_text-box-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _data_dashboard_item_1 = require("./_data-dashboard-item");
var interactivity_options_1 = require("../options/interactivity-options");
exports.textBoxText = { propertyName: "text", modelName: "Text", displayName: "DashboardWebStringId.TextBox.Text", defaultVal: "", editor: _base_metadata_1.editorTemplates.textFile };
exports.textBoxValues = { propertyName: _base_metadata_1.valuesPropertyName, modelName: "Values", displayName: "DashboardStringId.DescriptionValues", array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.textBoxDashboardItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([exports.textBoxValues, exports.textBoxText, interactivity_options_1._baseInteractivityOptionsMeta]);
