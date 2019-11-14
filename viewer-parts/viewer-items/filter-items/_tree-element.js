/**
* DevExpress Dashboard (_tree-element.js)
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
var _base_element_1 = require("./_base-element");
var legacy_settings_1 = require("../../legacy-settings");
var _filter_element_data_controller_1 = require("../../../data/data-controllers/_filter-element-data-controller");
var _localizer_1 = require("../../../data/_localizer");
var _localizer_2 = require("../../../data/_localizer");
var _localization_ids_1 = require("../../../data/_localization-ids");
var _utils_1 = require("../../../data/_utils");
var special_values_1 = require("../../../data/special-values");
var $ = require("jquery");
var tree_view_1 = require("devextreme/ui/tree_view");
var tree_list_1 = require("devextreme/ui/tree_list");
exports.cssTreeViewClassNames = {
    borderVisible: 'dx-treeview-border-visible',
    topBorder: 'dx-dashboard-top-border',
    item: 'dx-dashboard-tree-item'
};
var treeViewFilterElement = (function (_super) {
    __extends(treeViewFilterElement, _super);
    function treeViewFilterElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    treeViewFilterElement.prototype._setSelectionUnsafe = function (values) {
        var _this = this;
        _super.prototype._setSelectionUnsafe.call(this, values);
        var selection = this.dataController.selection;
        if (!legacy_settings_1.LegacySettings.useLegacyTreeView && this.widget != null && this.widget.getSelectedRowKeys('leavesOnly').sort().toString() !== selection.sort().toString()) {
            this._lock();
            this.widget.selectRows(selection).always(function () {
                return _this._unlock();
            });
        }
    };
    treeViewFilterElement.prototype._generateInnerBorderClassesUnsafe = function (element) {
        var classes = _super.prototype._generateInnerBorderClassesUnsafe.call(this, element);
        if (!this._isPaneEmpty()) {
            classes.push(exports.cssTreeViewClassNames.item);
        }
        if (element) {
            if (this._isPaneEmpty()) {
                element.classList.remove(exports.cssTreeViewClassNames.item);
            }
            else {
                element.classList.add(exports.cssTreeViewClassNames.item);
            }
        }
        return classes;
    };
    treeViewFilterElement.prototype._clearSelectionUnsafe = function () {
        var _this = this;
        if (!!this.options.useNeutralFilterMode) {
            this._lock();
            this.widget.selectRows([]).always(function () {
                return _this._unlock();
            });
        }
    };
    treeViewFilterElement.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        _super.prototype.renderContentUnsafe.call(this, element, changeExisting, afterRenderCallback);
        var widgetElement = _utils_1.$unwrap(this.widget.element());
        if (legacy_settings_1.LegacySettings.useLegacyTreeView && this._isPaneEmpty() && this.visualMode !== 'content') {
            widgetElement.classList.add(exports.cssTreeViewClassNames.borderVisible);
        }
        else {
            widgetElement.classList.remove(exports.cssTreeViewClassNames.borderVisible);
        }
        return false;
    };
    treeViewFilterElement.prototype._getWidgetName = function () {
        return legacy_settings_1.LegacySettings.useLegacyTreeView ? 'dxTreeView' : 'dxTreeList';
    };
    treeViewFilterElement.prototype._createWidget = function (div, opts) {
        return legacy_settings_1.LegacySettings.useLegacyTreeView ? new tree_view_1.default(div, opts) : new tree_list_1.default(div, opts);
    };
    treeViewFilterElement.prototype._getOptions = function (includeActions) {
        var _this = this;
        var that = this;
        return legacy_settings_1.LegacySettings.useLegacyTreeView ?
            {
                items: that.dataController.dataSource,
                width: '100%',
                height: '100%',
                keyExpr: 'key',
                hoverStateEnabled: false,
                scrollDirection: 'both',
                showCheckBoxesMode: 'selectAll',
                rootValue: null,
                selectAllText: _localizer_1.ALL_ELEMENT.text,
                selectNodesRecursive: true,
                onSelectionChanged: includeActions ? function (e) { return that._raiseItemClick(e.component.getNodes()); } : undefined
            } :
            {
                dataSource: that.dataController.dataSource,
                itemsExpr: 'items',
                dataStructure: 'tree',
                columns: [{
                        caption: _localizer_1.ALL_ELEMENT.text,
                        dataField: 'text',
                        encodeHtml: that._isEncodeHtml()
                    }],
                selection: {
                    allowSelectAll: true,
                    mode: 'multiple',
                    recursive: true
                },
                scrolling: {
                    mode: 'virtual'
                },
                sorting: {
                    mode: 'none'
                },
                searchPanel: {
                    placeholder: _localizer_2.localizer.getString(_localization_ids_1.localizationId.SearchNullValuePrompt),
                    visible: this._enableSearch,
                    width: '100%',
                    searchVisibleColumnsOnly: true
                },
                autoExpandAll: that.options.ViewModel.AutoExpandNodes,
                expandNodesOnFiltering: true,
                showRowLines: false,
                showBorders: that.hasParentContainer() && this.visualMode !== 'content',
                width: '100%',
                height: '100%',
                keyExpr: _filter_element_data_controller_1.KEY_EXPR,
                hoverStateEnabled: false,
                rootValue: null,
                onContentReady: function (e) {
                    var scrollable = e.component.getScrollable();
                    if (scrollable) {
                        scrollable.off('scroll', _this._onScrollChanged);
                        scrollable.on('scroll', _this._onScrollChanged);
                    }
                },
                onEditorPrepared: function (e) {
                    _utils_1.$unwrap(e.editorElement).classList.remove('dx-treelist-checkbox-size');
                },
                onSelectionChanged: includeActions ? function (e) {
                    var getBranches = function (keys, isSelection) {
                        if (isSelection === void 0) { isSelection = false; }
                        var hash = _utils_1.wrapHash(that._getSelectedValues());
                        var fillByChildren = function (nodes, parentBranch) {
                            $.each(nodes, function (_, node) {
                                var nodeBranch = parentBranch.slice(), value = node.data.value;
                                nodeBranch.push(value);
                                if (!!node.children && node.children.length) {
                                    fillByChildren(node.children, nodeBranch);
                                }
                                else {
                                    var dimensionality = that.dataController.multiData ? that.dataController.multiData.getDimensions().length : -1;
                                    if (nodeBranch.length < dimensionality) {
                                        for (var i = 1; i <= dimensionality - nodeBranch.length; i++) {
                                            nodeBranch.push(special_values_1.specialValues.olapNullValueGuid);
                                        }
                                    }
                                    if ((isSelection && !!hash[nodeBranch]) || (!isSelection && !hash[nodeBranch]))
                                        return true;
                                    branches[nodeBranch] = nodeBranch;
                                }
                            });
                        };
                        var branches = {};
                        for (var i = 0; i < keys.length; i++) {
                            var key = keys[i];
                            var node = that.widget.getNodeByKey(key);
                            var branch = [node.data.value];
                            while (node.parent && node.level > 0) {
                                branch.unshift(node.parent.data.value);
                                node = node.parent;
                            }
                            node = that.widget.getNodeByKey(key);
                            if (!!node.children && node.children.length) {
                                fillByChildren(node.children, branch);
                            }
                            else {
                                branches[branch] = branch;
                            }
                        }
                        return Object.keys(branches).map(function (key) { return branches[key]; });
                    };
                    if (!that._isLocked()) {
                        if (e.currentSelectedRowKeys.length > 0 && e.currentDeselectedRowKeys.length > 0)
                            throw new Error("TREEVIEW has an incorrect selection");
                        that._raiseItemClick(getBranches(e.currentSelectedRowKeys.length > 0 ? e.currentSelectedRowKeys : e.currentDeselectedRowKeys, e.currentSelectedRowKeys.length > 0));
                    }
                } : undefined
            };
    };
    treeViewFilterElement.prototype._onScrollChanged = function (e) {
        if (e.scrollOffset.top !== 0) {
            _utils_1.$unwrap(e.element).classList.add(exports.cssTreeViewClassNames.topBorder);
        }
        else {
            _utils_1.$unwrap(e.element).classList.remove(exports.cssTreeViewClassNames.topBorder);
        }
    };
    return treeViewFilterElement;
}(_base_element_1.filterElementBaseItem));
exports.treeViewFilterElement = treeViewFilterElement;
