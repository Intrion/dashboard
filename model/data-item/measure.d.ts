/**
* DevExpress Dashboard (measure.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DataItem } from './data-item';
import { Calculation } from './calculations/calculation';
import { WindowDefinition } from './window-definition/window-definition';
import * as ko from 'knockout';
import { SummaryType } from '../enums';
export declare class Measure extends DataItem {
    calculation: Calculation;
    windowDefinition: WindowDefinition;
    expression: ko.Observable<string>;
    summaryType: ko.Observable<SummaryType>;
    constructor(dataItemJSON?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    grabFrom(dataItem: Measure): void;
    isDefinitionEquals(dataItem: DataItem): any;
    _hasCalculation(): any;
    protected _getDefaultItemType(): string;
}
