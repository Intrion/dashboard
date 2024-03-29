﻿/**
* DevExpress Dashboard (data-item.js)
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
var serializable_model_1 = require("../serializable-model");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _data_item_1 = require("./metadata/_data-item");
var ko = require("knockout");
var DataItem = (function (_super) {
    __extends(DataItem, _super);
    function DataItem(dataItemJSON, serializer) {
        if (dataItemJSON === void 0) { dataItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, dataItemJSON, serializer) || this;
    }
    DataItem.prototype.getInfo = function () {
        return _data_item_1.dataItemSerializationsInfo;
    };
    DataItem.prototype.grabFrom = function (dataItem) {
        this.name(dataItem.name());
        this.numericFormat.unit(dataItem.numericFormat.unit());
        this.numericFormat.precision(dataItem.numericFormat.precision());
        this.numericFormat.includeGroupSeparator(dataItem.numericFormat.includeGroupSeparator());
        this.numericFormat.formatType(dataItem.numericFormat.formatType());
        this.numericFormat.currencyCultureName(dataItem.numericFormat.currencyCultureName());
        this.dateTimeFormat.yearFormat(dataItem.dateTimeFormat.yearFormat());
        this.dateTimeFormat.quarterFormat(dataItem.dateTimeFormat.quarterFormat());
        this.dateTimeFormat.monthFormat(dataItem.dateTimeFormat.monthFormat());
        this.dateTimeFormat.dayOfWeekFormat(dataItem.dateTimeFormat.dayOfWeekFormat());
        this.dateTimeFormat.dateFormat(dataItem.dateTimeFormat.dateFormat());
        this.dateTimeFormat.dateHourFormat(dataItem.dateTimeFormat.dateHourFormat());
        this.dateTimeFormat.dateHourMinuteFormat(dataItem.dateTimeFormat.dateHourMinuteFormat());
        this.dateTimeFormat.dateTimeFormat(dataItem.dateTimeFormat.dateTimeFormat());
        this.dateTimeFormat.hourFormat(dataItem.dateTimeFormat.hourFormat());
        this.dateTimeFormat.exactDateFormat(dataItem.dateTimeFormat.exactDateFormat());
    };
    ;
    DataItem.prototype.isDefinitionEquals = function (dataItem) {
        return !!dataItem && this.dataMember() === dataItem.dataMember();
    };
    DataItem.prototype.getUniqueNamePrefix = function () {
        return "DataItem";
    };
    DataItem.typesMap = {
        Integer: "integer",
        Float: "double",
        Double: "double",
        Decimal: "double",
        DateTime: "date",
        Text: "string",
        String: "string",
        Bool: "Bool",
        Boolean: "Bool"
    };
    return DataItem;
}(serializable_model_1.TypedSerializableModel));
exports.DataItem = DataItem;
var AcceptableShapingType;
(function (AcceptableShapingType) {
    AcceptableShapingType[AcceptableShapingType["Number"] = 0] = "Number";
    AcceptableShapingType[AcceptableShapingType["String"] = 1] = "String";
    AcceptableShapingType[AcceptableShapingType["RangeDate"] = 2] = "RangeDate";
    AcceptableShapingType[AcceptableShapingType["Attribute"] = 3] = "Attribute";
    AcceptableShapingType[AcceptableShapingType["Hidden"] = 4] = "Hidden";
})(AcceptableShapingType = exports.AcceptableShapingType || (exports.AcceptableShapingType = {}));
var DataItemLink = (function (_super) {
    __extends(DataItemLink, _super);
    function DataItemLink(dataItemProvider, dataItemLinkJSON, serializer) {
        if (dataItemLinkJSON === void 0) { dataItemLinkJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataItemLinkJSON, serializer) || this;
        _this._dataItemProvider = ko.observable(null);
        _this._specifics = {
            acceptableShapingType: AcceptableShapingType.Number,
            customOptionsProperties: [],
            customDataShapingProperties: [],
            isAttribute: false,
            skipFormatting: false,
            supportsTopNOther: true,
            forceAddOlapExactDateFormat: false
        };
        _this._updateProvider(dataItemProvider);
        _this.dataItem = ko.pureComputed({
            read: function () {
                return !!_this._dataItemProvider() ? _this._dataItemProvider()._getDataItem(_this.uniqueName()) : undefined;
            },
            write: function (value) {
                return _this.uniqueName(value && value.uniqueName());
            }
        });
        return _this;
    }
    DataItemLink.create = function (dataItemProvider, dataItemLink) {
        var link = new DataItemLink(dataItemProvider, { "@DefaultId": dataItemLink.uniqueName() }, undefined);
        return link;
    };
    DataItemLink.prototype.getInfo = function () {
        return _data_item_1.dataItemLinkSerializationsInfo;
    };
    DataItemLink.prototype._getDefaultItemType = function () {
        return undefined;
    };
    DataItemLink.prototype._updateProvider = function (dataItemProvider) {
        this._dataItemProvider(dataItemProvider);
    };
    return DataItemLink;
}(serializable_model_1.TypedSerializableModel));
exports.DataItemLink = DataItemLink;
