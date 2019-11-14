/**
* DevExpress Dashboard (json-data-source.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import DxQueryBuilder from '@devexpress/analytics-core/dx-querybuilder';
import { DataSource } from './data-source';
import * as ko from 'knockout';
export declare class JsonDataSource extends DataSource {
    rootElement: ko.Observable<string>;
    schema: ko.Observable<DxQueryBuilder.Analytics.Data.JsonSchemaRootNode>;
    constructor(dataSourceJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getDisplayNamePrefix(): string;
    protected _getDefaultItemType(): string;
}
