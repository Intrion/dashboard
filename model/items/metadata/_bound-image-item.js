/**
* DevExpress Dashboard (_bound-image-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_item_1 = require("../../data-item/metadata/_data-item");
var _base_metadata_1 = require("../../metadata/_base-metadata");
var _data_dashboard_item_1 = require("./_data-dashboard-item");
var interactivity_options_1 = require("../options/interactivity-options");
var _image_item_1 = require("./_image-item");
exports.imageItem = { propertyName: '__imageItem', modelName: 'ImageItem', displayName: 'DashboardStringId.DescriptionBoundImageAttribute', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.dataBindingMode = {
    propertyName: 'dataBindingMode', modelName: '@DataBindingMode', displayName: "DashboardWebStringId.Image.BindingMode", defaultVal: "BinaryArray", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "BinaryArray": "DashboardWebStringId.Image.BindingMode.BinaryArray",
        "Uri": "DashboardWebStringId.Image.BindingMode.Uri"
    }
};
exports.uriPattern = { propertyName: 'uriPattern', modelName: '@UriPattern', displayName: "DashboardWebStringId.RangeFilter.UriPattern", defaultVal: "", editor: _base_metadata_1.editorTemplates.text, editorOptions: { placeholder: "http://www.example.com/{0}.jpg" } };
exports.boundImageDashboardItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([
    exports.imageItem, exports.dataBindingMode, exports.uriPattern, interactivity_options_1._baseInteractivityOptionsMeta, _image_item_1.sizeMode, _image_item_1.horizontalAlignment, _image_item_1.verticalAlignment
]);
