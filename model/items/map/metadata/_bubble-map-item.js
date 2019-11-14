/**
* DevExpress Dashboard (_bubble-map-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var _geo_point_map_item_base_1 = require("./_geo-point-map-item-base");
var _map_item_1 = require("./_map-item");
exports.bubbleMapWeight = { propertyName: _base_metadata_1.weightPropertyName, modelName: 'Weight', displayName: 'DashboardStringId.WeightCaption', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.bubbleMapColor = { propertyName: _base_metadata_1.colorPropertyName, modelName: 'Color', displayName: 'DashboardStringId.DescriptionItemColor', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.bubbleMapDashboardItemSerializationsInfo = _geo_point_map_item_base_1.geoPointMapDashboardItemBaseSerializationsInfo.concat([exports.bubbleMapWeight, exports.bubbleMapColor, _map_item_1.colorLegend, _map_item_1.weightedLegend]);
