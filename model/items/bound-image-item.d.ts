/**
* DevExpress Dashboard (bound-image-item.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataDashboardItem } from './data-dashboard-item';
import { Dimension } from '../data-item/dimension';
import { DashboardItemBaseInteractivityOptions } from './options/interactivity-options';
import { ImageDataBindingMode } from '../enums';
import * as ko from 'knockout';
export declare class BoundImageItem extends DataDashboardItem {
    private __imageItem;
    imageItem: ko.Observable<Dimension>;
    interactivityOptions: DashboardItemBaseInteractivityOptions;
    sizeMode: ko.Observable<string>;
    horizontalAlignment: ko.Observable<string>;
    verticalAlignment: ko.Observable<string>;
    dataBindingMode: ko.Observable<ImageDataBindingMode>;
    uriPattern: ko.Observable<string>;
    constructor(dashboardItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _isCalculationSupported(): boolean;
    _isSortingEnabled(): boolean;
    _isTopNEnabled(dataItem: Dimension): boolean;
    protected _getDefaultItemType(): string;
    protected _getIgnoreMasterFilter(): boolean;
    protected _updateContentViewModel(content: any): void;
}
