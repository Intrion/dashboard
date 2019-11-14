/**
* DevExpress Dashboard (open-dashboard.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var array_store_1 = require("devextreme/data/array_store");
var control_options_1 = require("../../common/control-options");
var $ = require("jquery");
var name = "open-dashboard";
var OpenDashboardExtension = (function () {
    function OpenDashboardExtension(dashboardControl) {
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._menuItem = new toolbox_items_1.DashboardMenuItem(this.name, "DashboardWebStringId.DashboardMenuOpen", 108, 79);
        this._menuItem.template = "dx-dashboard-form-open";
        this._menuItem.data = {
            dashboardsListStore: function (loadOptions) {
                var def = $.Deferred();
                _this.dashboardControl.requestDashboardList().done(function (items) {
                    new array_store_1.default(items).load({ filter: loadOptions.searchValue ? [loadOptions.searchExpr, loadOptions.searchOperation, loadOptions.searchValue] : null }).done(function (data) {
                        def.resolve(data);
                    });
                });
                return def;
            },
            openDashboard: function (e) {
                var toolboxExtension = _this.dashboardControl.findExtension("toolbox");
                if (toolboxExtension) {
                    toolboxExtension.menuVisible(false);
                }
                var openDashboardCallback = function () { return _this.loadDashboard(e.itemData.id); };
                var saveExtension = _this.dashboardControl.findExtension("save-dashboard");
                if (saveExtension) {
                    saveExtension.ensureDashboardSaved(openDashboardCallback);
                }
                else {
                    openDashboardCallback();
                }
            }
        };
    }
    OpenDashboardExtension.prototype.start = function () {
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.push(this._menuItem);
        }
    };
    OpenDashboardExtension.prototype.stop = function () {
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.remove(this._menuItem);
        }
    };
    OpenDashboardExtension.prototype.loadDashboard = function (dashboardId) {
        return this.dashboardControl.loadDashboard(dashboardId);
    };
    return OpenDashboardExtension;
}());
exports.OpenDashboardExtension = OpenDashboardExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new OpenDashboardExtension(dashboardControl); };
