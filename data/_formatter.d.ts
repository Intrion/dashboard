/**
* DevExpress Dashboard (_formatter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare let defaultNumericFormat: {
    format: string;
    unitPower: string;
    precision: number;
    significantDigits: number;
};
export declare let defaultPercentFormat: {
    format: string;
    unitPower: number;
    precision: number;
    significantDigits: number;
    showTrailingZeros: boolean;
};
export declare let defaultScientificFormat: {
    format: string;
    precision: number;
};
export declare let _types: {
    Abbreviated: string;
    Full: string;
    Long: string;
    Numeric: string;
    Short: string;
    TimeOnly: string;
};
export declare function format(value: any, formatViewModel: any): any;
export declare function formatFilterValue(filterValue: any): any;
export declare function constructIntervalFilterText(patterns: {
    from: string;
    to: string;
    range: string;
}, rangeText: {
    left: string;
    right: string;
}): any;
export declare function formatNumeric(value: any, numericFormatViewModel: any): any;
export declare function formatDateTime(value: any, dateFormatViewModel: any): any;
export declare function formatObject(value: any): any;
export declare function formatPercentValue(value: any): any;
export declare function formatScientificAxisValue(value: any): any;
export declare function formatAxisValue(value: any, axisMin: any, axisMax: any): any;
export declare function getAxisFormat(axisMin: any, axisMax: any): {
    format: string;
    unitPower: any;
    precision: any;
    significantDigits: number;
    showTrailingZeros: boolean;
};
export declare function calculateUnitPower(axisMin: any, axisMax: any): 1 | 0 | 2 | 3;
export declare function calculatePrecision(axisMin: any, axisMax: any): number;
export declare function convertToFormat(formatViewModel: any): any;
export declare function _convertToNumberFormat(numericFormatViewModel: any): any;
export declare function _convertToDateFormat(dateFormatViewModel: any): {
    format: any;
    dateType: any;
};
export declare function _getSyntheticDateTimeGroupInterval(groupInterval: any, exactDateFormat: any): any;
export declare function _convertNumericFormat(formatType: any): "exponential" | "currency" | "fixedPoint" | "percent";
export declare function _convertNumericUnit(numericUnit: any): string | number;
