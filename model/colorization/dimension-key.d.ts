/**
* DevExpress Dashboard (dimension-key.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../serializable-model';
import * as ko from 'knockout';
export interface IDimensionDefinition {
    dataMember: ko.Observable<string>;
    dateTimeGroupInterval: ko.Observable<string>;
}
export interface IDimensionValue {
    type: ko.Observable<string>;
    value: ko.Observable<string>;
}
export declare class DimensionKey extends SerializableModel {
    displayText: ko.Computed<string>;
    definition: IDimensionDefinition;
    value: IDimensionValue;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
