/**
* DevExpress Dashboard (_style-settings-provider.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare class styleSettingsProvider {
    private static cssClassNames;
    static toIconCssClass(iconType: any): string;
    static inctanceCounter: number;
    static hiddenTextCounter: number;
    cfModel: any;
    cssCustomClasses: any;
    cssCustomClassesLinks: Array<any>;
    id: number;
    barCache: {
        [key: string]: {
            barContainer: JQuery;
            container: JQuery;
            barDiv: JQuery;
            showBarOnly: boolean;
            textDiv: JQuery;
            axisDiv: JQuery;
            tooltipDiv: JQuery;
            drawAxis: boolean;
        }[];
    };
    padding: string;
    barPrefixes: Array<string>;
    drawingLocked: boolean;
    wordWrap: boolean;
    constructor();
    FontStyle: {
        Bold: number;
        Italic: number;
        Underline: number;
        Strikeout: number;
    };
    DataAttributes: {
        Bar: string;
        Axis: string;
        NormalizedValue: string;
        ZeroPosition: string;
        AllowNegativeAxis: string;
        DrawAxis: string;
    };
    initialize(cfModel: any, wordWrap?: boolean): void;
    draw(): void;
    updateBarWidth(barPrefix: any): void;
    applyStyleSettings(container: HTMLElement, styleSettingsInfo: any, ignoreImageSettings: any, barPrefix?: any, forceLeftAlignment?: boolean): void;
    private _getContainerHeights;
    private _createCssClassName;
    private _applyIconSettings;
    private _textAlignmentIsLeft;
    private _getBarInfo;
    private _createBarContent;
    private _createBarDiv;
    private _createAxisDiv;
    private _setBarBounds;
    private _setAxisBounds;
    private _getCustomBackColor;
    private _getRangeBackColorStyleSettings;
    private _getBackColor;
    private _clearCssClasses;
    private _registerCssClasses;
    private _getCssTdSelector;
    private _createCssClassFromCustomAppearanceType;
    private _createCssClassFromPredefinedAppearanceType;
}
