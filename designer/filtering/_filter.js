/**
* DevExpress Dashboard (_filter.js)
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
var dimension_1 = require("../../model/data-item/dimension");
var disposable_object_1 = require("../../model/disposable-object");
var data_source_1 = require("devextreme/data/data_source");
var custom_store_1 = require("devextreme/data/custom_store");
var _array_utils_1 = require("../../model/internal/_array-utils");
var _display_name_provider_1 = require("../_display-name-provider");
var $ = require("jquery");
var ko = require("knockout");
var _utils_1 = require("../../data/_utils");
var FieldWrapper = (function () {
    function FieldWrapper(dimension, getDisplayName) {
        var _this = this;
        this.getDisplayName = getDisplayName;
        this.add = function (d) { return _this._dimensions.push(d); };
        this.dataMember = function () { return _this._dimensions[0].dataMember(); };
        this.displayName = function () { return _this._dimensions.map(function (d) { return '[' + _this.getDisplayName(d) + ']'; }).join(' - '); };
        this.groupIndex = function () { return _this._dimensions[0].groupIndex(); };
        this.hasItems = function (path) { return (_this.isGroup() && !!path) ? path.length !== _this._dimensions.length : _this.isGroup(); };
        this.isGroup = function () { return _this._dimensions.length > 1; };
        this.reorder = function (dataFields) {
            if (!dataFields)
                return;
            var newDimensions = [];
            dataFields.forEach(function (dataField) {
                var dimension = _this._dimensions.filter(function (d) { return d.dataMember() == dataField.dataMember(); })[0];
                if (!!dimension) {
                    newDimensions.push(dimension);
                }
            });
            _this._dimensions = newDimensions;
        };
        this._dimensions = [dimension];
    }
    return FieldWrapper;
}());
exports.FieldWrapper = FieldWrapper;
var SimpleFilterEditor = (function (_super) {
    __extends(SimpleFilterEditor, _super);
    function SimpleFilterEditor(dashboardItem, dataSourceBrowser) {
        var _this = _super.call(this) || this;
        _this.dashboardItem = dashboardItem;
        _this.dataSourceBrowser = dataSourceBrowser;
        _this.selectedField = ko.observable();
        _this.fields = ko.observableArray();
        _this.applyHandler = function () {
            if (!!_this.selectedField()) {
                _this.dataSourceBrowser.getDimensionFilterString(_this.dashboardItem, _this.selectedField().dataMember(), _this._getFilterItemsState()).done(function (filterString) {
                    _this.dashboardItem.filterString(filterString);
                });
            }
            _this.popupVisible(false);
        };
        var that = _this;
        var uniqueDimensions = _this.dashboardItem._uniqueDataItems.filter(function (item) { return item instanceof dimension_1.Dimension; });
        _this.popupVisible = ko.observable(false);
        _this.loadingVisible = ko.observable(true);
        _this.filterItems = [];
        _this._loadDataFields(uniqueDimensions).done(function (fields) {
            _this.selectedField(fields[0]);
            _this.fields(fields);
        });
        _this.toDispose(_this.selectedField.subscribe(function (dimension) {
            _this.filterItems = [];
            _this.loadingVisible(true);
            _this.treeDataSource.reload();
        }));
        _this.treeRootValue = "0";
        _this.treeDataSource = new data_source_1.default({
            store: new custom_store_1.default({
                load: function (options) {
                    var selectedField = _this.selectedField.peek();
                    if (!selectedField) {
                        return undefined;
                    }
                    var parentId = options.filter && options.filter[1] || _this.treeRootValue;
                    var result = $.Deferred();
                    var pathComponents = !!parentId ? parentId.split(".") : undefined;
                    var parentIndex = -1;
                    _this.filterItems.forEach(function (item, index) {
                        if (item.id == parentId) {
                            parentIndex = index;
                        }
                    });
                    var branch = _this._getBranchIndexes(parentIndex);
                    _this.dataSourceBrowser.getDimensionFilterItems(_this.dashboardItem, selectedField.dataMember(), _this._getFilterItemsState(), branch).done(function (expandedItems) {
                        var index = 0;
                        var items = expandedItems.map(function (item) {
                            return {
                                id: parentId + "." + index++,
                                parentId: parentId,
                                displayName: item.IsBlank ? '(Blank)' : item.Text,
                                hasItems: selectedField.hasItems(pathComponents),
                                selected: item.IsChecked,
                                data: item
                            };
                        });
                        _this.filterItems = (parentId === _this.treeRootValue) ? items : _array_utils_1.arrayInsert(_this.filterItems, items, parentIndex + 1);
                        result.resolve(items);
                    });
                    return result.promise();
                }
            }),
            onLoadingChanged: function (loadingStarted) {
                if (!loadingStarted) {
                    that.loadingVisible(false);
                }
            }
        });
        return _this;
    }
    Object.defineProperty(SimpleFilterEditor.prototype, "treeOptions", {
        get: function () {
            return {
                dataSource: this.treeDataSource,
                noDataText: "",
                rootValue: this.treeRootValue,
                dataStructure: 'plain',
                keyExpr: 'id',
                parentIdExpr: 'parentId',
                showCheckBoxesMode: 'selectAll',
                selectAllText: "(All)",
                selectNodesRecursive: true,
                virtualModeEnabled: true,
                scrollDirection: 'both',
                onItemRendered: function (e) {
                    var treeItem = e.itemData;
                    if (treeItem.selected == null) {
                        var itemElement = _utils_1.$unwrap(e.itemElement);
                        $(itemElement).siblings('.dx-checkbox').addClass('dx-checkbox-indeterminate');
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    SimpleFilterEditor.prototype._getBranchIndexes = function (parentIndex) {
        if (parentIndex < 0) {
            return null;
        }
        var branchIndexes = [];
        var parentId = this.filterItems[parentIndex].id;
        for (var i = parentIndex; i >= 0; i--) {
            if (this.filterItems[i].id == parentId) {
                branchIndexes.splice(0, 0, i);
                parentId = parentId.substring(0, parentId.lastIndexOf('.'));
            }
        }
        return branchIndexes;
    };
    SimpleFilterEditor.prototype._getFilterItemsState = function () {
        return this.filterItems.map(function (itemElement) {
            var filterItem = itemElement.data;
            filterItem.IsChecked = itemElement.selected;
            return filterItem;
        });
    };
    SimpleFilterEditor.prototype._generateFields = function (dimensions) {
        var _this = this;
        var fields = [];
        dimensions.forEach(function (dimension, i) {
            if (i > 0 && dimension.groupIndex() > 0 && dimension.groupIndex() === (dimensions[i - 1]).groupIndex()) {
                fields[fields.length - 1].add(dimension);
            }
            else {
                fields.push(new FieldWrapper(dimension, function (dataItem) { return _display_name_provider_1.getDataItemDisplayName(_this.dataSourceBrowser, _this.dashboardItem, dataItem); }));
            }
        });
        return fields;
    };
    SimpleFilterEditor.prototype._loadDataFields = function (dimensions) {
        var _this = this;
        var deferred = $.Deferred(), result = this._generateFields(dimensions), findPromises = dimensions.map(function (dimension) { return _this.dataSourceBrowser.findDataField(_this.dashboardItem.dataSource(), _this.dashboardItem.dataMember(), dimension.dataMember()); });
        $.when.apply($.when, findPromises).done(function () {
            var dataFields = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                dataFields[_i] = arguments[_i];
            }
            result.forEach(function (wrapper) {
                if (wrapper.groupIndex() > 0) {
                    var groupedFields = dataFields.filter(function (dataField) { return !!dataField && dataField.groupIndex() == wrapper.groupIndex(); });
                    wrapper.reorder(groupedFields && groupedFields.length > 0 && groupedFields[0].groupDataItems);
                }
            });
            deferred.resolve(result);
        });
        return deferred.promise();
    };
    SimpleFilterEditor.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.treeDataSource.dispose();
    };
    return SimpleFilterEditor;
}(disposable_object_1.DisposableObject));
exports.SimpleFilterEditor = SimpleFilterEditor;
