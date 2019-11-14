/**
* DevExpress Dashboard (_dashboard-tabs-view-model.js)
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
var _interfaces_1 = require("../internal/_interfaces");
var disposable_object_1 = require("../../model/disposable-object");
var _tab_header_calculator_1 = require("../../viewer-parts/layout/_tab-header-calculator");
var _popup_menu_creator_1 = require("../../viewer-parts/widgets/caption-toolbar/_popup-menu-creator");
var _element_size_utils_1 = require("./_element-size-utils");
var _base_item_1 = require("../../viewer-parts/viewer-items/_base-item");
var $ = require("jquery");
var ko = require("knockout");
var DashboardTabsViewModel = (function (_super) {
    __extends(DashboardTabsViewModel, _super);
    function DashboardTabsViewModel(layoutItem, headerHeight, element) {
        var _this = _super.call(this) || this;
        _this.layoutItem = layoutItem;
        _this.headerHeight = headerHeight;
        _this.element = element;
        _this.showMenu = ko.observable(false);
        _this.tabPageBindings = ko.observableArray([]);
        _this.selectedItemKeys = ko.observableArray([]);
        _this.showAddButton = ko.computed(function () {
            return _this.layoutItem.isDesignMode() && _this.showCaption;
        });
        _this._defaultButtonWidth = 34;
        _this._tabsInfoCache = {};
        _this._toolbarCache = {};
        _this._initialize();
        return _this;
    }
    Object.defineProperty(DashboardTabsViewModel.prototype, "viewModel", {
        get: function () {
            return this.layoutItem.viewModel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardTabsViewModel.prototype, "showCaption", {
        get: function () {
            return this.viewModel.item() ? this.viewModel.item().showCaption() : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardTabsViewModel.prototype, "_containerSizeController", {
        get: function () {
            return this.layoutItem.sizeController;
        },
        enumerable: true,
        configurable: true
    });
    DashboardTabsViewModel.prototype.toggleMenu = function (bindings, args) {
        var menu = this._createMenuToolbarItem(this.headersViewModel.leftVisibleIndex, this.headersViewModel.rightVisibleIndex);
        var boundaryContainer = _base_item_1.getControlContainer(this.element);
        var container = this.element.firstElementChild;
        _popup_menu_creator_1.PopupMenuCreator.toggleMenu(args.currentTarget, menu, container, boundaryContainer);
    };
    DashboardTabsViewModel.prototype.createTabPage = function () {
        this.viewModel.createTabPage();
    };
    DashboardTabsViewModel.prototype.onSelectionChanged = function (e) {
        if (e.addedItems.length > 0) {
            var tabPageBinding = this.tabPageBindings().filter(function (tabPageBinding) { return tabPageBinding.id === e.addedItems[0].id; })[0];
            if (tabPageBinding && tabPageBinding.pageDashboardItem !== this.viewModel.activeTabPage()) {
                this.viewModel.activeTabPage(tabPageBinding.pageDashboardItem);
            }
        }
    };
    DashboardTabsViewModel.prototype._initialize = function () {
        var _this = this;
        $(this.element).attr('data-layout-item-name', this.viewModel.dashboardItem());
        _element_size_utils_1.setElementSize(this.element, this._containerSizeController);
        this.toDispose(ko.computed(function () {
            var bindings = _this.viewModel.childItems().map(function (pageLayoutItem) {
                var pageViewModel = pageLayoutItem._createViewModel();
                if (pageViewModel.hasItem()) {
                    return _this._createPageBinding(pageViewModel.item, pageViewModel.model);
                }
            }).filter(function (binding) { return !!binding; });
            _this.tabPageBindings(bindings);
            var activePage = _this.viewModel.activeTabPage.peek();
            if (activePage) {
                _this.selectedItemKeys(_this._getSelectedKeys(activePage));
            }
        }));
        this._containerSizeController.requestRepaint.add(function () { return _this._onContainerRepaint(); });
        this.toDispose(this.layoutItem.isDesignMode.subscribe(function (newValue) {
            _this._updateTabHeaders();
        }));
        this.toDispose(this.viewModel.activeTabPage.subscribe(function (newValue) {
            _this.selectedItemKeys(_this._getSelectedKeys(newValue));
            _this.tabPageBindings().forEach(function (page) {
                if (_this._toolbarCache[page.dashboardItem.componentName()] && newValue) {
                    _this._toolbarCache[page.dashboardItem.componentName()].disabled = page.id !== newValue.componentName();
                }
            });
        }));
    };
    DashboardTabsViewModel.prototype._createMenuToolbarItem = function (leftVisibleIndex, rightVisibleIndex) {
        var _this = this;
        var hiddenTabs = [];
        this.viewModel.childItems().forEach(function (layoutPageItem, i) {
            var layoutViewModel = layoutPageItem._createViewModel();
            if (layoutViewModel.hasItem()) {
                hiddenTabs.push({
                    name: layoutViewModel.item().name() ? layoutViewModel.item().name() : "",
                    page: layoutPageItem.item
                });
            }
        });
        hiddenTabs.splice(leftVisibleIndex, rightVisibleIndex - leftVisibleIndex + 1);
        return {
            type: 'list',
            items: hiddenTabs.map(function (tab) { return tab.name; }),
            itemClick: function (itemData, itemElement, menuItemIndex) {
                _this.viewModel.activeTabPage(hiddenTabs[menuItemIndex].page);
                _this._updateTabHeaders();
            }
        };
    };
    DashboardTabsViewModel.prototype._getSelectedKeys = function (activePage) {
        return activePage ? [activePage.componentName()] : [];
    };
    DashboardTabsViewModel.prototype._createPageBinding = function (toolbarHolder, pageLayoutItem) {
        return {
            dashboardItem: toolbarHolder(),
            id: pageLayoutItem.dashboardItem(),
            pageDashboardItem: pageLayoutItem.item,
            sizeController: new _interfaces_1.SingleTabItemSizeController(this.layoutItem.sizeController.requestRepaint, ko.observable(0), ko.observable(0)),
            context: this.layoutItem.getContext(),
            localContext: this._prepareLocalContext(this.layoutItem.getLocalContext()),
            ignoreBorder: ko.observable(false)
        };
    };
    DashboardTabsViewModel.prototype._prepareLocalContext = function (localContext) {
        var _this = this;
        localContext.viewerItemCreated.add(function (item, viewerItem) {
            viewerItem.deferredToolbarRenderingPromise = function (itemName, width, height) {
                var def = $.Deferred();
                _this._onToolbarUpdated(itemName, width, height, def);
                return def.promise();
            };
        });
        localContext.beforeApplyOptions.add(function (item, options, isCreation) {
            if (_this.viewModel.item()) {
                options.CaptionViewModel.ShowCaption = _this.showCaption;
            }
        });
        localContext.boundaryContainer = this.element;
        localContext.createCaptionToolbar = function (viewerItem, container, controlContainer, popupContainer, viewOptions) {
            var toolbar = _base_item_1.createDefaultToolbar(viewerItem, container, controlContainer, popupContainer, viewOptions);
            if (container) {
                _this._toolbarCache[viewerItem.options.Name] = toolbar;
                var binding = _this.tabPageBindings().filter(function (binding) { return binding.dashboardItem.componentName() === viewerItem.options.Name; })[0];
                toolbar.disabled = !_this.viewModel.activeTabPage() || binding.id !== _this.viewModel.activeTabPage().componentName();
            }
            return toolbar;
        };
        localContext.viewerItemDispose.add(function (item, viewerItem) {
            delete _this._tabsInfoCache[item.componentName()];
            delete _this._toolbarCache[item.componentName()];
        });
        return localContext;
    };
    DashboardTabsViewModel.prototype._onContainerRepaint = function () {
        _element_size_utils_1.setElementSize(this.element, this._containerSizeController);
        this._updateTabHeaders();
    };
    DashboardTabsViewModel.prototype._onToolbarUpdated = function (itemName, width, height, def) {
        var page = this.tabPageBindings().filter(function (page) { return page.dashboardItem.componentName() === itemName; })[0];
        this.headerHeight(Math.max(this.headerHeight(), height));
        this._tabsInfoCache[page.id] = {
            width: width,
            deferredRender: def
        };
        this._updateTabHeaders();
    };
    DashboardTabsViewModel.prototype._updateTabHeaders = function () {
        var _this = this;
        var tabHeadersWidth = this.tabPageBindings().map(function (page) { return _this._tabsInfoCache[page.id] ? _this._tabsInfoCache[page.id].width : undefined; });
        var tabHeadersDeferredRender = this.tabPageBindings().map(function (page) { return _this._tabsInfoCache[page.id] ? _this._tabsInfoCache[page.id].deferredRender : undefined; });
        var hasEmptyWidth = tabHeadersWidth.lastIndexOf(undefined) >= 0;
        if (tabHeadersWidth.length > 0 && !hasEmptyWidth) {
            var buttonsWidth_1 = this.showAddButton() ? this._defaultButtonWidth : 0;
            var activeTabIndex = Math.max(0, this.viewModel.activeTabIndex());
            this.headersViewModel = _tab_header_calculator_1.calcTabHeadersWidth(tabHeadersWidth, this._containerSizeController.getWidth() - buttonsWidth_1, activeTabIndex, this.showCaption);
            this.showMenu(this.showCaption && this.headersViewModel.widths.some(function (width) { return width === 0; }));
            if (this.showMenu()) {
                buttonsWidth_1 += this._defaultButtonWidth;
                this.headersViewModel = _tab_header_calculator_1.calcTabHeadersWidth(tabHeadersWidth, this._containerSizeController.getWidth() - buttonsWidth_1, activeTabIndex, this.showCaption);
            }
            this.tabPageBindings().forEach(function (page, index) { return page.ignoreBorder(index === _this.headersViewModel.rightVisibleIndex && buttonsWidth_1 === 0); });
            this.headersViewModel.widths.forEach(function (width, i) {
                _this.tabPageBindings()[i].sizeController.width(width);
                _this.tabPageBindings()[i].sizeController.height(_this.headerHeight());
                if (i >= _this.headersViewModel.leftVisibleIndex && i <= _this.headersViewModel.rightVisibleIndex) {
                    tabHeadersDeferredRender[i].resolve();
                }
            });
        }
    };
    return DashboardTabsViewModel;
}(disposable_object_1.DisposableObject));
exports.DashboardTabsViewModel = DashboardTabsViewModel;
