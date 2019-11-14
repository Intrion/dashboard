/**
* DevExpress Dashboard (binding-panel.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _dashboard_item_menu_1 = require("../items/_dashboard-item-menu");
var data_dashboard_item_1 = require("../../model/items/data-dashboard-item");
var control_options_1 = require("../../common/control-options");
var $ = require("jquery");
var ko = require("knockout");
var name = "item-binding-panel";
var BindingPanelExtension = (function () {
    function BindingPanelExtension(dashboardControl) {
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._subscriptions = [];
    }
    BindingPanelExtension.prototype._contextMenuSubscriber = function (dashboardItemMenu) {
        if (!!dashboardItemMenu) {
            if (this.dashboardControl._dashboardSurface().selectedDashboardItem() instanceof data_dashboard_item_1.DataDashboardItem) {
                this._updateDashboardItemMenu(dashboardItemMenu);
            }
        }
    };
    BindingPanelExtension.prototype._updateEmptyItemTemplate = function (surface) {
        var _this = this;
        if (surface) {
            surface.emptyItemTemplates.push({
                name: "dx-dashboard-binding-properties-empty-item",
                data: {
                    isDesignMode: this.dashboardControl.isDesignMode,
                    click: function () {
                        var contextMenuExtension = _this.dashboardControl.findExtension("item-menu");
                        if (contextMenuExtension) {
                            contextMenuExtension.menuItemClick(_this.name);
                        }
                    }
                }
            });
        }
    };
    BindingPanelExtension.prototype._updateDashboardItemMenu = function (menu) {
        if (menu instanceof _dashboard_item_menu_1.ItemMenuViewModel) {
            if (!!menu.selectedItemSurface && !!menu.selectedItemSurface.sections && menu.selectedItemSurface.sections().length > 0) {
                menu.contextMenuItems.push({
                    menuItemId: this.name,
                    icon: "dx-dashboard-item-options",
                    popoverClass: "dx-dashboard-binding-panel",
                    panelWidth: _dashboard_item_menu_1.DashboardItemMenuSizes.BindingPanelPanelWidth,
                    templateName: "dx-dashboard-binding-properties",
                    detailVisible: ko.observable(false),
                    detailData: menu.selectedItemSurface,
                    hint: "DashboardWebStringId.Bindings",
                    index: 100
                });
            }
        }
    };
    BindingPanelExtension.prototype.start = function () {
        var _this = this;
        this._updateEmptyItemTemplate(this.dashboardControl._dashboardSurface());
        this.dashboardControl._dashboardSurface.subscribe(function (surface) { return _this._updateEmptyItemTemplate(surface); });
        var contextMenuExtension = this.dashboardControl.findExtension("item-menu");
        if (contextMenuExtension) {
            this._subscriptions.push(contextMenuExtension._itemContextMenu.subscribe(this._contextMenuSubscriber, this));
            this._contextMenuSubscriber(contextMenuExtension._itemContextMenu());
        }
    };
    BindingPanelExtension.prototype.stop = function () {
        this._subscriptions.forEach(function (s) { return s.dispose(); });
        this._subscriptions = [];
    };
    return BindingPanelExtension;
}());
exports.BindingPanelExtension = BindingPanelExtension;
ko.bindingHandlers["parentHeightCalculator"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
    },
    update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        viewModel.parentHeight = $(element).parents(valueAccessor().selector).height();
    }
};
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new BindingPanelExtension(dashboardControl); };
