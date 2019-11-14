/**
* DevExpress Dashboard (_range-filter-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _base_metadata_1 = require("../../../metadata/_base-metadata");
var _data_item_1 = require("../../../data-item/metadata/_data-item");
var _series_item_1 = require("../../metadata/_series-item");
var interactivity_options_1 = require("../../options/interactivity-options");
var _coloring_options_1 = require("../../options/metadata/_coloring-options");
var _dashboard_item_1 = require("../../metadata/_dashboard-item");
exports.defaultDateTimePeriodName = { propertyName: 'defaultDateTimePeriodName', displayName: "DashboardStringId.DateTimeFormatYearFormatDefaultCaption", modelName: '@SelectedDateTimePeriodIndex', editor: _base_metadata_1.editorTemplates.text, category: _base_metadata_1.PropertyCategory.ViewModel };
exports.dateTimePeriods = { propertyName: "dateTimePeriods", modelName: "DateTimePeriods", array: true, editor: _base_metadata_1.editorTemplates.formatRules };
exports.rangeSeries = { propertyName: 'series', modelName: 'Series', displayName: 'DashboardStringId.RangeFilterCalculationAlongSeries', editor: _base_metadata_1.editorTemplates.commonCollection, array: true };
exports.argument = { propertyName: _base_metadata_1.argumentPropertyName, modelName: 'Argument', displayName: 'DashboardStringId.DescriptionItemArgument', info: _data_item_1.dataItemLinkSerializationsInfo, editor: _base_metadata_1.editorTemplates.objecteditor };
exports.rangeFilterDashboardItemSerializationsInfo = _series_item_1.seriesDashboardItemSerializationsInfo
    .concat([exports.rangeSeries, exports.argument, interactivity_options_1._filterItemInteractivityOptionsMeta, _coloring_options_1.coloringOptions, exports.dateTimePeriods, exports.defaultDateTimePeriodName])
    .map(function (e) { return e === _dashboard_item_1.showCaption ? _dashboard_item_1.showCaptionDefaultFalse : e; });
