﻿/**
* DevExpress Dashboard (_grid-data-controller.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _data_controller_base_1 = require("./_data-controller-base");
var _grid_bar_calculator_1 = require("../_grid-bar-calculator");
var _utils_1 = require("../_utils");
var _item_data_axis_names_1 = require("../../viewer-parts/viewer/_item-data-axis-names");
var $ = require("jquery");
var GridColumnType = {
    Dimension: 'Dimension',
    Measure: 'Measure',
    Delta: 'Delta',
    Sparkline: 'Sparkline',
    Hyperlink: 'Hyperlink'
}, DeltaValueType = {
    ActualValue: 'ActualValue',
    AbsoluteVariation: 'AbsoluteVariation',
    PercentVariation: 'PercentVariation',
    PercentOfTarget: 'PercentOfTarget'
};
var gridDataController = (function (_super) {
    __extends(gridDataController, _super);
    function gridDataController(options) {
        var _this = _super.call(this, options) || this;
        var pushColumn = function (columnName, columnViewModel) {
            _this._columnRepository[columnName] = {
                columnName: columnName,
                column: columnViewModel,
                barCalculator: columnViewModel.BarViewModel ? new _grid_bar_calculator_1.gridBarCalculator(columnViewModel.BarViewModel.AlwaysShowZeroLevel) : null
            };
            if (_this.viewModel.SelectionDataMembers && _this.viewModel.SelectionDataMembers.indexOf(columnName) !== -1) {
                _this._selectionMembers.push(columnName);
            }
        };
        _this._columnRepository = {};
        _this._selectionMembers = [];
        if (!!_this.multiData) {
            if (!!_this.viewModel.HasDimensionColumns) {
                _this._axisColumnPoints = _this.multiData.getAxis(_this.viewModel.ColumnAxisName).getPoints();
            }
            if (!!_this.viewModel.SparklineAxisName) {
                _this._axisSparklinePoints = _this.multiData.getAxis(_this.viewModel.SparklineAxisName).getPoints();
            }
            (_this.viewModel.Columns || []).forEach(function (columnViewModel) {
                pushColumn(columnViewModel.DataId, columnViewModel);
            });
        }
        return _this;
    }
    gridDataController.prototype.getDataSource = function () {
        var that = this, list = [], listItem, hasColumns = (that.viewModel.Columns || []).length > 0, axisPointsCount = !!that._axisColumnPoints ? that._axisColumnPoints.length : +hasColumns;
        for (var rowIndex = 0; rowIndex < axisPointsCount; rowIndex++) {
            listItem = { index: rowIndex };
            $.each(that._columnRepository, function (columnName, columnInfo) {
                var valueItem = that._getValueItem(columnInfo, rowIndex);
                listItem[columnName] = valueItem.getValue();
                if (columnInfo.column.ColumnType === GridColumnType.Hyperlink && !!columnInfo.column.DataAttributeId) {
                    listItem[columnName + '_' + columnInfo.column.DataAttributeId] = valueItem.getUriValue();
                }
            });
            list.push(listItem);
        }
        return {
            store: {
                type: 'array',
                data: list,
                key: 'index'
            }
        };
    };
    gridDataController.prototype.getValueItem = function (columnName, rowIndex) {
        return this._getValueItem(this._columnRepository[columnName], rowIndex);
    };
    gridDataController.prototype._getValueItem = function (columnInfo, rowIndex) {
        var that = this;
        var columnName = columnInfo.columnName;
        switch (columnInfo.column.ColumnType) {
            case GridColumnType.Measure:
                if (columnInfo.column.DisplayMode === 'Bar') {
                    return this._getBarCellValue(columnName, rowIndex, columnInfo.barCalculator);
                }
                else {
                    return this._getMeasureCellValue(columnName, rowIndex);
                }
            case GridColumnType.Delta:
                return that._getDeltaValue(columnName, rowIndex, columnInfo.column.DisplayMode === 'Bar' ? columnInfo.barCalculator : null, columnInfo.column.DeltaValueType, columnInfo.column.IgnoreDeltaColor);
            case GridColumnType.Sparkline:
                return that._getSparklineCellValues(columnName, rowIndex, columnInfo.column.SparklineOptions);
            case GridColumnType.Hyperlink:
                return that._getCellValue(columnName, columnInfo.column.DataAttributeId, rowIndex);
            case GridColumnType.Dimension:
                return that._getCellValue(columnName, null, rowIndex);
        }
    };
    ;
    gridDataController.prototype.getSelectionValues = function (values) {
        var that = this, point, resultPoint, result = [], selectionMembers = that._selectionMembers, fit, columns = that.viewModel.Columns, visibleDimensions = columns.map(function (column) { return column.DataId; });
        if (values.length > selectionMembers.length)
            values = values.slice(-selectionMembers.length);
        $.each(that._axisColumnPoints, function (index, axisPoint) {
            fit = false;
            $.each(selectionMembers, function (memberIndex, member) {
                point = that._findAxisPoint(member, axisPoint);
                if (point && values.length > memberIndex) {
                    if (!_utils_1.checkValuesAreEqual(point.getUniqueValue(), values[memberIndex])) {
                        fit = false;
                        return false;
                    }
                    resultPoint = point;
                }
                fit = true;
            });
            if (fit && resultPoint) {
                result = resultPoint._selectPath(function (point) {
                    var index = visibleDimensions.indexOf(point.getDimension().id);
                    if (index === -1 || columns[index].DisplayMode != "Image")
                        return point.getUniqueValue();
                    else
                        return;
                });
                return;
            }
        });
        return result;
    };
    gridDataController.prototype.getSelectedRowKeys = function (valuesSet) {
        var that = this, keys = [], selectionMembers = that._selectionMembers, checkAxisPoint = function (axisPoint, values) {
            var point;
            for (var i = 0; i < values.length; i++) {
                point = that._findAxisPoint(selectionMembers[i], axisPoint);
                if (!_utils_1.checkValuesAreEqual(point.getUniqueValue(), values[i]))
                    return false;
            }
            return true;
        };
        $.each(that._axisColumnPoints, function (index, axisPoint) {
            $.each(valuesSet, function (_, values) {
                if (values.length > selectionMembers.length)
                    values = values.slice(-selectionMembers.length);
                if (checkAxisPoint(axisPoint, values)) {
                    keys.push(index);
                    return;
                }
            });
        });
        return keys;
    };
    gridDataController.prototype.getDimensionValues = function (rowIndex) {
        return this._axisColumnPoints[rowIndex].getUniquePath();
    };
    gridDataController.prototype.getTotalValue = function (measureId) {
        return this.multiData.getMeasureValue(measureId).getDisplayText();
    };
    gridDataController.prototype._getBarCellValue = function (columnName, rowIndex, barCalculator) {
        var that = this, item = this.multiData.getMeasureValueByAxisPoints(columnName, that._getPointArray(rowIndex));
        barCalculator.addValue(item);
        return {
            getValue: function () {
                return item.getValue();
            },
            getData: function () {
                return that._getBarData(barCalculator, item, rowIndex);
            },
            getStyleSettingsInfo: function () {
                return that._getStyleSettingsInfo(columnName, rowIndex);
            }
        };
    };
    gridDataController.prototype._getBarData = function (barCalculator, item, rowIndex) {
        return {
            zeroValue: barCalculator.getZeroPosition(),
            normalizedValue: barCalculator.getNormalizedValue(rowIndex || 0),
            text: item.getDisplayText()
        };
    };
    gridDataController.prototype._getMeasureCellValue = function (columnName, rowIndex) {
        var that = this, item = that.multiData.getMeasureValueByAxisPoints(columnName, that._getPointArray(rowIndex)), value = item.getValue();
        return {
            getValue: function () {
                return value;
            },
            getData: function () {
                return {
                    value: item.getValue(),
                    displayText: item.getDisplayText()
                };
            },
            getStyleSettingsInfo: function () {
                return that._getStyleSettingsInfo(columnName, rowIndex);
            }
        };
    };
    gridDataController.prototype._getCellValue = function (columnName, uriColumnName, rowIndex) {
        var that = this, item = undefined, uriItem = !!uriColumnName ? that.multiData.getMeasureValueByAxisPoints(uriColumnName, that._getPointArray(rowIndex)) : null, obtainItem = function () {
            if (item === undefined) {
                item = that._findAxisPoint(columnName, that._getColumnAxisPoint(rowIndex)) || {
                    getValue: function () {
                        return undefined;
                    },
                    getUniqueValue: function () {
                        return undefined;
                    },
                    getDisplayText: function () {
                        return '';
                    }
                };
            }
            ;
            return item;
        };
        var cellValue = {
            getValue: function () {
                return obtainItem().getValue();
            },
            getUniqueValue: function () {
                return obtainItem().getUniqueValue();
            },
            getData: function () {
                return {
                    value: obtainItem().getValue(),
                    displayText: obtainItem().getDisplayText()
                };
            },
            getStyleSettingsInfo: function () {
                return that._getStyleSettingsInfo(columnName, rowIndex);
            }
        };
        cellValue.getUriValue = function () {
            return !!uriItem ? uriItem.getValue() : obtainItem().getDisplayText();
        };
        return cellValue;
    };
    gridDataController.prototype._getStyleSettingsInfo = function (columnName, rowIndex) {
        var that = this, rules = [], cellInfo = {
            rowIndex: rowIndex
        };
        if (that.cfModel) {
            rules = $.grep(that.cfModel.RuleModels, function (rule) {
                return rule.ApplyToRow || rule.ApplyToDataId === columnName;
            });
        }
        return that._getStyleSettingsInfoCore(cellInfo, rules, that.viewModel.ColumnAxisName, _item_data_axis_names_1.itemDataAxisNames.defaultAxis);
    };
    gridDataController.prototype._getStyleIndexes = function (rule, cellInfo, points) {
        var that = this, axisPoint, currentStyleIndexes, styleIndexes = [];
        axisPoint = cellInfo.rowIndex !== undefined ? that._getAxisPoint(cellInfo.rowIndex, rule.CalcByDataId) : undefined;
        if (axisPoint)
            points.push(axisPoint);
        currentStyleIndexes = that._getMeasureValueByAxisPoints(points, rule.FormatConditionMeasureId);
        if (currentStyleIndexes) {
            styleIndexes = styleIndexes.concat(currentStyleIndexes);
        }
        return styleIndexes;
    };
    gridDataController.prototype._getAxisPoint = function (rowIndex, columnInfo) {
        var axisPoint = rowIndex !== undefined && !!this._axisColumnPoints ? this._axisColumnPoints[rowIndex] : undefined, correctAxisPoint = axisPoint ? this._findAxisPoint(columnInfo, axisPoint) : undefined;
        return correctAxisPoint || axisPoint;
    };
    gridDataController.prototype._getDeltaValue = function (columnName, rowIndex, barCalculator, deltaType, useDefaultColor) {
        var that = this, deltaValue = null, deltaValueItem = null, measureValue = null, deltaDesriptor = that.multiData.getDeltaById(columnName), measureItem, idBarDisplayMode = !!barCalculator, getStyleSettingsInfo = function (columnName, rowIndex) {
            return that._getStyleSettingsInfo(columnName, rowIndex);
        };
        if (deltaDesriptor) {
            deltaValue = that.multiData.getDeltaValueByAxisPoints(columnName, that._getPointArray(rowIndex));
            deltaValueItem = that._getDeltaValueItem(deltaValue, deltaType);
            if (idBarDisplayMode)
                barCalculator.addValue(deltaValueItem);
            return {
                getValue: function () {
                    return deltaValueItem.getValue();
                },
                getData: function () {
                    if (idBarDisplayMode) {
                        return that._getBarData(barCalculator, deltaValueItem, rowIndex);
                    }
                    else {
                        return {
                            type: that._convertIndicatorType(deltaValue.getIndicatorType().getValue()),
                            hasPositiveMeaning: deltaValue.getIsGood().getValue(),
                            text: {
                                value: deltaValueItem.getDisplayText(),
                                useDefaultColor: useDefaultColor
                            }
                        };
                    }
                },
                getStyleSettingsInfo: function () {
                    return that._getStyleSettingsInfo(columnName, rowIndex);
                }
            };
        }
        else {
            measureItem = that.multiData.getMeasureValueByAxisPoints(columnName, that._getPointArray(rowIndex));
            if (idBarDisplayMode)
                barCalculator.addValue(measureItem);
            return {
                getValue: function () {
                    return measureItem.getValue();
                },
                getData: function () {
                    if (idBarDisplayMode) {
                        return that._getBarData(barCalculator, measureItem, rowIndex);
                    }
                    else {
                        return {
                            type: null,
                            hasPositiveMeaning: null,
                            text: {
                                value: measureItem.getDisplayText(),
                                useDefaultColor: null
                            }
                        };
                    }
                },
                getStyleSettingsInfo: function () {
                    return that._getStyleSettingsInfo(columnName, rowIndex);
                }
            };
        }
    };
    gridDataController.prototype._getDeltaValueItem = function (deltaValue, deltaValueType) {
        switch (deltaValueType) {
            case DeltaValueType.ActualValue:
                return deltaValue.getActualValue();
            case DeltaValueType.AbsoluteVariation:
                return deltaValue.getAbsoluteVariation();
            case DeltaValueType.PercentVariation:
                return deltaValue.getPercentVariation();
            case DeltaValueType.PercentOfTarget:
                return deltaValue.getPercentOfTarget();
        }
    };
    gridDataController.prototype._getSparklineCellValues = function (columnName, rowIndex, sparklineOptions) {
        var that = this, measureDescriptor = that.multiData.getMeasureById(columnName), axisPoint = that._getPointArray(rowIndex), getValues = function (getter) {
            var result = [];
            if (!!that._axisSparklinePoints) {
                $.each(that._axisSparklinePoints, function (_, sparklinePoint) {
                    result.push(getter(that.multiData.getMeasureValueByAxisPoints(columnName, axisPoint.concat(sparklinePoint))));
                });
            }
            else {
                result.push(getter(that.multiData.getMeasureValueByAxisPoints(columnName, axisPoint)));
            }
            return result;
        }, values = getValues(function (item) {
            var value = item.getValue();
            return value || 0;
        });
        return {
            getValue: function () {
                return values;
            },
            getData: function () {
                var valuesItems = getValues(function (item) {
                    return item;
                }), startValue = valuesItems[0].getValue(), endValue = valuesItems[valuesItems.length - 1].getValue();
                return {
                    sparkline: that._generateSparklineOptions(values, sparklineOptions, measureDescriptor.format),
                    startText: startValue ? valuesItems[0].getDisplayText() : measureDescriptor.format(0),
                    endText: endValue ? valuesItems[valuesItems.length - 1].getDisplayText() : measureDescriptor.format(0)
                };
            },
            getStyleSettingsInfo: function () {
                return that._getStyleSettingsInfo(columnName, rowIndex);
            }
        };
    };
    gridDataController.prototype._findAxisPoint = function (dataId, axisPoint) {
        if (axisPoint) {
            while (axisPoint.getDimension() && axisPoint.getDimension().id !== dataId) {
                axisPoint = axisPoint.getParent();
            }
        }
        return axisPoint && axisPoint.getParent() ? axisPoint : null;
    };
    gridDataController.prototype._getColumnAxisPoint = function (rowIndex) {
        return !!this._axisColumnPoints ? this._axisColumnPoints[rowIndex] : undefined;
    };
    gridDataController.prototype._getPointArray = function (rowIndex) {
        var point = this._getColumnAxisPoint(rowIndex), array = [];
        if (point)
            array.push(point);
        return array;
    };
    return gridDataController;
}(_data_controller_base_1.dataControllerBase));
exports.gridDataController = gridDataController;
