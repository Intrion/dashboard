/**
* DevExpress Dashboard (data-source.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../serializable-model';
import { IDashboardComponent } from '../internal/_dashboard-component-name-generator';
import { CalculatedField } from './calculated-field';
import * as ko from 'knockout';
export interface IDataSourceConsumer {
    dataSource: ko.Observable<string>;
    dataMember: ko.Observable<string>;
}
export declare abstract class DataSource extends TypedSerializableModel implements IDashboardComponent {
    hasCalculatedFields: boolean;
    supportDataMembers: boolean;
    name: ko.Observable<string>;
    componentName: ko.Observable<string>;
    calculatedFields: ko.ObservableArray<CalculatedField>;
    hasFilter: boolean;
    filter: ko.Observable<string>;
    constructor(dataSourceJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    abstract getDisplayNamePrefix(): string;
    abstract getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getJson(): any;
    getUniqueNamePrefix(): string;
}
