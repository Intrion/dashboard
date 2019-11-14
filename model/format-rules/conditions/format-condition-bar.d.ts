/**
* DevExpress Dashboard (format-condition-bar.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import DxDesigner from '@devexpress/analytics-core/dx-analytics-core';
import { FormatConditionMinMaxBase } from './format-condition-min-max-base';
import { FormatConditionBarOptions } from './format-condition-bar-options';
import { BarStyleSettings } from '../style-settings/bar-style-settings';
import { StyleSettingsBase } from '../style-settings/style-settings-base';
import * as ko from 'knockout';
export declare class FormatConditionBar extends FormatConditionMinMaxBase {
    barOptions: FormatConditionBarOptions;
    negativeStyleSettings: BarStyleSettings;
    currentStyleSettingsType: ko.Observable<string>;
    currentStyleSettings: ko.Computed<StyleSettingsBase>;
    constructor(modelJson?: any, serializer?: DxDesigner.Analytics.Utils.ModelSerializer);
    protected _getStyleSettingsInfo(): DxDesigner.Analytics.Utils.ISerializationInfoArray;
    getSpecificType: () => any;
    setSpecificType: (type: string) => void;
    getDefaultStyleSettingsType(): string;
    init(): void;
}
