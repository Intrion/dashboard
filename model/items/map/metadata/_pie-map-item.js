/**
* DevExpress Dashboard (_pie-map-item.js)
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
var _coloring_options_1 = require("../../options/metadata/_coloring-options");
exports.pieMapArgument = { propertyName: _base_metadata_1.argumentPropertyName, modelName: 'Argument', displayName: 'DashboardStringId.DescriptionItemArgument', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.pieMapValues = { propertyName: _base_metadata_1.valuesPropertyName, modelName: 'Values', displayName: 'DashboardStringId.DescriptionValues', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.isWeighted = { propertyName: 'isWeighted', modelName: '@IsWeighted', displayName: 'DashboardWebStringId.PieMapIsWeighted', defaultVal: true, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.pieMapDashboardItemSerializationsInfo = _geo_point_map_item_base_1.geoPointMapDashboardItemBaseSerializationsInfo.concat([exports.pieMapArgument, exports.pieMapValues, exports.isWeighted, _map_item_1.colorLegend, _map_item_1.weightedLegend, _coloring_options_1.coloringOptions]);
