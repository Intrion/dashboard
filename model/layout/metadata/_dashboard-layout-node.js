/**
* DevExpress Dashboard (_dashboard-layout-node.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
exports.dashboardItem = { propertyName: "dashboardItem", modelName: "@DashboardItem" };
exports.orientation = { propertyName: "orientation", modelName: "@Orientation", displayName: "DashboardWebStringId.Chart.Orientation", defaultVal: "Horizontal", editor: _base_metadata_1.editorTemplates.text };
exports.layoutWeight = { propertyName: "weight", modelName: "@Weight", defaultVal: 1, displayName: "DashboardStringId.WeightCaption", editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel };
exports.layoutItemsSerializable = { propertyName: "childNodes", modelName: "LayoutItems", displayName: "DashboardWebStringId.Dashboard.LayoutItems", array: true, editor: _base_metadata_1.editorTemplates.commonCollection };
exports.layoutItemSerializationsInfo = [_base_metadata_1.itemType, exports.layoutWeight, exports.orientation, exports.layoutItemsSerializable, exports.dashboardItem];
