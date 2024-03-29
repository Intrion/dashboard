﻿/**
* DevExpress Dashboard (color.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _appearance_settings_provider_1 = require("../viewer-parts/conditional-formatting/_appearance-settings-provider");
var ko = require("knockout");
var dxColor = require("devextreme/color");
var Color = (function () {
    function Color(colorValue) {
        var a = (colorValue >> 0x18) & 0xff, r = (colorValue >> 0x10) & 0xff, g = (colorValue >> 0x8) & 0xff, b = colorValue & 0xff;
        this._dxColor = new dxColor(this._toRgbaString(r, g, b, a / 255));
    }
    Color.fromArgb = function (alpha, red, green, blue) {
        return new Color(Color.toNumber(alpha, red, green, blue));
    };
    Color.fromRgbaString = function (rgbaColor) {
        return Color.fromDxColor(new dxColor(rgbaColor));
    };
    Color.fromJSON = function (jsonValue) {
        return new Color(parseInt(jsonValue, 10));
    };
    Color.fromAppearance = function (appearanceType) {
        var color = new Color(0);
        color._dxColor = new dxColor(_appearance_settings_provider_1.appearanceSettingsProvider.backAndGradientColorGroupsToBackColor(appearanceType));
        return color;
    };
    Color.fromDxColor = function (dxColor) {
        var color = new Color(0);
        color._dxColor = dxColor;
        return color;
    };
    Color.toNumber = function (alpha, red, green, blue) {
        return ((((alpha * 255 << 0x18) | (red << 0x10) | (green << 0x8)) | blue)) & 0xffffffff;
    };
    Color.toJSON = function (color) {
        return Color.toNumber(color.A, color.R, color.G, color.B);
    };
    Color.contrastColor = function (baseColor) {
        var luminance = 1 - (0.299 * baseColor.R + 0.587 * baseColor.G + 0.114 * baseColor.B) / 255;
        var result = luminance < 0.5 ? 0 : 255;
        return Color.fromArgb(1, result, result, result);
    };
    Color._colorFromModel = function (value) {
        return ko.observable(value ? Color.fromJSON(value) : null);
    };
    Color._colorToModel = function (value) {
        return value ? Color.toJSON(value) : null;
    };
    Color.prototype.toNumber = function () {
        return Color.toNumber(this.A, this.R, this.G, this.B);
    };
    Color.toHex = function (colorValue) {
        return new Color(colorValue).toHex();
    };
    Object.defineProperty(Color.prototype, "A", {
        get: function () { return this._dxColor.a; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "R", {
        get: function () { return this._dxColor.r; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "G", {
        get: function () { return this._dxColor.g; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "B", {
        get: function () { return this._dxColor.b; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Color.prototype, "css", {
        get: function () { return this._toRgbaString(this.R, this.G, this.B, this.A); },
        enumerable: true,
        configurable: true
    });
    Color.prototype.blend = function (blendColor, opacity) {
        return this._dxColor.blend(blendColor._dxColor, opacity);
    };
    Color.prototype.toHex = function () {
        return this._dxColor.toHex();
    };
    Color.prototype._toRgbaString = function (r, g, b, a) {
        return 'rgba(' + [r, g, b, a].join(',') + ')';
    };
    return Color;
}());
exports.Color = Color;
