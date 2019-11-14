/**
* DevExpress Dashboard (calculation.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MeasureCalculation } from './measure-calculation';
import { SerializableModel } from '../../serializable-model';
import * as ko from 'knockout';
export declare let _currentCalculationInfo: (model: {
    calculationType: ko.Observable<string>;
}) => DxDesigner.Analytics.Utils.ISerializationInfo[];
export declare class Calculation extends SerializableModel {
    calculationType: ko.Observable<string>;
    calculation: ko.Observable<MeasureCalculation>;
    constructor(modelJson?: {}, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    isEmpty(): boolean;
}
