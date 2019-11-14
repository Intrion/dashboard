/**
* DevExpress Dashboard (_date-filter-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var _data_dashboard_item_1 = require("../../metadata/_data-dashboard-item");
var _range_filter_item_1 = require("../../range-filter/metadata/_range-filter-item");
var interactivity_options_1 = require("../../options/interactivity-options");
exports.filterType = {
    propertyName: "filterType", modelName: "@FilterType", displayName: "DashboardWebStringId.DateFilter.FilterType", defaultVal: "Between", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "After": "DashboardWebStringId.DateFilter.FilterTypeAfter",
        "Before": "DashboardWebStringId.DateFilter.FilterTypeBefore",
        "Exact": "DashboardWebStringId.DateFilter.FilterTypeExact",
        "Between": "DashboardWebStringId.DateFilter.FilterTypeBetween"
    }
};
exports.arrangementMode = {
    propertyName: "arrangementMode", modelName: "@ArrangementMode", displayName: "DashboardWebStringId.DateFilter.ArrangementMode", defaultVal: "AutoHeight", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "AutoHeight": "DashboardWebStringId.DateFilter.ArrangementModeAutoHeight",
        "Horizontal": "DashboardWebStringId.DateFilter.ArrangementModeHorizontal",
        "Vertical": "DashboardWebStringId.DateFilter.ArrangementModeVertical"
    }
};
exports.datePickerLocation = {
    propertyName: "datePickerLocation", modelName: "@DatePickerLocation", displayName: "DashboardWebStringId.DateFilter.DatePickerLocation", defaultVal: "Far", editor: _base_metadata_1.editorTemplates.buttonGroup, values: {
        "Far": "DashboardWebStringId.DateFilter.DatePickerLocationFar",
        "Near": "DashboardWebStringId.DateFilter.DatePickerLocationNear",
        "Hidden": "DashboardWebStringId.DateFilter.DatePickerLocationHidden"
    }
};
exports.displayTextPattern = { propertyName: 'displayTextPattern', modelName: '@DisplayTextPattern', displayName: "DashboardStringId.DateFilterDisplayTextPattern", defaultVal: "", editor: _base_metadata_1.editorTemplates.text, editorOptions: { placeholder: "DashboardStringId.FromToDatePeriodCaption" } };
exports.dateFilterDimension = { propertyName: '__dimension', modelName: 'Dimension', displayName: 'DashboardStringId.DescriptionItemDimension', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.dateFilterDashboardItemSerializationsInfo = _data_dashboard_item_1.dataDashboardItemSerializationsInfo.concat([exports.dateFilterDimension, _range_filter_item_1.dateTimePeriods, exports.filterType, exports.arrangementMode, exports.datePickerLocation, exports.displayTextPattern, _range_filter_item_1.defaultDateTimePeriodName, interactivity_options_1._filterItemInteractivityOptionsMeta]);
