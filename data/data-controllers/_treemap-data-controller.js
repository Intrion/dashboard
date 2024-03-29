﻿/**
* DevExpress Dashboard (_treemap-data-controller.js)
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
var _utils_1 = require("../_utils");
var _formatter_1 = require("../_formatter");
var _localizer_1 = require("../_localizer");
var _localization_ids_1 = require("../_localization-ids");
var special_values_1 = require("../special-values");
var $ = require("jquery");
var string_1 = require("devextreme/core/utils/string");
var treemapDataController = (function (_super) {
    __extends(treemapDataController, _super);
    function treemapDataController(options) {
        var _this = _super.call(this, options) || this;
        _this.elementCustomColor = options.elementCustomColor;
        _this._prepare();
        return _this;
    }
    treemapDataController.prototype._prepare = function () {
        var multiData = this.multiData, dimensions = multiData.getDimensions();
        this.last_dimension_id = dimensions.length > 0 ? dimensions[dimensions.length - 1].id : null;
        this.nodeHash = {};
    };
    treemapDataController.prototype.getDataSource = function () {
        var that = this, dataSource = [], viewModel = that.viewModel, multiData = that.multiData, measureIndex = 0, contentDescription = viewModel.ContentDescription, measure, measureValue, elementColor, valueId;
        if (viewModel.ProvideValuesAsArguments) {
            for (var i = 0; i < viewModel.ValueDataMembers.length; i++) {
                valueId = viewModel.ValueDataMembers[i];
                measure = multiData.getMeasureById(valueId);
                measureValue = multiData.getMeasureValue(valueId);
                elementColor = _utils_1.toColor(multiData.getMeasureValue(viewModel.ColorDataMembers[i]).getValue());
                elementColor = that._getElementCustomColor(multiData.getAxis().getRootPoint(), elementColor, valueId);
                dataSource.push({
                    name: measure.name,
                    value: measureValue.getValue(),
                    valueText: measureValue.getDisplayText(),
                    color: elementColor
                });
            }
            ;
            if (viewModel.LayoutAlgorithm === 'SliceAndDice') {
                dataSource.sort(function (a, b) {
                    return b.value - a.value;
                });
            }
        }
        else {
            if (contentDescription != null && contentDescription.ElementSelectionEnabled)
                measureIndex = contentDescription.SelectedElementIndex;
            if (viewModel.ValueDataMembers.length > 0) {
                var root = multiData.getAxis().getRootPoint();
                dataSource = that._getChildren(root, measureIndex, viewModel.GroupArgumentDataMembers, null);
            }
        }
        return dataSource;
    };
    treemapDataController.prototype.getLabel = function (node, encodeHtml) {
        if (encodeHtml === void 0) { encodeHtml = true; }
        var viewModel = this.viewModel;
        return this._getNodeText(node, viewModel.TilesLabelContentType, viewModel.GroupsLabelContentType, encodeHtml);
    };
    treemapDataController.prototype.getTooltip = function (node, encodeHtml) {
        if (encodeHtml === void 0) { encodeHtml = true; }
        var viewModel = this.viewModel;
        return this._getNodeText(node, viewModel.TilesTooltipContentType, viewModel.GroupsTooltipContentType, encodeHtml);
    };
    treemapDataController.prototype.getChildrenNodesUniqueValues = function (value) {
        var node = this.nodeHash[value], res = [];
        this._fillChildrenNodesUniqueValues(res, node);
        return res;
    };
    treemapDataController.prototype._fillChildrenNodesUniqueValues = function (res, node) {
        if (node.items) {
            for (var i = 0; i < node.items.length; i++) {
                this._fillChildrenNodesUniqueValues(res, node.items[i]);
            }
        }
        else
            res.push(node.uniqueValue);
    };
    treemapDataController.prototype._getChildren = function (currentPoint, measureIndex, groupArgumentDataMembers, prevArgumentDataMember) {
        var that = this, viewModel = that.viewModel, items = [], currentArgumentDataMember = groupArgumentDataMembers[0], points, recoveredGroupArgumentDataMembers, node;
        if (groupArgumentDataMembers.length > 1) {
            recoveredGroupArgumentDataMembers = [];
            for (var i = 1; i < groupArgumentDataMembers.length; i++) {
                recoveredGroupArgumentDataMembers.push(groupArgumentDataMembers[i]);
            }
            points = currentPoint.getPointsByDimensionId(currentArgumentDataMember);
            $.each(points, function (__, point) {
                node = that._createNode(point, measureIndex, prevArgumentDataMember);
                node.items = that._getChildren(point, measureIndex, recoveredGroupArgumentDataMembers, currentArgumentDataMember);
                items.push(node);
            });
        }
        else {
            points = currentPoint.getPointsByDimensionId(that.last_dimension_id);
            $.each(points, function (__, point) {
                node = that._createNode(point, measureIndex, prevArgumentDataMember);
                node.color = that._getColor(point, measureIndex);
                items.push(node);
            });
        }
        return items;
    };
    treemapDataController.prototype._createNode = function (point, measureIndex, prevArgumentDataMember) {
        var viewModel = this.viewModel, multiData = this.multiData, valueDataMember = viewModel.ValueDataMembers[measureIndex], measureValue = multiData.getSlice(point).getMeasureValue(valueDataMember), uniqueValue = point.getUniquePath(), node = {
            name: this._getArgumentString(point, prevArgumentDataMember),
            value: measureValue.getValue(),
            valueText: measureValue.getDisplayText(),
            uniqueValue: uniqueValue,
            format: function (value) {
                return _formatter_1.format(value, multiData.getMeasureFormat(valueDataMember));
            }
        };
        this.nodeHash[node.uniqueValue] = node;
        return node;
    };
    treemapDataController.prototype._getNodeText = function (node, tileType, groupType, encodeHtml) {
        if (node.isLeaf()) {
            return this._getTextByContentType(tileType, node.data.name, node.data.valueText, encodeHtml);
        }
        else {
            return this._getTextByContentType(groupType, node.data.name, node.data.format(node.value()), encodeHtml);
        }
    };
    treemapDataController.prototype._getTextByContentType = function (contentType, argumentText, valueText, encodeHtml) {
        var argumentEncoded = encodeHtml ? _utils_1.encodeHtml(argumentText) : argumentText;
        var valueEncoded = encodeHtml ? _utils_1.encodeHtml(valueText) : valueText;
        switch (contentType) {
            case 'Argument':
                return argumentEncoded;
            case 'ArgumentAndValue':
                return string_1.format(_localizer_1.localizer.getString(_localization_ids_1.localizationId.TreemapLabelValueTemplate), argumentEncoded, valueEncoded);
            case 'Value':
                return valueEncoded;
        }
    };
    treemapDataController.prototype._getArgumentString = function (point, prevArgumentDataMember) {
        var argumentString, path = point.getAxisPath(), dimension;
        if (this.drillDownState[point.getAxisName()]) {
            return point.getDisplayText();
        }
        for (var i = path.length - 1; i >= 0; i--) {
            dimension = path[i].getDimension();
            if (prevArgumentDataMember && dimension && dimension.id === prevArgumentDataMember)
                break;
            if (path[i].getUniqueValue() !== special_values_1.specialValues.olapNullValueGuid) {
                if (argumentString) {
                    argumentString = string_1.format(_localizer_1.localizer.getString(_localization_ids_1.localizationId.TreemapLabelArgumentTemplate), path[i].getDisplayText(), argumentString);
                }
                else {
                    argumentString = path[i].getDisplayText();
                }
            }
        }
        return argumentString;
    };
    treemapDataController.prototype._getColor = function (point, measureIndex) {
        var that = this, viewModel = that.viewModel, multiData = that.multiData, colorId = viewModel.ColorDataMembers[measureIndex], color;
        if (viewModel.ColorArgument) {
            var colorPoint = point.getParentByDimensionId(viewModel.ColorArgument);
            multiData = multiData.getSlice(colorPoint);
        }
        color = _utils_1.toColor(multiData.getMeasureValue(colorId).getValue());
        return that._getElementCustomColor(point, color, viewModel.ValueDataMembers[measureIndex]);
    };
    treemapDataController.prototype._getElementCustomColor = function (point, color, valueId) {
        var that = this, viewModel = that.viewModel, newColor;
        if (that.elementCustomColor && color) {
            var customElementColorEventArgs = {
                targetElement: [point],
                measureIds: [valueId],
                color: color
            };
            that.elementCustomColor(customElementColorEventArgs);
            newColor = customElementColorEventArgs.color;
            if (!newColor.colorIsInvalid && newColor !== color) {
                return newColor;
            }
        }
        return color;
    };
    return treemapDataController;
}(_data_controller_base_1.dataControllerBase));
exports.treemapDataController = treemapDataController;
