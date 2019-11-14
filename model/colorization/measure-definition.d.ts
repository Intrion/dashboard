/**
* DevExpress Dashboard (measure-definition.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../serializable-model';
import { Calculation } from '../data-item/calculations/calculation';
import { WindowDefinition } from '../data-item/window-definition/window-definition';
import * as ko from 'knockout';
export declare class MeasureDefinition extends SerializableModel {
    displayText: ko.Computed<string>;
    dataMember: ko.Observable<string>;
    summaryType: ko.Observable<string>;
    calculation: Calculation;
    windowDefinition: WindowDefinition;
    expression: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    readonly _id: string;
}
