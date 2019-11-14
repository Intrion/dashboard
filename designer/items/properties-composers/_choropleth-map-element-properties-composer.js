/**
* DevExpress Dashboard (_choropleth-map-element-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chorolpeth_map_1 = require("../../../model/items/map/chorolpeth-map");
var chorolpeth_map_item_1 = require("../../../model/items/map/chorolpeth-map-item");
var _accordion_tab_1 = require("../../_accordion-tab");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _chorolpeth_map_1 = require("../../../model/items/map/metadata/_chorolpeth-map");
var _shared_composers_1 = require("./_shared-composers");
var _container_type_selector_1 = require("../container-type-selector/_container-type-selector");
var ChoroplethMapElementPropertiesComposer = (function () {
    function ChoroplethMapElementPropertiesComposer(editDeltaFormatHandler) {
        if (editDeltaFormatHandler === void 0) { editDeltaFormatHandler = function (model) { }; }
        this.editDeltaFormatHandler = editDeltaFormatHandler;
    }
    ChoroplethMapElementPropertiesComposer.prototype.composeTabs = function (model, dashboardItem, containerType) {
        var typeTab = new _accordion_tab_1.TypeAccordionTab(_accordion_tab_1.KnownTabs.Type, "DashboardWebStringId.Map.WeightedLegendType", this.getMapTypeWrapper(model, containerType)), commonTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.Options", new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [
                _base_metadata_1.name,
                _chorolpeth_map_1.valueName,
                _chorolpeth_map_1.actualValueName,
                _chorolpeth_map_1.deltaName
            ]
        })), result = [typeTab, commonTab];
        if (model instanceof chorolpeth_map_1.DeltaMap) {
            result.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DeltaOptions, "DashboardWebStringId.Grid.DeltaOptions", _shared_composers_1.SharedComposers.getDeltaOptionsWrapper(model.deltaOptions)));
            result.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DeltaFormats, "DashboardWebStringId.CardLayout.Editor.FormatOptions", _shared_composers_1.SharedComposers.getDeltaFormatsOptionsWrapper(model, this.editDeltaFormatHandler)));
        }
        return result;
    };
    ChoroplethMapElementPropertiesComposer.prototype.getMapTypeWrapper = function (model, containerType) {
        if (model) {
            var properties = [
                _chorolpeth_map_1.mapType
            ];
            return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                model: { containerType: new _container_type_selector_1.ContainerTypeSelector(chorolpeth_map_item_1.ChoroplethMapItem.choroplethMapTypesMap, containerType) },
                properties: properties
            });
        }
        return null;
    };
    return ChoroplethMapElementPropertiesComposer;
}());
exports.ChoroplethMapElementPropertiesComposer = ChoroplethMapElementPropertiesComposer;
