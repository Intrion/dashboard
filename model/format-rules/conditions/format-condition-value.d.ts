/**
* DevExpress Dashboard (format-condition-value.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionStyleBase } from './format-condition-style-base';
import { DashboardFormatCondition } from '../../enums';
import { ComplexValue } from '../format-rules-common';
import * as ko from 'knockout';
export declare class FormatConditionValue extends FormatConditionStyleBase {
    condition: ko.Observable<DashboardFormatCondition>;
    value1: ComplexValue;
    value2: ComplexValue;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _getStyleSettingsInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getSpecificType: () => DashboardFormatCondition;
    setSpecificType: (type: DashboardFormatCondition) => void;
}
