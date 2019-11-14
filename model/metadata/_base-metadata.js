/**
* DevExpress Dashboard (_base-metadata.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _date_utils_1 = require("../internal/_date-utils");
var ko = require("knockout");
var PropertyCategory;
(function (PropertyCategory) {
    PropertyCategory[PropertyCategory["ClientState"] = 0] = "ClientState";
    PropertyCategory[PropertyCategory["Data"] = 1] = "Data";
    PropertyCategory[PropertyCategory["Interactivity"] = 2] = "Interactivity";
    PropertyCategory[PropertyCategory["ViewModel"] = 3] = "ViewModel";
    PropertyCategory[PropertyCategory["Map"] = 4] = "Map";
    PropertyCategory[PropertyCategory["Initialize"] = 5] = "Initialize";
    PropertyCategory[PropertyCategory["Coloring"] = 6] = "Coloring";
    PropertyCategory[PropertyCategory["NoUpdate"] = 7] = "NoUpdate";
    PropertyCategory[PropertyCategory["NoUpdateByObservableValue"] = 8] = "NoUpdateByObservableValue";
})(PropertyCategory = exports.PropertyCategory || (exports.PropertyCategory = {}));
exports.editorTemplates = {
    text: dx_analytics_core_1.default.Analytics.Widgets && dx_analytics_core_1.default.Analytics.Widgets.editorTemplates.text,
    bool: { header: "dx-dashboard-button-group-on-off" },
    boolYesNo: { header: "dx-dashboard-button-group-yes-no" },
    boolVisibleHidden: { header: "dx-dashboard-button-group-visible-hidden" },
    boolDiscreteContinuous: { header: "dx-dashboard-button-group-discrete-continuous" },
    checkBox: { custom: "dx-dashboard-check-box" },
    list: { header: "dx-dashboard-list" },
    numeric: { header: "dx-dashboard-numeric" },
    gaugeScale: { header: "dx-dashboard-gauge-scale" },
    toggleNumeric: { header: "dx-dashboard-toggle-numeric" },
    date: { header: "dx-dashboard-date" },
    combobox: { header: 'dx-dashboard-combobox-in-popup' },
    multiValueSelect: { header: 'dx-dashboard-multivalue-select' },
    singleValueSelect: { header: 'dx-dashboard-singlevalue-select' },
    commonCollection: dx_analytics_core_1.default.Analytics.Widgets && dx_analytics_core_1.default.Analytics.Widgets.editorTemplates.commonCollection,
    objecteditor: dx_analytics_core_1.default.Analytics.Widgets && dx_analytics_core_1.default.Analytics.Widgets.editorTemplates.objecteditor,
    image: dx_analytics_core_1.default.Analytics.Widgets && dx_analytics_core_1.default.Analytics.Widgets.editorTemplates.image,
    textFile: { header: "dx-dashboard-load-text-file" },
    mapShapeFile: { header: "dx-dashboard-load-map-shape-file" },
    mapAttributeFile: { header: "dx-dashboard-load-map-attribute-file" },
    expression: { header: "dx-dashboard-expression-editor" },
    cardTemplateCollection: { custom: "dx-dashboard-card-templates" },
    deltaFormats: { header: "dx-dashboard-delta-formats" },
    calculationWindowDataItems: { custom: "dx-dashboard-calculation-window-data-items" },
    calculationWindowDefinition: { custom: "dx-dashboard-calculation-window-definition" },
    totals: { custom: "dx-dashboard-totals" },
    formatRules: { custom: "dx-dashboard-format-rules" },
    calculations: { custom: "dx-dashboard-calculations" },
    styleSettings: { header: "dx-dashboard-style-settings" },
    ruleRanges: { custom: "dx-dashboard-rule-ranges" },
    ruleExpression: { custom: "dx-dashboard-rule-expression" },
    calculationExpression: { custom: "dx-dashboard-calculation-expression" },
    containerTypeSelector: { custom: "dx-dashboard-container-type-selector-editor" },
    guid: dx_analytics_core_1.default.Analytics.Widgets.coreEditorTemplates.guid,
    itemDataSource: { header: "dx-dashboard-datasource" },
    itemDataMember: { header: "dx-dashboard-datamember" },
    itemFieldChooser: { header: "dx-dashboard-fieldchooser" },
    itemFieldPicker: { header: "dx-dashboard-fieldpicker" },
    shapeFileAttributes: { header: "dx-dashboard-shapeFileAttributes" },
    buttonGroup: { header: "dx-dashboard-button-group" },
    radioGroup: { header: "dx-dashboard-radio-group" },
    iconTypeSelector: { header: "dx-dashboard-icon-type-selector" },
    colorSchemeTreeViewEditor: { header: "dx-dashboard-colors-tree" },
    dateSample: { header: "dx-dashboard-date-sample" },
    flowModeSettings: { header: "dx-dashboard-flow-mode-settings" },
    currency: { header: "dx-dashboard-currency-editor" },
    actionButtons: { custom: "dx-dashboard-action-buttons" },
    collectionEditorValuesBased: { header: "dx-dashboard-collection-editor-values-based" },
    pointLabelContentTypeSelector: { header: "dx-dashboard-point-label-content-type-selector" },
    enumFlagsTypeSelector: { header: "dx-dashboard-enum-flags-date-type-selector" },
    numericFormatEditor: { custom: "dx-dashboard-numeric-format-editor" }
};
function parseBool(value) {
    return dx_analytics_core_1.default.Analytics.Utils.parseBool(value);
}
exports.parseBool = parseBool;
function floatFromModel(value) {
    return ko.observable(parseFloat(value));
}
exports.floatFromModel = floatFromModel;
function fromStringToDate(val) {
    return ko.observable(_date_utils_1.toUtcDate(val));
}
exports.fromStringToDate = fromStringToDate;
function fromDateToString(date) {
    return _date_utils_1.fromUtcDateToString(date);
}
exports.fromDateToString = fromDateToString;
function nullableFloatToModel(value) {
    if (!isNaN(value))
        return JSON.stringify(value);
    return {};
}
exports.nullableFloatToModel = nullableFloatToModel;
exports.integerValidationRule = {
    type: "custom",
    validationCallback: function (e) { return Math.abs(Math.round(e.value) - e.value) === 0 || isNaN(e.value); }
};
exports.itemType = { propertyName: "itemType", modelName: "@ItemType", defaultVal: "" };
exports.componentName = { propertyName: "componentName", modelName: "@ComponentName", displayName: "DashboardWebStringId.Dashboard.ComponentName", editor: exports.editorTemplates.text };
exports.url = { propertyName: "url", modelName: "@RequestUrl" };
exports.name = { propertyName: "name", modelName: "@Name", displayName: "DashboardWebStringId.Options.Caption", editor: exports.editorTemplates.text };
exports.name_ViewModel = { propertyName: "name", modelName: "@Name", displayName: "DashboardWebStringId.Options.Caption", editor: exports.editorTemplates.text, category: PropertyCategory.ViewModel };
exports.nameTag = { propertyName: "name", modelName: "Name" };
exports.dataMember = { propertyName: 'dataMember', modelName: '@DataMember', displayName: 'DashboardStringId.DataSourceDataMember', editor: exports.editorTemplates.text };
exports.filter = { propertyName: "filter", modelName: "Filter" };
exports.contentArrangementMode = {
    propertyName: 'contentArrangementMode', modelName: '@ContentArrangementMode', displayName: "DashboardWebStringId.Cards.ArrangementMode", defaultVal: "Auto", editor: exports.editorTemplates.list, values: {
        "Auto": "DashboardWebStringId.Cards.ArrangementMode.Auto",
        "FixedRowCount": "DashboardWebStringId.Cards.ArrangementMode.FixedRows",
        "FixedColumnCount": "DashboardWebStringId.Cards.ArrangementMode.FixedColumns"
    }
};
exports.contentLineCount = {
    propertyName: 'contentLineCount',
    modelName: '@ContentLineCount',
    displayName: "DashboardWebStringId.Cards.LineCount",
    defaultVal: 3,
    editor: exports.editorTemplates.numeric,
    from: floatFromModel,
    editorOptions: { min: 1 },
    validationRules: [exports.integerValidationRule]
};
exports.BindingSectionTitles = {
    Arguments: "DashboardStringId.DescriptionArguments",
    SingleArgument: "DashboardWebStringId.Binding.Argument",
    SeriesDimension: "DashboardStringId.DescriptionSeries"
};
exports.columnsPropertyName = '__columns';
exports.rowsPropertyName = '__rows';
exports.argumentsPropertyName = '__arguments';
exports.valuesPropertyName = '__values';
exports.argumentPropertyName = '__argument';
exports.valuePropertyName = '__value';
exports.actualValuePropertyName = '__actualValue';
exports.targetValuePropertyName = '__targetValue';
exports.sparklineArgumentPropertyName = '__sparklineArgument';
exports.weightPropertyName = '__weight';
exports.colorPropertyName = '__color';
