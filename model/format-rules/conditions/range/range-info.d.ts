/**
* DevExpress Dashboard (range-info.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { TypedSerializableModel } from '../../../serializable-model';
import { StyleSettingsBase } from '../../style-settings/style-settings-base';
import { ComplexValue } from '../../format-rules-common';
import { DashboardFormatConditionComparisonType } from '../../../enums';
import * as ko from 'knockout';
export declare class RangeInfo extends TypedSerializableModel {
    styleSettings: ko.Observable<StyleSettingsBase>;
    value: ComplexValue;
    valueComparison: ko.Observable<DashboardFormatConditionComparisonType>;
    private _styleSettingsType;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    clone(): RangeInfo;
    protected _getDefaultItemType(): string;
}
