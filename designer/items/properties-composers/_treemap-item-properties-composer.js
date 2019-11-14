/**
* DevExpress Dashboard (_treemap-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _treemap_item_1 = require("../../../model/items/treemap/metadata/_treemap-item");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _dimension_1 = require("../../../model/data-item/metadata/_dimension");
var TreemapItemPropertiesComposer = (function () {
    function TreemapItemPropertiesComposer() {
    }
    TreemapItemPropertiesComposer.prototype.composeTabs = function (model, _, surface) {
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Layout, "DashboardWebStringId.AccordionTab.Layout", this.getLayoutWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Labels, "DashboardWebStringId.AccordionTab.Labels", this.getLabelsWrapper(model))
        ];
        return result;
    };
    TreemapItemPropertiesComposer.prototype.getLayoutWrapper = function (model) {
        var properties = [
            _treemap_item_1.layoutAlgorithm,
            _treemap_item_1.layoutDirection
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties
        });
    };
    TreemapItemPropertiesComposer.prototype.getLabelsWrapper = function (model) {
        var properties = [
            _treemap_item_1.tilesLabelContentType,
            _treemap_item_1.tilesTooltipContentType,
            _treemap_item_1.groupsLabelContentType,
            _treemap_item_1.groupsTooltipContentType
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties
        });
    };
    TreemapItemPropertiesComposer.getTileOptionsTab = function (model, dataItem) {
        return new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.TileOptions, "DashboardWebStringId.TileOptions", TreemapItemPropertiesComposer.getTileOptionsWrapper(model, dataItem));
    };
    TreemapItemPropertiesComposer.getTileOptionsWrapper = function (model, dataItem) {
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: dataItem,
            properties: [_dimension_1.groupChildValues]
        });
    };
    return TreemapItemPropertiesComposer;
}());
exports.TreemapItemPropertiesComposer = TreemapItemPropertiesComposer;
