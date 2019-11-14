/**
* DevExpress Dashboard (_color-scheme-entry-creator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var color_scheme_entry_1 = require("../../../model/colorization/color-scheme-entry");
var measure_definition_1 = require("../../../model/colorization/measure-definition");
var dimension_key_1 = require("../../../model/colorization/dimension-key");
var ko = require("knockout");
var calculation_1 = require("../../../model/data-item/calculations/calculation");
var window_definition_1 = require("../../../model/data-item/window-definition/window-definition");
var ColorSchemeEntryCreator = (function () {
    function ColorSchemeEntryCreator() {
        this._entry = new color_scheme_entry_1.ColorSchemeEntry({});
    }
    ColorSchemeEntryCreator.createMeasureKey = function (dataMember, summaryType) {
        var measureDefinition = new measure_definition_1.MeasureDefinition({ "@ItemType": "Definition" });
        measureDefinition.dataMember(dataMember);
        measureDefinition.summaryType(summaryType);
        return measureDefinition;
    };
    ColorSchemeEntryCreator.createMeasureDefinitionFromMeasure = function (measure) {
        var measureDefinition = new measure_definition_1.MeasureDefinition({ "@ItemType": "Definition" });
        var serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer();
        var calculationClone = new calculation_1.Calculation(serializer.serialize(measure.calculation));
        var windowDefinitionJson = serializer.serialize(measure.windowDefinition);
        var windowDefinitionClone = new window_definition_1.WindowDefinition(windowDefinitionJson);
        measureDefinition.dataMember(measure.dataMember());
        measureDefinition.summaryType(measure.summaryType());
        measureDefinition.calculation.calculation(calculationClone.calculation());
        measureDefinition.calculation.calculationType(calculationClone.calculationType());
        measureDefinition.expression(measure.expression());
        measureDefinition.windowDefinition.windowDefinition(windowDefinitionClone.windowDefinition());
        measureDefinition.windowDefinition.windowDefinitionType(windowDefinitionClone.windowDefinitionType());
        return measureDefinition;
    };
    ColorSchemeEntryCreator.createMeasureDefinitionCopy = function (measureKey) {
        var serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer();
        return new measure_definition_1.MeasureDefinition(serializer.serialize(measureKey));
    };
    ColorSchemeEntryCreator.createDimensionKey = function (dataMember, groupInterval, valueType, value) {
        var dimensionKey = new dimension_key_1.DimensionKey({ "@ItemType": "DimensionKey" });
        dimensionKey.definition = {
            dataMember: ko.observable(dataMember),
            dateTimeGroupInterval: ko.observable(groupInterval)
        };
        dimensionKey.value = {
            value: ko.observable(value),
            type: ko.observable(valueType)
        };
        return dimensionKey;
    };
    ColorSchemeEntryCreator.prototype.addColor = function (color) {
        this._entry.color(color);
        return this;
    };
    ColorSchemeEntryCreator.prototype.addItemComponentName = function (name) {
        this._entry.itemComponentName = name;
        return this;
    };
    ColorSchemeEntryCreator.prototype.addPaletteIndex = function (paletteIndex) {
        this._entry.paletteIndex(paletteIndex);
        return this;
    };
    ColorSchemeEntryCreator.prototype.addDataSourceName = function (dataSourceName) {
        this._entry.dataSource(dataSourceName);
        return this;
    };
    ColorSchemeEntryCreator.prototype.addDataMemberName = function (dataMember) {
        this._entry.dataMember(dataMember);
        return this;
    };
    ColorSchemeEntryCreator.prototype.addMeasureKey = function (dataMember, summaryType) {
        this._entry.measureKeys.push(ColorSchemeEntryCreator.createMeasureKey(dataMember, summaryType));
        return this;
    };
    ColorSchemeEntryCreator.prototype.addDimensionKey = function (dataMember, groupInterval, valueType, value) {
        this._entry.dimensionKeys.push(ColorSchemeEntryCreator.createDimensionKey(dataMember, groupInterval, valueType, value));
        return this;
    };
    ColorSchemeEntryCreator.prototype.getEntry = function () {
        return this._entry;
    };
    return ColorSchemeEntryCreator;
}());
exports.ColorSchemeEntryCreator = ColorSchemeEntryCreator;
