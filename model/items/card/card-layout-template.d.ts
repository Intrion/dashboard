/**
* DevExpress Dashboard (card-layout-template.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { CardLayout } from './card-layout';
import { CardLayoutTemplateDataElement, CardLayoutTemplateDeltaElement, CardLayoutTemplateSparklineElement } from './card-layout-template-element';
import * as ko from 'knockout';
export declare type CardLayoutTemplateType = 'Stretched' | 'Centered' | 'Lightweight' | 'Compact' | 'Custom' | 'None';
export declare abstract class CardLayoutTemplate extends SerializableModel {
    title: string;
    minWidth: ko.Observable<number>;
    maxWidth: ko.Observable<number>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    abstract _collectProperties(dimensionNames: string[]): Array<any>;
    abstract getType(): string;
    abstract _createInstance(): CardLayoutTemplate;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _resetToDefaults(): void;
    clone(): CardLayoutTemplate;
    private _clone;
}
export declare class CardEmptyLayoutTemplate extends CardLayoutTemplate {
    allowEdit: ko.Observable<boolean>;
    isEmpty: ko.Observable<boolean>;
    readonly title: string;
    _collectProperties(dimensionNames: string[]): any[];
    getType(): CardLayoutTemplateType;
    getInfo(): any[];
    _createInstance(): CardLayoutTemplate;
}
export declare class CardCustomLayoutTemplate extends CardLayoutTemplate {
    layout: CardLayout;
    allowEdit: ko.Observable<boolean>;
    type: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _collectProperties(dimensionNames: string[]): Array<any>;
    _resetToDefaults(): void;
    getType(): string;
    _createInstance(): CardLayoutTemplate;
}
export declare class CardCenteredLayoutTemplate extends CardLayoutTemplate {
    mainValue: CardLayoutTemplateDataElement;
    subValue: CardLayoutTemplateDataElement;
    bottomValue: CardLayoutTemplateDataElement;
    bottomSubValue1: CardLayoutTemplateDataElement;
    bottomSubValue2: CardLayoutTemplateDataElement;
    deltaIndicator: CardLayoutTemplateDeltaElement;
    sparkline: CardLayoutTemplateSparklineElement;
    allowEdit: ko.Observable<boolean>;
    type: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _collectProperties(dimensionNames: string[]): Array<any>;
    _resetToDefaults(): void;
    getType(): string;
    _createInstance(): CardLayoutTemplate;
}
export declare class CardStretchedLayoutTemplate extends CardLayoutTemplate {
    topValue: CardLayoutTemplateDataElement;
    mainValue: CardLayoutTemplateDataElement;
    subValue: CardLayoutTemplateDataElement;
    bottomValue1: CardLayoutTemplateDataElement;
    bottomValue2: CardLayoutTemplateDataElement;
    deltaIndicator: CardLayoutTemplateDeltaElement;
    sparkline: CardLayoutTemplateSparklineElement;
    allowEdit: ko.Observable<boolean>;
    type: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _collectProperties(dimensionNames: string[]): Array<any>;
    _resetToDefaults(): void;
    getType(): string;
    _createInstance(): CardLayoutTemplate;
}
export declare class CardLightweightLayoutTemplate extends CardLayoutTemplate {
    mainValue: CardLayoutTemplateDataElement;
    subValue: CardLayoutTemplateDataElement;
    bottomValue: CardLayoutTemplateDataElement;
    deltaIndicator: CardLayoutTemplateDeltaElement;
    sparkline: CardLayoutTemplateSparklineElement;
    allowEdit: ko.Observable<boolean>;
    type: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _collectProperties(dimensionNames: string[]): Array<any>;
    _resetToDefaults(): void;
    getType(): string;
    _createInstance(): CardLayoutTemplate;
}
export declare class CardCompactLayoutTemplate extends CardLayoutTemplate {
    mainValue: CardLayoutTemplateDataElement;
    subValue: CardLayoutTemplateDataElement;
    bottomValue: CardLayoutTemplateDataElement;
    bottomSubValue1: CardLayoutTemplateDataElement;
    bottomSubValue2: CardLayoutTemplateDataElement;
    deltaIndicator: CardLayoutTemplateDeltaElement;
    sparkline: CardLayoutTemplateSparklineElement;
    allowEdit: ko.Observable<boolean>;
    type: ko.Observable<string>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _collectProperties(dimensionNames: string[]): Array<any>;
    _resetToDefaults(): void;
    getType(): string;
    _createInstance(): CardLayoutTemplate;
}
