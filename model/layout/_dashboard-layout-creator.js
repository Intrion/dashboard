﻿/**
* DevExpress Dashboard (_dashboard-layout-creator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dashboard_layout_group_1 = require("./dashboard-layout-group");
var tab_container_item_1 = require("../items/tab-container-item/tab-container-item");
var dashboard_tab_page_1 = require("../items/tab-container-item/dashboard-tab-page");
var DashboardLayoutCreator = (function () {
    function DashboardLayoutCreator(_clientWidth, _clientHeight, _dashboard) {
        if (_clientWidth === void 0) { _clientWidth = 1; }
        if (_clientHeight === void 0) { _clientHeight = 1; }
        this._clientWidth = _clientWidth;
        this._clientHeight = _clientHeight;
        this._dashboard = _dashboard;
        this._layoutRoot = this._dashboard.layout();
        this.rebuildLayout();
    }
    DashboardLayoutCreator.prototype.rebuildLayout = function () {
        this._removeIncorrectLayoutNodes();
        if (this._layoutRoot.childNodes().length === 0) {
            this._layoutRoot.childNodes.push(new dashboard_layout_group_1.DashboardLayoutGroup());
        }
        this._createLayoutNodes(this._dashboard.items().filter(function (item) { return item instanceof tab_container_item_1.TabContainerItem; }));
        this._createLayoutNodes(this._dashboard._tabPages());
        this._createLayoutNodes(this._dashboard.groups());
        this._createLayoutNodes(this._dashboard.items());
    };
    DashboardLayoutCreator.prototype._removeIncorrectLayoutNodes = function () {
        var _this = this;
        var layoutNodesToRemove = this._layoutRoot.getNodesRecursive().filter(function (layoutNode) {
            if (layoutNode.dashboardItem()) {
                var dashboardItem = _this._dashboard.findItem(layoutNode.dashboardItem());
                if (!dashboardItem) {
                    return true;
                }
                else if (!!dashboardItem.parentContainer()) {
                    var parent_1 = layoutNode.parentNode();
                    while (parent_1 != _this._layoutRoot && parent_1.dashboardItem() == null)
                        parent_1 = parent_1.parentNode();
                    if (parent_1.dashboardItem() !== dashboardItem.parentContainer())
                        return true;
                }
            }
            else if (layoutNode instanceof dashboard_layout_group_1.DashboardLayoutGroup && layoutNode.childNodes().length === 0) {
                return true;
            }
            return false;
        });
        layoutNodesToRemove.forEach(function (layoutNode) { return layoutNode.remove(); });
    };
    DashboardLayoutCreator.prototype._getParentItem = function (dashboardItem) {
        if (dashboardItem instanceof dashboard_tab_page_1.DashboardTabPage) {
            return this._dashboard.items()
                .filter(function (item) { return item instanceof tab_container_item_1.TabContainerItem; })
                .filter(function (tabContainer) { return tabContainer.tabPages().indexOf(dashboardItem) !== -1; })[0];
        }
        return this._dashboard.findItem(dashboardItem.parentContainer());
    };
    DashboardLayoutCreator.prototype._createLayoutNodes = function (dashboardItems) {
        var _this = this;
        dashboardItems
            .filter(function (dashboardItem) { return !_this._layoutRoot.findLayoutItem(dashboardItem); })
            .forEach(function (dashboardItem) {
            var parentNode = null;
            var parentItem = _this._getParentItem(dashboardItem);
            if (parentItem) {
                parentNode = _this._layoutRoot.findLayoutItem(parentItem);
            }
            if (!parentNode) {
                parentNode = _this._layoutRoot.childNodes()[0];
            }
            _this._createLayoutNode(dashboardItem, parentNode);
        });
    };
    DashboardLayoutCreator.prototype._createLayoutNode = function (dashboardItem, layoutGroup) {
        if (layoutGroup.childNodes().length == 0 || this._getParentItem(dashboardItem) instanceof tab_container_item_1.TabContainerItem) {
            layoutGroup.childNodes.push(this._dashboard._createDashboardLayoutNode(dashboardItem));
            return;
        }
        var maxItem = layoutGroup.getItemsRecursive().reduce(function (acc, layoutNode) {
            if (acc === null) {
                return layoutNode;
            }
            else {
                if (acc._relativeArea() < layoutNode._relativeArea())
                    return layoutNode;
                return acc;
            }
        }, null);
        var newLayoutNode = this._dashboard._createDashboardLayoutNode(dashboardItem);
        if (maxItem == null) {
            layoutGroup.childNodes.push(newLayoutNode);
            return;
        }
        if (maxItem.parentNode().orientation() === 'Horizontal') {
            if (maxItem._relativeHeight() * this._clientHeight < maxItem._relativeWidth() * this._clientWidth) {
                maxItem.weight(maxItem.weight() / 2);
                newLayoutNode.weight(maxItem.weight());
                maxItem.insert(newLayoutNode, 'right');
            }
            else {
                newLayoutNode.weight(maxItem.weight());
                maxItem.insert(newLayoutNode, 'bottom');
            }
        }
        else {
            if (maxItem._relativeHeight() * this._clientHeight > maxItem._relativeWidth() * this._clientWidth) {
                maxItem.weight(maxItem.weight() / 2);
                newLayoutNode.weight(maxItem.weight());
                maxItem.insert(newLayoutNode, 'bottom');
            }
            else {
                newLayoutNode.weight(maxItem.weight());
                maxItem.insert(newLayoutNode, 'right');
            }
        }
    };
    return DashboardLayoutCreator;
}());
exports.DashboardLayoutCreator = DashboardLayoutCreator;
