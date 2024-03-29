﻿/**
* DevExpress Dashboard (_mobile-layout-master-filters-editor.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var caption_toolbar_options_1 = require("../../viewer-parts/widgets/caption-toolbar/caption-toolbar-options");
var _dashboard_title_model_1 = require("../viewer/title/_dashboard-title-model");
var _formatter_1 = require("../../data/_formatter");
var _viewer_interfaces_1 = require("../viewer/_viewer-interfaces");
var _mobile_layout_fullscreen_item_1 = require("./_mobile-layout-fullscreen-item");
var _mobile_layout_item_1 = require("./_mobile-layout-item");
var _mobile_layout_caption_toolbar_1 = require("../../viewer-parts/widgets/caption-toolbar/_mobile-layout-caption-toolbar");
var _caption_toolbar_css_classes_1 = require("../../viewer-parts/widgets/caption-toolbar/_caption-toolbar-css-classes");
var $ = require("jquery");
var ko = require("knockout");
var MasterFiltersEditorModel = (function () {
    function MasterFiltersEditorModel() {
        var _this = this;
        this._target = ko.observable(null);
        this._visible = ko.observable(false);
        this.visible = ko.computed(function () { return _this._visible(); });
        this.masterItems = ko.computed(function () {
            if (_this._target()) {
                return _this._target()._masterFilterItems();
            }
            else {
                return [];
            }
        });
    }
    MasterFiltersEditorModel.prototype.addFilterButton = function (toolbarItems, filterableItem) {
        var _this = this;
        if (filterableItem._masterFilterItems().length) {
            toolbarItems.push({
                name: caption_toolbar_options_1.dashboardToolbarItemNames.dashboardFilters,
                type: "button",
                icon: "dx-dashboard-filters",
                click: function () {
                    _this.show(filterableItem);
                }
            });
        }
    };
    MasterFiltersEditorModel.prototype.show = function (target) {
        this._target(target);
        this._visible(true);
    };
    MasterFiltersEditorModel.prototype.hide = function () {
        this._visible(false);
    };
    return MasterFiltersEditorModel;
}());
exports.MasterFiltersEditorModel = MasterFiltersEditorModel;
var ItemMasterFilterInfo = (function () {
    function ItemMasterFilterInfo(dashboardItem, click) {
        this.dashboardItem = dashboardItem;
        this.click = click;
        this.name = ko.computed(function () { return dashboardItem.name(); });
        this.filterValues = ko.computed(function () {
            return dashboardItem
                ._getDisplayFilterValues(_dashboard_title_model_1.maxFilterValuesCount)
                .filter(function (value) { return value.Values[0] && !!value.Values[0].Format; })
                .map(function (value) {
                return {
                    name: value.Name,
                    valuesString: value
                        .Values
                        .map(function (filterValue) { return _formatter_1.formatFilterValue(filterValue); })
                        .concat(value.Truncated ? ['…'] : [])
                        .join(', ')
                };
            });
        });
    }
    return ItemMasterFilterInfo;
}());
exports.ItemMasterFilterInfo = ItemMasterFilterInfo;
var ItemMasterFilterPopupViewModel = (function () {
    function ItemMasterFilterPopupViewModel(heightOffset, visible, repaintRequest) {
        this.width = function () { return $(window).width(); };
        this.height = function () { return $(window).height() - heightOffset; };
        this.visible = visible;
        var popupResizeController = new _mobile_layout_fullscreen_item_1.PopupResizeController(repaintRequest);
        this.onInitializing = popupResizeController.onInitialized;
        this.onDisposing = popupResizeController.onDisposing;
    }
    return ItemMasterFilterPopupViewModel;
}());
var ItemMasterFiltersViewModel = (function () {
    function ItemMasterFiltersViewModel(model, dashboardContext, repaintRequest) {
        var _this = this;
        this.model = model;
        this.masterFilterItem = ko.observable(null);
        this.showMasterFilterItem = function (dashboardItem, dashboardContext, repaintRequest) {
            _this.maximizeFiltersPopup(true);
            _this.masterFilterItem({
                dashboardItem: dashboardItem,
                dashboardContext: dashboardContext,
                repaintRequest: repaintRequest,
                localContext: new _viewer_interfaces_1.DashboardItemContext({
                    itemFactory: new _mobile_layout_fullscreen_item_1.MobileItemViewerFactory(),
                    addContextToolbarItems: function (options) {
                        options.actionItems = options.actionItems.filter(function (item) { return item.name !== caption_toolbar_options_1.dashboardToolbarItemNames.exportMenu; });
                    },
                    viewerItemCreated: function (dashboardItem, viewerItem) { return _mobile_layout_item_1.customizeMobileViewerItems(viewerItem); },
                    createCaptionToolbar: function (viewerItem, container, controlContainer, popupContainer, viewOptions) {
                        return new _mobile_layout_caption_toolbar_1.MobileLayoutCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, _caption_toolbar_css_classes_1.cssClasses.caption, viewOptions.captionToolbarSeparatorRequired);
                    },
                    beforeApplyOptions: function (item, options, isCreation) {
                        options.ParentContainer = undefined;
                        _mobile_layout_item_1.setCardAutoArrangementMode(item, options);
                    },
                    itemCreatingType: 'primary'
                })
            });
        };
        this.closeMasterFilterItemPopup = function () {
            _this.maximizeFiltersPopup(false);
            _this.masterFilterItem(null);
        };
        this.closeMasterFiltersPopup = function () {
            _this.closeMasterFilterItemPopup();
            _this.model.hide();
        };
        this.maximizeFiltersPopup = ko.observable(false);
        this.masterItems = ko.computed(function () { return model.masterItems().map(function (mi) { return new ItemMasterFilterInfo(mi, function () { return _this.showMasterFilterItem(mi, dashboardContext, repaintRequest); }); }); });
        var masterFiltersVisible = ko.computed(function () { return _this.model.visible(); });
        var masterFilterItemVisible = ko.computed(function () { return !!_this.masterFilterItem(); });
        this.masterFiltersPopup = new ItemMasterFilterPopupViewModel(50, masterFiltersVisible, repaintRequest);
        this.masterFilterMaximizedItemPopup = new ItemMasterFilterPopupViewModel(100, masterFilterItemVisible, repaintRequest);
        this.maximizeFiltersPopup = ko.observable(masterFiltersVisible());
    }
    return ItemMasterFiltersViewModel;
}());
exports.ItemMasterFiltersViewModel = ItemMasterFiltersViewModel;
