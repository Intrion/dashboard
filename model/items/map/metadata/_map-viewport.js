/**
* DevExpress Dashboard (_map-viewport.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.topLatitude = { propertyName: 'topLatitude', modelName: '@TopLatitude', displayName: "DashboardWebStringId.Map.Viewport.TopLatitude", defaultVal: 90, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, category: _base_metadata_1.PropertyCategory.NoUpdate };
exports.bottomLatitude = { propertyName: 'bottomLatitude', modelName: '@BottomLatitude', displayName: "DashboardWebStringId.Map.Viewport.BottomLatitude", defaultVal: -90, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, category: _base_metadata_1.PropertyCategory.NoUpdate };
exports.leftLongitude = { propertyName: 'leftLongitude', modelName: '@LeftLongitude', displayName: "DashboardWebStringId.Map.Viewport.LeftLongitude", defaultVal: -180, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, category: _base_metadata_1.PropertyCategory.NoUpdate };
exports.rightLongitude = { propertyName: 'rightLongitude', modelName: '@RightLongitude', displayName: "DashboardWebStringId.Map.Viewport.RightLongitude", defaultVal: 180, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, category: _base_metadata_1.PropertyCategory.NoUpdate };
exports.centerPointLatitude = { propertyName: 'centerPointLatitude', modelName: '@CenterPointLatitude', displayName: "DashboardWebStringId.Map.Viewport.CenterPointLatitude", defaultVal: 0, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, category: _base_metadata_1.PropertyCategory.NoUpdate };
exports.centerPointLongitude = { propertyName: 'centerPointLongitude', modelName: '@CenterPointLongitude', displayName: "DashboardWebStringId.Map.Viewport.CenterPointLongitude", defaultVal: 0, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, category: _base_metadata_1.PropertyCategory.NoUpdate };
exports.createViewerPaddings = { propertyName: 'createViewerPaddings', modelName: '@CreateViewerPaddings', displayName: "DashboardWebStringId.Map.Viewport.CreateViewerPaddings", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.NoUpdate };
exports.mapViewportSerializationsInfo = [exports.topLatitude, exports.bottomLatitude, exports.leftLongitude, exports.rightLongitude, exports.centerPointLatitude, exports.centerPointLongitude, exports.createViewerPaddings];
