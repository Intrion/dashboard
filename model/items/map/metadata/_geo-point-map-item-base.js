/**
* DevExpress Dashboard (_geo-point-map-item-base.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _map_item_1 = require("./_map-item");
exports.latitude = { propertyName: '__latitude', modelName: 'Latitude', displayName: 'DashboardStringId.Latitude', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.longitude = { propertyName: '__longitude', modelName: 'Longitude', displayName: 'DashboardStringId.Longitude', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.tooltipDimensions = { propertyName: '__tooltipDimensions', modelName: 'TooltipDimensions', displayName: "DashboardWebStringId.Map.TooltipDimensions", editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.enableClustering = { propertyName: 'enableClustering', modelName: '@EnableClustering', displayName: 'DashboardWebStringId.GeoPointMapClusterization', defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.geoPointMapDashboardItemBaseSerializationsInfo = _map_item_1.mapDashboardItemSerializationsInfo.concat([exports.latitude, exports.longitude, exports.tooltipDimensions, exports.enableClustering]);
