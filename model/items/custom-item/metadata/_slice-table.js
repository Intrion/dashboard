/**
* DevExpress Dashboard (_slice-table.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.dimensions = { propertyName: 'dimensions', modelName: 'Dimensions', displayName: "DashboardStringId.DescriptionDimensions", array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.measures = { propertyName: 'measures', modelName: 'Measures', displayName: "DashboardStringId.Measures", array: true, editor: _base_metadata_1.editorTemplates.commonCollection, visible: false };
exports.sliceTableName = { propertyName: 'name', modelName: '@Name', displayName: 'Name', editor: _base_metadata_1.editorTemplates.text };
exports.sliceTableSerializationsInfo = [exports.dimensions, exports.measures, exports.sliceTableName];
