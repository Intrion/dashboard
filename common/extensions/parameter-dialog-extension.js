/**
* DevExpress Dashboard (parameter-dialog-extension.js)
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
var disposable_object_1 = require("../../model/disposable-object");
var _parameters_dialog_1 = require("../../viewer-parts/widgets/dialogs/_parameters-dialog");
var _parameter_dialog_binder_1 = require("./_parameter-dialog-binder");
var _obsolete_helper_1 = require("../../model/internal/_obsolete-helper");
var control_options_1 = require("../control-options");
var $ = require("jquery");
var ko = require("knockout");
var _utils_1 = require("../../data/_utils");
;
var name = "dashboard-parameter-dialog";
var DashboardParameterDialogExtension = (function (_super) {
    __extends(DashboardParameterDialogExtension, _super);
    function DashboardParameterDialogExtension(dashboardControl, options) {
        var _this = _super.call(this) || this;
        _this._customDialogContent = [];
        _this.name = name;
        _this.showDialogButton = ko.observable(true);
        _this._updateViewModel = function (dashboard) {
            _this._clear();
            if (!!dashboard) {
                _this._viewModel = new _parameter_dialog_binder_1.ParameterDialogViewModel(dashboard.parameters, function (parameterType, settings) { return _this._dashboardControl._dataSourceBrowser.getParameterValues(parameterType, settings); });
                _this._viewModel.parameterCollection.subscribe(function (value) {
                    _this._clearContent();
                    _this._customDialogContent.concat(_this._parameterDialog)
                        .filter(function (dialog) { return dialog && dialog.setActualState; })
                        .forEach(function (dialog) { return dialog.setActualState(); });
                });
            }
        };
        _this._dashboardControl = dashboardControl;
        var opt = options || {};
        _this._onDynamicLookUpValuesLoaded = opt.onDynamicLookUpValuesLoaded || $.noop;
        _this.onShowing = opt.onShowing || $.noop;
        _this.onShown = opt.onShown || $.noop;
        _this.onHidden = opt.onHidden || $.noop;
        return _this;
    }
    ;
    DashboardParameterDialogExtension.prototype.start = function () {
        var _this = this;
        if (this._dashboardControl.dashboard()) {
            this._updateViewModel(this._dashboardControl.dashboard());
            this._subscribeDynamicLookUpValuesLoaded();
        }
        this.toDispose(this._dashboardControl.dashboard.subscribe(function (newDashboard) { return _this._updateViewModel(newDashboard); }));
        this.toDispose(this._dashboardControl.dashboard.subscribe(function () { return _this._subscribeDynamicLookUpValuesLoaded(); }));
        _obsolete_helper_1.defineObsoleteMethod({
            target: this,
            memberName: "showDialog",
            oldMemberDisplayName: "DashboardParameterDialogExtension.showDialog",
            newMemberDisplayName: "DashboardParameterDialogExtension.show",
            action: function () { return _this.show(); }
        });
        _obsolete_helper_1.defineObsoleteMethod({
            target: this,
            memberName: "hideDialog",
            oldMemberDisplayName: "DashboardParameterDialogExtension.hideDialog",
            newMemberDisplayName: "DashboardParameterDialogExtension.hide",
            action: function () { return _this.hide(); }
        });
    };
    DashboardParameterDialogExtension.prototype.stop = function () {
        this._clear();
        this.dispose();
    };
    DashboardParameterDialogExtension.prototype.show = function () {
        if (this._parameterDialog) {
            this._parameterDialog.dispose();
        }
        this._parameterDialog = this._createParameterDialog();
        this._parameterDialog.show();
    };
    DashboardParameterDialogExtension.prototype.hide = function () {
        if (!!this._parameterDialog) {
            this._parameterDialog.hide();
        }
    };
    DashboardParameterDialogExtension.prototype.subscribeToContentChanges = function (callback) {
        return this._viewModel.parameterCollection.subscribe(callback);
    };
    DashboardParameterDialogExtension.prototype.getParameters = function () {
        if (!this._viewModel)
            throw "Dashboard is not loaded";
        return this._viewModel.parameterCollection();
    };
    DashboardParameterDialogExtension.prototype.renderContent = function (element) {
        var _this = this;
        var customParameterDialog = this._createParameterDialog();
        this._customDialogContent.push(customParameterDialog);
        return customParameterDialog.generateContent(_utils_1.$unwrap(element), function () {
            _this._customDialogContent.splice(_this._customDialogContent.indexOf(customParameterDialog), 1);
        });
    };
    DashboardParameterDialogExtension.prototype._createParameterDialog = function () {
        var _this = this;
        return new _parameters_dialog_1.parametersDialog({
            parametersDialogContainer: this._dashboardControl.getWidgetContainer(),
            getParametersCollection: function () { return _this.getParameters(); },
            submitParameters: function (newParameters) {
                _this._viewModel.parameterCollection.peek().setParameters(newParameters);
            },
            onShowing: function (args) { return _this.onShowing(args); },
            onShown: function (args) { return _this.onShown(args); },
            onHidden: function (args) { return _this.onHidden(args); }
        });
    };
    DashboardParameterDialogExtension.prototype._clearContent = function () {
        this._customDialogContent.forEach(function (dialog) { return dialog.dispose(); });
        this._customDialogContent = [];
        if (this._parameterDialog) {
            this._parameterDialog.dispose();
            this._parameterDialog = undefined;
        }
    };
    DashboardParameterDialogExtension.prototype._clear = function () {
        this._clearContent();
        if (this._viewModel) {
            this._viewModel.dispose();
            this._viewModel = undefined;
        }
    };
    DashboardParameterDialogExtension.prototype._subscribeDynamicLookUpValuesLoaded = function () {
        var _this = this;
        var dataSourceBrowser = this._dashboardControl._dataSourceBrowser;
        if (dataSourceBrowser) {
            dataSourceBrowser.dynamicLookUpValuesLoaded = function (dynamicListLookUpSettings) {
                _this._dashboardControl
                    .dashboard()
                    .parameters()
                    .filter(function (param) {
                    return param.dynamicListLookUpSettings() && param.dynamicListLookUpSettings().equals(dynamicListLookUpSettings);
                })
                    .map(function (param) { return param.name(); })
                    .forEach(function (paramName) {
                    _this._onDynamicLookUpValuesLoaded({
                        parameterName: paramName
                    });
                });
            };
        }
    };
    return DashboardParameterDialogExtension;
}(disposable_object_1.DisposableObject));
exports.DashboardParameterDialogExtension = DashboardParameterDialogExtension;
control_options_1.defaultExtensions[name] = function (dashboardControl, options) { return new DashboardParameterDialogExtension(dashboardControl, options); };
