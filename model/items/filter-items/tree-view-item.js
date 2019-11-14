/**
* DevExpress Dashboard (tree-view-item.js)
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
var filter_element_item_base_1 = require("./filter-element-item-base");
var _tree_view_item_1 = require("./metadata/_tree-view-item");
var serializable_model_1 = require("../../serializable-model");
var TreeViewItem = (function (_super) {
    __extends(TreeViewItem, _super);
    function TreeViewItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, dashboardItemJSON, serializer) || this;
    }
    TreeViewItem.prototype.getInfo = function () {
        return _tree_view_item_1.treeViewDashboardItemSerializationsInfo;
    };
    TreeViewItem.prototype._getDefaultItemType = function () {
        return "TreeView";
    };
    TreeViewItem.prototype._allowAllValue = function () { return true; };
    TreeViewItem.prototype._isMultiselectable = function () { return true; };
    return TreeViewItem;
}(filter_element_item_base_1.FilterElementItemBase));
exports.TreeViewItem = TreeViewItem;
serializable_model_1.itemTypesMap["TreeView"] = { type: TreeViewItem, groupName: 'filter', title: "DashboardStringId.DefaultNameTreeViewItem", index: 340 };
