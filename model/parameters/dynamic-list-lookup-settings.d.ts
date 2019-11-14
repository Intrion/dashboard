/**
* DevExpress Dashboard (dynamic-list-lookup-settings.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../serializable-model';
import { IDataSourceConsumer } from '../data-sources/data-source';
import { DimensionSortOrder } from '../enums';
import * as ko from 'knockout';
export declare class DynamicListLookUpSettings extends SerializableModel implements IDataSourceConsumer {
    static modelName: string;
    dataMember: ko.Observable<string>;
    dataSource: ko.Observable<string>;
    valueMemberName: ko.Observable<string>;
    displayMemberName: ko.Observable<string>;
    sortByMember: ko.Observable<string>;
    sortOrder: ko.Observable<DimensionSortOrder>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    equals(target: DynamicListLookUpSettings): boolean;
    isPropertyDisabled(propertyName: string): boolean;
}
export declare let _dynamicListLookUpSettingsSerializationInfo: DxDesigner.Analytics.Utils.ISerializationInfo;
