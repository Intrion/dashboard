﻿/**
* DevExpress Dashboard (_range-filter-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var RangeFilterItemPropertiesComposer = (function () {
    function RangeFilterItemPropertiesComposer(editRuleHandler) {
        this.editRuleHandler = editRuleHandler;
    }
    RangeFilterItemPropertiesComposer.prototype.composeTabs = function (model, dataSourceBrowser) {
        return [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model)),
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.CustomRanges, "DashboardWebStringId.RangeFilter.CustomPeriods", _shared_composers_1.SharedComposers.getCustomRangesWrapper(model, this.editRuleHandler, dataSourceBrowser, model.argument))
        ];
    };
    return RangeFilterItemPropertiesComposer;
}());
exports.RangeFilterItemPropertiesComposer = RangeFilterItemPropertiesComposer;
