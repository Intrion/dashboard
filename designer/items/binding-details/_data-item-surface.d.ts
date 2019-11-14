/**
* DevExpress Dashboard (_data-item-surface.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemLink } from '../../../model/data-item/data-item';
import { IDataField } from '../../../model/data-sources/_data-field';
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { IPropertiesHolder, PropertiesController } from '../../_properties-controller';
import { IFieldConstraint, DataSourceBrowser } from '../../../common/_data-source-browser';
import { AccordionTab } from '../../_accordion-tab';
import * as ko from 'knockout';
import { IBindingProperty } from '../../../model/items/binding-property';
import { IDisposable } from '../../../model';
export declare class DataItemSurface implements IDisposable, IPropertiesHolder {
    model: DataItemLink;
    binding: IBindingProperty;
    propertiesController: PropertiesController;
    private unwrappedDataItem;
    fieldConstraint?: IFieldConstraint;
    extendTabsHandler?: (tabs: AccordionTab[], model: any) => void;
    private _disposables;
    private _changeNewField;
    private _changeExistingField;
    readonly folderFieldConstraint: IFieldConstraint;
    readonly fullConstraint: (field: any) => boolean;
    constructor(model: DataItemLink, binding: IBindingProperty, container: DataDashboardItem, dataSourceBrowser: DataSourceBrowser, propertiesController: PropertiesController, unwrappedDataItem: boolean, fieldConstraint?: IFieldConstraint, extendTabsHandler?: (tabs: AccordionTab[], model: any) => void);
    propertiesTabs: ko.ObservableArray<AccordionTab>;
    choosenField: ko.Observable<IDataField>;
    newItemCreated: JQuery.Callbacks<Function>;
    itemSelected: JQuery.Callbacks<Function>;
    dispose(): void;
}
