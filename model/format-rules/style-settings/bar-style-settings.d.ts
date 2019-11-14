/**
* DevExpress Dashboard (bar-style-settings.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { StyleSettingsBase } from './style-settings-base';
import { Color } from '../../color';
import * as ko from 'knockout';
export declare class BarStyleSettings extends StyleSettingsBase {
    predefinedColor: ko.Observable<string>;
    color: ko.Observable<Color>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    equals(style: StyleSettingsBase): boolean;
    clone(): StyleSettingsBase;
    setSpecificType(type: string): void;
    init(): void;
}
