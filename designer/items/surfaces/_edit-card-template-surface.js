/**
* DevExpress Dashboard (_edit-card-template-surface.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _card_layout_template_properties_composer_1 = require("../properties-composers/_card-layout-template-properties-composer");
var ko = require("knockout");
var EditCardTemplateSurface = (function () {
    function EditCardTemplateSurface(model, propertiesController, dimensionNames, applyTemplateToAllCards) {
        if (applyTemplateToAllCards === void 0) { applyTemplateToAllCards = function (template) { }; }
        this.model = model;
        this.propertiesController = propertiesController;
        this.dimensionNames = dimensionNames;
        this.applyTemplateToAllCards = applyTemplateToAllCards;
        this._disposables = [];
        this.propertiesTabs = ko.observableArray([]);
    }
    EditCardTemplateSurface.prototype.updatePropertiesTabs = function () {
        var composer = new _card_layout_template_properties_composer_1.CardTemplatePropertiesComposer();
        var tabs = composer.composeTabs(this.model, this.dimensionNames, this.applyTemplateToAllCards);
        this.propertiesTabs(tabs);
        this.propertiesController.secondaryModel({
            name: "dx-dashboard-secondary-item-surface",
            displayText: this.model.title,
            data: this
        });
    };
    ;
    EditCardTemplateSurface.prototype.startEditing = function (args) {
        args.createImmediately = false;
        this.updatePropertiesTabs();
    };
    EditCardTemplateSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    return EditCardTemplateSurface;
}());
exports.EditCardTemplateSurface = EditCardTemplateSurface;
