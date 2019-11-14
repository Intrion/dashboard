/**
* DevExpress Dashboard (_item-data.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _item_data_axis_point_1 = require("./_item-data-axis-point");
var _item_data_tuple_1 = require("./_item-data-tuple");
var _utils_1 = require("../_utils");
var _item_data_axis_1 = require("./_item-data-axis");
var _item_data_axis_names_1 = require("../../viewer-parts/viewer/_item-data-axis-names");
var _item_meta_data_1 = require("./internal/_item-meta-data");
var _formatter_1 = require("../_formatter");
var $ = require("jquery");
var itemData = (function () {
    function itemData(data, rootItems) {
        this._data = data;
        this._rootItems = rootItems;
    }
    itemData.prototype.isEmpty = function () {
        return this._data.storage.isEmpty();
    };
    itemData.prototype.getCurrentFilterValues = function (dimensionIds, axisName, selectedValues) {
        var that = this, dimensionCount = dimensionIds.length;
        if (dimensionCount > 0) {
            var axis = this.getAxis(axisName), tuples = [];
            if (selectedValues) {
                $.each(selectedValues, function (index, point) {
                    var value = point[0];
                    var axisPoint = $.grep(axis.getPointsByDimension(dimensionIds[0]), function (point) {
                        return _utils_1.checkValuesAreEqual(value, point.getUniqueValue());
                    })[0];
                    for (var i = 1; i < dimensionCount; i++) {
                        value = point[i];
                        axisPoint = $.grep(axisPoint.getChildren(), function (point) {
                            return _utils_1.checkValuesAreEqual(value, point.getUniqueValue());
                        })[0];
                    }
                    tuples.push(new _item_data_tuple_1.itemDataTuple([axisPoint]));
                });
            }
            return tuples;
        }
        return null;
    };
    itemData.prototype.getCurrentDrillDownValues = function (dimensionIds, axisName) {
        var that = this, dimensionCount = dimensionIds.length;
        if (dimensionCount > 0) {
            var axis = that.getAxis(axisName), axisPoints = axis.getPointsByDimension(dimensionIds[0]);
            if (axisPoints.length > 0) {
                var parentPoint = axisPoints[0].getParent();
                if (parentPoint.getParent() != null) {
                    return new _item_data_tuple_1.itemDataTuple([parentPoint]);
                }
                else {
                    return null;
                }
            }
            else {
                return null;
            }
        }
        return null;
    };
    itemData.prototype.getAvailableTuples = function (dimensionIds, axisName) {
        var that = this, dimensionCount = dimensionIds.length;
        if (dimensionCount > 0) {
            var axis = this.getAxis(axisName), tuple, tuples = [];
            $.each(axis.getPointsByDimension(dimensionIds[dimensionCount - 1]), function (index, axisPoint) {
                tuples.push(new _item_data_tuple_1.itemDataTuple([axisPoint]));
            });
            return tuples;
        }
        return null;
    };
    itemData.prototype.getAllSelectionValues = function (dimensionIds) {
        var multiData = this, allAxisNames = multiData.getAxisNames(), axisNames = [], selectionList = [], fillAvailableValues = function (axes, row, inputSelection) {
            var firstAxis = multiData.getAxis(axes[0]), nextAxes = axes.slice(1, axes.length), axisPoints = firstAxis.getPoints() || [];
            $.each(axisPoints, function (_, axisPoint) {
                var newRow = row.slice();
                $.each(axisPoint.getAxisPath(), function (__, pathPoint) {
                    if ($.grep(dimensionIds, function (id) { return id === pathPoint.getDimension().id; }).length > 0) {
                        newRow.push(pathPoint.getUniqueValue());
                    }
                });
                if (axes.length > 1) {
                    fillAvailableValues(nextAxes, newRow, inputSelection);
                }
                else {
                    inputSelection.push(newRow);
                }
            });
        };
        if (dimensionIds && dimensionIds.length > 0) {
            $.each(dimensionIds, function (_, id) {
                $.each(allAxisNames, function (__, axisName) {
                    if ($.grep(multiData.getAxis(axisName).getDimensions(), function (descr) {
                        return descr.id === id;
                    }).length > 0
                        && axisNames.indexOf(axisName) === -1) {
                        axisNames.push(axisName);
                    }
                });
            });
            fillAvailableValues(axisNames, [], selectionList);
        }
        return selectionList;
    };
    itemData.prototype.getMeasuresByIds = function (measureIds) {
        var that = this, measures = [];
        $.each(measureIds, function (i, id) {
            measures.push(that.getMeasureById(id));
        });
        return measures;
    };
    itemData.prototype.getAxisNames = function () {
        return this._data.metaData.getAxisNames();
    };
    itemData.prototype.getAxis = function (axisName) {
        if (axisName === undefined) {
            axisName = _item_data_axis_names_1.itemDataAxisNames.defaultAxis;
        }
        var dimensions = this.getDimensions(axisName), root = this._rootItems[axisName];
        return new _item_data_axis_1.itemDataAxis(dimensions, root);
    };
    itemData.prototype.getDimensions = function (axisName) {
        return this._data.metaData.getDimensions(axisName);
    };
    itemData.prototype.getColorMeasures = function () {
        return this._data.metaData.getColorMeasures();
    };
    itemData.prototype.getMeasures = function () {
        return this._data.metaData.getMeasures();
    };
    itemData.prototype.getDeltas = function () {
        return this._data.metaData.getDeltas();
    };
    itemData.prototype.getMeasureById = function (id) {
        return this._data.metaData.getMeasureById(id);
    };
    itemData.prototype.getDeltaById = function (id) {
        return this._data.metaData.getDeltaById(id);
    };
    itemData.prototype.getSlice = function (value) {
        return (value instanceof _item_data_tuple_1.itemDataTuple) ? this._getSliceByTuple(value) :
            (value instanceof _item_data_axis_point_1.itemDataAxisPoint) ? this._getSliceByAxisPoint(value) : null;
    };
    itemData.prototype.getMeasureFormat = function (measureId) {
        return this._data.metaData.getMeasureFormat(measureId);
    };
    itemData.prototype.getColorMeasureValue = function (colorMeasureId) {
        return this._getValue(colorMeasureId);
    };
    itemData.prototype.getConditionalFormattingMeasureValue = function (cfMeasureId) {
        return this._getValue(cfMeasureId);
    };
    itemData.prototype.getMeasureValue = function (measureId) {
        var that = this, format = that.getMeasureFormat(measureId);
        return that._getMeasureValueByKeys(that._getKeys(), measureId, format);
    };
    itemData.prototype.getPointsByDimensionId = function (dimensionId) {
        var points = [], root, axis;
        var that = this;
        $.each(that._data.metaData.getAxes(), function (axisName, dimensions) {
            var foundDimensions = $.grep(dimensions, function (dimension) {
                return dimension.id === dimensionId;
            });
            if (foundDimensions) {
                root = that._rootItems[axisName];
                axis = new _item_data_axis_1.itemDataAxis(dimensions, root);
                points = axis.getPointsByDimension(dimensionId);
                return false;
            }
        });
        return points;
    };
    itemData.prototype._getKeys = function (points) {
        var that = this, rootItems = that._rootItems, keysList = [];
        $.each(rootItems, function (axisName, root) {
            var userPoint = (points && points[axisName]), point = userPoint || root;
            keysList.push(point.getKey());
        });
        return keysList;
    };
    itemData.prototype._getValue = function (measureId) {
        var that = this;
        return that._getCellValue(that._getKeys(), measureId);
    };
    itemData.prototype._getMeasureValueByKeys = function (keys, mId, format) {
        var that = this;
        return {
            getValue: function () {
                return that._getCellValue(keys, mId);
            },
            getDisplayText: function () {
                return that._getCellDisplayText(keys, mId, format);
            }
        };
    };
    itemData.prototype._getDeltaValueByKeys = function (keys, deltaIds, formats) {
        var that = this, names = _item_meta_data_1.deltaValueNames, getValueItem = function (valueName) {
            return {
                getValue: function () {
                    return that._getCellValue(keys, deltaIds[valueName]);
                },
                getDisplayText: function () {
                    var format = formats[valueName];
                    if (format) {
                        format = {
                            NumericFormat: format
                        };
                    }
                    return that._getCellDisplayText(keys, deltaIds[valueName], format);
                }
            };
        };
        return {
            getActualValue: function () {
                return getValueItem(names.actualValue);
            },
            getTargetValue: function () {
                return getValueItem(names.targetValue);
            },
            getAbsoluteVariation: function () {
                return getValueItem(names.absoluteVariation);
            },
            getPercentVariation: function () {
                return getValueItem(names.percentVariation);
            },
            getPercentOfTarget: function () {
                return getValueItem(names.percentOfTarget);
            },
            getIsGood: function () {
                return getValueItem(names.isGood);
            },
            getIndicatorType: function () {
                return getValueItem(names.indicatorType);
            },
            getDisplayValue: function () {
                return getValueItem(names.mainValue);
            },
            getDisplaySubValue1: function () {
                return getValueItem(names.subValue1);
            },
            getDisplaySubValue2: function () {
                return getValueItem(names.subValue2);
            }
        };
    };
    itemData.prototype._createPointsHash = function (axisPoints) {
        var hash = {};
        for (var i = 0; i < axisPoints.length; i++) {
            var areaName = axisPoints[i].getAxisName();
            hash[areaName] = axisPoints[i];
        }
        return hash;
    };
    itemData.prototype.getMeasureValueByAxisPoints = function (measureId, axisPoints) {
        var that = this, format = that.getMeasureFormat(measureId), pointsHash = that._createPointsHash(axisPoints);
        return that._getMeasureValueByKeys(that._getKeys(pointsHash), measureId, format);
    };
    itemData.prototype.getDeltaValue = function (deltaId) {
        var that = this, metaData = that._data.metaData, deltaIds = metaData.getDeltaValueIds(deltaId), formats = metaData.getDeltaFormats(deltaId);
        return that._getDeltaValueByKeys(that._getKeys(), deltaIds, formats);
    };
    itemData.prototype.getDeltaValueByAxisPoints = function (deltaId, axisPoints) {
        var that = this, metaData = this._data.metaData, deltaIds = metaData.getDeltaValueIds(deltaId), formats = metaData.getDeltaFormats(deltaId), pointsHash = this._createPointsHash(axisPoints);
        return this._getDeltaValueByKeys(that._getKeys(pointsHash), deltaIds, formats);
    };
    itemData.prototype.getDataMembers = function () {
        return this._data.metaData.getDataMembers();
    };
    itemData.prototype.createTuple = function (values) {
        var that = this, axisPoints = [];
        if (values[0] instanceof _item_data_axis_point_1.itemDataAxisPoint) {
            axisPoints = values;
        }
        else {
            $.each(values, function (index, axisValue) {
                var axis = that.getAxis(axisValue.AxisName), axisPoint = axis.getPointByUniqueValues(axisValue.Value);
                axisPoints.push(axisPoint);
            });
        }
        return new _item_data_tuple_1.itemDataTuple(axisPoints);
    };
    itemData.prototype._getCellValue = function (keys, valueId) {
        return this._data.storage.getCrossValue(keys, valueId);
    };
    itemData.prototype._getCellDisplayText = function (keys, valueId, format) {
        return format ? _formatter_1.format(this._getCellValue(keys, valueId), format) : undefined;
    };
    itemData.prototype._getSliceByAxisPoint = function (axisPoint) {
        var that = this, rootItems = that._rootItems, newRootItems = {};
        $.each(rootItems, function (name, item) {
            newRootItems[name] = axisPoint.getAxisName() === name ? axisPoint : item;
        });
        return new itemData(that._data, newRootItems);
    };
    itemData.prototype._getSliceByTuple = function (tuple) {
        var data = this;
        $.each(tuple._axisPoints, function (_, axisPoint) {
            data = data._getSliceByAxisPoint(axisPoint);
        });
        return data;
    };
    return itemData;
}());
exports.itemData = itemData;
