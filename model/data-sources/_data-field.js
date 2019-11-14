/**
* DevExpress Dashboard (_data-field.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../serializable-model");
var _data_field_1 = require("./metadata/_data-field");
var $ = require("jquery");
var ko = require("knockout");
exports.IsNumeric = function (dataType) { return (["Decimal", "Float", "Double", "Integer"].indexOf(dataType) > -1); };
exports.IsTextual = function (dataType) { return (["Enum", "Text"].indexOf(dataType) > -1); };
exports.IsDateTime = function (dataType) { return (["DateTime"].indexOf(dataType) > -1); };
exports.IsOlapHierarchyField = function (dataField) { return !!dataField.groupIndex && dataField.groupIndex() !== undefined; };
var DataField = (function (_super) {
    __extends(DataField, _super);
    function DataField(dataFieldJSON, serializer) {
        if (dataFieldJSON === void 0) { dataFieldJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataFieldJSON, serializer) || this;
        _this.expanded = true;
        _this.childNodes = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dataFieldJSON.ChildNodes, function (item) { return new DataField(item, serializer); });
        if (!_this.isDataFieldNode() || _this.childNodes().length > 0) {
            _this.fieldType(undefined);
        }
        _this.groupDataItems = $.map(dataFieldJSON.GroupFieldTypes || {}, function (type, name) {
            return {
                dataMember: ko.observable(name),
                fieldType: ko.observable(type),
                displayName: ko.observable(dataFieldJSON.GroupCaptions[dataFieldJSON.GroupDataMembers.indexOf(name)]),
                isConvertible: ko.observable(true),
                isDataFieldNode: ko.observable(true)
            };
        });
        _this.defaultNumericFormat = dataFieldJSON.DefaultNumericFormat;
        return _this;
    }
    DataField.isNumeric = function (dataField) {
        return dataField && (exports.IsNumeric(dataField.fieldType()) || (dataField.fieldType() == 'Custom' && DataField.isOlap(dataField.dataMember())));
    };
    DataField.isDateTime = function (dataField) {
        return dataField && exports.IsDateTime(dataField.fieldType());
    };
    DataField.olapMarker = function () {
        return "].[";
    };
    DataField.isOlap = function (dataMember) {
        return dataMember && ((dataMember.indexOf(DataField.olapMarker()) !== -1)
            || ((dataMember[0] === "[") && (dataMember.indexOf("]") === dataMember.length - 1)));
    };
    DataField.isMeasure = function (dataField) {
        if (dataField.isAggregate && dataField.isAggregate())
            return true;
        var isOlap = DataField.isOlap(dataField.dataMember());
        return (!isOlap && DataField.isNumeric(dataField)) || (isOlap && DataField.isOrContainMeasures(dataField.dataMember()));
    };
    DataField.isOrContainMeasures = function (dataMember) {
        return dataMember === "[Measures]" || dataMember.indexOf("[Measures]") !== -1;
    };
    DataField.ifOlapThenOnlyMeasure = function (dataField) {
        return !DataField.isOlap(dataField.dataMember()) || DataField.isOrContainMeasures(dataField.dataMember());
    };
    DataField.ifOlapThenOnlyDimension = function (dataField) {
        return !DataField.isOlap(dataField.dataMember()) || !DataField.isOrContainMeasures(dataField.dataMember());
    };
    DataField.isContinous = function (dataField) {
        return dataField && (DataField.isNumeric(dataField) || dataField.fieldType() === "DateTime");
    };
    DataField.isOlapHierarchy = function (dataField) {
        return dataField && !!dataField.nodeType && dataField.nodeType() === "OlapHierarchy";
    };
    DataField.prototype.getInfo = function () {
        return _data_field_1.dataFieldSerializationsInfo;
    };
    return DataField;
}(serializable_model_1.SerializableModel));
exports.DataField = DataField;
