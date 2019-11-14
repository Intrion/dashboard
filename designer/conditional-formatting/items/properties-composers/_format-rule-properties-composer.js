/**
* DevExpress Dashboard (_format-rule-properties-composer.js)
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
var format_condition_range_base_1 = require("../../../../model/format-rules/conditions/range/format-condition-range-base");
var grid_item_1 = require("../../../../model/items/grid/grid-item");
var pivot_item_1 = require("../../../../model/items/pivot/pivot-item");
var _accordion_tab_1 = require("../../../_accordion-tab");
var grid_columns_1 = require("../../../../model/items/grid/grid-columns");
var _display_name_provider_1 = require("../../../_display-name-provider");
var _section_descriptors_1 = require("../../../items/_section-descriptors");
var dimension_1 = require("../../../../model/data-item/dimension");
var _object_properties_wrapper_1 = require("../../../_object-properties-wrapper");
var _cells_item_format_rule_1 = require("../../../../model/format-rules/metadata/_cells-item-format-rule");
var pivot_item_format_rule_1 = require("../../../../model/format-rules/pivot-item-format-rule");
var _item_filter_items_provider_1 = require("../../../filtering/_item-filter-items-provider");
var measure_1 = require("../../../../model/data-item/measure");
var _condition_type_editor_1 = require("../../_condition-type-editor");
var _helper_classes_1 = require("../../../../model/internal/_helper-classes");
var _format_condition_range_base_1 = require("../../../../model/format-rules/conditions/range/metadata/_format-condition-range-base");
var format_condition_value_1 = require("../../../../model/format-rules/conditions/format-condition-value");
var _dashboard_item_format_rule_1 = require("../../../../model/format-rules/metadata/_dashboard-item-format-rule");
var _format_condition_value_1 = require("../../../../model/format-rules/conditions/metadata/_format-condition-value");
var _parameters_helper_1 = require("../../../../model/parameters/_parameters-helper");
var _format_rules_common_1 = require("../../../../model/format-rules/metadata/_format-rules-common");
var format_condition_top_bottom_1 = require("../../../../model/format-rules/conditions/format-condition-top-bottom");
var _format_condition_top_bottom_1 = require("../../../../model/format-rules/conditions/metadata/_format-condition-top-bottom");
var format_condition_average_1 = require("../../../../model/format-rules/conditions/format-condition-average");
var format_condition_date_occuring_1 = require("../../../../model/format-rules/conditions/format-condition-date-occuring");
var _format_condition_date_occuring_1 = require("../../../../model/format-rules/conditions/metadata/_format-condition-date-occuring");
var format_condition_expression_1 = require("../../../../model/format-rules/conditions/format-condition-expression");
var _filter_utils_1 = require("../../../filtering/_filter-utils");
var _item_filter_display_name_provider_1 = require("../../../filtering/_item-filter-display-name-provider");
var _format_condition_expression_1 = require("../../../../model/format-rules/conditions/metadata/_format-condition-expression");
var format_condition_bar_1 = require("../../../../model/format-rules/conditions/format-condition-bar");
var _format_condition_min_max_base_1 = require("../../../../model/format-rules/conditions/metadata/_format-condition-min-max-base");
var _format_condition_bar_1 = require("../../../../model/format-rules/conditions/metadata/_format-condition-bar");
var _format_condition_bar_options_1 = require("../../../../model/format-rules/conditions/metadata/_format-condition-bar-options");
var format_condition_range_color_bar_1 = require("../../../../model/format-rules/conditions/range/format-condition-range-color-bar");
var format_condition_range_gradient_bar_1 = require("../../../../model/format-rules/conditions/range/format-condition-range-gradient-bar");
var _format_condition_range_gradient_1 = require("../../../../model/format-rules/conditions/range/metadata/_format-condition-range-gradient");
var format_condition_range_gradient_1 = require("../../../../model/format-rules/conditions/range/format-condition-range-gradient");
var format_condition_range_set_1 = require("../../../../model/format-rules/conditions/range/format-condition-range-set");
var _pivot_item_format_rule_1 = require("../../../../model/format-rules/metadata/_pivot-item-format-rule");
var _pivot_item_format_rule_level_1 = require("../../../../model/format-rules/metadata/_pivot-item-format-rule-level");
var ko = require("knockout");
var _default_1 = require("../../../../data/localization/_default");
var FormatRulePropertiesComposer = (function () {
    function FormatRulePropertiesComposer() {
    }
    FormatRulePropertiesComposer.prototype.composeTabs = function (model, dashboardItem, dataSourceBrowser, requestRecalculation) {
        var conditionTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.FormatRuleCondition, "DashboardWebStringId.ConditionalFormatting.Condition"), styleTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.FormatRuleMisc, "DashboardWebStringId.ConditionalFormatting.Miscellaneous");
        if (ko.unwrap(model && model.condition)) {
            this.fillConditionWrapper(conditionTab, model, dashboardItem, dataSourceBrowser);
            this.fillMiscWrapper(styleTab, model, dashboardItem, dataSourceBrowser);
        }
        return [new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.FormatRuleCommon, "DashboardWebStringId.AccordionTab.Common", this.composeCreationWrapper(model, dashboardItem, dataSourceBrowser, requestRecalculation)),
            conditionTab,
            styleTab];
    };
    FormatRulePropertiesComposer.prototype.grabDataItems = function (dashboardItem, dataSourceBrowser) {
        var availableDataItems = [];
        if (dashboardItem instanceof grid_item_1.GridItem) {
            availableDataItems = dashboardItem
                .columns()
                .filter(function (c) { return !(c instanceof grid_columns_1.GridDeltaColumn) && !(c instanceof grid_columns_1.GridSparklineColumn); })
                .map(function (c) { return ({
                uniqueName: c.actualDataItem.uniqueName(),
                displayName: _display_name_provider_1.getDataItemContainerDisplayName(dataSourceBrowser, dashboardItem, c)
            }); });
        }
        else if (dashboardItem instanceof pivot_item_1.PivotItem) {
            availableDataItems = this.grapApplyToItems(dashboardItem, dataSourceBrowser);
        }
        availableDataItems = availableDataItems
            .concat(dashboardItem
            .hiddenMeasures()
            .map(function (m) { return ({
            uniqueName: m.uniqueName,
            displayName: _default_1.getLocalizationById(_section_descriptors_1.SectionDescriptors.HiddenMeasures.title) + " - " + _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dashboardItem, m)
        }); }));
        return availableDataItems;
    };
    FormatRulePropertiesComposer.prototype.grapApplyToItems = function (dashboardItem, dataSourceBrowser) {
        var applyToItems = [];
        if (dashboardItem instanceof grid_item_1.GridItem) {
            applyToItems = dashboardItem
                .columns()
                .filter(function (c) { return !(c instanceof grid_columns_1.GridDeltaColumn); })
                .map(function (c) {
                return {
                    uniqueName: c.actualDataItem.uniqueName,
                    displayName: _display_name_provider_1.getDataItemContainerDisplayName(dataSourceBrowser, dashboardItem, c)
                };
            });
        }
        else if (dashboardItem instanceof pivot_item_1.PivotItem) {
            var pivot = dashboardItem;
            applyToItems = pivot.values().map(function (m) { return ({
                uniqueName: m.uniqueName(),
                displayName: _default_1.getLocalizationById(_section_descriptors_1.SectionDescriptors.Values.title) + " - " + _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dashboardItem, m)
            }); });
            applyToItems = applyToItems
                .concat(pivot.columns().map(function (d) { return ({
                uniqueName: d.uniqueName(),
                displayName: _default_1.getLocalizationById(_section_descriptors_1.SectionDescriptors.Columns.title) + " - " + _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dashboardItem, d)
            }); }));
            applyToItems = applyToItems
                .concat(pivot.rows().map(function (d) { return ({
                uniqueName: d.uniqueName(),
                displayName: _default_1.getLocalizationById(_section_descriptors_1.SectionDescriptors.Rows.title) + " - " + _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dashboardItem, d)
            }); }));
        }
        return applyToItems;
    };
    FormatRulePropertiesComposer.prototype.composeCreationWrapper = function (model, dashboardItem, dataSourceBrowser, requestRecalculation) {
        var originalConditionType = model._classId, conditionType = ko.observable(model._classId), dataType = ko.observable(model.condition() && model.condition().dataType()), specificType = ko.observable(model.condition() && model.condition().getSpecificType()), dataItemCalculateBy = dashboardItem.dataItems().filter(function (d) { return model.dataItemName() === d.uniqueName(); })[0], dateTimeGroupInterval = ko.observable(dataItemCalculateBy instanceof dimension_1.Dimension ? dataItemCalculateBy.dateTimeGroupInterval() : undefined), dataItems = this.grabDataItems(dashboardItem, dataSourceBrowser), applyToDataItems = this.grapApplyToItems(dashboardItem, dataSourceBrowser), mainModelProperties = [
            __assign({}, _cells_item_format_rule_1.formatRuleDataItem, { valuesArray: dataItems.map(function (m) { return ({ value: ko.unwrap(m.uniqueName), displayValue: ko.unwrap(m.displayName) }); }) })
        ], disabledRules = {
            "typeChooser": function () { return !!ko.unwrap(model.condition) || !model.dataItemName(); }
        };
        if (!model.dataItemName() && dataItems.length) {
            model.dataItemName(ko.unwrap(dataItems[0].uniqueName));
        }
        mainModelProperties.push(__assign({ valuesArray: applyToDataItems.map(function (m) { return ({ value: ko.unwrap(m.uniqueName), displayValue: ko.unwrap(m.displayName) }); }) }, _cells_item_format_rule_1.dataItemApplyTo));
        if (dashboardItem instanceof pivot_item_1.PivotItem) {
            disabledRules[_cells_item_format_rule_1.dataItemApplyTo.propertyName] = function (m) {
                var pivot = dashboardItem;
                return !(pivot.values().filter(function (v) { return v.uniqueName() === m.dataItemName(); }).length
                    || pivot.hiddenMeasures().filter(function (v) { return v.uniqueName() === m.dataItemName(); }).length);
            };
        }
        conditionType.extend({ notify: 'always' });
        var fillDataType = function (uniqueName) { return dashboardItem
            .dataItems()
            .filter(function (dataItem) { return uniqueName === dataItem.uniqueName(); })
            .map(function (dataItem) { return ({
            dataItem: dataItem,
            fieldPromise: dataSourceBrowser.findDataField(dashboardItem.dataSource(), dashboardItem.dataMember(), dataItem.dataMember())
        }); })
            .forEach(function (d) { return d.fieldPromise.done(function (field) {
            var newDataType = field.fieldType();
            if (d.dataItem instanceof dimension_1.Dimension) {
                newDataType = _item_filter_items_provider_1.getRealDimensionType(d.dataItem, field);
                dateTimeGroupInterval(field.fieldType() === 'DateTime' ? d.dataItem.dateTimeGroupInterval() : undefined);
                model.condition() && model.condition().dateTimeGroupInterval(dateTimeGroupInterval());
            }
            if (d.dataItem instanceof measure_1.Measure) {
                var summaryType = d.dataItem.summaryType();
                if ((summaryType === "Count") || (summaryType === "CountDistinct")) {
                    newDataType = "Integer";
                }
                else if (["Sum", "Average", "StdDev", "StdDevp", "Var", "Varp"].indexOf(summaryType) !== -1) {
                    newDataType = "Decimal";
                }
            }
            dataType(newDataType);
            model.condition() && model.condition().dataType(dataType());
        }); }); };
        model.dataItemName.subscribe(fillDataType);
        model.dataItemName.subscribe(function (uniqueName) {
            if (!applyToDataItems.filter(function (di) { return ko.unwrap(di.uniqueName) === uniqueName; })[0]) {
                model.dataItemApplyToName(ko.unwrap(applyToDataItems[0].uniqueName));
            }
        });
        if (!dataType() && model.dataItemName())
            fillDataType(model.dataItemName());
        disabledRules[_cells_item_format_rule_1.formatRuleDataItem.propertyName] = function () { return !!ko.unwrap(model.condition); };
        var wrapper = new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: {
                model: model,
                typeChooser: new _condition_type_editor_1.FormatConditionTypeEditorSurface(dataType, conditionType, specificType)
            },
            properties: [{
                    container: { propertyName: "model" },
                    properties: mainModelProperties
                }, {
                    propertyName: "typeChooser",
                    displayName: "DashboardWebStringId.ConditionType",
                    editor: { header: "dx-dashboard-condition-type-editor" }
                }],
            disabledFilterRules: disabledRules
        });
        specificType.subscribe(function (newSpecificType) {
            var condition = model.condition(), newRule = !condition, changedConditionType = originalConditionType !== conditionType(), realConditionType = conditionType().split("_")[0];
            if (newRule || changedConditionType) {
                model._changeConditionType(realConditionType);
                condition = model.condition();
                condition.dataType(dataType());
                condition.dateTimeGroupInterval(dateTimeGroupInterval());
            }
            condition.setSpecificType(newSpecificType);
            if (newRule) {
                model.name(_helper_classes_1.NameGenerator.generateName(_default_1.getLocalizationById("DashboardWebStringId.FormatRule") + " ", dashboardItem.formatRules(), 'name', 1));
            }
            if (newRule || changedConditionType) {
                requestRecalculation.fire();
            }
        });
        return wrapper;
    };
    FormatRulePropertiesComposer.prototype.fillConditionWrapper = function (tab, model, dashboardItem, dataSourceBrowser) {
        var p = [];
        var visibilityRules = {};
        visibilityRules[_format_condition_range_base_1.rangeValueType.propertyName] = function () { return model.condition() && !model.condition().dateTimeGroupInterval(); };
        switch (model.condition() && model.condition().constructor) {
            case format_condition_value_1.FormatConditionValue:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [{
                            container: _format_condition_value_1.formatConditionValue1,
                            properties: [
                                __assign({ editor: _parameters_helper_1.ParameterHelper.getEditorType(model.condition()[_format_condition_value_1.formatConditionValue1.propertyName].type()), displayName: "DashboardStringId.ValueCaption", replacementPropertyName: "value1_value" }, _format_rules_common_1.complexValueValue)
                            ]
                        }, {
                            container: _format_condition_value_1.formatConditionValue2,
                            properties: [__assign({ editor: _parameters_helper_1.ParameterHelper.getEditorType(model.condition()[_format_condition_value_1.formatConditionValue1.propertyName].type()), displayName: "DashboardStringId.Value2Caption", replacementPropertyName: "value2_value" }, _format_rules_common_1.complexValueValue)]
                        },
                        _format_rules_common_1.styleSettings,
                        _format_condition_value_1.conditionInCondition,
                    ]
                });
                visibilityRules["value2_value"] =
                    [_format_condition_value_1.conditionInCondition.propertyName, "contains", "Between"];
                visibilityRules[_format_condition_value_1.conditionInCondition.propertyName] = function () { return false; };
                break;
            case format_condition_top_bottom_1.FormatConditionTopBottom:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_rules_common_1.styleSettings,
                        _format_condition_top_bottom_1.rank,
                        _format_condition_top_bottom_1.rankType
                    ]
                });
                break;
            case format_condition_average_1.FormatConditionAverage:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_rules_common_1.styleSettings
                    ]
                });
                break;
            case format_condition_date_occuring_1.FormatConditionDateOccurring:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_rules_common_1.styleSettings,
                        _format_condition_date_occuring_1.dateType
                    ]
                });
                break;
            case format_condition_expression_1.FormatConditionExpression:
                var expressionCondition = model.condition();
                expressionCondition["addons"] = {
                    itemsProvider: ko.observable(new _item_filter_items_provider_1.ItemFilterItemsProvider(dataSourceBrowser, dataSourceBrowser.parameters, dashboardItem, function (di) { return !dashboardItem.hiddenDimensions().filter(function (hd) { return hd.uniqueName() === di.uniqueName(); })[0]; })),
                    filterOptions: _filter_utils_1.createItemFilterOptions(expressionCondition.expression, expressionCondition, dataSourceBrowser, { text: 'Expression', localizationId: "DashboardStringId.CommandFormatRuleExpression" }),
                    displayNameProvider: new _item_filter_display_name_provider_1.ItemFilterDisplayNameProvider(dashboardItem, dataSourceBrowser)
                };
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_condition_expression_1.formatConditionFilter,
                        _format_rules_common_1.styleSettings
                    ]
                });
                break;
            case format_condition_bar_1.FormatConditionBar:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_condition_min_max_base_1.minimumType,
                        _format_condition_min_max_base_1.formatConditionMinimum,
                        _format_condition_min_max_base_1.maximumType,
                        _format_condition_min_max_base_1.formatConditionMaximum,
                        _format_condition_bar_1.barCurrentStyleSettingsType,
                        _format_condition_bar_1.barCurrentStyleSettings,
                        {
                            container: _format_rules_common_1.barOptions,
                            properties: [
                                _format_condition_bar_options_1.allowNegativeAxis,
                                _format_condition_bar_options_1.drawAxis,
                                _format_condition_bar_options_1.showBarOnly
                            ]
                        }
                    ]
                });
                visibilityRules[_format_condition_min_max_base_1.formatConditionMinimum.propertyName] = [_format_condition_min_max_base_1.minimumType.propertyName, "<>", "Automatic"];
                visibilityRules[_format_condition_min_max_base_1.formatConditionMaximum.propertyName] = [_format_condition_min_max_base_1.maximumType.propertyName, "<>", "Automatic"];
                break;
            case format_condition_range_color_bar_1.FormatConditionColorRangeBar:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_condition_range_base_1.rangeValueType,
                        _format_condition_range_base_1.rangeSet,
                        {
                            container: _format_rules_common_1.barOptions,
                            properties: [
                                _format_condition_bar_options_1.allowNegativeAxis,
                                _format_condition_bar_options_1.drawAxis,
                                _format_condition_bar_options_1.showBarOnly
                            ]
                        }
                    ]
                });
                break;
            case format_condition_range_gradient_bar_1.FormatConditionGradientRangeBar:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_condition_range_base_1.rangeValueType,
                        _format_condition_range_gradient_1.segmentNumber,
                        _format_condition_range_base_1.rangeSet,
                        {
                            container: _format_rules_common_1.barOptions,
                            properties: [
                                _format_condition_bar_options_1.allowNegativeAxis,
                                _format_condition_bar_options_1.drawAxis,
                                _format_condition_bar_options_1.showBarOnly
                            ]
                        }
                    ]
                });
                break;
            case format_condition_range_gradient_1.FormatConditionRangeGradient:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_condition_range_base_1.rangeValueType,
                        _format_condition_range_gradient_1.segmentNumber,
                        _format_condition_range_base_1.rangeSet
                    ]
                });
                break;
            case format_condition_range_set_1.FormatConditionRangeSet:
                p.push({
                    container: _dashboard_item_format_rule_1.condition,
                    properties: [
                        _format_condition_range_base_1.rangeValueType,
                        _format_condition_range_base_1.rangeSet
                    ]
                });
                break;
            case undefined:
                break;
            default:
                throw new Error("Unsupported formatting rule condition");
        }
        var wrapper = new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: p,
            visibilityFilterRules: visibilityRules
        });
        tab.tabModel(wrapper);
    };
    FormatRulePropertiesComposer.prototype.fillMiscWrapper = function (tab, model, dashboardItem, dataSourceBrowser) {
        var p = [_dashboard_item_format_rule_1.enabled];
        var visibilityRules = {};
        if (model instanceof pivot_item_format_rule_1.PivotItemFormatRule) {
            var pivot = dashboardItem;
            var intersectionLevelModeValuesObservable = ko.observable(_pivot_item_format_rule_1.intersectionLevelModeValues);
            ko.computed(function () {
                if ((model.condition() instanceof format_condition_range_base_1.FormatConditionRangeBase && model.condition().valueType() !== 'Number')
                    || model.condition() instanceof format_condition_top_bottom_1.FormatConditionTopBottom
                    || model.condition() instanceof format_condition_average_1.FormatConditionAverage) {
                    intersectionLevelModeValuesObservable(_pivot_item_format_rule_1.restrictedIntersectionLevelModeValues);
                }
                else {
                    intersectionLevelModeValuesObservable(_pivot_item_format_rule_1.intersectionLevelModeValues);
                }
            });
            p.push(__assign({}, _pivot_item_format_rule_1.intersectionLevelMode, { values: intersectionLevelModeValuesObservable }));
            p.push({
                container: _pivot_item_format_rule_1.pivotLevel,
                properties: [
                    __assign({ valuesArray: [{ value: null, displayValue: "[Grand Total]" }].concat(pivot.columns().map(function (m) { return ({ value: m.uniqueName(), displayValue: _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dashboardItem, m) }); })) }, _pivot_item_format_rule_level_1.pivotLevelColumn),
                    __assign({ valuesArray: [{ value: null, displayValue: "[Grand Total]" }].concat(pivot.rows().map(function (m) { return ({ value: m.uniqueName(), displayValue: _display_name_provider_1.getDataItemDisplayName(dataSourceBrowser, dashboardItem, m) }); })) }, _pivot_item_format_rule_level_1.pivotLevelRow)
                ]
            });
            p.push(_pivot_item_format_rule_1.applyToColumn);
            visibilityRules[_pivot_item_format_rule_level_1.pivotLevelColumn.propertyName] =
                [_pivot_item_format_rule_1.intersectionLevelMode.propertyName, "=", "SpecificLevel"];
            visibilityRules[_pivot_item_format_rule_level_1.pivotLevelRow.propertyName] =
                [_pivot_item_format_rule_1.intersectionLevelMode.propertyName, "=", "SpecificLevel"];
            visibilityRules[_cells_item_format_rule_1.applyToRow.propertyName] = function (m) { return !!pivot.values().filter(function (v) { return v.uniqueName() === model.dataItemApplyToName(); }).length; };
            visibilityRules[_pivot_item_format_rule_1.applyToColumn.propertyName] = function (m) { return !!pivot.values().filter(function (v) { return v.uniqueName() === model.dataItemApplyToName(); }).length; };
        }
        p.push(_cells_item_format_rule_1.applyToRow);
        var wrapper = new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: p,
            visibilityFilterRules: visibilityRules
        });
        tab.tabModel(wrapper);
    };
    return FormatRulePropertiesComposer;
}());
exports.FormatRulePropertiesComposer = FormatRulePropertiesComposer;
