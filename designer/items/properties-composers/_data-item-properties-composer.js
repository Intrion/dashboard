/**
* DevExpress Dashboard (_data-item-properties-composer.js)
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
var data_item_1 = require("../../../model/data-item/data-item");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var measure_1 = require("../../../model/data-item/measure");
var dimension_1 = require("../../../model/data-item/dimension");
var data_dashboard_item_1 = require("../../../model/items/data-dashboard-item");
var measure_calculation_1 = require("../../../model/data-item/calculations/measure-calculation");
var _properties_controller_1 = require("../../_properties-controller");
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _dimension_1 = require("../../../model/data-item/metadata/_dimension");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _display_name_provider_1 = require("../../_display-name-provider");
var _data_item_1 = require("../../../model/data-item/metadata/_data-item");
var _data_item_format_1 = require("../../../model/data-item/metadata/_data-item-format");
var _measure_1 = require("../../../model/data-item/metadata/_measure");
var percent_of_total_calculation_1 = require("../../../model/data-item/calculations/percent-of-total-calculation");
var running_total_calculation_1 = require("../../../model/data-item/calculations/running-total-calculation");
var difference_calculation_1 = require("../../../model/data-item/calculations/difference-calculation");
var moving_calculation_1 = require("../../../model/data-item/calculations/moving-calculation");
var rank_calculation_1 = require("../../../model/data-item/calculations/rank-calculation");
var _calculation_surface_1 = require("../../calculations/items/surfaces/_calculation-surface");
var _collection_editor_viewmodel_1 = require("../../ui-widgets/collection-editor/_collection-editor-viewmodel");
var _dashboard_item_format_rule_1 = require("../../../model/format-rules/metadata/_dashboard-item-format-rule");
var _data_dashboard_item_1 = require("../../../model/items/metadata/_data-dashboard-item");
var ko = require("knockout");
var _default_1 = require("../../../data/localization/_default");
var index_internal_1 = require("../../../model/index.internal");
var DataItemsPropertiesComposer = (function () {
    function DataItemsPropertiesComposer() {
    }
    DataItemsPropertiesComposer.prototype.composeTabs = function (model, choosenField, dataSourceBrowser, dataDashboardItem, unwrappedDataItem, constraint, propertiesController) {
        if (constraint === void 0) { constraint = function () { return true; }; }
        if (propertiesController === void 0) { propertiesController = new _properties_controller_1.PropertiesController(); }
        var dataField = choosenField.peek(), bindingTab = new _accordion_tab_1.BindingAccordionTab(_accordion_tab_1.KnownTabs.Binding, "DashboardWebStringId.Tabs.Binding"), optionsTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.UnwrappedDataItem, "DashboardWebStringId.Options"), dataShapingTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DataShaping, "DashboardWebStringId.Tabs.DataShaping"), numericFormatTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.NumericFormat, "DashboardWebStringId.Tabs.Format"), dateTimeFormatTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DateTimeFormat, "DashboardWebStringId.Tabs.Format"), topNTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.TopN, "DashboardStringId.CommandFormatRuleTopN"), calculationsTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Calculations, "DashboardWebStringId.Calculations"), result = [bindingTab, optionsTab, dataShapingTab, numericFormatTab, dateTimeFormatTab, topNTab, calculationsTab];
        optionsTab.orderNo = 90;
        calculationsTab.orderNo = 195;
        numericFormatTab.orderNo = 200;
        dateTimeFormatTab.orderNo = 205;
        topNTab.orderNo = 210;
        this.fillBindingTab(bindingTab, model, choosenField, dataSourceBrowser, dataDashboardItem, constraint);
        var dataItem = model.dataItem();
        if (dataItem) {
            var fieldType = dataField && dataField.fieldType();
            if (unwrappedDataItem) {
                this.fillOptionsTab(optionsTab, dataItem, model, dataDashboardItem);
            }
            if (dataItem instanceof dimension_1.Dimension) {
                var measures = dataDashboardItem._measures.filter(function (measure) { return !measure._hasCalculation(); });
                this.fillDataShapingPropertiesTab(dataShapingTab, dataDashboardItem, model, dataField, measures, dataSourceBrowser);
                if (dataDashboardItem._isTopNEnabled(dataItem)) {
                    this.fillTopNTab(topNTab, dataDashboardItem, dataItem, dataField, measures, model._specifics.supportsTopNOther, dataSourceBrowser);
                }
                if (!model._specifics.skipFormatting && dataField && !_data_field_1.DataField.isOlap(dataField.dataMember())) {
                    if (_data_field_1.DataField.isNumeric(dataField)) {
                        numericFormatTab.tabModel(_shared_composers_1.SharedComposers.getNumericFormatWrapper(dataItem.numericFormat));
                    }
                    else if (fieldType === "DateTime") {
                        this.fillDimensionDatetimeFormatTab(dateTimeFormatTab, dataItem);
                    }
                }
                else if (model._specifics.forceAddOlapExactDateFormat && dataField && fieldType === "DateTime" && _data_field_1.DataField.isOlap(dataField.dataMember())) {
                    this.fillDataItemExactDatetimeFormatTab(dateTimeFormatTab, dataItem);
                }
            }
            if (dataItem instanceof measure_1.Measure && !model._specifics.isAttribute) {
                if (dataDashboardItem._isCalculationSupported() && !_data_field_1.DataField.isOlap(dataItem.dataMember())) {
                    this.fillCalculationsTab(calculationsTab, dataItem, dataDashboardItem, dataSourceBrowser, propertiesController);
                }
                if (!model._specifics.skipFormatting) {
                    if ((dataItem.summaryType() !== "Min" && dataItem.summaryType() !== "Max") || _data_field_1.DataField.isNumeric(dataField)) {
                        numericFormatTab.tabModel(_shared_composers_1.SharedComposers.getNumericFormatWrapper(dataItem.numericFormat));
                    }
                    else if (fieldType === "DateTime") {
                        this.fillDataItemExactDatetimeFormatTab(dateTimeFormatTab, dataItem);
                    }
                }
            }
        }
        return result;
    };
    DataItemsPropertiesComposer.prototype.fillBindingTab = function (bindingTab, model, choosenField, dataSourceBrowser, dataDashboardItem, constraint) {
        bindingTab.tabModel({
            choosenField: ko.observable(choosenField),
            dataItemLink: model,
            constraint: constraint,
            dataSourceBrowser: dataSourceBrowser,
            dataMemberPath: ko.observable(ko.computed(function () {
                return dataDashboardItem.dataMember() ? [dataDashboardItem.dataSource(), dataDashboardItem.dataMember()].join(".") : dataDashboardItem.dataSource();
            })),
            additionalProperties: ko.observable(ko.pureComputed(function () {
                if (model._specifics.isAttribute || !choosenField())
                    return null;
                var properties = [];
                var dataItem = model.dataItem();
                if (dataItem instanceof measure_1.Measure) {
                    var summaryTypeMeta = data_dashboard_item_1.DataDashboardItem._getAvaliableSummaryTypeInfo(choosenField(), model._specifics.acceptableShapingType);
                    if (summaryTypeMeta) {
                        properties.push(summaryTypeMeta);
                    }
                }
                if ((model.dataItem() instanceof dimension_1.Dimension)
                    && (!_data_field_1.DataField.isOlap(model.dataItem().dataMember()))
                    && (choosenField() && choosenField().fieldType() === "DateTime")) {
                    if (model._specifics.acceptableShapingType !== data_item_1.AcceptableShapingType.RangeDate) {
                        properties.push(_dimension_1.dateTimeGroupInterval);
                    }
                    else {
                        properties.push(_dimension_1.rangeDateTimeGroupInterval);
                    }
                }
                if (properties.length) {
                    return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                        model: model.dataItem(),
                        properties: properties
                    });
                }
                return null;
            })),
            summary: ko.pureComputed(function () {
                var dataItemLink = bindingTab.tabModel() && bindingTab.tabModel().dataItemLink;
                return dataItemLink.dataItem() && dataItemLink.dataItem().dataMember() || "";
            }),
            summaryHint: ko.pureComputed(function () {
                var dataItemLink = bindingTab.tabModel() && bindingTab.tabModel().dataItemLink;
                return dataItemLink.dataItem() && (dataItemLink.dataItem().dataMember() + " (" + dataItemLink.uniqueName() + ")") || "";
            })
        });
    };
    DataItemsPropertiesComposer.prototype.fillOptionsTab = function (tab, dataItem, model, dataDashboardItem) {
        var properties = [];
        properties.push(_base_metadata_1.name);
        var newProperties = model
            ._specifics
            .customOptionsProperties
            .filter(function (p) { return !p.filter || p.filter(dataItem); });
        properties = properties.concat(newProperties.map(function (p) { return p.serializationInfo; }));
        var disabledRules = {};
        newProperties
            .filter(function (x) { return !!x.disabledRule; })
            .forEach(function (property) {
            disabledRules[property.serializationInfo.propertyName] = function (m) { return property.disabledRule(dataItem); };
        });
        tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: dataItem,
            properties: properties,
            disabledFilterRules: disabledRules
        }));
    };
    DataItemsPropertiesComposer.prototype.fillDataShapingPropertiesTab = function (tab, dataDashboardItem, model, dataField, measures, dataSourceBrowser) {
        var dataItem = model.dataItem();
        var disableRules = {};
        if (dataItem) {
            var fieldType = dataField && dataField.fieldType();
            ko.computed(function () {
                var properties = [];
                if (dataItem instanceof dimension_1.Dimension) {
                    var topNEnabledFunc = function () { return dataItem.topNOptionsEnabled(); };
                    if (dataDashboardItem._isSortingEnabled()) {
                        if (dataField && _data_field_1.DataField.isOlap(dataItem.dataMember())) {
                            properties.push(_dimension_1.sortOrderOlap);
                            disableRules[_dimension_1.sortOrderOlap.propertyName] = topNEnabledFunc;
                        }
                        else {
                            properties.push(_dimension_1.sortOrderNonOlap);
                            disableRules[_dimension_1.sortOrderNonOlap.propertyName] = topNEnabledFunc;
                        }
                        var values = [];
                        if (!_data_field_1.DataField.isOlap(dataItem.dataMember())) {
                            values.push({
                                value: "DXValue",
                                displayValue: "DashboardStringId.CommandDimensionSortModeValue"
                            });
                        }
                        else {
                            values.push({
                                value: "DXDisplayText",
                                displayValue: "DashboardStringId.CommandDimensionSortModeDisplayText"
                            });
                            values.push({
                                value: "DXValue",
                                displayValue: "DashboardStringId.CommandDimensionSortModeValue"
                            });
                            values.push({
                                value: "DXID",
                                displayValue: "DashboardStringId.CommandDimensionSortModeID"
                            });
                            values.push({
                                value: "DXKey",
                                displayValue: "DashboardStringId.CommandDimensionSortModeKey"
                            });
                        }
                        properties.push(__assign({ valuesArray: values.concat(measures.filter(function (m) { return m instanceof measure_1.Measure && !m.calculation.calculation() && !m.expression(); }).map(function (m) { return ({
                                value: m.uniqueName(),
                                displayValue: _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dataDashboardItem, m)
                            }); })) }, _dimension_1.realSortMode));
                        disableRules[_dimension_1.realSortMode.propertyName] = topNEnabledFunc;
                    }
                    switch (fieldType) {
                        case "DateTime":
                            break;
                        case "Text":
                            properties.push(_dimension_1.textGroupInterval);
                            break;
                    }
                }
                properties = properties.concat(model
                    ._specifics
                    .customDataShapingProperties
                    .filter(function (p) { return !p.filter || p.filter(dataField); })
                    .map(function (p) { return p.serializationInfo; }));
                var tabModel = properties.length > 0 ?
                    new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                        model: dataItem,
                        properties: properties,
                        disabledFilterRules: disableRules
                    })
                    : null;
                tab.tabModel(tabModel);
            });
        }
    };
    DataItemsPropertiesComposer.prototype.fillDataItemExactDatetimeFormatTab = function (tab, model) {
        tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [{
                    container: _data_item_1.dateTimeFormat,
                    properties: [_data_item_format_1.exactDateFormat]
                }]
        }));
    };
    DataItemsPropertiesComposer.prototype.fillDimensionDatetimeFormatTab = function (tab, model) {
        var visibilityRules = {};
        var properties = [
            _data_item_format_1.yearFormat,
            _data_item_format_1.monthFormat,
            _data_item_format_1.quarterFormat,
            _data_item_format_1.dayOfWeekFormat,
            _data_item_format_1.hourFormat,
            _data_item_format_1.dateFormat,
            _data_item_format_1.dateHourFormat,
            _data_item_format_1.dateHourMinuteFormat,
            _data_item_format_1.dateTimeWithSecondsFormat,
            _data_item_format_1.exactDateFormat
        ];
        visibilityRules[_dimension_1.dateTimeGroupInterval.propertyName] = function () { return false; };
        visibilityRules[_data_item_format_1.yearFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "Year"];
        visibilityRules[_data_item_format_1.quarterFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "Quarter"];
        visibilityRules[_data_item_format_1.monthFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "Month"];
        visibilityRules[_data_item_format_1.hourFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "Hour"];
        visibilityRules[_data_item_format_1.dayOfWeekFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "DayOfWeek"];
        visibilityRules[_data_item_format_1.dateFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "DayMonthYear"];
        visibilityRules[_data_item_format_1.dateHourFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "DateHour"];
        visibilityRules[_data_item_format_1.dateHourMinuteFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "DateHourMinute"];
        visibilityRules[_data_item_format_1.dateTimeWithSecondsFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "DateHourMinuteSecond"];
        visibilityRules[_data_item_format_1.exactDateFormat.propertyName] = [_dimension_1.dateTimeGroupInterval.propertyName, "=", "None"];
        tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [
                _dimension_1.dateTimeGroupInterval, {
                    container: _data_item_1.dateTimeFormat,
                    properties: properties
                }
            ],
            visibilityFilterRules: visibilityRules
        }));
    };
    DataItemsPropertiesComposer.prototype.fillTopNTab = function (tab, dataDashboardItem, dataItem, dataField, measures, supportsTopNOther, dataSourceBrowser) {
        var disabledRules = {};
        var isTopNUnavailable = function () { return measures.length === 0; };
        var topNOptionsDisabled = function () { return !dataItem.topNOptionsEnabled() || isTopNUnavailable(); };
        disabledRules[_dimension_1.topNOptionsEnabled.propertyName] = isTopNUnavailable;
        disabledRules[_dimension_1.topNOptionsCount.propertyName] = topNOptionsDisabled;
        disabledRules[_dimension_1.topNOptionsMode.propertyName] = topNOptionsDisabled;
        disabledRules[_dimension_1.topNOptionsMeasure.propertyName] = topNOptionsDisabled;
        disabledRules[_dimension_1.topNOptionsShowOthers.propertyName] = topNOptionsDisabled;
        var visibilityRules = {};
        visibilityRules[_dimension_1.topNOptionsShowOthers.propertyName] = function () { return supportsTopNOther; };
        var properties = [
            _dimension_1.topNOptionsEnabled,
            _dimension_1.topNOptionsMode,
            _dimension_1.topNOptionsCount,
            __assign({ valuesArray: measures.map(function (m) { return { value: m.uniqueName(), displayValue: _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dataDashboardItem, m) }; }) }, _dimension_1.topNOptionsMeasure)
        ];
        if (dataField && !_data_field_1.DataField.isOlap(dataField.dataMember())) {
            properties.push(_dimension_1.topNOptionsShowOthers);
        }
        tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: dataItem,
            properties: properties,
            disabledFilterRules: disabledRules,
            visibilityFilterRules: visibilityRules,
            summary: ko.computed(function () {
                if (!topNOptionsDisabled()) {
                    if (!dataItem.topNOptionsMeasureName()) {
                        dataItem.topNOptionsMeasureName(measures[0] && measures[0].uniqueName());
                    }
                    var topNDataItem = measures.filter(function (di) { return di.uniqueName.peek() === dataItem.topNOptionsMeasureName(); })[0];
                    var modeDisplayValue = _default_1.getLocalizationById(_dimension_1.topNOptionsModeValues[dataItem.topNOptionsMode()]);
                    return modeDisplayValue + " " + dataItem.topNOptionsCount() + " - " + (!!topNDataItem ? topNDataItem.dataMember() : "");
                }
                return "";
            })
        }));
    };
    DataItemsPropertiesComposer.prototype.fillCalculationsTab = function (tab, measure, dataDashboardItem, dataSourceBrowser, propertiesController) {
        var noneCalculation = { title: "DashboardStringId.CalculationTypeNone", data: { type: undefined } };
        var expressionCalculation = { title: "DashboardStringId.CalculationTypeExpression", data: { type: undefined } };
        var calculationsInfo = __assign({}, _measure_1.calculations);
        var disabledRules = {};
        var properties = [
            calculationsInfo
        ];
        disabledRules[calculationsInfo.propertyName] = function () {
            return dataDashboardItem
                ._dimensions
                .some(function (dimension) {
                return (dimension.topNOptionsEnabled() && dimension.topNOptionsMeasureName() === measure.uniqueName()) || (dimension.sortMeasure() === measure.uniqueName());
            });
        };
        var availableCalculations = [
            noneCalculation,
            { title: "DashboardStringId.CalculationTypePercentOfTotal", data: { type: percent_of_total_calculation_1.PercentOfTotalCalculation } },
            { title: "DashboardStringId.CalculationTypeRunningTotal", data: { type: running_total_calculation_1.RunningTotalCalculation } },
            { title: "DashboardStringId.CalculationTypeDifference", data: { type: difference_calculation_1.DifferenceCalculation, isEqual: function (calc) { return calc.differenceType() !== "Percentage"; } } },
            { title: "DashboardStringId.CalculationTypePercentageDifference", data: { type: difference_calculation_1.DifferenceCalculation, default: { "@DifferenceType": "Percentage" }, isEqual: function (calc) { return calc.differenceType() === "Percentage"; } } },
            { title: "DashboardStringId.CalculationTypeMovingCalculation", data: { type: moving_calculation_1.MovingCalculation } },
            { title: "DashboardStringId.CalculationTypeRank", data: { type: rank_calculation_1.RankCalculation } },
            expressionCalculation
        ];
        var isEqual = function (definition) {
            return !!definition.data.type && measure.calculation.calculation() instanceof definition.data.type && (!definition.data.isEqual || definition.data.isEqual(measure.calculation.calculation()));
        };
        var selectedPredefinedCalculation = ko.computed({
            read: function () {
                var result = !!measure.expression() ? expressionCalculation : undefined;
                if (!result) {
                    result = availableCalculations.filter(function (definition) { return isEqual(definition); })[0] || noneCalculation;
                }
                return result;
            },
            write: index_internal_1.wrapFuncWithUndoRedo(function (val) {
                if (val !== noneCalculation) {
                    if (val === expressionCalculation) {
                        if (!measure.expression()) {
                            measure.expression(measure_calculation_1.MeasureCalculation._getSummaryExpression(measure.dataMember(), measure.summaryType()));
                            measure.windowDefinition.windowDefinition(dataDashboardItem._getDefaultCalculationWindowDefinition());
                        }
                    }
                    else if (!isEqual(val)) {
                        measure.expression(undefined);
                        measure.calculation.calculation(new (val.data.type)(val.data.default));
                        measure.windowDefinition.windowDefinition(dataDashboardItem._getDefaultCalculationWindowDefinition());
                    }
                }
                else {
                    measure.expression(undefined);
                    measure.calculation.calculation(undefined);
                    measure.windowDefinition.windowDefinition(undefined);
                }
            })
        });
        tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: {
                calculations: {
                    items: ko.observable(ko.observableArray(availableCalculations)),
                    selectedItem: selectedPredefinedCalculation,
                    editHandler: function (model) {
                        if (model !== noneCalculation) {
                            var surface = new _calculation_surface_1.CalculationSurface(model, measure, dataDashboardItem, dataSourceBrowser, propertiesController);
                            surface.startEditing(new _collection_editor_viewmodel_1.CollectionEditorEditItemArguments());
                        }
                    },
                    enableEdit: function (model) {
                        return model !== noneCalculation;
                    }
                }
            },
            properties: properties,
            disabledFilterRules: disabledRules,
            summary: ko.computed(function () { return selectedPredefinedCalculation().title !== noneCalculation.title ? selectedPredefinedCalculation().title : ""; })
        }));
    };
    DataItemsPropertiesComposer.getFormatRulesForDataItemWrapper = function (model, dataItem, dataItemApplyTo, formatRuleItemType, dataSourceBrowser, editHandler) {
        var extendedRuleInfo = __assign({ addHandler: function () { return data_dashboard_item_1.DataDashboardItem._createFormatRule(null, {
                "@ItemType": formatRuleItemType,
                "@DataItem": dataItem.uniqueName(),
                "@DataItemApplyTo": dataItemApplyTo.uniqueName()
            }); } }, _dashboard_item_format_rule_1.classCaption);
        extendedRuleInfo["editHandler"] = editHandler;
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [
                __assign({ collectionItemDefaultPropertyInfo: extendedRuleInfo, filter: function (rule) {
                        var uniqueName = dataItem.uniqueName();
                        return rule.dataItemName() === uniqueName || rule.dataItemApplyToName() === uniqueName;
                    } }, _data_dashboard_item_1.formatRules)
            ]
        });
    };
    return DataItemsPropertiesComposer;
}());
exports.DataItemsPropertiesComposer = DataItemsPropertiesComposer;
