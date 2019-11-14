/**
* DevExpress Dashboard (_card-row.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.vAlignment = { propertyName: 'vAlignment', modelName: '@VAlignment', displayName: "Vertical Alignment", editor: _base_metadata_1.editorTemplates.text };
exports.indent = { propertyName: 'indent', modelName: '@Indent', displayName: 'Indent', editor: _base_metadata_1.editorTemplates.numeric };
exports.cardRowBaseSerializationInfo = [exports.vAlignment, exports.indent, _base_metadata_1.itemType];
exports.elements = { propertyName: 'elements', modelName: 'CardRowElements', displayName: 'Row Elements', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.cardRowSerializationInfo = exports.cardRowBaseSerializationInfo.concat([exports.elements]);
exports.height = { propertyName: 'height', modelName: '@Height', displayName: 'Height' };
exports.cardSparklineRowOptions = { propertyName: 'sparklineOptions', modelName: 'sparklineOptions', displayName: 'Sparkline Options' };
exports.cardSparklineRowSerializationInfo = exports.cardRowBaseSerializationInfo.concat([exports.height, exports.cardSparklineRowOptions]);
