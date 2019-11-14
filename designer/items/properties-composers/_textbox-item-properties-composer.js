/**
* DevExpress Dashboard (_textbox-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _text_box_item_1 = require("../../../model/items/metadata/_text-box-item");
var TextBoxItemPropertiesComposer = (function () {
    function TextBoxItemPropertiesComposer() {
    }
    TextBoxItemPropertiesComposer.prototype.composeTabs = function (model) {
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model, [
                _text_box_item_1.textBoxText
            ]))
        ];
        return result;
    };
    return TextBoxItemPropertiesComposer;
}());
exports.TextBoxItemPropertiesComposer = TextBoxItemPropertiesComposer;
