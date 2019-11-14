/**
* DevExpress Dashboard (dashboard-item-format-rule.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { TypedSerializableModel } from '../serializable-model';
import { FormatConditionBase } from './conditions/format-condition-base';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import * as ko from 'knockout';
export declare abstract class DashboardItemFormatRule extends TypedSerializableModel {
    name: ko.Observable<string>;
    enabled: ko.Observable<boolean>;
    condition: ko.Computed<FormatConditionBase>;
    readonly _classCaption: string;
    readonly _classId: string;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    _changeConditionType(propertyName: string): void;
}
