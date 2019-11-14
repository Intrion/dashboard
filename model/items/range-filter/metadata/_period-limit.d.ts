/**
* DevExpress Dashboard (_period-limit.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { ITypedDashboardSerializationInfo } from '../../../metadata/_base-metadata';
import { FixedDateTimePeriodLimit, FlowDateTimePeriodLimit } from '../../..';
import { DateTimeInterval, DateTimeGroupInterval } from '../../../enums';
import { DashboardLocalizationId } from '../../../../data/localization/_default';
export declare let flowIntervalOrderedValues: Array<DateTimeInterval>;
export declare let flowIntervalValues: {
    [key in DateTimeInterval]: DashboardLocalizationId;
};
export declare function convertDateTimeGroupInterval(groupInterval: DateTimeGroupInterval): DateTimeInterval;
export declare let interval: DxDesigner.Analytics.Utils.ISerializationInfo;
export declare let offset: ITypedDashboardSerializationInfo<FlowDateTimePeriodLimit>;
export declare let flowDateTimePeriodLimitSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
export declare let date: ITypedDashboardSerializationInfo<FixedDateTimePeriodLimit>;
export declare let fixedDateTimePeriodLimitSerializationsInfo: DxDesigner.Analytics.Utils.ISerializationInfoArray;
