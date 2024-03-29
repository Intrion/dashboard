﻿/**
* DevExpress Dashboard (dashboard-layout-tab-container.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var dashboard_layout_group_1 = require("./dashboard-layout-group");
var dashboard_layout_tab_page_1 = require("./dashboard-layout-tab-page");
var ko = require("knockout");
var _layout_utils_1 = require("./_layout-utils");
var _undo_engine_helper_1 = require("../../model/internal/_undo-engine-helper");
var index_internal_1 = require("../index.internal");
var DashboardLayoutTabContainer = (function (_super) {
    __extends(DashboardLayoutTabContainer, _super);
    function DashboardLayoutTabContainer(modelJson, serializer) {
        if (modelJson === void 0) { modelJson = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, modelJson, serializer) || this;
        _this._activeTabIndex = ko.computed(function () {
            return _this.childNodes().map(function (node) { return node.item; }).indexOf(_this._activeTabPage());
        });
        _this._activeTabPage = ko.computed({
            read: function () {
                return _this.item ? _this.item._activeTabPage() : undefined;
            },
            write: function (tabPage) {
                var containerItem = _this.item;
                if (containerItem && containerItem._activeTabPage() !== tabPage) {
                    containerItem._activeTabPage(tabPage);
                }
            }
        });
        _this._visibleItemsCore = ko.observableArray();
        ko.computed(function () {
            var tabContainerItem = _this.item;
            if (tabContainerItem && !tabContainerItem._activeTabPage.peek()) {
                var firstTabPageLayoutItem = _this.childNodes()[0];
                if (firstTabPageLayoutItem && firstTabPageLayoutItem.item) {
                    tabContainerItem._activeTabPage(firstTabPageLayoutItem.item);
                }
            }
        });
        index_internal_1.subscribeArrayChange(_this.childNodes, {
            added: function (page, index) {
                if (_this.childNodes().length === 1 && !_this._activeTabPage()) {
                    if (page.item) {
                        _this._activeTabPage(page.item);
                    }
                    else {
                        var _disposables_1 = ko.computed(function () {
                            if (page.item) {
                                _this._activeTabPage(page.item);
                                _disposables_1.dispose();
                            }
                        });
                    }
                }
            },
            deleted: function (page) {
                if (_this._activeTabPage() && _this._activeTabPage().componentName() === page.dashboardItem()) {
                    _this._activeTabPage(_this.childNodes()[0].item);
                }
            }
        });
        ko.computed(function () {
            _this._visibleItemsCore.removeAll();
            if (_this._tabContainer && _this._tabContainer._activeTabPage()) {
                var item = _this.childNodes().filter(function (childNode) { return childNode.item === _this._tabContainer._activeTabPage(); })[0];
                if (item)
                    _this._visibleItemsCore.push(item);
            }
        });
        return _this;
    }
    Object.defineProperty(DashboardLayoutTabContainer.prototype, "_tabContainer", {
        get: function () { return this.item; },
        enumerable: true,
        configurable: true
    });
    DashboardLayoutTabContainer.prototype._getDefaultItemType = function () { return "LayoutTabContainer"; };
    Object.defineProperty(DashboardLayoutTabContainer.prototype, "_template", {
        get: function () { return "dx-dashboard-tab-container"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutTabContainer.prototype, "_visibleItems", {
        get: function () { return this._visibleItemsCore; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutTabContainer.prototype, "_ignoreChildMaxHeight", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutTabContainer.prototype, "_dragOverInnerElementController", {
        get: function () {
            var _this = this;
            return {
                selector: ".dx-layout-item-container .dx-tab", onDragOver: function (index) {
                    if (_this._tabContainer) {
                        _this._activeTabPage(_this.childNodes()[index].item);
                    }
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    DashboardLayoutTabContainer.prototype._setItemCore = function (newItem) {
        var _this = this;
        _super.prototype._setItemCore.call(this, newItem);
        var tabContainerItem = newItem;
        tabContainerItem.tabPages().forEach(function (tabPage) { return _this._addLayoutTabPage(tabPage); });
    };
    DashboardLayoutTabContainer.prototype._createTabPage = function () {
        if (this._tabContainer) {
            var tabPageModel = this._tabContainer._addNewPage();
            var layoutTabPage = this._addLayoutTabPage(tabPageModel);
            this._activeTabPage(tabPageModel);
            return layoutTabPage;
        }
        return undefined;
    };
    DashboardLayoutTabContainer.prototype._removeLayoutTabPage = function (tabPageModel) {
        var tabPageLayoutItem = this._dashboard().layout().findLayoutItem(tabPageModel);
        if (tabPageLayoutItem) {
            tabPageLayoutItem._createViewModel().delete();
        }
    };
    DashboardLayoutTabContainer.prototype._deleteDashbordItem = function () {
        if (this._dashboard()) {
            _super.prototype._deleteDashbordItem.call(this);
            this.childNodes().forEach(function (layoutPage) { return layoutPage._deleteDashbordItem(); });
            this._dashboard().items.remove(this.item);
        }
    };
    DashboardLayoutTabContainer.prototype._addLayoutTabPage = function (tabPageModel) {
        var layoutItem = new dashboard_layout_tab_page_1.DashboardLayoutTabPage();
        layoutItem.item = tabPageModel;
        this.childNodes.push(layoutItem);
        return layoutItem;
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DashboardLayoutTabContainer.prototype, "_createTabPage", null);
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DashboardLayoutTabContainer.prototype, "_removeLayoutTabPage", null);
    return DashboardLayoutTabContainer;
}(dashboard_layout_group_1.DashboardLayoutGroup));
exports.DashboardLayoutTabContainer = DashboardLayoutTabContainer;
_layout_utils_1._layoutItemTypeMap["LayoutTabContainer"] = DashboardLayoutTabContainer;
