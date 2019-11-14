/**
* DevExpress Dashboard (data-source-browser-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var _obsolete_helper_1 = require("../../model/internal/_obsolete-helper");
var _data_source_browser_viewmodel_1 = require("./_data-source-browser-viewmodel");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var name = "data-source-browser";
var DataSourceBrowserExtension = (function () {
    function DataSourceBrowserExtension(dashboardControl) {
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._perDashboardSubscription = [];
        this._dataSourceBrowserViewModel = ko.observable();
        this._menuItem = new toolbox_items_1.DashboardMenuItem(this.name, "DashboardWebStringId.DashboardMenuDataSources", 210, 65);
        this._menuItem.template = "dx-dashboard-form-datasource-browser";
        this._menuItem.data = this._dataSourceBrowserViewModel;
        this._menuItem.disabled = ko.computed(function () { return !_this.dashboardControl.dashboard(); });
        _obsolete_helper_1.defineObsoleteProperty({
            target: this,
            memberName: "dataSourceBrowserViewModel",
            oldMemberDisplayName: "dataSourceBrowserViewModel",
            action: function () { return _this._dataSourceBrowserViewModel; }
        });
    }
    DataSourceBrowserExtension.prototype._disposePerDashboardSubcriptions = function () {
        this._perDashboardSubscription.forEach(function (s) { return s.dispose(); });
        this._perDashboardSubscription = [];
    };
    DataSourceBrowserExtension.prototype._updateExtensionModel = function (dashboard) {
        var _this = this;
        this._disposePerDashboardSubcriptions();
        if (!!dashboard) {
            var dataSourceWizardExtension = ko.computed(function () { return (_this.dashboardControl.findExtension("data-source-wizard")); });
            var accessibleDataSourcesExtension = ko.computed(function () { return (_this.dashboardControl.findExtension("available-data-sources")); });
            var viewModel = new _data_source_browser_viewmodel_1.DataSourceBrowserViewModel(this.dashboardControl._dataSourceBrowser, dataSourceWizardExtension, accessibleDataSourcesExtension, this.dashboardControl._updateHub);
            this._perDashboardSubscription.push(dataSourceWizardExtension);
            this._perDashboardSubscription.push(accessibleDataSourcesExtension);
            this._perDashboardSubscription.push(viewModel);
            this._dataSourceBrowserViewModel(viewModel);
        }
        else {
            this._dataSourceBrowserViewModel(null);
        }
    };
    DataSourceBrowserExtension.prototype.start = function () {
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.push(this._menuItem);
        }
        this._subscription = this.dashboardControl.dashboard.subscribe(this._updateExtensionModel, this);
        this._updateExtensionModel(this.dashboardControl.dashboard());
    };
    DataSourceBrowserExtension.prototype.stop = function () {
        this._disposePerDashboardSubcriptions();
        if (this._subscription) {
            this._subscription.dispose();
            this._subscription = undefined;
        }
        var toolboxExtension = this.dashboardControl.findExtension("toolbox");
        if (toolboxExtension) {
            toolboxExtension.menuItems.remove(this._menuItem);
        }
    };
    return DataSourceBrowserExtension;
}());
exports.DataSourceBrowserExtension = DataSourceBrowserExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new DataSourceBrowserExtension(dashboardControl); };
