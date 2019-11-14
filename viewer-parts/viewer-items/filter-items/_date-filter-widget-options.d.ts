/**
* DevExpress Dashboard (_date-filter-widget-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare type DateFilterType = 'Between' | 'After' | 'Before' | 'Exact';
export declare type DateFilterArrangementMode = 'AutoHeight' | 'Horizontal' | 'Vertical';
export declare type DatePickerLocation = 'Far' | 'Near' | 'Hidden';
export declare type VisibleComponents = 'All' | 'DatePicker' | 'QuickFilters';
export declare let dateFilterWidgetClassNames: {
    widget: string;
    buttons: string;
    buttonsNoPaddings: string;
    buttonsLeftToRight: string;
    buttonsTopDown: string;
    button: string;
    datePickerButtonEmpty: string;
    overlayWrapper: string;
    overlay: string;
    mobile: string;
    overlayCalendarContainer: string;
    overlayCalendar: string;
    overlayTextBox: string;
    overlayButton: string;
};
export interface DateFilterViewModel {
    FilterType: DateFilterType;
    ArrangementMode: DateFilterArrangementMode;
    DatePickerLocation: DatePickerLocation;
    DisplayTextPattern: string;
    DateTimePeriods: Array<DateTimePeriodViewModel>;
    GroupInterval: any;
    DateTimeFormat: DateTimeFormatViewModel;
    MinimumId: string;
    MaximumId: string;
}
export interface DateTimePeriodViewModel {
    Name: string;
}
export interface DateTimeFormatViewModel {
}
export declare class DateFilterWidgetOptions {
    filterType?: DateFilterType;
    arrangementMode?: DateFilterArrangementMode;
    datePickerLocation?: DatePickerLocation;
    displayTextPattern?: string;
    groupInterval?: any;
    format?: (value: any) => string;
    valueChanged?: (values: any[]) => void;
    buttonClick?: (name: string) => void;
    buttonsInfo?: string[];
    startDate?: Date;
    endDate?: Date;
    minimum?: Date;
    maximum?: Date;
    clearAction?: () => void;
    hasOuterMargin?: boolean;
    mobileLayout?: boolean;
}
export declare class DatePickerButtonElement {
    text?: string;
    icon?: string;
    key: string;
}
export declare class DatePickerButtons {
    private dropDownButton;
    checkButton: DatePickerButtonElement;
    showDropDown: boolean;
    text: string;
    constructor();
    getButtons(): DatePickerButtonElement[];
}
