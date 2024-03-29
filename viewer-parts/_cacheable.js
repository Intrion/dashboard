﻿/**
* DevExpress Dashboard (_cacheable.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalCache = {};
function resetGlobalSizeCache() {
    globalCache = {};
}
exports.resetGlobalSizeCache = resetGlobalSizeCache;
function cacheable(cacheKey) {
    var _this = this;
    return function (target, propertyKey, descriptor) {
        if (typeof target !== 'function') {
            throw Error("The cacheable decorator can be applied only for static methods");
        }
        return {
            value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (!globalCache[cacheKey]) {
                    globalCache[cacheKey] = {};
                }
                var functionCache = globalCache[cacheKey];
                var argsKey = JSON.stringify(args);
                if (functionCache.hasOwnProperty(argsKey)) {
                    return functionCache[argsKey];
                }
                else {
                    var result = descriptor.value.apply(_this, args);
                    functionCache[argsKey] = result;
                    return result;
                }
            }
        };
    };
}
exports.cacheable = cacheable;
