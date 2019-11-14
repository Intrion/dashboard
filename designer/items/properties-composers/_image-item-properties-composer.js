/**
* DevExpress Dashboard (_image-item-properties-composer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _image_item_1 = require("../../../model/items/metadata/_image-item");
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("./_shared-composers");
var ImageItemPropertiesComposer = (function () {
    function ImageItemPropertiesComposer() {
    }
    ImageItemPropertiesComposer.prototype.composeTabs = function (model) {
        var visibilityRules = {};
        visibilityRules[_image_item_1.image64.propertyName] = function (m) { return m.imageType() == 'embedded'; };
        visibilityRules[_image_item_1.urlPath.propertyName] = function (m) { return m.imageType() == 'linked'; };
        var specificProperties = [
            _image_item_1.sizeMode,
            _image_item_1.horizontalAlignment,
            _image_item_1.verticalAlignment,
            _image_item_1.imageType,
            _image_item_1.urlPath,
            _image_item_1.image64
        ];
        return [
            new _accordion_tab_1.AccordionTab(_accordion_tab_1.KnownTabs.Common, "DashboardWebStringId.AccordionTab.ImageOptions", _shared_composers_1.SharedComposers.getCommonWrapper(model, specificProperties, {}, visibilityRules))
        ];
    };
    return ImageItemPropertiesComposer;
}());
exports.ImageItemPropertiesComposer = ImageItemPropertiesComposer;
