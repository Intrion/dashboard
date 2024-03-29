﻿/**
* DevExpress Dashboard (_item-data-axis-point.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var special_values_1 = require("../special-values");
var _formatter_1 = require("../_formatter");
exports.dataStorageSpecialIds = {
    DisplayText: '_DisplayText_{4873F9E9-65B2-4307-BB25-BFD09F6A2E54}',
    Value: '_Value_{E5597004-313E-4F79-B02E-DEA46EEB1BFE}'
};
var itemDataAxisPoint = (function () {
    function itemDataAxisPoint(levelInfo, dataRowKey) {
        this._info = levelInfo;
        this._dataRowKey = dataRowKey;
        this._children = [];
        this._parent = undefined;
    }
    itemDataAxisPoint.prototype._getSpecialValue = function (specialId) {
        var that = this, info = that._info;
        return info.getMetaDataValue(that._dataRowKey, specialId);
    };
    itemDataAxisPoint.prototype.getUniqueValue = function () {
        var that = this, info = that._info;
        return info.getBaseValue(that._dataRowKey);
    };
    itemDataAxisPoint.prototype.getValue = function () {
        var that = this;
        var value = that._getSpecialValue(exports.dataStorageSpecialIds.Value);
        if (value === null || value === undefined)
            value = that.getUniqueValue();
        if (value === special_values_1.specialValues.nullValueGuid)
            value = null;
        return value;
    };
    itemDataAxisPoint.prototype._getLevel = function () {
        return this._info.level;
    };
    itemDataAxisPoint.prototype._getServerText = function () {
        var that = this;
        return that._getSpecialValue(exports.dataStorageSpecialIds.DisplayText);
    };
    itemDataAxisPoint.prototype.getKey = function () {
        return this._dataRowKey;
    };
    itemDataAxisPoint.prototype.getAxisName = function () {
        return this._info.axisName;
    };
    itemDataAxisPoint.prototype.getChildren = function () {
        return this._children;
    };
    itemDataAxisPoint.prototype.getParent = function () {
        return this._parent;
    };
    itemDataAxisPoint.prototype.getAvaliableLeafPoints = function () {
        var children = this.getChildren();
        if (children && children.length) {
            return children.reduce(function (acc, child) {
                var lastLevelPoints = child.getAvaliableLeafPoints();
                if (lastLevelPoints && lastLevelPoints.length) {
                    acc = acc.concat(lastLevelPoints);
                }
                return acc;
            }, []);
        }
        return [this];
    };
    itemDataAxisPoint.prototype._setParent = function (parent) {
        this._parent = parent;
    };
    itemDataAxisPoint.prototype._setChildren = function (children) {
        this._children = children;
    };
    itemDataAxisPoint.prototype.getParentByDimensionId = function (dimensionId) {
        var current = this, dimension;
        while (current.getParent()) {
            dimension = current.getDimension();
            if (dimension && dimension.id == dimensionId) {
                return current;
            }
            current = current.getParent();
        }
        return dimensionId ? this : current;
    };
    itemDataAxisPoint.prototype.getDimensionValue = function (dimensionId) {
        var that = this, dimension = that.getDimension();
        if (!dimensionId || dimension && dimension.id == dimensionId) {
            return {
                getValue: function () {
                    return that.getValue();
                },
                getUniqueValue: function () {
                    return that.getUniqueValue();
                },
                getDisplayText: function () {
                    return that.getDisplayText();
                }
            };
        }
        else {
            var parent = that.getParent();
            return parent ? parent.getDimensionValue(dimensionId) : null;
        }
    };
    itemDataAxisPoint.prototype.getDisplayText = function () {
        var that = this, displayText = that._getServerText(), uniqueValue = that.getUniqueValue();
        if (uniqueValue === special_values_1.specialValues.olapNullValueGuid)
            return undefined;
        if (displayText == null) {
            var dimension = that.getDimension();
            if (dimension) {
                var format = that._info.metaData.getDimensionFormat(dimension.id), uniqueValue = this.getUniqueValue();
                displayText = uniqueValue === special_values_1.specialValues.nullValueGuid ?
                    _formatter_1.format(uniqueValue, format) :
                    _formatter_1.format(this.getValue(), format);
            }
        }
        return displayText;
    };
    itemDataAxisPoint.prototype.getDimension = function () {
        var that = this, axisName = that.getAxisName(), dimensions = that._info.metaData.getAxes()[axisName], dimension = dimensions[that._getLevel()];
        return dimension;
    };
    itemDataAxisPoint.prototype.getDimensions = function () {
        var that = this, parent = that.getParent();
        return parent ? parent.getDimensions().concat([that.getDimension()]) : [];
    };
    itemDataAxisPoint.prototype.getAxisPath = function () {
        return this._selectPath(undefined);
    };
    itemDataAxisPoint.prototype.getUniquePath = function () {
        return this._selectPath(function (point) {
            return point.getUniqueValue();
        });
    };
    itemDataAxisPoint.prototype.getValuePath = function (includeProc) {
        return this._selectIncludedPath(includeProc, function (point) {
            return point.getValue();
        });
    };
    itemDataAxisPoint.prototype.getDisplayPath = function (includeProc) {
        return this._selectIncludedPath(includeProc, function (point) {
            return point.getDisplayText();
        });
    };
    itemDataAxisPoint.prototype.getValues = function () {
        var value = [], axisPoint = this;
        while (axisPoint.getUniqueValue() != null) {
            value.push(axisPoint.getUniqueValue());
            if (this.getDimensions().length == 1)
                break;
            axisPoint = axisPoint.getParent();
        }
        value.reverse();
    };
    itemDataAxisPoint.prototype._selectIncludedPath = function (includeProc, pointProc) {
        return this._selectPath(function (point) {
            if (!includeProc || includeProc(point)) {
                return pointProc(point);
            }
            else {
                return undefined;
            }
        });
    };
    itemDataAxisPoint.prototype._selectPath = function (predicate) {
        var action = predicate ? predicate : function (axisPoint) {
            return axisPoint;
        }, buildParentsList = function (axisPoint) {
            var parent = axisPoint.getParent();
            if (parent) {
                var newValue = action(axisPoint);
                return buildParentsList(parent).concat(newValue == undefined ? [] : [newValue]);
            }
            else {
                return [];
            }
        };
        return buildParentsList(this);
    };
    itemDataAxisPoint.prototype.getPointsByDimensionId = function (dimensionId) {
        return this._getPointsByDimensionId(dimensionId, function (point) {
            return point;
        });
    };
    itemDataAxisPoint.prototype.getDisplayTextsByDimensionId = function (dimensionId) {
        return this._getPointsByDimensionId(dimensionId, function (point) {
            return point.getDisplayText();
        });
    };
    itemDataAxisPoint.prototype._getPointsByDimensionId = function (dimensionId, pointProc) {
        var result = [];
        this._findPoints(dimensionId, result, pointProc);
        return result;
    };
    itemDataAxisPoint.prototype._findPoints = function (dimensionId, result, pointProc) {
        var dimension = this.getDimension();
        if (dimension && dimension.id === dimensionId) {
            result.push(pointProc(this));
            return;
        }
        var children = this.getChildren();
        for (var i = 0; i < children.length; i++) {
            children[i]._findPoints(dimensionId, result, pointProc);
        }
    };
    return itemDataAxisPoint;
}());
exports.itemDataAxisPoint = itemDataAxisPoint;
