/**
* DevExpress Dashboard (_data-item-container-collection-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemLink, DataItem } from '../../../model/data-item/data-item';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { ISectionSurface, IItemsCollection, ISectionInfo, IDataItemContainer } from '../_interfaces';
import { BaseItemSurface } from '../surfaces/_base-item-surface';
import { IGroupedItemsHolder } from './_data-item-collection-surface';
import * as ko from 'knockout';
export declare class DataItemContainerCollectionSurface implements ISectionSurface, IItemsCollection {
    itemSurface: BaseItemSurface<DataDashboardItem>;
    holder: any;
    sectionInfo: ISectionInfo;
    warning?: ko.Subscribable<boolean>;
    private _disposables;
    constructor(itemSurface: BaseItemSurface<DataDashboardItem>, holder: any, sectionInfo: ISectionInfo, warning?: ko.Subscribable<boolean>);
    groups: ko.Computed<Array<IGroupedItemsHolder>>;
    readonly items: ko.ObservableArray<IDataItemContainer>;
    private _chooseDataField;
    addDataItemContainerClick: () => void;
    selectContainerSample: (dataItemContainer: IDataItemContainer) => void;
    private _removeDataItem;
    removeDataItem: (container: IDataItemContainer) => void;
    dataItemDisplayNameProvider: (dataItem: DataItem) => string;
    getDisplayName: (object: any) => string;
    private _processChangeContainer;
    private getCompatibleTransfers;
    private _processChangeContainerType;
    selectDataItemContainer: (container: IDataItemContainer) => void;
    newContainerSample: ko.Observable<any>;
    template: string;
    relocateItem(item: IDataItemContainer | DataItemLink, placeholderIndex: number): void;
    isOlap(): boolean;
    errorFactory(container: IDataItemContainer): ko.Observable<boolean>;
    dispose(): void;
}
