﻿/**
* DevExpress Dashboard (_helper-classes.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var NameGenerator = (function () {
    function NameGenerator() {
    }
    NameGenerator.validateName = function (object, nameCollection, propertyName, startIndex, addWhiteSpace) {
        if (addWhiteSpace === void 0) { addWhiteSpace = false; }
        var currentName = ko.unwrap(object[propertyName]);
        if (!NameGenerator.isValidName(currentName, nameCollection, propertyName)) {
            object[propertyName](NameGenerator.generateName(currentName, nameCollection, propertyName, startIndex, addWhiteSpace));
        }
    };
    NameGenerator.isValidName = function (name, nameCollection, propertyName) {
        return nameCollection.map(function (value) { return ko.unwrap(value[propertyName]); }).filter(function (value) { return value === name; }).length === 0;
    };
    NameGenerator.generateName = function (namePrefix, nameCollection, propertyName, startIndex, addWhiteSpace) {
        if (addWhiteSpace === void 0) { addWhiteSpace = false; }
        var getNewName = function (index) {
            return namePrefix + (addWhiteSpace ? ' ' : '') + index;
        };
        var i = startIndex ? startIndex : 0, name = getNewName(i);
        while (!NameGenerator.isValidName(name, nameCollection, propertyName)) {
            name = getNewName(++i);
        }
        return name;
    };
    return NameGenerator;
}());
exports.NameGenerator = NameGenerator;
var Guard = (function () {
    function Guard() {
    }
    Guard.isNotNull = function (object, name) {
        if (!object) {
            throw new Error(name + " should not be null");
        }
    };
    return Guard;
}());
exports.Guard = Guard;
var EnumManager = (function () {
    function EnumManager() {
    }
    EnumManager.getNamesAndValues = function (enumType) {
        return this.getNames(enumType).map(function (name) {
            return {
                name: name,
                value: enumType[name]
            };
        });
    };
    ;
    EnumManager.getNames = function (enumType) {
        return EnumManager._getObjectValues(enumType).filter(function (value) { return typeof value === 'string'; });
    };
    ;
    EnumManager.getValues = function (enumType) {
        return EnumManager._getObjectValues(enumType).filter(function (value) { return typeof value === 'number'; });
    };
    ;
    EnumManager._getObjectValues = function (enumType) {
        return Object.keys(enumType).map(function (key) { return enumType[key]; });
    };
    ;
    return EnumManager;
}());
exports.EnumManager = EnumManager;
