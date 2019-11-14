/**
* DevExpress Dashboard (_object-properties-wrapper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var query_1 = require("devextreme/data/query");
var ko = require("knockout");
;
var ObjectPropertiesWrapper = (function () {
    function ObjectPropertiesWrapper(options) {
        var _this = this;
        this._serializationInfo = [];
        this.isPropertyVisible = function (name) {
            if (!_this._serializationInfo.filter(function (i) { return i.propertyName === name; })[0]) {
                throw new Error("unknown property");
            }
            var result = true;
            var propertyFilter = _this.visibilityFilterRules[name];
            if (propertyFilter) {
                result = !!query_1.default([_this]).filter(propertyFilter).toArray().length;
            }
            return result;
        };
        this.isPropertyDisabled = function (name) {
            if (!_this._serializationInfo.filter(function (i) { return i.propertyName === name; })[0]) {
                throw new Error("unknown property");
            }
            var result = false;
            var propertyFilter = _this.disabledFilterRules[name];
            if (propertyFilter) {
                result = !!query_1.default([_this]).filter(propertyFilter).toArray().length;
            }
            return result;
        };
        this.model = options.model;
        this.visibilityFilterRules = options.visibilityFilterRules || {};
        this.disabledFilterRules = options.disabledFilterRules || {};
        this.summary = options.summary;
        this.getPropertiesFromContainer(this.model, options.properties);
        if (options.modelExtention) {
            this.getPropertiesFromContainer(options.modelExtention, options.properties);
        }
        if (options.properties.length === 0) {
            this._serializationInfo = this.model["getInfo"]();
            this._serializationInfo.forEach(function (propertyInfo) {
                _this[propertyInfo.propertyName] = _this.model[propertyInfo.propertyName];
            });
        }
    }
    ObjectPropertiesWrapper.prototype.getPropertiesFromContainer = function (cur, properties) {
        var _this = this;
        properties.forEach(function (propertyInfo) {
            if (propertyInfo["container"]) {
                var containerObject = ko.unwrap(cur[propertyInfo["container"].propertyName]);
                if (!!containerObject) {
                    _this.getPropertiesFromContainer(containerObject, propertyInfo["properties"]);
                }
            }
            else {
                var sourcePropertyName = propertyInfo.propertyName, targetPropertyName = propertyInfo.replacementPropertyName || sourcePropertyName;
                if (cur[sourcePropertyName]) {
                    _this[targetPropertyName] = (propertyInfo.sourceObject || cur[sourcePropertyName]);
                    if (sourcePropertyName !== targetPropertyName) {
                        _this._serializationInfo.push(__assign({}, propertyInfo, { propertyName: targetPropertyName }));
                    }
                    else {
                        _this._serializationInfo.push(propertyInfo);
                    }
                }
            }
        });
    };
    ObjectPropertiesWrapper.prototype.addProperty = function (propertyValue, info) {
        this[info.propertyName] = propertyValue;
        this._serializationInfo.push(info);
    };
    ObjectPropertiesWrapper.prototype.getInfo = function () {
        return this._serializationInfo;
    };
    ObjectPropertiesWrapper.prototype.isEmpty = function () {
        var _this = this;
        if (this._serializationInfo.length !== 0) {
            var everythingIsInvisible_1 = true;
            this._serializationInfo.forEach(function (i) {
                if (_this.isPropertyVisible(i.propertyName))
                    everythingIsInvisible_1 = false;
            });
            return everythingIsInvisible_1;
        }
        return true;
    };
    return ObjectPropertiesWrapper;
}());
exports.ObjectPropertiesWrapper = ObjectPropertiesWrapper;
