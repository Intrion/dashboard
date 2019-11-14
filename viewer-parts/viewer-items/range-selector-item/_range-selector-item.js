/**
* DevExpress Dashboard (_range-selector-item.js)
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
Object.defineProperty(exports, "__esModule", { value: true });
var _base_item_1 = require("../_base-item");
var _custom_time_period_dialog_1 = require("../../widgets/dialogs/_custom-time-period-dialog");
var _caption_toolbar_css_classes_1 = require("../../widgets/caption-toolbar/_caption-toolbar-css-classes");
var _datetime_period_converter_1 = require("./_datetime-period-converter");
var _range_filter_selection_validator_1 = require("./_range-filter-selection-validator");
var range_selector_1 = require("devextreme/viz/range_selector");
var _chart_helper_1 = require("../../../data/_chart-helper");
var _render_helper_1 = require("../../widgets/_render-helper");
var _common_1 = require("../../../data/_common");
var caption_toolbar_options_1 = require("../../widgets/caption-toolbar/caption-toolbar-options");
var _localizer_1 = require("../../../data/_localizer");
var _localization_ids_1 = require("../../../data/_localization-ids");
var $ = require("jquery");
var DayIntervalWidthInPixels = 25, MonthIntervalWidthInPixels = 40, QuarterIntervalWidthInPixels = 20;
var rangeSelectorItem = (function (_super) {
    __extends(rangeSelectorItem, _super);
    function rangeSelectorItem(container, options) {
        var _this = _super.call(this, container, options) || this;
        _this._periodUpdatingLocked = false;
        _this.itemElementCustomColor = $.Callbacks();
        _this.timePeriodMenuSelectedIndex = undefined;
        return _this;
    }
    Object.defineProperty(rangeSelectorItem.prototype, "_isBottomFloatingToolbarPosition", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    rangeSelectorItem.prototype._getCustomTimePeriodDialog = function () {
        var _this = this;
        if (!this._customTimePeriodDialog) {
            this._customTimePeriodDialog = new _custom_time_period_dialog_1.customTimePeriodDialog({
                container: $(this.container).closest('.' + _caption_toolbar_css_classes_1.cssClasses.dashboardContainer).get(0),
                setRange: function (range) { return _this._setRange(range); }
            });
        }
        return this._customTimePeriodDialog;
    };
    rangeSelectorItem.prototype._initializeData = function (newOptions) {
        _super.prototype._initializeData.call(this, newOptions);
        if (this.dataController) {
            this.dataController.elementCustomColor = $.proxy(this._elementCustomColor, this);
        }
    };
    rangeSelectorItem.prototype._clearSelectionUnsafe = function () {
        this._lock();
        this.rangeSelectorViewer.setValue([]);
        this._unlock();
    };
    rangeSelectorItem.prototype._clearSelectionBase = function () {
        if (!this._periodUpdatingLocked) {
            this._setTimePeriodMenuSelectedIndex(undefined);
        }
    };
    rangeSelectorItem.prototype._setSelectionUnsafe = function (values) {
        if (values.length == 0) {
            this.clearSelection();
        }
        else {
            var range = values[0];
            this._setRange({ startValue: range[0], endValue: range[1] });
        }
    };
    rangeSelectorItem.prototype._getCurrentRange = function () {
        var value = this._getSelectedValues();
        var range = value && value !== null ? { startValue: value[0], endValue: value[1] } : this._getEntireRange();
        return new rangeFilterSelection(range);
    };
    rangeSelectorItem.prototype.getEntireRange = function () {
        return new rangeFilterSelection(this._getEntireRange());
    };
    rangeSelectorItem.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        var customPeriodForm = this._getCustomTimePeriodDialog();
        if (customPeriodForm) {
            customPeriodForm.dispose();
        }
        this.rangeSelectorViewer && this.rangeSelectorViewer.dispose();
    };
    rangeSelectorItem.prototype._setRange = function (range) {
        var validatedRange = _range_filter_selection_validator_1.RangeFilterSelectionValidator.validate(range, this._isIntYearGroupInterval(), this.getEntireRange());
        var selection = [validatedRange.startValue, validatedRange.endValue];
        this._setSelectedValues([selection]);
        if (this.hasWidget) {
            this.rangeSelectorViewer.setValue(selection);
        }
        else {
            this.selected.fire(this.getName(), _common_1.viewerActions.setMasterFilter, [selection]);
        }
    };
    rangeSelectorItem.prototype._setPredefinedRange = function (dateTimePeriodName) {
        var dateTimePeriods = this.options.ViewModel.DateTimePeriods;
        var period = dateTimePeriods.filter(function (dateTimePeriod) { return dateTimePeriod.Name === dateTimePeriodName; })[0];
        this._setPredefinedPeriod(period, !!period ? dateTimePeriods.indexOf(period) : undefined);
    };
    rangeSelectorItem.prototype._getAvailablePredefinedRanges = function () {
        return this.options.ViewModel.DateTimePeriods.map(function (period) { return period.Name; });
    };
    rangeSelectorItem.prototype._getCurrentPredefinedRange = function () {
        return this.timePeriodMenuSelectedIndex !== undefined ? this.options.ViewModel.DateTimePeriods[this.timePeriodMenuSelectedIndex].Name : '';
    };
    rangeSelectorItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var that = this, options = this._getRangeSelectorViewerOptions();
        var isFirstInitialization = !changeExisting || !that.rangeSelectorViewer;
        this._lock();
        try {
            if (isFirstInitialization) {
                this.rangeSelectorViewer = new range_selector_1.default(element, options);
            }
            else {
                this.rangeSelectorViewer.option(options);
            }
        }
        finally {
            this._unlock();
        }
        if (isFirstInitialization && !this.options.IgnoreDefaultDateTimePeriod) {
            this._setDefaultDateTimePeriod();
        }
        return false;
    };
    rangeSelectorItem.prototype._setDefaultDateTimePeriod = function () {
        var viewModel = this.options.ViewModel, index = viewModel.DefaultDateTimePeriodIndex;
        if (this._isDateTimePeriodSupported() && index >= 0) {
            var period = viewModel.DateTimePeriods[index];
            this._setPredefinedPeriod(period, index);
        }
    };
    rangeSelectorItem.prototype._isBorderRequired = function () {
        return false;
    };
    rangeSelectorItem.prototype._getContainerPositionUnsafe = function () {
        var position = _super.prototype._getContainerPositionUnsafe.call(this), buttonOffset = this._getButtonOffset(true);
        position.offsetY = position.height - buttonOffset.top;
        return position;
    };
    rangeSelectorItem.prototype._getRangeSelectorViewerOptions = function () {
        var that = this, viewModel = that.options.ViewModel, argument = viewModel.Argument, isDiscreteDateTimeScale = that._isDiscreteDateTimeScale(argument), seriesTemplates = viewModel.SeriesTemplates, selectedValues = this._getSelectedValues(), dataSourceAndSeries = that.dataController.getDataSourceAndSeries(that._isEncodeHtml(), true), tickMarkInterval = undefined, animation = that._getAnimationOptions(), options = {
            scale: {
                axisDivisionFactor: null,
                type: null,
                marker: {
                    visible: false
                }
            },
            encodeHtml: that._isEncodeHtml(),
            margin: {
                top: 10,
                bottom: 15
            }
        };
        var entireRange = this._getEntireRange();
        options.scale.startValue = entireRange.startValue;
        options.scale.endValue = entireRange.endValue;
        if (!this._isValidValues(selectedValues)) {
            options.value = [selectedValues[0], selectedValues[1]];
        }
        var argumentFormat = that.dataController.getArgumentFormat();
        options.scale.label = {
            format: argumentFormat
        };
        options.scale.valueType = argument.Type == 'DateTime' ? 'datetime' : 'numeric';
        options.sliderMarker = {
            format: argumentFormat
        };
        if (argument) {
            if ((argument.DateTimeGroupInterval === 'Year' && argument.Type === 'DateTime') || !argument.IsContinuousDateTimeScale) {
                tickMarkInterval = that.dataController.isDiscreteArgument() || argument.Type == 'Integer' ? 1 : _chart_helper_1.chartHelper.convertPresentationUnit(argument);
                if (tickMarkInterval) {
                    options.scale.minorTick = {
                        visible: false
                    };
                    options.behavior = {
                        snapToTicks: true,
                        animationEnabled: animation.enabled
                    };
                    options.scale.minRange = tickMarkInterval;
                    if (isDiscreteDateTimeScale === true) {
                        options.scale.axisDivisionFactor = {
                            day: DayIntervalWidthInPixels,
                            month: MonthIntervalWidthInPixels,
                            quarter: QuarterIntervalWidthInPixels
                        };
                        options.scale.type = "semidiscrete";
                    }
                }
            }
            else {
                options.behavior = {
                    snapToTicks: false,
                    animationEnabled: animation.enabled
                };
            }
        }
        options.dataSource = dataSourceAndSeries.dataSource;
        options.chart = {
            series: dataSourceAndSeries.series,
            commonSeriesSettings: {
                type: seriesTemplates && seriesTemplates.length > 0 ? (_chart_helper_1.chartHelper.convertSeriesType(seriesTemplates[0].SeriesType)) : null
            },
            palette: _render_helper_1.RenderHelper.getDefaultPalette()
        };
        options.onValueChanged = that._getSelectedRangeChangedHandler();
        return options;
    };
    rangeSelectorItem.prototype._getEntireRange = function () {
        var range;
        var dataSourceAndSeries = this.dataController.getDataSourceAndSeries(this._isEncodeHtml(), true);
        var lastDataItemIndex = dataSourceAndSeries.dataSource ? dataSourceAndSeries.dataSource.length - 1 : -1;
        if (lastDataItemIndex > 0) {
            var firstDataItemIndex = 0;
            var isQualitativeArgument = this.dataController.isQualitativeArgument();
            range = {
                startValue: isQualitativeArgument ? firstDataItemIndex : dataSourceAndSeries.dataSource[firstDataItemIndex].x,
                endValue: isQualitativeArgument ? lastDataItemIndex : dataSourceAndSeries.dataSource[lastDataItemIndex].x
            };
        }
        else {
            range = {
                startValue: null,
                endValue: null
            };
        }
        return range;
    };
    rangeSelectorItem.prototype._getSelectedValues = function () {
        var allSelectedValues = _super.prototype._getSelectedValues.call(this);
        return allSelectedValues ? allSelectedValues[0] : null;
    };
    rangeSelectorItem.prototype._isValidValues = function (values) {
        if (values && values.length) {
            var startValue = values[0], endValue = values[1];
            if (_range_filter_selection_validator_1.RangeFilterSelectionValidator.isValidValue(startValue) && _range_filter_selection_validator_1.RangeFilterSelectionValidator.isValidValue(endValue))
                return false;
        }
        return true;
    };
    rangeSelectorItem.prototype._getSliderMarkerFormat = function () {
        return this.dataController.isSingleArgument() ? this.dataController.getSingleArgumentDimensionFormat() : undefined;
    };
    rangeSelectorItem.prototype._isDiscreteDateTimeScale = function (argument) {
        var isDiscreteDateTimeScale;
        if (argument) {
            switch (argument.Type) {
                case 'String':
                case 'Integer':
                    isDiscreteDateTimeScale = true;
                    break;
                case 'DateTime':
                    switch (argument.DateTimeGroupInterval) {
                        case 'Year':
                        case 'QuarterYear':
                        case 'MonthYear':
                        case 'DayMonthYear':
                            isDiscreteDateTimeScale = true;
                            break;
                        default:
                            isDiscreteDateTimeScale = false;
                            break;
                    }
                    break;
                default:
                    isDiscreteDateTimeScale = false;
                    break;
            }
        }
        return isDiscreteDateTimeScale;
    };
    rangeSelectorItem.prototype._getSelectedRangeChangedHandler = function () {
        var that = this;
        return function (e) {
            if (!that._isLocked()) {
                if (!that._periodUpdatingLocked) {
                    that._setTimePeriodMenuSelectedIndex(undefined);
                }
                that._setSelectedValues([e.value]);
                that.selected.fire(that.getName(), _common_1.viewerActions.setMasterFilter, [e.value]);
            }
        };
    };
    rangeSelectorItem.prototype._resizeUnsafe = function () {
        _super.prototype._resizeUnsafe.call(this);
        if ($(this.container).is(":visible")) {
            this.rangeSelectorViewer.render();
        }
    };
    rangeSelectorItem.prototype._getWidget = function () {
        return this.rangeSelectorViewer;
    };
    rangeSelectorItem.prototype._elementCustomColor = function (eventArgs) {
        this.itemElementCustomColor.fire(this.getName(), eventArgs);
    };
    rangeSelectorItem.prototype._hasTimePeriods = function () {
        return true;
    };
    rangeSelectorItem.prototype._isDateTimePeriodSupported = function () {
        return this.options.ViewModel.SupportDateTimePeriods;
    };
    rangeSelectorItem.prototype._getSpecificActionToolbarItems = function () {
        var _this = this;
        if (this.options.ViewModel.SupportDateTimePeriods) {
            if (this.options.ViewModel.DateTimePeriods.length > 0) {
                var dateTimePeriodNames = this.options.ViewModel.DateTimePeriods.map(function (period) { return (period.Name); });
                dateTimePeriodNames.push(_localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.CustomPeriod));
                return [{
                        menu: {
                            name: caption_toolbar_options_1.dashboardToolbarItemNames.dateTimePeriodMenu,
                            items: dateTimePeriodNames,
                            selectedItems: this.timePeriodMenuSelectedIndex !== undefined ? [dateTimePeriodNames[this.timePeriodMenuSelectedIndex]] : [],
                            selectionMode: 'multiple',
                            itemClick: function (itemData, itemElement, index) {
                                var period, viewModel = _this.options.ViewModel, dateTimePeriods = viewModel.DateTimePeriods;
                                if (index >= 0 && index < dateTimePeriods.length) {
                                    period = dateTimePeriods[index];
                                    _this._setPredefinedPeriod(period, index);
                                }
                                else {
                                    _this._showCustomTimePeriodDialog();
                                }
                            },
                            type: 'list'
                        },
                        icon: _caption_toolbar_css_classes_1.cssClasses.iconTimePeriods,
                        type: 'menu',
                        hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.AddTimePeriod),
                    }];
            }
            else {
                return [{
                        name: caption_toolbar_options_1.dashboardToolbarItemNames.customDateTimePeriod,
                        icon: _caption_toolbar_css_classes_1.cssClasses.iconTimePeriods,
                        type: 'button',
                        hint: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.AddTimePeriod),
                        click: function (element) {
                            _this._showCustomTimePeriodDialog();
                        }
                    }];
            }
        }
        else
            return [];
    };
    rangeSelectorItem.prototype._setPredefinedPeriod = function (period, index) {
        this._periodUpdatingLocked = true;
        this._setRange(_datetime_period_converter_1.DateTimePeriodConverter.toRange(period));
        this._periodUpdatingLocked = false;
        this._setTimePeriodMenuSelectedIndex(index);
    };
    rangeSelectorItem.prototype._showCustomTimePeriodDialog = function () {
        this._getCustomTimePeriodDialog().show({
            range: this._getCurrentRange(),
            groupInterval: this.options.ViewModel.Argument.DateTimeGroupInterval,
            isIntYearGroupInterval: this._isIntYearGroupInterval(),
            displayFormat: this._getSliderMarkerFormat()
        });
    };
    rangeSelectorItem.prototype._setTimePeriodMenuSelectedIndex = function (index) {
        if (this.timePeriodMenuSelectedIndex !== index) {
            this.timePeriodMenuSelectedIndex = index;
            this.predefinedRangeChanged && this.predefinedRangeChanged(this._getCurrentPredefinedRange());
            this.updateCaptionToolbar();
        }
    };
    rangeSelectorItem.prototype._isIntYearGroupInterval = function () {
        var viewModel = this.options.ViewModel, argument = viewModel.Argument;
        return argument && argument.DateTimeGroupInterval === 'Year' && argument.Type !== 'DateTime';
    };
    return rangeSelectorItem;
}(_base_item_1.baseItem));
exports.rangeSelectorItem = rangeSelectorItem;
var rangeFilterSelection = (function () {
    function rangeFilterSelection(range) {
        this.setMinimum(range.startValue);
        this.setMaximum(range.endValue);
    }
    rangeFilterSelection.prototype.getMaximum = function () {
        return this.maximum;
    };
    rangeFilterSelection.prototype.setMaximum = function (value) {
        this.maximum = value;
    };
    rangeFilterSelection.prototype.getMinimum = function () {
        return this.minimum;
    };
    rangeFilterSelection.prototype.setMinimum = function (value) {
        this.minimum = value;
    };
    return rangeFilterSelection;
}());
exports.rangeFilterSelection = rangeFilterSelection;
