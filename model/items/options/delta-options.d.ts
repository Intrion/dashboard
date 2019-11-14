/**
* DevExpress Dashboard (delta-options.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { DeltaIndicationMode, DeltaIndicationThresholdType, DeltaValueType } from '../../enums';
import * as ko from 'knockout';
export declare class CardDeltaOptions extends SerializableModel {
    resultIndicationMode: ko.Observable<DeltaIndicationMode>;
    resultIndicationThresholdType: ko.Observable<DeltaIndicationThresholdType>;
    resultIndicationThreshold: ko.Observable<number>;
    constructor(modelJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class DeltaOptions extends CardDeltaOptions {
    valueType: ko.Observable<DeltaValueType>;
    constructor(modelJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
