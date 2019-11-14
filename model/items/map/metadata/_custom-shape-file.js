/**
* DevExpress Dashboard (_custom-shape-file.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var custom_shape_file_data_1 = require("../custom-shape-file-data");
exports.customShapefileUrl = { propertyName: 'url', modelName: '@Url', displayName: 'DashboardWebStringId.Map.CustomMapUrl', defaultVal: undefined, editor: _base_metadata_1.editorTemplates.text, editorOptions: { placeholder: "http://www.example.com/map.shp" }, category: _base_metadata_1.PropertyCategory.Map };
exports.customShapefileData = { propertyName: 'data', modelName: 'Data', type: custom_shape_file_data_1.CustomShapefileData, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.customShapefileSerializationsInfo = [exports.customShapefileUrl, exports.customShapefileData];
