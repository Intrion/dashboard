/**
* DevExpress Dashboard (dashboard-layout-node.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../serializable-model");
var group_item_1 = require("../items/group/group-item");
var tab_container_item_1 = require("../items/tab-container-item/tab-container-item");
var dashboard_tab_page_1 = require("../items/tab-container-item/dashboard-tab-page");
var dashboard_item_1 = require("../items/dashboard-item");
var _dashboard_layout_node_1 = require("./metadata/_dashboard-layout-node");
var _undo_engine_helper_1 = require("../internal/_undo-engine-helper");
var ko = require("knockout");
var DashboardLayoutNode = (function (_super) {
    __extends(DashboardLayoutNode, _super);
    function DashboardLayoutNode(dashboardLayoutItemJSON, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardLayoutItemJSON, serializer) || this;
        _this.parentNode = ko.observable();
        _this._dashboard = ko.observable();
        _this._relativeWidth = ko.computed(function () {
            if (!_this.parentNode()) {
                return 1;
            }
            else if (_this.parentNode().orientation() === "Horizontal")
                return _this.parentNode()._relativeWidth() * (_this.weight() / _this.parentNode().childNodes().reduce(function (acc, item) { return acc + item.weight(); }, 0));
            else
                return _this.parentNode()._relativeWidth();
        });
        _this._relativeHeight = ko.computed(function () {
            if (!_this.parentNode()) {
                return 1;
            }
            else if (_this.parentNode().orientation() === "Vertical")
                return _this.parentNode()._relativeHeight() * (_this.weight() / _this.parentNode().childNodes().reduce(function (acc, item) { return acc + item.weight(); }, 0));
            else
                return _this.parentNode()._relativeHeight();
        });
        _this._relativeArea = ko.computed(function () {
            return _this._relativeWidth() * _this._relativeHeight();
        });
        _this._activeTabPage = ko.observable(undefined);
        _this._activeTabIndex = ko.observable(0);
        ko.computed(function () {
            _this._dashboard(_this.parentNode() && _this.parentNode()._dashboard() || null);
        });
        _this.parentNode.subscribe(function (_) { return _this._ensureItemParentContainer(); });
        _this.dashboardItem.subscribe(function (_) { return _this._ensureItemParentContainer(); });
        _this._findDashboardItem = function () { return _this._dashboard() && _this._dashboard().findItem(_this.dashboardItem()) || null; };
        var _subscription;
        if (!_this.weight()) {
            _this.weight(1);
        }
        return _this;
    }
    DashboardLayoutNode._canAttach = function (parent, dashboardLayoutNode) {
        if (dashboardLayoutNode) {
            var containsParent = function (predicate) {
                var container = parent;
                while (!!container) {
                    if (predicate(container)) {
                        return true;
                    }
                    container = container.parentNode();
                }
                return false;
            };
            var itemType = dashboardLayoutNode instanceof DashboardLayoutNode ? dashboardLayoutNode._getDefaultItemType() : dashboardLayoutNode["@ItemType"];
            if (itemType === "TabContainer" || itemType === "LayoutTabContainer") {
                return !containsParent(function (container) { return container.item instanceof group_item_1.GroupItem; }) &&
                    !containsParent(function (container) { return container.item instanceof tab_container_item_1.TabContainerItem; });
            }
            var isVisbleGroup = function (node) {
                if (node instanceof DashboardLayoutNode) {
                    return !!node.dashboardItem();
                }
                else {
                    return true;
                }
            };
            if ((itemType === "Group" || itemType === "LayoutGroup") && isVisbleGroup(dashboardLayoutNode)) {
                return !containsParent(function (container) { return container.item instanceof group_item_1.GroupItem; });
            }
        }
        return true;
    };
    Object.defineProperty(DashboardLayoutNode.prototype, "item", {
        get: function () {
            return this._findDashboardItem();
        },
        set: function (newItem) {
            if (this.item !== newItem) {
                this._setItemCore(newItem);
            }
        },
        enumerable: true,
        configurable: true
    });
    DashboardLayoutNode.prototype.getInfo = function () {
        return _dashboard_layout_node_1.layoutItemSerializationsInfo;
    };
    DashboardLayoutNode.prototype.findLayoutItem = function (dashboardItem) {
        return this.item === dashboardItem ? this : undefined;
    };
    DashboardLayoutNode.prototype.insert = function (itemToInsert, position) {
        var layoutNodeToInsert = null;
        if (itemToInsert instanceof dashboard_item_1.DashboardItem)
            layoutNodeToInsert = this._dashboard() && this._dashboard()._createDashboardLayoutNode(itemToInsert) || null;
        else
            layoutNodeToInsert = itemToInsert;
        if (!layoutNodeToInsert || !this._canAttach(layoutNodeToInsert)) {
            return;
        }
        this._insertItemCore(layoutNodeToInsert, position);
    };
    DashboardLayoutNode.prototype.moveTo = function (targetItem, position) {
        this._moveTo(targetItem, position);
    };
    DashboardLayoutNode.prototype._moveTo = function (targetItem, position, insertionBehavior) {
        this.remove();
        targetItem._insertItemCore(this, position, insertionBehavior);
    };
    DashboardLayoutNode.prototype.remove = function () {
        if (this.parentNode()) {
            this.parentNode()._detachChild(this);
            this.parentNode(null);
        }
    };
    DashboardLayoutNode.prototype._create = function (modelItemJson, position, insertionBehavior) {
        var newItemModel = this._dashboard()._createDashboardLayoutItem(modelItemJson);
        if (!!this.weight()) {
            newItemModel.weight(this.weight());
        }
        this._insertItemCore(newItemModel, position, insertionBehavior);
        return newItemModel;
    };
    DashboardLayoutNode.prototype._validateParentNode = function (newParentNode) {
        this.parentNode(newParentNode);
    };
    DashboardLayoutNode.prototype._canAttach = function (itemToAttach) {
        return DashboardLayoutNode._canAttach(this.parentNode(), itemToAttach);
    };
    DashboardLayoutNode.prototype._createViewModel = function () {
        var _this = this;
        if (!this._viewModel) {
            this._viewModel = {
                model: this,
                dashboardItem: this.dashboardItem,
                template: this._template,
                hasItem: ko.computed(function () { return !!_this.item; }),
                item: ko.computed(function () {
                    if (_this.item instanceof dashboard_tab_page_1.DashboardTabPage) {
                        return _this._dashboard()._getDisplayDashboardItem(_this.item);
                    }
                    return _this.item;
                }),
                create: function (modelItemJson, location, insertionBehavior) {
                    var layoutItemModel = _this._create(modelItemJson, location, insertionBehavior);
                    return layoutItemModel && layoutItemModel._createViewModel() || null;
                },
                createTabPage: function () { return _this._createTabPage(); },
                moveTo: function (itemViewModel, location, insertionBehavior) {
                    _this._moveTo(itemViewModel.model, location, insertionBehavior);
                    return itemViewModel.model._createViewModel();
                },
                delete: function () { return _this._delete(); },
                canAttach: function (something) { return _this._canAttach(something.model ? something.model : something); },
                ignoreChildMaxHeight: this._ignoreChildMaxHeight,
                orientation: this._orientation,
                getPlaceholder: this._createPlaceholderFunc,
                weight: this.weight,
                visibleItems: this._visibleItems,
                childItems: this._childItems,
                activeTabPage: this._activeTabPage,
                activeTabIndex: this._activeTabIndex,
                dragOverInnerElementController: this._dragOverInnerElementController
            };
        }
        return this._viewModel;
    };
    Object.defineProperty(DashboardLayoutNode.prototype, "_template", {
        get: function () { return ''; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutNode.prototype, "_ignoreChildMaxHeight", {
        get: function () { return false; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutNode.prototype, "_visibleItems", {
        get: function () { return ko.observableArray([]); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DashboardLayoutNode.prototype, "_childItems", {
        get: function () { return ko.observableArray([]); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DashboardLayoutNode.prototype, "_orientation", {
        get: function () { return ko.observable("Horizontal"); },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DashboardLayoutNode.prototype, "_createPlaceholderFunc", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DashboardLayoutNode.prototype, "_dragOverInnerElementController", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    ;
    DashboardLayoutNode.prototype._delete = function () {
        this._deleteDashbordItem();
        this.remove();
    };
    DashboardLayoutNode.prototype._insertItemCore = function (layoutNodeToInsert, position, insertionBehavior) {
        if (this.parentNode()) {
            this.parentNode()._attachChild(this, layoutNodeToInsert, position);
        }
    };
    DashboardLayoutNode.prototype._setItemCore = function (newItem) {
        this.dashboardItem(newItem.componentName());
    };
    DashboardLayoutNode.prototype._createTabPage = function () {
    };
    DashboardLayoutNode.prototype._ensureItemParentContainer = function () {
        if (!!this.dashboardItem() && !!this.item) {
            var current = this.parentNode();
            while (!!current && !(current.item instanceof group_item_1.GroupItem || current.item instanceof dashboard_tab_page_1.DashboardTabPage)) {
                current = current.parentNode();
            }
            if (!!current && (current.item instanceof group_item_1.GroupItem || current.item instanceof dashboard_tab_page_1.DashboardTabPage)) {
                this.item.parentContainer(current.item.componentName());
            }
            else {
                this.item.parentContainer(undefined);
            }
        }
    };
    DashboardLayoutNode.prototype._deleteDashbordItem = function () {
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DashboardLayoutNode.prototype, "insert", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DashboardLayoutNode.prototype, "_moveTo", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DashboardLayoutNode.prototype, "remove", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DashboardLayoutNode.prototype, "_create", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DashboardLayoutNode.prototype, "_delete", null);
    return DashboardLayoutNode;
}(serializable_model_1.TypedSerializableModel));
exports.DashboardLayoutNode = DashboardLayoutNode;
