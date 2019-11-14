/**
* DevExpress Dashboard (_pie-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _pie_item_1 = require("../../../model/items/pie/metadata/_pie-item");
var _chart_series_1 = require("../../../model/items/chart/metadata/_chart-series");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _container_type_selector_1 = require("../container-type-selector/_container-type-selector");
var PieItemPropertiesComposer = (function () {
    function PieItemPropertiesComposer() {
    }
    PieItemPropertiesComposer.prototype.composeTabs = function (model) {
        var result = [
            new _accordion_tab_1.StyleAccordionTab(_accordion_tab_1.KnownTabs.Type, "DashboardWebStringId.Type", this.getTypeWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model, [_pie_item_1.showPieCaptions])),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ContentArrangement, "DashboardWebStringId.AccordionTab.Layout", _shared_composers_1.SharedComposers.getContentArrangementWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Labels, "DashboardWebStringId.AccordionTab.Labels", this.getLabelsWrapper(model))
        ];
        return result;
    };
    PieItemPropertiesComposer.prototype.getTypeWrapper = function (model) {
        var properties = [
            _chart_series_1.chartSeriesType
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: {
                containerType: new _container_type_selector_1.ContainerTypeSelector({
                    "Pie": {
                        displayName: "DashboardWebStringId.Pie",
                        icon: "dx-dashboard-pie-pie",
                        group: undefined
                    },
                    "Donut": {
                        displayName: "DashboardWebStringId.Pie.Donut",
                        icon: "dx-dashboard-pie-donut",
                        group: undefined
                    }
                }, model.pieType)
            },
            properties: properties
        });
    };
    PieItemPropertiesComposer.prototype.getLabelsWrapper = function (model) {
        var properties = [
            _pie_item_1.labelContentType,
            _pie_item_1.tooltipContentType,
            _pie_item_1.labelPosition,
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties
        });
    };
    return PieItemPropertiesComposer;
}());
exports.PieItemPropertiesComposer = PieItemPropertiesComposer;
