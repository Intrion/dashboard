﻿/**
* DevExpress Dashboard (range-converter.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormatConditionRangeSetPredefinedType;
(function (FormatConditionRangeSetPredefinedType) {
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["None"] = 0] = "None";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Custom"] = 1] = "Custom";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Arrows2"] = 2] = "Arrows2";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Arrows3"] = 3] = "Arrows3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Arrows4"] = 4] = "Arrows4";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Arrows5"] = 5] = "Arrows5";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ArrowsGray2"] = 6] = "ArrowsGray2";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ArrowsGray3"] = 7] = "ArrowsGray3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ArrowsGray4"] = 8] = "ArrowsGray4";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ArrowsGray5"] = 9] = "ArrowsGray5";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["PositiveNegative3"] = 10] = "PositiveNegative3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Stars3"] = 11] = "Stars3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Quarters5"] = 12] = "Quarters5";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Bars4"] = 13] = "Bars4";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Bars5"] = 14] = "Bars5";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Boxes5"] = 15] = "Boxes5";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["TrafficLights3"] = 16] = "TrafficLights3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Circles2"] = 17] = "Circles2";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Circles3"] = 18] = "Circles3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Circles4"] = 19] = "Circles4";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["CirclesRedToBlack4"] = 20] = "CirclesRedToBlack4";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Signs3"] = 21] = "Signs3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Symbols2"] = 22] = "Symbols2";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Symbols3"] = 23] = "Symbols3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["SymbolsCircled2"] = 24] = "SymbolsCircled2";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["SymbolsCircled3"] = 25] = "SymbolsCircled3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["Flags3"] = 26] = "Flags3";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ColorsPaleRedGreen"] = 27] = "ColorsPaleRedGreen";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ColorsPaleRedGreenBlue"] = 28] = "ColorsPaleRedGreenBlue";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ColorsPaleRedYellowGreenBlue"] = 29] = "ColorsPaleRedYellowGreenBlue";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ColorsPaleRedOrangeYellowGreenBlue"] = 30] = "ColorsPaleRedOrangeYellowGreenBlue";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ColorsRedGreen"] = 31] = "ColorsRedGreen";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ColorsRedGreenBlue"] = 32] = "ColorsRedGreenBlue";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ColorsRedYellowGreenBlue"] = 33] = "ColorsRedYellowGreenBlue";
    FormatConditionRangeSetPredefinedType[FormatConditionRangeSetPredefinedType["ColorsRedOrangeYellowGreenBlue"] = 34] = "ColorsRedOrangeYellowGreenBlue";
})(FormatConditionRangeSetPredefinedType = exports.FormatConditionRangeSetPredefinedType || (exports.FormatConditionRangeSetPredefinedType = {}));
var FormatConditionRangeGradientPredefinedType;
(function (FormatConditionRangeGradientPredefinedType) {
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["None"] = 0] = "None";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["Custom"] = 1] = "Custom";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["GreenWhite"] = 2] = "GreenWhite";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["WhiteGreen"] = 3] = "WhiteGreen";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["RedWhite"] = 4] = "RedWhite";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["WhiteRed"] = 5] = "WhiteRed";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["YellowGreen"] = 6] = "YellowGreen";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["GreenYellow"] = 7] = "GreenYellow";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["YellowRed"] = 8] = "YellowRed";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["RedYellow"] = 9] = "RedYellow";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["BlueWhite"] = 10] = "BlueWhite";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["WhiteBlue"] = 11] = "WhiteBlue";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["BlueRed"] = 12] = "BlueRed";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["RedBlue"] = 13] = "RedBlue";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["YellowBlue"] = 14] = "YellowBlue";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["BlueYellow"] = 15] = "BlueYellow";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["GreenBlue"] = 16] = "GreenBlue";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["BlueGreen"] = 17] = "BlueGreen";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["GreenWhiteBlue"] = 18] = "GreenWhiteBlue";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["BlueWhiteGreen"] = 19] = "BlueWhiteGreen";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["BlueWhiteRed"] = 20] = "BlueWhiteRed";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["RedWhiteBlue"] = 21] = "RedWhiteBlue";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["GreenWhiteRed"] = 22] = "GreenWhiteRed";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["RedWhiteGreen"] = 23] = "RedWhiteGreen";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["GreenYellowRed"] = 24] = "GreenYellowRed";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["RedYellowGreen"] = 25] = "RedYellowGreen";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["BlueYellowRed"] = 26] = "BlueYellowRed";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["RedYellowBlue"] = 27] = "RedYellowBlue";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["GreenYellowBlue"] = 28] = "GreenYellowBlue";
    FormatConditionRangeGradientPredefinedType[FormatConditionRangeGradientPredefinedType["BlueYellowGreen"] = 29] = "BlueYellowGreen";
})(FormatConditionRangeGradientPredefinedType = exports.FormatConditionRangeGradientPredefinedType || (exports.FormatConditionRangeGradientPredefinedType = {}));
var FormatConditionIconGroups;
(function (FormatConditionIconGroups) {
    FormatConditionIconGroups[FormatConditionIconGroups["Directional"] = 0] = "Directional";
    FormatConditionIconGroups[FormatConditionIconGroups["Indicators"] = 1] = "Indicators";
    FormatConditionIconGroups[FormatConditionIconGroups["Flags"] = 2] = "Flags";
    FormatConditionIconGroups[FormatConditionIconGroups["Shapes"] = 3] = "Shapes";
    FormatConditionIconGroups[FormatConditionIconGroups["RatingsMonochrome"] = 4] = "RatingsMonochrome";
    FormatConditionIconGroups[FormatConditionIconGroups["RatingsColor"] = 5] = "RatingsColor";
})(FormatConditionIconGroups = exports.FormatConditionIconGroups || (exports.FormatConditionIconGroups = {}));
var FormatConditionRangeSetTypeGroups;
(function (FormatConditionRangeSetTypeGroups) {
    FormatConditionRangeSetTypeGroups[FormatConditionRangeSetTypeGroups["Ranges2"] = 0] = "Ranges2";
    FormatConditionRangeSetTypeGroups[FormatConditionRangeSetTypeGroups["Ranges3"] = 1] = "Ranges3";
    FormatConditionRangeSetTypeGroups[FormatConditionRangeSetTypeGroups["Ranges4"] = 2] = "Ranges4";
    FormatConditionRangeSetTypeGroups[FormatConditionRangeSetTypeGroups["Ranges5"] = 3] = "Ranges5";
})(FormatConditionRangeSetTypeGroups || (FormatConditionRangeSetTypeGroups = {}));
var FormatConditionRangeGradientTypeGroups;
(function (FormatConditionRangeGradientTypeGroups) {
    FormatConditionRangeGradientTypeGroups[FormatConditionRangeGradientTypeGroups["TwoColors"] = 0] = "TwoColors";
    FormatConditionRangeGradientTypeGroups[FormatConditionRangeGradientTypeGroups["ThreeColors"] = 1] = "ThreeColors";
})(FormatConditionRangeGradientTypeGroups || (FormatConditionRangeGradientTypeGroups = {}));
var FormatConditionConverter = (function () {
    function FormatConditionConverter() {
    }
    FormatConditionConverter.getStyleList = function (type) {
        var styleList = {};
        var iconTypes = FormatConditionConverter.toIconTypes(type);
        if (iconTypes) {
            styleList.list = iconTypes;
            styleList.isIcon = true;
        }
        else {
            styleList.list = FormatConditionConverter.toColorTypes(type);
            styleList.isIcon = false;
        }
        return styleList;
    };
    FormatConditionConverter.toColorTypes = function (colorRangeSetType) {
        switch (colorRangeSetType) {
            case FormatConditionRangeSetPredefinedType.ColorsPaleRedGreen:
                return ["PaleRed", "PaleGreen"];
            case FormatConditionRangeSetPredefinedType.ColorsPaleRedGreenBlue:
                return ["PaleRed", "PaleGreen", "PaleBlue"];
            case FormatConditionRangeSetPredefinedType.ColorsPaleRedYellowGreenBlue:
                return ["PaleRed", "PaleYellow", "PaleGreen", "PaleBlue"];
            case FormatConditionRangeSetPredefinedType.ColorsPaleRedOrangeYellowGreenBlue:
                return ["PaleRed", "PaleOrange", "PaleYellow", "PaleGreen", "PaleBlue"];
            case FormatConditionRangeSetPredefinedType.ColorsRedGreen:
                return ["Red", "Green"];
            case FormatConditionRangeSetPredefinedType.ColorsRedGreenBlue:
                return ["Red", "Green", "Blue"];
            case FormatConditionRangeSetPredefinedType.ColorsRedYellowGreenBlue:
                return ["Red", "Yellow", "Green", "Blue"];
            case FormatConditionRangeSetPredefinedType.ColorsRedOrangeYellowGreenBlue:
                return ["Red", "Orange", "Yellow", "Green", "Blue"];
            default:
                return null;
        }
    };
    FormatConditionConverter.toIconTypes = function (iconRangeSetType) {
        switch (iconRangeSetType) {
            case FormatConditionRangeSetPredefinedType.Arrows2:
                return ["DirectionalRedDownArrow", "DirectionalGreenArrowUp"];
            case FormatConditionRangeSetPredefinedType.Arrows3:
                return ["DirectionalRedDownArrow", "DirectionalYellowSideArrow", "DirectionalGreenArrowUp"];
            case FormatConditionRangeSetPredefinedType.Arrows4:
                return ["DirectionalRedDownArrow", "DirectionalYellowDownInclineArrow", "DirectionalYellowUpInclineArrow", "DirectionalGreenArrowUp"];
            case FormatConditionRangeSetPredefinedType.Arrows5:
                return ["DirectionalRedDownArrow", "DirectionalYellowDownInclineArrow", "DirectionalYellowSideArrow", "DirectionalYellowUpInclineArrow", "DirectionalGreenArrowUp"];
            case FormatConditionRangeSetPredefinedType.ArrowsGray2:
                return ["DirectionalGrayDownArrow", "DirectionalGrayArrowUp"];
            case FormatConditionRangeSetPredefinedType.ArrowsGray3:
                return ["DirectionalGrayDownArrow", "DirectionalGraySideArrow", "DirectionalGrayArrowUp"];
            case FormatConditionRangeSetPredefinedType.ArrowsGray4:
                return ["DirectionalGrayDownArrow", "DirectionalGrayDownInclineArrow", "DirectionalGrayUpInclineArrow", "DirectionalGrayArrowUp"];
            case FormatConditionRangeSetPredefinedType.ArrowsGray5:
                return ["DirectionalGrayDownArrow", "DirectionalGrayDownInclineArrow", "DirectionalGraySideArrow", "DirectionalGrayUpInclineArrow", "DirectionalGrayArrowUp"];
            case FormatConditionRangeSetPredefinedType.PositiveNegative3:
                return ["DirectionalRedTriangleDown", "DirectionalYellowDash", "DirectionalGreenTriangleUp"];
            case FormatConditionRangeSetPredefinedType.Stars3:
                return ["RatingEmptyGrayStar", "RatingHalfGrayStar", "RatingFullGrayStar"];
            case FormatConditionRangeSetPredefinedType.Quarters5:
                return ["RatingEmptyGrayCircle", "Rating3QuartersGrayCircle", "Rating2QuartersGrayCircle", "Rating1QuarterGrayCircle", "RatingFullGrayCircle"];
            case FormatConditionRangeSetPredefinedType.Bars4:
                return ["Rating1Bar", "Rating2Bars", "Rating3Bars", "Rating4Bars"];
            case FormatConditionRangeSetPredefinedType.Bars5:
                return ["Rating0Bars", "Rating1Bar", "Rating2Bars", "Rating3Bars", "Rating4Bars"];
            case FormatConditionRangeSetPredefinedType.Boxes5:
                return ["Rating0FilledBoxes", "Rating1FilledBox", "Rating2FilledBoxes", "Rating3FilledBoxes", "Rating4FilledBoxes"];
            case FormatConditionRangeSetPredefinedType.TrafficLights3:
                return ["ShapeRedTrafficLight", "ShapeYellowTrafficLight", "ShapeGreenTrafficLight"];
            case FormatConditionRangeSetPredefinedType.Circles2:
                return ["ShapeRedCircle", "ShapeGreenCircle"];
            case FormatConditionRangeSetPredefinedType.Circles3:
                return ["ShapeRedCircle", "ShapeYellowCircle", "ShapeGreenCircle"];
            case FormatConditionRangeSetPredefinedType.Circles4:
                return ["RatingFullGrayCircle", "ShapeRedCircle", "ShapeYellowCircle", "ShapeGreenCircle"];
            case FormatConditionRangeSetPredefinedType.CirclesRedToBlack4:
                return ["RatingFullGrayCircle", "ShapeLightGrayCircle", "ShapeLightRedCircle", "ShapeRedCircle"];
            case FormatConditionRangeSetPredefinedType.Signs3:
                return ["ShapeRedDiamond", "ShapeYellowTriangle", "ShapeGreenCircle"];
            case FormatConditionRangeSetPredefinedType.Symbols2:
                return ["IndicatorRedCross", "IndicatorGreenCheck"];
            case FormatConditionRangeSetPredefinedType.Symbols3:
                return ["IndicatorRedCross", "IndicatorYellowExclamation", "IndicatorGreenCheck"];
            case FormatConditionRangeSetPredefinedType.SymbolsCircled2:
                return ["IndicatorCircledRedCross", "IndicatorCircledGreenCheck"];
            case FormatConditionRangeSetPredefinedType.SymbolsCircled3:
                return ["IndicatorCircledRedCross", "IndicatorCircledYellowExclamation", "IndicatorCircledGreenCheck"];
            case FormatConditionRangeSetPredefinedType.Flags3:
                return ["IndicatorRedFlag", "IndicatorYellowFlag", "IndicatorGreenFlag"];
            default:
                return null;
        }
    };
    FormatConditionConverter.toAppearanceTypes = function (gradientType) {
        switch (gradientType) {
            case FormatConditionRangeGradientPredefinedType.GreenWhite:
                return ["GradientGreen", "GradientTransparent"];
            case FormatConditionRangeGradientPredefinedType.WhiteGreen:
                return ["GradientTransparent", "GradientGreen"];
            case FormatConditionRangeGradientPredefinedType.RedWhite:
                return ["GradientRed", "GradientTransparent"];
            case FormatConditionRangeGradientPredefinedType.WhiteRed:
                return ["GradientTransparent", "GradientRed"];
            case FormatConditionRangeGradientPredefinedType.GreenYellow:
                return ["GradientGreen", "GradientYellow"];
            case FormatConditionRangeGradientPredefinedType.YellowGreen:
                return ["GradientYellow", "GradientGreen"];
            case FormatConditionRangeGradientPredefinedType.RedYellow:
                return ["GradientRed", "GradientYellow"];
            case FormatConditionRangeGradientPredefinedType.YellowRed:
                return ["GradientYellow", "GradientRed"];
            case FormatConditionRangeGradientPredefinedType.BlueWhite:
                return ["GradientBlue", "GradientTransparent"];
            case FormatConditionRangeGradientPredefinedType.WhiteBlue:
                return ["GradientTransparent", "GradientBlue"];
            case FormatConditionRangeGradientPredefinedType.BlueRed:
                return ["GradientBlue", "GradientRed"];
            case FormatConditionRangeGradientPredefinedType.RedBlue:
                return ["GradientRed", "GradientBlue"];
            case FormatConditionRangeGradientPredefinedType.BlueYellow:
                return ["GradientBlue", "GradientYellow"];
            case FormatConditionRangeGradientPredefinedType.YellowBlue:
                return ["GradientYellow", "GradientBlue"];
            case FormatConditionRangeGradientPredefinedType.BlueGreen:
                return ["GradientBlue", "GradientGreen"];
            case FormatConditionRangeGradientPredefinedType.GreenBlue:
                return ["GradientGreen", "GradientBlue"];
            case FormatConditionRangeGradientPredefinedType.GreenWhiteBlue:
                return ["GradientGreen", "GradientTransparent", "GradientBlue"];
            case FormatConditionRangeGradientPredefinedType.BlueWhiteGreen:
                return ["GradientBlue", "GradientTransparent", "GradientGreen"];
            case FormatConditionRangeGradientPredefinedType.RedWhiteBlue:
                return ["GradientRed", "GradientTransparent", "GradientBlue"];
            case FormatConditionRangeGradientPredefinedType.BlueWhiteRed:
                return ["GradientBlue", "GradientTransparent", "GradientRed"];
            case FormatConditionRangeGradientPredefinedType.GreenWhiteRed:
                return ["GradientGreen", "GradientTransparent", "GradientRed"];
            case FormatConditionRangeGradientPredefinedType.RedWhiteGreen:
                return ["GradientRed", "GradientTransparent", "GradientGreen"];
            case FormatConditionRangeGradientPredefinedType.GreenYellowRed:
                return ["GradientGreen", "GradientYellow", "GradientRed"];
            case FormatConditionRangeGradientPredefinedType.RedYellowGreen:
                return ["GradientRed", "GradientYellow", "GradientGreen"];
            case FormatConditionRangeGradientPredefinedType.BlueYellowRed:
                return ["GradientBlue", "GradientYellow", "GradientRed"];
            case FormatConditionRangeGradientPredefinedType.RedYellowBlue:
                return ["GradientRed", "GradientYellow", "GradientBlue"];
            case FormatConditionRangeGradientPredefinedType.GreenYellowBlue:
                return ["GradientGreen", "GradientYellow", "GradientBlue"];
            case FormatConditionRangeGradientPredefinedType.BlueYellowGreen:
                return ["GradientBlue", "GradientYellow", "GradientGreen"];
            default:
                return null;
        }
    };
    FormatConditionConverter.toGroupIconTypes = function (iconsGroup) {
        switch (iconsGroup) {
            case FormatConditionIconGroups.Directional:
                return ["DirectionalGreenArrowUp",
                    "DirectionalYellowUpInclineArrow",
                    "DirectionalYellowSideArrow",
                    "DirectionalYellowDownInclineArrow",
                    "DirectionalRedDownArrow",
                    "DirectionalGrayArrowUp",
                    "DirectionalGrayUpInclineArrow",
                    "DirectionalGraySideArrow",
                    "DirectionalGrayDownInclineArrow",
                    "DirectionalGrayDownArrow",
                    "DirectionalYellowDash",
                    "DirectionalRedTriangleDown",
                    "DirectionalGreenTriangleUp"];
            case FormatConditionIconGroups.RatingsMonochrome:
                return ["RatingFullGrayCircle",
                    "Rating1QuarterGrayCircle",
                    "Rating2QuartersGrayCircle",
                    "Rating3QuartersGrayCircle",
                    "RatingEmptyGrayCircle",
                    "RatingFullGrayStar",
                    "RatingHalfGrayStar",
                    "RatingEmptyGrayStar"];
            case FormatConditionIconGroups.RatingsColor:
                return ["Rating4Bars",
                    "Rating3Bars",
                    "Rating2Bars",
                    "Rating1Bar",
                    "Rating0Bars",
                    "Rating4FilledBoxes",
                    "Rating3FilledBoxes",
                    "Rating2FilledBoxes",
                    "Rating1FilledBox",
                    "Rating0FilledBoxes"];
            case FormatConditionIconGroups.Indicators:
                return ["IndicatorGreenCheck",
                    "IndicatorYellowExclamation",
                    "IndicatorRedCross",
                    "IndicatorCircledGreenCheck",
                    "IndicatorCircledYellowExclamation",
                    "IndicatorCircledRedCross",
                    "ShapeYellowTriangle",
                    "ShapeRedDiamond"];
            case FormatConditionIconGroups.Flags:
                return ["IndicatorGreenFlag",
                    "IndicatorYellowFlag",
                    "IndicatorRedFlag"];
            case FormatConditionIconGroups.Shapes:
                return ["ShapeGreenTrafficLight",
                    "ShapeYellowTrafficLight",
                    "ShapeRedTrafficLight",
                    "ShapeGreenCircle",
                    "ShapeYellowCircle",
                    "ShapeRedCircle",
                    "ShapeLightRedCircle",
                    "ShapeLightGrayCircle"];
            default:
                throw new Error("Undefined icon group type");
        }
    };
    return FormatConditionConverter;
}());
exports.FormatConditionConverter = FormatConditionConverter;
