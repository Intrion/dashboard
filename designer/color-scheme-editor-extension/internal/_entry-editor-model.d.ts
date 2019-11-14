﻿/**
* DevExpress Dashboard (_entry-editor-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { MeasureDefinition } from '../../../model/colorization/measure-definition';
import { ColorSchemeEntry } from '../../../model/colorization/color-scheme-entry';
import { DimensionKey } from '../../../model/colorization/dimension-key';
import { DataSourceBrowser } from '../../../common/_data-source-browser';
import { Color } from '../../../model/color';
import * as ko from 'knockout';
export declare class EntryEditorViewModel {
    private colorPalette;
    constructor(colorPalette: ko.ObservableArray<Color>);
    editEntry: (dataSourceBrowser: DataSourceBrowser, entry: ColorSchemeEntry, colorByMeasures: boolean, availableMeasures: MeasureDefinition[], updateEntry: (entry: ColorSchemeEntry) => void, isAutoGenerated?: boolean) => void;
    close: () => void;
    private subscribeObservables;
    private validate;
    private invalidate;
    visible: ko.Observable<boolean>;
    entryToEdit: ko.Observable<ColorSchemeEntry>;
    updateEntry: (entry: ColorSchemeEntry) => void;
    isAutogenerated: ko.Observable<boolean>;
    hasMeasures: ko.Observable<boolean>;
    availableMeasures: ko.ObservableArray<MeasureDefinition>;
    measuresValidationRules: any[];
    dimensionEditors: ko.ObservableArray<any>;
    dimensionKeys: ko.ObservableArray<DimensionKey>;
    measureKeys: ko.ObservableArray<MeasureDefinition>;
    selectedMeasuresIds: ko.Computed<Array<any>>;
    color: ko.Observable<string>;
    private _subscriptions;
    private _validationGroupName;
}