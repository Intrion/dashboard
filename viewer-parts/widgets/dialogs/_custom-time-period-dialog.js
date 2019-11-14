/**
* DevExpress Dashboard (_custom-time-period-dialog.js)
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
var _dialog_form_1 = require("./_dialog-form");
var _localizer_1 = require("../../../data/_localizer");
var _localization_ids_1 = require("../../../data/_localization-ids");
var _dashboard_layout_mode_helper_1 = require("../../_dashboard-layout-mode-helper");
var _format_helper_1 = require("../../../data/_format-helper");
require("devextreme/ui/date_box");
var date_box_1 = require("devextreme/ui/date_box");
var _utils_1 = require("../../_utils");
var customTimePeriodDialogClassNames = {
    emptyButton: 'dx-dashboard-custom-time-period-empty-button',
    leftPeriod: 'dx-dashboard-custom-time-period-dialog-left-period',
    rightPeriod: 'dx-dashboard-custom-time-period-dialog-right-period'
};
var customTimePeriodDialog = (function () {
    function customTimePeriodDialog(options) {
        this.options = options;
        this.setRange = options.setRange;
        this._initialize();
    }
    customTimePeriodDialog.prototype._initialize = function () {
        var _this = this;
        var that = this;
        that.dialogForm = new _dialog_form_1.dialogForm({
            dialogContainer: that.options.container,
            width: 'auto',
            height: 'auto',
            allowScrolling: true,
            deferredRendering: true,
            title: _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.SelectRange),
            buttons: [{
                    className: customTimePeriodDialogClassNames.emptyButton
                }, {
                    name: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonOK),
                    hide: true,
                    func: function () {
                        that.setRange({ startValue: that.leftCalendar.option('value'), endValue: that.rightCalendar.option('value') });
                    },
                    isDefault: true
                }, {
                    name: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonCancel),
                    hide: true,
                    func: function () { }
                }
            ],
            renderContent: function () {
                var form = document.createElement('div');
                form.classList.add(_dialog_form_1.dialogClasses.form);
                var fromText = _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.RangeFilterSelectRangeFromCaption);
                var toText = _localizer_1.localizer.getString(_localization_ids_1.localizationId.labelName.RangeFilterSelectRangeToCaption);
                var leftDate = document.createElement('div');
                leftDate.style.width = '100%';
                var rightDate = document.createElement('div');
                rightDate.style.width = '100%';
                var left = document.createElement('div');
                left.classList.add(customTimePeriodDialogClassNames.leftPeriod);
                var right = document.createElement('div');
                right.classList.add(customTimePeriodDialogClassNames.rightPeriod);
                var options = {
                    pickerType: _dashboard_layout_mode_helper_1.DashboardLayoutModeHelper.isTouch ? 'rollers' : 'calendar',
                    type: that.format,
                    maxZoomLevel: that.maxZoomLevel,
                    displayFormat: that.displayFormatFunc,
                    acceptCustomValue: false,
                    applyButtonText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonOK),
                    cancelButtonText: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.ButtonCancel),
                    placeholder: _localizer_1.localizer.getString(_localization_ids_1.localizationId.buttonNames.SelectDate),
                    dropDownOptions: {
                        container: that.options.container
                    }
                };
                var fromTextSpan = document.createElement('span');
                fromTextSpan.innerText = fromText;
                left.appendChild(fromTextSpan);
                left.appendChild(leftDate);
                that.leftCalendar = new date_box_1.default(leftDate, __assign({}, options, { value: that.range.minimum || new Date() }));
                var toTextSpan = document.createElement('span');
                toTextSpan.innerText = toText;
                right.appendChild(toTextSpan);
                right.appendChild(rightDate);
                that.rightCalendar = new date_box_1.default(rightDate, __assign({}, options, { value: that.range.maximum || new Date() }));
                form.appendChild(left);
                form.appendChild(document.createElement('br'));
                form.appendChild(right);
                return form;
            },
            disposeContent: function () {
                _this.leftCalendar && _this.leftCalendar.dispose();
                _this.rightCalendar && _this.rightCalendar.dispose();
            },
            setActualState: function (width) {
            }
        });
    };
    customTimePeriodDialog.prototype.show = function (options) {
        this.range = options.range;
        if (options.isIntYearGroupInterval && this.range.minimum && this.range.maximum) {
            this.range.minimum = new Date(this.range.minimum, 0, 1);
            this.range.maximum = new Date(this.range.maximum, 0, 1);
        }
        this.format = _utils_1.CalendarHelper.getCalentarType(options.groupInterval);
        this.maxZoomLevel = _utils_1.CalendarHelper.getCalendarMaxZoomLevel(options.groupInterval);
        this.displayFormatFunc = function (value) {
            if (options.isIntYearGroupInterval)
                value = value.getFullYear();
            return _format_helper_1.formatHelper.format(value, options.displayFormat);
        };
        this.dialogForm.showDialog();
    };
    customTimePeriodDialog.prototype.dispose = function () {
        this.dialogForm && this.dialogForm.dispose();
    };
    return customTimePeriodDialog;
}());
exports.customTimePeriodDialog = customTimePeriodDialog;
