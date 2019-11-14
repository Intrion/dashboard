/**
* DevExpress Dashboard (_data-source-browser-viewmodel.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataSource } from '../../model/data-sources/data-source';
import { CalculatedField } from '../../model/data-sources/calculated-field';
import { SqlDataSource } from '../../model/data-sources/sql-data-source';
import { DataSourceBrowser } from '../../common/_data-source-browser';
import { DisposableObject } from '../../model/disposable-object';
import { CalcFieldEditor } from '../calc-field-editor/_calc-field-editor';
import { DataSourceWizardExtension } from '../data-source-wizard/data-source-wizard-extension';
import { AvailableDataSourcesExtension } from '../extensions/available-data-sources-extension';
import { FieldListItemProvider } from './item-providers/_field-list-item-provider';
import { ToolbarItem } from 'devextreme/ui/popup';
import * as ko from 'knockout';
import { DashboardUpdateHub } from '../../common/dashboard-update-hub/_dashboard-update-hub';
export interface IDataSourceAction {
    click: Function;
    text: string;
    disabled: ko.Computed<boolean>;
}
export interface IEditDataSourceAction {
    click: Function;
    text: string;
    visible: ko.Computed<boolean>;
}
export interface IDataSourceBrowserViewModel {
    selectedDataSource: ko.Observable<DataSource>;
    canEditDataSource: boolean;
    canEditCustomSqlQueries: boolean;
    editQuery(field: string): any;
    removeQuery(field: string): any;
    editCalcField(field: CalculatedField): any;
    removeCalcField(field: CalculatedField): any;
}
export interface IDashboardActionInfo {
    title?: string;
    icon: string;
    click: () => void;
    style?: string;
}
export declare class DataSourceBrowserViewModel extends DisposableObject implements IDataSourceBrowserViewModel {
    dataSourceBrowser: DataSourceBrowser;
    dataSourceWizardExtension: ko.Computed<DataSourceWizardExtension>;
    accessibleDataSourcesExtension: ko.Computed<AvailableDataSourcesExtension>;
    calcFieldEditor: CalcFieldEditor;
    constructor(dataSourceBrowser: DataSourceBrowser, dataSourceWizardExtension: ko.Computed<DataSourceWizardExtension>, accessibleDataSourcesExtension: ko.Computed<AvailableDataSourcesExtension>, updateHub: DashboardUpdateHub);
    _expandQuery(dataSource: SqlDataSource, queryName: string): void;
    editDataSourceActions: ko.ObservableArray<IEditDataSourceAction>;
    readonly canEditDataSource: boolean;
    readonly canEditCustomSqlQueries: boolean;
    addDataSources: (dataSources: DataSource[]) => void;
    refreshFieldList(): void;
    showAddDataSourceForm(): void;
    addQuery: () => void;
    editQuery(queryName: string): void;
    removeQuery(queryName: string): void;
    editDataSource(): void;
    dataSourceActions: ko.ObservableArray<IDataSourceAction>;
    private _removeDataSource;
    removeDataSource: (dataSource: DataSource) => void;
    usedDataSourcesExist: () => boolean;
    availableDataSourcesExist: () => boolean;
    readonly canAddCalculatedField: boolean;
    popupContent: ko.Observable<IPopupContentViewModel>;
    popupVisible: ko.Computed<boolean>;
    addCalculatedField: () => void;
    private _onDataSourcePropertyChanged;
    editCalcField: (field: CalculatedField) => void;
    removeCalcField: (field: CalculatedField) => void;
    itemsProvider: FieldListItemProvider;
    private treeListController;
    selectedPath: ko.Observable<string>;
    selectedDataSource: ko.Observable<DataSource>;
    allowAddQuery: ko.Computed<boolean>;
    allowEditDataSource: ko.Computed<boolean>;
    selectedDataSourceComponentName: ko.Computed<string>;
    filterEditorModel: ko.Computed<DxDesigner.Analytics.Widgets.FilterEditor>;
    editFilter: () => void;
}
export interface IPopupContentViewModel {
    toolbarItems: Array<ToolbarItem>;
    title: string;
    template: string;
    bindingData?: any;
}
