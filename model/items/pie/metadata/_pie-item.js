/**
* DevExpress Dashboard (_pie-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _chart_item_base_1 = require("../../metadata/_chart-item-base");
var interactivity_options_1 = require("../../options/interactivity-options");
exports.pieValues = { propertyName: _base_metadata_1.valuesPropertyName, modelName: "Values", displayName: "DashboardWebStringId.Binding.Values", array: true, editor: _base_metadata_1.editorTemplates.commonCollection };
exports.labelContentType = {
    propertyName: 'labelContentType', modelName: '@LabelContentType', displayName: "DashboardWebStringId.Chart.LabelContent", defaultVal: "ArgumentAndPercent", editor: _base_metadata_1.editorTemplates.list, values: {
        "None": "DashboardWebStringId.Pie.LabelContentType.None",
        "Argument": "DashboardWebStringId.Pie.LabelContentType.Argument",
        "Percent": "DashboardWebStringId.Pie.LabelContentType.Percent",
        "ArgumentAndPercent": "DashboardWebStringId.Pie.LabelContentType.ArgumentAndPercent",
        "Value": "DashboardWebStringId.Pie.LabelContentType.Value",
        "ArgumentAndValue": "DashboardWebStringId.Pie.LabelContentType.ArgumentAndValue",
        "ValueAndPercent": "DashboardWebStringId.Pie.LabelContentType.ValueAndPercent",
        "ArgumentValueAndPercent": "DashboardWebStringId.Pie.LabelContentType.ArgumentValueAndPercent"
    }
};
exports.tooltipContentType = {
    propertyName: 'tooltipContentType', modelName: '@TooltipContentType', displayName: "DashboardWebStringId.Chart.TooltipContent", defaultVal: "ArgumentValueAndPercent", editor: _base_metadata_1.editorTemplates.list, values: {
        "None": "DashboardWebStringId.Pie.LabelContentType.None",
        "Argument": "DashboardWebStringId.Pie.LabelContentType.Argument",
        "Percent": "DashboardWebStringId.Pie.LabelContentType.Percent",
        "ArgumentAndPercent": "DashboardWebStringId.Pie.LabelContentType.ArgumentAndPercent",
        "Value": "DashboardWebStringId.Pie.LabelContentType.Value",
        "ArgumentAndValue": "DashboardWebStringId.Pie.LabelContentType.ArgumentAndValue",
        "ValueAndPercent": "DashboardWebStringId.Pie.LabelContentType.ValueAndPercent",
        "ArgumentValueAndPercent": "DashboardWebStringId.Pie.LabelContentType.ArgumentValueAndPercent"
    }
};
exports.pieType = {
    propertyName: 'pieType', modelName: '@PieType', displayName: "DashboardWebStringId.Pie.Type", defaultVal: "Pie", editor: _base_metadata_1.editorTemplates.containerTypeSelector, valuesArray: [
        { value: "Pie", displayValue: "DashboardWebStringId.Pie" },
        { value: "Donut", displayValue: "DashboardWebStringId.Pie.Donut" }
    ]
};
exports.showPieCaptions = { propertyName: 'showPieCaptions', modelName: '@ShowPieCaptions', displayName: 'DashboardWebStringId.Pie.ShowCaptions', defaultVal: true, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.labelPosition = {
    propertyName: 'labelPosition', modelName: '@LabelPosition', displayName: 'DashboardWebStringId.Pie.LabelPosition', defaultVal: "Outside", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Outside": "DashboardWebStringId.Pie.LabelPositionOutside",
        "Inside": "DashboardWebStringId.Pie.LabelPositionInside"
    }
};
exports.pieDashboardItemSerializationsInfo = _chart_item_base_1.chartItemBaseSerializationsInfo.concat([exports.pieValues, exports.labelContentType, exports.tooltipContentType, exports.pieType, _base_metadata_1.contentArrangementMode, _base_metadata_1.contentLineCount, exports.showPieCaptions, interactivity_options_1._chartItemInteractivityOptionsMeta, exports.labelPosition]);
