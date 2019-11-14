/**
* DevExpress Dashboard (_pivot-item-surface.js)
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
var _base_item_surface_1 = require("./_base-item-surface");
var _accordion_tab_1 = require("../../_accordion-tab");
var _format_rule_surface_1 = require("../../conditional-formatting/items/surfaces/_format-rule-surface");
var measure_1 = require("../../../model/data-item/measure");
var _data_item_properties_composer_1 = require("../properties-composers/_data-item-properties-composer");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var _pivot_item_properties_composer_1 = require("../properties-composers/_pivot-item-properties-composer");
var PivotItemSurface = (function (_super) {
    __extends(PivotItemSurface, _super);
    function PivotItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    PivotItemSurface.prototype.addConditionalFormattingOptions = function (tabs, dataItem) {
        var _this = this;
        if (dataItem && dataItem.uniqueName()) {
            var editRuleHandler = function (selection, args) {
                var surface = new _format_rule_surface_1.FormatRuleSurface(selection, _this.dashboardItem, _this._dataSourceBrowser, _this.propertiesController);
                surface.startEditing(args);
            };
            var dataItemApplyTo = dataItem;
            if (dataItemApplyTo instanceof measure_1.Measure && this.dashboardItem.hiddenMeasures().indexOf(dataItemApplyTo) !== -1) {
                dataItemApplyTo = this.dashboardItem.values()[0];
            }
            tabs.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ConditionalFormatting, "DashboardWebStringId.ConditionalFormatting", _data_item_properties_composer_1.DataItemsPropertiesComposer.getFormatRulesForDataItemWrapper(this.dashboardItem, dataItem, dataItemApplyTo, "PivotItemFormatRule", this._dataSourceBrowser, editRuleHandler)));
        }
    };
    PivotItemSurface.prototype.extendHiddenMeasuresTabs = function (tabs, model) {
        this.addConditionalFormattingOptions(tabs, model);
    };
    PivotItemSurface.prototype.fillSections = function () {
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Values, this.addConditionalFormattingOptions.bind(this)));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Columns, this.addConditionalFormattingOptions.bind(this)));
        this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(this, _section_descriptors_1.SectionDescriptors.Rows, this.addConditionalFormattingOptions.bind(this)));
    };
    PivotItemSurface.prototype.getPropertiesComposer = function () {
        var _this = this;
        var editRuleHandler = function (selection, args) {
            var surface = new _format_rule_surface_1.FormatRuleSurface(selection, _this.dashboardItem, _this._dataSourceBrowser, _this.propertiesController);
            surface.startEditing(args);
        };
        return new _pivot_item_properties_composer_1.PivotItemPropertiesComposer(editRuleHandler);
    };
    return PivotItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.PivotItemSurface = PivotItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("Pivot", PivotItemSurface);
