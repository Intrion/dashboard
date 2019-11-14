/**
* DevExpress Dashboard (_grid-column-properties-composer.js)
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
var grid_columns_1 = require("../../../model/items/grid/grid-columns");
var grid_item_1 = require("../../../model/items/grid/grid-item");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _accordion_tab_1 = require("../../_accordion-tab");
var _grid_columns_1 = require("../../../model/items/grid/metadata/_grid-columns");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _container_type_selector_1 = require("../container-type-selector/_container-type-selector");
var data_dashboard_item_1 = require("../../../model/items/data-dashboard-item");
var _display_name_provider_1 = require("../../_display-name-provider");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var grid_column_total_1 = require("../../../model/items/grid/grid-column-total");
var _delta_options_1 = require("../../../model/items/options/metadata/_delta-options");
var _sparkline_options_1 = require("../../../model/items/options/metadata/_sparkline-options");
var _dashboard_item_format_rule_1 = require("../../../model/format-rules/metadata/_dashboard-item-format-rule");
var _data_dashboard_item_1 = require("../../../model/items/metadata/_data-dashboard-item");
var _utils_1 = require("../../../data/_utils");
var ko = require("knockout");
var _shared_composers_1 = require("./_shared-composers");
var _default_1 = require("../../../data/localization/_default");
var GridColumnPropertiesComposer = (function () {
    function GridColumnPropertiesComposer(editRuleHandler, editDeltaFormatHandler) {
        if (editDeltaFormatHandler === void 0) { editDeltaFormatHandler = function (model) { }; }
        this.editRuleHandler = editRuleHandler;
        this.editDeltaFormatHandler = editDeltaFormatHandler;
    }
    GridColumnPropertiesComposer.prototype.composeTabs = function (model, dashboardItem, containerType, dataSourceBrowser) {
        var _this = this;
        var columnWidthTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.Grid.ColumnWidth"), deltaTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DeltaOptions, "DashboardWebStringId.Grid.DeltaOptions"), deltaFormatsTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DeltaFormats, "DashboardWebStringId.CardLayout.Editor.FormatOptions"), sparklineTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.SparklineOptions, "DashboardWebStringId.Card.SparklineOptions"), conditionalFormattingTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ConditionalFormatting, "DashboardWebStringId.ConditionalFormatting"), totalTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Totals, "DashboardWebStringId.AccordionTab.ShowTotals");
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.Options", this.getColumnWrapper(model, dashboardItem, dataSourceBrowser)),
            columnWidthTab,
            deltaTab,
            sparklineTab,
            totalTab,
            conditionalFormattingTab,
            deltaFormatsTab
        ];
        var isOlap = model.actualDataItem ? _data_field_1.DataField.isOlap(model.actualDataItem.dataMember()) : false;
        if (!isOlap || containerType() !== "GridDimensionColumn")
            result.unshift(new _accordion_tab_1.TypeAccordionTab(_accordion_tab_1.KnownTabs.Type, "DashboardWebStringId.Type", this.getColumnTypeWrapper(model, containerType)));
        if (dashboardItem.gridOptions.columnWidthMode() === "Manual") {
            columnWidthTab.tabModel(this.getWidthWrapper(model));
        }
        if (model instanceof grid_columns_1.GridDeltaColumn) {
            deltaTab.tabModel(this.getDeltaWrapper(model));
            deltaFormatsTab.tabModel(_shared_composers_1.SharedComposers.getDeltaFormatsOptionsWrapper(model, this.editDeltaFormatHandler));
        }
        if (model instanceof grid_columns_1.GridSparklineColumn) {
            sparklineTab.tabModel(this.getSparklineWrapper(model));
        }
        if ((model instanceof grid_columns_1.GridDimensionColumn) || (model instanceof grid_columns_1.GridMeasureColumn)) {
            conditionalFormattingTab.tabModel(this.getFormatRulesWrapper(model, dashboardItem));
        }
        if (model instanceof grid_columns_1.GridColumn) {
            if (this._totals)
                this._totals.dispose();
            this._totals = ko.computed(function () {
                totalTab.tabModel(_this.getTotalsWrapper(model, dashboardItem));
            });
        }
        return result;
    };
    GridColumnPropertiesComposer.prototype.getColumnTypeWrapper = function (model, containerType) {
        if (model) {
            var properties = [
                _grid_columns_1.columnType
            ];
            var isOlap = model.actualDataItem ? _data_field_1.DataField.isOlap(model.actualDataItem.dataMember()) : undefined;
            var buttonTypes = void 0;
            if (!isOlap)
                buttonTypes = grid_item_1.GridItem._gridColumnTypesMap;
            else {
                buttonTypes = __assign({}, grid_item_1.GridItem._gridColumnTypesMap);
                delete buttonTypes["GridDimensionColumn"];
            }
            return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                model: { containerType: new _container_type_selector_1.ContainerTypeSelector(buttonTypes, containerType) },
                properties: properties
            });
        }
        return null;
    };
    GridColumnPropertiesComposer.prototype.getColumnWrapper = function (model, dashboardItem, dataSourceBrowser) {
        var properties = [__assign({ editorOptions: { placeholder: _display_name_provider_1.getDataItemContainerDisplayName(dataSourceBrowser, dashboardItem, model) } }, _base_metadata_1.name)];
        var disabledRules = {};
        var visibilityRules = {};
        if (model instanceof grid_columns_1.GridDimensionColumn) {
            properties.push(_grid_columns_1.dimensionDisplayMode);
            visibilityRules[_grid_columns_1.dimensionDisplayMode.propertyName] = function () {
                var result = false;
                if (model.dimension()) {
                    dataSourceBrowser
                        .findDataField(dashboardItem.dataSource(), dashboardItem.dataMember(), model.dimension().dataMember())
                        .done(function (dataField) {
                        result = dataField && dataField.fieldType() === "Custom";
                    });
                }
                return result;
            };
        }
        if (model instanceof grid_columns_1.GridMeasureColumn) {
            properties.push(_grid_columns_1.displayMode);
            properties.push(_grid_columns_1.alwaysShowZeroLevel);
            disabledRules[_grid_columns_1.alwaysShowZeroLevel.propertyName] = [_grid_columns_1.displayMode.propertyName, "<>", "Bar"];
        }
        if (model instanceof grid_columns_1.GridHyperlinkColumn) {
            _grid_columns_1.gridColumnUriPattern.validationRules.forEach(function (rule) { if (rule.message) {
                rule.message = _default_1.getLocalizationById(rule.message);
            } });
            properties.push(_grid_columns_1.gridColumnUriPattern);
        }
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules,
            visibilityFilterRules: visibilityRules
        });
    };
    GridColumnPropertiesComposer.prototype.getWidthWrapper = function (model) {
        var properties = [
            _grid_columns_1.widthType,
            _grid_columns_1.fixedWidth,
            _grid_columns_1.columnWeight,
        ];
        var disabledRules = {};
        disabledRules[_grid_columns_1.fixedWidth.propertyName] = [_grid_columns_1.widthType.propertyName, "<>", "FixedWidth"];
        disabledRules[_grid_columns_1.columnWeight.propertyName] = [_grid_columns_1.widthType.propertyName, "<>", "Weight"];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules
        });
    };
    GridColumnPropertiesComposer.prototype.getTotalsWrapper = function (model, p) {
        var possibleValues = model._getAvailableTotalTypes(p);
        var totalTypeProp = grid_column_total_1._totalTypeTemplate;
        _utils_1.extend(totalTypeProp, {
            valuesArray: possibleValues.map(function (v) { return { value: v, displayValue: v }; }),
            buttonsVisibility: {
                add: ko.observable(true),
                edit: ko.observable(false),
                updown: ko.observable(true),
                remove: ko.observable(true)
            }
        });
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [__assign({ collectionItemDefaultPropertyInfo: totalTypeProp }, _grid_columns_1.totalsTemplate)],
            summary: ko.computed(function () { return model.totals().length ? "DashboardWebStringId.ButtonOn" : ""; })
        });
    };
    GridColumnPropertiesComposer.prototype.getDeltaWrapper = function (model) {
        var properties = [
            _grid_columns_1.displayMode,
            _grid_columns_1.alwaysShowZeroLevel,
            {
                container: _grid_columns_1.gridColumnDeltaOptions,
                properties: _delta_options_1.deltaOptionsSerializationsInfo
            }
        ];
        var visibleRules = {};
        visibleRules[_grid_columns_1.alwaysShowZeroLevel.propertyName] = [_grid_columns_1.displayMode.propertyName, "=", "Bar"];
        _delta_options_1.deltaOptionsSerializationsInfo.forEach(function (opt) {
            visibleRules[opt.propertyName] = [_grid_columns_1.displayMode.propertyName, "=", "Value"];
        });
        var disabledRules = {};
        disabledRules[_delta_options_1.resultIndicationThresholdType.propertyName] = function (deltaOptions) { return deltaOptions.resultIndicationMode() === "NoIndication"; };
        disabledRules[_delta_options_1.resultIndicationThreshold.propertyName] = function (deltaOptions) { return deltaOptions.resultIndicationMode() === "NoIndication"; };
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules,
            visibilityFilterRules: visibleRules
        });
    };
    GridColumnPropertiesComposer.prototype.getSparklineWrapper = function (model) {
        var properties = [
            _grid_columns_1.showStartEndValues,
            {
                container: _grid_columns_1.sparklineOptions,
                properties: _sparkline_options_1.sparklineOptionsSerializationsInfo
            }
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties
        });
    };
    GridColumnPropertiesComposer.prototype.getFormatRulesWrapper = function (model, dashboardItem) {
        var extendedRuleInfo = _utils_1.extend({
            addHandler: function () { return data_dashboard_item_1.DataDashboardItem._createFormatRule(null, {
                "@ItemType": "GridItemFormatRule",
                "@DataItem": model.actualDataItem && model.actualDataItem.uniqueName() || undefined,
                "@DataItemApplyTo": model.actualDataItem && model.actualDataItem.uniqueName() || undefined
            }); }
        }, _dashboard_item_format_rule_1.classCaption);
        extendedRuleInfo.editHandler = this.editRuleHandler;
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: dashboardItem,
            properties: [__assign({ collectionItemDefaultPropertyInfo: extendedRuleInfo, filter: function (rule) {
                        var uniqueName = model.actualDataItem && model.actualDataItem.uniqueName() || undefined;
                        return rule.dataItemName() === uniqueName || rule.dataItemApplyToName() === uniqueName;
                    } }, _data_dashboard_item_1.formatRules)]
        });
    };
    return GridColumnPropertiesComposer;
}());
exports.GridColumnPropertiesComposer = GridColumnPropertiesComposer;
