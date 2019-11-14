﻿/**
* DevExpress Dashboard (_appearance-settings-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class appearanceSettingsProvider {
    static toCssClassBody(appearanceType: any, theme?: string): string;
    static toCss(appearanceType: any): string;
    static backAndGradientColorGroupsToBackColor(appearanceType: any): any;
    private static _backColorsWithFontGroupToBackColor;
    private static isDark;
}
