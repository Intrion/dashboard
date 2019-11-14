/**
* DevExpress Dashboard (_expression-editor-item-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { IDataField } from '../../model/data-sources/_data-field';
import { DataSource } from '../../model/data-sources/data-source';
import { Parameter } from '../../model/parameters/parameter';
import { KnockoutEntry } from '../../model/internal/_knockout-utils';
export interface IDataFieldsProvider {
    getDataFieldsArray: (dataSourceName: string, dataMember: string, fieldPath: string, filterDelegate: (field: IDataField) => boolean) => JQueryPromise<Array<IDataField>>;
    findDataSource: (dsName: string) => DataSource;
}
export declare class ExpressionEditorItemsProvider implements DxDesigner.Analytics.Utils.IItemsProvider {
    private dataFieldProvider;
    private parameters;
    private dataSourceName;
    private dataMember;
    private filterPredicate;
    constructor(dataFieldProvider: IDataFieldsProvider, parameters: Parameter[], dataSourceName: KnockoutEntry<string>, dataMember: KnockoutEntry<string>, filterPredicate?: (field?: any) => boolean);
    getItems(pathRequest: DxDesigner.Analytics.Utils.IPathRequest): JQuery.Promise<DxDesigner.Analytics.Utils.IDataMemberInfo[], any, any>;
}
