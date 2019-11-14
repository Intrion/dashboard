/**
* DevExpress Dashboard (_data-source-browser.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataField, IDataField } from '../model/data-sources/_data-field';
import { Dimension } from '../model/data-item/dimension';
import { DataSource, IDataSourceConsumer } from '../model/data-sources/data-source';
import { CalculatedField } from '../model/data-sources/calculated-field';
import { DashboardItem } from '../model/items/dashboard-item';
import { Parameter } from '../model/parameters/parameter';
import { IDataServiceClient } from './_service-client';
import { DynamicListLookUpSettings } from '../model/parameters/dynamic-list-lookup-settings';
import * as ko from 'knockout';
export interface IFilterItem {
    Level: number;
    Text: string;
    Value: any;
    IsBlank: boolean;
    IsChecked: boolean;
    IsVisible: boolean;
}
export interface IParameterValueViewModel {
    Value: any;
    DisplayText?: any;
}
export interface IFieldConstraint {
    (field: IDataField): boolean;
}
export interface IDataItemValuesProvider {
    findDataField(dataSourceName: string, dataMemberName: string, fullFieldName: string, hasGroupSeparator?: boolean): JQueryPromise<IDataField>;
    getDimensionUniqueValues(dataSourceName: string, dataMember: string, dimension: Dimension): JQueryPromise<Array<any>>;
}
export declare function patchCalcFieldPath(dataSource: DataSource, calculatedField: CalculatedField, fieldName: string): string;
export declare function trimLeadingPathElement(path: string, element: string): string;
export declare function splitFullFieldName(fullFieldName: string): {
    path: string;
    name: string;
};
export declare function isStartedWith(path: any, value: any): boolean;
export declare function findDataMember(dataSource: DataSource, path: string): {
    dataMember: string;
    fieldPath: string;
};
export declare function getFirstDataMember(dataSource: DataSource): string;
export declare class DataSourceBrowser {
    _dataSources: ko.ObservableArray<DataSource>;
    private isDesignMode;
    parameters?: ko.ObservableArray<Parameter>;
    _serviceClient?: ko.Observable<IDataServiceClient>;
    isLoading: ko.Observable<boolean>;
    private _disposables;
    private _dynamicParametersValueCache;
    private _dimensionValuesCache;
    private _fieldsCache;
    private _dataSourcesSubscription;
    _cacheNestedFields(path: string, field: DataField): void;
    private _findInFieldsCache;
    constructor(_dataSources: ko.ObservableArray<DataSource>, isDesignMode: ko.Observable<boolean>, parameters?: ko.ObservableArray<Parameter>, _serviceClient?: ko.Observable<IDataServiceClient>, isLoading?: ko.Observable<boolean>);
    getDimensionFilterItems(dashboardItem: DashboardItem, dimensionDataMember: string, previousState: Array<IFilterItem>, branch: Array<any>): JQueryPromise<Array<IFilterItem>>;
    getDimensionFilterString(dashboardItem: DashboardItem, dimensionDataMember: string, previousState: Array<IFilterItem>): JQueryPromise<string>;
    getDataFieldsArray(dataSourceName: string, dataMember: string, fieldPath: string, filterDelegate?: (field: IDataField) => boolean): JQueryPromise<Array<IDataField>>;
    isFolder(path: string): boolean;
    findPathToFieldInTree(dataSourceName: string, dataMemberName: string, fieldName: string, constraint: IFieldConstraint): JQueryPromise<string>;
    findDataField(dataSourceName: string, dataMemberName: string, fullFieldName: string, separateGroupFields?: boolean): JQueryPromise<IDataField>;
    fuzzyFindFields(startPath: string, searchFor: string): JQueryPromise<Array<{
        path: string;
        field: IDataField;
    }>>;
    findDataSource(dsName: string): DataSource;
    getDataSources(): {
        name: string;
        displayName: string;
    }[];
    getDataMembers(dsc: IDataSourceConsumer): ko.ObservableArray<string>;
    dataMembersSupported(dsc: IDataSourceConsumer): boolean;
    isDataSourceAndDataMemberSet(dsc: IDataSourceConsumer): boolean;
    getDataFields(dsc: IDataSourceConsumer): ko.ObservableArray<string>;
    clearFieldsCache(path: string): void;
    clearDynamicParametersValueCache(): void;
    removeDataSource: (dataSource: DataSource) => void;
    initDataSource(dataSource: DataSource): void;
    dynamicLookUpValuesLoaded: (dynamicListLookUpSettings: DynamicListLookUpSettings) => void;
    getParameterValues(parameterType: string, dynamicListLookUpSettings: DynamicListLookUpSettings): ko.ObservableArray<IParameterValueViewModel>;
    getDimensionUniqueValues(dataSourceName: string, dataMember: string, dimension: Dimension): JQueryPromise<Array<any>>;
    splitFullPath(fullPath?: string): {
        dataSource: string;
        dataMember: string;
        fieldPath: string;
    };
    private _subscribeDataSources;
    private _unsubscribeDataSources;
    dispose(): void;
}
export declare function isNonCollectionDataField(dataField: IDataField): boolean;
