/**
* DevExpress Dashboard (measure-calculation.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
export declare abstract class MeasureCalculation extends SerializableModel {
    protected static _getWindowAggrFunction(summaryType: string): string;
    static _getSummaryExpression(dataMember: string, summaryType: string): string;
    abstract readonly name: string;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _getAggrName(summaryType: string): string;
    abstract _createInstance(): any;
    abstract _getExpression(argument: string): string;
}
export declare let calculationsTypesMap: {
    [index: string]: typeof MeasureCalculation;
};
