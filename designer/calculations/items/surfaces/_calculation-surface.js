/**
* DevExpress Dashboard (_calculation-surface.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _calculation_properties_composer_1 = require("../../../items/properties-composers/_calculation-properties-composer");
var ko = require("knockout");
var CalculationSurface = (function () {
    function CalculationSurface(model, measure, dashboardItem, dataSourceBrowser, propertiesController) {
        this.model = model;
        this.measure = measure;
        this.dashboardItem = dashboardItem;
        this.dataSourceBrowser = dataSourceBrowser;
        this.propertiesController = propertiesController;
        this._disposables = [];
        this.propertiesTabs = ko.observableArray([]);
    }
    CalculationSurface.prototype.updatePropertiesTabs = function () {
        var composer = new _calculation_properties_composer_1.CalculationPropertiesComposer();
        var tabs = composer.composeTabs(this.measure, this.dashboardItem, this.dataSourceBrowser);
        this.propertiesTabs(tabs);
        this.propertiesController.secondaryModel({
            name: "dx-dashboard-secondary-item-surface",
            displayText: this.model.title,
            data: this
        });
    };
    ;
    CalculationSurface.prototype.startEditing = function (args) {
        args.createImmediately = false;
        this.updatePropertiesTabs();
    };
    CalculationSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    return CalculationSurface;
}());
exports.CalculationSurface = CalculationSurface;
