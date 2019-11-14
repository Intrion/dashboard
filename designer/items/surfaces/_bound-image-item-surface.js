/**
* DevExpress Dashboard (_bound-image-item-surface.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _base_item_surface_1 = require("./_base-item-surface");
var _single_data_item_surface_1 = require("../sections/_single-data-item-surface");
var _bound_image_item_properties_composer_1 = require("../properties-composers/_bound-image-item-properties-composer");
var _section_descriptors_1 = require("../_section-descriptors");
var _bound_image_item_1 = require("../../../model/items/metadata/_bound-image-item");
var BoundImageItemSurface = (function (_super) {
    __extends(BoundImageItemSurface, _super);
    function BoundImageItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    BoundImageItemSurface.prototype.fillSections = function () {
        this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
            itemSurface: this,
            sectionInfo: {
                title: "DashboardWebStringId.Binding.Attribute",
                bindingProperty: {
                    propertyName: _bound_image_item_1.imageItem.propertyName,
                    dataItemType: "Dimension",
                    emptyPlaceholder: "DashboardWebStringId.Binding.SetAttribute",
                    selectedPlaceholder: "DashboardWebStringId.Binding.ConfigureAttribute"
                }
            }
        }));
    };
    BoundImageItemSurface.prototype.getPropertiesComposer = function () {
        return new _bound_image_item_properties_composer_1.BoundImageItemPropertiesComposer();
    };
    return BoundImageItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.BoundImageItemSurface = BoundImageItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("BoundImage", BoundImageItemSurface);
