/**
* DevExpress Dashboard (card-row.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../../serializable-model';
import { CardRowDataElement, CardRowIndicatorElement, CardRowTextElement, CardRowElement } from './card-row-element';
import { SparklineOptions } from '../options/sparkline-options';
import * as ko from 'knockout';
export declare abstract class CardRowBase extends TypedSerializableModel {
    vAlignment: ko.Observable<string>;
    indent: ko.Observable<number>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class CardRow extends CardRowBase {
    static elementItemTypes: {
        "CardRowDataElement": {
            constructor: typeof CardRowDataElement;
        };
        "CardRowIndicatorElement": {
            constructor: typeof CardRowIndicatorElement;
        };
        "CardRowTextElement": {
            constructor: typeof CardRowTextElement;
        };
    };
    elements: ko.ObservableArray<CardRowElement>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    createRowElement(elementJSON: any, serializer: DxDesigner.Analytics.Utils.ModelSerializer): CardRowDataElement;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
export declare class CardSparklineRow extends CardRowBase {
    height: ko.Observable<number>;
    sparklineOptions: SparklineOptions;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
