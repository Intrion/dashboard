﻿/**
* DevExpress Dashboard (date-filter-widget.js)
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
var date_box_1 = require("devextreme/ui/date_box");
var button_1 = require("devextreme/ui/button");
var button_group_1 = require("devextreme/ui/button_group");
var overlay_1 = require("devextreme/ui/overlay");
var calendar_1 = require("devextreme/ui/calendar");
var _utils_1 = require("../../_utils");
var _formatter_1 = require("../../../data/_formatter");
var _render_helper_1 = require("../../widgets/_render-helper");
var _utils_2 = require("../../../data/_utils");
var string_1 = require("devextreme/core/utils/string");
var index_internal_1 = require("../../../data/index.internal");
var _date_filter_widget_options_1 = require("./_date-filter-widget-options");
var $ = require("jquery");
var fx_1 = require("devextreme/animation/fx");
var DateFilterWidget = (function () {
    function DateFilterWidget(element, viewerOptions, boundaryElementContainer) {
        this.boundaryElementContainer = boundaryElementContainer;
        this._defaultButtonText = index_internal_1.getLocalizationById("DashboardStringId.DateFilterDatePickerButtonDefaultText");
        this._overlayShown = false;
        this._lockSelectionEvents = false;
        this._updateScrollableContainer = function () { };
        this._getBtnsContainerScrollWidth = function () { return 0; };
        this._datePickerContent = new _date_filter_widget_options_1.DatePickerButtons();
        this.quickButtons = [];
        var parent = document.createElement('div');
        element.appendChild(parent);
        this._scrollableContent = _render_helper_1.RenderHelper.wrapScrollable(parent, viewerOptions.useNativeScrolling, viewerOptions.overflow, 'both');
        this._updateScrollableContainer = function () { return _render_helper_1.RenderHelper.updateScrollable(parent); };
    }
    DateFilterWidget.prototype.element = function () {
        return _utils_2.wrapPublicElement(this._scrollableContent);
    };
    DateFilterWidget.prototype._update = function (widgetOptions) {
        var _this = this;
        this._options = __assign({}, this._getDefaultOptions(), widgetOptions);
        this._dispose();
        this._startDate = this._options.startDate;
        this._endDate = this._options.endDate;
        var hasQuickFilters = this._options.buttonsInfo.length > 0;
        var content = this._scrollableContent;
        this._widgetDiv = this._createDiv(content, _date_filter_widget_options_1.dateFilterWidgetClassNames.widget);
        var buttonsDiv = this._createButtonDiv();
        this._getBtnsContainerScrollWidth = function () { return Math.ceil(buttonsDiv.scrollWidth); };
        if (this._options.datePickerLocation == "Near")
            this._addDatePicker(buttonsDiv);
        if (hasQuickFilters) {
            this._options.buttonsInfo.forEach(function (info) {
                var buttonDiv = _this._createDiv(buttonsDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.button);
                var button = new button_group_1.default(buttonDiv, {
                    items: [{ text: info }],
                    selectionMode: 'multiple',
                    focusStateEnabled: false,
                    onSelectionChanged: function (e) {
                        if (!_this._lockSelectionEvents) {
                            if (e.removedItems.length > 0)
                                _this._options.clearAction();
                            if (e.addedItems.length > 0) {
                                _this._selectQuickButton(e.component);
                                _this._options.buttonClick(e.component.option('items')[0].text);
                            }
                        }
                    }
                });
                _this.quickButtons.push(button);
            });
        }
        if (this._options.datePickerLocation == "Far")
            this._addDatePicker(buttonsDiv);
        var overlayDiv = this._createDiv(this._widgetDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.overlayWrapper);
        this._createDropDownContent();
        this._overlay = new overlay_1.default(overlayDiv, this._getOverlayOptions());
        this._updateDropDownButtonText();
    };
    DateFilterWidget.prototype._getHeight = function () {
        return this._widgetDiv.offsetHeight;
    };
    DateFilterWidget.prototype._updateSize = function (width, height) {
        this._widgetDiv.style.height = "auto";
        if (this._options.arrangementMode === "Vertical") {
            this._widgetDiv.style.height = height + "px";
            this._widgetDiv.style.width = width + "px";
            var btnsContainerWidth = this._getBtnsContainerScrollWidth();
            var negativeBtnsContainerMargin = this._options.hasOuterMargin ? 0 : 6;
            if (btnsContainerWidth - Math.ceil(width) - negativeBtnsContainerMargin > 0) {
                this._widgetDiv.style.width = btnsContainerWidth + "px";
            }
            this._updateScrollableContainer();
        }
        else
            this._widgetDiv.style.width = width + "px";
    };
    DateFilterWidget.prototype._setSelectedValues = function (values, periodIndex) {
        if (periodIndex == null) {
            if (values != null && values.length > 0) {
                this._startDate = values[0];
                this._endDate = values[1];
                this._checkDatePicker(true);
            }
            else {
                this._checkDatePicker(false);
            }
            this._updateDropDownButtonText();
        }
        var buttons = this.quickButtons;
        if (periodIndex != null && periodIndex < buttons.length) {
            var button = buttons[periodIndex];
            button.option('selectedItems', button.option('items'));
        }
    };
    DateFilterWidget.prototype._clearSelectedPeriods = function () {
        var _this = this;
        this._performWithLockedEvents(function () {
            var buttons = _this.quickButtons;
            for (var i = 0; i < buttons.length; i++) {
                buttons[i].option('selectedItems', []);
            }
        });
    };
    DateFilterWidget.prototype._clearSelectedValues = function () {
        this._setSelectedValues([]);
        this._clearSelectedPeriods();
    };
    DateFilterWidget.prototype._submit = function () {
        var filterType = this._options.filterType;
        if (filterType === "After") {
            this._startDate = this.calendarFrom.option("value");
            this._endDate = null;
        }
        if (filterType === "Before") {
            this._startDate = null;
            this._endDate = this.calendarTo.option("value");
        }
        if (filterType === "Exact") {
            this._startDate = this.calendarFrom.option("value");
            this._endDate = this.calendarFrom.option("value");
        }
        if (filterType === "Between") {
            this._startDate = this.calendarFrom.option("value");
            this._endDate = this.calendarTo.option("value");
        }
        this._applyValues();
        this._overlay.hide();
        this._updateDropDownButtonText();
    };
    DateFilterWidget.prototype._applyValues = function () {
        var _this = this;
        this._processItemClick([this._startDate, this._endDate]);
        this._performWithLockedEvents(function () {
            for (var i = 0; i < _this.quickButtons.length; i++) {
                _this.quickButtons[i].option('selectedItems', []);
            }
            _this._checkDatePicker(true);
        });
    };
    DateFilterWidget.prototype._addDatePicker = function (parentElement) {
        var _this = this;
        this._datePickerDiv = this._createDiv(parentElement, _date_filter_widget_options_1.dateFilterWidgetClassNames.button);
        this.datePickerButton = new button_group_1.default(this._datePickerDiv, {
            items: this._datePickerContent.getButtons(),
            focusStateEnabled: false,
            keyExpr: "key",
            selectionMode: 'multiple',
            onSelectionChanged: function (e) {
                if (!_this._lockSelectionEvents) {
                    if (e.removedItems.length > 0 && e.removedItems[0].key === "Check") {
                        _this._onDatePickerUnchecked();
                    }
                    var clickedButton = e.addedItems[0];
                    if (clickedButton) {
                        if (clickedButton.key === "DropDown") {
                            _this._showPopup();
                        }
                        if (clickedButton.key === "Check") {
                            if (_this._startDate == null && _this._endDate == null) {
                                e.component.option("selectedItemKeys", []);
                                _this._showPopup();
                            }
                            else {
                                _this._applyValues();
                            }
                        }
                        var selection = e.component.option("selectedItemKeys");
                        selection = selection.filter(function (key) { return key !== "DropDown"; });
                        e.component.option("selectedItemKeys", selection);
                    }
                }
            }
        });
    };
    DateFilterWidget.prototype._getStartCalendarValue = function () {
        return this._startDate || this._options.minimum;
    };
    DateFilterWidget.prototype._getEndCalendarValue = function () {
        return this._endDate || this._options.maximum;
    };
    DateFilterWidget.prototype._createDiv = function (container) {
        var _this = this;
        var classes = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            classes[_i - 1] = arguments[_i];
        }
        var div = document.createElement('div');
        if (container != null)
            container.appendChild(div);
        classes.forEach(function (className) { return _this._addClass(div, className); });
        return div;
    };
    DateFilterWidget.prototype._createButtonDiv = function () {
        var classNames = [_date_filter_widget_options_1.dateFilterWidgetClassNames.buttons];
        if (this._options.arrangementMode === "Vertical")
            classNames.push(_date_filter_widget_options_1.dateFilterWidgetClassNames.buttonsTopDown);
        else
            classNames.push(_date_filter_widget_options_1.dateFilterWidgetClassNames.buttonsLeftToRight);
        if (!this._options.hasOuterMargin)
            classNames.push(_date_filter_widget_options_1.dateFilterWidgetClassNames.buttonsNoPaddings);
        return this._createDiv.apply(this, [this._widgetDiv].concat(classNames));
    };
    DateFilterWidget.prototype._createDropDownContent = function () {
        var _this = this;
        var filterType = this._options.filterType;
        this._dropDownContentDiv = this._createDiv(null, _date_filter_widget_options_1.dateFilterWidgetClassNames.overlay);
        if (this._options.mobileLayout)
            this._addClass(this._dropDownContentDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.mobile);
        var createCalendar1 = function (withButton) {
            _this.calendarFrom = _this._createDatePicker(_this._dropDownContentDiv, function (value) { _this._startDate = value; }, withButton);
        };
        var createCalendar2 = function (withButton) {
            _this.calendarTo = _this._createDatePicker(_this._dropDownContentDiv, function (value) { _this._endDate = value; }, withButton);
        };
        if (filterType === "Between") {
            createCalendar1(false);
            createCalendar2(true);
        }
        else if (filterType === "Before")
            createCalendar2(true);
        else
            createCalendar1(true);
    };
    DateFilterWidget.prototype._createDatePicker = function (containerDiv, setDate, createButton) {
        if (this._options.mobileLayout)
            return this._createMobileCalendar(containerDiv, setDate, createButton);
        return this._createDesktopCalendar(containerDiv, createButton);
    };
    DateFilterWidget.prototype._createDesktopCalendar = function (containerDiv, createButton) {
        var div = this._createDiv(containerDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.overlayCalendarContainer);
        var calendar = this._createCalendar(div, function (e) {
            textBox.option("value", e.value);
        });
        var textBoxValueChanged = function (value) {
            calendar.option("value", value);
        };
        var textBox = this._createTextBox(div, textBoxValueChanged);
        if (createButton)
            this._createSubmitButton(div);
        return calendar;
    };
    DateFilterWidget.prototype._createMobileCalendar = function (containerDiv, setDate, createButton) {
        var div = this._createDiv(containerDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.overlayCalendarContainer);
        var textBoxValueChanged = function (value) {
            setDate(value);
        };
        var textBox = this._createTextBox(div, textBoxValueChanged);
        if (createButton)
            this._createSubmitButton(div);
        return textBox;
    };
    DateFilterWidget.prototype._createCalendar = function (containerDiv, valueChanged) {
        var div = this._createDiv(containerDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.overlayCalendar);
        return new calendar_1.default(div, {
            focusStateEnabled: false,
            maxZoomLevel: _utils_1.CalendarHelper.getCalendarMaxZoomLevel(this._options.groupInterval),
            onValueChanged: valueChanged
        });
    };
    DateFilterWidget.prototype._createTextBox = function (containerDiv, textBoxValueChanged) {
        var div = this._createDiv(containerDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.overlayTextBox);
        return new date_box_1.default(div, {
            width: "auto",
            useMaskBehavior: true,
            displayFormat: "shortdate",
            showDropDownButton: false,
            type: "date",
            onValueChanged: function (e) {
                textBoxValueChanged(e.value);
            }
        });
    };
    DateFilterWidget.prototype._createSubmitButton = function (containerDiv) {
        var _this = this;
        var div = this._createDiv(containerDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.overlayButton);
        return new button_1.default(div, {
            text: index_internal_1.getLocalizationById("DashboardStringId.ButtonApply"),
            onClick: function (e) {
                _this._submit();
            }
        });
    };
    DateFilterWidget.prototype._processItemClick = function (values) {
        this._options.valueChanged && this._options.valueChanged(values);
    };
    DateFilterWidget.prototype._updateDropDownButtonText = function () {
        var start = this._startDate;
        var end = this._endDate;
        if (this.datePickerButton) {
            if (start || end) {
                var formatHandler = this._options.format;
                var startText = start ? formatHandler(start) : null;
                var endText = end ? formatHandler(end) : null;
                var formatPatten = this._options.displayTextPattern;
                if (!formatPatten) {
                    var defaultPatternFrom = index_internal_1.getLocalizationById("DashboardStringId.FromDatePeriodCaption");
                    var defaultPatternTo = index_internal_1.getLocalizationById("DashboardStringId.ToDatePeriodCaption");
                    var defaultPatternRange = index_internal_1.getLocalizationById("DashboardStringId.FromToDatePeriodCaption");
                    this._setDatePickerText(_formatter_1.constructIntervalFilterText({ range: defaultPatternRange, from: defaultPatternFrom, to: defaultPatternTo }, { left: startText, right: endText }), true);
                }
                else
                    this._setDatePickerText(string_1.format(formatPatten, startText, endText), true);
            }
            else {
                this._setDatePickerText(this._defaultButtonText, false);
            }
        }
    };
    DateFilterWidget.prototype._getDefaultOptions = function () {
        return {
            arrangementMode: "AutoHeight",
            filterType: "Between",
            datePickerLocation: "Far",
            buttonsInfo: [],
            displayTextPattern: index_internal_1.getLocalizationById("DashboardStringId.FromToDatePeriodCaption"),
            groupInterval: "DayMonthYear",
            format: function (value) { return value.toString(); }
        };
    };
    DateFilterWidget.prototype._addClass = function (el, className) {
        el.classList.add(className);
    };
    DateFilterWidget.prototype._removeClass = function (el, className) {
        el.classList.remove(className);
    };
    DateFilterWidget.prototype._dispose = function () {
        if (this.calendarFrom) {
            this.calendarFrom.dispose();
            this.calendarFrom = null;
        }
        if (this.calendarTo) {
            this.calendarTo.dispose();
            this.calendarTo = null;
        }
        this._scrollableContent.innerHTML = '';
        if (this.datePickerButton != null) {
            this.datePickerButton.dispose();
            this.datePickerButton = null;
        }
        for (var i = 0; i < this.quickButtons.length; i++)
            this.quickButtons[i].dispose();
        this.quickButtons = [];
        if (this._overlay) {
            this._overlay.dispose();
            this._overlay = null;
        }
    };
    DateFilterWidget.prototype._getOverlayOptions = function () {
        var _this = this;
        var that = this;
        return {
            container: that.boundaryElementContainer,
            animation: false,
            width: this._getOverlayWidth(),
            height: 'auto',
            position: {
                collision: "flip",
                my: "top left",
                at: "bottom left",
                of: that._datePickerDiv
            },
            onHidden: function (e) {
                that._overlayShown = false;
            },
            contentTemplate: function (contentElement) {
                _utils_2.$unwrap(contentElement).appendChild(_this._dropDownContentDiv);
            },
            closeOnOutsideClick: true
        };
    };
    DateFilterWidget.prototype._getOverlayWidth = function () {
        if (this._options.mobileLayout)
            return function () { return $(window).width() * 0.9; };
        return 'auto';
    };
    DateFilterWidget.prototype._setDatePickerText = function (text, showDropDown) {
        if (!showDropDown)
            this._addClass(this._datePickerDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.datePickerButtonEmpty);
        else
            this._removeClass(this._datePickerDiv, _date_filter_widget_options_1.dateFilterWidgetClassNames.datePickerButtonEmpty);
        this._datePickerContent.showDropDown = showDropDown;
        this._datePickerContent.text = text;
        this.datePickerButton.option("items", this._datePickerContent.getButtons());
    };
    DateFilterWidget.prototype._selectQuickButton = function (button) {
        var _this = this;
        this._performWithLockedEvents(function () {
            _this._checkDatePicker(false);
            for (var i = 0; i < _this.quickButtons.length; i++) {
                if (button != _this.quickButtons[i])
                    _this.quickButtons[i].option('selectedItems', []);
            }
        });
    };
    DateFilterWidget.prototype._showPopup = function () {
        this._overlayShown = !this._overlayShown;
        this._overlay.toggle(this._overlayShown);
        fx_1.default.off = true;
        this.calendarFrom && this.calendarFrom.option("value", this._getStartCalendarValue());
        this.calendarTo && this.calendarTo.option("value", this._getEndCalendarValue());
        fx_1.default.off = false;
    };
    DateFilterWidget.prototype._checkDatePicker = function (check) {
        if (this.datePickerButton) {
            if (check && this.datePickerButton.option('selectedItemKeys')[0] !== "Check") {
                this.datePickerButton.option('selectedItemKeys', ["Check"]);
            }
            else if (!check && this.datePickerButton.option('selectedItemKeys').length !== 0) {
                this.datePickerButton.option('selectedItemKeys', []);
            }
        }
    };
    DateFilterWidget.prototype._onDatePickerUnchecked = function () {
        if (this.quickButtons.every(function (button) { return button.option("selectedItemKeys").length === 0; }))
            this._options.clearAction();
    };
    DateFilterWidget.prototype._performWithLockedEvents = function (action) {
        this._lockSelectionEvents = true;
        try {
            action();
        }
        finally {
            this._lockSelectionEvents = false;
        }
    };
    return DateFilterWidget;
}());
exports.DateFilterWidget = DateFilterWidget;
