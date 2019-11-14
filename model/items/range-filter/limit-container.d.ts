/**
* DevExpress Dashboard (limit-container.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { FixedDateTimePeriodLimit, FlowDateTimePeriodLimit } from './period-limit';
import * as ko from 'knockout';
import { DateTimeGroupInterval, DateTimeInterval } from '../../enums';
export declare class LimitContainer extends SerializableModel {
    fixed: FixedDateTimePeriodLimit;
    flow: FlowDateTimePeriodLimit;
    mode: ko.Observable<"None" | "Fixed" | "Flow">;
    argumentInterval: ko.Observable<DateTimeGroupInterval>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    isEmpty(): boolean;
    getInterval(): DateTimeInterval;
}
