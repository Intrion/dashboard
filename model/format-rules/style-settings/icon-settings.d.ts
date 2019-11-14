/**
* DevExpress Dashboard (icon-settings.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { StyleSettingsBase } from './style-settings-base';
import { FormatConditionIconType } from '../../enums';
import * as ko from 'knockout';
export declare class IconSettings extends StyleSettingsBase {
    iconType: ko.Observable<FormatConditionIconType>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    equals(style: StyleSettingsBase): boolean;
    clone(): StyleSettingsBase;
    setSpecificType(type: FormatConditionIconType): void;
    init(): void;
}
