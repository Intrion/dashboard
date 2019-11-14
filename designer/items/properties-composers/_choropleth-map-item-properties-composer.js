/**
* DevExpress Dashboard (_choropleth-map-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _chorolpeth_map_item_1 = require("../../../model/items/map/metadata/_chorolpeth-map-item");
var _map_item_1 = require("../../../model/items/map/metadata/_map-item");
var ko = require("knockout");
var ChoroplethMapItemPropertiesComposer = (function () {
    function ChoroplethMapItemPropertiesComposer() {
    }
    ChoroplethMapItemPropertiesComposer.prototype.composeTabs = function (model, dataSourceBrowser, dashboard, propertiesController) {
        var _this = this;
        var commonTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common"), labelTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ShapeLabels, "DashboardWebStringId.AccordionTab.ChoroplethMapShapeLabelsAttribute");
        ko.computed(function () {
            commonTab.tabModel(_shared_composers_1.SharedComposers.getCommonMapWrapper(model, propertiesController, [
                _shared_composers_1.SharedComposers.getAttributeNamesSerializationInfo(model, _chorolpeth_map_item_1.attributeName, false),
                _map_item_1.lockNavigation
            ]));
            labelTab.tabModel(_this.getShapeLabelsWrapper(model));
        });
        return [
            commonTab,
            labelTab,
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ColorLegend, "DashboardWebStringId.AccordionTab.MapLegend", _shared_composers_1.SharedComposers.getColorLegendWrapper(model))
        ];
    };
    ChoroplethMapItemPropertiesComposer.prototype.getShapeLabelsWrapper = function (model) {
        var properties = [
            _shared_composers_1.SharedComposers.getShapeTitleSerializationInfo(model),
            _shared_composers_1.SharedComposers.getAttributeNamesSerializationInfo(model, _chorolpeth_map_item_1.tooltipAttributeName, true, "DashboardWebStringId.Map.UseBindingAttribute"),
            _chorolpeth_map_item_1.includeSummaryValueToShapeTitle
        ];
        var disabledRules = {};
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules
        });
    };
    return ChoroplethMapItemPropertiesComposer;
}());
exports.ChoroplethMapItemPropertiesComposer = ChoroplethMapItemPropertiesComposer;
