/**
* DevExpress Dashboard (date-filter-widget.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import dxButtonGroup from 'devextreme/ui/button_group';
import dxOverlay from 'devextreme/ui/overlay';
import dxCalendar from 'devextreme/ui/calendar';
import { DatePickerButtons, DateFilterWidgetOptions } from './_date-filter-widget-options';
export declare class DateFilterWidget {
    private boundaryElementContainer;
    private _defaultButtonText;
    private _dropDownContentDiv;
    private _datePickerDiv;
    private _widgetDiv;
    private _scrollableContent;
    private _overlayShown;
    private _lockSelectionEvents;
    private _updateScrollableContainer;
    private _getBtnsContainerScrollWidth;
    _datePickerContent: DatePickerButtons;
    _options: DateFilterWidgetOptions;
    _startDate: Date;
    _endDate: Date;
    _overlay: dxOverlay;
    quickButtons: Array<dxButtonGroup>;
    datePickerButton: dxButtonGroup;
    calendarFrom: dxCalendar;
    calendarTo: dxCalendar;
    constructor(element: HTMLElement, viewerOptions: any, boundaryElementContainer: HTMLElement);
    element(): JQuery<HTMLElement> & Element;
    _update(widgetOptions: DateFilterWidgetOptions): void;
    _getHeight(): number;
    _updateSize(width: number, height: number): void;
    _setSelectedValues(values: any[], periodIndex?: number): void;
    _clearSelectedPeriods(): void;
    _clearSelectedValues(): void;
    _submit(): void;
    private _applyValues;
    private _addDatePicker;
    private _getStartCalendarValue;
    private _getEndCalendarValue;
    private _createDiv;
    private _createButtonDiv;
    private _createDropDownContent;
    private _createDatePicker;
    private _createDesktopCalendar;
    private _createMobileCalendar;
    private _createCalendar;
    private _createTextBox;
    private _createSubmitButton;
    private _processItemClick;
    private _updateDropDownButtonText;
    private _getDefaultOptions;
    private _addClass;
    private _removeClass;
    private _dispose;
    private _getOverlayOptions;
    private _getOverlayWidth;
    private _setDatePickerText;
    private _selectQuickButton;
    private _showPopup;
    private _checkDatePicker;
    private _onDatePickerUnchecked;
    private _performWithLockedEvents;
}
