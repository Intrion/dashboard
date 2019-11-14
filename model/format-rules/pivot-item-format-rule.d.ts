/**
* DevExpress Dashboard (pivot-item-format-rule.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { CellsItemFormatRule } from './cells-item-format-rule';
import { FormatConditionIntersectionLevelMode } from '../enums';
import { PivotItemFormatRuleLevel } from './pivot-item-format-rule-level';
import * as ko from 'knockout';
export declare class PivotItemFormatRule extends CellsItemFormatRule {
    applyToColumn: ko.Observable<boolean>;
    intersectionLevelMode: ko.Observable<FormatConditionIntersectionLevelMode>;
    level: PivotItemFormatRuleLevel;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    protected _getDefaultItemType(): string;
}
