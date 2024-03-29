﻿/**
* DevExpress Dashboard (_mobile-layout-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _viewer_interfaces_1 = require("../viewer/_viewer-interfaces");
var _static_toolbar_1 = require("../../viewer-parts/widgets/caption-toolbar/_static-toolbar");
var _caption_toolbar_css_classes_1 = require("../../viewer-parts/widgets/caption-toolbar/_caption-toolbar-css-classes");
var card_item_1 = require("../../model/items/card/card-item");
var _data_grid_item_1 = require("../../viewer-parts/viewer-items/data-grid-item/_data-grid-item");
var _cards_item_1 = require("../../viewer-parts/viewer-items/_cards-item");
var $ = require("jquery");
var ko = require("knockout");
var _date_filter_element_1 = require("../../viewer-parts/viewer-items/filter-items/_date-filter-element");
var index_internal_1 = require("../viewer/index.internal");
var MobileLayoutItemViewModel = (function () {
    function MobileLayoutItemViewModel(dashboardContext, repaintRequest, dashboardItem, _fullscreenItemModel) {
        var _this = this;
        this.dashboardContext = dashboardContext;
        this.repaintRequest = repaintRequest;
        this.dashboardItem = dashboardItem;
        this._fullscreenItemModel = _fullscreenItemModel;
        this._cachedItemWidth = 0;
        this._swipeToActionCoef = 100;
        this.itemOffsetInPixels = ko.observable(0);
        this.actionReadyCoef = ko.computed(function () {
            var offsetInPixels = _this.itemOffsetInPixels();
            if (offsetInPixels > 0) {
                var coef = Math.abs(offsetInPixels / _this._swipeToActionCoef);
                if (coef > 1)
                    coef = 1;
                return coef;
            }
            else {
                return 0;
            }
        });
        this.isReadyForAction = ko.computed(function () {
            return _this.actionReadyCoef() >= 1;
        });
        this.maximizeIconOpacity = ko.computed(function () {
            return _this.actionReadyCoef();
        });
        this.click = function (data, args) {
            _this._performShowFullscreenItem();
            _this.unselectItem(data, args);
        };
        this.selectItem = function (data, args) {
            if (_this.canMaximizeItem) {
                args.target.classList.add('dx-dashboard-mobile-layout-item-selected');
            }
        };
        this.unselectItem = function (data, args) {
            args.target.classList.remove('dx-dashboard-mobile-layout-item-selected');
        };
        this.swipestart = function (data, args) {
            _this._cachedItemWidth = $(_this._getStandaloneItemElement(args.target)).width();
        };
        this.swipeupdate = function (data, args) {
            if (args.offset > 0) {
                _this.itemOffsetInPixels(args.offset * _this._cachedItemWidth);
            }
            else {
                _this._reset();
            }
        };
        this.swipeend = function (data, args) {
            if (_this.isReadyForAction()) {
                _this._performShowFullscreenItem();
            }
            _this._reset();
        };
        this.localContext = new _viewer_interfaces_1.DashboardItemContext({
            addContextToolbarItems: function (options) {
                options.stateItems = [];
                options.actionItems = [];
                options.navigationItems = [];
            },
            createCaptionToolbar: function (viewerItem, container, controlContainer, popupContainer, viewOptions) {
                return viewOptions.hasCaption ? new _static_toolbar_1.StaticCaptionToolbar(container, controlContainer, popupContainer, viewOptions.encodeHtml, _caption_toolbar_css_classes_1.cssClasses.caption, viewOptions.captionToolbarSeparatorRequired, true) :
                    new index_internal_1.HiddenCaptionToolbar();
            },
            viewerItemCreated: function (dashboardItem, viewerItem) { return customizeMobileViewerItems(viewerItem); },
            beforeApplyOptions: function (item, options, isCreation) {
                options.ParentContainer = undefined;
                setCardAutoArrangementMode(item, options);
            },
            itemCreatingType: 'secondary'
        });
    }
    Object.defineProperty(MobileLayoutItemViewModel.prototype, "canMaximizeItem", {
        get: function () {
            return this.dashboardItem._uiState() === 'live';
        },
        enumerable: true,
        configurable: true
    });
    MobileLayoutItemViewModel.prototype._reset = function () {
        this.itemOffsetInPixels(0);
    };
    MobileLayoutItemViewModel.prototype._performShowFullscreenItem = function () {
        if (this.canMaximizeItem) {
            this._fullscreenItemModel.maximizeItem(this.dashboardItem);
        }
    };
    MobileLayoutItemViewModel.prototype._getStandaloneItemElement = function (element) {
        return element.parentElement.querySelector("dashboard-standalone-item");
    };
    return MobileLayoutItemViewModel;
}());
exports.MobileLayoutItemViewModel = MobileLayoutItemViewModel;
function setCardAutoArrangementMode(item, options) {
    if (item instanceof card_item_1.CardItem) {
        options.ViewModel.ContentDescription.ArrangementMode = 'Auto';
    }
}
exports.setCardAutoArrangementMode = setCardAutoArrangementMode;
function customizeMobileViewerItems(viewerItem) {
    if (viewerItem instanceof _data_grid_item_1.dataGridItem) {
        viewerItem._customizeViewOptions = function (options) {
            options.columnHidingEnabled = true;
            options.allowColumnResizing = false;
        };
        viewerItem._getColumnWidthProperty = function () {
            return 'width';
        };
        viewerItem._getColumnWidthMode = function () {
            return 'AutoFitToContents';
        };
        viewerItem._getDefaultBestCharacterCount = function (index) {
            return 10;
        };
    }
    if (viewerItem instanceof _cards_item_1.cardsItem) {
        viewerItem._getIgnorePadding = function () {
            return false;
        };
    }
    if (viewerItem instanceof _date_filter_element_1.dateFilterElement) {
        viewerItem._mobileLayout = function () {
            return true;
        };
    }
}
exports.customizeMobileViewerItems = customizeMobileViewerItems;
