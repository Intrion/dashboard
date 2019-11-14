/**
* DevExpress Dashboard (mobile-layout-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devices_1 = require("devextreme/core/devices");
var dialog_1 = require("devextreme/ui/dialog");
var _mobile_layout_1 = require("./_mobile-layout");
var control_options_1 = require("../control-options");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var name = "mobile-layout";
var MobileLayoutExtension = (function () {
    function MobileLayoutExtension(dashboardControl, options) {
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.name = name;
        this._disposables = [];
        this._options = {};
        this._mobileLayoutTemplateName = 'dx-dashboard-mobile-layout';
        this._canMobileLayoutBeEnabled = ko.computed(function () { return !_this.dashboardControl.isDesignMode(); });
        this._dashboardList = [];
        this._originalHandlers = null;
        if (options) {
            this._options = options;
        }
        this.mobileLayoutEnabled = ko.computed(function () {
            if (_this._canMobileLayoutBeEnabled()) {
                return _this._expectedMobileLayoutMode();
            }
            else {
                return false;
            }
        });
    }
    MobileLayoutExtension.prototype._expectedMobileLayoutMode = function () {
        if (this._options.mobileLayoutEnabled === "Always") {
            return true;
        }
        else if (this._options.mobileLayoutEnabled === "Never") {
            return false;
        }
        else {
            return devices_1.default.current().phone;
        }
    };
    MobileLayoutExtension.prototype.start = function () {
        var _this = this;
        if (this._expectedMobileLayoutMode() && !this._canMobileLayoutBeEnabled()) {
            dialog_1.confirm(_default_1.getLocalizationById('DashboardWebStringId.MobileLayout.SwitchToViewer'), "").done(function (res) {
                if (res) {
                    _this.dashboardControl.switchToViewer();
                }
            });
        }
        var mobileLayoutModel = ko.computed(function () {
            if (_this.dashboardControl.dashboard()
                && _this.dashboardControl._layoutTemplate().name === _this._mobileLayoutTemplateName)
                return new _mobile_layout_1.DashboardMobileLayout(_this.dashboardControl.dashboard(), _this.dashboardControl._dashboardContext, function (name) { return _this.dashboardControl.findExtension(name); }, _this.dashboardControl.encodeHtml);
            return null;
        });
        this._disposables.push(mobileLayoutModel);
        this.dashboardControl._layoutBindersCollection.splice(0, 0, {
            condition: function () { return _this.mobileLayoutEnabled(); },
            name: this._mobileLayoutTemplateName,
            getData: function () { return mobileLayoutModel; }
        });
    };
    MobileLayoutExtension.prototype.stop = function () {
        this._disposables.forEach(function (d) { return d.dispose(); });
        var api = this.dashboardControl.findExtension("viewer-api");
        if (api && this._originalHandlers) {
            api._options.onItemWidgetCreated = this._originalHandlers.onItemWidgetCreated;
            api._options.onItemWidgetUpdated = this._originalHandlers.onItemWidgetUpdated;
            this._originalHandlers = null;
        }
    };
    return MobileLayoutExtension;
}());
exports.MobileLayoutExtension = MobileLayoutExtension;
control_options_1.defaultExtensions[name] = function (dashboardControl, options) { return new MobileLayoutExtension(dashboardControl, options); };
