/**
* DevExpress Dashboard (_item-filter-items-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_field_1 = require("../../model/data-sources/_data-field");
var dimension_1 = require("../../model/data-item/dimension");
var data_item_1 = require("../../model/data-item/data-item");
var _formatter_1 = require("../../data/_formatter");
var _display_name_provider_1 = require("../_display-name-provider");
var special_values_1 = require("../../data/special-values");
var $ = require("jquery");
exports.getRealDimensionType = function (dimension, dataField) {
    return exports.isCategoricalDateTime(dimension, dataField) ? 'Integer' : dataField.fieldType();
};
exports.isCategoricalDateTime = function (dimension, dataField) {
    return dataField.fieldType() === 'DateTime' && ["Year", "Quarter", "Month", "Day", "Hour", "Minute", "Second",
        "DayOfYear", "DayOfWeek", "WeekOfYear", "WeekOfMonth"].indexOf(dimension.dateTimeGroupInterval() || "Year") !== -1;
};
var ItemFilterItemsProvider = (function () {
    function ItemFilterItemsProvider(dataItemValuesProvider, parameters, dataDashboardItem, filterPredicate) {
        if (filterPredicate === void 0) { filterPredicate = function () { return true; }; }
        this.dataItemValuesProvider = dataItemValuesProvider;
        this.parameters = parameters;
        this.dataDashboardItem = dataDashboardItem;
        this.filterPredicate = filterPredicate;
    }
    ItemFilterItemsProvider.formatValue = function (value, dataItem, fieldTypeName) {
        var getFormatViewModel = function (fieldTypeName) {
            var fieldType = data_item_1.DataItem.typesMap[fieldTypeName];
            switch (fieldType) {
                case data_item_1.DataItem.typesMap.DateTime:
                    return dataItem.dateTimeFormat._getViewModel(dataItem instanceof dimension_1.Dimension ? dataItem.dateTimeGroupInterval() : undefined);
                case data_item_1.DataItem.typesMap.Decimal:
                case data_item_1.DataItem.typesMap.Double:
                case data_item_1.DataItem.typesMap.Integer:
                    return dataItem.numericFormat._getViewModel();
                default:
                    return undefined;
            }
        };
        var formatViewModel = getFormatViewModel(fieldTypeName);
        return !!formatViewModel ? _formatter_1.format(value, formatViewModel) : value;
    };
    ItemFilterItemsProvider.prototype.getItems = function (pathRequest) {
        var _this = this;
        var deferred = $.Deferred();
        if (pathRequest.fullPath === "Parameters") {
            deferred.resolve(this.parameters()
                .map(function (parameter) {
                return {
                    displayName: parameter.name(),
                    name: parameter.name()
                };
            }));
        }
        else {
            this._getDashboardItemDataFields().done(function (dataFields) {
                deferred.resolve(_this.dataDashboardItem
                    ._uniqueDataItems
                    .filter(_this.filterPredicate)
                    .map(function (dataItem) {
                    var dataField = dataFields.filter(function (dataField) { return dataField.dataMember() === dataItem.dataMember(); })[0];
                    var itemType = dataItem instanceof dimension_1.Dimension ? exports.getRealDimensionType(dataItem, dataField) : dataField.fieldType();
                    return {
                        displayName: _display_name_provider_1.getDataItemDisplayName(_this.dataItemValuesProvider, _this.dataDashboardItem, dataItem),
                        name: dataItem.uniqueName(),
                        specifics: data_item_1.DataItem.typesMap[itemType] || "string"
                    };
                }));
            });
        }
        return deferred.promise();
    };
    ItemFilterItemsProvider.prototype.getValues = function (pathRequest) {
        var _this = this;
        var dataItem = this.dataDashboardItem._dimensions.filter(function (di) { return di.uniqueName() === pathRequest.path; })[0];
        var def = $.Deferred();
        if (!dataItem) {
            return def.resolve([]).promise();
        }
        this._getDashboardItemDataFields()
            .done(function (dataFields) {
            var dataField = dataFields.filter(function (dataField) { return dataField.dataMember() === dataItem.dataMember(); })[0];
            if (_data_field_1.IsNumeric(dataField.fieldType()) || _data_field_1.IsTextual(dataField.fieldType()) || exports.isCategoricalDateTime(dataItem, dataField)) {
                _this.dataItemValuesProvider.getDimensionUniqueValues(_this.dataDashboardItem.dataSource(), _this.dataDashboardItem.dataMember(), dataItem)
                    .done(function (values) {
                    def.resolve((values || [])
                        .filter(function (value) { return value !== special_values_1.specialValues.nullValueGuid; })
                        .map(function (value) {
                        if (dataField.fieldType() === "Text") {
                            return value;
                        }
                        else {
                            return {
                                value: value,
                                display: ItemFilterItemsProvider.formatValue(value, dataItem, dataField.fieldType())
                            };
                        }
                    }));
                });
            }
            else {
                return def.resolve([]);
            }
        });
        return def.promise();
    };
    ItemFilterItemsProvider.prototype._getDashboardItemDataFields = function () {
        var _this = this;
        var deferred = $.Deferred();
        var promises = [];
        this.dataDashboardItem
            ._uniqueDataItems
            .filter(this.filterPredicate)
            .forEach(function (dataItem) {
            return promises.push(_this.dataItemValuesProvider.findDataField(_this.dataDashboardItem.dataSource(), _this.dataDashboardItem.dataMember(), dataItem.dataMember(), true));
        });
        $.when.apply($.when, promises).done(function () {
            var fields = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fields[_i] = arguments[_i];
            }
            deferred.resolve(fields);
        });
        return deferred.promise();
    };
    return ItemFilterItemsProvider;
}());
exports.ItemFilterItemsProvider = ItemFilterItemsProvider;
