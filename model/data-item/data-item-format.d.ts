/**
* DevExpress Dashboard (data-item-format.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../serializable-model';
import { DataItemNumericFormatType, DataItemNumericUnit, YearFormat, QuarterFormat, MonthFormat, DayOfWeekFormat, DateFormat, DateTimeFormat, HourFormat, ExactDateFormat } from '../enums';
import * as ko from 'knockout';
export declare class DataItemNumericFormat extends SerializableModel {
    currencyCultureName: ko.Observable<string>;
    formatType: ko.Observable<DataItemNumericFormatType>;
    precision: ko.Observable<number>;
    unit: ko.Observable<DataItemNumericUnit>;
    includeGroupSeparator: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getViewModel(): {
        NumericFormat: {
            CurrencyCulture: string;
            FormatType: DataItemNumericFormatType;
            Precision: number;
            Unit: DataItemNumericUnit;
            IncludeGroupSeparator: boolean;
        };
    };
}
export declare class AbsoluteVariationNumericFormat extends DataItemNumericFormat {
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class PercentVariationNumericFormat extends DataItemNumericFormat {
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class PercentOfTargetNumericFormat extends DataItemNumericFormat {
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class DataItemDateTimeFormat extends SerializableModel {
    yearFormat: ko.Observable<YearFormat>;
    quarterFormat: ko.Observable<QuarterFormat>;
    monthFormat: ko.Observable<MonthFormat>;
    dayOfWeekFormat: ko.Observable<DayOfWeekFormat>;
    dateFormat: ko.Observable<DateFormat>;
    dateHourFormat: ko.Observable<DateTimeFormat>;
    dateHourMinuteFormat: ko.Observable<DateTimeFormat>;
    dateTimeFormat: ko.Observable<DateTimeFormat>;
    hourFormat: ko.Observable<HourFormat>;
    exactDateFormat: ko.Observable<ExactDateFormat>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getViewModel(groupInterval: any): {
        DateTimeFormat: {
            GroupInterval: any;
            YearFormat: YearFormat;
            QuarterFormat: QuarterFormat;
            MonthFormat: MonthFormat;
            DayOfWeekFormat: MonthFormat;
            DateFormat: DateFormat;
            DateHourFormat: DateTimeFormat;
            DateHourMinuteFormat: DateTimeFormat;
            DateTimeFormat: DateTimeFormat;
            HourFormat: DateFormat;
            ExactDateFormat: ExactDateFormat;
        };
    };
}
