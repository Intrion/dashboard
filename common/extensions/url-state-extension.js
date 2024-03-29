﻿/**
* DevExpress Dashboard (url-state-extension.js)
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
var disposable_object_1 = require("../../model/disposable-object");
var _service_client_1 = require("../_service-client");
var control_options_1 = require("../control-options");
var name = "url-state";
var UrlStateExtension = (function (_super) {
    __extends(UrlStateExtension, _super);
    function UrlStateExtension(dashboardControl, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this._dashboardContaierSubscriptions = [];
        _this._defaultOptions = {
            includeDashboardIdToUrl: false,
            includeDashboardStateToUrl: false
        };
        _this.name = name;
        _this._options = __assign({}, _this._defaultOptions, options);
        _this._dashboardControl = dashboardControl;
        return _this;
    }
    UrlStateExtension.prototype.start = function () {
        var _this = this;
        this.toDispose(this._dashboardControl.dashboardContainer.subscribe(function (dashboardContainer) {
            _this._dashboardContaierSubscriptions.forEach(function (disposable) { return disposable.dispose(); });
            _this._dashboardContaierSubscriptions = [];
            _this._processDashboardChanged(dashboardContainer);
        }));
        this.toDispose(this._dashboardControl.isDesignMode.subscribe(function (isDesignMode) {
            _this._updateDashboardState();
        }));
        this._processDashboardChanged(this._dashboardControl.dashboardContainer());
    };
    UrlStateExtension.prototype.stop = function () {
        this.dispose();
    };
    UrlStateExtension.prototype._processDashboardChanged = function (dashboardInfo) {
        var _this = this;
        if (dashboardInfo) {
            if (this._options.includeDashboardIdToUrl) {
                this._updateUrl("dashboardId", dashboardInfo.id);
            }
            this._updateDashboardState();
            if (!!dashboardInfo.dashboard) {
                this._dashboardContaierSubscriptions.push(dashboardInfo.dashboard._state.subscribe(function (_) { return _this._updateDashboardState(); }));
            }
        }
    };
    UrlStateExtension.prototype._updateDashboardState = function () {
        var dashboard = this._dashboardControl.dashboardContainer() && this._dashboardControl.dashboardContainer().dashboard || null;
        var state = dashboard && !this._dashboardControl.isDesignMode() ? dashboard.stateString : null;
        if (this._options.includeDashboardStateToUrl) {
            this._updateUrl("dashboardState", state);
        }
    };
    UrlStateExtension.prototype._updateUrl = function (key, value) {
        var newUrl = this._replaceValue(key, value);
        if (newUrl) {
            if (newUrl.length > _service_client_1.ViewerDataServiceClient.maxQueryStringLength) {
                newUrl = this._replaceValue(key, null);
            }
            this._setUrl(newUrl);
        }
    };
    UrlStateExtension.prototype._replaceValue = function (key, value) {
        var uri = this._getUrl();
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = uri.indexOf('?') !== -1 ? "&" : "?";
        var newParameterValue = value ? key + "=" + encodeURIComponent(value) : "";
        var newUrl;
        if (uri.match(re)) {
            var separator = !!newParameterValue ? '$1' : "";
            newUrl = uri.replace(re, separator + newParameterValue + '$2');
        }
        else if (!!newParameterValue) {
            newUrl = uri + separator + newParameterValue;
        }
        return newUrl;
    };
    UrlStateExtension.prototype._getUrl = function () {
        return location.href;
    };
    UrlStateExtension.prototype._setUrl = function (url) {
        if (!url)
            url = location.pathname;
        history.replaceState({}, "", url);
    };
    return UrlStateExtension;
}(disposable_object_1.DisposableObject));
exports.UrlStateExtension = UrlStateExtension;
control_options_1.defaultExtensions[name] = function (dashboardControl, options) { return new UrlStateExtension(dashboardControl, options); };
