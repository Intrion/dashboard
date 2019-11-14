/**
* DevExpress Dashboard (_layout-utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
exports._layoutItemTypeMap = {};
function deserializeDashboardLayoutNode(itemModel, serializer) {
    if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
    var itemType = itemModel["@ItemType"];
    return new exports._layoutItemTypeMap[itemType](itemModel, serializer);
}
exports.deserializeDashboardLayoutNode = deserializeDashboardLayoutNode;
