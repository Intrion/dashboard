/**
* DevExpress Dashboard (_custom-range-properties-composer.js)
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
var _accordion_tab_1 = require("../../_accordion-tab");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _date_time_period_1 = require("../../../model/items/range-filter/metadata/_date-time-period");
var _limit_container_1 = require("../../../model/items/range-filter/metadata/_limit-container");
var _period_limit_1 = require("../../../model/items/range-filter/metadata/_period-limit");
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var ko = require("knockout");
var index_internal_1 = require("../../../data/index.internal");
var CustomRangePropertiesComposer = (function () {
    function CustomRangePropertiesComposer() {
    }
    CustomRangePropertiesComposer.prototype.composeTabs = function (model, argument, rangeFilterItem) {
        var commonTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", this.getCommonWrapper(model, argument, rangeFilterItem));
        model.argumentInterval(argument.dateTimeGroupInterval());
        return [commonTab];
    };
    CustomRangePropertiesComposer.prototype.getCommonWrapper = function (model, argument, rangeFilterItem) {
        var p = [], visibilityRules = {}, dateOnly = ["Year", "MonthYear", "QuarterYear", "DayMonthYear"].indexOf(argument.dateTimeGroupInterval()) !== -1;
        p.push(__assign({}, _base_metadata_1.name, { validationRules: [
                {
                    type: "custom",
                    validationCallback: function (options) { return !rangeFilterItem.dateTimePeriods().filter(function (period) { return period.name() === options.value; })[0]; },
                    message: index_internal_1.getLocalizationById("DashboardStringId.UniqueNameValidationMessage")
                }
            ] }));
        p.push({
            container: _date_time_period_1.startLimit,
            properties: [__assign({ displayName: "DashboardWebStringId.RangeFilter.StartMode", replacementPropertyName: "start_mode" }, _date_time_period_1.mode), __assign({ displayName: "DashboardWebStringId.RangeFilter.StartIntervalAndOffset", replacementPropertyName: "start_flow_options" }, _limit_container_1.flowDateTimePeriodLimitProperty), {
                    container: _limit_container_1.fixedDateTimePeriodLimitProperty,
                    properties: [__assign({ displayName: "DashboardWebStringId.RangeFilter.StartDate", replacementPropertyName: "start_date", editorOptions: {
                                type: dateOnly ? "date" : "datetime"
                            } }, _period_limit_1.date)]
                }]
        });
        visibilityRules["start_date"] = ["start_mode", "=", "Fixed"];
        visibilityRules["start_flow_options"] = ["start_mode", "=", "Flow"];
        p.push({
            container: _date_time_period_1.endLimit,
            properties: [__assign({ displayName: "DashboardWebStringId.RangeFilter.EndMode", replacementPropertyName: "end_mode" }, _date_time_period_1.mode), __assign({ displayName: "DashboardWebStringId.RangeFilter.EndIntervalAndOffset", replacementPropertyName: "end_flow_options" }, _limit_container_1.flowDateTimePeriodLimitProperty), {
                    container: _limit_container_1.fixedDateTimePeriodLimitProperty,
                    properties: [__assign({ displayName: "DashboardWebStringId.RangeFilter.EndDate", replacementPropertyName: "end_date", editorOptions: {
                                type: dateOnly ? "date" : "datetime"
                            } }, _period_limit_1.date)]
                }]
        });
        visibilityRules["end_date"] = ["end_mode", "=", "Fixed"];
        visibilityRules["end_flow_options"] = ["end_mode", "=", "Flow"];
        p.push(_date_time_period_1.periodTextValue);
        p.push({
            propertyName: 'buttonsModel',
            editor: _base_metadata_1.editorTemplates.actionButtons,
        });
        var wrapper = new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: p,
            visibilityFilterRules: visibilityRules,
            modelExtention: {
                buttonsModel: {
                    setAsDefault: {
                        text: dx_analytics_core_1.default.Analytics.Internal.localize("DashboardWebStringId.RangeFilter.SetDefaultCustomPeriod"),
                        action: function () { return rangeFilterItem.defaultDateTimePeriodName(model.name()); },
                        orderNo: 0,
                        visible: ko.computed(function () { return rangeFilterItem.defaultDateTimePeriodName() !== model.name(); })
                    },
                    resetDefault: {
                        text: dx_analytics_core_1.default.Analytics.Internal.localize("DashboardWebStringId.RangeFilter.ClearDefaultCustomPeriod"),
                        action: function () { return rangeFilterItem.defaultDateTimePeriodName(null); },
                        orderNo: 1,
                        visible: ko.computed(function () { return rangeFilterItem.defaultDateTimePeriodName() === model.name(); })
                    }
                },
            }
        });
        return wrapper;
    };
    return CustomRangePropertiesComposer;
}());
exports.CustomRangePropertiesComposer = CustomRangePropertiesComposer;
