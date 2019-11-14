/**
* DevExpress Dashboard (data-source-wizard-extension.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { IExtension } from '../../common/common-interfaces';
import { DataSource } from '../../model/data-sources/data-source';
import { DashboardRequestWrapper } from './models/_data-source-wizard-model';
import { DashboardQueryWizard } from './wizards/_edit-query-wizard';
import { EditJsonDataSourceWizard } from './wizards/_edit-json-data-source-wizard';
import { DashboardControl } from '../../common/dashboard-control';
import { SqlDataSource } from '../../model/data-sources/sql-data-source';
import { Parameter } from '../../model/parameters/parameter';
import { Dashboard } from '../../model/dashboard';
import { JsonDataSource } from '../../model/data-sources/json-data-source';
import { IDashboardDataSourceWizardConnectionStrings } from './models/data-source-wizard-model';
import * as ko from 'knockout';
export interface DataSourceWizardExtensionOptions {
    enableCustomSql?: boolean;
    canCreateNewJsonDataSource?: boolean;
    wizardSettings?: IDashboardDataSourceWizardSettings;
    onCustomizeDataSourceWizard?: (args: IDashboardWizardEventArgs) => void;
}
export interface IDashboardDataSourceWizardSettings extends DxQueryBuilder.Analytics.Wizard.IDataSourceWizardSettings {
    enableOlapDataSource?: boolean;
}
export declare type DataSourceWizardType = "EditQueryWizard" | "EditJsonDataSourceWizard" | "DataSourceWizard" | "MultiQueryDataSourceWizard";
export interface IDashboardWizardEventArgs extends DxQueryBuilder.Analytics.Wizard.IWizardEventArgs<DxQueryBuilder.Analytics.Wizard.BaseWizard> {
    type: DataSourceWizardType;
}
export declare class DataSourceWizardExtension implements IExtension {
    private dashboardControl;
    private static _convertDataSource;
    static _renameDataMember(dashboard: Dashboard, dataSource: DataSource, oldDataMember: string, newDataMember: string): void;
    private _subscriptions;
    protected _requestWrapper: DashboardRequestWrapper;
    private _getConnectionStringsCallback;
    private _loadingPanelVisible;
    protected _dashboardParameters: ko.Computed<Array<Parameter>>;
    _dataSourceWizard: ko.Observable<DashboardQueryWizard>;
    _singleDataSourceWizard: ko.Observable<DashboardQueryWizard>;
    _editJsonDataSourceWizard: ko.Observable<EditJsonDataSourceWizard>;
    isCustomSqlEnabled: boolean;
    protected _options: DataSourceWizardExtensionOptions;
    name: string;
    constructor(dashboardControl: DashboardControl, options?: DataSourceWizardExtensionOptions);
    start(): void;
    stop(): void;
    private _createEditQueryWizard;
    protected createDataSourceWizard(connectionStrings: IDashboardDataSourceWizardConnectionStrings): DashboardQueryWizard;
    private _createEditJsonDataSourceWizard;
    protected createWizardIterator(factory: DxQueryBuilder.Analytics.Wizard.PageFactory, stateManager: DxQueryBuilder.Analytics.Wizard.StateManager): DxQueryBuilder.Analytics.Wizard.PageIterator;
    showDataSourceCreatingDialog(): JQueryPromise<DataSource>;
    private _initializeDataSourceWizard;
    showSqlQueryEditingDialog(dashboardSqlDataSource: SqlDataSource, queryName?: string): void;
    _showEditJsonDataSourceDialog(jsonDataSource: JsonDataSource): void;
    template: string;
}
export declare class MultiQueryDataSourceWizardExtension extends DataSourceWizardExtension {
    constructor(dashboardControl: DashboardControl, options?: DataSourceWizardExtensionOptions);
    protected createWizardIterator(factory: DxQueryBuilder.Analytics.Wizard.PageFactory, stateManager: DxQueryBuilder.Analytics.Wizard.StateManager): DxQueryBuilder.Analytics.Wizard.PageIterator;
    protected createDataSourceWizard(connectionStrings: IDashboardDataSourceWizardConnectionStrings): DashboardQueryWizard;
}
