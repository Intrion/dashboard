/**
* DevExpress Dashboard (choose-olap-connection-string-page.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { IDashboardConnectionStringDefinition, IOlapDataSourceWizardState } from '../models/data-source-wizard-model';
import * as ko from 'knockout';
export declare class DashboardChooseOlapConnectionStringPage extends DxQueryBuilder.Analytics.Wizard.WizardPageBase<IOlapDataSourceWizardState, IOlapDataSourceWizardState> {
    _selectedConnectionString: ko.ObservableArray<IDashboardConnectionStringDefinition>;
    _connectionStrings: IDashboardConnectionStringDefinition[];
    constructor(connectionStrings: IDashboardConnectionStringDefinition[]);
    canNext(): boolean;
    canFinish(): boolean;
    commit(): JQuery.Promise<IOlapDataSourceWizardState, any, any>;
    initialize(state: IOlapDataSourceWizardState): JQueryPromise<any>;
}
export declare function _registerOlapConnectionStringsPage(factory: DxQueryBuilder.Analytics.Wizard.PageFactory, connectionStrings: IDashboardConnectionStringDefinition[]): void;
