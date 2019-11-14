/**
* DevExpress Dashboard (_date-filter-element.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var _base_item_1 = require("../_base-item");
var _common_1 = require("../../../data/_common");
var _datetime_period_converter_1 = require("../range-selector-item/_datetime-period-converter");
var date_filter_widget_1 = require("./date-filter-widget");
var _format_helper_1 = require("../../../data/_format-helper");
var _formatter_1 = require("../../../data/_formatter");
var $ = require("jquery");
var _range_filter_selection_validator_1 = require("../range-selector-item/_range-filter-selection-validator");
exports.cssDateFilterClassNames = {
    item: 'dx-dashboard-date-filter-item'
};
var dateFilterElement = (function (_super) {
    __extends(dateFilterElement, _super);
    function dateFilterElement(container, options) {
        return _super.call(this, container, options) || this;
    }
    Object.defineProperty(dateFilterElement.prototype, "_allowPreview", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    dateFilterElement.prototype._getMinContentHeight = function () {
        if (this.widget && this._isFixedHeight)
            return this.widget._getHeight();
        return 0;
    };
    dateFilterElement.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        _super.prototype.renderContentUnsafe.call(this, element, changeExisting, afterRenderCallback);
        var isFirstInitialization = !changeExisting || !this.widget;
        if (isFirstInitialization)
            this.widget = new date_filter_widget_1.DateFilterWidget(element, { useNativeScrolling: this.options.useNativeScrolling, overflow: this.options.overflow }, this._getBoundaryContainer());
        var options = this.getWidgetOptions();
        this.widget._update(options);
        this.widget._updateSize($(this.contentRoot).width(), $(this.contentRoot).height());
        this._isFixedHeight = options.arrangementMode === 'AutoHeight';
        this.updateConstraints();
        if (isFirstInitialization && !this.options.IgnoreDefaultDateTimePeriod) {
            this._setDefaultDateTimePeriod();
        }
        return false;
    };
    dateFilterElement.prototype._setDefaultDateTimePeriod = function () {
        var viewModel = this.options.ViewModel, index = viewModel.DefaultDateTimePeriodIndex;
        if (index >= 0) {
            var period = viewModel.DateTimePeriods[index];
            this._setPredefinedPeriod(period, index, false);
        }
    };
    dateFilterElement.prototype.getInfoUnsafe = function () {
        return __assign({}, _super.prototype.getInfoUnsafe.call(this), { selectedPeriodName: this._getCurrentPredefinedRange() });
    };
    dateFilterElement.prototype._setSelectionUnsafe = function (values) {
        var _this = this;
        _super.prototype._setSelectionUnsafe.call(this, values);
        if (this.widget)
            this.widget._setSelectedValues(values[0].map(function (v) { return _this._convertSelectedValues(v); }), this.timePeriodMenuSelectedIndex);
    };
    dateFilterElement.prototype._applySelectionUnsafe = function () {
        _super.prototype._applySelectionUnsafe.call(this);
        if (this.widget)
            this.widget._setSelectedValues(this.options.SelectedValues && this.options.SelectedValues[0], this.timePeriodMenuSelectedIndex);
    };
    dateFilterElement.prototype._clearSelectionUnsafe = function () {
        _super.prototype._clearSelectionUnsafe.call(this);
        if (this.widget) {
            this._setTimePeriodMenuSelectedIndex(undefined);
            this._clearSelectedValues();
        }
    };
    dateFilterElement.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        if (this.options) {
            this.options.allowExport = false;
        }
    };
    dateFilterElement.prototype._clearSelectedValues = function () {
        this.widget._clearSelectedValues();
    };
    dateFilterElement.prototype._clearPeriodsSelection = function () {
        this.widget._clearSelectedPeriods();
        this._setTimePeriodMenuSelectedIndex(undefined);
    };
    dateFilterElement.prototype.getWidgetOptions = function () {
        var _this = this;
        var multiData = this.options.multiData;
        var filterViewModel = this.options.ViewModel;
        var getValue = function (name) {
            return multiData && multiData.getMeasureValue(name).getValue();
        };
        return {
            filterType: filterViewModel.FilterType,
            arrangementMode: filterViewModel.ArrangementMode,
            datePickerLocation: filterViewModel.DatePickerLocation,
            displayTextPattern: filterViewModel.DisplayTextPattern,
            groupInterval: filterViewModel.GroupInterval,
            format: function (value) {
                var valueToFormat = value;
                if (filterViewModel.GroupInterval === 'Year')
                    valueToFormat = _this._ensureYearValue(valueToFormat);
                return _format_helper_1.formatHelper.format(valueToFormat, _formatter_1.convertToFormat({ DateTimeFormat: filterViewModel.DateTimeFormat }));
            },
            buttonClick: function (name) {
                for (var i = 0; i < filterViewModel.DateTimePeriods.length; i++) {
                    if (name === filterViewModel.DateTimePeriods[i].Name) {
                        var period = _this.options.ViewModel.DateTimePeriods[i];
                        _this._setPredefinedPeriod(period, i);
                    }
                }
            },
            buttonsInfo: filterViewModel.DateTimePeriods.map(function (period) { return period.Name; }),
            valueChanged: function (values) {
                _this._clearPeriodsSelection();
                _this.setFilter(values);
            },
            minimum: getValue(filterViewModel.MinimumId),
            maximum: getValue(filterViewModel.MaximumId),
            clearAction: function () { return _this.clearMasterFilter.fire(_this.getName()); },
            hasOuterMargin: !this._isPaneEmpty() || this.visualMode === 'content',
            mobileLayout: this._mobileLayout()
        };
    };
    dateFilterElement.prototype._mobileLayout = function () {
        return false;
    };
    dateFilterElement.prototype._convertSelectedValues = function (value) {
        return value != null && this.options.ViewModel.GroupInterval == "Year" && typeof value === "number" ? new Date(value, 0, 1) : value;
    };
    dateFilterElement.prototype._setTimePeriodMenuSelectedIndex = function (index) {
        if (this.timePeriodMenuSelectedIndex !== index) {
            this.timePeriodMenuSelectedIndex = index;
            this.predefinedRangeChanged && this.predefinedRangeChanged(this._getCurrentPredefinedRange());
        }
    };
    dateFilterElement.prototype._getCurrentPredefinedRange = function () {
        return this.timePeriodMenuSelectedIndex !== undefined ? this.options.ViewModel.DateTimePeriods[this.timePeriodMenuSelectedIndex].Name : '';
    };
    dateFilterElement.prototype._setPredefinedPeriod = function (period, index, filterDate) {
        if (filterDate === void 0) { filterDate = true; }
        var rangeValues = _datetime_period_converter_1.DateTimePeriodConverter.toRange(period), values = [rangeValues.startValue, rangeValues.endValue];
        this.widget._setSelectedValues(values, index);
        this._setTimePeriodMenuSelectedIndex(index);
        if (filterDate)
            this.setFilter(values);
    };
    dateFilterElement.prototype._setPredefinedRange = function (dateTimePeriodName) {
        var dateTimePeriods = this.options.ViewModel.DateTimePeriods;
        var period = dateTimePeriods.filter(function (dateTimePeriod) { return dateTimePeriod.Name === dateTimePeriodName; })[0];
        if (period)
            this._setPredefinedPeriod(period, dateTimePeriods.indexOf(period));
    };
    dateFilterElement.prototype.setFilter = function (values) {
        var validatedRange = _range_filter_selection_validator_1.RangeFilterSelectionValidator.validate({
            startValue: values[0],
            endValue: values[1]
        }, this.options.ViewModel.GroupInterval == "Year");
        this.updateConstraints();
        this.selected.fire(this.getName(), _common_1.viewerActions.setMasterFilter, [[validatedRange.startValue, validatedRange.endValue]]);
    };
    dateFilterElement.prototype._ensureYearValue = function (value) {
        return value instanceof Date ? value.getFullYear() : value;
    };
    dateFilterElement.prototype._updateContentSizeUnsafe = function () {
        _super.prototype._updateContentSizeUnsafe.call(this);
        var width = $(this.contentRoot).width(), height = $(this.contentRoot).height();
        if (this.options.ViewModel.ArrangementMode === 'AutoHeight') {
            var oldHeight = this._getMinContentHeight();
            this.widget._updateSize(width, height);
            var newHeight = this._getMinContentHeight();
            if (oldHeight && oldHeight != newHeight) {
                this.updateConstraints();
                this.setSize(width, newHeight);
            }
        }
        else
            this.widget._updateSize(width, height);
    };
    dateFilterElement.prototype._getWidget = function () {
        return this.widget;
    };
    dateFilterElement.prototype._isBorderRequired = function () {
        return false;
    };
    dateFilterElement.prototype._isPaneEmpty = function () {
        return _super.prototype._isPaneEmpty.call(this) || !this.hasCaption();
    };
    dateFilterElement.prototype._isTransparentBackground = function () {
        return this._isPaneEmpty() && this.visualMode !== 'content';
    };
    dateFilterElement.prototype._generateInnerBorderClassesUnsafe = function (element) {
        var classes = _super.prototype._generateInnerBorderClassesUnsafe.call(this, element);
        if (!this._isPaneEmpty()) {
            classes.push(exports.cssDateFilterClassNames.item);
        }
        if (element) {
            if (this._isPaneEmpty()) {
                element.classList.remove(exports.cssDateFilterClassNames.item);
            }
            else {
                element.classList.add(exports.cssDateFilterClassNames.item);
            }
        }
        return classes;
    };
    return dateFilterElement;
}(_base_item_1.baseItem));
exports.dateFilterElement = dateFilterElement;
