/**
* DevExpress Dashboard (_underlying-data-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../../data/_utils");
var _date_utils_1 = require("../../model/internal/_date-utils");
var UnderlyingDataProvider = (function () {
    function UnderlyingDataProvider(_serviceClient) {
        this._serviceClient = _serviceClient;
    }
    UnderlyingDataProvider.prototype._getValidDataQueryParamsValues = function (values, dataDashboardItem) {
        var itemQueryParams = _utils_1.deepExtend({}, dataDashboardItem._getDataQueryParams());
        if (itemQueryParams.DrillDown) {
            var drillDownLen = itemQueryParams.DrillDown.length;
            var columnValuesLen = values.length;
            var visibleDimensionsCount = dataDashboardItem._getInteractivityAxisDimensionCount();
            var notInteractivityDimensionsCount = visibleDimensionsCount - dataDashboardItem._interactivityDimensions.length;
            var interactivityColumnsValues = columnValuesLen - notInteractivityDimensionsCount;
            if (drillDownLen > 0) {
                var stateToModelDiff = interactivityColumnsValues - drillDownLen - 1;
                if (stateToModelDiff < 0) {
                    itemQueryParams.DrillDown.splice(stateToModelDiff);
                }
            }
        }
        return itemQueryParams;
    };
    UnderlyingDataProvider.prototype._getUnderlyingDataArgsAxisPoints = function (data, args) {
        var axisNames = data.getAxisNames(), axisPoints = args.axisPoints;
        if (!axisPoints) {
            axisPoints = [];
            axisNames.forEach(function (axisName) {
                var axis = data.getAxis(axisName), axisPoint = undefined;
                if (args.uniqueValuesByAxisName) {
                    var axisValues = args.uniqueValuesByAxisName[axisName];
                    if (axisValues)
                        axisPoint = axis.getPointByUniqueValues(axisValues);
                }
                if (args.valuesByAxisName) {
                    var axisValues = args.valuesByAxisName[axisName];
                    if (axisValues)
                        axisPoint = axis.getPointByValues(axisValues);
                }
                if (!axisPoint)
                    axisPoint = axis.getRootPoint();
                axisPoints.push(axisPoint);
            });
        }
        axisNames.forEach(function (axisName) {
            var points = axisPoints.map(function (axisPoint) {
                return axisPoint.getAxisName() === axisName;
            });
            if (points.length == 0) {
                axisPoints.push(data.getAxis(axisName).getRootPoint());
            }
        });
        return axisPoints;
    };
    UnderlyingDataProvider.prototype.requestUnderlyingData = function (dataDashboardItem, args) {
        var metaData = dataDashboardItem._dataManager().getMetaData(), axisPoints = this._getUnderlyingDataArgsAxisPoints(dataDashboardItem._getItemData(), args), columnNames = args.dataMembers, pivotAreaValues = {};
        axisPoints.forEach(function (axisPoint) {
            var name = axisPoint.getAxisName();
            pivotAreaValues[metaData.getPivotAreaByAxisName(name)] = _date_utils_1.toStringArray(axisPoint.getUniquePath());
        });
        var isInteractivityByColumns = dataDashboardItem._itemInteractivityByColumnAxis();
        var columnValues = pivotAreaValues['Columns'];
        var rowValues = pivotAreaValues['Rows'];
        var itemQueryParams = this._getValidDataQueryParamsValues(isInteractivityByColumns ? columnValues : rowValues, dataDashboardItem);
        var promise = this._serviceClient.getUnderlyingData(dataDashboardItem.componentName(), columnValues, rowValues, columnNames, itemQueryParams);
        return promise.then(function (data) {
            data.Data = data.Data.map(function (row) { return row = row.map(function (value) { return _date_utils_1.tryConvertToDateTime(value); }); });
            return data;
        });
    };
    return UnderlyingDataProvider;
}());
exports.UnderlyingDataProvider = UnderlyingDataProvider;
