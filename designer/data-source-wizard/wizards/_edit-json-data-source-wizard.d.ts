/**
* DevExpress Dashboard (_edit-json-data-source-wizard.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { DashboardRequestWrapper } from '../models/_data-source-wizard-model';
export declare class EditJsonDataSourceWizardIterator extends DxQueryBuilder.Analytics.Wizard.PageIterator {
    constructor(factory: DxQueryBuilder.Analytics.Wizard.PageFactory, stateManager: DxQueryBuilder.Analytics.Wizard.StateManager);
    getNextPageId(pageId: string): string;
}
export declare class EditJsonDataSourceWizard extends DxQueryBuilder.Analytics.Wizard.PopupWizard {
    title: any;
    _container: (element: any) => JQuery<any>;
    _extendCssClass: string;
}
export declare function createEditJsonDataSourceWizard(requestWrapper: DashboardRequestWrapper): EditJsonDataSourceWizard;
