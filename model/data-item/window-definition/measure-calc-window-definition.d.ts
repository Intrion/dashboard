/**
* DevExpress Dashboard (measure-calc-window-definition.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
export declare abstract class MeasureCalculationWindowDefinition extends SerializableModel {
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    abstract equals(def: any): boolean;
}
export declare let windowDefinitionsTypesMap: {
    [index: string]: typeof MeasureCalculationWindowDefinition;
};
