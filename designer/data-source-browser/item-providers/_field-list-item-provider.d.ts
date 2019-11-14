/**
* DevExpress Dashboard (_field-list-item-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { IDataField } from '../../../model/data-sources/_data-field';
import { IDataSourceBrowserViewModel } from '../_data-source-browser-viewmodel';
import * as ko from 'knockout';
export declare class DataFieldViewModel implements DxDesigner.Analytics.Utils.IDataMemberInfo {
    name: string;
    displayName: string;
    hasItems: boolean;
    specifics: string;
    field: IDataField;
    isList: boolean;
    constructor(name: string, displayName: string, hasItems: boolean, specifics: string, field: IDataField, isList: boolean);
    style: string;
    innerActions: ko.ObservableArray<IDataFieldViewModelAction>;
}
export interface IDataFieldViewModelAction {
    click: () => void;
    icon: string;
    style?: string;
}
export declare class FieldListItemProvider implements DxDesigner.Analytics.Utils.IItemsProvider {
    private _dataSourceBrowserViewModel;
    private _getDataFieldArrayCallback;
    private isFieldValid?;
    loading: ko.Observable<boolean>;
    private _changeTrigger;
    constructor(_dataSourceBrowserViewModel: IDataSourceBrowserViewModel, _getDataFieldArrayCallback: (dataSourceName: string, dataMember: string, fieldPath: string) => JQueryPromise<Array<IDataField>>, isFieldValid?: (field: IDataField) => boolean);
    triggerItemsChanged(): void;
    getItems(pathRequest: DxDesigner.Analytics.Utils.IPathRequest): JQueryPromise<Array<DxDesigner.Analytics.Utils.IDataMemberInfo>>;
    customizeDataFieldViewModel: (dataField: DataFieldViewModel) => void;
}
