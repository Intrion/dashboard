﻿/**
* DevExpress Dashboard (_color-scheme-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { DataDashboardItem } from '../../../model/items/data-dashboard-item';
import { MeasureDefinition } from '../../../model/colorization/measure-definition';
import { ColorSchemeEntry, AutoColorSchemeEntry } from '../../../model/colorization/color-scheme-entry';
import { ColorSchemeDefinition } from '../../../model/colorization/color-scheme-definition';
import { DisposableObject } from '../../../model/disposable-object';
import { Dashboard } from '../../../model/dashboard';
import { KnockoutEntry } from '../../../model/internal/_knockout-utils';
import * as ko from 'knockout';
export declare class ItemColorScheme extends DisposableObject {
    private _requestColorSchemeDelegate;
    constructor(item: Dashboard | DataDashboardItem, _requestColorSchemeDelegate: (itemName?: string) => JQueryPromise<{}>);
    customEntries: ko.ObservableArray<ColorSchemeEntry>;
    generatedEntries: ko.ObservableArray<ColorSchemeEntry>;
    componentName: string;
    name: string;
    allEntries: ko.Computed<ColorSchemeEntry[]>;
}
export declare class ColorSchemeModel {
    private dashboard;
    private requestColorSchemeDelegate;
    constructor(dashboard: Dashboard, requestColorSchemeDelegate: (itemName?: string) => JQueryPromise<{}>);
    createItemColorScheme(item: DataDashboardItem): void;
    getScheme(componentName?: string): ko.ObservableArray<ColorSchemeEntry>;
    isSignatureAutogenerated: (definition: ColorSchemeDefinition) => boolean;
    removeEntry: (entry: ColorSchemeEntry) => void;
    removeTable: (definition: ColorSchemeDefinition) => void;
    retainColorIndex(entry: AutoColorSchemeEntry): void;
    initNewEntry: () => void;
    generateDefaultNames(newEntry: ColorSchemeEntry): any[];
    updateEntry: (entry: ColorSchemeEntry, editedEntry: ColorSchemeEntry) => void;
    getAvailableMeasureKeys: () => MeasureDefinition[];
    isEntryAutogenerated(entry: ColorSchemeEntry): boolean;
    availableSignatures: KnockoutEntry<ColorSchemeDefinition[]>;
    editableSignatures: KnockoutEntry<ColorSchemeDefinition[]>;
    selectedSignatures: ko.Observable<ColorSchemeDefinition[]>;
    selectedSignatureEntries: KnockoutEntry<ColorSchemeEntry[]>;
    itemColorSchemes: {
        [key: string]: ItemColorScheme;
    };
    allEntries: ko.Computed<ColorSchemeEntry[]>;
    newEntry: ko.Observable<ColorSchemeEntry>;
}