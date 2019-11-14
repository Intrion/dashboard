/**
* DevExpress Dashboard (gauge-calc-window-definition.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MeasureCalculationWindowDefinition } from './measure-calc-window-definition';
export declare class GaugeWindowDefinition extends MeasureCalculationWindowDefinition {
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    equals(def: any): boolean;
}
