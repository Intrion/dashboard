/**
* DevExpress Dashboard (_card-layout-template-element.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.cardLayoutVisible = { propertyName: "visible", modelName: "@Visible", from: _base_metadata_1.parseBool };
exports.dimensionIndex = { propertyName: "dimensionIndex", modelName: "@DimensionIndex", from: _base_metadata_1.floatFromModel };
exports.cardLayoutValueType = { propertyName: "valueType", modelName: "@ValueType", editor: _base_metadata_1.editorTemplates.list };
exports.cardLayoutTemplateElementBaseSerializationInfo = [exports.cardLayoutVisible];
exports.cardLayoutTemplateDataElementSerializationInfo = exports.cardLayoutTemplateElementBaseSerializationInfo.concat([exports.cardLayoutValueType, exports.dimensionIndex]);
