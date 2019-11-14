/**
* DevExpress Dashboard (_map-legend.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.legendVisible = { propertyName: 'visible', modelName: '@Visible', displayName: "DashboardWebStringId.Map.ShowLegend", defaultVal: false, editor: _base_metadata_1.editorTemplates.boolYesNo, from: _base_metadata_1.parseBool };
exports.legendPosition = {
    propertyName: 'position', modelName: '@Position', displayName: 'DashboardWebStringId.WeightedLegendGalleryGroup', defaultVal: "TopLeft", editor: _base_metadata_1.editorTemplates.list, values: {
        "TopLeft": "DashboardWebStringId.Map.Position.TopLeft",
        "TopCenter": "DashboardWebStringId.Map.Position.TopCenter",
        "TopRight": "DashboardWebStringId.Map.Position.TopRight",
        "BottomLeft": "DashboardWebStringId.Map.Position.BottomLeft",
        "BottomCenter": "DashboardWebStringId.Map.Position.BottomCenter",
        "BottomRight": "DashboardWebStringId.Map.Position.BottomRight"
    }
};
exports.mapLegendBaseSerializationsInfo = [exports.legendVisible, exports.legendPosition];
exports.legendType = {
    propertyName: 'type', modelName: '@WeightedLegendType', displayName: "DashboardWebStringId.Map.WeightedLegendType", defaultVal: "Linear", editor: _base_metadata_1.editorTemplates.buttonGroup, visible: false, values: {
        "Linear": "DashboardWebStringId.Map.WeightedLegendType.Linear",
        "Nested": "DashboardWebStringId.Map.WeightedLegendType.Nested"
    }
};
exports.weightedLegendSerializationsInfo = exports.mapLegendBaseSerializationsInfo.concat([exports.legendType]);
exports.legendOrientation = {
    propertyName: 'orientation', modelName: '@Orientation', displayName: "DashboardWebStringId.Chart.Orientation", defaultVal: "Vertical", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Vertical": "DashboardWebStringId.Map.Orientation.Vertical",
        "Horizontal": "DashboardWebStringId.Map.Orientation.Horizontal"
    }
};
exports.mapLegendSerializationsInfo = exports.mapLegendBaseSerializationsInfo.concat([exports.legendOrientation]);
