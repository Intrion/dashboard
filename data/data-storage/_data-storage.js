/**
* DevExpress Dashboard (_data-storage.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_slice_1 = require("./_data-slice");
var $ = require("jquery");
var dataStorage = (function () {
    function dataStorage(dto) {
        this._sliceRep = this._createSliceRep(dto);
    }
    dataStorage.prototype._createSliceRep = function (dto) {
        var decodeMaps = dto.EncodeMaps, encodeMaps = {}, encodeCounters = {}, sliceListDTO = dto.Slices, decode = function (keyId, key) {
            return decodeMaps[keyId][key];
        }, encode = function (keyId, value) {
            var map = encodeMaps[keyId];
            if (!map) {
                map = {};
                var decodeMap = decodeMaps[keyId];
                if (!decodeMap) {
                    decodeMap = [];
                    decodeMaps[keyId] = decodeMap;
                }
                encodeCounters[keyId] = decodeMap.length;
                $.each(decodeMap, function (index, value) {
                    map[value] = index;
                });
                encodeMaps[keyId] = map;
            }
            var code = map[value];
            if (code === undefined) {
                var counter = encodeCounters[keyId];
                map[value] = counter;
                encodeCounters[keyId] = ++counter;
                decodeMaps[keyId].push(value);
            }
            return map[value];
        };
        return new _data_slice_1.sliceRepository(sliceListDTO, decode, encode);
    };
    dataStorage.prototype._initialize = function () {
    };
    dataStorage.prototype.getSlices = function () {
        return this._sliceRep.getAll();
    };
    dataStorage.prototype.getSlice = function (sliceKey) {
        return this._sliceRep.get(sliceKey);
    };
    dataStorage.prototype.getSliceKey = function (keyIds) {
        return this._sliceRep.getKey(keyIds);
    };
    dataStorage.prototype.getSliceByIds = function (keyIds) {
        return this._sliceRep._getByKeyIds(keyIds);
    };
    dataStorage.prototype.getOrCreateSlice = function (keyIds) {
        return this._sliceRep.getOrCreate(keyIds);
    };
    dataStorage.prototype.findDataRowKey = function (sliceKey, dataRowKey) {
        return this._sliceRep.findDataRowKey(sliceKey, dataRowKey);
    };
    dataStorage.prototype.getCrossValue = function (dataRowKeys, valueId) {
        return this._sliceRep.getCrossValue(dataRowKeys, valueId);
    };
    dataStorage.prototype.getKeyValue = function (dataRow, keyId) {
        return this._sliceRep.getKeyValue(dataRow, keyId);
    };
    dataStorage.prototype.getValue = function (dataRow, valueId) {
        return this._sliceRep.getValue(dataRow, valueId);
    };
    dataStorage.prototype.isEmpty = function () {
        return this._sliceRep.isEmpty();
    };
    dataStorage.prototype.insert = function (ds, sortOrderSlices) {
        var that = this, slices = ds.getSlices(), iterators = {};
        $.each(slices, function (i, slice) {
            var keyIds = slice.getKeyIds();
            var ownSlice = that.getOrCreateSlice(keyIds);
            iterators[ownSlice.getKey()] = ownSlice.append(slice);
        });
        return iterators;
    };
    return dataStorage;
}());
exports.dataStorage = dataStorage;
