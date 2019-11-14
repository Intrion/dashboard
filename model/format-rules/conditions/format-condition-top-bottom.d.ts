/**
* DevExpress Dashboard (format-condition-top-bottom.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionStyleBase } from './format-condition-style-base';
import { DashboardFormatConditionTopBottomType } from '../../enums';
import * as ko from 'knockout';
export declare class FormatConditionTopBottom extends FormatConditionStyleBase {
    rank: ko.Observable<number>;
    rankType: ko.Observable<string>;
    topBottom: ko.Observable<DashboardFormatConditionTopBottomType>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _getStyleSettingsInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getSpecificType: () => DashboardFormatConditionTopBottomType;
    setSpecificType: (type: DashboardFormatConditionTopBottomType) => void;
}
