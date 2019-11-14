/**
* DevExpress Dashboard (_card-element-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var card_1 = require("../../../model/items/card/card");
var card_layout_template_1 = require("../../../model/items/card/card-layout-template");
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _display_name_provider_1 = require("../../_display-name-provider");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _sparkline_options_1 = require("../../../model/items/options/metadata/_sparkline-options");
var _card_1 = require("../../../model/items/card/metadata/_card");
var _card_row_1 = require("../../../model/items/card/metadata/_card-row");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var ko = require("knockout");
var CardElementPropertiesComposer = (function () {
    function CardElementPropertiesComposer(editTemplateHandler, editFormat, applyTemplateToAllCards) {
        if (editTemplateHandler === void 0) { editTemplateHandler = function (model) { }; }
        if (editFormat === void 0) { editFormat = function (model) { }; }
        if (applyTemplateToAllCards === void 0) { applyTemplateToAllCards = function (template) { }; }
        this.editTemplateHandler = editTemplateHandler;
        this.editFormat = editFormat;
        this.applyTemplateToAllCards = applyTemplateToAllCards;
    }
    CardElementPropertiesComposer.prototype.composeTabs = function (model, dashboardItem, containerType, dataSourceBrowser) {
        var commonTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.Options", this.getCommonWrapper(model, dashboardItem, dataSourceBrowser)), deltaTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DeltaOptions, "DashboardWebStringId.Grid.DeltaOptions"), sparklineTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.SparklineOptions, "DashboardWebStringId.Card.SparklineOptions", this.getSparklineWrapper(model)), templatesTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.CardTemplates, "DashboardWebStringId.CardLayout.Editor.CardLayout"), deltaFormatsTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DeltaFormats, "DashboardWebStringId.CardLayout.Editor.FormatOptions"), result = [commonTab, templatesTab, deltaTab, sparklineTab, deltaFormatsTab];
        if (model instanceof card_1.Card) {
            ko.computed(function () {
                deltaTab.tabModel(_shared_composers_1.SharedComposers.getDeltaOptionsWrapper(model._isTypeEmpty() ? model.deltaOptions : model.cardDeltaOptions));
            });
            this.fillTemplatesTab(templatesTab, model);
            deltaFormatsTab.tabModel(_shared_composers_1.SharedComposers.getDeltaFormatsOptionsWrapper(model, this.editFormat));
        }
        return result;
    };
    CardElementPropertiesComposer.prototype.getCommonWrapper = function (model, dashboardItem, dataSourceBrowser) {
        var properties = [
            __assign({ editorOptions: { placeholder: _display_name_provider_1.getDataItemContainerDisplayName(dataSourceBrowser, dashboardItem, model) } }, _base_metadata_1.name)
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: null
        });
    };
    CardElementPropertiesComposer.prototype.getSparklineWrapper = function (model) {
        var properties = [
            _sparkline_options_1.viewType,
            _sparkline_options_1.highlightMinMaxPoints,
            _sparkline_options_1.highlightStartEndPoints
        ];
        var disabledRules = {};
        disabledRules[_sparkline_options_1.viewType.propertyName] = [_card_1.showSparkline.propertyName, "=", false];
        disabledRules[_sparkline_options_1.highlightMinMaxPoints.propertyName] = [_card_1.showSparkline.propertyName, "=", false];
        disabledRules[_sparkline_options_1.highlightStartEndPoints.propertyName] = [_card_1.showSparkline.propertyName, "=", false];
        var visibilityRules = {};
        visibilityRules[_card_1.showSparkline.propertyName] = function () { return model._isTypeEmpty(); };
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [
                _card_1.showSparkline,
                {
                    container: _card_row_1.cardSparklineRowOptions,
                    properties: properties
                }
            ],
            disabledFilterRules: disabledRules,
            visibilityFilterRules: visibilityRules
        });
    };
    CardElementPropertiesComposer.prototype.fillTemplatesTab = function (tab, card) {
        var _this = this;
        var availableTemplates = ko.computed(function () { return _this.getAvailableTemplates(card); });
        var selectedTemplate = ko.computed({
            read: function () {
                return card.layoutTemplate();
            },
            write: function (newTemplate) {
                _this.switchTemplate(card, newTemplate);
            }
        });
        tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: {
                layoutTemplates: {
                    items: ko.observable(ko.observableArray(availableTemplates())),
                    selectedItem: selectedTemplate
                }
            },
            properties: [{
                    propertyName: "layoutTemplates",
                    editor: _base_metadata_1.editorTemplates.cardTemplateCollection,
                    getDisplayText: function (item) { return dx_analytics_core_1.default.Analytics.Internal.localize(item.title); },
                    headerVisible: true,
                    collectionItemDefaultPropertyInfo: {
                        propertyName: "title",
                        editHandler: this.editTemplateHandler,
                        buttonsVisibility: {
                            add: ko.observable(false),
                            edit: ko.observable(true),
                            updown: ko.observable(false),
                            remove: ko.observable(false),
                        },
                        customActions: [{
                                name: dx_analytics_core_1.default.Analytics.Internal.localize("DashboardWebStringId.CardLayout.ApplyToAllCards"),
                                icon: "#dx-dashboard-template-to-all-cards",
                                action: function () { _this.applyTemplateToAllCards(selectedTemplate()); }
                            }]
                    }
                }]
        }));
    };
    CardElementPropertiesComposer.prototype.switchTemplate = function (card, newTemplate) {
        var templateChanged = function (newTemplate) {
            return card.layoutTemplate().getType() !== newTemplate.getType();
        };
        if (templateChanged(newTemplate)) {
            card._setTemplateSwitchingOptions(newTemplate);
        }
    };
    CardElementPropertiesComposer.prototype.getAvailableTemplates = function (card) {
        var result = [];
        var currentTemplateAdded = false;
        var currentTemplate = card.layoutTemplate();
        var addTemplate = function (templateClass) {
            var templateInstance = new templateClass();
            if (templateInstance.getType() === currentTemplate.getType()) {
                result.push(currentTemplate);
                currentTemplateAdded = true;
            }
            else {
                templateInstance._resetToDefaults();
                result.push(templateInstance);
            }
        };
        addTemplate(card_layout_template_1.CardStretchedLayoutTemplate);
        addTemplate(card_layout_template_1.CardCenteredLayoutTemplate);
        addTemplate(card_layout_template_1.CardCompactLayoutTemplate);
        addTemplate(card_layout_template_1.CardLightweightLayoutTemplate);
        if (!currentTemplateAdded) {
            result.push(currentTemplate);
        }
        return result;
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], CardElementPropertiesComposer.prototype, "switchTemplate", null);
    return CardElementPropertiesComposer;
}());
exports.CardElementPropertiesComposer = CardElementPropertiesComposer;
