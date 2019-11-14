/**
* DevExpress Dashboard (_format-rule-surface.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _format_rule_properties_composer_1 = require("../properties-composers/_format-rule-properties-composer");
var ko = require("knockout");
var FormatRuleSurface = (function () {
    function FormatRuleSurface(model, dashboardItem, dataSourceBrowser, propertiesController) {
        this.model = model;
        this.dashboardItem = dashboardItem;
        this.dataSourceBrowser = dataSourceBrowser;
        this.propertiesController = propertiesController;
        this._disposables = [];
        this.propertiesTabs = ko.observableArray([]);
    }
    FormatRuleSurface.prototype.updatePropertiesTabs = function (requestRecalculation) {
        var _this = this;
        var composer = new _format_rule_properties_composer_1.FormatRulePropertiesComposer();
        var result = composer.composeTabs(this.model, this.dashboardItem, this.dataSourceBrowser, requestRecalculation);
        this.propertiesTabs(result);
        this.propertiesController.secondaryModel({
            name: "dx-dashboard-secondary-item-surface",
            displayText: this.model._classCaption,
            data: this,
            containingCollection: this.dashboardItem.formatRules
        });
        if (this.model.condition()) {
            this.propertiesController.secondarySelectedIndex(1);
        }
        result[0].tabModel().model.typeChooser.specificType.subscribe(function () {
            _this.propertiesController.secondarySelectedIndex(1);
        });
    };
    ;
    FormatRuleSurface.prototype.startEditing = function (args) {
        var _this = this;
        args.createImmediately = false;
        this.updatePropertiesTabs(args.requestRecalculation);
        args.requestRecalculation.add(function () { return _this.updatePropertiesTabs(args.requestRecalculation); });
    };
    FormatRuleSurface.prototype.dispose = function () {
        this._disposables.forEach(function (d) {
            d.dispose();
        });
    };
    return FormatRuleSurface;
}());
exports.FormatRuleSurface = FormatRuleSurface;
