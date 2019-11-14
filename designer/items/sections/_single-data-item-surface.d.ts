/**
* DevExpress Dashboard (_single-data-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemLink, DataItem } from '../../../model/data-item/data-item';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { BaseItemSurface } from '../surfaces/_base-item-surface';
import { ISectionInfo, ISectionSurface, IItemsCollection, IDataItemContainer } from '../_interfaces';
import { IFieldConstraint } from '../../../common/_data-source-browser';
import { DataItemSurface } from '../binding-details/_data-item-surface';
import * as ko from 'knockout';
export interface SingleDataItemSurfaceOptions {
    itemSurface: BaseItemSurface<DataDashboardItem>;
    sectionInfo: ISectionInfo;
    warning?: ko.Subscribable<boolean>;
    fieldConstraint?: IFieldConstraint;
}
export declare class SingleDataItemSurface implements ISectionSurface, IItemsCollection {
    private _disposables;
    dataItemLink: DataItemLink;
    itemSurface: BaseItemSurface<DataDashboardItem>;
    sectionInfo: ISectionInfo;
    warning: ko.Subscribable<boolean>;
    fieldConstraint: IFieldConstraint;
    constructor(options: SingleDataItemSurfaceOptions);
    private _removeDataItem;
    removeDataItem: () => void;
    dataItemDisplayNameProvider: (dataItem: DataItem) => string;
    selectDataItem: () => void;
    dataItemSurface: ko.Observable<DataItemSurface>;
    items: ko.ObservableArray<any>;
    relocateItem(item: IDataItemContainer | DataItemLink, placeholderIndex: number): void;
    isOlap(): boolean;
    errorFactory(link: DataItemLink): ko.Observable<boolean>;
    template: string;
    dispose(): void;
}
