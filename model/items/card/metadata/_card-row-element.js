/**
* DevExpress Dashboard (_card-row-element.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.hAlignment = { propertyName: 'hAlignment', modelName: '@HAlignment', displayName: "Horizontal Alignment", editor: _base_metadata_1.editorTemplates.text };
exports.cardRowElementSerializationsInfo = [_base_metadata_1.itemType, exports.hAlignment];
exports.cardRowElementColor = { propertyName: 'color', modelName: '@ForeColor', displayName: "Color", editor: _base_metadata_1.editorTemplates.text };
exports.cardRowFontFamily = { propertyName: 'fontFamily', modelName: '@FontFamily', displayName: "FontFamily", editor: _base_metadata_1.editorTemplates.text };
exports.cardRowFontSize = { propertyName: 'fontSize', modelName: '@FontSize', displayName: "Font Size", editor: _base_metadata_1.editorTemplates.numeric };
exports.predefinedForeColor = { propertyName: 'predefinedForeColor', modelName: 'PredefinedForeColor' };
exports.cardRowTextElementBaseSerializationInfo = exports.cardRowElementSerializationsInfo.concat([exports.cardRowElementColor, exports.cardRowFontFamily, exports.cardRowFontSize, exports.predefinedForeColor]);
exports.cardRowDataElementValueType = { propertyName: 'valueType', modelName: '@ValueType', displayName: "Value Type", editor: _base_metadata_1.editorTemplates.text };
exports.cardRowDataElementDimensionIndex = { propertyName: 'dimensionIndex', modelName: '@DimensionIndex', displayName: "Dimension Index", editor: _base_metadata_1.editorTemplates.numeric };
exports.cardRowDataElementSerializationInfo = exports.cardRowTextElementBaseSerializationInfo.concat([exports.cardRowDataElementValueType, exports.cardRowDataElementDimensionIndex]);
exports.text = { propertyName: 'text', modelName: '@Text', displayName: 'Text' };
exports.cardRowTextElementSerializationInfo = exports.cardRowTextElementBaseSerializationInfo.concat([exports.text]);
exports.size = { propertyName: 'size', modelName: '@Size', displayName: 'Size', defaultVal: 16 };
exports.cardRowIndicatorElementSerializationInfo = exports.cardRowElementSerializationsInfo.concat([exports.size]);
