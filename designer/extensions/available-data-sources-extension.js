/**
* DevExpress Dashboard (available-data-sources-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _helper_classes_1 = require("../../model/internal/_helper-classes");
var _obsolete_helper_1 = require("../../model/internal/_obsolete-helper");
var _knockout_utils_1 = require("../../model/internal/_knockout-utils");
var dashboard_1 = require("../../model/dashboard");
var notificator_1 = require("../../common/notification-controller/notificator");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var name = "available-data-sources";
var AvailableDataSourcesExtension = (function () {
    function AvailableDataSourcesExtension(dashboardControl) {
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.name = name;
        this.templateName = "dx-dashboard-datasource-available-datasources";
        this._errorState = ko.observable(null);
        this._uiState = ko.observable('empty');
        this.selectedDataSources = ko.observableArray();
        this.dataSources = ko.observableArray();
        var showCreateDataSourceWizardDelegate = ko.computed(function () {
            var dataSourceWizardExtension = (_this.dashboardControl.findExtension("data-source-wizard"));
            if (dataSourceWizardExtension) {
                return function () {
                    dataSourceWizardExtension.showDataSourceCreatingDialog().done(function (dataSource) {
                        _helper_classes_1.NameGenerator.validateName(dataSource, _this.dataSources(), 'name', 1, true);
                        _this.dataSources.push(dataSource);
                    });
                };
            }
            else {
                return null;
            }
        });
        var isInitialized = false;
        var uiStateComputed = ko.computed(function () {
            if (!isInitialized) {
                _this.loadAvailableDataSources();
                isInitialized = true;
            }
            return _this._uiState();
        }, this, {
            deferEvaluation: true
        });
        this.viewModel = new AvailableDataSourcesViewModel(this.dataSources, this.selectedDataSources, uiStateComputed, this._errorState, showCreateDataSourceWizardDelegate);
        _obsolete_helper_1.defineObsoleteMethod({
            target: this,
            memberName: "loadAvaliableDataSources",
            oldMemberDisplayName: "AvailableDataSourcesExtension.loadAvaliableDataSources",
            newMemberDisplayName: "AvailableDataSourcesExtension.loadAvailableDataSources",
            action: function () { return _this.loadAvailableDataSources(); }
        });
    }
    AvailableDataSourcesExtension.prototype.start = function () {
        var _this = this;
        if (this.dataSources().length > 0) {
            this.selectedDataSources([this.dataSources()[0]]);
        }
        _knockout_utils_1.subscribeArrayChange(this.dataSources, {
            added: function (item) { return _this.selectedDataSources([item]); }
        });
    };
    AvailableDataSourcesExtension.prototype.stop = function () {
        this._errorState(null);
    };
    AvailableDataSourcesExtension.prototype.loadAvailableDataSources = function () {
        var _this = this;
        if (this.dashboardControl._endpointCollection.dataSourceUrls) {
            this._uiState('loading');
            this.dashboardControl.remoteService.getFromServer(this.dashboardControl._endpointCollection.dataSourceUrls.GetDataSourcesAction)
                .then(function (result) {
                var dataSources = dx_analytics_core_1.default.Analytics.Utils.deserializeArray(result, function (item) { return dashboard_1.Dashboard._createDataSource(item, new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer()); })();
                dataSources.forEach(function (dataSource) {
                    if (!dataSource.name()) {
                        dataSource.name(_helper_classes_1.NameGenerator.generateName(_default_1.getLocalizationById("DashboardStringId.DefaultDataSourceName") + " ", dataSources, "name", 1));
                    }
                });
                _this.dataSources(dataSources);
                _this._uiState('live');
            }, function (errorInfo) {
                var errorDetail = notificator_1.NotificationController._getDetailedErrorMessage(errorInfo);
                _this._errorState({
                    title: _default_1.getLocalizationById("DashboardWebStringId.DataSources.AvailableDataSourcesError"),
                    detail: errorDetail
                });
                _this._uiState('error');
            });
        }
    };
    return AvailableDataSourcesExtension;
}());
exports.AvailableDataSourcesExtension = AvailableDataSourcesExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new AvailableDataSourcesExtension(dashboardControl); };
var AvailableDataSourcesViewModel = (function () {
    function AvailableDataSourcesViewModel(dataSources, selectedDataSources, uiState, errorState, _showCreateDataSourceWizardDelegate) {
        var _this = this;
        this.dataSources = dataSources;
        this.selectedDataSources = selectedDataSources;
        this.uiState = uiState;
        this.errorState = errorState;
        this._showCreateDataSourceWizardDelegate = _showCreateDataSourceWizardDelegate;
        this.showCreateDataSourceWizard = function () {
            if (_this.canCreateDataSourceWizard) {
                _this._showCreateDataSourceWizardDelegate()(_this.dataSources);
            }
        };
    }
    Object.defineProperty(AvailableDataSourcesViewModel.prototype, "canCreateDataSourceWizard", {
        get: function () {
            return !!this._showCreateDataSourceWizardDelegate();
        },
        enumerable: true,
        configurable: true
    });
    return AvailableDataSourcesViewModel;
}());
