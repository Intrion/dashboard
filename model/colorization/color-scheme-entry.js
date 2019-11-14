/**
* DevExpress Dashboard (color-scheme-entry.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../serializable-model");
var measure_definition_1 = require("./measure-definition");
var dimension_key_1 = require("./dimension-key");
var color_scheme_definition_1 = require("./color-scheme-definition");
var _color_scheme_entry_1 = require("./metadata/_color-scheme-entry");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var ColorSchemeEntry = (function (_super) {
    __extends(ColorSchemeEntry, _super);
    function ColorSchemeEntry(modelJson, serializer, itemComponentName, name) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        if (itemComponentName === void 0) { itemComponentName = ""; }
        if (name === void 0) { name = ""; }
        var _this = _super.call(this, modelJson, serializer, _color_scheme_entry_1.colorSchemeEntrySerializationInfo) || this;
        _this.itemComponentName = itemComponentName;
        _this.name = name;
        _this.measureKeys = ko.observableArray();
        _this.dimensionKeys = ko.observableArray();
        _this.measureKeys = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.MeasureKey, function (item) { return new measure_definition_1.MeasureDefinition(item, serializer); });
        _this.dimensionKeys = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(modelJson.DimensionKeys, function (item) { return new dimension_key_1.DimensionKey(item, serializer); });
        _this.displayText = ko.computed(function () {
            return _this.dimensionKeys()
                .map(function (key) { return key.value.value(); })
                .concat(_this.measureKeys().map(function (key) { return key.displayText(); }))
                .join(" | ");
        });
        _this.colorText = ko.computed(function () {
            var result = "";
            if (!_this.custom) {
                result = _default_1.getLocalizationById("DashboardStringId.ColorAutoAssigned");
            }
            else {
                if (_this.paletteIndex() !== null)
                    result = _default_1.getLocalizationById("DashboardStringId.ColorPaletteIndex") + _this.paletteIndex();
                else if (!!_this.color()) {
                    result = _default_1.getLocalizationById("DashboardWebStringId.ColorScheme.Color") + " [A=" + (_this.color().A * 255).toFixed(0) + ", R=" + _this.color().R + ", G=" + _this.color().G + ", B=" + _this.color().B + "]";
                }
            }
            return result;
        });
        _this.componentName = ko.computed(function () {
            return _this.displayText() + _this.dataSource() + _this.dataMember();
        });
        return _this;
    }
    Object.defineProperty(ColorSchemeEntry.prototype, "custom", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColorSchemeEntry.prototype, "definition", {
        get: function () {
            if (!this._definition) {
                this._definition = new color_scheme_definition_1.ColorSchemeDefinition(this.dataSource(), this.dataMember(), this.dimensionKeys().map(function (key) { return key.definition; }), !!this.measureKeys().length, this.itemComponentName, this.name);
            }
            return this._definition;
        },
        enumerable: true,
        configurable: true
    });
    ColorSchemeEntry.prototype.getInfo = function () {
        return _color_scheme_entry_1.colorSchemeEntrySerializationInfo;
    };
    ColorSchemeEntry.prototype.clone = function () {
        var clonedEntry = new ColorSchemeEntry();
        clonedEntry.itemComponentName = this.itemComponentName;
        clonedEntry.name = this.name;
        clonedEntry.dataMember(this.dataMember());
        clonedEntry.dataSource(this.dataSource());
        clonedEntry.dimensionKeys(this.dimensionKeys());
        clonedEntry.measureKeys(this.measureKeys());
        clonedEntry.paletteIndex(this.paletteIndex());
        clonedEntry.color(this.color());
        return clonedEntry;
    };
    ColorSchemeEntry.prototype.equals = function (entry) {
        if (this.dimensionKeys().length !== entry.dimensionKeys().length)
            return false;
        for (var i = 0; i < this.dimensionKeys().length; i++) {
            if (this.dimensionKeys()[i].value.value() !== entry.dimensionKeys()[i].value.value()) {
                return false;
            }
        }
        if (this.definition.colorByMeasures) {
            if (this.measureKeys().length !== entry.measureKeys().length)
                return false;
            for (var i = 0; i < this.measureKeys().length; i++) {
                if (this.measureKeys()[i].dataMember() !== entry.measureKeys()[i].dataMember() || this.measureKeys()[i].summaryType() !== entry.measureKeys()[i].summaryType())
                    return false;
            }
        }
        return true;
    };
    ColorSchemeEntry.prototype.getUniqueNamePrefix = function () {
        return _super.prototype._getUniqueNamePrefix.call(this);
    };
    ColorSchemeEntry.prototype._getDefaultItemType = function () {
        return "Entry";
    };
    return ColorSchemeEntry;
}(serializable_model_1.TypedSerializableModel));
exports.ColorSchemeEntry = ColorSchemeEntry;
var AutoColorSchemeEntry = (function (_super) {
    __extends(AutoColorSchemeEntry, _super);
    function AutoColorSchemeEntry(modelJson, serializer, componentName, name) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        return _super.call(this, modelJson, serializer, componentName, name) || this;
    }
    Object.defineProperty(AutoColorSchemeEntry.prototype, "custom", {
        get: function () {
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return AutoColorSchemeEntry;
}(ColorSchemeEntry));
exports.AutoColorSchemeEntry = AutoColorSchemeEntry;
