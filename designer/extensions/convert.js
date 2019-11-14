/**
* DevExpress Dashboard (convert.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _dashboard_item_menu_1 = require("../items/_dashboard-item-menu");
var data_dashboard_item_1 = require("../../model/items/data-dashboard-item");
var dashboard_item_1 = require("../../model/items/dashboard-item");
var dashboard_1 = require("../../model/dashboard");
var serializable_model_1 = require("../../model/serializable-model");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var name = "item-conversion-panel";
var ConversionPanelExtension = (function () {
    function ConversionPanelExtension(dashboardControl) {
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._subscriptions = [];
        this.properties = ko.observable();
    }
    ConversionPanelExtension.prototype._contextMenuSubscriber = function (itemContextMenu) {
        if (!!itemContextMenu) {
            var item = this.dashboardControl._dashboardSurface().selectedDashboardItem();
            if (item instanceof data_dashboard_item_1.DataDashboardItem) {
                this._updateContextMenu(itemContextMenu, item, this.dashboardControl.dashboard(), this.dashboardControl._serviceClient());
            }
        }
    };
    ConversionPanelExtension.prototype.start = function () {
        var contextMenuExtension = this.dashboardControl.findExtension("item-menu");
        if (contextMenuExtension) {
            this._subscriptions.push(contextMenuExtension._itemContextMenu.subscribe(this._contextMenuSubscriber, this));
            this._contextMenuSubscriber(contextMenuExtension._itemContextMenu());
        }
    };
    ConversionPanelExtension.prototype.stop = function () {
        this._subscriptions.forEach(function (s) { return s.dispose(); });
        this._subscriptions = [];
    };
    ConversionPanelExtension.prototype._updateContextMenu = function (itemContextMenu, item, dashboard, serviceClient) {
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        this.properties({
            groups: toolboxExtension && toolboxExtension.toolboxGroups().filter(function (group) { return !group.items().every(function (item) { return !!serializable_model_1.itemTypesMap[item.type].customItemType; }); }) || [],
            supportConvert: function (type) {
                return type !== 'Group' && type !== 'Image' && type !== "TabContainer" && !serializable_model_1.itemTypesMap[type].customItemType;
            },
            convertTo: function (newItemType) {
                serviceClient.convertItem(item, dashboard_item_1.DashboardItem._getCommonItemType(newItemType)).done(function (result) {
                    var tmpDashboard = new dashboard_1.Dashboard(result);
                    var newItem = tmpDashboard.items()[0];
                    newItem.dataSource(item.dataSource());
                    newItem.componentName(undefined);
                    dashboard._changeItem(item, newItem);
                });
            },
            duplicate: function () {
                dashboard._duplicateItem(item);
            }
        });
        itemContextMenu.contextMenuItems.push({
            menuItemId: this.name,
            icon: "dx-dashboard-convert",
            title: "DashboardWebStringId.ConvertTo",
            panelWidth: _dashboard_item_menu_1.DashboardItemMenuSizes.OptionsPanelWidth,
            templateName: "dx-dashboard-convert-to",
            detailVisible: ko.observable(false),
            detailData: null,
            customData: this.properties,
            index: 400
        });
    };
    return ConversionPanelExtension;
}());
exports.ConversionPanelExtension = ConversionPanelExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new ConversionPanelExtension(dashboardControl); };
