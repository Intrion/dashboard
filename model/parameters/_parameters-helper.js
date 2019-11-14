/**
* DevExpress Dashboard (_parameters-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../metadata/_base-metadata");
var _date_utils_1 = require("../internal/_date-utils");
var _utils_1 = require("../../data/_utils");
function validateGuid(guid) {
    return guid && (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(guid)
        || /^\{[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\}$/.test(guid)
        || /^\([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}\)$/.test(guid)
        || /^[0-9a-fA-F]{32}$/.test(guid));
}
exports.validateGuid = validateGuid;
exports.guidValidationRules = [{ type: "custom", validationCallback: function (options) { return validateGuid(options.value); }, message: 'Guid is required and should have a valid format.' }];
var ParameterHelper = (function () {
    function ParameterHelper() {
    }
    ParameterHelper.getInfoPerType = function (valueType) {
        var value = { propertyName: 'value', modelName: '#text', displayName: 'DashboardStringId.ParametersFormValueColumnCaption', editor: _base_metadata_1.editorTemplates.text };
        if (valueType)
            return [_utils_1.deepExtend({}, value, { editor: ParameterHelper.getEditorType(valueType()) }), _base_metadata_1.itemType];
        else
            return [value, _base_metadata_1.itemType];
    };
    ParameterHelper.getEditorType = function (typeString) {
        if (typeString === "multiValue") {
            return _base_metadata_1.editorTemplates.commonCollection;
        }
        if (typeString === "Enum") {
            return _base_metadata_1.editorTemplates.combobox;
        }
        if (typeString === "System.String") {
            return _base_metadata_1.editorTemplates.text;
        }
        if (typeString === "System.Guid") {
            return _base_metadata_1.editorTemplates.guid;
        }
        if (typeString === "System.SByte"
            || typeString === "System.Int64"
            || typeString === "System.Int32"
            || typeString === "System.Int16"
            || typeString === "System.Single"
            || typeString === "System.Double"
            || typeString === "System.Byte"
            || typeString === "System.UInt16"
            || typeString === "System.UInt32"
            || typeString === "System.UInt64"
            || typeString === "System.Decimal"
            || typeString === "System.Byte") {
            return _base_metadata_1.editorTemplates.numeric;
        }
        if (typeString === "System.Boolean") {
            return _base_metadata_1.editorTemplates.bool;
        }
        if (typeString === "System.DateTime") {
            return _base_metadata_1.editorTemplates.date;
        }
        return _base_metadata_1.editorTemplates.text;
    };
    ParameterHelper._getTypeValue = function (typeName) {
        var values = ParameterHelper.typeValues.filter(function (type) { return type.value === typeName; });
        return values.length > 0 ? values[0] : null;
    };
    ParameterHelper._tryConvertValue = function (value, type, allowNull) {
        var condition = function (val) {
            return val !== void 0 && val !== null && !isNaN(typeof val === "string" ? "" : val);
        };
        if (!condition(value)) {
            return { isValid: allowNull, newValue: null };
        }
        var typeValue = this._getTypeValue(type), converter = (typeValue && typeValue.valueConverter) || (function (val) { return typeValue && typeValue.defaultValue; }), newValue = converter(value);
        return { isValid: condition(newValue), newValue: newValue };
    };
    ParameterHelper.getDefaultTypeValue = function (type) {
        var typeValue = this._getTypeValue(type);
        return typeValue ? typeValue.defaultValue : "";
    };
    ParameterHelper.convertSingleValue = function (value, type, allowNull) {
        if (allowNull === void 0) { allowNull = false; }
        var result = this._tryConvertValue(value, type, allowNull);
        return result.isValid ? result.newValue : this.getDefaultTypeValue(type);
    };
    ParameterHelper.typeValues = [
        { value: "System.String", displayValue: "AnalyticsCoreStringId.Parameter_Type_String", defaultValue: "", specifics: "String", valueConverter: function (val) { return val.toString(); } },
        { value: "System.DateTime", displayValue: "AnalyticsCoreStringId.Parameter_Type_DateTime", defaultValue: _base_metadata_1.fromDateToString(new Date(new Date().setHours(0, 0, 0, 0))), specifics: "Date", valueConverter: function (val) { return _date_utils_1.toUtcDate(val); } },
        { value: "System.Int16", displayValue: "AnalyticsCoreStringId.Parameter_Type_Int16", defaultValue: 0, specifics: "Integer", valueConverter: function (val) { return parseInt(val); } },
        { value: "System.Int32", displayValue: "AnalyticsCoreStringId.Parameter_Type_Int32", defaultValue: 0, specifics: "Integer", valueConverter: function (val) { return parseInt(val); } },
        { value: "System.Int64", displayValue: "AnalyticsCoreStringId.Parameter_Type_Int64", defaultValue: "0", specifics: "String", valueConverter: function (val) { return val.toString(); } },
        { value: "System.Single", displayValue: "AnalyticsCoreStringId.Parameter_Type_Float", defaultValue: 0, specifics: "Float", valueConverter: function (val) { return parseFloat(val); } },
        { value: "System.Double", displayValue: "AnalyticsCoreStringId.Parameter_Type_Double", defaultValue: 0, specifics: "Float", valueConverter: function (val) { return parseFloat(val); } },
        { value: "System.Decimal", displayValue: "AnalyticsCoreStringId.Parameter_Type_Decimal", defaultValue: 0, specifics: "Float", valueConverter: function (val) { return parseFloat(val); } },
        { value: "System.Boolean", displayValue: "AnalyticsCoreStringId.Parameter_Type_Boolean", defaultValue: false, specifics: "Bool", valueConverter: function (val) { return String(val).toLowerCase() === "true" ? true : (String(val).toLowerCase() === "false" ? false : false); } },
        { value: "System.Guid", displayValue: "AnalyticsCoreStringId.Parameter_Type_Guid", defaultValue: "00000000-0000-0000-0000-000000000000", specifics: "String", valueConverter: function (val) { return validateGuid(val) ? val : "00000000-0000-0000-0000-000000000000"; } }
    ];
    return ParameterHelper;
}());
exports.ParameterHelper = ParameterHelper;
