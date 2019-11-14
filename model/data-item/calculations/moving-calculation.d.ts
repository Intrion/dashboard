/**
* DevExpress Dashboard (moving-calculation.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MeasureCalculation } from './measure-calculation';
import { SummaryType } from '../../enums';
import * as ko from 'knockout';
export declare class MovingCalculation extends MeasureCalculation {
    summaryType: ko.Observable<SummaryType>;
    previousValuesCount: ko.Observable<number>;
    nextValuesCount: ko.Observable<number>;
    readonly name: string;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _createInstance(): MovingCalculation;
    _getExpression(argument: string): string;
}
