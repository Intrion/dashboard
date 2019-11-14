/**
* DevExpress Dashboard (data-inspector-extension.js)
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
var disposable_object_1 = require("../../../model/disposable-object");
var control_options_1 = require("../../control-options");
var _data_inspector_view_model_1 = require("./_data-inspector-view-model");
var caption_toolbar_options_1 = require("../../../viewer-parts/widgets/caption-toolbar/caption-toolbar-options");
var model_1 = require("../../../model");
var index_internal_1 = require("../../../data/index.internal");
var utils_1 = require("../../internal/utils");
var _underlying_data_provider_1 = require("../../data/_underlying-data-provider");
;
;
var name = "data-inspector";
var DataInspectorExtension = (function (_super) {
    __extends(DataInspectorExtension, _super);
    function DataInspectorExtension(dashboardControl, options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this._defaultOptions = {
            allowInspectAggregatedData: false,
            allowInspectRawData: false,
            onDialogShowing: function () { },
            onDialogShown: function () { },
            onDialogHidden: function () { },
            onGridInitialized: function () { },
            onGridContentReady: function () { }
        };
        _this.name = name;
        _this._addContextToolbarItem = function (toolbarOptions, dashboardItem) {
            if ((_this._options.allowInspectAggregatedData || _this._options.allowInspectRawData) && dashboardItem instanceof model_1.DataDashboardItem) {
                toolbarOptions.actionItems.push({
                    hint: index_internal_1.getLocalizationById("DashboardStringId.ActionShowDataInspector"),
                    icon: "dx-dashboard-data-inspector",
                    name: caption_toolbar_options_1.dashboardToolbarItemNames.dataInspector,
                    type: "button",
                    click: function () {
                        _this._viewModel.show(dashboardItem);
                    }
                });
            }
        };
        _this._dashboardControl = dashboardControl;
        _this._options = __assign({}, _this._defaultOptions, options);
        _this._viewModel = new _data_inspector_view_model_1.DataInspectorViewModel(_this._options);
        _this._customTemplate = {
            name: "dx-dashboard-data-inspector-extension",
            data: _this._viewModel
        };
        return _this;
    }
    DataInspectorExtension.prototype.start = function () {
        var _this = this;
        this._dashboardControl.customTemplates.push(this._customTemplate);
        if (this._dashboardControl._serviceClient()) {
            this._viewModel.setUnderlyingDataProvider(new _underlying_data_provider_1.UnderlyingDataProvider(this._dashboardControl._serviceClient()));
        }
        this.toDispose(this._dashboardControl._serviceClient.subscribe(function (serviceClient) {
            _this._viewModel.setUnderlyingDataProvider(new _underlying_data_provider_1.UnderlyingDataProvider(serviceClient));
        }));
        this._dashboardControl._dashboardContext.addContextToolbarItems.add(this._addContextToolbarItem);
    };
    DataInspectorExtension.prototype.stop = function () {
        this._dashboardControl.customTemplates.remove(this._customTemplate);
        this._dashboardControl._dashboardContext.addContextToolbarItems.remove(this._addContextToolbarItem);
    };
    DataInspectorExtension.prototype.showDataInspector = function (dashboardItemName, inspectedType) {
        var dashboard = this._dashboardControl.dashboard();
        if (dashboard) {
            var dashboardItem = utils_1.findItemForApi(dashboard, dashboardItemName, model_1.DataDashboardItem);
            this._viewModel.show(dashboardItem, inspectedType);
        }
    };
    DataInspectorExtension.prototype.currentInspectedType = function () {
        return this._viewModel.visible() && this._viewModel.inspectedDataType() || null;
    };
    DataInspectorExtension.prototype.hideDataInspector = function () {
        this._viewModel.visible(false);
    };
    return DataInspectorExtension;
}(disposable_object_1.DisposableObject));
exports.DataInspectorExtension = DataInspectorExtension;
control_options_1.defaultExtensions[name] = function (dashboardControl, options) { return new DataInspectorExtension(dashboardControl, options); };
