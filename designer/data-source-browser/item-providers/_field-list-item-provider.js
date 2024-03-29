﻿/**
* DevExpress Dashboard (_field-list-item-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_source_browser_1 = require("../../../common/_data-source-browser");
var olap_data_source_1 = require("../../../model/data-sources/olap-data-source");
var data_item_1 = require("../../../model/data-item/data-item");
var sql_data_source_1 = require("../../../model/data-sources/sql-data-source");
var $ = require("jquery");
var ko = require("knockout");
var DataFieldViewModel = (function () {
    function DataFieldViewModel(name, displayName, hasItems, specifics, field, isList) {
        this.name = name;
        this.displayName = displayName;
        this.hasItems = hasItems;
        this.specifics = specifics;
        this.field = field;
        this.isList = isList;
        this.innerActions = ko.observableArray();
    }
    return DataFieldViewModel;
}());
exports.DataFieldViewModel = DataFieldViewModel;
var FieldListItemProvider = (function () {
    function FieldListItemProvider(_dataSourceBrowserViewModel, _getDataFieldArrayCallback, isFieldValid) {
        this._dataSourceBrowserViewModel = _dataSourceBrowserViewModel;
        this._getDataFieldArrayCallback = _getDataFieldArrayCallback;
        this.isFieldValid = isFieldValid;
        this.loading = ko.observable(false);
        this._changeTrigger = ko.observable(false);
    }
    FieldListItemProvider.prototype.triggerItemsChanged = function () {
        this._changeTrigger.valueHasMutated();
    };
    FieldListItemProvider.prototype.getItems = function (pathRequest) {
        var _this = this;
        var deferred = $.Deferred();
        var dataSource = this._dataSourceBrowserViewModel.selectedDataSource();
        this._changeTrigger();
        if (!!dataSource) {
            var _a = _data_source_browser_1.findDataMember(dataSource, pathRequest.path), dataMember = _a.dataMember, fieldPath = _a.fieldPath;
            this.loading(true);
            this._getDataFieldArrayCallback(dataSource.componentName(), dataMember, fieldPath).done(function (dataFields) {
                deferred.resolve(dataFields
                    .filter(function (field) { return !!field.dataMember(); })
                    .filter(function (field) { return !_this.isFieldValid || _this.isFieldValid(field); })
                    .map(function (dataNode) {
                    var name = dataSource instanceof olap_data_source_1.OlapDataSource ? dataNode.dataMember() : dataNode.name();
                    var dataFieldViewModel = new DataFieldViewModel(name, ko.unwrap(dataNode.displayName), !dataNode.isDataFieldNode(), data_item_1.DataItem.typesMap[dataNode.fieldType()] || "string", dataNode, !_data_source_browser_1.isNonCollectionDataField(dataNode));
                    if (dataSource instanceof sql_data_source_1.SqlDataSource) {
                        var canEditNode = false;
                        var canDeleteNode = false;
                        var isSqlQueryNode = pathRequest.path.length === 0;
                        var query = dataSource.queries().filter(function (query) { return query.name() === dataNode.dataMember(); })[0];
                        if (_this._dataSourceBrowserViewModel.canEditDataSource && query != null && isSqlQueryNode) {
                            if (_this._dataSourceBrowserViewModel.canEditCustomSqlQueries || query.type() !== "CustomSqlQuery") {
                                dataFieldViewModel.innerActions.push({
                                    click: function () {
                                        _this._dataSourceBrowserViewModel.editQuery(dataNode.dataMember());
                                    },
                                    icon: "dx-dashboard-ds-edit",
                                    style: "dx-dashboard-datasource-field-icon-edit"
                                });
                            }
                            dataFieldViewModel.innerActions.push({
                                click: function () {
                                    _this._dataSourceBrowserViewModel.removeQuery(dataNode.dataMember());
                                },
                                icon: "dx-dashboard-remove-small",
                                style: "dx-dashboard-datasource-field-icon-remove"
                            });
                        }
                    }
                    if (dataNode.nodeType() === "CalculatedDataField") {
                        dataFieldViewModel.style = "dx-dashboard-calculated-field";
                        var calcField = dataSource.calculatedFields().filter(function (calculatedField) { return calculatedField.name() === dataNode.dataMember(); })[0];
                        if (calcField) {
                            dataFieldViewModel.innerActions.push({
                                click: function () {
                                    _this._dataSourceBrowserViewModel.editCalcField(calcField);
                                },
                                icon: "dx-dashboard-ds-edit",
                                style: "dx-dashboard-datasource-field-icon-edit"
                            });
                            dataFieldViewModel.innerActions.push({
                                click: function () {
                                    _this._dataSourceBrowserViewModel.removeCalcField(calcField);
                                },
                                icon: "dx-dashboard-remove-small",
                                style: "dx-dashboard-datasource-field-icon-remove"
                            });
                        }
                    }
                    _this.customizeDataFieldViewModel && _this.customizeDataFieldViewModel(dataFieldViewModel);
                    return dataFieldViewModel;
                }));
            });
        }
        else {
            deferred.resolve([]);
        }
        deferred.always(function () {
            _this.loading(false);
        });
        return deferred.promise();
    };
    return FieldListItemProvider;
}());
exports.FieldListItemProvider = FieldListItemProvider;
