﻿/**
* DevExpress Dashboard (dashboard-layout-group.js)
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
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var dashboard_layout_node_1 = require("./dashboard-layout-node");
var _layout_item_placeholder_1 = require("./_layout-item-placeholder");
var _layout_utils_1 = require("./_layout-utils");
var ko = require("knockout");
var DashboardLayoutGroup = (function (_super) {
    __extends(DashboardLayoutGroup, _super);
    function DashboardLayoutGroup(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this.childNodes = ko.observableArray([]);
        _this.childNodes(dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.LayoutItems || {}, function (modelJson) { return _layout_utils_1.deserializeDashboardLayoutNode(modelJson, serializer); })());
        _this.childNodes().forEach(function (childNode) { return childNode.parentNode(_this); });
        _this.parentNode.subscribe(function (newParentNode) {
            _this.childNodes().forEach(function (childNode) { return childNode.parentNode(_this); });
        });
        _this.childNodes.subscribe(function (arrayChanges) {
            arrayChanges.forEach(function (arrayChange) {
                if (arrayChange.status === 'added') {
                    var addedLayoutItem = arrayChange.value;
                    addedLayoutItem.parentNode(_this);
                }
                if (arrayChange.status === 'deleted') {
                    var removedLayoutItem = arrayChange.value;
                    if (removedLayoutItem.parentNode() === _this) {
                        arrayChange.value.parentNode(null);
                    }
                }
            });
        }, null, "arrayChange");
        return _this;
    }
    Object.defineProperty(DashboardLayoutGroup.prototype, "_template", {
        get: function () { return "dx-dashboard-group"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutGroup.prototype, "_createPlaceholderFunc", {
        get: function () {
            var _this = this;
            return function () { return new _layout_item_placeholder_1.DashboardLayoutItemPlaceholder(_this)._createViewModel(); };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutGroup.prototype, "_visibleItems", {
        get: function () { return this.childNodes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutGroup.prototype, "_childItems", {
        get: function () { return this.childNodes; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutGroup.prototype, "_orientation", {
        get: function () { return this.orientation; },
        enumerable: true,
        configurable: true
    });
    DashboardLayoutGroup.prototype.findLayoutItem = function (dashboardItem) {
        var result = _super.prototype.findLayoutItem.call(this, dashboardItem);
        if (!result) {
            for (var _i = 0, _a = this.childNodes(); _i < _a.length; _i++) {
                var childLayoutItem = _a[_i];
                result = childLayoutItem.findLayoutItem(dashboardItem);
                if (!!result) {
                    break;
                }
            }
        }
        return result;
    };
    DashboardLayoutGroup.prototype.getNodesRecursive = function () {
        return this.childNodes().reduce(function (acc, layoutItem) {
            acc.push(layoutItem);
            if (layoutItem instanceof DashboardLayoutGroup) {
                acc = acc.concat(layoutItem.getNodesRecursive());
            }
            return acc;
        }, []);
    };
    DashboardLayoutGroup.prototype.getItemsRecursive = function () {
        return this.getNodesRecursive().filter(function (node) { return node.dashboardItem(); });
    };
    DashboardLayoutGroup.prototype._attachToGroupWithInversedOrientation = function (target, itemToAttach, position) {
        var owner = this;
        var newGroupItemModel = new DashboardLayoutGroup();
        newGroupItemModel.orientation(owner.orientation());
        owner.childNodes().slice(0).forEach(function (node) {
            owner._detachChild(node);
            newGroupItemModel.childNodes.push(node);
        });
        owner.orientation(newGroupItemModel.orientation() === "Horizontal" ? "Vertical" : "Horizontal");
        owner.childNodes.push(newGroupItemModel);
        owner._attachChild(target, itemToAttach, position);
    };
    DashboardLayoutGroup.prototype._attachChild = function (target, itemToAttach, position) {
        var attachBefore = true;
        var owner = this;
        if (this.orientation() === "Horizontal") {
            switch (position) {
                case "left":
                    break;
                case "right":
                    attachBefore = false;
                    break;
                case "top":
                    owner = this._wrapChildWithGroup(target, "Vertical");
                    break;
                case "bottom":
                    attachBefore = false;
                    owner = this._wrapChildWithGroup(target, "Vertical");
                    break;
            }
        }
        else {
            switch (position) {
                case "left":
                    owner = this._wrapChildWithGroup(target, "Horizontal");
                    break;
                case "right":
                    attachBefore = false;
                    owner = this._wrapChildWithGroup(target, "Horizontal");
                    break;
                case "top":
                    break;
                case "bottom":
                    attachBefore = false;
                    break;
            }
        }
        if (!this.parentNode() && owner === this) {
            owner = this._wrapChildWithGroup(target, "Horizontal");
        }
        _attachChildCore(owner, target, itemToAttach, attachBefore);
    };
    DashboardLayoutGroup.prototype._detachChild = function (removedChildLayoutNode) {
        this.childNodes.splice(this.childNodes().indexOf(removedChildLayoutNode), 1);
        if (this.childNodes().length === 0 && !this.item) {
            this.remove();
        }
        this._ensureGroupIsNeeded();
    };
    DashboardLayoutGroup.prototype._ensureGroupIsNeeded = function () {
        if (this.childNodes().length === 1 && !this.item && this.parentNode() && this.parentNode().parentNode()) {
            var childToUnwrap = this.childNodes()[0];
            var parentNode = this.parentNode();
            childToUnwrap.weight(this.weight());
            this.childNodes.remove(childToUnwrap);
            parentNode.childNodes.splice(parentNode.childNodes().indexOf(this), 1, childToUnwrap);
            parentNode._ensureGroupIsNeeded();
        }
    };
    DashboardLayoutGroup.prototype._wrapChildWithGroup = function (childLayoutNode, orientation) {
        var newGroupItemModel = new DashboardLayoutGroup();
        newGroupItemModel.weight(childLayoutNode.weight());
        newGroupItemModel.orientation(orientation);
        _attachChildCore(this, childLayoutNode, newGroupItemModel, true);
        this._detachChild(childLayoutNode);
        newGroupItemModel.childNodes.push(childLayoutNode);
        return newGroupItemModel;
    };
    DashboardLayoutGroup.prototype._getOrientationByInsertPosition = function (position) {
        return (position === 'left' || position === 'right') ? 'Horizontal' : 'Vertical';
    };
    DashboardLayoutGroup.prototype._insertItemCore = function (layoutNodeToInsert, position, insertionBehavior) {
        if (this.parentNode()) {
            if (insertionBehavior === 'InsertIntoGroup' && this._getOrientationByInsertPosition(position) !== this.orientation()) {
                this._attachToGroupWithInversedOrientation(this, layoutNodeToInsert, position);
            }
            else {
                _super.prototype._insertItemCore.call(this, layoutNodeToInsert, position);
            }
        }
        else {
            this._addItem(layoutNodeToInsert);
        }
    };
    DashboardLayoutGroup.prototype._addItem = function (layoutNodeToInsert) {
        this.childNodes.push(layoutNodeToInsert);
    };
    DashboardLayoutGroup.prototype._getDefaultItemType = function () { return "LayoutGroup"; };
    DashboardLayoutGroup.prototype._deleteDashbordItem = function () {
        var _this = this;
        _super.prototype._deleteDashbordItem.call(this);
        if (this._dashboard()) {
            this._dashboard().items.remove(function (item) { return item.parentContainer() === _this.item.componentName(); });
            this._dashboard().groups.remove(this.item);
        }
    };
    return DashboardLayoutGroup;
}(dashboard_layout_node_1.DashboardLayoutNode));
exports.DashboardLayoutGroup = DashboardLayoutGroup;
function _attachChildCore(owner, target, sibling, before) {
    if (before === void 0) { before = true; }
    var index = owner.childNodes().indexOf(target);
    if (index == -1)
        index = 0;
    owner.childNodes.splice(before ? index : index + 1, 0, sibling);
}
_layout_utils_1._layoutItemTypeMap["LayoutGroup"] = DashboardLayoutGroup;
var DashboardLayoutRootGroup = (function (_super) {
    __extends(DashboardLayoutRootGroup, _super);
    function DashboardLayoutRootGroup(dashboard, modelJson, serializer) {
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._dashboard(dashboard);
        _this.weight(undefined);
        return _this;
    }
    DashboardLayoutRootGroup.prototype._getDefaultItemType = function () { return ""; };
    DashboardLayoutRootGroup.prototype._addItem = function (layoutNodeToInsert) {
        if (this.childNodes().length == 0) {
            var targetLayoutItem = new DashboardLayoutGroup();
            targetLayoutItem.childNodes.push(layoutNodeToInsert);
            this.childNodes.push(targetLayoutItem);
        }
        else if (this.childNodes().length == 1 && this.childNodes()[0] instanceof DashboardLayoutGroup) {
            this.childNodes()[0].childNodes.push(layoutNodeToInsert);
        }
        else if (this.childNodes().length > 1) {
            throw new Error("Root layout item has more than one child.");
        }
    };
    return DashboardLayoutRootGroup;
}(DashboardLayoutGroup));
exports.DashboardLayoutRootGroup = DashboardLayoutRootGroup;
