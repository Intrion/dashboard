/**
* DevExpress Dashboard (_bound-image-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _bound_image_item_1 = require("../../../model/items/metadata/_bound-image-item");
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var _image_item_1 = require("../../../model/items/metadata/_image-item");
var BoundImageItemPropertiesComposer = (function () {
    function BoundImageItemPropertiesComposer() {
    }
    BoundImageItemPropertiesComposer.prototype.composeTabs = function (model) {
        var specificDisabledRules = {};
        specificDisabledRules[_bound_image_item_1.uriPattern.propertyName] = [_bound_image_item_1.dataBindingMode.propertyName, "<>", "Uri"];
        var result = [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.ImageOptions", _shared_composers_1.SharedComposers.getCommonWrapper(model, [
                _bound_image_item_1.dataBindingMode,
                _bound_image_item_1.uriPattern,
                _image_item_1.sizeMode,
                _image_item_1.horizontalAlignment,
                _image_item_1.verticalAlignment,
            ], specificDisabledRules))
        ];
        return result;
    };
    return BoundImageItemPropertiesComposer;
}());
exports.BoundImageItemPropertiesComposer = BoundImageItemPropertiesComposer;
