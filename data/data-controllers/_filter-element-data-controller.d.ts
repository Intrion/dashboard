/**
* DevExpress Dashboard (_filter-element-data-controller.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { dataControllerBase } from './_data-controller-base';
export declare let KEY_EXPR: string;
export declare class filterElementDataController extends dataControllerBase {
    dataSource: any;
    selection: any;
    fullSelection: any;
    constructor(options: any);
    getAllItemIndex(): any;
    isAllSelected(): boolean;
    update(selectedValues: any, encodeHtml: any, selectionOnly?: boolean): void;
    getInteractionValues(elements: any, selectedValues: any): any[];
    _getDataValue(wrappedValue: any): any;
    _reset(selectionOnly?: boolean): void;
}
export declare class listViewDataController extends filterElementDataController {
    ListBoxType: {
        Checked: string;
        Radio: string;
    };
    ComboBoxType: {
        Standard: string;
        Checked: string;
    };
    constructor(options: any);
    isMultiselectable(): boolean;
}
export declare class treeViewDataController extends filterElementDataController {
    constructor(options: any);
    isMultiselectable(): boolean;
    getAllItemIndex(): number;
    isAllSelected(): boolean;
    update(selectedValues: any, encodeHtml: any, selectionOnly?: boolean): void;
    getInteractionValues(elements: any, selectedValues: any): any;
    private _updateSelection;
    private _getDataNullChildCount;
}
