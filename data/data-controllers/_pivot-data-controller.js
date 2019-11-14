/**
* DevExpress Dashboard (_pivot-data-controller.js)
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
var _data_controller_base_1 = require("./_data-controller-base");
var _item_data_axis_names_1 = require("../../viewer-parts/viewer/_item-data-axis-names");
var _array_utils_1 = require("../../model/internal/_array-utils");
var special_values_1 = require("../special-values");
var _localizer_1 = require("../_localizer");
var _localization_ids_1 = require("../_localization-ids");
var _utils_1 = require("../_utils");
var $ = require("jquery");
var GT_UNIQUE_PATH = 'GT';
var pivotDataController = (function (_super) {
    __extends(pivotDataController, _super);
    function pivotDataController(options) {
        var _this = _super.call(this, options) || this;
        _this._columnPointsHash = options.axisPointHash ? options.axisPointHash.columnPointsHash : {};
        _this._rowPointsHash = options.axisPointHash ? options.axisPointHash.rowPointsHash : {};
        _this._measureIds = _this._getMeasureIds();
        _this._collapseStateCache = {};
        _this._conditionalFormattingInfoCache = [];
        return _this;
    }
    pivotDataController.prototype._createAreaFields = function (list, area) {
        var result = [];
        if (list && list.length > 0) {
            $.each(list, function (i, elem) {
                result.push({ caption: elem.Caption, area: area });
            });
        }
        return result;
    };
    pivotDataController.prototype._getFields = function () {
        var viewModel = this.viewModel;
        if (!viewModel) {
            return undefined;
        }
        return this._createAreaFields(viewModel.Columns, "column")
            .concat(this._createAreaFields(viewModel.Rows, "row"))
            .concat(this._createAreaFields(viewModel.Values, "data"));
    };
    pivotDataController.prototype.getDataSource = function (viewState, isColumn, path) {
        var that = this, columnHeaders = [], rowHeaders = [], values = [];
        if (that.multiData && !that.multiData.isEmpty()) {
            var columnRoot = path && isColumn ? that._getColumnAxis().getPointByUniqueValues(path) : that._getColumnAxis().getRootPoint(), rowRoot = path && !isColumn ? that._getRowAxis().getPointByUniqueValues(path) : that._getRowAxis().getRootPoint(), columnIndexHash = [], rowIndexHash = [], columnHash = {}, rowHash = {};
            that._prepareHierarchy(columnRoot, columnHeaders, columnIndexHash, columnHash, path && isColumn, viewState && viewState.columns || null, this.viewModel.AutoExpandColumnGroups);
            that._prepareHierarchy(rowRoot, rowHeaders, rowIndexHash, rowHash, path && !isColumn, viewState && viewState.rows || null, this.viewModel.AutoExpandRowGroups);
            that._columnPointsHash = __assign({}, that._columnPointsHash, columnHash);
            that._rowPointsHash = __assign({}, that._rowPointsHash, rowHash);
            values = that._prepareCells(columnIndexHash, rowIndexHash, !!path);
        }
        return {
            fields: that._getFields(),
            columns: columnHeaders,
            rows: rowHeaders,
            values: values
        };
    };
    pivotDataController.prototype.getStyleSettingsInfo = function (cellItem, collapseStateCache, conditionalFormattingInfoCache) {
        if (this.cfModel && this.cfModel.RuleModels.length !== 0) {
            var cellInfo = this._getCellInfo(cellItem), rules = this._getFormatRules(cellItem, cellInfo);
            this._collapseStateCache = collapseStateCache;
            this._conditionalFormattingInfoCache = conditionalFormattingInfoCache;
            return this._getStyleSettingsInfoCore(cellInfo, rules, _item_data_axis_names_1.itemDataAxisNames.pivotColumnAxis, _item_data_axis_names_1.itemDataAxisNames.pivotRowAxis);
        }
    };
    pivotDataController.prototype.getAxisPointsHash = function () {
        return {
            columnPointsHash: this._columnPointsHash,
            rowPointsHash: this._rowPointsHash
        };
    };
    pivotDataController.prototype._prepareHierarchy = function (root, headers, areaIndexHash, areaHash, isPartial, expandCollapsePaths, isCollapsePaths) {
        var index = 0, currentItem, iteratePoints = function (rootPoint, headers, point, areaIndexHash, areaHash, item) {
            var children = point.getChildren(), child;
            var isCollapsed = false;
            if (expandCollapsePaths) {
                var isPathsContainsPoint = expandCollapsePaths.some(function (expandedPath) { return _array_utils_1.arrayEquals(expandedPath, point.getUniquePath()); });
                if (isCollapsePaths) {
                    isCollapsed = isPathsContainsPoint;
                }
                else {
                    isCollapsed = !isPathsContainsPoint;
                }
            }
            var childrenProperty = isCollapsed ? "collapsedChildren" : "children";
            if (children && children.length > 0) {
                for (var i = 0; i < children.length; i++) {
                    child = children[i];
                    currentItem = {
                        index: index++,
                        value: child.getUniqueValue(),
                        displayText: child.getUniqueValue() === special_values_1.specialValues.olapNullValueGuid ? _localizer_1.localizer.getString(_localization_ids_1.localizationId.OlapRaggedHierarchyNoneItemCaption) : child.getDisplayText()
                    };
                    areaHash[child.getUniquePath()] = child;
                    areaIndexHash.push(child);
                    if (item) {
                        if (!item[childrenProperty])
                            item[childrenProperty] = [];
                        item[childrenProperty].push(currentItem);
                    }
                    iteratePoints(rootPoint, headers, child, areaIndexHash, areaHash, currentItem);
                }
            }
            if (point.getParent() === rootPoint)
                headers.push(item);
        };
        iteratePoints(root, headers, root, areaIndexHash, areaHash);
        if (!isPartial) {
            areaHash[GT_UNIQUE_PATH] = root;
            areaIndexHash.push(root);
        }
    };
    pivotDataController.prototype._getMeasureIds = function () {
        var measureIds = [];
        for (var i = 0; i < this.viewModel.Values.length; i++)
            measureIds.push(this.viewModel.Values[i].DataId);
        return measureIds;
    };
    pivotDataController.prototype._prepareCells = function (columnHash, rowHash, partial) {
        var cells = [], mddata = this.multiData, measureIds = this._measureIds, rowIndex = 0, columnIndex = 0, dataIndex = 0, displayValue, columnPoint, rowPoint, fillCell = function () {
            columnPoint = columnHash[columnIndex];
            rowPoint = rowHash[rowIndex];
            displayValue = mddata.getMeasureValueByAxisPoints(measureIds[dataIndex], [columnPoint, rowPoint]).getDisplayText();
            if (displayValue || !partial) {
                if (!cells[rowIndex])
                    cells[rowIndex] = [];
                if (!cells[rowIndex][columnIndex])
                    cells[rowIndex][columnIndex] = [];
                cells[rowIndex][columnIndex][dataIndex] = displayValue;
            }
        };
        for (rowIndex = 0; rowIndex < rowHash.length; rowIndex++) {
            for (columnIndex = 0; columnIndex < columnHash.length; columnIndex++) {
                for (dataIndex = 0; dataIndex < measureIds.length; dataIndex++)
                    fillCell();
            }
        }
        return cells;
    };
    pivotDataController.prototype._getColumnAxis = function () {
        return this.multiData.getAxis(_item_data_axis_names_1.itemDataAxisNames.pivotColumnAxis);
    };
    pivotDataController.prototype._getRowAxis = function () {
        return this.multiData.getAxis(_item_data_axis_names_1.itemDataAxisNames.pivotRowAxis);
    };
    pivotDataController.prototype._getCellInfo = function (cellItem) {
        var columnAxisPoint, rowAxisPoint;
        if (cellItem.area === _utils_1.pivotArea.column || cellItem.area === _utils_1.pivotArea.data)
            columnAxisPoint = this._getAxisPointByPath(this._columnPointsHash, cellItem.columnPath, cellItem.columnType);
        if (cellItem.area === _utils_1.pivotArea.row || cellItem.area === _utils_1.pivotArea.data)
            rowAxisPoint = this._getAxisPointByPath(this._rowPointsHash, cellItem.rowPath, cellItem.rowType);
        return {
            columnAxisPoint: columnAxisPoint,
            rowAxisPoint: rowAxisPoint
        };
    };
    pivotDataController.prototype._getStyleIndexes = function (rule, cellInfo, points) {
        var that = this, currentStyleIndexes, styleIndexes = [];
        if (rule.ApplyToRow) {
            currentStyleIndexes = that._findStyleSettingsOnAxis(cellInfo.rowAxisPoint, cellInfo.columnAxisPoint, rule.FormatConditionMeasureId, true);
            if (currentStyleIndexes.length > 0)
                styleIndexes = styleIndexes.concat(currentStyleIndexes);
        }
        if (rule.ApplyToColumn) {
            currentStyleIndexes = that._findStyleSettingsOnAxis(cellInfo.rowAxisPoint, cellInfo.columnAxisPoint, rule.FormatConditionMeasureId, false);
            if (currentStyleIndexes.length > 0)
                styleIndexes = styleIndexes.concat(currentStyleIndexes);
        }
        if (!rule.ApplyToRow && !rule.ApplyToColumn) {
            if (cellInfo.columnAxisPoint)
                points.push(cellInfo.columnAxisPoint);
            if (cellInfo.rowAxisPoint)
                points.push(cellInfo.rowAxisPoint);
            currentStyleIndexes = that._getMeasureValueByAxisPoints(points, rule.FormatConditionMeasureId);
            if (currentStyleIndexes)
                styleIndexes = styleIndexes.concat(currentStyleIndexes);
        }
        return styleIndexes;
    };
    pivotDataController.prototype._findStyleSettingsOnAxis = function (rowAxisPoint, columnAxisPoint, measureId, isRowAxis) {
        var that = this, currentStyleIndexes, styleIndexes = [], rowPoint = rowAxisPoint ? rowAxisPoint : this._getRowAxis().getRootPoint(), columnPoint = columnAxisPoint ? columnAxisPoint : this._getColumnAxis().getRootPoint(), slicePoint = isRowAxis ? rowPoint : columnPoint, intersectingRootPoint, slice, intersectingPoints = [], cfAxisPoint, conditionalFormattingInfo = {
            slicePoint: slicePoint,
            measureId: measureId,
            styleIndexes: [],
            toString: function () {
                return this.slicePoint.getUniquePath() + this.measureId;
            }
        }, iteratePoints = function (intersectingPoints, point) {
            var children = point.getChildren(), child, collapseState = point.getUniquePath().concat(isRowAxis ? 'column' : 'row'), cachedCollapseState = that._collapseStateCache[collapseState];
            if (cachedCollapseState === undefined) {
                intersectingPoints.push(point);
                if (children && children.length > 0) {
                    for (var i = 0; i < children.length; i++) {
                        child = children[i];
                        iteratePoints(intersectingPoints, child);
                    }
                }
            }
        };
        cfAxisPoint = this._conditionalFormattingInfoCache[conditionalFormattingInfo];
        if (cfAxisPoint)
            return cfAxisPoint.styleIndexes;
        slice = this.multiData.getSlice(slicePoint);
        intersectingRootPoint = isRowAxis ? this._getColumnAxis().getRootPoint() : this._getRowAxis().getRootPoint();
        iteratePoints(intersectingPoints, intersectingRootPoint);
        $.each(intersectingPoints, function (_, intersectingPoint) {
            var finalSlice = slice.getSlice(intersectingPoint), currentStyleIndexes = finalSlice.getConditionalFormattingMeasureValue(measureId);
            if (currentStyleIndexes)
                styleIndexes = styleIndexes.concat(currentStyleIndexes);
        });
        conditionalFormattingInfo.styleIndexes = styleIndexes;
        this._conditionalFormattingInfoCache[conditionalFormattingInfo] = conditionalFormattingInfo;
        return styleIndexes;
    };
    pivotDataController.prototype._getFormatRules = function (cellItem, cellInfo) {
        var that = this, dataId, rules = [];
        switch (cellItem.area) {
            case _utils_1.pivotArea.column:
                dataId = that._getPointId(cellInfo.columnAxisPoint);
                rules = rules.concat(that._getFormatRulesByDataId(dataId));
                break;
            case _utils_1.pivotArea.row:
                dataId = that._getPointId(cellInfo.rowAxisPoint);
                rules = rules.concat(that._getFormatRulesByDataId(dataId));
                break;
            default: {
                dataId = that._measureIds[cellItem.cellIndex];
                rules = $.grep(that.cfModel.RuleModels, function (rule) {
                    return rule.ApplyToRow || (that._isRowValuePosition() && rule.ApplyToColumn) || rule.ApplyToDataId === dataId;
                });
                break;
            }
        }
        return rules;
    };
    pivotDataController.prototype._isRowValuePosition = function () {
        return this.viewModel.ValuesPosition === 'Rows';
    };
    pivotDataController.prototype._getAxisPointByPath = function (pointsHash, path, type) {
        var correctedPath = path, axisPoint;
        if (type === GT_UNIQUE_PATH)
            correctedPath = GT_UNIQUE_PATH;
        axisPoint = pointsHash[correctedPath];
        if (!axisPoint)
            axisPoint = this._getColumnAxis().getPointByUniqueValues(path);
        return axisPoint;
    };
    pivotDataController.prototype._getFormatRulesByDataId = function (dataId) {
        var that = this, formatRules = [];
        if (that.cfModel) {
            $.each(that.cfModel.RuleModels, function (_, rule) {
                if (rule.ApplyToDataId === dataId) {
                    formatRules.push(rule);
                }
            });
        }
        return formatRules;
    };
    pivotDataController.prototype._getPointId = function (point) {
        var dimension, columnPointId;
        if (point) {
            dimension = point.getDimension();
            columnPointId = dimension ? dimension.id : undefined;
        }
        return columnPointId;
    };
    return pivotDataController;
}(_data_controller_base_1.dataControllerBase));
exports.pivotDataController = pivotDataController;
