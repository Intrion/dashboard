/**
* DevExpress Dashboard (range-index-settings.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { StyleSettingsBase } from './style-settings-base';
import * as ko from 'knockout';
export declare class RangeIndexSettings extends StyleSettingsBase {
    index: ko.Observable<number>;
    isBarStyle: ko.Observable<boolean>;
    constructor(index: number);
    equals(style: StyleSettingsBase): boolean;
    clone(): StyleSettingsBase;
}
