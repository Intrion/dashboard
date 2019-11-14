/**
* DevExpress Dashboard (_data-field.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var ko = require("knockout");
exports.dataFieldDataMember = { propertyName: "dataMember", modelName: "DataMember" };
exports.dataFieldName = { propertyName: "name", modelName: "Name" };
exports.nodeType = { propertyName: "nodeType", modelName: "NodeType" };
exports.groupIndex = { propertyName: "groupIndex", modelName: "GroupIndex" };
exports.dataFieldChildNodes = { propertyName: "childNodes", modelName: "ChildNodes", array: true };
exports.dataFieldDisplayName = { propertyName: "displayName", modelName: "DisplayName" };
exports.dataFieldFieldType = {
    propertyName: "fieldType", modelName: "FieldType", defaultVal: "Unknown", from: function (value) { return ko.observable(value === "String" ? "Text" : value); }
};
exports.dataFieldIsDataFieldNode = { propertyName: "isDataFieldNode", modelName: "IsDataFieldNode", from: _base_metadata_1.parseBool };
exports.dataFieldIsAggregate = { propertyName: "isAggregate", modelName: "IsAggregateCalculatedField", from: _base_metadata_1.parseBool };
exports.dataFieldIsDataMemberNode = { propertyName: "isDataMemberNode", modelName: "IsDataMemberNode", from: _base_metadata_1.parseBool };
exports.dataFieldIsConvertible = { propertyName: "isConvertible", modelName: "IsConvertible", from: _base_metadata_1.parseBool };
exports.dataFieldIsComparable = { propertyName: "isComparable", modelName: "IsComparable", from: _base_metadata_1.parseBool };
exports.dataFieldIsList = { propertyName: "isList", modelName: "IsList", from: _base_metadata_1.parseBool };
exports.dataFieldSerializationsInfo = [exports.dataFieldDataMember, exports.dataFieldName, exports.dataFieldChildNodes, exports.dataFieldDisplayName, exports.dataFieldFieldType, exports.dataFieldIsDataMemberNode, exports.dataFieldIsDataFieldNode, exports.dataFieldIsConvertible, exports.dataFieldIsComparable, exports.nodeType, exports.groupIndex, exports.dataFieldIsAggregate, exports.dataFieldIsList];
