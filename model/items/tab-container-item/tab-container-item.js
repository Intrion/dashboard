/**
* DevExpress Dashboard (tab-container-item.js)
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
var dashboard_item_1 = require("../dashboard-item");
var _utils_1 = require("../../internal/_utils");
var dashboard_tab_page_1 = require("./dashboard-tab-page");
var _tab_container_item_1 = require("./metadata/_tab-container-item");
var _helper_classes_1 = require("../../internal/_helper-classes");
var serializable_model_1 = require("../../serializable-model");
var ko = require("knockout");
var dashboard_state_1 = require("../../dashboard-state");
var _knockout_utils_1 = require("../../internal/_knockout-utils");
var _default_1 = require("../../../data/localization/_default");
var TabContainerItem = (function (_super) {
    __extends(TabContainerItem, _super);
    function TabContainerItem(dashboardItemJSON, serializer) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        var _this = _super.call(this, dashboardItemJSON, serializer) || this;
        _this.tabPages = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(dashboardItemJSON.Pages, function (item) { return new dashboard_tab_page_1.DashboardTabPage(item, serializer); });
        if (_this.tabPages().length === 0) {
            _this._addNewPage();
        }
        _this._activeTabPage = ko.observable();
        _knockout_utils_1.subscribeWithPrev(_this._activeTabPage, function (prevPage, page) {
            var prevPageName = prevPage && _this.tabPages().indexOf(prevPage) != -1 ? prevPage.componentName() : "";
            var activePageName = page && _this.tabPages().indexOf(page) != -1 ? page.componentName() : "";
            if (_this._activePageChanged && (prevPageName !== activePageName || (!prevPageName && !page))) {
                _this._activePageChanged(prevPageName, activePageName);
            }
        });
        _this._state = ko.computed(function () {
            var state = new dashboard_state_1.ItemState();
            if (_this._activeTabPage() && _this.tabPages().indexOf(_this._activeTabPage()) !== 0) {
                state.TabPageName = _this._activeTabPage().componentName();
            }
            return state;
        });
        return _this;
    }
    TabContainerItem.prototype._setState = function (itemState) {
        _super.prototype._setState.call(this, itemState);
        if (itemState.TabPageName) {
            var page = this.tabPages().filter(function (page) { return page.componentName() === itemState.TabPageName; })[0];
            if (page) {
                this._activeTabPage(page);
            }
        }
    };
    TabContainerItem.prototype.getInfo = function () {
        return _tab_container_item_1.tabContainerItemSerializationInfo;
    };
    TabContainerItem.prototype._getDefaultItemType = function () {
        return "TabContainer";
    };
    TabContainerItem.prototype._addNewPage = function () {
        var tabPage = new dashboard_tab_page_1.DashboardTabPage({});
        tabPage.name(_helper_classes_1.NameGenerator.generateName(_default_1.getLocalizationById("DashboardStringId.DefaultNameTabPage") + " ", this.tabPages(), 'name', 1));
        this.tabPages.push(tabPage);
        return tabPage;
    };
    __decorate([
        _utils_1.collectionItemType("Page")
    ], TabContainerItem.prototype, "tabPages", void 0);
    return TabContainerItem;
}(dashboard_item_1.DashboardItem));
exports.TabContainerItem = TabContainerItem;
serializable_model_1.itemTypesMap["TabContainer"] = { type: TabContainerItem, groupName: 'layout', title: "DashboardStringId.DefaultNameTabContainerItem", index: 115 };
