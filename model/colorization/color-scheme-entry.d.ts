/**
* DevExpress Dashboard (color-scheme-entry.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../serializable-model';
import { IDashboardComponent } from '../internal/_dashboard-component-name-generator';
import { Color } from '../color';
import { MeasureDefinition } from './measure-definition';
import { DimensionKey } from './dimension-key';
import { ColorSchemeDefinition } from './color-scheme-definition';
import * as ko from 'knockout';
export declare class ColorSchemeEntry extends TypedSerializableModel implements IDashboardComponent {
    itemComponentName: string;
    private name;
    dataSource: ko.Observable<string>;
    dataMember: ko.Observable<string>;
    color: ko.Observable<Color>;
    paletteIndex: ko.Observable<number>;
    displayText: ko.Subscribable<string>;
    colorText: ko.Computed<string>;
    measureKeys: ko.ObservableArray<MeasureDefinition>;
    dimensionKeys: ko.ObservableArray<DimensionKey>;
    componentName: ko.Subscribable<string>;
    private _definition;
    readonly custom: boolean;
    readonly definition: ColorSchemeDefinition;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer, itemComponentName?: string, name?: string);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    clone(): ColorSchemeEntry;
    equals(entry: ColorSchemeEntry): boolean;
    getUniqueNamePrefix(): string;
    protected _getDefaultItemType(): string;
}
export declare class AutoColorSchemeEntry extends ColorSchemeEntry {
    constructor(modelJson: any, serializer: DxDesigner.Analytics.Utils.ModelSerializer, componentName: string, name: string);
    readonly custom: boolean;
}
