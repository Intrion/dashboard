/**
* DevExpress Dashboard (create-dashboard.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var dashboard_1 = require("../../model/dashboard");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var name = "create-dashboard";
var CreateDashboardExtension = (function () {
    function CreateDashboardExtension(dashboardControl) {
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.name = name;
        this.showCreateNewDashboard = function () {
            var extension = _this.dashboardControl.findExtension("toolbox");
            if (extension) {
                extension.selectMenuItem(_this._newDashboardMenuItem);
            }
        };
        this._createNewDashboard = function (dataSources, dashboardName) {
            var toolboxExtension = _this.dashboardControl.findExtension("toolbox");
            if (toolboxExtension) {
                toolboxExtension.menuVisible(false);
            }
            var createDashboardCallback = function () {
                var dashboardPropotype = new dashboard_1.Dashboard({});
                dashboardPropotype.title.text(dashboardName);
                dataSources.forEach(function (dataSource) {
                    var newDataSource = dashboard_1.Dashboard._createDataSource(new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false }).serialize(dataSource), new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer());
                    dashboardPropotype.dataSources.push(newDataSource);
                });
                _this.performCreateDashboard(dashboardName, dashboardPropotype.getJSON());
            };
            var saveExtension = _this.dashboardControl.findExtension("save-dashboard");
            if (saveExtension) {
                saveExtension.ensureDashboardSaved(createDashboardCallback);
            }
            else {
                createDashboardCallback();
            }
        };
        var accessibleDataSourcesExtension = ko.computed(function () { return _this.dashboardControl.findExtension("available-data-sources"); });
        this._viewModel = new CreateNewDashboardViewModel(accessibleDataSourcesExtension, this._createNewDashboard);
        this._newDashboardMenuItem = new toolbox_items_1.DashboardMenuItem(this.name, "DashboardWebStringId.DashboardMenuNew", 105, 78);
        this._newDashboardMenuItem.template = "dx-dashboard-form-new";
        this._newDashboardMenuItem.data = this._viewModel;
    }
    CreateDashboardExtension.prototype.start = function () {
        var extension = this.dashboardControl.findExtension("toolbox");
        if (extension) {
            extension.menuItems.push(this._newDashboardMenuItem);
        }
        this.dashboardControl._emptyControlTemplates.push({
            name: "dx-dashboard-add-new-dashboard",
            data: {
                isDesignMode: this.dashboardControl.isDesignMode,
                showCreateNewDashboard: this.showCreateNewDashboard
            }
        });
    };
    CreateDashboardExtension.prototype.stop = function () {
        var extension = this.dashboardControl.findExtension("toolbox");
        if (extension) {
            extension.menuItems.remove(this._newDashboardMenuItem);
        }
        var template = this.dashboardControl._emptyControlTemplates().filter(function (temlp) { return temlp.name === "dx-dashboard-add-new-dashboard"; })[0];
        if (template) {
            this.dashboardControl._emptyControlTemplates.remove(template);
        }
    };
    CreateDashboardExtension.prototype.performCreateDashboard = function (dashboardName, dashboardJson) {
        var _this = this;
        this.dashboardControl.notificationController.showState(_default_1.getLocalizationById("DashboardWebStringId.Notification.DashboardLoading"));
        return this.dashboardControl.remoteService.postToServer(this.dashboardControl._endpointCollection.dashboardUrls.GetDashboardsAction, { name: dashboardName, dashboard: dashboardJson })
            .then(function (result, status, query) {
            _this.dashboardControl.initializeDashboard(result['dashboardId'], result["dashboard"].Dashboard);
        }, function (request) {
            _this.dashboardControl.notificationController.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.NewDashboardCannotBeCreated"), request);
        });
    };
    return CreateDashboardExtension;
}());
exports.CreateDashboardExtension = CreateDashboardExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new CreateDashboardExtension(dashboardControl); };
var CreateNewDashboardViewModel = (function () {
    function CreateNewDashboardViewModel(accessibleDataSourcesExtension, _newDashboardCallback) {
        var _this = this;
        this.accessibleDataSourcesExtension = accessibleDataSourcesExtension;
        this._newDashboardCallback = _newDashboardCallback;
        this.dashboardName = ko.observable();
        this.selectionMode = 'single';
        this.createNewDashboard = function () {
            _this._newDashboardCallback(_this.accessibleDataSourcesExtension().selectedDataSources(), _this.dashboardName());
        };
        this.dashboardName(_default_1.getLocalizationById("DashboardWebStringId.NewDashboard"));
        this.createNewDashboardDisabled = ko.computed(function () {
            return !_this.dashboardName() || !_this.accessibleDataSourcesExtension() || _this.accessibleDataSourcesExtension().selectedDataSources().length === 0;
        });
    }
    return CreateNewDashboardViewModel;
}());
