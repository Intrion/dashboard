/**
* DevExpress Dashboard (_item-change-subscriber.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { PropertyCategory } from '../../model/metadata/_base-metadata';
import { DashboardItem } from '../../model/items/dashboard-item';
import { DisposableObject, IDisposable } from '../../model/disposable-object';
import { ModelSubscriber, PropertyChangedStatus } from './_model-subscriber';
import { ColorSchemeEntry } from '../../model/colorization/color-scheme-entry';
import { DataSource } from '../../model/data-sources/data-source';
import * as ko from 'knockout';
export declare class ItemChangeSubscriber extends DisposableObject {
    dashboardItem: DashboardItem;
    constructor(dashboardItem: DashboardItem, itemChanged: (category: PropertyCategory) => void);
}
export declare abstract class ComponentArraySubscriber extends DisposableObject {
    private _items;
    private _propertyUniqueName;
    private _subscribers;
    constructor(_items: ko.ObservableArray<DxDesigner.Analytics.Utils.ISerializableModel>, _propertyUniqueName?: string);
    protected itemAdded(item: DxDesigner.Analytics.Utils.ISerializableModel): void;
    protected itemDeleted(item: DxDesigner.Analytics.Utils.ISerializableModel): void;
    protected abstract createSubscriber(item: DxDesigner.Analytics.Utils.ISerializableModel): IDisposable;
    protected _subscribe(item: DxDesigner.Analytics.Utils.ISerializableModel): void;
    protected _unsubscribe(item: DxDesigner.Analytics.Utils.ISerializableModel): void;
    dispose(): void;
}
export interface ISubscriberOptions {
    itemAdded?: (item: any) => void;
    itemDeleted?: (item: any) => void;
    itemChanged: (item: any, changeCategory: PropertyCategory) => void;
}
export declare class ItemsChangeSubscriber extends ComponentArraySubscriber {
    private _options;
    constructor(items: ko.ObservableArray<DashboardItem>, _options: ISubscriberOptions);
    protected itemAdded(item: any): void;
    protected itemDeleted(item: any): void;
    protected createSubscriber(item: DashboardItem): ItemChangeSubscriber;
}
export declare class ColorSchemeSubscriber extends ComponentArraySubscriber {
    private _changed;
    constructor(entries: ko.ObservableArray<ColorSchemeEntry>, _changed: () => void);
    protected createSubscriber(item: any): ModelSubscriber;
    protected itemAdded(item: any): void;
    protected itemDeleted(item: any): void;
}
export declare class DataSourcesSubscriber extends ComponentArraySubscriber {
    private _onDataSourceChanged;
    constructor(dataSources: ko.ObservableArray<DataSource>, _onDataSourceChanged: (args: DataSourceChangedEventArgs) => void);
    protected createSubscriber(dataSource: DxDesigner.Analytics.Utils.ISerializableModel): ModelSubscriber;
    protected itemAdded(dataSource: DxDesigner.Analytics.Utils.ISerializableModel): void;
    protected itemDeleted(dataSource: DxDesigner.Analytics.Utils.ISerializableModel): void;
}
export interface DataSourceChangedEventArgs {
    dataSource: DataSource;
    propertyName?: string;
    model?: any;
    status: PropertyChangedStatus;
    queryName?: string;
    fieldName?: string;
}
