/**
* DevExpress Dashboard (_map-custom-shapefile-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _custom_shape_file_1 = require("../../../model/items/map/metadata/_custom-shape-file");
var _custom_shape_file_data_1 = require("../../../model/items/map/metadata/_custom-shape-file-data");
var _utils_1 = require("../../../data/_utils");
var ko = require("knockout");
var MapCustomShapefilePropertiesComposer = (function () {
    function MapCustomShapefilePropertiesComposer() {
    }
    MapCustomShapefilePropertiesComposer.prototype.composeTabs = function (model) {
        var layoutsTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.CustomMapOptions, "DashboardWebStringId.Map.CustomMapOptions");
        this.fillLayoutsTab(layoutsTab, model);
        return [layoutsTab];
    };
    MapCustomShapefilePropertiesComposer.prototype.fillLayoutsTab = function (tab, model) {
        var switcherInfo = {
            propertyName: 'switcher', displayName: "DashboardWebStringId.Map.CustomMapOptionsSource", defaultVal: !!model.data.shapeData() ? "file" : "url", editor: _base_metadata_1.editorTemplates.buttonGroup, valuesArray: [
                { value: "url", displayValue: "DashboardWebStringId.Map.CustomMapOptionsUrl" },
                { value: "file", displayValue: "DashboardWebStringId.Map.CustomMapOptionsFile" }
            ]
        };
        var visibilityRules = {};
        visibilityRules[_custom_shape_file_1.customShapefileUrl.propertyName] = [switcherInfo.propertyName, "=", "url"];
        visibilityRules[_custom_shape_file_data_1.shapeData.propertyName] = visibilityRules[_custom_shape_file_data_1.attributeData.propertyName] = [switcherInfo.propertyName, "=", "file"];
        var disabilityRules = {};
        disabilityRules[_custom_shape_file_data_1.attributeData.propertyName] = [[_custom_shape_file_data_1.shapeData.propertyName, "=", _custom_shape_file_data_1.shapeData.defaultVal], "or", [_custom_shape_file_data_1.shapeData.propertyName, "=", ""]];
        tab.tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: _utils_1.extend(model, {
                switcher: ko.observable(switcherInfo.defaultVal)
            }),
            properties: [
                switcherInfo,
                _custom_shape_file_1.customShapefileUrl, {
                    container: _custom_shape_file_1.customShapefileData,
                    properties: [
                        _custom_shape_file_data_1.shapeData,
                        _custom_shape_file_data_1.attributeData
                    ]
                }
            ],
            visibilityFilterRules: visibilityRules,
            disabledFilterRules: disabilityRules
        }));
    };
    return MapCustomShapefilePropertiesComposer;
}());
exports.MapCustomShapefilePropertiesComposer = MapCustomShapefilePropertiesComposer;
