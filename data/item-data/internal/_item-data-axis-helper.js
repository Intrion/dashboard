﻿/**
* DevExpress Dashboard (_item-data-axis-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var data_1 = require("devextreme/core/utils/data");
exports.itemDataAxisHelper = {
    eachPoint: function (point, _process) {
        var that = this, children = point.getChildren();
        if (_process(point) === false)
            return false;
        $.each(children, function (_, childPoint) {
            if (that.eachPoint(childPoint, _process) === false)
                return false;
        });
    },
    findFirstPoint: function (root, predicate) {
        var that = this, foundPoint = undefined;
        that.eachPoint(root, function (point) {
            var points = point.getAxisPath();
            if (predicate(points)) {
                foundPoint = point;
                return false;
            }
        });
        return foundPoint;
    },
    findFirstPointByUniqueValues: function (root, values) {
        var that = this;
        return that.findFirstPoint(root, function (points) {
            return that._equalPredicate(points, values, function (value, point) {
                return that._areEqual(value, point.getUniqueValue());
            });
        });
    },
    findFirstPointByValues: function (root, values) {
        var that = this;
        return that.findFirstPoint(root, function (points) {
            return that._equalPredicate(points, values, function (value, point) {
                return that._areEqual(value, point.getValue());
            });
        });
    },
    findFirstPointByUniqueValueAndDimension: function (root, value, dimensionId) {
        var that = this, foundPoint = undefined;
        that.eachPoint(root, function (point) {
            var dimension = point.getDimension();
            if (!!dimension && dimension.id === dimensionId && that._areEqual(value, point.getUniqueValue())) {
                foundPoint = point;
                return false;
            }
        });
        return foundPoint;
    },
    _areEqual: function (value1, value2) {
        return data_1.toComparable(value1, false) === data_1.toComparable(value2, false);
    },
    _equalPredicate: function (points, values, equal) {
        values = values || [];
        if (points.length != values.length)
            return false;
        var passes = true;
        $.each(values, function (index, value) {
            passes = passes && equal(value, points[index]);
            return passes;
        });
        return passes;
    },
    forSamePoints: function (baseItem, item, process) {
        var that = this;
        process(baseItem, item);
        $.each(baseItem.getChildren(), function (_, baseChild) {
            var child = that.findChildByUniqueValue(item, baseChild.getUniqueValue());
            if (child)
                that.forSamePoints(baseChild, child, process);
        });
    },
    findChildByUniqueValue: function (point, value) {
        var that = this, children = point.getChildren(), foundPoint = undefined;
        $.each(children, function (_, child) {
            if (that._areEqual(value, child.getUniqueValue())) {
                foundPoint = child;
                return false;
            }
        });
        return foundPoint;
    },
    getValuesByTuples: function (tuples, dimensionIds) {
        var values = [], dimensionCount = dimensionIds.length;
        $.each(tuples, function (index, tuple) {
            var value = [], axisPoint = tuple.getAxisPoint();
            while (axisPoint.getParent() != null) {
                value.push(axisPoint.getUniqueValue());
                if (dimensionCount == 1)
                    break;
                axisPoint = axisPoint.getParent();
            }
            value.reverse();
            values.push(value);
        });
        return values;
    }
};
