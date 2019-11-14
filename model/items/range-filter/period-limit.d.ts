/**
* DevExpress Dashboard (period-limit.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import * as ko from 'knockout';
import { DateTimeInterval, DateTimeGroupInterval } from '../../enums';
export declare class FixedDateTimePeriodLimit extends SerializableModel {
    date: ko.Observable<Date>;
    isEmpty: ko.Observable<boolean>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getDateTimeValue(): Date;
}
export declare class FlowDateTimePeriodLimit extends SerializableModel {
    interval: ko.Observable<DateTimeInterval>;
    offset: ko.Observable<number>;
    isEmpty: ko.Observable<boolean>;
    argumentInterval: ko.Observable<DateTimeGroupInterval>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getAvailableIntervals(): DxDesigner.Analytics.Utils.IDisplayedValue[];
}
