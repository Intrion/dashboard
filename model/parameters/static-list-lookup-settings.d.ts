/**
* DevExpress Dashboard (static-list-lookup-settings.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../serializable-model';
import { LookUpValue } from './look-up-value';
import * as ko from 'knockout';
export declare class StaticListLookUpSettings extends SerializableModel {
    private _valueType;
    static modelName: string;
    values: ko.ObservableArray<LookUpValue>;
    readonly _itemInfo: DxDesigner.Analytics.Utils.ISerializationInfo;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _updateValuesType(newType: string): void;
}
export declare let _staticListLookUpSettingsSerializationInfo: DxDesigner.Analytics.Utils.ISerializationInfo;
