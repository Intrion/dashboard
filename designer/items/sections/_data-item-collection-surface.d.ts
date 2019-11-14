/**
* DevExpress Dashboard (_data-item-collection-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemLink, DataItem } from '../../../model/data-item/data-item';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { IDataItemContainer, ISectionSurface, IItemsCollection, ISectionInfo } from '../_interfaces';
import { BaseItemSurface } from '../surfaces/_base-item-surface';
import { AccordionTab } from '../../_accordion-tab';
import { DataItemSurface } from '../binding-details/_data-item-surface';
import * as ko from 'knockout';
import { IDisposable } from '../../../model/disposable-object';
export interface IGroupedItemsHolder {
    groupIndex: undefined | number;
    position: number;
    items: Array<DataItemLink | IDataItemContainer>;
}
export declare class DataItemCollectionSurface implements IDisposable, ISectionSurface, IItemsCollection {
    itemSurface: BaseItemSurface<DataDashboardItem>;
    sectionInfo: ISectionInfo;
    extendTabsHandler?: (tabs: AccordionTab[], model: any) => void;
    warning?: ko.Subscribable<boolean>;
    private _disposables;
    dataItems: ko.ObservableArray<DataItemLink>;
    constructor(itemSurface: BaseItemSurface<DataDashboardItem>, sectionInfo: ISectionInfo, extendTabsHandler?: (tabs: AccordionTab[], model: any) => void, warning?: ko.Subscribable<boolean>);
    groups: ko.Computed<Array<IGroupedItemsHolder>>;
    readonly items: ko.ObservableArray<DataItemLink>;
    private _addDataItem;
    addClick: () => void;
    private _removeDataItem;
    removeDataItem: (data: DataItemLink) => void;
    dataItemDisplayNameProvider: (dataItem: DataItem) => string;
    selectDataItem: (data: DataItemLink) => void;
    dataItemSurface: ko.Observable<DataItemSurface>;
    newItemSample: ko.Observable<DataItemLink>;
    relocateItem(item: IDataItemContainer | DataItemLink, placeholderIndex: number): void;
    isOlap(): boolean;
    errorFactory(link: DataItemLink): ko.Observable<boolean>;
    template: string;
    dispose(): void;
}
