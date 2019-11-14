/**
* DevExpress Dashboard (rank-calculation.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { MeasureCalculation } from './measure-calculation';
import { RankType, RankOrder } from '../../enums';
import * as ko from 'knockout';
export declare class RankCalculation extends MeasureCalculation {
    private static _getRankFunction;
    rankType: ko.Observable<RankType>;
    rankOrder: ko.Observable<RankOrder>;
    readonly name: string;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _createInstance(): RankCalculation;
    _getExpression(argument: string): string;
}
