﻿/**
* DevExpress Dashboard (_item-data-axis.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _item_data_axis_helper_1 = require("./internal/_item-data-axis-helper");
var helper = _item_data_axis_helper_1.itemDataAxisHelper;
var itemDataAxis = (function () {
    function itemDataAxis(dimensions, axisPoint) {
        this._dimensions = dimensions;
        this._axisPoint = axisPoint;
    }
    itemDataAxis.prototype.getDimensions = function () {
        return this._dimensions;
    };
    itemDataAxis.prototype.getRootPoint = function () {
        var getRoot = function (point) {
            var parent = point.getParent();
            if (parent)
                return getRoot(parent);
            return point;
        };
        return getRoot(this._axisPoint);
    };
    itemDataAxis.prototype.getPoints = function (ignoreRootPoint) {
        if (ignoreRootPoint === void 0) { ignoreRootPoint = false; }
        var dimensions = this.getDimensions(), lastLevelDimension = dimensions ? dimensions[dimensions.length - 1] : null;
        if (lastLevelDimension) {
            return this.getPointsByDimension(lastLevelDimension.id);
        }
        else {
            return ignoreRootPoint ? [] : [this.getRootPoint()];
        }
    };
    itemDataAxis.prototype.getAvaliableLeafPoints = function () {
        return this.getRootPoint().getAvaliableLeafPoints();
    };
    itemDataAxis.prototype.getPointsByDimension = function (dimensionId) {
        var root = this.getRootPoint(), points = [];
        if (dimensionId) {
            helper.eachPoint(root, function (point) {
                var dimension = point.getDimension();
                if (dimension && dimension.id == dimensionId) {
                    points.push(point);
                }
            });
        }
        else {
            points.push(root);
        }
        return points;
    };
    itemDataAxis.prototype.getPointByUniqueValues = function (values) {
        return helper.findFirstPointByUniqueValues(this.getRootPoint(), values);
    };
    itemDataAxis.prototype.getPointByUniqueValueAndDimension = function (value, dimensionId) {
        return helper.findFirstPointByUniqueValueAndDimension(this.getRootPoint(), value, dimensionId);
    };
    itemDataAxis.prototype.getPointByValues = function (values) {
        return helper.findFirstPointByValues(this.getRootPoint(), values);
    };
    return itemDataAxis;
}());
exports.itemDataAxis = itemDataAxis;
