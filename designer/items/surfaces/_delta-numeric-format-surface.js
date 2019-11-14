/**
* DevExpress Dashboard (_delta-numeric-format-surface.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("../properties-composers/_shared-composers");
var ko = require("knockout");
var DeltaNumericFormatSurface = (function () {
    function DeltaNumericFormatSurface(model, propertiesController) {
        this.model = model;
        this.propertiesController = propertiesController;
        this._disposables = [];
        this.propertiesTabs = ko.observableArray([]);
    }
    DeltaNumericFormatSurface.prototype.updatePropertiesTabs = function () {
        this.propertiesTabs([new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.NumericFormat, this.model.title, _shared_composers_1.SharedComposers.getNumericFormatWrapper(this.model.numericFormat))
        ]);
        this.propertiesController.secondaryModel({
            name: "dx-dashboard-secondary-item-surface",
            displayText: this.model.title,
            data: this
        });
    };
    ;
    DeltaNumericFormatSurface.prototype.startEditing = function (args) {
        args.createImmediately = false;
        this.updatePropertiesTabs();
    };
    DeltaNumericFormatSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    return DeltaNumericFormatSurface;
}());
exports.DeltaNumericFormatSurface = DeltaNumericFormatSurface;
