/**
* DevExpress Dashboard (_data-item-container-seed.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItemLink } from '../../../model/data-item/data-item';
import { DataField } from '../../../model/data-sources/_data-field';
import { ICollectionBindingProperty, IDataItemProvider } from '../../../model/items/_binding-model';
import { IDataItemContainer } from '../_interfaces';
import * as ko from 'knockout';
import { DataItemType, IBindingProperty } from '../../../model/items/binding-property';
export declare class DataItemContainerSeed implements IDataItemContainer {
    dataItemType?: DataItemType;
    constructor(dataItemProvider: IDataItemProvider, dataItemType?: DataItemType);
    name: ko.Observable<string>;
    itemType: ko.Observable<string>;
    dataLink: DataItemLink;
    _getBindingModel(): Array<IBindingProperty>;
    grow(dataItemProvider: IDataItemProvider, bindingProperty: ICollectionBindingProperty, dataField: DataField): Array<IDataItemContainer>;
}
