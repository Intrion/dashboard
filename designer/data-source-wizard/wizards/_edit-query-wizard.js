/**
* DevExpress Dashboard (_edit-query-wizard.js)
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
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var _data_source_wizard_model_1 = require("../models/_data-source-wizard-model");
var _create_query_page_1 = require("../pages/_create-query-page");
var _configure_parameters_page_1 = require("../pages/_configure-parameters-page");
var _default_1 = require("../../../data/localization/_default");
var choose_data_source_type_page_1 = require("../pages/choose-data-source-type-page");
var _choose_json_schema_page_1 = require("../pages/_choose-json-schema-page");
var choose_olap_connection_string_page_1 = require("../pages/choose-olap-connection-string-page");
var page_id_1 = require("../pages/page-id");
var $ = require("jquery");
var _utils_1 = require("../../../data/_utils");
var DashboardQueryWizardIterator = (function (_super) {
    __extends(DashboardQueryWizardIterator, _super);
    function DashboardQueryWizardIterator(_createNew, factory, stateManager) {
        var _this = _super.call(this, factory, stateManager) || this;
        _this._createNew = _createNew;
        return _this;
    }
    DashboardQueryWizardIterator.prototype.getNextPageId = function (pageId) {
        if (!pageId) {
            if (this._createNew)
                return page_id_1.DataSourceWizardPageId.ChooseDataSourceTypePage;
            return dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ConfigureQueryPage;
        }
        else {
            var currentState = this._getCurrentState();
            switch (pageId) {
                case page_id_1.DataSourceWizardPageId.ChooseDataSourceTypePage:
                    switch (currentState.dashboardDataSourceType) {
                        case 'Sql':
                            return dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ChooseConnectionPage;
                        case 'Olap':
                            return page_id_1.OlapDataSourceWizardPageId.ChooseConnectionPage;
                        case 'Json':
                            return dx_querybuilder_1.default.Analytics.Wizard.JsonDataSourceWizardPageId.ChooseConnectionPage;
                        default:
                            throw new Error("Unknown datasource type.");
                    }
                case dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ChooseConnectionPage:
                    return dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ConfigureQueryPage;
                case dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ConfigureQueryPage:
                    return dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ConfigureParametersPage;
                case dx_querybuilder_1.default.Analytics.Wizard.JsonDataSourceWizardPageId.ChooseConnectionPage:
                    if (currentState.jsonDataSourceWizard.connectionName)
                        return dx_querybuilder_1.default.Analytics.Wizard.JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
                    else
                        return dx_querybuilder_1.default.Analytics.Wizard.JsonDataSourceWizardPageId.ChooseJsonSourcePage;
                case dx_querybuilder_1.default.Analytics.Wizard.JsonDataSourceWizardPageId.ChooseJsonSourcePage:
                    return dx_querybuilder_1.default.Analytics.Wizard.JsonDataSourceWizardPageId.ChooseJsonSchemaPage;
            }
        }
    };
    return DashboardQueryWizardIterator;
}(dx_querybuilder_1.default.Analytics.Wizard.PageIterator));
exports.DashboardQueryWizardIterator = DashboardQueryWizardIterator;
var DashboardQueryWizard = (function (_super) {
    __extends(DashboardQueryWizard, _super);
    function DashboardQueryWizard() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = _default_1.getLocalizationById("DashboardWebStringId.DataSources.DashboardDataSourceWizard");
        _this._container = function (element) { return $(element).closest(".dx-dashboard-widget-container"); };
        _this._extendCssClass = "dxrd-sqldatasource-wizard";
        return _this;
    }
    return DashboardQueryWizard;
}(dx_querybuilder_1.default.Analytics.Wizard.PopupWizard));
exports.DashboardQueryWizard = DashboardQueryWizard;
function createDashboardQueryWizard(requestWrapper, parameters, disableCustomSql, canCreateNewJsonDataSource, wizardSettings, dashboardConnectionStrings) {
    var factory = new dx_querybuilder_1.default.Analytics.Wizard.PageFactory();
    var wizardOptions = new _data_source_wizard_model_1.DashboardDataSourceWizardOptions();
    wizardOptions.callbacks = _create_query_page_1.createQueryPageCallback(requestWrapper, parameters);
    wizardOptions.disableCustomSql = disableCustomSql;
    wizardOptions.requestWrapper = requestWrapper;
    wizardOptions.wizardSettings.enableSqlDataSource = wizardSettings && _utils_1.type.isDefined(wizardSettings.enableSqlDataSource) ? wizardSettings.enableSqlDataSource : true;
    wizardOptions.wizardSettings.enableJsonDataSource = wizardSettings && _utils_1.type.isDefined(wizardSettings.enableJsonDataSource) ? wizardSettings.enableJsonDataSource : true;
    wizardOptions.wizardSettings.enableOlapDataSource = wizardSettings && _utils_1.type.isDefined(wizardSettings.enableOlapDataSource) ? wizardSettings.enableOlapDataSource : true;
    wizardOptions.wizardSettings.enableObjectDataSource = false;
    wizardOptions.canCreateNewJsonDataSource = canCreateNewJsonDataSource || false;
    wizardOptions.connectionStrings = dashboardConnectionStrings;
    choose_data_source_type_page_1._registerChooseDataSourceTypePage(factory, wizardOptions);
    dx_querybuilder_1.default.Analytics.Wizard._registerChooseSqlConnectionPage(factory, dashboardConnectionStrings.sql);
    choose_olap_connection_string_page_1._registerOlapConnectionStringsPage(factory, dashboardConnectionStrings.olap);
    dx_querybuilder_1.default.Analytics.Wizard._registerChooseJsonConnectionPage(factory, wizardOptions);
    dx_querybuilder_1.default.Analytics.Wizard._registerConfigureQueryPage(factory, wizardOptions);
    dx_querybuilder_1.default.Analytics.Wizard._registerConfigureParametersPage(factory, requestWrapper, _configure_parameters_page_1.createParametersViewModelConverter(parameters));
    dx_querybuilder_1.default.Analytics.Wizard._registerChooseJsonSourcePage(factory, requestWrapper);
    _choose_json_schema_page_1._registerChooseJsonSchemaPage(factory, requestWrapper);
    return new DashboardQueryWizard(factory);
}
exports.createDashboardQueryWizard = createDashboardQueryWizard;
