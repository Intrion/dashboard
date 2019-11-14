/**
* DevExpress Dashboard (group-item.js)
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
var dashboard_item_1 = require("../dashboard-item");
var _group_item_1 = require("./metadata/_group-item");
var serializable_model_1 = require("../../serializable-model");
var GroupItem = (function (_super) {
    __extends(GroupItem, _super);
    function GroupItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, dashboardItemJSON, serializer) || this;
    }
    GroupItem.prototype.getInfo = function () {
        return _group_item_1.groupItemSerializationInfo;
    };
    GroupItem.prototype._getDefaultItemType = function () {
        return "Group";
    };
    return GroupItem;
}(dashboard_item_1.DashboardItem));
exports.GroupItem = GroupItem;
serializable_model_1.itemTypesMap["Group"] = { type: GroupItem, groupName: 'layout', title: "DashboardStringId.DefaultNameItemGroup", index: 20 };
