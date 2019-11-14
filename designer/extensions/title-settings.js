/**
* DevExpress Dashboard (title-settings.js)
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
var toolbox_items_1 = require("../toolbox-extension/toolbox-items");
var _dashboard_title_view_constants_1 = require("../../viewer-parts/title/_dashboard-title-view-constants");
var _dashboard_title_model_1 = require("../../common/viewer/title/_dashboard-title-model");
var control_options_1 = require("../../common/control-options");
var ko = require("knockout");
var name = "dashboard-title-editor";
var DashboardTitleEditorExtension = (function (_super) {
    __extends(DashboardTitleEditorExtension, _super);
    function DashboardTitleEditorExtension(dashboardControl) {
        var _this = _super.call(this) || this;
        _this.dashboardControl = dashboardControl;
        _this.name = name;
        _this._titleEditorViewModel = ko.observable(null);
        _this._menuItem = new toolbox_items_1.DashboardMenuItem(_this.name, "DashboardStringId.Title", 220, 84);
        _this._menuItem.template = "dx-dashboard-form-title-settings";
        _this._menuItem.data = {
            dashboard: ko.computed(function () { return dashboardControl.dashboard(); }),
            options: _this._titleEditorViewModel,
            headerHeight: ko.observable(_dashboard_title_view_constants_1.titleHeight)
        };
        _this._menuItem.disabled = ko.computed(function () { return !dashboardControl.dashboard(); });
        return _this;
    }
    DashboardTitleEditorExtension.prototype.start = function () {
        var _this = this;
        this._updateTitleToolbar();
        this.toDispose(this.dashboardControl.dashboard.subscribe(function () { return _this._updateTitleToolbar(); }));
        var toolbarExtension = this.dashboardControl.findExtension("toolbox");
        if (toolbarExtension) {
            toolbarExtension.menuItems.push(this._menuItem);
        }
    };
    DashboardTitleEditorExtension.prototype.stop = function () {
        var toolbarExtension = this.dashboardControl.findExtension("toolbox");
        if (toolbarExtension) {
            toolbarExtension.menuItems.remove(this._menuItem);
        }
    };
    DashboardTitleEditorExtension.prototype._updateTitleToolbar = function () {
        var _this = this;
        if (this.dashboardControl.dashboard()) {
            var titleModel = new _dashboard_title_model_1.DashboardTitleModel(undefined, this.dashboardControl.dashboard());
            this._titleEditorViewModel(titleModel.toolbarOptions());
            this.toDispose(titleModel.toolbarOptions.subscribe(function (newOptions) {
                _this._titleEditorViewModel(newOptions);
            }));
        }
        else {
            this._titleEditorViewModel(null);
        }
    };
    return DashboardTitleEditorExtension;
}(disposable_object_1.DisposableObject));
exports.DashboardTitleEditorExtension = DashboardTitleEditorExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new DashboardTitleEditorExtension(dashboardControl); };
