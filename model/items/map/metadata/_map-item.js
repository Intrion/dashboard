/**
* DevExpress Dashboard (_map-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var map_legend_1 = require("../map-legend");
var custom_shape_file_1 = require("../custom-shape-file");
var map_viewport_1 = require("../map-viewport");
var _data_dashboard_item_1 = require("../../metadata/_data-dashboard-item");
var interactivity_options_1 = require("../../options/interactivity-options");
exports.area = {
    propertyName: 'area', modelName: '@ShapefileArea', displayName: "DashboardWebStringId.Map.Area", defaultVal: "WorldCountries", editor: _base_metadata_1.editorTemplates.collectionEditorValuesBased, values: {
        "WorldCountries": "DashboardWebStringId.Map.Area.WorldCountries",
        "Europe": "DashboardWebStringId.Map.Area.Europe",
        "Asia": "DashboardWebStringId.Map.Area.Asia",
        "NorthAmerica": "DashboardWebStringId.Map.Area.NorthAmerica",
        "SouthAmerica": "DashboardWebStringId.Map.Area.SouthAmerica",
        "Africa": "DashboardWebStringId.Map.Area.Africa",
        "USA": "DashboardWebStringId.Map.Area.USA",
        "Canada": "DashboardWebStringId.Map.Area.Canada",
        "Custom": "DashboardWebStringId.Map.Area.Custom"
    }, category: _base_metadata_1.PropertyCategory.Map
};
exports.colorLegend = { propertyName: 'legend', modelName: 'MapLegend', displayName: "DashboardWebStringId.Chart.Legend", type: map_legend_1.MapLegend, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.weightedLegend = { propertyName: 'weightedLegend', modelName: 'WeightedLegend', displayName: 'DashboardWebStringId.AccordionTab.WeightedLegend', type: map_legend_1.WeightedLegend, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.customShapefile = { propertyName: 'customShapefile', modelName: 'CustomShapefile', type: custom_shape_file_1.CustomShapefile };
exports.viewport = { propertyName: 'viewport', modelName: 'ViewArea', displayName: "DashboardWebStringId.Map.Viewport", type: map_viewport_1.MapViewport };
exports.tooltipMeasures = { propertyName: '__tooltipMeasures', modelName: 'TooltipMeasures', displayName: "DashboardWebStringId.Binding.TooltipMeasures", editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.lockNavigation = {
    propertyName: 'lockNavigation', modelName: '@LockNavigation', displayName: "DashboardWebStringId.MapLockNavigation", defaultVal: false, editor: _base_metadata_1.editorTemplates.buttonGroup, valuesArray: [
        { value: true, displayValue: "DashboardWebStringId.MapLockNavigationLocked" },
        { value: false, displayValue: "DashboardWebStringId.MapLockNavigationUnlocked" }
    ], from: _base_metadata_1.parseBool, category: _base_metadata_1.PropertyCategory.Map
};
exports.shapeTitleAttributeName = { propertyName: 'shapeTitleAttributeName', modelName: '@ShapeTitleAttributeName', displayName: "DashboardWebStringId.Map.ShapeTitleAttribute", defaultVal: "", editor: _base_metadata_1.editorTemplates.combobox, category: _base_metadata_1.PropertyCategory.Map };
exports.mapDashboardItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([exports.area, exports.customShapefile, exports.viewport, exports.tooltipMeasures, exports.lockNavigation, exports.shapeTitleAttributeName, interactivity_options_1._masterFilterInteractivityOptionsMeta]);
