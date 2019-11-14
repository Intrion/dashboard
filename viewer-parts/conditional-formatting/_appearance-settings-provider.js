/**
* DevExpress Dashboard (_appearance-settings-provider.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _dx_devextreme_themes_integration_1 = require("../_dx-devextreme-themes-integration");
var AppearanceType = {
    WhiteColor: '#FFFFFF',
    GrayedTextColor: '#D3D3D3',
    LightGradientRedColor: 'rgb(255, 166, 173)',
    LightGradientYellowColor: 'rgb(255, 226, 81)',
    LightGradientGreenColor: 'rgb(139, 210, 78)',
    LightGradientBlueColor: 'rgb(149, 204, 255)',
    LightGradientPurpleColor: 'rgb(223, 166, 232)',
    LightGradientCyanColor: 'rgb(113, 223, 221)',
    LightGradientOrangeColor: 'rgb(255, 182, 90)',
    LightGradientTransparentColor: '#ffffff',
    DarkGradientRedColor: '#AC203D',
    DarkGradientYellowColor: '#FF8A01',
    DarkGradientGreenColor: '#538A31',
    DarkGradientBlueColor: '#4371B0',
    DarkGradientPurpleColor: '#7E53A2',
    DarkGradientCyanColor: '#149BA3',
    DarkGradientOrangeColor: '#D83D00',
    DarkGradientTransparentColor: '#303030',
    LightPaleRedColor: 'rgb(255, 221, 224)',
    LightPaleYellowColor: 'rgb(255, 245, 174)',
    LightPaleGreenColor: 'rgb(208, 239, 172)',
    LightPaleBlueColor: 'rgb(213, 237, 255)',
    LightPalePurpleColor: 'rgb(244, 221, 247)',
    LightPaleCyanColor: 'rgb(194, 244, 243)',
    LightPaleOrangeColor: 'rgb(255, 228, 180)',
    LightPaleGrayColor: 'rgb(234, 234, 234)',
    DarkPaleRedColor: '#5B2D3D',
    DarkPaleYellowColor: '#51492D',
    DarkPaleGreenColor: '#3B4D2D',
    DarkPaleBlueColor: '#2D3F5A',
    DarkPalePurpleColor: '#512D55',
    DarkPaleCyanColor: '#2D4B4B',
    DarkPaleOrangeColor: '#593E2D',
    DarkPaleGrayColor: '#444444',
    LightRedColor: 'rgb(226, 60, 76)',
    LightYellowColor: 'rgb(255, 166, 38)',
    LightGreenColor: 'rgb(101, 172, 80)',
    LightBlueColor: 'rgb(89, 143, 216)',
    LightPurpleColor: 'rgb(148, 105, 184)',
    LightCyanColor: 'rgb(39, 192, 187)',
    LightOrangeColor: 'rgb(255, 92, 12)',
    LightGrayColor: 'rgb(111, 111, 111)',
    DarkRedColor: '#E23C4C',
    DarkYellowColor: '#FFA626',
    DarkGreenColor: '#65AC50',
    DarkBlueColor: '#598FD8',
    DarkPurpleColor: '#9469B8',
    DarkCyanColor: '#27C0BB',
    DarkOrangeColor: '#FF5C0C',
    DarkGrayColor: '#6F6F6F'
};
var appearanceSettingsProvider = (function () {
    function appearanceSettingsProvider() {
    }
    appearanceSettingsProvider.toCssClassBody = function (appearanceType, theme) {
        return '{ ' + appearanceSettingsProvider.toCss(appearanceType) + ' }';
    };
    appearanceSettingsProvider.toCss = function (appearanceType) {
        var isDark = appearanceSettingsProvider.isDark(), color;
        switch (appearanceType) {
            case 'FontBold':
                return 'font-weight: bold;';
            case 'FontItalic':
                return 'font-style: italic;';
            case 'FontUnderline':
                return 'text-decoration: underline;';
            case 'FontGrayed':
                return 'color: ' + AppearanceType.GrayedTextColor + ';';
            case 'FontRed':
                return 'color: ' + (isDark ? AppearanceType.DarkRedColor : AppearanceType.LightRedColor) + ';';
            case 'FontYellow':
                return 'color: ' + (isDark ? AppearanceType.DarkYellowColor : AppearanceType.LightYellowColor) + ';';
            case 'FontGreen':
                return 'color: ' + (isDark ? AppearanceType.DarkGreenColor : AppearanceType.LightGreenColor) + ';';
            case 'FontBlue':
                return 'color: ' + (isDark ? AppearanceType.DarkBlueColor : AppearanceType.LightBlueColor) + ';';
            default:
                color = appearanceSettingsProvider.backAndGradientColorGroupsToBackColor(appearanceType);
                if (color !== undefined)
                    return 'background-color: ' + color + ';';
                color = appearanceSettingsProvider._backColorsWithFontGroupToBackColor(appearanceType, isDark);
                if (color !== undefined)
                    return 'background-color: ' + color + '; color: ' + AppearanceType.WhiteColor + ';';
                return '';
        }
        ;
    };
    appearanceSettingsProvider.backAndGradientColorGroupsToBackColor = function (appearanceType) {
        var isDark = appearanceSettingsProvider.isDark();
        switch (appearanceType) {
            case 'PaleRed':
                return isDark ? AppearanceType.DarkPaleRedColor : AppearanceType.LightPaleRedColor;
            case 'PaleYellow':
                return isDark ? AppearanceType.DarkPaleYellowColor : AppearanceType.LightPaleYellowColor;
            case 'PaleGreen':
                return isDark ? AppearanceType.DarkPaleGreenColor : AppearanceType.LightPaleGreenColor;
            case 'PaleBlue':
                return isDark ? AppearanceType.DarkPaleBlueColor : AppearanceType.LightPaleBlueColor;
            case 'PalePurple':
                return isDark ? AppearanceType.DarkPalePurpleColor : AppearanceType.LightPalePurpleColor;
            case 'PaleCyan':
                return isDark ? AppearanceType.DarkPaleCyanColor : AppearanceType.LightPaleCyanColor;
            case 'PaleOrange':
                return isDark ? AppearanceType.DarkPaleOrangeColor : AppearanceType.LightPaleOrangeColor;
            case 'PaleGray':
                return isDark ? AppearanceType.DarkPaleGrayColor : AppearanceType.LightPaleGrayColor;
            case 'GradientRed':
                return isDark ? AppearanceType.DarkGradientRedColor : AppearanceType.LightGradientRedColor;
            case 'GradientYellow':
                return isDark ? AppearanceType.DarkGradientYellowColor : AppearanceType.LightGradientYellowColor;
            case 'GradientGreen':
                return isDark ? AppearanceType.DarkGradientGreenColor : AppearanceType.LightGradientGreenColor;
            case 'GradientBlue':
                return isDark ? AppearanceType.DarkGradientBlueColor : AppearanceType.LightGradientBlueColor;
            case 'GradientPurple':
                return isDark ? AppearanceType.DarkGradientPurpleColor : AppearanceType.LightGradientPurpleColor;
            case 'GradientCyan':
                return isDark ? AppearanceType.DarkGradientCyanColor : AppearanceType.LightGradientCyanColor;
            case 'GradientOrange':
                return isDark ? AppearanceType.DarkGradientOrangeColor : AppearanceType.LightGradientOrangeColor;
            case 'GradientTransparent':
                return isDark ? AppearanceType.DarkGradientTransparentColor : AppearanceType.LightGradientTransparentColor;
            default: {
            }
        }
    };
    appearanceSettingsProvider._backColorsWithFontGroupToBackColor = function (appearanceType, isDark) {
        switch (appearanceType) {
            case 'Red':
                return isDark ? AppearanceType.DarkRedColor : AppearanceType.LightRedColor;
            case 'Yellow':
                return isDark ? AppearanceType.DarkYellowColor : AppearanceType.LightYellowColor;
            case 'Green':
                return isDark ? AppearanceType.DarkGreenColor : AppearanceType.LightGreenColor;
            case 'Blue':
                return isDark ? AppearanceType.DarkBlueColor : AppearanceType.LightBlueColor;
            case 'Purple':
                return isDark ? AppearanceType.DarkPurpleColor : AppearanceType.LightPurpleColor;
            case 'Cyan':
                return isDark ? AppearanceType.DarkCyanColor : AppearanceType.LightCyanColor;
            case 'Orange':
                return isDark ? AppearanceType.DarkOrangeColor : AppearanceType.LightOrangeColor;
            case 'Gray':
                return isDark ? AppearanceType.DarkGrayColor : AppearanceType.LightGrayColor;
            default: {
            }
        }
    };
    appearanceSettingsProvider.isDark = function () {
        return _dx_devextreme_themes_integration_1.getBaseColorScheme() === "dark";
    };
    return appearanceSettingsProvider;
}());
exports.appearanceSettingsProvider = appearanceSettingsProvider;
