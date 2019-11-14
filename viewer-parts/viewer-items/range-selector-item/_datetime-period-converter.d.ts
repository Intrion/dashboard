/**
* DevExpress Dashboard (_datetime-period-converter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export interface IRange {
    startValue: any;
    endValue: any;
}
export interface IEntireRange {
    minimum: any;
    maximum: any;
}
export interface IDateTimePeriod {
    Start: IDateTimePeriodLimit;
    End: IDateTimePeriodLimit;
}
export interface IDateTimePeriodLimit {
    Relative: boolean;
    Interval?: 'Year' | 'Quarter' | 'Month' | 'Day' | 'Hour' | 'Minute' | 'Second';
    Offset?: number;
    Date?: any;
}
export declare class DateTimePeriodConverter {
    static toRange(period: IDateTimePeriod): IRange;
    static _getDateTime(limit: IDateTimePeriodLimit, now: any): any;
}
