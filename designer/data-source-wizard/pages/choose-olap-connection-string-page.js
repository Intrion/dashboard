/**
* DevExpress Dashboard (choose-olap-connection-string-page.js)
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
var page_id_1 = require("./page-id");
var ko = require("knockout");
var $ = require("jquery");
var DashboardChooseOlapConnectionStringPage = (function (_super) {
    __extends(DashboardChooseOlapConnectionStringPage, _super);
    function DashboardChooseOlapConnectionStringPage(connectionStrings) {
        var _this = _super.call(this) || this;
        _this._selectedConnectionString = ko.observableArray([]);
        _this._connectionStrings = connectionStrings;
        _this._disposables.push(_this._selectedConnectionString.subscribe(function () { return _this._onChange(); }));
        return _this;
    }
    DashboardChooseOlapConnectionStringPage.prototype.canNext = function () {
        return false;
    };
    DashboardChooseOlapConnectionStringPage.prototype.canFinish = function () {
        return this._selectedConnectionString().length !== 0;
    };
    DashboardChooseOlapConnectionStringPage.prototype.commit = function () {
        var deferred = $.Deferred();
        if (this._selectedConnectionString()[0]) {
            deferred.resolve({
                connectionName: this._selectedConnectionString()[0].name
            });
        }
        else {
            deferred.resolve();
        }
        return deferred.promise();
    };
    DashboardChooseOlapConnectionStringPage.prototype.initialize = function (state) {
        if (this._connectionStrings && this._connectionStrings.length === 1) {
            this._selectedConnectionString([this._connectionStrings[0]]);
        }
        else if (this._connectionStrings && this._connectionStrings.length > 0) {
            var selectedString = this._connectionStrings.find(function (c) { return c.name == state.connectionName; }) || this._connectionStrings[0];
            this._selectedConnectionString(selectedString ? [selectedString] : []);
        }
        else {
            this._selectedConnectionString([]);
        }
        return $.Deferred().resolve().promise();
    };
    return DashboardChooseOlapConnectionStringPage;
}(dx_querybuilder_1.default.Analytics.Wizard.WizardPageBase));
exports.DashboardChooseOlapConnectionStringPage = DashboardChooseOlapConnectionStringPage;
function _registerOlapConnectionStringsPage(factory, connectionStrings) {
    var sqlConnectionStringsMeta = factory.getMetadata(dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ChooseConnectionPage);
    if (!sqlConnectionStringsMeta) {
        dx_querybuilder_1.default.Analytics.Wizard._registerChooseSqlConnectionPage(factory, undefined);
        sqlConnectionStringsMeta = factory.getMetadata(dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ChooseConnectionPage);
        factory.unregisterMetadata(dx_querybuilder_1.default.Analytics.Wizard.SqlDataSourceWizardPageId.ChooseConnectionPage);
    }
    factory.registerMetadata(page_id_1.OlapDataSourceWizardPageId.ChooseConnectionPage, {
        create: function () {
            return new DashboardChooseOlapConnectionStringPage(connectionStrings);
        },
        setState: function (result, state) {
            state.connectionName = result.connectionName;
        },
        getState: function (state) {
            return state.olapDataSourceWizard;
        },
        resetState: function (state, defaultState) {
            state.connectionName = defaultState.connectionName;
        },
        template: sqlConnectionStringsMeta.template,
        description: sqlConnectionStringsMeta.description
    });
}
exports._registerOlapConnectionStringsPage = _registerOlapConnectionStringsPage;
