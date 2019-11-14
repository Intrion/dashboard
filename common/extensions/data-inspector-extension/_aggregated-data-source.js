/**
* DevExpress Dashboard (_aggregated-data-source.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _item_data_tuple_1 = require("../../../data/item-data/_item-data-tuple");
var _default_1 = require("../../../data/localization/_default");
var _inspected_data_colum_generator_1 = require("./_inspected-data-colum-generator");
var data_source_1 = require("devextreme/data/data_source");
function _createDimensionColumnInfo(dimension, axisName) {
    return {
        getValue: function (row) {
            var point = row.getAxisPoint(axisName);
            if (point) {
                var dimensionValue = point.getDimensionValue(dimension.id);
                if (dimensionValue) {
                    return {
                        displayValue: dimensionValue.getDisplayText(),
                        value: dimensionValue.getUniqueValue()
                    };
                }
            }
            return null;
        },
        getGridColumn: function () {
            return {
                dataField: dimension.id,
                caption: dimension.name || dimension.dataMember || dimension.id,
                calculateCellValue: function (row) { return row[dimension.id] && row[dimension.id].value; },
                calculateDisplayValue: function (row) { return row[dimension.id] && row[dimension.id].displayValue; }
            };
        }
    };
}
function _createMeasureColumnInfo(itemData, measure, isSparklineMeasure) {
    var sparklineColumnId = "_Sparkline";
    var getSparklineCellText = function (defaultAxisPoint) {
        var argumentValueSeparator = _default_1.getLocalizationById("DashboardStringId.SparklineArgumentValueSeparator");
        var valuesSeparator = _default_1.getLocalizationById("DashboardStringId.SparklineValuesSeparator");
        return itemData
            .getAxis("Sparkline")
            .getPoints()
            .map(function (sparklinePoint) {
            var measureValue = itemData.getSlice(sparklinePoint).getSlice(defaultAxisPoint).getMeasureValue(measure.id);
            if (measureValue) {
                return sparklinePoint.getDisplayText() + argumentValueSeparator + measureValue.getDisplayText();
            }
            return "";
        })
            .join(valuesSeparator);
    };
    return {
        getValue: function (row) {
            if (isSparklineMeasure && itemData.getAxisNames().indexOf("Sparkline") !== -1) {
                var cellText = getSparklineCellText(row.getAxisPoint());
                return { displayValue: cellText, value: cellText };
            }
            return {
                displayValue: itemData.getSlice(row).getMeasureValue(measure.id).getDisplayText(),
                value: itemData.getSlice(row).getMeasureValue(measure.id).getValue()
            };
        },
        getGridColumn: function () {
            var dataField = !isSparklineMeasure ? measure.id : measure.id + sparklineColumnId;
            return {
                dataField: dataField,
                caption: measure.name || measure.dataMember || measure.id,
                calculateCellValue: function (row) { return row[dataField] && row[dataField].value; },
                calculateDisplayValue: function (row) { return row[dataField] && row[dataField].displayValue; }
            };
        }
    };
}
function _createColumns(itemData, axes, args) {
    return axes
        .reduce(function (acc, axis) {
        return acc.concat(itemData.getDimensions(axis).map(function (dimension) { return _createDimensionColumnInfo(dimension, axis); }));
    }, [])
        .concat(_inspected_data_colum_generator_1.getMeasureColumns(itemData)
        .reduce(function (acc, measure) {
        var isSparklineMeasure = args.sparklineMeasures != null && args.sparklineMeasures.indexOf(measure.id) !== -1;
        acc.push(_createMeasureColumnInfo(itemData, measure, isSparklineMeasure));
        if (isSparklineMeasure && args.addSparklineTotal) {
            acc.push(_createMeasureColumnInfo(itemData, measure, false));
        }
        return acc;
    }, []));
}
function _createRows(itemData, axes) {
    if (axes.length) {
        return itemData
            .getAxis(axes[0])
            .getAvaliableLeafPoints()
            .reduce(function (acc, primaryAxisPoint) {
            if (axes.length > 1) {
                acc = acc.concat(itemData
                    .getAxis(axes[1])
                    .getAvaliableLeafPoints()
                    .map(function (secondaryAxisPoint) { return new _item_data_tuple_1.itemDataTuple([primaryAxisPoint, secondaryAxisPoint]); }));
            }
            else {
                acc.push(new _item_data_tuple_1.itemDataTuple([primaryAxisPoint]));
            }
            return acc;
        }, []);
    }
    else {
        var defaultAxis = itemData.getAxisNames()[0];
        var axisPoints = defaultAxis ? [itemData.getAxis(defaultAxis).getRootPoint()] : [];
        return [new _item_data_tuple_1.itemDataTuple(axisPoints)];
    }
}
function generateAggregatedSource(itemData, args) {
    if (itemData && !itemData.isEmpty()) {
        var axes = _inspected_data_colum_generator_1.getSortedAxes(itemData, true);
        var columnsInfo_1 = _createColumns(itemData, axes, args);
        var rows = _createRows(itemData, axes);
        return {
            columns: columnsInfo_1.map(function (columnInfo) { return columnInfo.getGridColumn(); }),
            dataSource: new data_source_1.default(rows.map(function (row) {
                return columnsInfo_1.reduce(function (acc, columnInfo) {
                    acc[columnInfo.getGridColumn().dataField] = columnInfo.getValue(row);
                    return acc;
                }, {});
            }))
        };
    }
    return {
        columns: [],
        dataSource: new data_source_1.default([])
    };
}
exports.generateAggregatedSource = generateAggregatedSource;
