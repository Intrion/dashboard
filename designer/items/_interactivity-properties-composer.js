﻿/**
* DevExpress Dashboard (_interactivity-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../_accordion-tab");
var _object_properties_wrapper_1 = require("../_object-properties-wrapper");
var _interactivity_options_1 = require("../../model/items/options/metadata/_interactivity-options");
var pivot_item_1 = require("../../model/items/pivot/pivot-item");
var bound_image_item_1 = require("../../model/items/bound-image-item");
var text_box_item_1 = require("../../model/items/text-box-item");
var _data_dashboard_item_1 = require("../../model/items/metadata/_data-dashboard-item");
var InteractivityPropertiesComposer = (function () {
    function InteractivityPropertiesComposer(propertiesController) {
        this.propertiesController = propertiesController;
    }
    InteractivityPropertiesComposer.prototype.composeTabs = function (model) {
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Interactivity, "DashboardWebStringId.InteractivityOptions")
        ];
        var properties = [{
                container: _interactivity_options_1.commonInteractivityOptions,
                properties: [
                    _interactivity_options_1.isMasterFilterDefaultFalse,
                    _interactivity_options_1.masterFilterMode,
                    _interactivity_options_1.isDrillDownEnabled,
                    _interactivity_options_1.targetDimensions,
                    _interactivity_options_1.ignoreMasterFiltersDefaultFalse
                ]
            }];
        if (!((model instanceof pivot_item_1.PivotItem) || (model instanceof bound_image_item_1.BoundImageItem) || (model instanceof text_box_item_1.TextBoxItem))) {
            properties.push(_data_dashboard_item_1.isMasterFilterCrossDataSource);
        }
        var disabledRules = {};
        disabledRules[_data_dashboard_item_1.isMasterFilterCrossDataSource.propertyName] = [_interactivity_options_1.masterFilterMode.propertyName, "=", "None"];
        if (model.interactivityOptions.targetDimensions) {
            model.interactivityOptions.targetDimensions.subscribe(function (newTargetDimension) {
                if (newTargetDimension === "Points") {
                    model.interactivityOptions.isDrillDownEnabled(false);
                }
            });
            disabledRules[_interactivity_options_1.isDrillDownEnabled.propertyName] = [_interactivity_options_1.targetDimensions.propertyName, "=", "Points"];
        }
        result[0].tabModel(new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules
        }));
        return result;
    };
    return InteractivityPropertiesComposer;
}());
exports.InteractivityPropertiesComposer = InteractivityPropertiesComposer;
