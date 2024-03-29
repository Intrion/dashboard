﻿/**
* DevExpress Dashboard (_hashset-wrapper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("./_utils");
var HashsetWrapper = (function () {
    function HashsetWrapper(array) {
        var _this = this;
        this.FNV_prime_32 = 16777619;
        this.FNV_offset_basis_32 = 2166136261;
        this.hashSet = {};
        array.forEach(function (item, index) {
            var hash = _this.getHash(item);
            var array = _this.hashSet[hash];
            if (array == null) {
                array = [];
                _this.hashSet[hash] = array;
            }
            array.push({ index: index, item: item });
        });
    }
    HashsetWrapper.prototype.contains = function (item) {
        return this.getItem(item) != null;
    };
    HashsetWrapper.prototype.getIntersection = function (array) {
        var _this = this;
        var result = [];
        array.forEach(function (item) {
            if (_this.contains(item))
                result.push(item);
        });
        return result;
    };
    HashsetWrapper.prototype.indexOf = function (item) {
        var found = this.getItem(item);
        return found != null ? found.index : -1;
    };
    HashsetWrapper.prototype.getItem = function (item) {
        var value = this.hashSet[this.getHash(item)];
        return value != null ? value.filter(function (val) { return _utils_1.arrayEquals(val.item, item); })[0] : undefined;
    };
    HashsetWrapper.prototype.getHash = function (obj) {
        var _this = this;
        if (Array.isArray(obj)) {
            return this.toHash(obj, function (item) { return _this.getHash(item); });
        }
        else {
            return this.toHash(String(obj).split(""), function (ch) { return ch.charCodeAt(0); });
        }
    };
    HashsetWrapper.prototype.toHash = function (arr, convertValue) {
        var _this = this;
        return arr.reduce(function (prev, curr) {
            return (prev ^ convertValue(curr)) * _this.FNV_prime_32;
        }, this.FNV_offset_basis_32);
    };
    return HashsetWrapper;
}());
exports.HashsetWrapper = HashsetWrapper;
