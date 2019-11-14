/**
* DevExpress Dashboard (_dashboard-title-model.js)
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
var disposable_object_1 = require("../../../model/disposable-object");
var _utils_1 = require("../../../data/_utils");
var _dashboard_title_toolbar_adapter_1 = require("../../../viewer-parts/title/_dashboard-title-toolbar-adapter");
var $ = require("jquery");
var ko = require("knockout");
exports.maxFilterValuesCount = 20;
function masterFilterValues(dashboard) {
    if (dashboard && dashboard.title.visible() && dashboard.title.includeMasterFilter()) {
        var newMasterFilterValues = dashboard
            ._masterFilterItems()
            .reduce(function (acc, item) { return acc.concat(item._getDisplayFilterValues(exports.maxFilterValuesCount)); }, []);
        return newMasterFilterValues.length ? newMasterFilterValues : null;
    }
    return null;
}
exports.masterFilterValues = masterFilterValues;
var DashboardTitleModel = (function (_super) {
    __extends(DashboardTitleModel, _super);
    function DashboardTitleModel(context, dashboard, customizeToolbarOptions) {
        var _this = _super.call(this) || this;
        _this.context = context;
        _this.dashboard = dashboard;
        _this.customizeToolbarOptions = customizeToolbarOptions;
        _this.onUpdated = $.Callbacks();
        _this.toolbarOptions = ko.observable(null);
        _this.parametersExtension = context && context.parametersExtension || ko.computed(function () { return null; });
        _this.exportExtension = context && context.exportExtension || ko.computed(function () { return null; });
        _this.viewerApiExtension = context && context.viewerApiExtension || ko.computed(function () { return null; });
        _this.viewerApiExtension() && _this.viewerApiExtension()._title(_this);
        var showParametersButton = ko.computed(function () {
            return dashboard && dashboard.parameters().some(function (param) { return param.parameterVisible(); }) &&
                (_this.parametersExtension() && _utils_1.type.isDefined(_this.parametersExtension().showDialogButton()) ? _this.parametersExtension().showDialogButton() : false);
        });
        _this.allowShowExportDialog = ko.computed(function () {
            return _this.exportExtension() && _this.exportExtension().allowExportDashboard;
        });
        _this.masterFilterValues = ko.computed(function () {
            return masterFilterValues(dashboard);
        });
        _this.showTitle = ko.computed(function () {
            return dashboard ? dashboard.title.visible() : false;
        });
        _this.viewModel = ko.computed(function () {
            var titleModel = dashboard ? dashboard.title : undefined;
            if (titleModel && titleModel.visible()) {
                var imageViewModel = void 0;
                if (titleModel.image64()) {
                    imageViewModel = {
                        SourceBase64String: titleModel.image64(),
                        MimeType: "image/png"
                    };
                }
                else if (titleModel.url()) {
                    imageViewModel = {
                        Url: titleModel.url()
                    };
                }
                var viewModel = {
                    Text: titleModel.text(),
                    Visible: titleModel.visible(),
                    ShowParametersButton: showParametersButton(),
                    IncludeMasterFilterValues: titleModel.includeMasterFilter(),
                    LayoutModel: {
                        Alignment: titleModel.alignment(),
                        ImageViewModel: imageViewModel
                    },
                };
                return viewModel;
            }
            return null;
        });
        _this.update();
        _this.toDispose(_this.viewModel.subscribe(function (newValue) { return _this.update(); }));
        _this.toDispose(_this.masterFilterValues.subscribe(function (newValue) { return _this.update(); }));
        _this.toDispose(_this.masterFilterValues);
        _this.toDispose(_this.showTitle);
        _this.toDispose(_this.viewModel);
        _this.toDispose(_this.allowShowExportDialog);
        _this.toDispose(showParametersButton);
        return _this;
    }
    DashboardTitleModel.prototype.update = function () {
        var _this = this;
        var showExportDialog = function (format) {
            _this.exportExtension() && _this.exportExtension().showExportDashboardDialog(format);
        };
        var showParametersDialog = function () {
            _this.parametersExtension() && _this.parametersExtension().show();
        };
        var options = _dashboard_title_toolbar_adapter_1.DashboardTitleToolbarAdapter.getTitleOptions(this.viewModel(), this.masterFilterValues(), showExportDialog, showParametersDialog, this.allowShowExportDialog());
        if (this.customizeToolbarOptions) {
            this.customizeToolbarOptions(options);
        }
        this._raiseUpdated(options);
        this.toolbarOptions({
            centerAligned: this.viewModel() ? this.viewModel().LayoutModel.Alignment === 'Center' : false,
            toolbarOptions: {
                staticItems: options.contentItems,
                actionItems: options.actionItems,
                navigationItems: options.navigationItems,
                stateItems: []
            },
        });
    };
    DashboardTitleModel.prototype.dispose = function () {
        this.viewerApiExtension() && this.viewerApiExtension()._title(null);
        _super.prototype.dispose.call(this);
    };
    DashboardTitleModel.prototype._raiseUpdated = function (option) {
        this.onUpdated.fire(option);
    };
    return DashboardTitleModel;
}(disposable_object_1.DisposableObject));
exports.DashboardTitleModel = DashboardTitleModel;
