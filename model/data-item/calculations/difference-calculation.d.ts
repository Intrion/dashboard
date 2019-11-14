/**
* DevExpress Dashboard (difference-calculation.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MeasureCalculation } from './measure-calculation';
import { DifferenceTarget, DifferenceType } from '../../enums';
import * as ko from 'knockout';
export declare class DifferenceCalculation extends MeasureCalculation {
    private static getLookupShiftExpression;
    target: ko.Observable<DifferenceTarget>;
    differenceType: ko.Observable<DifferenceType>;
    readonly name: string;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    readonly lookupShiftExpression: string;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _createInstance(): DifferenceCalculation;
    _getExpression(argument: string): string;
}
