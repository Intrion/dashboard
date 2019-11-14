/**
* DevExpress Dashboard (format-condition-range-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionBase } from '../format-condition-base';
import { DashboardFormatConditionValueType } from '../../../enums';
import { RangeSet } from './range-set';
import { StyleSettingsBase } from '../../style-settings/style-settings-base';
import { RangeInfo } from './range-info';
import * as ko from 'knockout';
export declare abstract class FormatConditionRangeBase extends FormatConditionBase {
    valueType: ko.Observable<DashboardFormatConditionValueType>;
    rangeSet: RangeSet;
    readonly actualStyles: Array<StyleSettingsBase>;
    readonly stopStyles: Array<StyleSettingsBase>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    isValid(): boolean;
    isRange(): boolean;
    getSpecificType: () => any;
    setSpecificType: (specificType: any) => any;
    abstract getActualPredefinedType(): any;
    abstract setActualPredefinedType(specificType: any): any;
    setValues(values: Array<any>): void;
    createStyleSettings(styleListItem: any): any;
    protected _getSortedRanges(): Array<RangeInfo>;
    protected _getRangeIndexSettings(index: number): StyleSettingsBase;
}
