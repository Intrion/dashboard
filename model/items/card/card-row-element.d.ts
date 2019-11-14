/**
* DevExpress Dashboard (card-row-element.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../../serializable-model';
import * as ko from 'knockout';
export declare abstract class CardRowElement extends TypedSerializableModel {
    hAlignment: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare abstract class CardRowTextElementBase extends CardRowElement {
    color: ko.Observable<number>;
    predefinedForeColor: ko.Observable<string>;
    fontFamily: ko.Observable<string>;
    fontSize: ko.Observable<number>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
export declare class CardRowDataElement extends CardRowTextElementBase {
    valueType: ko.Observable<string>;
    dimensionIndex: ko.Observable<number>;
    title: ko.Computed<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
export declare class CardRowTextElement extends CardRowTextElementBase {
    text: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
export declare class CardRowIndicatorElement extends CardRowElement {
    size: ko.Observable<number>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
