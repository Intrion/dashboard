/**
* DevExpress Dashboard (kpi-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SeriesItem } from '../series-item';
import { DashboardItemInteractivityOptions } from '../options/interactivity-options';
import { ContentArrangementMode } from '../../enums';
import * as ko from 'knockout';
export declare abstract class KpiItem extends SeriesItem {
    interactivityOptions: DashboardItemInteractivityOptions;
    contentArrangementMode: ko.Observable<ContentArrangementMode>;
    contentLineCount: ko.Observable<number>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getMasterFilterMode(): string;
    protected _getDrillDownEnabled(): boolean;
    protected _getIgnoreMasterFilter(): boolean;
}
