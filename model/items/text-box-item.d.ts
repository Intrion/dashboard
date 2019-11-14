/**
* DevExpress Dashboard (text-box-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from './data-dashboard-item';
import { Measure } from '../data-item/measure';
import { DashboardItemBaseInteractivityOptions } from './options/interactivity-options';
import * as ko from 'knockout';
export declare class TextBoxItem extends DataDashboardItem {
    private __values;
    values: ko.ObservableArray<Measure>;
    text: ko.Observable<string>;
    interactivityOptions: DashboardItemBaseInteractivityOptions;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _clearBindings(): void;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _isCalculationSupported(): boolean;
    protected _getDefaultItemType(): string;
    protected _getIgnoreMasterFilter(): boolean;
}
