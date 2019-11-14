/**
* DevExpress Dashboard (_dashboard-item-factory.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var custom_item_1 = require("./custom-item/custom-item");
var serializable_model_1 = require("../serializable-model");
function createDashboardItem(dashboardItemJSON, serializer) {
    var customItemTypeName = dashboardItemJSON["@CustomItemType"];
    if (!customItemTypeName) {
        var itemTypeName = dashboardItemJSON["@ItemType"];
        var itemType = serializable_model_1.itemTypesMap[itemTypeName].type;
        return new itemType(dashboardItemJSON, serializer);
    }
    else {
        var customItemType = !!serializable_model_1.itemTypesMap[customItemTypeName] ? serializable_model_1.itemTypesMap[customItemTypeName].type : custom_item_1.CustomItem;
        return new customItemType(serializable_model_1.itemTypesMap[customItemTypeName], dashboardItemJSON, serializer);
    }
}
exports.createDashboardItem = createDashboardItem;
