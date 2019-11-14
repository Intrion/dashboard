/**
* DevExpress Dashboard (_measure.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../metadata/_base-metadata");
var calculation_1 = require("../calculations/calculation");
var window_definition_1 = require("../window-definition/window-definition");
var _data_item_1 = require("./_data-item");
exports.summaryTypeDict = {
    "Count": "DashboardStringId.SummaryTypeCount",
    "CountDistinct": "DashboardStringId.SummaryTypeCountDistinct",
    "Sum": "DashboardStringId.SummaryTypeSum",
    "Min": "DashboardStringId.SummaryTypeMin",
    "Max": "DashboardStringId.SummaryTypeMax",
    "Average": "DashboardStringId.SummaryTypeAverage",
    "StdDev": "DashboardStringId.SummaryTypeStdDev",
    "StdDevp": "DashboardStringId.SummaryTypeStdDevp",
    "Var": "DashboardStringId.SummaryTypeVar",
    "Varp": "DashboardStringId.SummaryTypeVarp",
    "Median": "DashboardStringId.SummaryTypeMedian",
    "Mode": "DashboardStringId.SummaryTypeMode"
};
exports.summaryTypeTemplate = {
    propertyName: "summaryType", modelName: "@SummaryType", displayName: "DashboardWebStringId.SummaryType"
};
exports.summaryTypeNumericToAny = __assign({ defaultVal: "Sum", editor: _base_metadata_1.editorTemplates.combobox, values: exports.summaryTypeDict }, exports.summaryTypeTemplate);
exports.summaryTypeAttribute = __assign({ defaultVal: "Min", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Min": "DashboardStringId.SummaryTypeMin"
    } }, exports.summaryTypeTemplate);
exports.summaryTypeNonNumericToNumeric = __assign({ defaultVal: "Count", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Count": "DashboardStringId.SummaryTypeCount",
        "CountDistinct": "DashboardStringId.SummaryTypeCountDistinct"
    } }, exports.summaryTypeTemplate);
exports.summaryTypeNonNumericToString = __assign({ defaultVal: "Count", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Count": "DashboardStringId.SummaryTypeCount",
        "CountDistinct": "DashboardStringId.SummaryTypeCountDistinct",
        "Min": "DashboardStringId.SummaryTypeMin",
        "Max": "DashboardStringId.SummaryTypeMax",
        "Mode": "DashboardStringId.SummaryTypeMode"
    } }, exports.summaryTypeTemplate);
exports.calculation = { propertyName: "calculation", modelName: "Calculation", type: calculation_1.Calculation };
exports.windowDefinition = { propertyName: "windowDefinition", modelName: "WindowDefinition", type: window_definition_1.WindowDefinition, editor: _base_metadata_1.editorTemplates.calculationWindowDefinition };
exports.expression = { propertyName: "expression", modelName: "@Expression" };
exports.calculations = { propertyName: "calculations", displayName: "DashboardWebStringId.Calculations", editor: _base_metadata_1.editorTemplates.calculations, collectionItemDefaultPropertyInfo: { propertyName: "title" } };
exports.measureItemSerializationsInfo = _data_item_1.dataItemSerializationsInfo.concat(exports.summaryTypeNumericToAny, exports.calculation, exports.windowDefinition, exports.expression);
