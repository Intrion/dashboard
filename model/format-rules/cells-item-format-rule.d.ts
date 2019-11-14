/**
* DevExpress Dashboard (cells-item-format-rule.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { DashboardItemFormatRule } from './dashboard-item-format-rule';
import * as ko from 'knockout';
export declare abstract class CellsItemFormatRule extends DashboardItemFormatRule {
    applyToRow: ko.Observable<boolean>;
    dataItemName: ko.Observable<string>;
    dataItemApplyToName: ko.Computed<string>;
    private _dataItemApplyToName;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
