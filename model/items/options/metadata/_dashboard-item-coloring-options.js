/**
* DevExpress Dashboard (_dashboard-item-coloring-options.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.useGlobalColors = {
    propertyName: 'useGlobalColors', modelName: '@UseGlobalColors', displayName: "DashboardWebStringId.Colorization.ColorSchemeType", defaultVal: true, editor: _base_metadata_1.editorTemplates.buttonGroup, from: _base_metadata_1.parseBool,
    valuesArray: [{
            value: true,
            displayValue: "DashboardWebStringId.Coloring.Global"
        }, {
            value: false,
            displayValue: "DashboardWebStringId.Coloring.Local"
        }],
    category: _base_metadata_1.PropertyCategory.Coloring
};
exports.measuresColoringMode = {
    propertyName: 'measuresColoringMode', modelName: '@MeasuresColoringMode', displayName: "DashboardWebStringId.Coloring.MeasuresColoringMode", defaultVal: "Default", editor: _base_metadata_1.editorTemplates.buttonGroup,
    values: {
        "Default": "DashboardWebStringId.ColoringModeAuto",
        "None": "DashboardWebStringId.ColoringModeOff",
        "Hue": "DashboardWebStringId.ColoringModeOn"
    }
};
exports.dashboardItemColoringOptionsSerializationsInfo = [exports.useGlobalColors, exports.measuresColoringMode];
