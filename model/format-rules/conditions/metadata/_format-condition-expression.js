/**
* DevExpress Dashboard (_format-condition-expression.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _format_condition_style_base_1 = require("./_format-condition-style-base");
exports.formatConditionExpression = { propertyName: 'expression', modelName: '@Expression' };
exports.formatConditionFilter = { propertyName: 'expression', editor: _base_metadata_1.editorTemplates.ruleExpression };
exports.formatConditionExpressionSerializationsInfo = _format_condition_style_base_1.formatConditionStyleBaseSerializationsInfo.concat([exports.formatConditionExpression]);
