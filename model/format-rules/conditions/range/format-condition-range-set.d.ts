/**
* DevExpress Dashboard (format-condition-range-set.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionRangeBase } from './format-condition-range-base';
import { FormatConditionRangeSetPredefinedType } from './range-converter';
export declare class FormatConditionRangeSet extends FormatConditionRangeBase {
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getActualPredefinedType(): FormatConditionRangeSetPredefinedType;
    setActualPredefinedType(type: FormatConditionRangeSetPredefinedType): void;
}
