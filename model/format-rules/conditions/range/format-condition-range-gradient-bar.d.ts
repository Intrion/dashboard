/**
* DevExpress Dashboard (format-condition-range-gradient-bar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionRangeGradient } from './format-condition-range-gradient';
import { FormatConditionBarOptions } from '../format-condition-bar-options';
import { FormatConditionRangeGradientPredefinedType } from './range-converter';
import { StyleSettingsBase } from '../../style-settings/style-settings-base';
export declare class FormatConditionGradientRangeBar extends FormatConditionRangeGradient {
    barOptions: FormatConditionBarOptions;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getActualPredefinedType(): FormatConditionRangeGradientPredefinedType;
    setActualPredefinedType(type: FormatConditionRangeGradientPredefinedType): void;
    protected _isGradientStop(style: StyleSettingsBase): boolean;
    protected _generateByDefault(segmentNumber: number): void;
}
