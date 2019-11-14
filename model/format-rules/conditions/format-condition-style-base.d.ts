/**
* DevExpress Dashboard (format-condition-style-base.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { AppearanceSettings } from '../style-settings/appearance-settings';
import { IconSettings } from '../style-settings/icon-settings';
import { BarStyleSettings } from '../style-settings/bar-style-settings';
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionBase } from './format-condition-base';
import { StyleSettingsBase } from '../style-settings/style-settings-base';
import * as ko from 'knockout';
export declare let _styleSettingsTypesMap: {
    "AppearanceSettings": typeof AppearanceSettings;
    "IconSettings": typeof IconSettings;
    "StyleSettings": typeof BarStyleSettings;
};
export declare let currentStyleSettingInfo: (styleSettingsType: ko.Observable<string>) => DxDesigner.Analytics.Utils.ISerializationInfo[];
export declare abstract class FormatConditionStyleBase extends FormatConditionBase {
    styleSettings: ko.Observable<StyleSettingsBase>;
    private _styleSettingsType;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    getInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getDefaultStyleSettingsType(): string;
    isValid(): boolean;
    init(): void;
    protected abstract _getStyleSettingsInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
}
