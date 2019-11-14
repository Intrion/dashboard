/**
* DevExpress Dashboard (data-source-wizard-extension.js)
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
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var _data_source_wizard_model_1 = require("./models/_data-source-wizard-model");
var _edit_query_wizard_1 = require("./wizards/_edit-query-wizard");
var _edit_json_data_source_wizard_1 = require("./wizards/_edit-json-data-source-wizard");
var _obsolete_helper_1 = require("../../model/internal/_obsolete-helper");
var dashboard_1 = require("../../model/dashboard");
var _multi_query_data_source_wizard_1 = require("./wizards/_multi-query-data-source-wizard");
var control_options_1 = require("../../common/control-options");
var _default_1 = require("../../data/localization/_default");
var json_data_source_1 = require("../../model/data-sources/json-data-source");
var $ = require("jquery");
var ko = require("knockout");
var model_1 = require("../../model");
var name = "data-source-wizard";
var DataSourceWizardExtension = (function () {
    function DataSourceWizardExtension(dashboardControl, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.dashboardControl = dashboardControl;
        this._subscriptions = [];
        this._loadingPanelVisible = ko.observable(false);
        this.name = name;
        this.template = "dx-dashboard-data-source-wizard";
        this._options = options;
        this._requestWrapper = new _data_source_wizard_model_1.DashboardRequestWrapper(dashboardControl);
        this._dashboardParameters = ko.computed(function () { return dashboardControl.dashboard() && dashboardControl.dashboard().parameters() || []; });
        this._getConnectionStringsCallback = function () {
            return _this.dashboardControl.remoteService.getFromServer(dashboardControl._endpointCollection.dataSourceWizardUrls.GetConnectionStringsAction)
                .fail(function (request) {
                _this.dashboardControl.notificationController.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToConnectionStrings"), request);
            });
        };
        this._singleDataSourceWizard = ko.observable(this._createEditQueryWizard());
        this._dataSourceWizard = ko.observable(this.createDataSourceWizard({ sql: ko.observableArray() }));
        this._editJsonDataSourceWizard = ko.observable(this._createEditJsonDataSourceWizard());
        this.isCustomSqlEnabled = this._options && this._options.enableCustomSql === true || false;
        _obsolete_helper_1.defineObsoleteMethod({
            target: this,
            memberName: "createDataSource",
            oldMemberDisplayName: "DataSourceWizardExtension.createDataSource",
            newMemberDisplayName: "DataSourceWizardExtension.showDataSourceCreatingDialog",
            action: function (dataSources) {
                _this.showDataSourceCreatingDialog().done(function (dataSource) {
                    dataSources.push(dataSource);
                });
            }
        });
        _obsolete_helper_1.defineObsoleteMethod({
            target: this,
            memberName: "editSqlQuery",
            oldMemberDisplayName: "DataSourceWizardExtension.editSqlQuery",
            newMemberDisplayName: "DataSourceWizardExtension.showSqlQueryEditingDialog",
            action: function (dashboardSqlDataSource, queryName) {
                _this.showSqlQueryEditingDialog(dashboardSqlDataSource, queryName);
            }
        });
    }
    DataSourceWizardExtension._convertDataSource = function (dashboardSqlDataSource, requestWrapper) {
        var sqlDataSource = null;
        var serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false });
        if (dashboardSqlDataSource) {
            var dashboardSqlDataSourceJson = serializer.serialize(dashboardSqlDataSource);
            sqlDataSource = new dx_querybuilder_1.default.Analytics.Data.SqlDataSource(dashboardSqlDataSourceJson, serializer, requestWrapper);
        }
        else {
            sqlDataSource = new dx_querybuilder_1.default.Analytics.Data.SqlDataSource({}, serializer, requestWrapper);
        }
        return sqlDataSource;
    };
    DataSourceWizardExtension._renameDataMember = function (dashboard, dataSource, oldDataMember, newDataMember) {
        dashboard.items()
            .filter(function (item) { return item instanceof model_1.DataDashboardItem
            && item.dataSource() == dataSource.componentName()
            && item.dataMember() == oldDataMember; })
            .forEach(function (item) {
            item.dataMember(newDataMember);
        });
        dataSource.calculatedFields()
            .filter(function (calcField) { return calcField.dataMember() === oldDataMember; })
            .forEach(function (calcField) { return calcField.dataMember(newDataMember); });
        dashboard.parameters()
            .map(function (parameter) { return parameter.dynamicListLookUpSettings(); })
            .filter(function (lookUpSettings) { return !!lookUpSettings
            && lookUpSettings.dataSource() === dataSource.componentName()
            && lookUpSettings.dataMember() === oldDataMember; })
            .forEach(function (lookUpSettings) { return lookUpSettings.dataMember(newDataMember); });
        dashboard.colorScheme()
            .filter(function (entry) { return entry.dataMember() == oldDataMember; })
            .forEach(function (entry) { return entry.dataMember(newDataMember); });
        dashboard.items()
            .filter(function (item) { return item instanceof model_1.DataDashboardItem; })
            .map(function (item) { return item.colorScheme(); })
            .forEach(function (colorScheme) { return colorScheme
            .filter(function (entry) { return entry.dataMember() == oldDataMember; })
            .forEach(function (entry) { return entry.dataMember(newDataMember); }); });
    };
    DataSourceWizardExtension.prototype.start = function () {
    };
    DataSourceWizardExtension.prototype.stop = function () {
        this._subscriptions.forEach(function (s) { return s.dispose(); });
        this._subscriptions = [];
    };
    DataSourceWizardExtension.prototype._createEditQueryWizard = function () {
        var wizard = _edit_query_wizard_1.createDashboardQueryWizard(this._requestWrapper, this._dashboardParameters, !this.isCustomSqlEnabled, false, { enableOlapDataSource: false, enableSqlDataSource: false, enableJsonDataSource: false, enableObjectDataSource: false }, { sql: ko.observableArray() });
        if (this._options.onCustomizeDataSourceWizard)
            this._options.onCustomizeDataSourceWizard({
                type: "EditQueryWizard",
                wizard: wizard
            });
        return wizard;
    };
    DataSourceWizardExtension.prototype.createDataSourceWizard = function (connectionStrings) {
        var wizard = _edit_query_wizard_1.createDashboardQueryWizard(this._requestWrapper, this._dashboardParameters, !this.isCustomSqlEnabled, this._options.canCreateNewJsonDataSource, this._options.wizardSettings, connectionStrings);
        if (this._options.onCustomizeDataSourceWizard)
            this._options.onCustomizeDataSourceWizard({
                type: "DataSourceWizard",
                wizard: wizard
            });
        return wizard;
    };
    DataSourceWizardExtension.prototype._createEditJsonDataSourceWizard = function () {
        var wizard = _edit_json_data_source_wizard_1.createEditJsonDataSourceWizard(this._requestWrapper);
        if (this._options.onCustomizeDataSourceWizard)
            this._options.onCustomizeDataSourceWizard({
                type: "EditJsonDataSourceWizard",
                wizard: wizard
            });
        return wizard;
    };
    DataSourceWizardExtension.prototype.createWizardIterator = function (factory, stateManager) {
        return new _edit_query_wizard_1.DashboardQueryWizardIterator(true, factory, stateManager);
    };
    DataSourceWizardExtension.prototype.showDataSourceCreatingDialog = function () {
        var _this = this;
        var deferred = $.Deferred();
        var loadingConnectionsStrings = true;
        this._loadingPanelVisible(true);
        var stopLoading = function () {
            loadingPanelSubscription.dispose();
            loadingConnectionsStrings = false;
        };
        var loadingPanelSubscription = this._loadingPanelVisible.subscribe(function (newValue) {
            if (!newValue && loadingConnectionsStrings) {
                stopLoading();
                deferred.reject();
            }
        });
        var dashboardConnectionStrings = {
            sql: ko.observableArray()
        };
        this._getConnectionStringsCallback()
            .done(function (connectionStrings) {
            stopLoading();
            if (deferred.state() !== 'rejected') {
                dashboardConnectionStrings = {
                    sql: ko.observableArray(connectionStrings.filter(function (c) { return c.connectionType == 'Sql'; })),
                    json: ko.observableArray(connectionStrings.filter(function (c) { return c.connectionType == 'Json'; })),
                    olap: connectionStrings.filter(function (c) { return c.connectionType == 'Olap'; }),
                };
            }
        })
            .always(function () {
            stopLoading();
            if (deferred.state() !== 'rejected') {
                _this._dataSourceWizard(_this.createDataSourceWizard(dashboardConnectionStrings));
                _this._initializeDataSourceWizard(_this._dataSourceWizard(), deferred);
                _this._dataSourceWizard().start();
                _this._loadingPanelVisible(false);
            }
        });
        return deferred.promise();
    };
    DataSourceWizardExtension.prototype._initializeDataSourceWizard = function (wizard, deferred) {
        var _this = this;
        var initialState = {
            sqlDataSourceWizard: {},
            jsonDataSourceWizard: {},
            olapDataSourceWizard: {}
        };
        wizard.initialize(initialState, function (factory, stateManager) { return _this.createWizardIterator(factory, stateManager); });
        wizard["_finishCallback"] = function (state) {
            var sqlModel = state.sqlDataSourceWizard;
            var olapModel = state.olapDataSourceWizard;
            var jsonModel = state.jsonDataSourceWizard;
            if (sqlModel && state.dashboardDataSourceType === 'Sql') {
                var sqlDataSource_1 = dashboard_1.Dashboard._createDataSource({ "@ItemType": "SqlDataSource" }, new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer());
                var dataSourceWrapper = dx_querybuilder_1.default.Analytics.Wizard._restoreSqlDataSourceFromState(sqlModel);
                sqlDataSource_1.connection.name(dataSourceWrapper.sqlDataSource.connection.name());
                sqlDataSource_1.connection.fromAppConfig(true);
                dataSourceWrapper.sqlDataSource.queries().forEach(function (query) {
                    sqlDataSource_1.queries.push(query);
                    sqlDataSource_1.name(sqlDataSource_1.queries()[0].name());
                });
                deferred.resolve(sqlDataSource_1);
                return $.Deferred().resolve().promise();
            }
            else if (olapModel && state.dashboardDataSourceType === 'Olap') {
                var olapDataSource = dashboard_1.Dashboard._createDataSource({ "@ItemType": "OLAPDataSource" }, new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer());
                olapDataSource.connectionName(olapModel.connectionName);
                olapDataSource.name(_default_1.getLocalizationById('DashboardStringId.DefaultOlapDataSourceName'));
                deferred.resolve(olapDataSource);
                return $.Deferred().resolve().promise();
            }
            else if (jsonModel && state.dashboardDataSourceType === 'Json') {
                var jsonDeferred = $.Deferred();
                var reportsDataSourceDeferred = $.Deferred();
                var reportsDataSource = dx_querybuilder_1.default.Analytics.Wizard._restoreJsonDataSourceFromState(jsonModel);
                if (jsonModel.newConnectionName) {
                    var jsonSource = reportsDataSource.source;
                    var jsonSourceJSON = JSON.stringify(jsonSource.serialize(true));
                    var requestString = JSON.stringify({
                        connectionName: jsonModel.newConnectionName,
                        customJson: jsonSource.json(),
                        uriJsonSourceJSON: jsonSourceJSON
                    });
                    _this._requestWrapper
                        .sendRequest("saveJsonSource", encodeURIComponent(requestString))
                        .done(function () {
                        reportsDataSource.connectionName(jsonModel.newConnectionName);
                        reportsDataSource.source = null;
                        reportsDataSourceDeferred.resolve(reportsDataSource);
                    })
                        .fail(function () { return reportsDataSourceDeferred.reject(); });
                }
                else {
                    reportsDataSourceDeferred.resolve(reportsDataSource);
                }
                reportsDataSourceDeferred
                    .done(function (repDataSource) {
                    var serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer();
                    var reportsJsonDataSourceJson = serializer.serialize(repDataSource);
                    var dataSource = new json_data_source_1.JsonDataSource(reportsJsonDataSourceJson);
                    dataSource.name(_default_1.getLocalizationById('DashboardStringId.DefaultJsonDataSourceName'));
                    deferred.resolve(dataSource);
                    jsonDeferred.resolve();
                })
                    .fail(function () {
                    deferred.reject();
                    jsonDeferred.reject();
                });
                return jsonDeferred.promise();
            }
            else {
                deferred.reject();
                throw Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.UnsupportedDataSourceType"));
            }
        };
    };
    DataSourceWizardExtension.prototype.showSqlQueryEditingDialog = function (dashboardSqlDataSource, queryName) {
        var _this = this;
        var dataSource = DataSourceWizardExtension._convertDataSource(dashboardSqlDataSource, this._requestWrapper);
        this._singleDataSourceWizard(this._createEditQueryWizard());
        this._singleDataSourceWizard().initialize({
            sqlDataSourceWizard: {
                sqlDataSourceJSON: JSON.stringify(new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer().serialize(dataSource)),
                queryName: queryName
            }
        }, function (factory, stateManager) { return new _edit_query_wizard_1.DashboardQueryWizardIterator(false, factory, stateManager); });
        this._singleDataSourceWizard()["_finishCallback"] = function (state) {
            var model = dx_querybuilder_1.default.Analytics.Wizard._restoreSqlDataSourceFromState(state.sqlDataSourceWizard);
            var queryIndex = model["_queryIndex"];
            var query = model.sqlQuery;
            if (queryIndex === dashboardSqlDataSource.queries().length) {
                dashboardSqlDataSource.queries.push(query);
            }
            else {
                var oldQuery = dashboardSqlDataSource.queries()[queryIndex];
                dashboardSqlDataSource.queries.splice(queryIndex, 1, query);
                if (oldQuery.name() !== query.name()) {
                    DataSourceWizardExtension._renameDataMember(_this.dashboardControl.dashboard(), dashboardSqlDataSource, oldQuery.name(), query.name());
                }
            }
            var def = $.Deferred();
            def.resolve();
            return def.promise();
        };
        this._singleDataSourceWizard().start();
    };
    DataSourceWizardExtension.prototype._showEditJsonDataSourceDialog = function (jsonDataSource) {
        var serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer();
        var dashboardJsonDataSourceJson = serializer.serialize(jsonDataSource);
        this._editJsonDataSourceWizard(this._createEditJsonDataSourceWizard());
        this._editJsonDataSourceWizard().initialize({
            jsonDataSourceWizard: {
                jsonScheme: JSON.stringify(dashboardJsonDataSourceJson.Schema),
                rootElement: jsonDataSource.rootElement()
            }
        }, function (factory, stateManager) { return new _edit_json_data_source_wizard_1.EditJsonDataSourceWizardIterator(factory, stateManager); });
        this._editJsonDataSourceWizard()["_finishCallback"] = function (state) {
            var jsonModel = state.jsonDataSourceWizard;
            if (jsonModel) {
                var modifiedReportsDataSource = dx_querybuilder_1.default.Analytics.Wizard._restoreJsonDataSourceFromState(jsonModel);
                jsonDataSource.schema(modifiedReportsDataSource.schema);
                jsonDataSource.rootElement(modifiedReportsDataSource.rootElement());
            }
            return $.Deferred().resolve().promise();
        };
        this._editJsonDataSourceWizard().start();
    };
    return DataSourceWizardExtension;
}());
exports.DataSourceWizardExtension = DataSourceWizardExtension;
var MultiQueryDataSourceWizardExtension = (function (_super) {
    __extends(MultiQueryDataSourceWizardExtension, _super);
    function MultiQueryDataSourceWizardExtension(dashboardControl, options) {
        return _super.call(this, dashboardControl, options) || this;
    }
    MultiQueryDataSourceWizardExtension.prototype.createWizardIterator = function (factory, stateManager) {
        return new _multi_query_data_source_wizard_1.DashboardMultiQueryWizardIterator(factory, stateManager);
    };
    MultiQueryDataSourceWizardExtension.prototype.createDataSourceWizard = function (connectionStrings) {
        var wizard = _multi_query_data_source_wizard_1.createDashboardMultiQueryWizard(this._requestWrapper, this._dashboardParameters, !this.isCustomSqlEnabled, this._options.canCreateNewJsonDataSource, this._options.wizardSettings, connectionStrings);
        if (this._options.onCustomizeDataSourceWizard)
            this._options.onCustomizeDataSourceWizard({
                type: "MultiQueryDataSourceWizard",
                wizard: wizard
            });
        return wizard;
    };
    return MultiQueryDataSourceWizardExtension;
}(DataSourceWizardExtension));
exports.MultiQueryDataSourceWizardExtension = MultiQueryDataSourceWizardExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new DataSourceWizardExtension(dashboardControl, options); };
