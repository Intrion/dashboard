/**
* DevExpress Dashboard (chart-item-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SeriesItem } from './series-item';
import { DataItemLink } from '../data-item/data-item';
import { Dimension } from '../data-item/dimension';
import * as ko from 'knockout';
import { TargetDimensions } from '../enums';
import { ItemDataAxisName } from '../../data';
import { ChartInteractivityOptions } from './options/interactivity-options';
export declare abstract class ChartItemBase extends SeriesItem {
    protected __arguments: ko.ObservableArray<DataItemLink>;
    arguments: ko.ObservableArray<Dimension>;
    interactivityOptions: ChartInteractivityOptions;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfo[];
    _clearBindings(): void;
    protected _getInteractivityDimensionLinks(): DataItemLink[];
    protected _getTargetDimensions(): TargetDimensions;
    _getItemDataAxis(): ItemDataAxisName;
    _getCurrentFilterValues(): any[];
    _itemInteractivityByColumnAxis(): boolean;
    _getInteractivityAxisDimensionCount(): number;
    protected _getCanColorByMeasures(): boolean;
    protected _getCanColorByDimensions(): boolean;
    _getColorizableDataItemsInfo(): Array<{
        items: Array<DataItemLink>;
        prefixId: string;
    }>;
}
