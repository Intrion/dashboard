/**
* DevExpress Dashboard (_item-data-manager.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_storage_1 = require("../../data-storage/_data-storage");
var _item_data_axis_builder_1 = require("./_item-data-axis-builder");
var _item_data_1 = require("../_item-data");
var _item_data_axis_names_1 = require("../../../viewer-parts/viewer/_item-data-axis-names");
var _item_data_axis_helper_1 = require("./_item-data-axis-helper");
var _item_meta_data_1 = require("./_item-meta-data");
var $ = require("jquery");
var itemDataManager = (function () {
    function itemDataManager() {
    }
    itemDataManager.prototype.initialize = function (itemDataDTO) {
        var metaData = this._createMetaData(itemDataDTO.MetaData), dataStorage = new _data_storage_1.dataStorage(itemDataDTO.DataStorageDTO), items = {};
        $.each(metaData.getAxes(), function (name, dimensions) {
            items[name] = _item_data_axis_builder_1.itemDataAxisBuilder.build(name, dataStorage, dimensions, itemDataDTO.SortOrderSlices, metaData);
        });
        this._dataStorage = dataStorage;
        this._metaData = metaData;
        this._itemData = new _item_data_1.itemData({
            metaData: metaData,
            storage: dataStorage
        }, items);
        this._items = items;
    };
    itemDataManager.prototype.updateExpandedData = function (expandedItemDataDTO, expandInfo) {
        var that = this, areaNames = _item_data_axis_names_1.itemDataAxisNames, sortOrderSlices = expandedItemDataDTO.SortOrderSlices, area = expandInfo.pivotArea == _item_data_axis_builder_1.pivotAreaNames.columns ? areaNames.pivotColumnAxis : areaNames.pivotRowAxis, values = expandInfo.values, metaData = that._metaData, dataStorage = new _data_storage_1.dataStorage(expandedItemDataDTO.DataStorageDTO);
        var iterators = that._dataStorage.insert(dataStorage, sortOrderSlices);
        var expandedAreaNewRootItem = _item_data_axis_builder_1.itemDataAxisBuilder.build(area, that._dataStorage, metaData.getAxes()[area], sortOrderSlices, metaData, iterators);
        if (!!expandedAreaNewRootItem) {
            var expandedAreaRootItem = that._items[area], expandedItem = _item_data_axis_helper_1.itemDataAxisHelper.findFirstPointByUniqueValues(expandedAreaRootItem, values), expandedNewItem = _item_data_axis_helper_1.itemDataAxisHelper.findFirstPointByUniqueValues(expandedAreaNewRootItem, values);
            if (!!expandedNewItem) {
                var newChildren = expandedNewItem.getChildren();
                $.each(newChildren, function (_, child) {
                    child._setParent(expandedItem);
                });
                expandedItem._setChildren(newChildren);
            }
        }
    };
    itemDataManager.prototype.getDataStorage = function () {
        return this._dataStorage;
    };
    itemDataManager.prototype.getItemData = function () {
        return this._itemData;
    };
    itemDataManager.prototype.getMetaData = function () {
        return this._metaData;
    };
    itemDataManager.prototype._createMetaData = function (metaDataDTO) {
        var metaData = new _item_meta_data_1.itemMetaData(metaDataDTO);
        metaData.initialize();
        return metaData;
    };
    return itemDataManager;
}());
exports.itemDataManager = itemDataManager;
