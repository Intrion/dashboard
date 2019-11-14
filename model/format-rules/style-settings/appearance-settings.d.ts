/**
* DevExpress Dashboard (appearance-settings.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { StyleSettingsBase } from './style-settings-base';
import { FormatConditionAppearanceType, FontStyle } from '../../enums';
import { Color } from '../../color';
import * as ko from 'knockout';
export declare class AppearanceSettings extends StyleSettingsBase {
    appearanceType: ko.Observable<FormatConditionAppearanceType>;
    fontFamily: ko.Observable<string>;
    fontStyle: ko.Observable<FontStyle>;
    backColor: ko.Observable<Color>;
    foreColor: ko.Observable<Color>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    equals(style: StyleSettingsBase): boolean;
    clone(): StyleSettingsBase;
    setSpecificType(type: FormatConditionAppearanceType): void;
    init(): void;
}
