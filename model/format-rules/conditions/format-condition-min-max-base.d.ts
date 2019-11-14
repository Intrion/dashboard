/**
* DevExpress Dashboard (format-condition-min-max-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionStyleBase } from './format-condition-style-base';
import { DashboardFormatConditionValueType } from '../../enums';
import * as ko from 'knockout';
export declare abstract class FormatConditionMinMaxBase extends FormatConditionStyleBase {
    minimumType: ko.Observable<DashboardFormatConditionValueType>;
    maximumType: ko.Observable<DashboardFormatConditionValueType>;
    minimum: ko.Observable<number>;
    maximum: ko.Observable<number>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _getStyleSettingsInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
