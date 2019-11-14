/**
* DevExpress Dashboard (_card-item-surface.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var card_1 = require("../../../model/items/card/card");
var card_layout_template_1 = require("../../../model/items/card/card-layout-template");
var _base_item_surface_1 = require("./_base-item-surface");
var legacy_settings_1 = require("../../../viewer-parts/legacy-settings");
var _card_element_properties_composer_1 = require("../properties-composers/_card-element-properties-composer");
var _edit_card_template_surface_1 = require("./_edit-card-template-surface");
var _display_name_provider_1 = require("../../_display-name-provider");
var _collection_editor_viewmodel_1 = require("../../ui-widgets/collection-editor/_collection-editor-viewmodel");
var _delta_numeric_format_surface_1 = require("./_delta-numeric-format-surface");
var _data_item_container_collection_surface_1 = require("../sections/_data-item-container-collection-surface");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _single_data_item_surface_1 = require("../sections/_single-data-item-surface");
var _data_field_1 = require("../../../model/data-sources/_data-field");
var _card_item_properties_composer_1 = require("../properties-composers/_card-item-properties-composer");
var _undo_engine_helper_1 = require("../../../model/internal/_undo-engine-helper");
var ko = require("knockout");
var CardItemSurface = (function (_super) {
    __extends(CardItemSurface, _super);
    function CardItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    CardItemSurface.prototype.fillSections = function () {
        var _this = this;
        var applyTemplateToAllCards = function (template) {
            _this.applyLayoutTemplateToAllCards(template);
        };
        var sectionInfo = {
            title: "DashboardWebStringId.Binding.Cards",
            bindingProperty: {
                propertyName: "cards",
                groupName: "Card",
                emptyPlaceholder: "DashboardWebStringId.Binding.AddCard",
                selectedPlaceholder: "DashboardWebStringId.Binding.ConfigureCard",
                creator: function (itemType) {
                    if (itemType === void 0) { itemType = "Card"; }
                    var card = new card_1.Card(_this.dashboardItem, { "@ItemType": itemType });
                    var defaultTemplate;
                    if (legacy_settings_1.LegacySettings._useCardLegacyLayout) {
                        defaultTemplate = new card_layout_template_1.CardEmptyLayoutTemplate();
                    }
                    else {
                        defaultTemplate = new card_layout_template_1.CardStretchedLayoutTemplate();
                        defaultTemplate._resetToDefaults();
                    }
                    card.layoutTemplate(defaultTemplate);
                    return card;
                },
                dataItemType: "Measure"
            },
            detailsPropertiesComposer: new _card_element_properties_composer_1.CardElementPropertiesComposer(function (model) {
                var surface = new _edit_card_template_surface_1.EditCardTemplateSurface(model, _this.propertiesController, _this.dashboardItem.seriesDimensions().map(function (dim) { return _display_name_provider_1.getDataItemDisplayName(_this._dataSourceBrowser, _this.dashboardItem, dim); }), applyTemplateToAllCards);
                surface.startEditing(new _collection_editor_viewmodel_1.CollectionEditorEditItemArguments());
            }, function (model) {
                var surface = new _delta_numeric_format_surface_1.DeltaNumericFormatSurface(model, _this.propertiesController);
                surface.startEditing(new _collection_editor_viewmodel_1.CollectionEditorEditItemArguments());
            }, applyTemplateToAllCards)
        };
        this.sections.push(new _data_item_container_collection_surface_1.DataItemContainerCollectionSurface(this, this.dashboardItem, sectionInfo, ko.computed(function () { return !_this.dashboardItem.cards().length && (!!_this.dashboardItem.seriesDimensions().length || (!!_this.dashboardItem.sparklineArgument() && !!_this.dashboardItem.sparklineArgument().uniqueName())); })));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.SeriesDimension));
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: _section_descriptors_1.SectionDescriptors.SparklineArgument,
            fieldConstraint: function (dataField) {
                return _data_field_1.DataField.isContinous(dataField);
            }
        }));
    };
    CardItemSurface.prototype.getPropertiesComposer = function () {
        return new _card_item_properties_composer_1.CardItemPropertiesComposer();
    };
    CardItemSurface.prototype.applyLayoutTemplateToAllCards = function (template) {
        this.dashboardItem.cards().forEach(function (card) {
            if (ko.unwrap(card.layoutTemplate) !== ko.unwrap(template)) {
                card.layoutTemplate(template.clone());
            }
        });
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], CardItemSurface.prototype, "applyLayoutTemplateToAllCards", null);
    return CardItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.CardItemSurface = CardItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("Card", CardItemSurface);
