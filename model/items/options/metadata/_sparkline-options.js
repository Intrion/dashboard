/**
* DevExpress Dashboard (_sparkline-options.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
exports.viewType = {
    propertyName: 'viewType', modelName: '@ViewType', displayName: "DashboardWebStringId.Sparkline.ViewType", defaultVal: "Line", editor: _base_metadata_1.editorTemplates.iconTypeSelector,
    valuesArray: [
        { value: "Line", displayValue: "DashboardStringId.SparklineIndicationModeLine" },
        { value: "Area", displayValue: "DashboardStringId.SparklineIndicationModeArea" },
        { value: "Bar", displayValue: "DashboardStringId.SparklineIndicationModeBar" },
        { value: "WinLoss", displayValue: "DashboardStringId.SparklineIndicationModeWinLoss" }
    ],
    editorOptions: {
        valuesInfo: {
            "Line": { icon: "dx-dashboard-chart-series-line" },
            "Area": { icon: "dx-dashboard-chart-series-area" },
            "Bar": { icon: "dx-dashboard-chart-series-bar" },
            "WinLoss": { icon: "dx-dashboard-sparkline-win-loss" }
        }
    }
};
exports.highlightMinMaxPoints = { propertyName: 'highlightMinMaxPoints', modelName: '@HighlightMinMaxPoints', displayName: "DashboardWebStringId.Sparkline.HighlightMinMaxPoints", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.highlightStartEndPoints = { propertyName: 'highlightStartEndPoints', modelName: '@HighlightStartEndPoints', displayName: "DashboardWebStringId.Sparkline.HighlightStartEndPoints", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.sparklineOptionsSerializationsInfo = [exports.viewType, exports.highlightMinMaxPoints, exports.highlightStartEndPoints];
