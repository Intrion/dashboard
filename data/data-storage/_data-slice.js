/**
* DevExpress Dashboard (_data-slice.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../_utils");
var $ = require("jquery");
var dataSlice = (function () {
    function dataSlice(sliceKey, sliceDTO, decode, encode) {
        var keyIndexById = {}, valueIdByKey = {};
        $.each(sliceDTO.KeyIds, function (i, keyId) {
            keyIndexById[keyId] = i;
        });
        $.each(sliceDTO.ValueIds, function (valueId, key) {
            valueIdByKey[key] = valueId;
        });
        this._sliceKey = sliceKey;
        this._sliceDTO = sliceDTO;
        this._decode = decode;
        this._encode = encode;
        this._keyIndexById = keyIndexById;
        this._valueIdByKey = valueIdByKey;
    }
    dataSlice.prototype.getRowCount = function () {
        return Object.keys(this._sliceDTO.Data).length;
    };
    dataSlice.prototype.getKey = function () {
        return this._sliceKey;
    };
    dataSlice.prototype.getValue = function (rowKey, valueId) {
        var that = this, dto = that._sliceDTO, valueKey = dto.ValueIds[valueId], rowDTO = that._getRowDTO(rowKey), value = !!rowDTO && valueKey >= 0 ? rowDTO[valueKey] : null;
        return value === undefined ? null : value;
    };
    dataSlice.prototype.getRowValues = function (rowKey) {
        var that = this, values = {}, valueIdsByKey = that._valueIdByKey, rowDTO = that._getRowDTO(rowKey);
        $.each(rowDTO, function (key, value) {
            values[valueIdsByKey[key]] = value;
        });
        return values;
    };
    dataSlice.prototype.getRowKeyValues = function (rowKey) {
        var that = this, keyIds = that.getKeyIds(), keyValues = {};
        $.each(keyIds, function (_, keyId) {
            keyValues[keyId] = that.getKeyValue(rowKey, keyId);
        });
        return keyValues;
    };
    dataSlice.prototype._getRowDTO = function (rowKey) {
        var that = this;
        return that._sliceDTO.Data[that._stringifyKey(rowKey)];
    };
    dataSlice.prototype.getKeyValue = function (rowKey, keyId) {
        if (keyId === undefined)
            return null;
        var that = this, keyIndex = that._keyIndexById[keyId];
        return that._decode(keyId, rowKey[keyIndex]);
    };
    dataSlice.prototype.getKeyIds = function () {
        var that = this;
        return that._sliceDTO.KeyIds;
    };
    dataSlice.prototype.getValueIds = function () {
        return Object.keys(this._sliceDTO.ValueIds);
    };
    dataSlice.prototype.forEach = function (action) {
        var that = this;
        $.each(that._sliceDTO.Data, function (key) {
            return action({
                sliceKey: that._sliceKey,
                rowKey: that._parseKey(key)
            });
        });
    };
    dataSlice.prototype.append = function (slice) {
        var that = this, newRowKeys = [], iterator = {
            forEach: function (action) {
                $.each(newRowKeys, function (_, key) {
                    action({
                        sliceKey: that._sliceKey,
                        rowKey: key
                    });
                });
            }
        };
        slice.forEach(function (key) {
            var keyValues = slice.getRowKeyValues(key.rowKey), values = slice.getRowValues(key.rowKey), newRowKey = that.addRow(keyValues, values);
            newRowKeys.push(newRowKey);
        });
        return iterator;
    };
    dataSlice.prototype.addRow = function (keyValues, values) {
        var that = this, newRowKey = [], valueIds = that._sliceDTO.ValueIds, encode = that._encode;
        $.each(keyValues, function (keyId, keyValue) {
            newRowKey.push(encode(keyId, keyValue));
        });
        var valueDTO = {};
        $.each(values, function (valueId, value) {
            var valueKey = valueIds[valueId];
            if (valueKey === undefined) {
                var count = 0;
                $.each(valueIds, function () {
                    count++;
                });
                valueKey = count;
                valueIds[valueId] = valueKey;
            }
            valueDTO[valueKey] = value;
        });
        that._sliceDTO.Data[that._stringifyKey(newRowKey)] = valueDTO;
        return newRowKey;
    };
    dataSlice.prototype._parseKey = function (key) {
        return JSON.parse(key);
    };
    dataSlice.prototype._stringifyKey = function (key) {
        return '[' + key + ']';
    };
    return dataSlice;
}());
exports.dataSlice = dataSlice;
var sliceRepository = (function () {
    function sliceRepository(sliceListDTO, decode, encode) {
        this._sliceListDTO = sliceListDTO;
        this._sliceList = [];
        this._rowKeyConvertMap = {};
        this._sliceJoinCache = {};
        this._decode = decode;
        this._encode = encode;
        this._initialize(decode);
    }
    sliceRepository.prototype._initialize = function (decode) {
        var that = this;
        if (!that._sliceListDTO)
            return;
        $.each(that._sliceListDTO, function (index, sliceDTO) {
            var slice = new dataSlice(index, sliceDTO, decode, that._encode);
            that._sliceList.push(slice);
        });
    };
    sliceRepository.prototype.getAll = function () {
        return this._sliceList;
    };
    sliceRepository.prototype.getKey = function (keyIds) {
        var slice = this._getByKeyIds(keyIds);
        return slice ? this._sliceList.indexOf(slice) : -1;
    };
    sliceRepository.prototype.get = function (vsKey) {
        return this._sliceList[vsKey];
    };
    sliceRepository.prototype.getOrCreate = function (keyIds) {
        var that = this, slice = that._getByKeyIds(keyIds);
        if (!slice) {
            var sliceDTO = {
                KeyIds: keyIds,
                ValueIds: {},
                Data: {}
            };
            if (keyIds.length == 0) {
                sliceDTO.Data['[]'] = {};
            }
            slice = new dataSlice(that._sliceList.length, sliceDTO, that._decode, that._encode);
            that._sliceList.push(slice);
        }
        return slice;
    };
    sliceRepository.prototype.findDataRowKey = function (sliceKey, dataRowKey) {
        var that = this, newRowKey = [], map = that._getConvertMap(dataRowKey.sliceKey, sliceKey);
        for (var i = 0; i < map.length; i++) {
            newRowKey.push(dataRowKey.rowKey[map[i]]);
        }
        return {
            sliceKey: sliceKey,
            rowKey: newRowKey
        };
    };
    sliceRepository.prototype.getCrossValue = function (dataRows, valueId) {
        var that = this, dataRow1 = dataRows[0], dataRow2 = dataRows[1], sliceKey, value = null;
        if (!dataRow1)
            sliceKey = 0;
        else
            sliceKey = dataRow2 ? that._joinSliceKey(dataRow1.sliceKey, dataRow2.sliceKey) : dataRow1.sliceKey;
        if (sliceKey >= 0) {
            var newRowKey = [], map1 = null, map2 = null;
            if (dataRow1) {
                map1 = that._getConvertMap(dataRow1.sliceKey, sliceKey),
                    map2 = dataRow2 ? that._getConvertMap(dataRow2.sliceKey, sliceKey) : null;
                for (var i = 0; i < map1.length; i++) {
                    var index = map1[i], key = index >= 0 ? dataRow1.rowKey[index] : newRowKey[i];
                    newRowKey.push(key);
                }
                if (map2 != null) {
                    for (var i = 0; i < map2.length; i++) {
                        var index = map2[i], key = index >= 0 ? dataRow2.rowKey[index] : newRowKey[i];
                        newRowKey[i] = key;
                    }
                }
            }
            var slice = that.get(sliceKey);
            if (slice)
                value = slice.getValue(newRowKey, valueId);
        }
        return value;
    };
    sliceRepository.prototype.getKeyValue = function (dataRow, keyId) {
        var that = this, slice = that.get(dataRow.sliceKey), value = null;
        if (slice) {
            value = slice.getKeyValue(dataRow.rowKey, keyId);
        }
        return value;
    };
    sliceRepository.prototype.getValue = function (dataRow, valueId) {
        var that = this, slice = that.get(dataRow.sliceKey), value = null;
        if (slice) {
            value = slice.getValue(dataRow.rowKey, valueId);
        }
        return value;
    };
    sliceRepository.prototype.isEmpty = function () {
        return this._sliceList.filter(function (s) {
            if (s.getKeyIds().length === 0) {
                var values = s.getRowValues([]);
                return s.getValueIds().filter(function (id) { return values[id] !== null && values[id] !== undefined; }).length !== 0;
            }
            else {
                return s.getRowCount() !== 0;
            }
        }).length === 0;
    };
    sliceRepository.prototype._joinSliceKey = function (key1, key2) {
        var that = this, joinSliceCacheKey = [key1, key2];
        if (key2 < key1)
            joinSliceCacheKey = joinSliceCacheKey.reverse();
        var joinRes = that._sliceJoinCache[joinSliceCacheKey];
        if (joinRes == undefined) {
            var slice1 = that.get(key1), slice2 = that.get(key2), keyIds = slice1.getKeyIds().concat(slice2.getKeyIds());
            joinRes = that.getKey(keyIds);
            that._sliceJoinCache[joinSliceCacheKey] = joinRes;
        }
        return joinRes;
    };
    sliceRepository.prototype._getByKeyIds = function (keyIds) {
        var that = this, foundSlice = null;
        $.each(that._sliceList, function (_, slice) {
            if (_utils_1.areNotOrderedListsEqual(slice.getKeyIds(), keyIds)) {
                foundSlice = slice;
                return false;
            }
        });
        return foundSlice;
    };
    sliceRepository.prototype._getConvertMap = function (sliceFromKey, sliceToKey) {
        var that = this, convertMapCacheKey = [sliceFromKey, sliceToKey];
        var map = that._rowKeyConvertMap[convertMapCacheKey];
        if (!map) {
            var fromSlice = that.get(sliceFromKey), toSlice = that.get(sliceToKey);
            map = [];
            $.each(toSlice.getKeyIds(), function (_, keyId) {
                map.push(fromSlice.getKeyIds().indexOf(keyId));
            });
            that._rowKeyConvertMap[convertMapCacheKey] = map;
        }
        return map;
    };
    return sliceRepository;
}());
exports.sliceRepository = sliceRepository;
