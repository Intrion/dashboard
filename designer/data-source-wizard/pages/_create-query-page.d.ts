/**
* DevExpress Dashboard (_create-query-page.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DashboardRequestWrapper } from '../models/_data-source-wizard-model';
import { Parameter } from '../../../model/parameters/parameter';
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import * as ko from 'knockout';
export declare function createQueryPageCallback(requestWrapper: DashboardRequestWrapper, parameters: ko.Computed<Array<Parameter>>, customQueriesPreset?: any): {
    customQueriesPreset: any;
    customizeQBInitData: (initData: any) => any;
    selectStatement: (connection: any, query: any) => JQueryPromise<DxQueryBuilder.QueryBuilder.Utils.ISelectStatementResponse>;
};
