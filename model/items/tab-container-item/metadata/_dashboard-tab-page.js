/**
* DevExpress Dashboard (_dashboard-tab-page.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _dashboard_item_1 = require("../../metadata/_dashboard-item");
var interactivity_options_1 = require("../../options/interactivity-options");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.showItemAsTabPage = { propertyName: "showItemAsTabPage", modelName: "@ShowItemAsTabPage", displayName: "DashboardWebStringId.DisplayItemAsPage", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.tabPageSerializationInfo = _dashboard_item_1.dashboardItemSerializationsInfo.concat([interactivity_options_1._tabItemInteractivityOptions, exports.showItemAsTabPage]);
