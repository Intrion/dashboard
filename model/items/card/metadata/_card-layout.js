/**
* DevExpress Dashboard (_card-layout.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.templateId = { propertyName: 'templateID', modelName: '@TemplateID', displayName: 'ID' };
exports.minWidth = { propertyName: 'minWidth', modelName: '@MinWidth', displayName: 'DashboardWebStringId.CardLayout.MinWidth', defaultVal: 200, from: _base_metadata_1.floatFromModel, editor: _base_metadata_1.editorTemplates.numeric, editorOptions: { min: 1 }, validationRules: [_base_metadata_1.integerValidationRule] };
exports.maxWidth = { propertyName: 'maxWidth', modelName: '@MaxWidth', displayName: 'DashboardWebStringId.CardLayout.MaxWidth', defaultVal: NaN, from: _base_metadata_1.floatFromModel, toJsonObject: _base_metadata_1.nullableFloatToModel, editor: _base_metadata_1.editorTemplates.toggleNumeric, editorOptions: { min: 1 }, validationRules: [_base_metadata_1.integerValidationRule] };
exports.cardRows = { propertyName: 'rows', modelName: 'CardRows', displayName: 'Card Rows', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.cardLayoutSerializationInfo = [_base_metadata_1.itemType, exports.minWidth, exports.maxWidth, exports.cardRows];
