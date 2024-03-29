﻿/**
* DevExpress Dashboard (save-dashboard-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var _confirm_dialog_1 = require("../_confirm-dialog");
var _interfaces_1 = require("../../common/internal/_interfaces");
var control_options_1 = require("../../common/control-options");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../../data/localization/_default");
var name = "save-dashboard";
var SaveDashboardExtension = (function () {
    function SaveDashboardExtension(dashboardControl) {
        var _this = this;
        this.dashboardControl = dashboardControl;
        this.name = "save-dashboard";
        this._confirmDialogViewModel = new _confirm_dialog_1.ConfirmDialogViewModel();
        this.canSaveDashboard = ko.computed(function () { return !!_this.dashboardControl.dashboard(); });
        this._isDashboardDirty = ko.computed(function () { return _this._undoEngineExtension && _this._undoEngineExtension.isChanged(); });
        this._customTemplate = {
            name: "dx-dashboard-confirm-dialog",
            data: this._confirmDialogViewModel
        };
        this.designerToViewerAction = {
            orderNo: 20,
            action: function (options) {
                var def = $.Deferred();
                _this.ensureDashboardSaved(function () {
                    if (_this._isDashboardDirty()) {
                        var container = _this.dashboardControl.dashboardContainer();
                        _this.dashboardControl.loadDashboard(container.id).done(function () {
                            def.resolve(options);
                        });
                    }
                    def.resolve(options);
                });
                return def.promise();
            }
        };
        this._menuItem = new toolbox_items_1.DashboardMenuItem("save", "DashboardWebStringId.DashboardMenuSave", 110, _interfaces_1.KeyCodes.S, function () { _this._toolboxExtension.closeMenu(); _this.saveDashboard(); });
        this._menuItem.hasSeparator = true;
        this._menuItem.disabled = ko.computed(function () { return !_this.canSaveDashboard() || !_this._isDashboardDirty(); });
    }
    SaveDashboardExtension.prototype.start = function () {
        this.dashboardControl.customTemplates.push(this._customTemplate);
        this._toolboxExtension.menuItems.push(this._menuItem);
    };
    SaveDashboardExtension.prototype.stop = function () {
        this._toolboxExtension.menuItems.remove(this._menuItem);
        this.dashboardControl.customTemplates.remove(this._customTemplate);
    };
    Object.defineProperty(SaveDashboardExtension.prototype, "_toolboxExtension", {
        get: function () {
            var extension = this.dashboardControl.findExtension("toolbox");
            if (!extension) {
                throw Error("Open Dashboard Extension requeries Toolbox Extension");
            }
            return extension;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SaveDashboardExtension.prototype, "_undoEngineExtension", {
        get: function () {
            return this.dashboardControl.findExtension("undo-redo");
        },
        enumerable: true,
        configurable: true
    });
    SaveDashboardExtension.prototype.performSaveDashboard = function (dashboardId, dashboardJson) {
        var _this = this;
        this.dashboardControl.notificationController.showState(_default_1.getLocalizationById("DashboardWebStringId.Notification.DashboardSaving"));
        return this.dashboardControl.remoteService.postToServer(this.dashboardControl._endpointCollection.dashboardUrls.DashboardAction + "/" + dashboardId, dashboardJson)
            .done(function (result) {
            _this.dashboardControl.notificationController.showSuccess(_default_1.getLocalizationById("DashboardWebStringId.Notification.DashboardSaved"));
        }).fail(function (jqXHR) {
            _this.dashboardControl.notificationController.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.DashboardCanNotBeSaved"), jqXHR);
        });
    };
    SaveDashboardExtension.prototype.ensureDashboardSaved = function (action) {
        var _this = this;
        if (this._isDashboardDirty()) {
            this._confirmDialogViewModel
                .confirm(_default_1.getLocalizationById("DashboardWebStringId.Dialog.ConfirmSaving"), _default_1.getLocalizationById("DashboardWebStringId.SaveConfirmationDialogMessage") + "<br/>" + _default_1.getLocalizationById("DashboardWebStringId.SaveChangesDialogMessage"), _default_1.getLocalizationById("DashboardWebStringId.Dialog.Save"), _default_1.getLocalizationById("DashboardWebStringId.Dialog.DoNotSave"))
                .done(function (result) {
                if (result) {
                    _this.saveDashboard().done(function (_) { action(); });
                }
                else {
                    action();
                }
            });
        }
        else {
            action();
        }
    };
    SaveDashboardExtension.prototype.saveDashboard = function () {
        var _this = this;
        if (this.canSaveDashboard()) {
            var dashboardContainer = this.dashboardControl.dashboardContainer();
            return this.performSaveDashboard(dashboardContainer.id, dashboardContainer.dashboard.getJSON())
                .done(function () { return _this._undoEngineExtension && _this._undoEngineExtension.isChanged(false); });
        }
        else {
            throw Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.DashboardSavingIsNotAvailable"));
        }
    };
    return SaveDashboardExtension;
}());
exports.SaveDashboardExtension = SaveDashboardExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new SaveDashboardExtension(dashboardControl); };
