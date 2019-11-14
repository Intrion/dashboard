/**
* DevExpress Dashboard (_item-data-axis-builder.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _item_data_axis_point_1 = require("../_item-data-axis-point");
var _utils_1 = require("../../_utils");
var $ = require("jquery");
exports.pivotAreaNames = {
    columns: 'Columns',
    rows: 'Rows'
};
exports.itemDataAxisBuilder = {
    build: function (name, storage, dimensions, sortOrderSlices, metaData, iterators) {
        var that = this;
        var keyIds = [];
        $.each(dimensions, function (_, dimension) {
            keyIds.push(dimension.id);
        });
        var allSlicesKeyIdsList = that._getKeyIdsList(keyIds), cache = {}, levelInfoList = [];
        $.each(allSlicesKeyIdsList, function (index, keyIds) {
            var baseKeyIds = keyIds.slice(-1), baseKeyId = baseKeyIds.length > 0 ? baseKeyIds[0] : null, metaDataSliceKey = storage.getSliceKey(baseKeyIds), dataSlice = storage.getOrCreateSlice(keyIds), level = index - 1;
            levelInfoList.push({
                axisName: name,
                metaData: metaData,
                dataSlice: dataSlice,
                level: level,
                getMetaDataValue: function (dataRowKey, valueId) {
                    if (metaDataSliceKey < 0)
                        return null;
                    var metaDataRowKey = storage.findDataRowKey(metaDataSliceKey, dataRowKey);
                    return storage.getValue(metaDataRowKey, valueId);
                },
                getBaseValue: function (dataRowKey) {
                    return (level >= 0) ? storage.getKeyValue(dataRowKey, baseKeyId) : null;
                }
            });
        });
        $.each(allSlicesKeyIdsList, function (_, keyIds) {
            if (keyIds.length > 0 && !that._isSortOrderSlice(keyIds, sortOrderSlices))
                return;
            var levelInfo = levelInfoList[keyIds.length];
            var slice = levelInfo.dataSlice;
            var iterator = (slice && iterators) ? iterators[slice.getKey()] : slice;
            if (iterator) {
                iterator.forEach(function (dataRowKey) {
                    var item = null, childItem = null;
                    do {
                        var level = dataRowKey.rowKey.length;
                        item = cache[dataRowKey.rowKey];
                        var exists = !!item;
                        if (!exists) {
                            var levelInfo = levelInfoList[level];
                            item = new _item_data_axis_point_1.itemDataAxisPoint(levelInfo, dataRowKey);
                            cache[dataRowKey.rowKey] = item;
                        }
                        if (childItem != null) {
                            item.getChildren().push(childItem);
                            childItem._setParent(item);
                        }
                        if (exists || level == 0)
                            break;
                        var prevSliceKey = levelInfoList[level - 1].dataSlice.getKey();
                        dataRowKey = storage.findDataRowKey(prevSliceKey, dataRowKey);
                        childItem = item;
                    } while (true);
                });
            }
        });
        return cache[[]];
    },
    _getKeyIdsList: function (keyIds) {
        var list = [[]];
        $.each(keyIds, function (i, _) {
            var slice = keyIds.slice(0, i + 1);
            list.push(slice);
        });
        return list;
    },
    _isSortOrderSlice: function (slice, sortOrderSlices) {
        var result = !sortOrderSlices || sortOrderSlices.length == 0;
        if (!result) {
            $.each(sortOrderSlices, function (_, orderSlice) {
                result = result || _utils_1.areNotOrderedListsEqual(slice, orderSlice);
                return !result;
            });
        }
        return result;
    }
};
