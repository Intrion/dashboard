﻿/**
* DevExpress Dashboard (_date-filter-widget-options.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateFilterWidgetClassNames = {
    widget: 'dx-dashboard-date-filter-widget',
    buttons: 'dx-dashboard-date-filter-buttons',
    buttonsNoPaddings: 'dx-dashboard-date-filter-buttons-no-caption',
    buttonsLeftToRight: 'dx-dashboard-date-filter-buttons-left-to-right',
    buttonsTopDown: 'dx-dashboard-date-filter-buttons-top-down',
    button: 'dx-dashboard-date-filter-button',
    datePickerButtonEmpty: 'dx-dashboard-date-filter-datepicker-button-empty',
    overlayWrapper: 'dx-dashboard-date-filter-overlay-wrapper',
    overlay: 'dx-dashboard-date-filter-overlay',
    mobile: 'dx-dashboard-date-filter-mobile',
    overlayCalendarContainer: 'dx-dashboard-date-filter-overlay-calendar-container',
    overlayCalendar: 'dx-dashboard-date-filter-overlay-calendar',
    overlayTextBox: 'dx-dashboard-date-filter-overlay-text-box',
    overlayButton: 'dx-dashboard-date-filter-overlay-button'
};
var DateFilterWidgetOptions = (function () {
    function DateFilterWidgetOptions() {
    }
    return DateFilterWidgetOptions;
}());
exports.DateFilterWidgetOptions = DateFilterWidgetOptions;
var DatePickerButtonElement = (function () {
    function DatePickerButtonElement() {
    }
    return DatePickerButtonElement;
}());
exports.DatePickerButtonElement = DatePickerButtonElement;
var DatePickerButtons = (function () {
    function DatePickerButtons() {
        this.showDropDown = false;
        this.checkButton = { key: "Check" };
        this.dropDownButton = { key: "DropDown", icon: "edit" };
    }
    Object.defineProperty(DatePickerButtons.prototype, "text", {
        get: function () {
            return this.checkButton.text;
        },
        set: function (value) {
            this.checkButton.text = value;
        },
        enumerable: true,
        configurable: true
    });
    DatePickerButtons.prototype.getButtons = function () {
        var buttons = [];
        buttons.push(this.checkButton);
        if (this.showDropDown)
            buttons.push(this.dropDownButton);
        return buttons;
    };
    return DatePickerButtons;
}());
exports.DatePickerButtons = DatePickerButtons;
