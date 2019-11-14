/**
* DevExpress Dashboard (_pivot-item-properties-composer.js)
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
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var data_dashboard_item_1 = require("../../../model/items/data-dashboard-item");
var _dashboard_item_format_rule_1 = require("../../../model/format-rules/metadata/_dashboard-item-format-rule");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _data_dashboard_item_1 = require("../../../model/items/metadata/_data-dashboard-item");
var _pivot_item_1 = require("../../../model/items/pivot/metadata/_pivot-item");
var PivotItemPropertiesComposer = (function () {
    function PivotItemPropertiesComposer(editRuleHandler) {
        this.editRuleHandler = editRuleHandler;
    }
    PivotItemPropertiesComposer.prototype.composeTabs = function (model, dataSourceBrowser) {
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DataLayout, "DashboardWebStringId.AccordionTab.Layout", this.getLayoutDataWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.DataLayout, "DashboardWebStringId.AccordionTab.PivotInitialState", this.getInitialStateDataWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ConditionalFormatting, "DashboardWebStringId.ConditionalFormatting", PivotItemPropertiesComposer.getFormatRulesWrapper(model, dataSourceBrowser, this.editRuleHandler))
        ];
        return result;
    };
    PivotItemPropertiesComposer.getFormatRulesWrapper = function (model, dataSourceBrowser, editHandler) {
        var extendedRuleInfo = __assign({ addHandler: function () { return data_dashboard_item_1.DataDashboardItem._createFormatRule(null, {
                "@ItemType": "PivotItemFormatRule",
            }); } }, _dashboard_item_format_rule_1.classCaption);
        extendedRuleInfo["editHandler"] = editHandler;
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [__assign({ collectionItemDefaultPropertyInfo: extendedRuleInfo }, _data_dashboard_item_1.formatRules)]
        });
    };
    PivotItemPropertiesComposer.prototype.getLayoutDataWrapper = function (model) {
        var properties = [
            _pivot_item_1.layoutType,
            _pivot_item_1.showColumnTotals,
            _pivot_item_1.showRowTotals,
            _pivot_item_1.showColumnGrandTotals,
            _pivot_item_1.showRowGrandTotals,
            _pivot_item_1.columnTotalsPosition,
            _pivot_item_1.rowTotalsPosition,
            _pivot_item_1.valuesPosition
        ];
        var disabledRules = {};
        disabledRules[_pivot_item_1.rowTotalsPosition.propertyName] = function (m) { return model.layoutType() === "Compact"; };
        disabledRules[_pivot_item_1.showRowTotals.propertyName] = function (m) { return model.layoutType() === "Compact"; };
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties,
            disabledFilterRules: disabledRules
        });
    };
    PivotItemPropertiesComposer.prototype.getInitialStateDataWrapper = function (model) {
        var properties = [
            _pivot_item_1.autoExpandColumnGroups,
            _pivot_item_1.autoExpandRowGroups
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties
        });
    };
    return PivotItemPropertiesComposer;
}());
exports.PivotItemPropertiesComposer = PivotItemPropertiesComposer;
