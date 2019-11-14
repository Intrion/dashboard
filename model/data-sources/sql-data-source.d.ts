/**
* DevExpress Dashboard (sql-data-source.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { DataSource } from './data-source';
import { SqlConnection } from './connection';
import * as ko from 'knockout';
export declare class SqlDataSource extends DataSource {
    queries: ko.ObservableArray<DxQueryBuilder.Analytics.Data.Utils.ISqlQueryViewModel>;
    connection: SqlConnection;
    constructor(dataSourceJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getDisplayNamePrefix(): string;
    protected _getDefaultItemType(): string;
}
