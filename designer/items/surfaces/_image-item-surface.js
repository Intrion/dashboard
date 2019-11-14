/**
* DevExpress Dashboard (_image-item-surface.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _image_item_properties_composer_1 = require("../properties-composers/_image-item-properties-composer");
var _section_descriptors_1 = require("../_section-descriptors");
var ImageItemSurface = (function () {
    function ImageItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
    }
    ImageItemSurface.prototype.getPropertiesComposer = function () {
        return new _image_item_properties_composer_1.ImageItemPropertiesComposer();
    };
    ImageItemSurface.prototype.dispose = function () {
    };
    return ImageItemSurface;
}());
exports.ImageItemSurface = ImageItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("Image", ImageItemSurface);
