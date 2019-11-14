/**
* DevExpress Dashboard (_expression-editor-item-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_item_1 = require("../../model/data-item/data-item");
var _data_source_browser_1 = require("../../common/_data-source-browser");
var olap_data_source_1 = require("../../model/data-sources/olap-data-source");
var $ = require("jquery");
var ko = require("knockout");
var ExpressionEditorItemsProvider = (function () {
    function ExpressionEditorItemsProvider(dataFieldProvider, parameters, dataSourceName, dataMember, filterPredicate) {
        if (filterPredicate === void 0) { filterPredicate = function () { return true; }; }
        this.dataFieldProvider = dataFieldProvider;
        this.parameters = parameters;
        this.dataSourceName = dataSourceName;
        this.dataMember = dataMember;
        this.filterPredicate = filterPredicate;
    }
    ExpressionEditorItemsProvider.prototype.getItems = function (pathRequest) {
        var _this = this;
        var items = [], fullPath = pathRequest.fullPath && pathRequest.fullPath.toLowerCase() || "";
        if (fullPath === "") {
            items = [{
                    displayName: "Parameters",
                    name: "Parameters",
                    isList: true,
                    specifics: "parameters"
                }];
        }
        else if (fullPath === "parameters") {
            items = (this.parameters && this.parameters || []).map(function (parameter) {
                return {
                    displayName: parameter.name(),
                    name: parameter.name(),
                    isList: false,
                    specifics: data_item_1.DataItem.typesMap[parameter.type().replace("System.", "")]
                };
            });
        }
        else {
            var deferred = $.Deferred(), fieldPath = pathRequest.path, dataSource = this.dataFieldProvider.findDataSource(this.dataSourceName());
            if (!!this.dataMember) {
                fieldPath = _data_source_browser_1.trimLeadingPathElement(fieldPath, this.dataMember());
            }
            this.dataFieldProvider.getDataFieldsArray(this.dataSourceName(), this.dataMember(), fieldPath, _data_source_browser_1.isNonCollectionDataField).done(function (dataFields) {
                items = dataFields.filter(_this.filterPredicate).map(function (field) {
                    return {
                        displayName: ko.unwrap(field.displayName),
                        name: dataSource instanceof olap_data_source_1.OlapDataSource ? field.dataMember() : field.name(),
                        field: field,
                        isList: !field.isDataFieldNode(),
                        hasItems: !field.isDataFieldNode(),
                        specifics: field.isDataFieldNode() ? data_item_1.DataItem.typesMap[field.fieldType()] || "Default" : field.isList && field.isList() ? "List" : "Default"
                    };
                });
                deferred.resolve(items);
            });
            return deferred.promise();
        }
        return $.Deferred().resolve(items).promise();
    };
    return ExpressionEditorItemsProvider;
}());
exports.ExpressionEditorItemsProvider = ExpressionEditorItemsProvider;
