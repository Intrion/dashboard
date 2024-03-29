﻿/**
* DevExpress Dashboard (_utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _knockout_utils_1 = require("./_knockout-utils");
var ko = require("knockout");
function collectionItemType(itemType) {
    var _this = this;
    return function (target, key) {
        var createObjectPropertyDescriptor = function () {
            var _subscription;
            var _val = _this[key];
            var getter = function () {
                return _val;
            };
            var setter = function (newVal) {
                if (!!_subscription) {
                    _subscription.dispose();
                    _subscription = null;
                }
                if (ko.isObservable(newVal) && Array.isArray(ko.unwrap(newVal))) {
                    _subscription = _knockout_utils_1.subscribeArrayChange(newVal, {
                        added: function (item) {
                            item.itemType(itemType);
                        }
                    });
                }
                _val = newVal;
            };
            return {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            };
        };
        var prototypePropertyDescriptor = {
            get: null,
            set: null,
            enumerable: true,
            configurable: true
        };
        var getter = function () {
            var descriptor = Object.getOwnPropertyDescriptor(this, key);
            if (descriptor === void 0) {
                Object.defineProperty(this, key, createObjectPropertyDescriptor());
            }
            return this[key];
        };
        var setter = function (newVal) {
            var descriptor = Object.getOwnPropertyDescriptor(this, key);
            if (descriptor === void 0) {
                Object.defineProperty(this, key, createObjectPropertyDescriptor());
            }
            this[key] = newVal;
        };
        prototypePropertyDescriptor.get = getter;
        prototypePropertyDescriptor.set = setter;
        if (delete _this[key]) {
            Object.defineProperty(target, key, prototypePropertyDescriptor);
        }
    };
}
exports.collectionItemType = collectionItemType;
