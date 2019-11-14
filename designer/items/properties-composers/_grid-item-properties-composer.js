/**
* DevExpress Dashboard (_grid-item-properties-composer.js)
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
var _grid_options_1 = require("../../../model/items/grid/metadata/_grid-options");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var data_dashboard_item_1 = require("../../../model/items/data-dashboard-item");
var _dashboard_item_format_rule_1 = require("../../../model/format-rules/metadata/_dashboard-item-format-rule");
var _data_dashboard_item_1 = require("../../../model/items/metadata/_data-dashboard-item");
var _utils_1 = require("../../../data/_utils");
var GridItemPropertiesComposer = (function () {
    function GridItemPropertiesComposer(editRuleHandler) {
        this.editRuleHandler = editRuleHandler;
    }
    GridItemPropertiesComposer.prototype.composeTabs = function (model, dataSourceBrowser) {
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Layout, "DashboardWebStringId.AccordionTab.Layout", this.getLayoutWrapper(model.gridOptions)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.ConditionalFormatting, "DashboardWebStringId.ConditionalFormatting", this.getFormatRulesWrapper(model, dataSourceBrowser))
        ];
        return result;
    };
    GridItemPropertiesComposer.prototype.getLayoutWrapper = function (model) {
        var properties = [
            _grid_options_1.showHorizontalLines,
            _grid_options_1.showVerticalLines,
            _grid_options_1.enableBandedRows,
            _grid_options_1.showColumnHeaders,
            _grid_options_1.wordWrap,
            _grid_options_1.columnWidthMode
        ];
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties
        });
    };
    GridItemPropertiesComposer.prototype.getFormatRulesWrapper = function (model, dataSourceBrowser) {
        var extendedRuleInfo = _utils_1.extend({
            addHandler: function () { return data_dashboard_item_1.DataDashboardItem._createFormatRule(null, {
                "@ItemType": "GridItemFormatRule"
            }); }
        }, _dashboard_item_format_rule_1.classCaption);
        extendedRuleInfo.editHandler = this.editRuleHandler;
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: [__assign({ collectionItemDefaultPropertyInfo: extendedRuleInfo }, _data_dashboard_item_1.formatRules)]
        });
    };
    return GridItemPropertiesComposer;
}());
exports.GridItemPropertiesComposer = GridItemPropertiesComposer;
