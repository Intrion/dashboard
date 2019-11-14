/**
* DevExpress Dashboard (_gauge-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _kpi_item_1 = require("../../kpi/metadata/_kpi-item");
exports.gauges = { propertyName: 'gauges', modelName: 'Gauges', displayName: 'DashboardStringId.DefaultNameGaugeItem', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.gaugeViewType = {
    propertyName: 'viewType', modelName: '@ViewType', displayName: "DashboardWebStringId.Gauge.Type", defaultVal: "CircularFull", editor: _base_metadata_1.editorTemplates.containerTypeSelector, valuesArray: [
        { value: "CircularFull", displayValue: "DashboardWebStringId.Gauge.Type.FullQuarterGauge" },
        { value: "CircularHalf", displayValue: "DashboardWebStringId.Gauge.Type.HalfCircular" },
        { value: "CircularQuarterLeft", displayValue: "DashboardWebStringId.Gauge.Type.LeftQuarterCircular" },
        { value: "CircularQuarterRight", displayValue: "DashboardWebStringId.Gauge.Type.RightQuarterCircular" },
        { value: "CircularThreeFourth", displayValue: "DashboardWebStringId.Gauge.Type.ThreeFourthCircular" },
        { value: "LinearHorizontal", displayValue: "DashboardWebStringId.Gauge.Type.LinearHorizontal" },
        { value: "LinearVertical", displayValue: "DashboardWebStringId.Gauge.Type.LinearVertical" }
    ]
};
exports.showGaugeCaptions = { propertyName: 'showGaugeCaptions', modelName: '@ShowGaugeCaptions', displayName: "DashboardWebStringId.Gauge.Captions", defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.gaugeDashboardItemSerializationsInfo = _kpi_item_1.kpiDashboardItemSerializationsInfo.concat([exports.gauges, exports.gaugeViewType, exports.showGaugeCaptions]);
