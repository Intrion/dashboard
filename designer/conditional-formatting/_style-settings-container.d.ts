/**
* DevExpress Dashboard (_style-settings-container.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
import { StyleSettingsBase } from '../../model/format-rules/style-settings/style-settings-base';
export declare var Palette: {
    standard: string[];
    bar: string[];
    gradient: string[];
    getLabelText: (type: string, empty: string) => string;
};
export declare class StyleSettingsContainer {
    isRange: boolean;
    isGradient: boolean;
    isEmptyAllowed: boolean;
    constructor(isRange: boolean, isGradient: boolean, isEmptyAllowed: boolean);
    isEmpty(type: string): boolean;
    isLabel(type: string): boolean;
    isTransparent(type: string): boolean;
    isIconSettings(style: StyleSettingsBase): boolean;
    getAppearanceOrBarStyleType(style: StyleSettingsBase): string;
    getAppearanceOrBarStyleCSS(style: StyleSettingsBase): string;
    getAppearanceStyleCSS(appearanceType: string): string;
    getIconClass(iconType: string): string;
    getLabelText(type: string): string;
    getAppearanceTypeLocalization(appearanceTypeId: string): string;
    getIconTypeLocalization(iconTypeId: string): string;
}
