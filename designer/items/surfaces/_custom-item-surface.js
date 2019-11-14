/**
* DevExpress Dashboard (_custom-item-surface.js)
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
var custom_item_1 = require("../../../model/items/custom-item/custom-item");
var _accordion_tab_1 = require("../../_accordion-tab");
var _shared_composers_1 = require("../properties-composers/_shared-composers");
var _object_properties_wrapper_1 = require("../../_object-properties-wrapper");
var _base_item_surface_1 = require("./_base-item-surface");
var _data_item_collection_surface_1 = require("../sections/_data-item-collection-surface");
var _single_data_item_surface_1 = require("../sections/_single-data-item-surface");
var _section_descriptors_1 = require("../_section-descriptors");
var string_1 = require("devextreme/core/utils/string");
var _default_1 = require("../../../data/localization/_default");
var CustomItemPropertiesComposer = (function () {
    function CustomItemPropertiesComposer() {
    }
    CustomItemPropertiesComposer.prototype.composeTabs = function (model) {
        var propertiesByTab = {};
        propertiesByTab[_accordion_tab_1.KnownTabs.Common] = [];
        model.customProperties.forEach(function (p) {
            var key = p.sectionName || _accordion_tab_1.KnownTabs.Common;
            if (!propertiesByTab[key]) {
                propertiesByTab[key] = [];
            }
            propertiesByTab[key].push(custom_item_1.CustomItem.getPropertyInfo(p));
        });
        return Object.keys(propertiesByTab).map(function (key) {
            if (key === _accordion_tab_1.KnownTabs.Common) {
                return new _accordion_tab_1.AccordionTab(key, "DashboardWebStringId.AccordionTab.Common", _shared_composers_1.SharedComposers.getCommonWrapper(model, propertiesByTab[key]));
            }
            else {
                return new _accordion_tab_1.AccordionTab(key, key, new _object_properties_wrapper_1.ObjectPropertiesWrapper({
                    model: model,
                    properties: propertiesByTab[key]
                }));
            }
        });
    };
    return CustomItemPropertiesComposer;
}());
exports.CustomItemPropertiesComposer = CustomItemPropertiesComposer;
var CustomItemSurface = (function (_super) {
    __extends(CustomItemSurface, _super);
    function CustomItemSurface(dashboardItem, dashboardModel, dataSourceBrowser) {
        return _super.call(this, dashboardItem, dashboardModel, dataSourceBrowser) || this;
    }
    Object.defineProperty(CustomItemSurface.prototype, "showDefaultSections", {
        get: function () {
            return this.dashboardItem.customBindings.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    CustomItemSurface.prototype.fillSections = function () {
        var _this = this;
        var format = function (localizationId, arg1) { return string_1.format(_default_1.getLocalizationById(localizationId), _default_1.getLocalizationById(arg1)); };
        this.dashboardItem.customBindings.forEach(function (binding) {
            var sectionInfo = {
                title: binding.displayName,
                bindingProperty: {
                    propertyName: custom_item_1.CustomItem._getBindingLinkName(binding.propertyName),
                    dataItemType: binding.dataItemType,
                    emptyPlaceholder: binding.emptyPlaceholder || format('DashboardWebStringId.Binding.DefaultEmptyPlaceholder', binding.displayName),
                    selectedPlaceholder: binding.selectedPlaceholder || format('DashboardWebStringId.Binding.DefaultSelectedPlaceholder', binding.displayName)
                }
            };
            if (binding.array) {
                _this.sections.push(new _data_item_collection_surface_1.DataItemCollectionSurface(_this, sectionInfo));
            }
            else {
                _this.sections.push(new _single_data_item_surface_1.SingleDataItemSurface({
                    itemSurface: _this,
                    sectionInfo: sectionInfo,
                    fieldConstraint: function (dataField) {
                        return !binding.constraints || !binding.constraints.allowedTypes || binding.constraints.allowedTypes.indexOf(dataField.fieldType()) >= 0;
                    }
                }));
            }
        });
    };
    CustomItemSurface.prototype.getPropertiesComposer = function () {
        return new CustomItemPropertiesComposer();
    };
    return CustomItemSurface;
}(_base_item_surface_1.BaseItemSurface));
exports.CustomItemSurface = CustomItemSurface;
_section_descriptors_1.surfaceItemsFactory.register("CustomItem", CustomItemSurface);
