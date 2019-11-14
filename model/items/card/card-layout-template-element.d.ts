/**
* DevExpress Dashboard (card-layout-template-element.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { SerializableModel } from '../../serializable-model';
import { CardRowDataElementType } from '../../enums';
import * as ko from 'knockout';
import { DashboardLocalizationId } from '../../../data/localization/_default';
export declare abstract class CardLayoutTemplateElementBase extends SerializableModel {
    visible: ko.Observable<boolean>;
    protected _displayTexts: {
        [key in CardRowDataElementType | 'DeltaIndicator' | 'Sparkline']: DashboardLocalizationId;
    };
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    abstract _getTitle(dimensionNames?: string[]): ko.Computed<string>;
    _createEditorModel(dimensionNames?: string[]): {
        title: ko.Computed<string>;
        checked: ko.Observable<boolean>;
    };
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _initDefault(visible?: boolean, valueType?: CardRowDataElementType, dimenstionIndex?: number): void;
}
export declare class CardLayoutTemplateDeltaElement extends CardLayoutTemplateElementBase {
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _getTitle(): ko.Computed<string>;
}
export declare class CardLayoutTemplateSparklineElement extends CardLayoutTemplateElementBase {
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _getTitle(): ko.Computed<string>;
}
export declare class CardLayoutTemplateDataElement extends CardLayoutTemplateElementBase {
    valueType: ko.Observable<CardRowDataElementType>;
    dimensionIndex: ko.Observable<number>;
    private _valueTypeSelectorModel;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    _getTitle(dimensionNames: string[]): ko.Computed<any>;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _initDefault(visible: boolean, valueType: CardRowDataElementType, dimenstionIndex?: number): void;
    _getEditorProperty(valueType: CardRowDataElementType, dimensionIndex?: number, dimensionNames?: string[]): {
        value: CardRowDataElementType;
        displayText: any;
        dimensionIndex: number;
        key: string;
    };
    _createEditorModel(dimensionNames: string[]): {
        typeSelectorModel: CardLayoutPropertyTypeSelectorModel;
        selectValueType: (data: any, event: any) => void;
        title: ko.Computed<string>;
        checked: ko.Observable<boolean>;
    };
}
declare class CardLayoutPropertyTypeSelectorModel {
    items: ko.ObservableArray;
    selectedItem: ko.Observable<string>;
    popupVisible: ko.Observable<boolean>;
    target: ko.Observable<HTMLElement>;
    clickHandler: (e: any) => void;
    init(items: any[], selected: ko.Computed<string>, target: HTMLElement, clickHandler: (e: any) => void): void;
}
export {};
