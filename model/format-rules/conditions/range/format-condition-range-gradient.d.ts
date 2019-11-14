/**
* DevExpress Dashboard (format-condition-range-gradient.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionRangeBase } from './format-condition-range-base';
import { Color } from '../../../color';
import { FormatConditionRangeGradientPredefinedType } from './range-converter';
import { StyleSettingsBase } from '../../style-settings/style-settings-base';
import { RangeInfo } from './range-info';
import * as ko from 'knockout';
export declare class FormatConditionRangeGradient extends FormatConditionRangeBase {
    protected static isGradientStop(predefined: string, color: Color): boolean;
    segmentNumber: ko.Computed<number>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    isGradient(): boolean;
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getActualPredefinedType(): FormatConditionRangeGradientPredefinedType;
    setActualPredefinedType(type: FormatConditionRangeGradientPredefinedType): void;
    getSpecificType: () => FormatConditionRangeGradientPredefinedType;
    setSpecificType: (specificType: any) => void;
    protected _generateByDefault(segmentNumber: number): void;
    generateAsPercent(startStyle: StyleSettingsBase, endStyle: StyleSettingsBase, segmentNumber: number): void;
    generateAsNumber(startStyle: StyleSettingsBase, endStyle: StyleSettingsBase, values: Array<any>): void;
    protected _getRangeIndexSettings(index: number): StyleSettingsBase;
    protected _getSortedRanges(): Array<RangeInfo>;
    protected _generate(startStyle: StyleSettingsBase, endStyle: StyleSettingsBase, rangeCount: number): void;
    protected _isGradientStop(style: StyleSettingsBase): boolean;
    private _validateStyle;
}
