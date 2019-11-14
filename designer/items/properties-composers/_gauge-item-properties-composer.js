/**
* DevExpress Dashboard (_gauge-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _gauge_item_1 = require("../../../model/items/gauge/metadata/_gauge-item");
var _chart_series_1 = require("../../../model/items/chart/metadata/_chart-series");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _container_type_selector_1 = require("../container-type-selector/_container-type-selector");
var GaugeItemPropertiesComposer = (function () {
    function GaugeItemPropertiesComposer() {
    }
    GaugeItemPropertiesComposer.prototype.composeTabs = function (model) {
        var result = [
            new _accordion_tab_1.StyleAccordionTab(_accordion_tab_1.KnownTabs.Type, "DashboardWebStringId.Type", this.getTypeWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model, [
                _gauge_item_1.showGaugeCaptions
            ])),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Layout", _shared_composers_1.SharedComposers.getContentArrangementWrapper(model))
        ];
        return result;
    };
    GaugeItemPropertiesComposer.prototype.getTypeWrapper = function (model) {
        var properties = [
            _chart_series_1.chartSeriesType
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: {
                containerType: new _container_type_selector_1.ContainerTypeSelector({
                    "CircularFull": { displayName: "DashboardWebStringId.Gauge.Type.FullQuarterGauge", icon: "dx-dashboard-gauge-circular-full", group: "Circular" },
                    "CircularHalf": { displayName: "DashboardWebStringId.Gauge.Type.HalfCircular", icon: "dx-dashboard-gauge-circular-half", group: "Circular" },
                    "CircularQuarterLeft": { displayName: "DashboardWebStringId.Gauge.Type.LeftQuarterCircular", icon: "dx-dashboard-gauge-circular-left-quarter", group: "Circular" },
                    "CircularQuarterRight": { displayName: "DashboardWebStringId.Gauge.Type.RightQuarterCircular", icon: "dx-dashboard-gauge-circular-right-quarter", group: "Circular" },
                    "CircularThreeFourth": { displayName: "DashboardWebStringId.Gauge.Type.ThreeFourthCircular", icon: "dx-dashboard-gauge-circular-three-fourth", group: "Circular" },
                    "LinearHorizontal": { displayName: "DashboardWebStringId.Gauge.Type.LinearHorizontal", icon: "dx-dashboard-gauge-linear-horizontal", group: "Linear" },
                    "LinearVertical": { displayName: "DashboardWebStringId.Gauge.Type.LinearVertical", icon: "dx-dashboard-gauge-linear-vertical", group: "Linear" }
                }, model.viewType)
            },
            properties: properties
        });
    };
    return GaugeItemPropertiesComposer;
}());
exports.GaugeItemPropertiesComposer = GaugeItemPropertiesComposer;
