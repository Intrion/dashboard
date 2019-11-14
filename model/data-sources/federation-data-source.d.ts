/**
* DevExpress Dashboard (federation-data-source.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataSource } from './data-source';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../serializable-model';
import * as ko from 'knockout';
export declare class FederationDataSource extends DataSource {
    sources: ko.ObservableArray<Source>;
    queries: ko.ObservableArray<QueryNode>;
    context: ko.ObservableArray<ContextItem>;
    constructor(dataSourceJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getDisplayNamePrefix(): string;
    protected _getDefaultItemType(): string;
}
export declare class QueryNode extends SerializableModel {
    alias: ko.Observable<string>;
    constructor(json?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
export declare class ContextItem extends SerializableModel {
    source: ko.Observable<DataSource>;
    id: ko.Observable<string>;
    constructor(json?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
export declare class Source extends SerializableModel {
    dataSource: ko.Observable<string>;
    dataMember: ko.Observable<string>;
    name: ko.Observable<string>;
    constructor(json?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
