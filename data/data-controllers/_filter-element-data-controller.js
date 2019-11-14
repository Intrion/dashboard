/**
* DevExpress Dashboard (_filter-element-data-controller.js)
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
var _localizer_1 = require("../_localizer");
var _hashset_wrapper_1 = require("../_hashset-wrapper");
var _item_data_axis_names_1 = require("../../viewer-parts/viewer/_item-data-axis-names");
var _utils_1 = require("../_utils");
var legacy_settings_1 = require("../../viewer-parts/legacy-settings");
var special_values_1 = require("../special-values");
var $ = require("jquery");
var VALUE_EXPR = 'value';
exports.KEY_EXPR = 'key';
var filterElementDataController = (function (_super) {
    __extends(filterElementDataController, _super);
    function filterElementDataController(options) {
        var _this = _super.call(this, options) || this;
        _this._reset();
        return _this;
    }
    filterElementDataController.prototype.getAllItemIndex = function () {
        return this.dataSource ? this.dataSource.indexOf(_localizer_1.ALL_ELEMENT) : -1;
    };
    filterElementDataController.prototype.isAllSelected = function () {
        return this.dataSource && this.selection ? (this.dataSource.length === this.selection.length) : false;
    };
    filterElementDataController.prototype.update = function (selectedValues, encodeHtml, selectionOnly) {
        if (selectionOnly === void 0) { selectionOnly = false; }
        this._reset(selectionOnly);
        var hashset = new _hashset_wrapper_1.HashsetWrapper(selectedValues || []);
        var that = this, key = 0, applySelection = function (dataItem) {
            if (hashset.contains(dataItem[VALUE_EXPR])) {
                that.selection.push(dataItem);
            }
            that.fullSelection.push(dataItem);
        }, hasAllElement = that.viewModel && that.viewModel.ShowAllValue && !that.isMultiselectable() && !that.useNeutralFilterMode, points = that.multiData ? that.multiData.getAxis(_item_data_axis_names_1.itemDataAxisNames.defaultAxis).getPoints(true) : [];
        if (selectionOnly) {
            $.each(that.dataSource, function (_, dataItem) {
                applySelection(dataItem);
            });
        }
        else {
            if (hasAllElement && points.length > 0) {
                that.dataSource.push(_localizer_1.ALL_ELEMENT);
            }
            $.each(points, function (_, point) {
                var dataItem = {}, uniqueValue = point.getUniquePath();
                dataItem[exports.KEY_EXPR] = key++;
                dataItem[VALUE_EXPR] = uniqueValue;
                dataItem[encodeHtml ? 'text' : 'html'] = that.getTitle(point, ', ', true);
                that.dataSource.push(dataItem);
                applySelection(dataItem);
            });
        }
        if (hasAllElement && ((!this.useNeutralFilterMode && that.dataSource.length - 1 === that.selection.length) || (!!this.useNeutralFilterMode && !that.selection.length))) {
            that.selection.splice(0, 0, _localizer_1.ALL_ELEMENT);
            that.fullSelection.splice(0, 0, _localizer_1.ALL_ELEMENT);
        }
    };
    filterElementDataController.prototype.getInteractionValues = function (elements, selectedValues) {
        var hasAll = !this.isMultiselectable() && elements && elements.indexOf(_localizer_1.ALL_ELEMENT) !== -1;
        if (!!this.useNeutralFilterMode && hasAll)
            return null;
        var that = this, values = [], items = hasAll ? that.dataSource : elements;
        $.each(items, function (_, item) {
            if (item !== _localizer_1.ALL_ELEMENT) {
                values.push(that._getDataValue(item));
            }
        });
        return values;
    };
    filterElementDataController.prototype._getDataValue = function (wrappedValue) {
        var itemData = (wrappedValue && wrappedValue.itemData) || wrappedValue;
        if (itemData[VALUE_EXPR] != null)
            return itemData[VALUE_EXPR];
        return null;
    };
    filterElementDataController.prototype._reset = function (selectionOnly) {
        if (selectionOnly === void 0) { selectionOnly = false; }
        if (!selectionOnly) {
            this.dataSource = [];
        }
        this.selection = [];
        this.fullSelection = [];
    };
    return filterElementDataController;
}(_data_controller_base_1.dataControllerBase));
exports.filterElementDataController = filterElementDataController;
var listViewDataController = (function (_super) {
    __extends(listViewDataController, _super);
    function listViewDataController(options) {
        var _this = _super.call(this, options) || this;
        _this.ListBoxType = {
            Checked: 'Checked',
            Radio: 'Radio'
        };
        _this.ComboBoxType = {
            Standard: 'Standard',
            Checked: 'Checked'
        };
        return _this;
    }
    listViewDataController.prototype.isMultiselectable = function () {
        return !this.viewModel || (this.viewModel.ListBoxType == this.ListBoxType.Checked) || (this.viewModel.ComboBoxType == this.ListBoxType.Checked);
    };
    return listViewDataController;
}(filterElementDataController));
exports.listViewDataController = listViewDataController;
;
var treeViewDataController = (function (_super) {
    __extends(treeViewDataController, _super);
    function treeViewDataController(options) {
        return _super.call(this, options) || this;
    }
    treeViewDataController.prototype.isMultiselectable = function () {
        return true;
    };
    treeViewDataController.prototype.getAllItemIndex = function () {
        return -1;
    };
    treeViewDataController.prototype.isAllSelected = function () {
        return false;
    };
    treeViewDataController.prototype.update = function (selectedValues, encodeHtml, selectionOnly) {
        if (selectionOnly === void 0) { selectionOnly = false; }
        this._reset(selectionOnly);
        if (selectionOnly)
            return this._updateSelection(selectedValues);
        var that = this, hash = _utils_1.wrapHash(selectedValues), sourceItems = that.multiData ? that.multiData.getAxis('Default').getRootPoint().getChildren() : [], key = 1, createDestNode = function (sourceNode) {
            var dataItem = {};
            dataItem[exports.KEY_EXPR] = key++;
            dataItem[VALUE_EXPR] = sourceNode.getUniqueValue();
            dataItem[encodeHtml || !legacy_settings_1.LegacySettings.useLegacyTreeView ? 'text' : 'html'] = sourceNode.getDisplayText();
            if (legacy_settings_1.LegacySettings.useLegacyTreeView) {
                dataItem['expanded'] = that.viewModel.AutoExpandNodes;
            }
            return dataItem;
        }, walkTree = function (sourceNode, destNodeItems, branch, nullChildCount) {
            var children = sourceNode.getChildren();
            var nextNull = 0;
            while (children.length == 1 && children[0].getUniqueValue() === special_values_1.specialValues.olapNullValueGuid) {
                children = children[0].getChildren();
                nextNull++;
            }
            var hasChildren = (children && children.length !== 0), subDestNode = createDestNode(sourceNode), currentBranch = branch.slice();
            subDestNode.nullChildCount = nextNull;
            for (var a = 0; a < nullChildCount; a++)
                currentBranch.push(special_values_1.specialValues.olapNullValueGuid);
            currentBranch.push(subDestNode.value);
            destNodeItems.push(subDestNode);
            if (hasChildren) {
                subDestNode.items = [];
                $.each(children, function (_, node) {
                    walkTree(node, subDestNode.items, currentBranch, nextNull);
                });
            }
            else {
                for (var a = 0; a < nextNull; a++)
                    currentBranch.push(special_values_1.specialValues.olapNullValueGuid);
                if (legacy_settings_1.LegacySettings.useLegacyTreeView) {
                    subDestNode.selected = !!hash[currentBranch];
                }
                else {
                    if (!!hash[currentBranch]) {
                        that.selection.push(subDestNode[exports.KEY_EXPR]);
                    }
                }
            }
        };
        $.each(sourceItems, function (_, sourceItem) {
            walkTree(sourceItem, that.dataSource, [], 0);
        });
    };
    treeViewDataController.prototype.getInteractionValues = function (elements, selectedValues) {
        if (!legacy_settings_1.LegacySettings.useLegacyTreeView)
            return elements;
        var that = this, hash = _utils_1.wrapHash(selectedValues), parent = elements.length ? elements[0].parent : undefined, rootBranch = [], resultSelection = [], prepareSelectionItems = function (items, parentBranch) {
            $.each(items, function (_, item) {
                var itemBranch = parentBranch.slice(), value = that._getDataValue(item), nullChildCount = that._getDataNullChildCount(item);
                itemBranch.push(value);
                for (var a = 0; a < nullChildCount; a++)
                    itemBranch.push(special_values_1.specialValues.olapNullValueGuid);
                if (!!item.items && item.items.length) {
                    prepareSelectionItems(item.items, itemBranch);
                }
                else {
                    var isSelected = !!hash[itemBranch];
                    if ((!legacy_settings_1.LegacySettings.useLegacyTreeView && !isSelected) ||
                        (legacy_settings_1.LegacySettings.useLegacyTreeView && ((item.selected && !isSelected) || (!item.selected && isSelected)))) {
                        resultSelection.push(itemBranch);
                    }
                }
            });
        };
        while (parent) {
            rootBranch.splice(0, 0, that._getDataValue(parent));
            parent = parent.parent;
        }
        prepareSelectionItems(elements, rootBranch);
        return resultSelection;
    };
    treeViewDataController.prototype._updateSelection = function (selectedValues) {
        var that = this;
        var hash = _utils_1.wrapHash(selectedValues);
        var updateItemsSelectedState = function (items, parentBranch) {
            $.each(items, function (_, item) {
                var itemBranch = parentBranch.slice(), value = that._getDataValue(item), nullChildCount = that._getDataNullChildCount(item);
                itemBranch.push(value);
                for (var a = 0; a < nullChildCount; a++)
                    itemBranch.push(special_values_1.specialValues.olapNullValueGuid);
                if (item.items && item.items.length) {
                    updateItemsSelectedState(item.items, itemBranch);
                }
                else {
                    if (legacy_settings_1.LegacySettings.useLegacyTreeView) {
                        item.selected = !!hash[itemBranch];
                    }
                    else {
                        if (!!hash[itemBranch]) {
                            that.selection.push(item[exports.KEY_EXPR]);
                        }
                    }
                }
            });
        };
        updateItemsSelectedState(this.dataSource, []);
    };
    treeViewDataController.prototype._getDataNullChildCount = function (wrappedValue) {
        var itemData = (wrappedValue && wrappedValue.itemData) || wrappedValue;
        if (itemData['nullChildCount'] != null)
            return itemData['nullChildCount'];
        return 0;
    };
    return treeViewDataController;
}(filterElementDataController));
exports.treeViewDataController = treeViewDataController;
