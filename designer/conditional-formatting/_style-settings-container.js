/**
* DevExpress Dashboard (_style-settings-container.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bar_style_settings_1 = require("../../model/format-rules/style-settings/bar-style-settings");
var icon_settings_1 = require("../../model/format-rules/style-settings/icon-settings");
var _style_settings_base_1 = require("../../model/format-rules/style-settings/metadata/_style-settings-base");
var _appearance_settings_provider_1 = require("../../viewer-parts/conditional-formatting/_appearance-settings-provider");
var _style_settings_provider_1 = require("../../viewer-parts/conditional-formatting/_style-settings-provider");
var _appearance_settings_1 = require("../../model/format-rules/style-settings/metadata/_appearance-settings");
var _icon_settings_1 = require("../../model/format-rules/style-settings/metadata/_icon-settings");
var _default_1 = require("../../data/localization/_default");
exports.Palette = {
    standard: [
        "PaleRed",
        "PaleYellow",
        "PaleGreen",
        "PaleBlue",
        "PalePurple",
        "PaleCyan",
        "PaleOrange",
        "PaleGray",
        "Red",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Cyan",
        "Orange",
        "Gray",
        "FontBold",
        "FontItalic",
        "FontUnderline",
        "FontGrayed",
        "FontRed",
        "FontYellow",
        "FontGreen",
        "FontBlue"
    ],
    bar: [
        "PaleRed",
        "PaleYellow",
        "PaleGreen",
        "PaleBlue",
        "PalePurple",
        "PaleCyan",
        "PaleOrange",
        "PaleGray",
        "Red",
        "Yellow",
        "Green",
        "Blue",
        "Purple",
        "Cyan",
        "Orange",
        "Gray"
    ],
    gradient: [
        _style_settings_base_1.emptyStyleType,
        "GradientRed",
        "GradientYellow",
        "GradientGreen",
        "GradientBlue",
        "GradientPurple",
        "GradientCyan",
        "GradientOrange",
        "GradientTransparent"
    ],
    getLabelText: function (type, empty) {
        switch (type) {
            case _style_settings_base_1.emptyStyleType: return empty ? empty : "No Style";
            case "FontBold": return "B";
            case "FontItalic": return "I";
            case "FontUnderline": return "U";
            case "FontGrayed": return "Gr";
            case "FontRed": return "R";
            case "FontYellow": return "Y";
            case "FontGreen": return "G";
            case "FontBlue": return "B";
            default: return "";
        }
    }
};
var StyleSettingsContainer = (function () {
    function StyleSettingsContainer(isRange, isGradient, isEmptyAllowed) {
        this.isRange = isRange;
        this.isGradient = isGradient;
        this.isEmptyAllowed = isEmptyAllowed;
    }
    StyleSettingsContainer.prototype.isEmpty = function (type) {
        return (this.isRange || this.isGradient) && type === _style_settings_base_1.emptyStyleType;
    };
    StyleSettingsContainer.prototype.isLabel = function (type) {
        return (type === 'GradientTransparent') || (this.getLabelText(type) !== '');
    };
    StyleSettingsContainer.prototype.isTransparent = function (type) {
        return type === 'GradientTransparent';
    };
    StyleSettingsContainer.prototype.isIconSettings = function (style) {
        return style instanceof icon_settings_1.IconSettings;
    };
    StyleSettingsContainer.prototype.getAppearanceOrBarStyleType = function (style) {
        return style instanceof bar_style_settings_1.BarStyleSettings ? style.predefinedColor() : style.appearanceType();
    };
    StyleSettingsContainer.prototype.getAppearanceOrBarStyleCSS = function (style) {
        if (!!style && !this.isIconSettings(style)) {
            var appearanceType = this.getAppearanceOrBarStyleType(style);
            if (appearanceType != _style_settings_base_1.emptyStyleType) {
                return _appearance_settings_provider_1.appearanceSettingsProvider.toCss(appearanceType);
            }
            else {
                var backColor = style instanceof bar_style_settings_1.BarStyleSettings ? style.color() : style.backColor();
                return backColor ? "background-color: " + backColor.css + ';' : '';
            }
        }
        else {
            return '';
        }
    };
    StyleSettingsContainer.prototype.getAppearanceStyleCSS = function (appearanceType) {
        var css = _appearance_settings_provider_1.appearanceSettingsProvider.toCss(appearanceType);
        if (!this.isEmptyAllowed && this.isEmpty(appearanceType)) {
            css += "display: none;";
        }
        return css;
    };
    StyleSettingsContainer.prototype.getIconClass = function (iconType) {
        return _style_settings_provider_1.styleSettingsProvider.toIconCssClass(iconType);
    };
    StyleSettingsContainer.prototype.getLabelText = function (type) {
        return exports.Palette.getLabelText(type, this.isGradient ? "(Automatic)" : "No Style");
    };
    StyleSettingsContainer.prototype.getAppearanceTypeLocalization = function (appearanceTypeId) {
        return _default_1.getLocalizationById(_appearance_settings_1.appearanceType.values[appearanceTypeId]);
    };
    StyleSettingsContainer.prototype.getIconTypeLocalization = function (iconTypeId) {
        return _default_1.getLocalizationById(_icon_settings_1.iconType.values[iconTypeId]);
    };
    return StyleSettingsContainer;
}());
exports.StyleSettingsContainer = StyleSettingsContainer;
