/**
* DevExpress Dashboard (_inspected-data-colum-generator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getSortedAxes(itemData, skipSparklineAxis) {
    if (skipSparklineAxis === void 0) { skipSparklineAxis = false; }
    return itemData.getAxisNames()
        .filter(function (axisName) { return itemData.getAxis(axisName).getDimensions().length > 0 && (!skipSparklineAxis || axisName !== "Sparkline"); })
        .sort(function (axisName1, axisName2) {
        return axisName1 == "Argument" || axisName1 == "Row" || axisName1 == "Default" ? -1 : 1;
    });
}
exports.getSortedAxes = getSortedAxes;
function getMeasureColumns(itemData) {
    return itemData.getMeasures().filter(function (measure) { return !!measure.dataMember; });
}
exports.getMeasureColumns = getMeasureColumns;
function getSortedColumns(itemData) {
    return getSortedAxes(itemData)
        .reduce(function (acc, axis) { return acc.concat(itemData.getDimensions(axis).map(function (d) { return d.dataMember; })); }, [])
        .concat(getMeasureColumns(itemData).map(function (d) { return d.dataMember; }));
}
exports.getSortedColumns = getSortedColumns;
