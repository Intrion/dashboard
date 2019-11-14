/**
* DevExpress Dashboard (choose-data-source-type-page.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { DashboardDataSourceWizardOptions } from '../models/_data-source-wizard-model';
import { IDashboardDataSourceWizardConnectionStrings } from '../models/data-source-wizard-model';
export declare class DashboardChooseDataSourceTypePage extends DxQueryBuilder.Analytics.Wizard.ChooseDataSourceTypePage {
    connectionStrings: IDashboardDataSourceWizardConnectionStrings;
    constructor(_wizardOptions: DxQueryBuilder.Analytics.Wizard._DataSourceWizardOptions);
    commit(): JQueryPromise<DxQueryBuilder.Analytics.Wizard.IDataSourceWizardState>;
    protected _createTypeItems(): DxQueryBuilder.Analytics.Wizard.ITypeItem[];
}
export declare function _registerChooseDataSourceTypePage(factory: DxQueryBuilder.Analytics.Wizard.PageFactory, wizardOptions: DashboardDataSourceWizardOptions): void;
