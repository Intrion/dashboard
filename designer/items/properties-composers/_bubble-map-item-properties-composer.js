/**
* DevExpress Dashboard (_bubble-map-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _map_item_1 = require("../../../model/items/map/metadata/_map-item");
var _geo_point_map_item_base_1 = require("../../../model/items/map/metadata/_geo-point-map-item-base");
var ko = require("knockout");
var BubleMapItemPropertiesComposer = (function () {
    function BubleMapItemPropertiesComposer() {
    }
    BubleMapItemPropertiesComposer.prototype.composeTabs = function (model, dataSourceBrowser, dashboard, propertiesController) {
        var commonTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common");
        ko.computed(function () {
            commonTab.tabModel(_shared_composers_1.SharedComposers.getCommonMapWrapper(model, propertiesController, [
                _map_item_1.lockNavigation,
                _geo_point_map_item_base_1.enableClustering,
                _shared_composers_1.SharedComposers.getShapeTitleSerializationInfo(model)
            ]));
        });
        return [
            commonTab,
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ColorLegend, "DashboardWebStringId.AccordionTab.MapLegend", _shared_composers_1.SharedComposers.getColorLegendWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.WeightedLegend, "DashboardWebStringId.AccordionTab.WeightedLegend", _shared_composers_1.SharedComposers.getWeightedLegendWrapper(model))
        ];
    };
    return BubleMapItemPropertiesComposer;
}());
exports.BubleMapItemPropertiesComposer = BubleMapItemPropertiesComposer;
