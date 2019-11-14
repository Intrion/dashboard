/**
* DevExpress Dashboard (series-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from './data-dashboard-item';
import { DataItemLink } from '../data-item/data-item';
import { Dimension } from '../data-item/dimension';
import * as ko from 'knockout';
export declare abstract class SeriesItem extends DataDashboardItem {
    protected __seriesDimensions: ko.ObservableArray<DataItemLink>;
    seriesDimensions: ko.ObservableArray<Dimension>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _clearBindings(): void;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
}
