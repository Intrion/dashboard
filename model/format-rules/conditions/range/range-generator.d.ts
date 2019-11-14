/**
* DevExpress Dashboard (range-generator.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { FormatConditionRangeSet } from './format-condition-range-set';
import { FormatConditionRangeSetPredefinedType, FormatConditionRangeGradientPredefinedType } from './range-converter';
import { FormatConditionRangeGradient } from './format-condition-range-gradient';
import { StyleSettingsBase } from '../../style-settings/style-settings-base';
import { Color } from '../../../color';
import { FormatConditionRangeBase } from './format-condition-range-base';
export declare class FormatConditionRangeGenerator {
    static generateRangeSet(condition: FormatConditionRangeSet, type: FormatConditionRangeSetPredefinedType): void;
    static generateGradientByType(condition: FormatConditionRangeGradient, type: FormatConditionRangeGradientPredefinedType, segmentNumber: number, isBar?: boolean): void;
    static generateGradientByStyles(condition: FormatConditionRangeGradient, styles: Array<StyleSettingsBase>, segmentNumber: number): void;
    static generateGradientColors(gradientType: FormatConditionRangeGradientPredefinedType, count: number): Array<Color>;
    static getPredefinedType(actualStyles: Array<StyleSettingsBase>, func: (type: FormatConditionRangeSetPredefinedType) => FormatConditionRangeBase): FormatConditionRangeSetPredefinedType;
    static getGradientPredefinedType(actualStyles: Array<StyleSettingsBase>, func: (type: FormatConditionRangeGradientPredefinedType) => FormatConditionRangeBase): FormatConditionRangeGradientPredefinedType;
    static calculateRangePercentValues(segmentCount: number): Array<number>;
    static compareValues(val1: any, val2: any, changeType: boolean): number;
    private static _isStylesEqual;
    private static _getPercentRangeStops;
    private static _calculateRangePercent;
    private static _generateRangeSet;
    private static _calculateRangeDate;
}
