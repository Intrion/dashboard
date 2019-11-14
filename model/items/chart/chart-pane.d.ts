/**
* DevExpress Dashboard (chart-pane.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { ChartSeries } from './chart-series';
import { ChartAxisY, ChartSecondaryAxisY } from './chart-axis';
import * as ko from 'knockout';
import { DataDashboardItem } from '../data-dashboard-item';
export declare class ChartPane extends SerializableModel {
    name: ko.Observable<string>;
    series: ko.ObservableArray<ChartSeries>;
    primaryAxisY: ChartAxisY;
    secondaryAxisY: ChartSecondaryAxisY;
    createSeriesByViewType: (seriesViewType: string) => ChartSeries;
    constructor(dataItemProvider: DataDashboardItem, dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
