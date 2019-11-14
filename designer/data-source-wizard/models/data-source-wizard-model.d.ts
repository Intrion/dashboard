/**
* DevExpress Dashboard (data-source-wizard-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
export declare function ToDataSourceTypeNumber(dashboardType: DashboardDataSourceType): number;
export declare function ToDashboardDataSourceType(typeNumber: number): DashboardDataSourceType;
export declare type DashboardDataSourceType = "Sql" | "Olap" | "Json";
export interface IOlapDataSourceWizardState {
    connectionName?: string;
}
export interface IDashboardDataSourceWizardState extends DxQueryBuilder.Analytics.Wizard.IDataSourceWizardState {
    dashboardDataSourceType?: DashboardDataSourceType;
    olapDataSourceWizard?: IOlapDataSourceWizardState;
}
export interface IDashboardConnectionStringDefinition extends DxQueryBuilder.Analytics.Wizard.IConnectionStringDefinition {
    connectionType?: DashboardDataSourceType;
}
export interface IDashboardDataSourceWizardConnectionStrings extends DxQueryBuilder.Analytics.Wizard.IDataSourceWizardConnectionStrings {
    olap?: IDashboardConnectionStringDefinition[];
}
