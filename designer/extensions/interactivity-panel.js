/**
* DevExpress Dashboard (interactivity-panel.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _dashboard_item_menu_1 = require("../items/_dashboard-item-menu");
var _interactivity_properties_composer_1 = require("../items/_interactivity-properties-composer");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var name = "item-interactivity-panel";
var InteractivityPanelExtension = (function () {
    function InteractivityPanelExtension(dashboardControl) {
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._subscriptions = [];
        this.interactivityOptions = ko.observable();
    }
    InteractivityPanelExtension.prototype._contextMenuSubscriber = function (itemContextMenu) {
        if (!!itemContextMenu) {
            var item = this.dashboardControl._dashboardSurface().selectedDashboardItem();
            this._updateContextMenu(itemContextMenu, item);
        }
    };
    InteractivityPanelExtension.prototype._updateContextMenu = function (menu, item) {
        if (item._isInteractivityAllowed()) {
            if (menu instanceof _dashboard_item_menu_1.ItemMenuViewModel) {
                var composer = new _interactivity_properties_composer_1.InteractivityPropertiesComposer(menu.propertiesController);
                this.interactivityOptions({
                    model: item,
                    propertiesTabs: ko.observableArray(composer.composeTabs(item)),
                    propertiesController: menu.propertiesController,
                    template: "dx-dashboard-options"
                });
                menu.contextMenuItems.push({
                    menuItemId: this.name,
                    icon: "dx-dashboard-interactivity",
                    title: "DashboardWebStringId.Interactivity",
                    panelWidth: _dashboard_item_menu_1.DashboardItemMenuSizes.OptionsPanelWidth,
                    templateName: "dx-dashboard-options",
                    detailVisible: ko.observable(false),
                    detailData: this.interactivityOptions,
                    index: 200
                });
            }
        }
    };
    InteractivityPanelExtension.prototype.start = function () {
        var contextMenuExtension = this.dashboardControl.findExtension("item-menu");
        if (contextMenuExtension) {
            this._subscriptions.push(contextMenuExtension._itemContextMenu.subscribe(this._contextMenuSubscriber, this));
            this._contextMenuSubscriber(contextMenuExtension._itemContextMenu());
        }
    };
    InteractivityPanelExtension.prototype.stop = function () {
        this._subscriptions.forEach(function (s) { return s.dispose(); });
        this._subscriptions = [];
    };
    return InteractivityPanelExtension;
}());
exports.InteractivityPanelExtension = InteractivityPanelExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new InteractivityPanelExtension(dashboardControl); };
