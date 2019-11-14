/**
* DevExpress Dashboard (_interfaces.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ICollectionBindingProperty, IBindingModelProvider } from '../../model/items/_binding-model';
import { DataItem, DataItemLink } from '../../model/data-item/data-item';
import { AccordionTab } from '../_accordion-tab';
import * as ko from 'knockout';
import { IBindingProperty } from '../../model/items/binding-property';
import { IDisposable } from '../../model';
import { DashboardLocalizationId } from '../../data/localization/_default';
export interface ISectionSurface extends IDisposable {
    template: string;
}
export interface ISectionInfo {
    title: DashboardLocalizationId;
    bindingProperty?: ICollectionBindingProperty;
    detailsPropertiesComposer?: IDetailsPropertiesComposer<any>;
    actions?: {
        title: string;
        icon: string;
        action: () => void;
    }[];
}
export interface IDataItemHolder {
    selectItem(holder: any, binding: IBindingProperty): any;
    dataItemDisplayNameProvider(item: DataItem): string;
    removeDataItem(dataItemLink: DataItemLink): any;
}
export interface IItemsCollection {
    items: ko.ObservableArray<any>;
    relocateItem: (item: IDataItemContainer | DataItemLink, placeholderIndex: number) => void;
    isOlap: () => boolean;
}
export interface IDataItemContainer extends IBindingModelProvider {
    itemType?: ko.Observable<string>;
    seriesType?: ko.Observable<string>;
    grabFrom?: (container: IDataItemContainer) => void;
}
export interface IDetailsPropertiesComposer<T> {
    composeTabs(model: T, ...args: any[]): Array<AccordionTab>;
}
