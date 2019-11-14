/**
* DevExpress Dashboard (properties-panel.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _dashboard_item_menu_1 = require("../items/_dashboard-item-menu");
var _shared_properties_composer_1 = require("../items/properties-composers/_shared-properties-composer");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var name = "item-options-panel";
var OptionsPanelExtension = (function () {
    function OptionsPanelExtension(dashboardControl) {
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._subscriptions = [];
        this._perMenuSubscriptions = [];
        this._customizeTabsHandlers = [];
        this._properties = ko.observable();
    }
    OptionsPanelExtension.prototype._contextMenuSubscriber = function (itemContextMenu) {
        if (!!itemContextMenu) {
            var item = this.dashboardControl._dashboardSurface().selectedDashboardItem();
            this._updateContextMenu(itemContextMenu, item, this.dashboardControl.dashboard(), this.dashboardControl._dataSourceBrowser);
        }
    };
    OptionsPanelExtension.prototype.start = function () {
        var contextMenuExtension = this.dashboardControl.findExtension("item-menu");
        if (contextMenuExtension) {
            this._subscriptions.push(contextMenuExtension._itemContextMenu.subscribe(this._contextMenuSubscriber, this));
            this._contextMenuSubscriber(contextMenuExtension._itemContextMenu());
        }
    };
    OptionsPanelExtension.prototype.stop = function () {
        this._perMenuSubscriptions.forEach(function (s) { return s.dispose(); });
        this._perMenuSubscriptions = [];
        this._subscriptions.forEach(function (s) { return s.dispose(); });
        this._subscriptions = [];
    };
    OptionsPanelExtension.prototype._updateContextMenu = function (menu, item, dashboard, dataSourceBrowser) {
        var _this = this;
        this._perMenuSubscriptions.forEach(function (s) { return s.dispose(); });
        this._perMenuSubscriptions = [];
        var composer;
        if (menu.selectedItemSurface) {
            composer = menu.selectedItemSurface.getPropertiesComposer();
        }
        if (!composer) {
            composer = new _shared_properties_composer_1.SharedPropertiesComposer();
        }
        var tabs = ko.observableArray();
        this._perMenuSubscriptions.push(ko.computed(function () {
            var oldTabs = tabs.peek();
            oldTabs && oldTabs.forEach(function (t) { return t.dispose(); });
            var newTabs = composer.composeTabs(item, dataSourceBrowser, dashboard, menu.propertiesController);
            _this._customizeTabsHandlers.forEach(function (handler) { return handler(newTabs); });
            tabs(newTabs);
        }));
        this._properties({
            model: item,
            propertiesTabs: tabs,
            propertiesController: menu.propertiesController,
            template: "dx-dashboard-options"
        });
        menu.contextMenuItems.push({
            menuItemId: this.name,
            icon: "dx-dashboard-properties",
            title: "DashboardWebStringId.Options",
            panelWidth: _dashboard_item_menu_1.DashboardItemMenuSizes.OptionsPanelWidth,
            templateName: "dx-dashboard-options",
            detailVisible: ko.observable(false),
            detailData: this._properties,
            index: 300
        });
    };
    OptionsPanelExtension.prototype._subscribeTabsChanged = function (handler) {
        var _this = this;
        if (this._customizeTabsHandlers.indexOf(handler) === -1) {
            this._customizeTabsHandlers.push(handler);
        }
        return {
            dispose: function () {
                _this._customizeTabsHandlers.splice(_this._customizeTabsHandlers.indexOf(handler), 1);
            }
        };
    };
    return OptionsPanelExtension;
}());
exports.OptionsPanelExtension = OptionsPanelExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new OptionsPanelExtension(dashboardControl); };
