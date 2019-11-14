/**
* DevExpress Dashboard (federation-data-source.js)
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
var data_source_1 = require("./data-source");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../serializable-model");
var _federation_data_source_1 = require("./metadata/_federation-data-source");
var ko = require("knockout");
var _data_source_factory_base_1 = require("./_data-source-factory-base");
var FederationDataSource = (function (_super) {
    __extends(FederationDataSource, _super);
    function FederationDataSource(dataSourceJSON, serializer) {
        if (dataSourceJSON === void 0) { dataSourceJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dataSourceJSON, serializer) || this;
        _this.queries = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dataSourceJSON.Queries, function (json) { return new QueryNode(json, serializer); });
        _this.context = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dataSourceJSON.Context, function (json) { return new ContextItem(json, serializer); });
        _this.sources = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dataSourceJSON.Sources, function (json) { return new Source(json, serializer); });
        _this.hasCalculatedFields = true;
        _this.supportDataMembers = true;
        return _this;
    }
    FederationDataSource.prototype.getInfo = function () {
        return _federation_data_source_1.federationDataSourceSerializationsInfo;
    };
    FederationDataSource.prototype.getDisplayNamePrefix = function () {
        return "";
    };
    FederationDataSource.prototype._getDefaultItemType = function () {
        return "FederationDataSource";
    };
    return FederationDataSource;
}(data_source_1.DataSource));
exports.FederationDataSource = FederationDataSource;
var QueryNode = (function (_super) {
    __extends(QueryNode, _super);
    function QueryNode(json, serializer) {
        if (json === void 0) { json = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, json, serializer) || this;
    }
    QueryNode.prototype.getInfo = function () {
        return _federation_data_source_1.queryNodeSerializationsInfo;
    };
    QueryNode.prototype._getDefaultItemType = function () {
        return "QueryNode";
    };
    return QueryNode;
}(serializable_model_1.SerializableModel));
exports.QueryNode = QueryNode;
var ContextItem = (function (_super) {
    __extends(ContextItem, _super);
    function ContextItem(json, serializer) {
        if (json === void 0) { json = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, json, serializer) || this;
        _this.source = ko.observable(null);
        for (var key in _data_source_factory_base_1._baseDataSourceTypesMap) {
            var dataSourceJson = json[key];
            if (dataSourceJson) {
                _this.source(new _data_source_factory_base_1._baseDataSourceTypesMap[key](dataSourceJson));
                break;
            }
        }
        return _this;
    }
    ContextItem.prototype.getInfo = function () {
        return _federation_data_source_1.contextItemSerializationsInfo;
    };
    ContextItem.prototype._getDefaultItemType = function () {
        return "ContextItem";
    };
    return ContextItem;
}(serializable_model_1.SerializableModel));
exports.ContextItem = ContextItem;
var Source = (function (_super) {
    __extends(Source, _super);
    function Source(json, serializer) {
        if (json === void 0) { json = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, json, serializer) || this;
    }
    Source.prototype.getInfo = function () {
        return _federation_data_source_1.sourceSerializationsInfo;
    };
    Source.prototype._getDefaultItemType = function () {
        return "Source";
    };
    return Source;
}(serializable_model_1.SerializableModel));
exports.Source = Source;
