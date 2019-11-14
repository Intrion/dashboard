/**
* DevExpress Dashboard (_rule-ranges-editor.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { StyleSettingsBase } from '../../model/format-rules/style-settings/style-settings-base';
import { FormatConditionRangeBase } from '../../model/format-rules/conditions/range/format-condition-range-base';
import { RangeInfo } from '../../model/format-rules/conditions/range/range-info';
import { StyleSettingsContainer } from './_style-settings-container';
import * as ko from 'knockout';
import { Options as dxDataGridOptions } from 'devextreme/ui/data_grid';
export interface IRange {
    style: ko.Observable<StyleSettingsBase>;
    sign: ko.Observable<string>;
    leftValue: ko.Observable<any>;
    rightValue: ko.Observable<any>;
    rangeInfo: RangeInfo;
}
export declare type DataGridColumnTypes = "string" | "date" | "boolean" | "number" | "object";
export declare class RuleRangesEditor extends StyleSettingsContainer {
    condition: FormatConditionRangeBase;
    dataType: ko.Observable<string>;
    isPercent: ko.Computed<boolean>;
    selection: ko.Observable<IRange>;
    value: ko.ObservableArray<IRange>;
    constructor(params: {
        condition: ko.Observable<FormatConditionRangeBase>;
    });
    isLabel(type: string): boolean;
    isRangeEmptyAllowed(range: IRange): boolean;
    closeEditCell: () => void;
    private _closeEditCell;
    getLabelText(type: string): string;
    readonly dataGridOptions: dxDataGridOptions;
    add(): void;
    remove(): void;
    getSelectedStyleChangedHandler(range: IRange): (oldType: string, newType: string) => void;
    private _updateValue;
}
