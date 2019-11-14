/**
* DevExpress Dashboard (_data-item-container-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemLink, DataItem } from '../../../model/data-item/data-item';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { IBindingModelProvider } from '../../../model/items/_binding-model';
import { IPropertiesHolder } from '../../_properties-controller';
import { IDataItemHolder, IDataItemContainer, IDetailsPropertiesComposer } from '../_interfaces';
import { BaseItemSurface } from '../surfaces/_base-item-surface';
import { AccordionTab } from '../../_accordion-tab';
import { DataItemSurface } from './_data-item-surface';
import * as ko from 'knockout';
import { IBindingProperty } from '../../../model/items/binding-property';
import { IDisposable } from '../../../model';
export declare class DataItemContainerSurface implements IDisposable, IPropertiesHolder, IDataItemHolder {
    detailsPropertiesComposer: IDetailsPropertiesComposer<any>;
    itemSurface: BaseItemSurface<DataDashboardItem>;
    private _removeDataItemContainer;
    private _disposables;
    constructor(model: IDataItemContainer, detailsPropertiesComposer: IDetailsPropertiesComposer<any>, itemSurface: BaseItemSurface<DataDashboardItem>, _removeDataItemContainer: (container: IDataItemContainer) => void);
    propertiesTabs: ko.ObservableArray<AccordionTab>;
    selectItem: (model: IBindingModelProvider, binding: IBindingProperty) => void;
    model: ko.Observable<IDataItemContainer>;
    containerType: ko.Observable<string>;
    singleItemSurface: ko.Observable<DataItemSurface>;
    dataFieldChoosed: JQuery.Callbacks<Function>;
    private _removeDataItem;
    removeDataItem: (dataItemLink: DataItemLink) => void;
    dataItemDisplayNameProvider: (dataItem: DataItem) => string;
    dataItemErrorFactory(dataItem: DataItem): ko.Observable<boolean>;
    dispose(): void;
}
