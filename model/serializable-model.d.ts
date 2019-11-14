/**
* DevExpress Dashboard (serializable-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardItem } from './items/dashboard-item';
import { DataDashboardItem } from './items/data-dashboard-item';
import * as ko from 'knockout';
export declare abstract class SerializableModel implements DxDesigner.Analytics.Utils.ISerializableModel {
    constructor(model?: any, serializer?: DxDesigner.Analytics.Utils.IModelSerializer, info?: DxDesigner.Analytics.Utils.ISerializationInfoArray);
}
export declare abstract class TypedSerializableModel extends SerializableModel {
    itemType: ko.Observable<string>;
    _model: any;
    constructor(model?: any, serializer?: DxDesigner.Analytics.Utils.IModelSerializer, info?: DxDesigner.Analytics.Utils.ISerializationInfoArray);
    protected abstract _getDefaultItemType(): string;
    protected _getUniqueNamePrefix(): string;
}
export declare let itemTypesMap: {
    [key: string]: {
        type: typeof DashboardItem;
        customItemType?: typeof DataDashboardItem;
        groupName: string;
        title: string;
        index: number;
    };
};
