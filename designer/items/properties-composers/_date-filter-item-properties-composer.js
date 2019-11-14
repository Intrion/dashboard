/**
* DevExpress Dashboard (_date-filter-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _shared_composers_1 = require("./_shared-composers");
var _accordion_tab_1 = require("../../_accordion-tab");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var index_metadata_1 = require("../../../model/index.metadata");
var index_internal_1 = require("../../../data/index.internal");
var DateFilterItemPropertiesComposer = (function () {
    function DateFilterItemPropertiesComposer(editRuleHandler) {
        this.editRuleHandler = editRuleHandler;
    }
    DateFilterItemPropertiesComposer.prototype.composeTabs = function (model, dataSourceBrowser) {
        return [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model, [], {})),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Layout, "Layout", this.getLayoutWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.CustomRanges, "DashboardWebStringId.RangeFilter.CustomPeriods", _shared_composers_1.SharedComposers.getCustomRangesWrapper(model, this.editRuleHandler, dataSourceBrowser, model.dimension))
        ];
    };
    DateFilterItemPropertiesComposer.prototype.getLayoutWrapper = function (model) {
        var properties = [
            index_metadata_1.filterType,
            index_metadata_1.arrangementMode,
            index_metadata_1.datePickerLocation,
            index_metadata_1.displayTextPattern
        ];
        index_metadata_1.displayTextPattern.editorOptions.placeholder = index_internal_1.getLocalizationById(index_metadata_1.displayTextPattern.editorOptions.placeholder);
        return new _object_properties_wrapper_1.ObjectPropertiesWrapper({
            model: model,
            properties: properties
        });
    };
    return DateFilterItemPropertiesComposer;
}());
exports.DateFilterItemPropertiesComposer = DateFilterItemPropertiesComposer;
