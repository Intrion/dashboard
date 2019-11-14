/**
* DevExpress Dashboard (_card-layout-template-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _accordion_tab_1 = require("../../_accordion-tab");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _card_layout_1 = require("../../../model/items/card/metadata/_card-layout");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var ko = require("knockout");
var CardTemplatePropertiesComposer = (function () {
    function CardTemplatePropertiesComposer() {
    }
    CardTemplatePropertiesComposer.prototype.composeTabs = function (model, dimensionNames, applyTemplateToAllCards) {
        if (applyTemplateToAllCards === void 0) { applyTemplateToAllCards = function (template) { }; }
        var layoutsTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.CardTemplateSettings, "DashboardWebStringId.CardLayout.LayoutOptions");
        this.fillLayoutsTab(layoutsTab, model, dimensionNames, applyTemplateToAllCards);
        return [layoutsTab];
    };
    CardTemplatePropertiesComposer.prototype.fillLayoutsTab = function (tab, template, dimensionNames, applyTemplateToAllCards) {
        var _this = this;
        var propertiesList = template._collectProperties(dimensionNames);
        tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: {
                minWidth: template.minWidth,
                maxWidth: template.maxWidth,
                templateProperties: {
                    items: ko.observable(ko.observableArray(propertiesList)),
                    selectedItem: ko.observable([])
                },
                buttonsModel: {
                    resetAction: {
                        text: dx_analytics_core_1.default.Analytics.Internal.localize("DashboardWebStringId.CardLayout.ResetTemplate"),
                        action: function () { return _this.resetTemplate(template); },
                        className: "dx-dashboard-card-template-reset-button",
                        orderNo: 0
                    },
                    applyToAllAction: {
                        text: dx_analytics_core_1.default.Analytics.Internal.localize("DashboardWebStringId.CardLayout.ApplyToAllCards"),
                        action: function () { return applyTemplateToAllCards(template); },
                        className: "dx-dashboard-card-template-apply-all-button",
                        orderNo: 1
                    }
                },
            },
            properties: [
                _card_layout_1.minWidth,
                _card_layout_1.maxWidth,
                {
                    propertyName: "templateProperties",
                    visible: propertiesList.length > 0,
                    displayName: "DashboardWebStringId.CardLayout.TemplateElementsEditor",
                    editor: _base_metadata_1.editorTemplates.cardTemplateCollection,
                    editorOptions: { hoverStateEnabled: false },
                    headerVisible: false,
                    collectionItemDefaultPropertyInfo: {
                        propertyName: "title",
                        customTemplate: "card-layout-element-editor",
                        buttonsVisibility: {
                            add: ko.observable(false),
                            edit: ko.observable(false),
                            updown: ko.observable(false),
                            remove: ko.observable(false)
                        }
                    }
                }, {
                    propertyName: 'buttonsModel',
                    editor: _base_metadata_1.editorTemplates.actionButtons,
                }
            ]
        }));
    };
    CardTemplatePropertiesComposer.prototype.resetTemplate = function (template) {
        template._resetToDefaults();
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], CardTemplatePropertiesComposer.prototype, "resetTemplate", null);
    return CardTemplatePropertiesComposer;
}());
exports.CardTemplatePropertiesComposer = CardTemplatePropertiesComposer;
