/**
* DevExpress Dashboard (_color-picker-model.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var color_1 = require("../../../model/color");
var color_scheme_entry_1 = require("../../../model/colorization/color-scheme-entry");
var ko = require("knockout");
var _default_1 = require("../../../data/localization/_default");
var ColorPickerModel = (function () {
    function ColorPickerModel(colorSchemeModel, colorPalette) {
        var _this = this;
        this.colorSchemeModel = colorSchemeModel;
        this.colorPalette = colorPalette;
        this.target = ko.observable();
        this.content = ko.observable();
        this.visible = ko.computed({
            read: function () {
                return !!_this.content();
            },
            write: function (val) {
                if (!val) {
                    _this.content(undefined);
                }
            }
        });
        this.confirm = function () {
            _this.entry.paletteIndex(null);
            _this.entry.color(color_1.Color.fromRgbaString(_this.colorCss()));
            if (_this.entry instanceof color_scheme_entry_1.AutoColorSchemeEntry) {
                var newEntry = _this.entry.clone();
                _this.colorSchemeModel.updateEntry(_this.entry, newEntry);
            }
            _this.visible(false);
        };
    }
    ColorPickerModel.prototype.init = function (entry, target) {
        this.entry = entry;
        var color = entry.paletteIndex() === null ? entry.color() : this.colorPalette()[entry.paletteIndex()];
        this.colorCss = ko.observable(color ? color.css : "");
        this.target(target);
        this.content({
            name: '',
            data: this._createViewModel()
        });
    };
    ColorPickerModel.prototype._createViewModel = function () {
        var _this = this;
        return {
            color: ko.pureComputed({
                read: function () {
                    return _this.colorCss();
                },
                write: function (val) {
                    _this.colorCss(val);
                }
            }),
            buttonItems: [
                { toolbar: 'bottom', location: 'after', widget: 'dxButton', options: { text: _default_1.getLocalizationById("DashboardWebStringId.ButtonConfirm"), onClick: this.confirm } },
                { toolbar: 'bottom', location: 'after', widget: 'dxButton', options: { text: _default_1.getLocalizationById("DashboardStringId.ButtonCancel"), onClick: function () { return _this.visible(false); } } }
            ]
        };
    };
    return ColorPickerModel;
}());
exports.ColorPickerModel = ColorPickerModel;
