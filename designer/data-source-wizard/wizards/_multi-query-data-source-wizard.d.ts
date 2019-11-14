/**
* DevExpress Dashboard (_multi-query-data-source-wizard.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { DashboardRequestWrapper } from '../models/_data-source-wizard-model';
import { Parameter } from '../../../model/parameters/parameter';
import { DashboardQueryWizard } from './_edit-query-wizard';
import { IDashboardDataSourceWizardConnectionStrings } from '../models/data-source-wizard-model';
import { IDashboardDataSourceWizardSettings } from '../data-source-wizard-extension';
import * as ko from 'knockout';
export declare class DashboardMultiQueryWizardIterator extends DxQueryBuilder.Analytics.Wizard.PageIterator {
    getNextPageId(pageId: string): string;
}
export declare class DashboardMultiQueryDataSourceWizard extends DashboardQueryWizard {
    static customQueriesPreset: (dataSource: DxQueryBuilder.Analytics.Data.SqlDataSource) => JQueryPromise<DxQueryBuilder.Analytics.Data.TableQuery[]>;
    _extendCssClass: string;
    height: ko.Observable<number>;
}
export declare function createDashboardMultiQueryWizard(requestWrapper: DashboardRequestWrapper, parameters: ko.Computed<Parameter[]>, disableCustomSql: boolean, canCreateNewJsonDataSource: boolean, wizardSettings: IDashboardDataSourceWizardSettings, dashboardConnectionStrings: IDashboardDataSourceWizardConnectionStrings): DashboardMultiQueryDataSourceWizard;
