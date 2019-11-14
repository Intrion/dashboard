/**
* DevExpress Dashboard (_calculated-field.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
exports.calcFieldDataMember = { propertyName: 'dataMember', modelName: '@DataMember' };
exports.calcFieldExpression = { propertyName: 'expression', modelName: '@Expression', defaultVal: '' };
exports.calcFieldExpressionEditable = { propertyName: 'expressionEditable', displayName: 'DashboardStringId.CalculationTypeExpression', editor: _base_metadata_1.editorTemplates.expression };
exports.calculatedFieldType = {
    propertyName: 'fieldType', modelName: '@DataType', displayName: 'DevExpressWebStringId.CalculatedFieldDataType', defaultVal: "String", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Auto": "DashboardStringId.CalculatedFieldTypeAuto",
        "String": "DashboardStringId.CalculatedFieldTypeString",
        "Integer": "DashboardStringId.CalculatedFieldTypeLong",
        "Double": "DashboardStringId.CalculatedFieldTypeDouble",
        "Decimal": "DashboardStringId.CalculatedFieldTypeDecimal",
        "Boolean": "DashboardStringId.CalculatedFieldTypeBoolean",
        "DateTime": "DashboardStringId.CalculatedFieldTypeDateTime",
        "Object": "DashboardStringId.CalculatedFieldTypeObject"
    }
};
exports.calculatedFieldSerializationsInfo = [_base_metadata_1.itemType, _base_metadata_1.name, exports.calcFieldExpression, exports.calculatedFieldType, exports.calcFieldDataMember];
