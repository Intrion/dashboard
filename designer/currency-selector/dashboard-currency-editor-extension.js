/**
* DevExpress Dashboard (dashboard-currency-editor-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var name = "dashboard-currency-editor";
var DashboardCurrencyEditorExtension = (function () {
    function DashboardCurrencyEditorExtension(dashboardControl) {
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._menuItem = new toolbox_items_1.DashboardMenuItem(this.name, "DashboardWebStringId.DashboardMenuCurrency", 230, 67);
        this._menuItem.template = "dx-dashboard-form-currency-settings";
        this._menuItem.data = dashboardControl;
        this._menuItem.disabled = ko.computed(function () { return !_this.dashboardControl.dashboard(); });
    }
    DashboardCurrencyEditorExtension.prototype.start = function () {
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.push(this._menuItem);
        }
    };
    DashboardCurrencyEditorExtension.prototype.stop = function () {
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.remove(this._menuItem);
        }
    };
    return DashboardCurrencyEditorExtension;
}());
exports.DashboardCurrencyEditorExtension = DashboardCurrencyEditorExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new DashboardCurrencyEditorExtension(dashboardControl); };
