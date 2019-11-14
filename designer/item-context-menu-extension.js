/**
* DevExpress Dashboard (item-context-menu-extension.js)
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
var disposable_object_1 = require("../model/disposable-object");
var _dashboard_item_menu_1 = require("./items/_dashboard-item-menu");
var _interfaces_1 = require("../common/internal/_interfaces");
var control_options_1 = require("../common/control-options");
var ko = require("knockout");
var name = "item-menu";
var DashboardItemMenuExtension = (function (_super) {
    __extends(DashboardItemMenuExtension, _super);
    function DashboardItemMenuExtension(dashboardControl) {
        var _this = _super.call(this) || this;
        _this.dashboardControl = dashboardControl;
        _this.name = name;
        _this._itemContextMenu = ko.observable();
        return _this;
    }
    DashboardItemMenuExtension.prototype.start = function () {
        var _this = this;
        this.dashboardControl._dashboardSurface.subscribe(function (surface) { return _this._undateExtension(surface); });
        this._undateExtension(this.dashboardControl._dashboardSurface());
    };
    DashboardItemMenuExtension.prototype.stop = function () {
    };
    DashboardItemMenuExtension.prototype.processKeyEvent = function (keyEventType, eventArgs) {
        if (keyEventType === 'keydown' && eventArgs.keyCode === _interfaces_1.KeyCodes.Esc) {
            var menu = this._itemContextMenu();
            if (menu && menu instanceof _dashboard_item_menu_1.ItemMenuViewModel) {
                if (menu.isSecondaryPanelVisible()) {
                    menu.hideBindingProperties();
                    return true;
                }
                else if (menu.propertiesController.mainModel()) {
                    menu.hideBindingProperties();
                    return true;
                }
                else if (menu.menuItemDetailVisible()) {
                    menu.hideBindingPanel();
                    return true;
                }
            }
        }
        return false;
    };
    DashboardItemMenuExtension.prototype.menuItemClick = function (menuItemId) {
        var menu = this._itemContextMenu();
        if (menu && menu instanceof _dashboard_item_menu_1.ItemMenuViewModel) {
            var contextMenuItem = menu.contextMenuItems().filter(function (item) { return item.menuItemId === menuItemId; })[0];
            if (contextMenuItem) {
                menu.menuItemClick(contextMenuItem);
            }
        }
    };
    DashboardItemMenuExtension.prototype._undateExtension = function (dashboardSurface) {
        var that = this;
        if (dashboardSurface != null) {
            dashboardSurface.contextMenu = function (layoutItem) {
                return {
                    data: {
                        dashboardSurface: dashboardSurface,
                        layoutItem: layoutItem,
                        itemMenuViewModelContainer: that._itemContextMenu
                    },
                    templateName: "dx-dashboard-item-menu-holder"
                };
            };
        }
    };
    return DashboardItemMenuExtension;
}(disposable_object_1.DisposableObject));
exports.DashboardItemMenuExtension = DashboardItemMenuExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new DashboardItemMenuExtension(dashboardControl); };
