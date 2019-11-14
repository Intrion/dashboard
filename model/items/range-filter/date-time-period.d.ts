/**
* DevExpress Dashboard (date-time-period.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { IRange } from '../../../viewer-parts/viewer-items/range-selector-item/_datetime-period-converter';
import { TypedSerializableModel } from '../../serializable-model';
import { LimitContainer } from './limit-container';
import * as ko from 'knockout';
import { DateTimeGroupInterval } from '../../enums';
export declare class DateTimePeriod extends TypedSerializableModel {
    start: LimitContainer;
    end: LimitContainer;
    name: ko.Observable<string>;
    argumentInterval: ko.Observable<DateTimeGroupInterval>;
    _getPeriodTextValue: ko.PureComputed<any>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
    getDateTimeValue(): IRange;
    getDateFormat(): string;
    format(value: Date): any;
}
