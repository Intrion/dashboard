/**
* DevExpress Dashboard (color-scheme-definition.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var ColorSchemeDefinition = (function () {
    function ColorSchemeDefinition(dataSource, dataMember, dimensionDefinitions, colorByMeasures, componentName, name) {
        if (colorByMeasures === void 0) { colorByMeasures = false; }
        if (componentName === void 0) { componentName = ""; }
        if (name === void 0) { name = ""; }
        var _this = this;
        this.dataSource = dataSource;
        this.dataMember = dataMember;
        this.dimensionDefinitions = dimensionDefinitions;
        this.colorByMeasures = colorByMeasures;
        this.componentName = componentName;
        this.name = name;
        this.dataItems = ko.computed(function () {
            return _this.dimensionDefinitions.map(function (definition) {
                return false ? definition.dataMember() + " (" + definition.dateTimeGroupInterval() + ")" : definition.dataMember();
            }).concat(_this.colorByMeasures ? [_default_1.getLocalizationById("DashboardWebStringId.Colorization.MeasureNames")] : []);
        });
        this.typeText = ko.computed(function () {
            return !_this.componentName ? _default_1.getLocalizationById("DashboardWebStringId.Coloring.Global") : (_default_1.getLocalizationById("DashboardWebStringId.Coloring.Local") + "(" + _this.name + ")");
        });
        this.dataSourceText = ko.computed(function () {
            return _this.dataMember || _this.dataSource;
        });
        this.key = ko.computed(function () {
            return [_this.componentName, _this.dataMember, _this.dataSource].concat(_this.dimensionDefinitions.map(function (value) { return value.dataMember() + "(" + value.dateTimeGroupInterval() + ")"; }).sort()).concat(_this.colorByMeasures ? [_default_1.getLocalizationById("DashboardWebStringId.Colorization.MeasureNames")] : []).join("|");
        });
    }
    ColorSchemeDefinition.prototype.equals = function (definition) {
        return definition.key() === this.key();
    };
    return ColorSchemeDefinition;
}());
exports.ColorSchemeDefinition = ColorSchemeDefinition;
