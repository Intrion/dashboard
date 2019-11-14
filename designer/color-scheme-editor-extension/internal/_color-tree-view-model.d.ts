/**
* DevExpress Dashboard (_color-tree-view-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ColorSchemeEntry } from '../../../model/colorization/color-scheme-entry';
import { Color } from '../../../model/color';
import * as ko from 'knockout';
import { KnockoutEntry } from '../../../model/internal/_knockout-utils';
export declare class ColorEntryTreeItem {
    value: string;
    entry: ColorSchemeEntry;
    constructor(value: string, entry: ColorSchemeEntry, editColor: any, entryComputedColor: Color);
    editColor: any;
    color: string;
    items: ColorEntryTreeItem[];
    expanded: boolean;
    custom: boolean;
}
export declare class ColorTreeViewModel {
    static construct(values: Array<string>, children: ColorEntryTreeItem[], entry: ColorSchemeEntry, editColor: () => void, entryComputedColor: Color): void;
    constructor(params: {
        dataSource: KnockoutEntry<ColorSchemeEntry[]>;
        editColor: () => void;
        allowModify: boolean;
        selectedEntry: KnockoutEntry<ColorSchemeEntry>;
        addNewEntry: () => void;
        removeEntry: any;
        colorPalette: ko.ObservableArray<Color>;
    });
    addNewEntry: () => void;
    removeItem: (item: ColorEntryTreeItem) => void;
    dataSource: ko.Computed<ColorEntryTreeItem[]>;
    isTreeMode: ko.Computed<boolean>;
    allowModify: boolean;
    selectedTreeItems: ko.Observable<ColorEntryTreeItem[]>;
    private selectedEntry;
    private removeEntry;
    onItemSelectionChanged: (e: any) => void;
}
