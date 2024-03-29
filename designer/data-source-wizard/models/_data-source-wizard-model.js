﻿/**
* DevExpress Dashboard (_data-source-wizard-model.js)
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
var dx_querybuilder_1 = require("@devexpress/analytics-core/dx-querybuilder");
var _default_1 = require("../../../data/localization/_default");
var $ = require("jquery");
var DashboardRequestWrapper = (function (_super) {
    __extends(DashboardRequestWrapper, _super);
    function DashboardRequestWrapper(dashboardControl) {
        var _this = _super.call(this) || this;
        _this.dashboardControl = dashboardControl;
        return _this;
    }
    DashboardRequestWrapper.prototype._sendRequest = function (settings) {
        return this.sendRequest(settings.action, settings.arg);
    };
    DashboardRequestWrapper.prototype.sendRequest = function (action, arg) {
        var _this = this;
        var def = $.Deferred();
        this.dashboardControl.remoteService.postToServer(this.dashboardControl._endpointCollection.dataSourceWizardUrls.DataSourceWizardAction, {
            actionKey: action,
            arg: arg
        }).done(function (data) {
            if (data.success) {
                def.resolve(data.result);
            }
            else {
                var errorText = data.error;
                _this.dashboardControl.notificationController.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.ErrorHasOccuredOn"), errorText);
                def.reject(errorText);
            }
        }).fail(function (request) {
            _this.dashboardControl.notificationController.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.ErrorHasOccuredOn"), request);
            def.reject();
        });
        return def.promise();
    };
    ;
    return DashboardRequestWrapper;
}(dx_querybuilder_1.default.QueryBuilder.Utils.RequestWrapper));
exports.DashboardRequestWrapper = DashboardRequestWrapper;
var DashboardDataSourceWizardOptions = (function (_super) {
    __extends(DashboardDataSourceWizardOptions, _super);
    function DashboardDataSourceWizardOptions() {
        var _this = _super.call(this) || this;
        _this.connectionStrings = __assign({}, _this.connectionStrings, { olap: [] });
        _this.wizardSettings = __assign({}, _this.wizardSettings, { enableOlapDataSource: false });
        return _this;
    }
    return DashboardDataSourceWizardOptions;
}(dx_querybuilder_1.default.Analytics.Wizard._DataSourceWizardOptions));
exports.DashboardDataSourceWizardOptions = DashboardDataSourceWizardOptions;
var DashboardMultiQueryDataSourceWizardOptions = (function (_super) {
    __extends(DashboardMultiQueryDataSourceWizardOptions, _super);
    function DashboardMultiQueryDataSourceWizardOptions() {
        var _this = _super.call(this) || this;
        _this.connectionStrings = __assign({}, _this.connectionStrings, { olap: [] });
        _this.wizardSettings = __assign({}, _this.wizardSettings, { enableOlapDataSource: false });
        return _this;
    }
    return DashboardMultiQueryDataSourceWizardOptions;
}(dx_querybuilder_1.default.Analytics.Wizard._MultiQueryDataSourceWizardOptions));
exports.DashboardMultiQueryDataSourceWizardOptions = DashboardMultiQueryDataSourceWizardOptions;
