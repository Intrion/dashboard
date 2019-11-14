/**
* DevExpress Dashboard (_grid-columns.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var delta_options_1 = require("../../options/delta-options");
var sparkline_options_1 = require("../../options/sparkline-options");
exports.columnType = { propertyName: 'containerType', displayName: "DashboardWebStringId.Grid.ColumnType", editor: _base_metadata_1.editorTemplates.containerTypeSelector };
exports.displayMode = {
    propertyName: 'displayMode', modelName: '@DisplayMode', displayName: "DashboardWebStringId.Grid.DisplayMode", defaultVal: "Value", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Value": "DashboardWebStringId.Grid.DisplayMode.Value",
        "Bar": "DashboardWebStringId.Grid.DisplayMode.Bar"
    }
};
exports.columnWeight = { propertyName: 'weight', modelName: '@Weight', displayName: 'DashboardStringId.WeightCaption', defaultVal: 75, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.fixedWidth = { propertyName: 'fixedWidth', modelName: '@FixedWidth', displayName: "DashboardWebStringId.Grid.FixedWidth", defaultVal: 0, editor: _base_metadata_1.editorTemplates.numeric, from: _base_metadata_1.floatFromModel, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.widthType = {
    propertyName: 'widthType', modelName: '@WidthType', displayName: "DashboardWebStringId.Grid.WidthType", defaultVal: "Weight", editor: _base_metadata_1.editorTemplates.list, category: _base_metadata_1.PropertyCategory.ViewModel, values: {
        "Weight": "DashboardWebStringId.Grid.WidthType.Weight",
        "FitToContent": "DashboardWebStringId.Grid.WidthType.FitToContent",
        "FixedWidth": "DashboardWebStringId.Grid.FixedWidth"
    }
};
exports.totalsTemplate = { propertyName: "totals", modelName: "Totals", displayName: "DashboardWebStringId.AccordionTab.ShowTotals", array: true, editor: _base_metadata_1.editorTemplates.totals };
exports.gridColumnBaseSerializationsInfo = [_base_metadata_1.itemType, _base_metadata_1.name, exports.columnWeight, exports.fixedWidth, exports.widthType, exports.totalsTemplate];
exports.dimension = { propertyName: "__dimension", modelName: "Dimension", info: _data_item_1.dataItemLinkSerializationsInfo, displayName: "DashboardStringId.DescriptionItemDimension", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.dimensionDisplayMode = {
    propertyName: 'displayMode', modelName: '@DisplayMode', displayName: "DashboardWebStringId.Grid.DisplayMode", defaultVal: "Text", editor: _base_metadata_1.editorTemplates.combobox, values: {
        "Text": "DashboardWebStringId.Grid.DisplayMode.Text",
        "Image": "DashboardWebStringId.Grid.DisplayMode.Image"
    }
};
exports.gridDimensionColumnSerializationsInfo = exports.gridColumnBaseSerializationsInfo.concat([exports.dimensionDisplayMode, exports.dimension]);
exports.alwaysShowZeroLevel = { propertyName: 'alwaysShowZeroLevel', modelName: '@AlwaysShowZeroLevel', displayName: "DashboardWebStringId.Chart.AlwaysShowZeroLevel", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.measure = { propertyName: "__measure", modelName: "Measure", info: _data_item_1.dataItemLinkSerializationsInfo, displayName: "DashboardStringId.DescriptionItemMeasure", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.gridMeasureColumnSerializationsInfo = exports.gridColumnBaseSerializationsInfo.concat([exports.displayMode, exports.alwaysShowZeroLevel, exports.measure]);
exports.gridColumnDeltaOptions = { propertyName: 'deltaOptions', modelName: 'DeltaOptions', displayName: "DashboardWebStringId.Grid.DeltaOptions", type: delta_options_1.DeltaOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.gridColumnActualValue = { propertyName: _base_metadata_1.actualValuePropertyName, modelName: "ActualValue", info: _data_item_1.dataItemLinkSerializationsInfo, displayName: "DashboardStringId.ActualValueCaption", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.gridColumnTargetValue = { propertyName: _base_metadata_1.targetValuePropertyName, modelName: "TargetValue", info: _data_item_1.dataItemLinkSerializationsInfo, displayName: "DashboardStringId.TargetValueCaption", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.gridDeltaColumnSerializationsInfo = exports.gridColumnBaseSerializationsInfo.concat([exports.gridColumnDeltaOptions, exports.displayMode, exports.alwaysShowZeroLevel, exports.gridColumnActualValue, exports.gridColumnTargetValue, _data_item_1.absoluteVariationNumericFormat, _data_item_1.percentVariationNumericFormat, _data_item_1.percentOfTargetNumericFormat]);
exports.showStartEndValues = { propertyName: 'showStartEndValues', modelName: '@ShowStartEndValues', displayName: "DashboardWebStringId.Grid.ShowStartEndValues", defaultVal: false, editor: _base_metadata_1.editorTemplates.bool, from: _base_metadata_1.parseBool };
exports.sparkline = { propertyName: "__measure", modelName: "SparklineValue", info: _data_item_1.dataItemLinkSerializationsInfo, displayName: "DashboardWebStringId.Binding.Sparkline", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.sparklineOptions = { propertyName: 'sparklineOptions', modelName: 'SparklineOptions', displayName: "DashboardWebStringId.Card.SparklineOptions", type: sparkline_options_1.SparklineOptions, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.gridSparklineColumnSerializationsInfo = exports.gridColumnBaseSerializationsInfo.concat([exports.showStartEndValues, exports.sparkline, exports.sparklineOptions]);
exports.uri = { propertyName: '__uriAttribute', modelName: 'UriAttribute', info: _data_item_1.dataItemLinkSerializationsInfo, displayName: "DashboardStringId.UriCaption", editor: _base_metadata_1.editorTemplates.objecteditor };
exports.displayValue = { propertyName: '__displayValue', modelName: 'DisplayValue', info: _data_item_1.dataItemLinkSerializationsInfo, displayName: 'DashboardStringId.DisplayValueCaption', editor: _base_metadata_1.editorTemplates.objecteditor };
function checkGridUriPattern(value) {
    var removes = [];
    var result = '';
    for (var i = 0; i < value.length; i++) {
        if (value[i] == '{') {
            if (value.length < i + 2 || value[i + 1] != '0' || value[i + 2] != '}')
                removes.push(i);
        }
        if (value[i] == '}') {
            if (i < 2 || value[i - 1] != '0' || value[i - 2] != '{')
                removes.push(i);
        }
    }
    for (var i = 0; i < value.length; i++) {
        if (removes.indexOf(i) == -1)
            result = result + value[i];
    }
    return result;
}
exports.checkGridUriPattern = checkGridUriPattern;
function validateGridUriPattern(value) {
    var newValue = checkGridUriPattern(value);
    return newValue.length == value.length;
}
exports.validateGridUriPattern = validateGridUriPattern;
function gridValidateUriPattern(uriPattern) {
    return validateGridUriPattern(uriPattern);
}
exports.gridValidateUriPattern = gridValidateUriPattern;
exports.uriPatternValidationRules = [{ type: "custom", validationCallback: function (options) { return gridValidateUriPattern(options.value); }, message: 'DashboardStringId.GridHyperlinkUriPatternErrorMessage' }];
exports.gridColumnUriPattern = { propertyName: 'uriPattern', modelName: '@UriPattern', displayName: "DashboardStringId.UriPatternCaption", editor: _base_metadata_1.editorTemplates.text, editorOptions: { placeholder: "{0}" }, validationRules: exports.uriPatternValidationRules };
exports.gridHyperlinkColumnSerializationsInfo = exports.gridColumnBaseSerializationsInfo.concat([exports.uri, exports.displayValue, exports.gridColumnUriPattern]);
