/**
* DevExpress Dashboard (parameters-editor-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _parameter_settings_viewmodel_1 = require("./_parameter-settings-viewmodel");
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var name = "dashboard-parameter-editor";
var DashboardParameterEditorExtension = (function () {
    function DashboardParameterEditorExtension(dashboardControl) {
        this.dashboardControl = dashboardControl;
        this.name = name;
        this.dashboard = ko.computed(function () { return dashboardControl.dashboard(); });
        this._viewModel = new _parameter_settings_viewmodel_1.ParameterEditorViewModel(this.dashboard, function () { return dashboardControl._dataSourceBrowser; });
        this._menuItem = new toolbox_items_1.DashboardMenuItem(this.name, "DashboardWebStringId.DashboardParameters", 240, 80);
        this._menuItem.template = "dx-dashboard-form-parameters-settings";
        this._menuItem.data = this._viewModel;
        this._menuItem.disabled = ko.computed(function () { return !dashboardControl.dashboard(); });
    }
    DashboardParameterEditorExtension.prototype.start = function () {
        this._viewModel.initialize();
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.push(this._menuItem);
        }
    };
    DashboardParameterEditorExtension.prototype.stop = function () {
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.remove(this._menuItem);
        }
        this._viewModel.dispose();
    };
    return DashboardParameterEditorExtension;
}());
exports.DashboardParameterEditorExtension = DashboardParameterEditorExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new DashboardParameterEditorExtension(dashboardControl); };
