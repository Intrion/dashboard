/**
* DevExpress Dashboard (percent-of-total-calculation.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MeasureCalculation } from './measure-calculation';
export declare class PercentOfTotalCalculation extends MeasureCalculation {
    readonly name: string;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _createInstance(): PercentOfTotalCalculation;
    _getExpression(argument: string): string;
}
