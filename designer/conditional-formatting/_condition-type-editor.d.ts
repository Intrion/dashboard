/**
* DevExpress Dashboard (_condition-type-editor.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { FormatConditionRangeSetPredefinedType, FormatConditionRangeGradientPredefinedType } from '../../model/format-rules/conditions/range/range-converter';
import { ISlidableListsNavigable } from '../ui-widgets/_ui-widgets';
import { Color } from '../../model/color';
import * as ko from 'knockout';
export declare type RangeStyleType = 'None' | 'Color' | 'Icon' | 'Gradient' | 'ColorBar' | 'GradientBar';
export declare class FormatConditionTypeEditorSurface implements ISlidableListsNavigable {
    dataType: ko.Observable<string>;
    conditionType: ko.Observable<string>;
    specificType: ko.Observable<string | FormatConditionRangeGradientPredefinedType | FormatConditionRangeSetPredefinedType>;
    displayMode: ko.Observable<"conditionTypes" | "specificTypes">;
    availableConditionTypes: ko.Computed<Array<{
        value: string;
        displayText: string;
        hasSpecificTypes: boolean;
    }>>;
    availableSpecificTypes: ko.Computed<Array<any>>;
    selectedSpecificTypes: ko.Computed<Array<any>>;
    ancestors: ko.Observable<any[]>;
    backClick: () => void;
    updateItemAppearance: (e: any) => void;
    constructor(dataType: ko.Observable<string>, conditionType: ko.Observable<string>, specificType: ko.Observable<string | FormatConditionRangeGradientPredefinedType | FormatConditionRangeSetPredefinedType>);
    getStyleList(rangeStyleType: FormatConditionRangeSetPredefinedType): Array<string>;
    getGradientColorsList(type: FormatConditionRangeGradientPredefinedType): Array<Color>;
}
