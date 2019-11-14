/**
* DevExpress Dashboard (_tab-container-item-surface.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _tab_container_item_properties_composer_1 = require("../properties-composers/_tab-container-item-properties-composer");
var _section_descriptors_1 = require("../_section-descriptors");
var TabContainerItemSurface = (function () {
    function TabContainerItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
    }
    TabContainerItemSurface.prototype.getPropertiesComposer = function () {
        return new _tab_container_item_properties_composer_1.TabContainerItemPropertiesComposer();
    };
    TabContainerItemSurface.prototype.dispose = function () {
    };
    return TabContainerItemSurface;
}());
exports.TabContainerItemSurface = TabContainerItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("TabContainer", TabContainerItemSurface);
