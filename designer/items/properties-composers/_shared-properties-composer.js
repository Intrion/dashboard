/**
* DevExpress Dashboard (_shared-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var SharedPropertiesComposer = (function () {
    function SharedPropertiesComposer() {
    }
    SharedPropertiesComposer.prototype.composeTabs = function (model) {
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model))
        ];
        return result;
    };
    return SharedPropertiesComposer;
}());
exports.SharedPropertiesComposer = SharedPropertiesComposer;
