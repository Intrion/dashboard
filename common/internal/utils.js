/**
* DevExpress Dashboard (utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findItemForApi(dashboard, itemName, expectedItemClass) {
    var dashboardItem = dashboard.findItem(itemName);
    if (!dashboardItem) {
        throw new Error("The item with the '" + itemName + "' name does not exist");
    }
    if (!(dashboardItem instanceof expectedItemClass))
        throw new Error("The '" + itemName + "' item has incorrect type.");
    return dashboardItem;
}
exports.findItemForApi = findItemForApi;
