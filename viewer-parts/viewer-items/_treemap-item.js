﻿/**
* DevExpress Dashboard (_treemap-item.js)
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
var _base_item_1 = require("./_base-item");
var tree_map_1 = require("devextreme/viz/tree_map");
var _utils_1 = require("../../data/_utils");
var _interactivity_controller_1 = require("./_interactivity-controller");
var $ = require("jquery");
var treemapItem = (function (_super) {
    __extends(treemapItem, _super);
    function treemapItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this.itemElementCustomColor = $.Callbacks();
        return _this;
    }
    treemapItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.treemapViewer && this.treemapViewer.dispose();
    };
    treemapItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        if (this.dataController) {
            this.dataController.elementCustomColor = $.proxy(this._elementCustomColor, this);
        }
    };
    treemapItem.prototype._clearSelectionUnsafe = function () {
        this.treemapViewer.clearSelection();
    };
    treemapItem.prototype.selectTupleUnsafe = function (tuples, state) {
        var that = this;
        $.each(tuples, function (index, tuple) {
            that._selectNodes(tuple.Value, state);
        });
    };
    treemapItem.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        this.clearSelection();
        this._applySelection();
    };
    treemapItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var options = this._getTreeMapViewerOptions();
        if (changeExisting && this.treemapViewer) {
            this.treemapViewer.option(options);
        }
        else {
            this.treemapViewer = new tree_map_1.default(element, options);
        }
        var selectedValues = this.options.SelectedValues;
        if (selectedValues)
            this.setSelection(selectedValues);
        return false;
    };
    treemapItem.prototype.updateContentStateUnsafe = function () {
        if (this._getCustomHoverEnabled()) {
            this.treemapViewer.option("hoverEnabled", true);
        }
    };
    treemapItem.prototype._selectNodes = function (valueSet, state) {
        var that = this;
        $.each(that.treemapViewer.getRootNode().getAllNodes(), function (i, node) {
            if (_utils_1.checkValuesAreEqual(valueSet, node.data.uniqueValue))
                node.select(state);
        });
    };
    treemapItem.prototype._clickAction = function (tuples) {
        var newTuples = [], tuple = tuples[0], values = this.dataController.getChildrenNodesUniqueValues(tuple.Value), isMultipleMode = this._canSetMultipleMasterFilter() || this.customSelectionMode === _interactivity_controller_1.dashboardSelectionMode.multiple, currentSelection = isMultipleMode && this.allowMultiselection ? this.getSelectedTuples().slice() : [], existingTuples = [];
        if (!isMultipleMode && values.length > 1)
            return;
        for (var i = 0; i < values.length; i++) {
            var newTuple = [{ AxisName: tuple.AxisName, Value: values[i] }];
            if (_utils_1.checkArrayContainsTuple(currentSelection, newTuple) === undefined)
                newTuples.push(newTuple);
            else
                existingTuples.push(newTuple);
        }
        this.interactivityController.clickAction(newTuples.length > 0 ? newTuples : existingTuples);
    };
    treemapItem.prototype._elementCustomColor = function (eventArgs) {
        this.itemElementCustomColor.fire(this.getName(), eventArgs);
    };
    treemapItem.prototype._getTreeMapViewerOptions = function () {
        var that = this, viewModel = that.options.ViewModel, isSingleMasterFilterMode = this._canSetMasterFilter() && !this._canSetMultipleMasterFilter(), setLabel = function (node) {
            var label = that.dataController.getLabel(node, that._isEncodeHtml());
            if (label)
                node.label(label);
            else
                node.label(' ');
        }, options = {
            dataSource: that.dataController.getDataSource(),
            layoutAlgorithm: that._getLayoutAlgorithm(),
            layoutDirection: that._getLayoutDirection(),
            selectionMode: 'multiple',
            tile: {
                label: {
                    textOverflow: 'ellipsis'
                }
            },
            hoverEnabled: that.isInteractivityActionEnabled(),
            tooltip: {
                enabled: true,
                container: _utils_1.tooltipContainerSelector,
                customizeTooltip: function (arg) {
                    return {
                        text: that.dataController.getTooltip(arg.node, that._isEncodeHtml())
                    };
                }
            },
            onClick: function (e) {
                that._raiseItemClick(e.node.data);
            },
            onNodesRendering: function () {
                this.getRootNode().getAllNodes().forEach(setLabel);
            },
            group: {
                hoverEnabled: !isSingleMasterFilterMode,
                label: {
                    textOverflow: 'ellipsis'
                }
            }
        };
        return options;
    };
    treemapItem.prototype._getLayoutAlgorithm = function () {
        var viewModel = this.options.ViewModel;
        switch (viewModel.LayoutAlgorithm) {
            case 'SliceAndDice':
                return this.width() >= this.height() ? 'sliceAndDice' : 'rotatedSliceAndDice';
            case 'Squarified':
                return 'squarified';
            case 'Striped':
                return 'strip';
        }
    };
    treemapItem.prototype._getLayoutDirection = function () {
        var viewModel = this.options.ViewModel;
        switch (viewModel.LayoutDirection) {
            case 'BottomLeftToTopRight':
                return 'leftBottomRightTop';
            case 'BottomRightToTopLeft':
                return 'rightBottomLeftTop';
            case 'TopLeftToBottomRight':
                return 'leftTopRightBottom';
            case 'TopRightToBottomLeft':
                return 'rightTopLeftBottom';
        }
    };
    treemapItem.prototype._getDataPoint = function (element) {
        var that = this;
        return {
            getValues: function () {
                return that._getElementInteractionValue(element);
            },
            getMeasureIds: function () {
                return that._getDataPointMeasureIds();
            },
            getDeltaIds: function () {
                return [];
            }
        };
    };
    treemapItem.prototype._getElementInteractionValue = function (element) {
        if (!this.options.ViewModel.ProvideValuesAsArguments)
            return element.uniqueValue;
    };
    treemapItem.prototype._getDataPointMeasureIds = function () {
        var viewModel = this.options.ViewModel, contentDescription = viewModel.ContentDescription, elementIndex = 0, measureIds = [];
        if (contentDescription != null && contentDescription.ElementSelectionEnabled)
            elementIndex = contentDescription.SelectedElementIndex;
        if (!viewModel.ProvideValuesAsArguments && viewModel.ValueDataMembers.length > 0) {
            measureIds.push(viewModel.ValueDataMembers[elementIndex]);
        }
        else {
            $.each(viewModel.ValueDataMembers, function (_, value) {
                measureIds.push(value);
            });
        }
        return measureIds;
    };
    treemapItem.prototype._updateContentSizeUnsafe = function () {
        _super.prototype._updateContentSizeUnsafe.call(this);
        if (!!this.treemapViewer) {
            this.treemapViewer.option('layoutAlgorithm', this._getLayoutAlgorithm());
            this.treemapViewer.render();
        }
    };
    treemapItem.prototype._getWidget = function () {
        return this.treemapViewer;
    };
    treemapItem.prototype._isMultiDataSupported = function () {
        return true;
    };
    treemapItem.prototype._applySelectionUnsafe = function () {
        var that = this;
        that.getSelectedTuples().forEach(function (tuple) { return that.selectTuple(tuple, true); });
    };
    return treemapItem;
}(_base_item_1.baseItem));
exports.treemapItem = treemapItem;
