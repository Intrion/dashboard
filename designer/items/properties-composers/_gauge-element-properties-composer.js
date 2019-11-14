/**
* DevExpress Dashboard (_gauge-element-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var gauge_1 = require("../../../model/items/gauge/gauge");
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _display_name_provider_1 = require("../../_display-name-provider");
var _base_metadata_1 = require("../../../model/metadata/_base-metadata");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _gauge_1 = require("../../../model/items/gauge/metadata/_gauge");
var GaugeElementPropertiesComposer = (function () {
    function GaugeElementPropertiesComposer(editFormatHandler) {
        if (editFormatHandler === void 0) { editFormatHandler = function (model) { }; }
        this.editFormatHandler = editFormatHandler;
    }
    GaugeElementPropertiesComposer.prototype.composeTabs = function (model, dashboardItem, containerType, dataSourceBrowser) {
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.Options", this.getCommonWrapper(model, dashboardItem, dataSourceBrowser)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ScaleOptions, "DashboardWebStringId.Gauge.ScaleOptions", this.getScaleWrapper(model))
        ];
        if (model instanceof gauge_1.Gauge) {
            result.push(new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DeltaOptions, "DashboardWebStringId.Grid.DeltaOptions", _shared_composers_1.SharedComposers.getDeltaOptionsWrapper(model.deltaOptions)));
            var wrapper = _shared_composers_1.SharedComposers.getDeltaFormatsOptionsWrapper(model, this.editFormatHandler, { title: "Gauge Scale", numericFormat: model.scaleLabelNumericFormat });
            var formatsTab = new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.NumericFormat, "DashboardWebStringId.CardLayout.Editor.FormatOptions", wrapper);
            result.push(formatsTab);
        }
        return result;
    };
    GaugeElementPropertiesComposer.prototype.getCommonWrapper = function (model, dashboardItem, dataSourceBrowser) {
        var properties = [
            __assign({ editorOptions: { placeholder: _display_name_provider_1.getDataItemContainerDisplayName(dataSourceBrowser, dashboardItem, model) } }, _base_metadata_1.name),
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: null
        });
    };
    GaugeElementPropertiesComposer.prototype.getScaleWrapper = function (model) {
        var properties = [
            _gauge_1.minimum,
            _gauge_1.maximum
        ];
        var disabledRules = {};
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules
        });
    };
    return GaugeElementPropertiesComposer;
}());
exports.GaugeElementPropertiesComposer = GaugeElementPropertiesComposer;
