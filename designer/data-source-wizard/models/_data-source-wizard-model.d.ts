/**
* DevExpress Dashboard (_data-source-wizard-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardControl } from '../../../common/dashboard-control';
import { IDashboardDataSourceWizardConnectionStrings } from './data-source-wizard-model';
import { IDashboardDataSourceWizardSettings } from '../data-source-wizard-extension';
export declare class DashboardRequestWrapper extends DxQueryBuilder.QueryBuilder.Utils.RequestWrapper {
    private dashboardControl;
    constructor(dashboardControl: DashboardControl);
    _sendRequest(settings: DxDesigner.Analytics.Internal.IAjaxSettings): JQuery.Promise<any, any, any>;
    sendRequest(action: string, arg: string): JQuery.Promise<any, any, any>;
}
export declare class DashboardDataSourceWizardOptions extends DxQueryBuilder.Analytics.Wizard._DataSourceWizardOptions {
    constructor();
    connectionStrings: IDashboardDataSourceWizardConnectionStrings;
    wizardSettings: IDashboardDataSourceWizardSettings;
}
export declare class DashboardMultiQueryDataSourceWizardOptions extends DxQueryBuilder.Analytics.Wizard._MultiQueryDataSourceWizardOptions {
    constructor();
    connectionStrings: IDashboardDataSourceWizardConnectionStrings;
    wizardSettings: IDashboardDataSourceWizardSettings;
}
