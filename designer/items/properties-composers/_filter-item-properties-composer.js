/**
* DevExpress Dashboard (_filter-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _filter_element_item_base_1 = require("../../../model/items/filter-items/metadata/_filter-element-item-base");
var list_box_item_1 = require("../../../model/items/filter-items/list-box-item");
var combo_box_item_1 = require("../../../model/items/filter-items/combo-box-item");
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _combo_box_item_1 = require("../../../model/items/filter-items/metadata/_combo-box-item");
var _list_box_item_1 = require("../../../model/items/filter-items/metadata/_list-box-item");
var _tree_view_item_1 = require("../../../model/items/filter-items/metadata/_tree-view-item");
var FilterItemPropertiesComposer = (function () {
    function FilterItemPropertiesComposer() {
    }
    FilterItemPropertiesComposer.prototype.composeTabs = function (model) {
        var disabledRules = {};
        disabledRules[_filter_element_item_base_1.showAllValue.propertyName] = function (args) {
            var model = args.model;
            if (model instanceof list_box_item_1.ListBoxItem) {
                return model.listBoxType() === "Checked";
            }
            if (model instanceof combo_box_item_1.ComboBoxItem) {
                return model.comboBoxType() === "Checked";
            }
            return false;
        };
        var showAllValuePropertyInfo = _filter_element_item_base_1.showAllValue;
        if (model._useNeutralFilterMode()) {
            showAllValuePropertyInfo.displayName = "DashboardWebStringId.FilterItem.AllowEmptyFilter";
        }
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model, [
                _combo_box_item_1.comboBoxType,
                _list_box_item_1.listBoxType,
                _filter_element_item_base_1.showAllValue,
                _tree_view_item_1.autoExpand,
                _filter_element_item_base_1.enableSearch
            ], disabledRules))
        ];
        return result;
    };
    return FilterItemPropertiesComposer;
}());
exports.FilterItemPropertiesComposer = FilterItemPropertiesComposer;
