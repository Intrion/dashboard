/**
* DevExpress Dashboard (format-condition-date-occuring.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionStyleBase } from './format-condition-style-base';
import * as ko from 'knockout';
import { FilterDateType } from '../../enums';
export declare class FormatConditionDateOccurring extends FormatConditionStyleBase {
    dateType: ko.Observable<FilterDateType>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _getStyleSettingsInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getSpecificType: () => any;
    setSpecificType: (type: string) => void;
}
