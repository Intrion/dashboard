﻿/**
* DevExpress Dashboard (range-converter.d.ts)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
export declare enum FormatConditionRangeSetPredefinedType {
    None = 0,
    Custom = 1,
    Arrows2 = 2,
    Arrows3 = 3,
    Arrows4 = 4,
    Arrows5 = 5,
    ArrowsGray2 = 6,
    ArrowsGray3 = 7,
    ArrowsGray4 = 8,
    ArrowsGray5 = 9,
    PositiveNegative3 = 10,
    Stars3 = 11,
    Quarters5 = 12,
    Bars4 = 13,
    Bars5 = 14,
    Boxes5 = 15,
    TrafficLights3 = 16,
    Circles2 = 17,
    Circles3 = 18,
    Circles4 = 19,
    CirclesRedToBlack4 = 20,
    Signs3 = 21,
    Symbols2 = 22,
    Symbols3 = 23,
    SymbolsCircled2 = 24,
    SymbolsCircled3 = 25,
    Flags3 = 26,
    ColorsPaleRedGreen = 27,
    ColorsPaleRedGreenBlue = 28,
    ColorsPaleRedYellowGreenBlue = 29,
    ColorsPaleRedOrangeYellowGreenBlue = 30,
    ColorsRedGreen = 31,
    ColorsRedGreenBlue = 32,
    ColorsRedYellowGreenBlue = 33,
    ColorsRedOrangeYellowGreenBlue = 34
}
export declare enum FormatConditionRangeGradientPredefinedType {
    None = 0,
    Custom = 1,
    GreenWhite = 2,
    WhiteGreen = 3,
    RedWhite = 4,
    WhiteRed = 5,
    YellowGreen = 6,
    GreenYellow = 7,
    YellowRed = 8,
    RedYellow = 9,
    BlueWhite = 10,
    WhiteBlue = 11,
    BlueRed = 12,
    RedBlue = 13,
    YellowBlue = 14,
    BlueYellow = 15,
    GreenBlue = 16,
    BlueGreen = 17,
    GreenWhiteBlue = 18,
    BlueWhiteGreen = 19,
    BlueWhiteRed = 20,
    RedWhiteBlue = 21,
    GreenWhiteRed = 22,
    RedWhiteGreen = 23,
    GreenYellowRed = 24,
    RedYellowGreen = 25,
    BlueYellowRed = 26,
    RedYellowBlue = 27,
    GreenYellowBlue = 28,
    BlueYellowGreen = 29
}
export declare enum FormatConditionIconGroups {
    Directional = 0,
    Indicators = 1,
    Flags = 2,
    Shapes = 3,
    RatingsMonochrome = 4,
    RatingsColor = 5
}
export interface IStyleList {
    list: Array<string>;
    isIcon: boolean;
}
export declare class FormatConditionConverter {
    static getStyleList(type: FormatConditionRangeSetPredefinedType): IStyleList;
    static toColorTypes(colorRangeSetType: FormatConditionRangeSetPredefinedType): Array<string>;
    static toIconTypes(iconRangeSetType: FormatConditionRangeSetPredefinedType): Array<string>;
    static toAppearanceTypes(gradientType: FormatConditionRangeGradientPredefinedType): Array<string>;
    static toGroupIconTypes(iconsGroup: FormatConditionIconGroups): Array<string>;
}
