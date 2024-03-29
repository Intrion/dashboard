﻿/**
* DevExpress Dashboard (_shared-composers.js)
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
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _accordion_tab_1 = require("../../_accordion-tab");
var _dashboard_item_1 = require("../../../model/items/metadata/_dashboard-item");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _map_item_1 = require("../../../model/items/map/metadata/_map-item");
var _map_custom_shapefile_surface_1 = require("../surfaces/_map-custom-shapefile-surface");
var _collection_editor_viewmodel_1 = require("../../ui-widgets/collection-editor/_collection-editor-viewmodel");
var _chart_axis_1 = require("../../../model/items/chart/metadata/_chart-axis");
var scatter_chart_item_1 = require("../../../model/items/scatter-chart/scatter-chart-item");
var _chart_legend_1 = require("../../../model/items/chart/metadata/_chart-legend");
var _chart_item_1 = require("../../../model/items/chart/metadata/_chart-item");
var chart_series_1 = require("../../../model/items/chart/chart-series");
var _point_label_options_1 = require("../../../model/items/chart/metadata/_point-label-options");
var _scatter_point_label_options_1 = require("../../../model/items/scatter-chart/metadata/_scatter-point-label-options");
var _chart_series_1 = require("../../../model/items/chart/metadata/_chart-series");
var _map_legend_1 = require("../../../model/items/map/metadata/_map-legend");
var _data_item_format_1 = require("../../../model/data-item/metadata/_data-item-format");
var _delta_options_1 = require("../../../model/items/options/metadata/_delta-options");
var ko = require("knockout");
var model_1 = require("../../../model");
var index_metadata_1 = require("../../../model/index.metadata");
var date_time_period_1 = require("../../../model/items/range-filter/date-time-period");
var _helper_classes_1 = require("../../../model/internal/_helper-classes");
var _range_filter_item_1 = require("../../../model/items/range-filter/metadata/_range-filter-item");
var _default_1 = require("../../../data/localization/_default");
var _utils_1 = require("../../../data/_utils");
var SharedComposers = (function () {
    function SharedComposers() {
    }
    SharedComposers.getCommonTab = function (model, properties, disabledRules) {
        if (properties === void 0) { properties = []; }
        if (disabledRules === void 0) { disabledRules = {}; }
        var wrapper = this.getCommonWrapper(model, properties, disabledRules);
        return new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", wrapper);
    };
    ;
    SharedComposers.getAllTab = function (model) {
        return new _accordion_tab_1.AccordionTab("ALL", "All", new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: []
        }));
    };
    ;
    SharedComposers.getContentArrangementTab = function (model) {
        return new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ContentArrangement, "DashboardWebStringId.AccordionTab.Layout", this.getContentArrangementWrapper(model));
    };
    SharedComposers.getCommonWrapper = function (model, specificProperties, specificDisabledRules, specificVisibilityRules) {
        if (specificProperties === void 0) { specificProperties = []; }
        if (specificDisabledRules === void 0) { specificDisabledRules = {}; }
        if (specificVisibilityRules === void 0) { specificVisibilityRules = {}; }
        var properties = [
            _dashboard_item_1.showCaption,
            _base_metadata_1.name
        ];
        properties = properties.concat(specificProperties);
        var disabledRules = {};
        Object.keys(specificDisabledRules).forEach(function (key) {
            disabledRules[key] = specificDisabledRules[key];
        });
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            visibilityFilterRules: specificVisibilityRules,
            disabledFilterRules: disabledRules
        });
    };
    SharedComposers.getCommonMapWrapper = function (model, propertiesController, specificProperties) {
        if (specificProperties === void 0) { specificProperties = []; }
        var items = Object.keys(_map_item_1.area.values).map(function (key) {
            return {
                value: key,
                displayValue: _map_item_1.area.values[key],
                allowEdit: ko.computed(function () { return key === 'Custom'; }),
                forceEdit: ko.computed(function () { return key === 'Custom' && !model.customShapefile.url() && !model.customShapefile.data.shapeData(); }),
            };
        });
        var modelExtension = {
            areaTypes: {
                items: ko.observable(ko.observableArray(items)),
                selectedItem: ko.computed({
                    read: function () { return items.filter(function (item) { return item.value === model.area(); })[0]; },
                    write: function (area) { return model.area(area.value); }
                })
            }
        };
        var editHandler = function (obj) {
            var surface = new _map_custom_shapefile_surface_1.MapCustomShapeFileSurface(model.customShapefile, propertiesController);
            surface.startEditing(new _collection_editor_viewmodel_1.CollectionEditorEditItemArguments());
        };
        return SharedComposers.getCommonWrapper(_utils_1.extend(model, modelExtension), [{
                propertyName: 'areaTypes',
                editor: _base_metadata_1.editorTemplates.collectionEditorValuesBased,
                collectionItemDefaultPropertyInfo: {
                    propertyName: "displayValue",
                    editHandler: editHandler,
                    buttonsVisibility: {
                        add: ko.observable(false),
                        edit: ko.observable(true),
                        updown: ko.observable(false),
                        remove: ko.observable(false),
                    }
                }
            }].concat(specificProperties));
    };
    SharedComposers.getAxisWrapper = function (model, axisComputedTitle, alwaysShowZeroLevelInfo, isDateField, isNumericField, groupInterval) {
        if (isDateField === void 0) { isDateField = false; }
        if (isNumericField === void 0) { isNumericField = true; }
        if (groupInterval === void 0) { groupInterval = "None"; }
        var disabledRules = {};
        var visibilityRules = {};
        disabledRules[_chart_axis_1.titleVisibleBaseInfo.propertyName] = [_chart_axis_1.axisVisible.propertyName, "=", false];
        disabledRules[_chart_axis_1.title.propertyName] = [[_chart_axis_1.titleVisibleBaseInfo.propertyName, "=", false], "or", [_chart_axis_1.axisVisible.propertyName, "=", false]];
        disabledRules[_chart_axis_1.logarithmicBase.propertyName] = [_chart_axis_1.logarithmic.propertyName, "=", false];
        disabledRules[_chart_axis_1.limitVisiblePoints.propertyName] = [_chart_axis_1.axisVisible.propertyName, "=", false];
        disabledRules[_chart_axis_1.visiblePointsCount.propertyName] = [[_chart_axis_1.limitVisiblePoints.propertyName, "=", false], "or", [_chart_axis_1.axisVisible.propertyName, "=", false]];
        disabledRules[index_metadata_1.numericFormat.propertyName] = [index_metadata_1.numericFormat.propertyName, "=", false];
        disabledRules[index_metadata_1.dateTimeFormat.propertyName] = [index_metadata_1.dateTimeFormat.propertyName, "=", false];
        var properties = alwaysShowZeroLevelInfo ? [alwaysShowZeroLevelInfo] : [];
        properties = properties.concat([
            _chart_axis_1.reverse,
            _chart_axis_1.showGridLinesBaseInfo,
            _chart_axis_1.axisVisible,
            _chart_axis_1.titleVisibleBaseInfo,
            __assign({ editorOptions: { placeholder: axisComputedTitle } }, _chart_axis_1.title),
            _chart_axis_1.logarithmic,
            _chart_axis_1.logarithmicBase,
            _chart_axis_1.enableZooming,
            _chart_axis_1.limitVisiblePoints,
            _chart_axis_1.visiblePointsCount,
        ]);
        if (isDateField) {
            properties.push({
                container: index_metadata_1.dateTimeFormat,
                properties: [
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
                ]
            });
            visibilityRules[_data_item_format_1.yearFormat.propertyName] = function () { return groupInterval === "Year"; };
            visibilityRules[_data_item_format_1.quarterFormat.propertyName] = function () { return groupInterval === "Quarter"; };
            visibilityRules[_data_item_format_1.monthFormat.propertyName] = function () { return groupInterval === "Month"; };
            visibilityRules[_data_item_format_1.hourFormat.propertyName] = function () { return groupInterval === "Hour"; };
            visibilityRules[_data_item_format_1.dayOfWeekFormat.propertyName] = function () { return groupInterval === "DayOfWeek"; };
            visibilityRules[_data_item_format_1.dateFormat.propertyName] = function () { return groupInterval === "DayMonthYear"; };
            visibilityRules[_data_item_format_1.dateHourFormat.propertyName] = function () { return groupInterval === "DateHour"; };
            visibilityRules[_data_item_format_1.dateHourMinuteFormat.propertyName] = function () { return groupInterval === "DateHourMinute"; };
            visibilityRules[_data_item_format_1.dateTimeWithSecondsFormat.propertyName] = function () { return groupInterval === "DateHourMinuteSecond"; };
            visibilityRules[_data_item_format_1.exactDateFormat.propertyName] = function () { return groupInterval === "None"; };
        }
        if (isNumericField) {
            properties.push(__assign({ sourceObject: this.getNumericFormatWrapper(model.numericFormat) }, index_metadata_1.numericFormat));
        }
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules,
            visibilityFilterRules: visibilityRules
        });
    };
    SharedComposers.getLegendWrapper = function (model) {
        var properties = [
            _chart_legend_1.chartLegendVisible,
            _chart_legend_1.isInsideDiagram,
            _chart_legend_1.insidePosition,
            _chart_legend_1.outsidePosition,
        ];
        var disabledRules = {};
        disabledRules[_chart_legend_1.isInsideDiagram.propertyName] = [_chart_legend_1.chartLegendVisible.propertyName, "=", false];
        disabledRules[_chart_legend_1.insidePosition.propertyName] = [_chart_legend_1.chartLegendVisible.propertyName, "=", false];
        disabledRules[_chart_legend_1.outsidePosition.propertyName] = [_chart_legend_1.chartLegendVisible.propertyName, "=", false];
        var visibleRules = {};
        visibleRules[_chart_legend_1.insidePosition.propertyName] = [_chart_legend_1.isInsideDiagram.propertyName, "=", true];
        visibleRules[_chart_legend_1.outsidePosition.propertyName] = [_chart_legend_1.isInsideDiagram.propertyName, "=", false];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [{
                    container: _chart_item_1.chartLegend,
                    properties: properties
                }],
            disabledFilterRules: disabledRules,
            visibilityFilterRules: visibleRules
        });
    };
    SharedComposers.getContentArrangementWrapper = function (model) {
        var properties = [
            _base_metadata_1.contentArrangementMode,
            _base_metadata_1.contentLineCount
        ];
        var disabledRules = {};
        disabledRules[_base_metadata_1.contentLineCount.propertyName] = [_base_metadata_1.contentArrangementMode.propertyName, "=", "Auto"];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules
        });
    };
    SharedComposers.getLabelsWrapper = function (model) {
        if (model) {
            var simpleSeries = model instanceof chart_series_1.SimpleSeries ? model : null;
            var properties = [];
            if (model instanceof scatter_chart_item_1.ScatterChartItem) {
                properties.push(_point_label_options_1.showPointLabels);
                properties.push(_scatter_point_label_options_1.content);
            }
            else {
                var isFullStackedSeries = simpleSeries && ["FullStackedBar", "FullStackedLine", "FullStackedArea", "FullStackedSplineArea"].indexOf(simpleSeries.seriesType()) >= 0;
                properties.push(_utils_1.extend(_point_label_options_1.contentType, isFullStackedSeries ? {
                    valuesArray: [{ value: model_1.PointLabelContentType.Argument, displayValue: "DashboardStringId.PointLabelContentTypeArgument" },
                        { value: model_1.PointLabelContentType.SeriesName, displayValue: "DashboardStringId.PointLabelContentTypeSeriesName" },
                        { value: model_1.PointLabelContentType.Value, displayValue: "DashboardStringId.PointLabelContentTypeValue" },
                        { value: model_1.PointLabelContentType.Percent, displayValue: "DashboardStringId.PointLabelContentTypePercent" }]
                } : {
                    valuesArray: [{ value: model_1.PointLabelContentType.Argument, displayValue: "DashboardStringId.PointLabelContentTypeArgument" },
                        { value: model_1.PointLabelContentType.SeriesName, displayValue: "DashboardStringId.PointLabelContentTypeSeriesName" },
                        { value: model_1.PointLabelContentType.Value, displayValue: "DashboardStringId.PointLabelContentTypeValue" }]
                }));
            }
            properties = properties.concat([
                _point_label_options_1.overlappingMode,
                _point_label_options_1.pointLabelOrientation
            ]);
            if (simpleSeries && simpleSeries.seriesType().indexOf("Bar") > -1) {
                properties.push(_point_label_options_1.showForZeroValues);
                properties.push(_point_label_options_1.position);
            }
            if (model instanceof scatter_chart_item_1.ScatterChartItem) {
                properties.push(_point_label_options_1.position);
            }
            return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                model: model,
                properties: [{
                        container: _chart_series_1.chartSeriesPointLabelOptions,
                        properties: properties
                    }],
                summary: ko.computed(function () { return (model.pointLabelOptions && model.pointLabelOptions.showPointLabels()) ? "DashboardWebStringId.ButtonOn" : ""; })
            });
        }
        return null;
    };
    SharedComposers.getAttributeNamesSerializationInfo = function (model, propertyInfo, includeNoneValue, noneValueCaption) {
        if (includeNoneValue === void 0) { includeNoneValue = true; }
        if (noneValueCaption === void 0) { noneValueCaption = _default_1.getLocalizationById('DashboardStringId.MapShapeNoneAttribute'); }
        var attributes = model._shapeFilesAttributeNameList().map(function (attr) { return { value: attr, displayValue: attr }; });
        if (includeNoneValue) {
            attributes.splice(0, 0, {
                value: "", displayValue: noneValueCaption
            });
        }
        var info = __assign({}, propertyInfo, { valuesArray: attributes, defaultVal: attributes.length && attributes[0].value || null });
        return info;
    };
    SharedComposers.getShapeTitleSerializationInfo = function (model) {
        return SharedComposers.getAttributeNamesSerializationInfo(model, _map_item_1.shapeTitleAttributeName);
    };
    SharedComposers.getColorLegendWrapper = function (model) {
        var properties = [
            _map_legend_1.legendVisible,
            _map_legend_1.legendPosition
        ];
        var disabledRules = {};
        disabledRules[_map_legend_1.legendPosition.propertyName] = [_map_legend_1.legendVisible.propertyName, "=", false];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [{
                    container: _map_item_1.colorLegend,
                    properties: properties
                }],
            disabledFilterRules: disabledRules
        });
    };
    SharedComposers.getWeightedLegendWrapper = function (model) {
        var properties = [
            _map_legend_1.legendVisible,
            _map_legend_1.legendType,
            _map_legend_1.legendPosition
        ];
        var disabledRules = {};
        disabledRules[_map_legend_1.legendType.propertyName] = [_map_legend_1.legendVisible.propertyName, "=", false];
        disabledRules[_map_legend_1.legendPosition.propertyName] = [_map_legend_1.legendVisible.propertyName, "=", false];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [{
                    container: _map_item_1.weightedLegend,
                    properties: properties
                }],
            disabledFilterRules: disabledRules
        });
    };
    SharedComposers.getNumericFormatWrapper = function (model) {
        var measuredInUnits = function (numericFormat) {
            return numericFormat.formatType() === "Number" || numericFormat.formatType() === "Currency";
        };
        var notCustomizedFormat = function (numericFormat) {
            return numericFormat.formatType() === "Auto" || numericFormat.formatType() === "General";
        };
        var disabledRules = {};
        disabledRules[_data_item_format_1.unit.propertyName] = function (numericFormat) { return !measuredInUnits(numericFormat); };
        disabledRules[_data_item_format_1.precisionPropertyName] = function (numericFormat) {
            return notCustomizedFormat(numericFormat) || (measuredInUnits(numericFormat) && numericFormat.unit() === "Auto");
        };
        disabledRules[_data_item_format_1.includeGroupSeparator.propertyName] = function (numericFormat) {
            return notCustomizedFormat(numericFormat) || numericFormat.formatType() === "Scientific";
        };
        disabledRules[_data_item_format_1.dataItemCurrencyCultureName.propertyName] = function (numericFormat) { return numericFormat.formatType() !== "Currency"; };
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [],
            disabledFilterRules: disabledRules,
            summary: ko.computed(function () { return notCustomizedFormat(model) ? "" : (_data_item_format_1.formatTypeValues[model.formatType()] || model.formatType()); })
        });
    };
    SharedComposers.getDeltaOptionsWrapper = function (model) {
        var disabledRules = {};
        disabledRules[_delta_options_1.resultIndicationThresholdType.propertyName] = function (deltaOptions) { return deltaOptions.resultIndicationMode() === "NoIndication"; };
        disabledRules[_delta_options_1.resultIndicationThreshold.propertyName] = function (deltaOptions) { return deltaOptions.resultIndicationMode() === "NoIndication"; };
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [],
            disabledFilterRules: disabledRules
        });
    };
    SharedComposers.getDeltaFormatsOptionsWrapper = function (model, editFormat) {
        if (editFormat === void 0) { editFormat = function (model) { }; }
        var additionalFormats = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            additionalFormats[_i - 2] = arguments[_i];
        }
        var formats = this.getDeltaFormats(model);
        additionalFormats.forEach(function (format) { return formats.push(format); });
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: {
                deltaFormats: {
                    items: ko.observable(ko.observableArray(formats)),
                    selectedItem: ko.observable()
                }
            },
            properties: [{
                    propertyName: "deltaFormats",
                    editor: _base_metadata_1.editorTemplates.deltaFormats,
                    collectionItemDefaultPropertyInfo: {
                        propertyName: "title",
                        editHandler: editFormat,
                        buttonsVisibility: {
                            add: ko.observable(false),
                            edit: ko.observable(true),
                            updown: ko.observable(false),
                            remove: ko.observable(false),
                        }
                    }
                }]
        });
    };
    SharedComposers.getDeltaFormats = function (kpiElement) {
        var formats = [];
        var actualValueFormat = kpiElement.actualValue() ? kpiElement.actualValue().numericFormat : null;
        var targetValueFormat = kpiElement.targetValue() ? kpiElement.targetValue().numericFormat : null;
        actualValueFormat && formats.push({ title: _default_1.getLocalizationById("DashboardStringId.DeltaValueTypeActualValueCaption"), numericFormat: actualValueFormat });
        targetValueFormat && formats.push({ title: _default_1.getLocalizationById("DashboardStringId.CardRowDataElementTypeTargetValueCaption"), numericFormat: targetValueFormat });
        return formats.concat([
            { title: _default_1.getLocalizationById("DashboardStringId.DeltaValueTypeAbsoluteVariationCaption"), numericFormat: kpiElement.absoluteVariationNumericFormat },
            { title: _default_1.getLocalizationById("DashboardStringId.DeltaValueTypePercentVariationCaption"), numericFormat: kpiElement.percentVariationNumericFormat },
            { title: _default_1.getLocalizationById("DashboardStringId.DeltaValueTypePercentOfTargetCaption"), numericFormat: kpiElement.percentOfTargetNumericFormat }
        ]);
    };
    SharedComposers.getCustomRangesWrapper = function (model, editRuleHandler, dataSourceBrowser, dimension) {
        var namePrefix = _default_1.getLocalizationById("DashboardStringId.DefaultPeriodName") + " ";
        var extendedRuleInfo = __assign({ addHandler: function () { return new date_time_period_1.DateTimePeriod({ "@ItemType": "DateTimePeriod", "@Name": _helper_classes_1.NameGenerator.generateName(namePrefix, model.dateTimePeriods(), 'name', 1) }); }, editHandler: editRuleHandler, customTemplate: "dx-dashboard-custom-range-collection-item" }, _base_metadata_1.name);
        var isDateTimePeriodsPropertyVisible = ko.observable(false);
        var visibilityRules = {};
        visibilityRules[_range_filter_item_1.dateTimePeriods.propertyName] = function () {
            return isDateTimePeriodsPropertyVisible();
        };
        ko.computed(function () {
            if (dimension()) {
                dataSourceBrowser.findDataField(model.dataSource(), model.dataMember(), dimension().dataMember()).done(function (dataField) {
                    isDateTimePeriodsPropertyVisible(dataField && dataField.fieldType() === 'DateTime');
                });
            }
        });
        extendedRuleInfo["customTemplateGetItemWeight"] = function (item) { return model.defaultDateTimePeriodName() === item.name() ? 800 : "normal"; };
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            visibilityFilterRules: visibilityRules,
            properties: [
                __assign({ collectionItemDefaultPropertyInfo: extendedRuleInfo }, _range_filter_item_1.dateTimePeriods)
            ]
        });
    };
    return SharedComposers;
}());
exports.SharedComposers = SharedComposers;
