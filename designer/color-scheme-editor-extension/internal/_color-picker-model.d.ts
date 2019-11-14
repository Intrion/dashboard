/**
* DevExpress Dashboard (_color-picker-model.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { ColorSchemeModel } from './_color-scheme-model';
import { Color } from '../../../model/color';
import { ColorSchemeEntry } from '../../../model/colorization/color-scheme-entry';
import * as ko from 'knockout';
export declare class ColorPickerModel {
    private colorSchemeModel;
    private colorPalette;
    constructor(colorSchemeModel: ColorSchemeModel, colorPalette: ko.ObservableArray<Color>);
    target: ko.Observable<HTMLElement>;
    content: ko.Observable<{
        name: string;
        data: any;
    }>;
    visible: ko.Computed<boolean>;
    confirm: () => void;
    init(entry: ColorSchemeEntry, target?: HTMLElement): void;
    private _createViewModel;
    private colorCss;
    private entry;
}
