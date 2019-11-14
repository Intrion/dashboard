/**
* DevExpress Dashboard (_binding-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataItem, AcceptableShapingType } from '../data-item/data-item';
import { IDataField } from '../data-sources/_data-field';
import * as ko from 'knockout';
import { IBindingProperty } from './binding-property';
import { DataFieldType } from '../enums';
export interface IBindingModelProvider {
    name?: ko.Observable<string>;
    _getBindingModel(): Array<IBindingProperty>;
    _displayNameSeparator?: string;
}
export interface ICollectionBindingProperty extends IBindingProperty {
    creator?: (type?: string, ...args: any[]) => any;
    containersMap?: any;
}
export interface IDataItemProvider {
    _getDataItem: (uniqueName: string) => DataItem;
    _getFinalDataType(dataItemId: string): DataFieldType;
    _createDataItem(dataInfo: IDataField, binding: IBindingProperty): DataItem;
    _updateDataItem(dataItem: DataItem, binding: IBindingProperty, dataField: IDataField, acceptableShapingType: AcceptableShapingType): void;
    _removeDataItem(dataItem: DataItem): void;
    _attachDataItem(targetObject: any, linkPropertyName: string): any;
}
export declare let _areTheSameBindingProviders: (a: IBindingModelProvider, b: IBindingModelProvider) => false | IBindingProperty;
