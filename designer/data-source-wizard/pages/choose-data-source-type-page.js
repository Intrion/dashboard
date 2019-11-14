/**
* DevExpress Dashboard (choose-data-source-type-page.js)
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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var page_id_1 = require("./page-id");
var data_source_wizard_model_1 = require("../models/data-source-wizard-model");
var $ = require("jquery");
var _OlapSvgIconTemplate = {
    'dx-dashboard-svg-wizard-OlapDataSource': '<svg version="1.1" data-bind="svgAttrs" x="0px" y="0px" viewBox="0 0 96 96" style="enable-background:new 0 0 96 96;" xml:space="preserve"><style type="text/css"> .Black{fill:#727272;} .White{fill:#FFFFFF;} .Green{fill:#039C23;} .Blue{fill:#1177D7;} .Red{fill:#D11C1C;} .st0{opacity:0.75;} .st1{opacity:0.25;} .st2{opacity:0.5;}</style><g id="Layer_1"><g class="st1">	<ellipse class="Black" cx="44" cy="19.5" rx="26" ry="7.5"/></g><g class="st2"><path class="Black" d="M46,52.7v-0.2L70,40V21.4c0,4.2-11.6,7.6-26,7.6s-26-3.4-26-7.6v45c0,4.2,11.6,7.6,26,7.6c0.7,0,1.3,0,2,0 V52.7z"/></g><g class="st0"><polygon class="Blue" points="48,56 69,67 69,91 48,80"/></g><polygon class="Blue" points="92,56 71,67 71,91 92,80"/><g class="st2"><polygon class="Blue" points="70,42.2 48,53.7 70,65.3 92,53.7"/></g></g><g id="Layer_2"></g></svg>'
};
dx_analytics_core_1.default.Analytics.Widgets.Internal.SvgTemplatesEngine.addTemplates(_OlapSvgIconTemplate);
var DashboardChooseDataSourceTypePage = (function (_super) {
    __extends(DashboardChooseDataSourceTypePage, _super);
    function DashboardChooseDataSourceTypePage(_wizardOptions) {
        var _this = _super.call(this, _wizardOptions) || this;
        _this.connectionStrings = _wizardOptions.connectionStrings;
        return _this;
    }
    DashboardChooseDataSourceTypePage.prototype.commit = function () {
        var deferred = $.Deferred();
        _super.prototype.commit.call(this)
            .done(function (superResult) {
            var dashboardDataSourceType;
            switch (superResult.dataSourceType) {
                case dx_querybuilder_1.default.Analytics.Wizard.DataSourceType.Sql:
                    dashboardDataSourceType = "Sql";
                    break;
                case dx_querybuilder_1.default.Analytics.Wizard.DataSourceType.Json:
                    dashboardDataSourceType = "Json";
                    break;
                case data_source_wizard_model_1.ToDataSourceTypeNumber('Olap'):
                    dashboardDataSourceType = "Olap";
                    break;
            }
            var result = __assign({}, superResult, { dashboardDataSourceType: dashboardDataSourceType });
            deferred.resolve(result);
        })
            .fail(function (_) { return deferred.reject(); });
        return deferred.promise();
    };
    DashboardChooseDataSourceTypePage.prototype._createTypeItems = function () {
        var typeItems = [];
        var wizardSettings = this._dataSourceTypeOptions.wizardSettings;
        if (wizardSettings.enableSqlDataSource) {
            typeItems.push(new dx_querybuilder_1.default.Analytics.Wizard.TypeItem("Database", "DataAccessUIStringId.DSTypeSql", "sqldatasource", "dxrd-svg-wizard-SqlDataSource", data_source_wizard_model_1.ToDataSourceTypeNumber('Sql')));
        }
        if (wizardSettings.enableJsonDataSource) {
            typeItems.push(new dx_querybuilder_1.default.Analytics.Wizard.TypeItem("JSON", "DataAccessUIStringId.DSTypeJson", "jsondatasource", "dxrd-svg-wizard-JsonDataSource", data_source_wizard_model_1.ToDataSourceTypeNumber('Json')));
        }
        if (wizardSettings.enableOlapDataSource) {
            typeItems.push(new dx_querybuilder_1.default.Analytics.Wizard.TypeItem("OLAP Data Source", "DashboardStringId.DefaultOlapDataSourceName", "olapdatasource", "dx-dashboard-svg-wizard-OlapDataSource", data_source_wizard_model_1.ToDataSourceTypeNumber('Olap')));
        }
        return typeItems;
    };
    return DashboardChooseDataSourceTypePage;
}(dx_querybuilder_1.default.Analytics.Wizard.ChooseDataSourceTypePage));
exports.DashboardChooseDataSourceTypePage = DashboardChooseDataSourceTypePage;
function _registerChooseDataSourceTypePage(factory, wizardOptions) {
    var chooseDataSourceTypePageMeta = factory.getMetadata(dx_querybuilder_1.default.Analytics.Wizard.DataSourceWizardPageId.ChooseDataSourceTypePage);
    if (!chooseDataSourceTypePageMeta) {
        dx_querybuilder_1.default.Analytics.Wizard._registerChooseDataSourceTypePage(factory, wizardOptions);
        chooseDataSourceTypePageMeta = factory.getMetadata(dx_querybuilder_1.default.Analytics.Wizard.DataSourceWizardPageId.ChooseDataSourceTypePage);
        factory.unregisterMetadata(dx_querybuilder_1.default.Analytics.Wizard.DataSourceWizardPageId.ChooseDataSourceTypePage);
    }
    factory.registerMetadata(page_id_1.DataSourceWizardPageId.ChooseDataSourceTypePage, {
        setState: function (data, state) {
            state.dataSourceType = data.dataSourceType;
            state.dashboardDataSourceType = data.dashboardDataSourceType;
        },
        getState: function (state) {
            return state;
        },
        resetState: function (state, defaultState) {
            state.dataSourceType = defaultState.dataSourceType;
            state.dashboardDataSourceType = defaultState.dashboardDataSourceType;
        },
        create: function () { return new DashboardChooseDataSourceTypePage(wizardOptions); },
        description: chooseDataSourceTypePageMeta.description,
        template: chooseDataSourceTypePageMeta.template
    });
}
exports._registerChooseDataSourceTypePage = _registerChooseDataSourceTypePage;
