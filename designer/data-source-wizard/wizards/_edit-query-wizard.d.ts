/**
* DevExpress Dashboard (_edit-query-wizard.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { Parameter } from '../../../model/parameters/parameter';
import { DashboardRequestWrapper } from '../models/_data-source-wizard-model';
import { IDashboardDataSourceWizardConnectionStrings } from '../models/data-source-wizard-model';
import { IDashboardDataSourceWizardSettings } from '../data-source-wizard-extension';
import * as ko from 'knockout';
export declare class DashboardQueryWizardIterator extends DxQueryBuilder.Analytics.Wizard.PageIterator {
    private _createNew;
    constructor(_createNew: boolean, factory: DxQueryBuilder.Analytics.Wizard.PageFactory, stateManager: DxQueryBuilder.Analytics.Wizard.StateManager);
    getNextPageId(pageId: string): string;
}
export declare class DashboardQueryWizard extends DxQueryBuilder.Analytics.Wizard.PopupWizard {
    title: any;
    _container: (element: any) => JQuery<any>;
    _extendCssClass: string;
}
export declare function createDashboardQueryWizard(requestWrapper: DashboardRequestWrapper, parameters: ko.Computed<Parameter[]>, disableCustomSql: boolean, canCreateNewJsonDataSource: boolean, wizardSettings: IDashboardDataSourceWizardSettings, dashboardConnectionStrings: IDashboardDataSourceWizardConnectionStrings): DashboardQueryWizard;
