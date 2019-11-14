/**
* DevExpress Dashboard (_dashboard-title-view.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _title_toolbar_1 = require("../widgets/caption-toolbar/_title-toolbar");
var _dashboard_title_toolbar_adapter_1 = require("./_dashboard-title-toolbar-adapter");
var $ = require("jquery");
var DashboardTitleView = (function () {
    function DashboardTitleView() {
        this.onUpdated = $.Callbacks();
    }
    Object.defineProperty(DashboardTitleView.prototype, "_visible", {
        get: function () {
            return this._titleViewModel && this._titleViewModel.Visible;
        },
        enumerable: true,
        configurable: true
    });
    DashboardTitleView.prototype.initialize = function (container, controlContainer, encodeHtml, options, titleViewModel) {
        this._options = options;
        this._titleViewModel = titleViewModel;
        if (this._visible) {
            this._captionToolbar = new _title_toolbar_1.DashboardTitleToolbar(container, controlContainer, container, encodeHtml);
        }
    };
    DashboardTitleView.prototype.calcHeight = function (masterFilterValues) {
        if (this._visible) {
            var options = _dashboard_title_toolbar_adapter_1.DashboardTitleToolbarAdapter.getTitleOptions(this._titleViewModel, masterFilterValues, this._options.showExportDialog, this._options.showParametersDialog, this._options.allowExport);
            this._raiseUpdated(options);
            return this._captionToolbar.calcHeight(this._convertToToolbarOptions(options));
        }
        return 0;
    };
    DashboardTitleView.prototype.update = function (masterFilterValues) {
        if (this._visible) {
            var options = _dashboard_title_toolbar_adapter_1.DashboardTitleToolbarAdapter.getTitleOptions(this._titleViewModel, masterFilterValues, this._options.showExportDialog, this._options.showParametersDialog, this._options.allowExport);
            this._raiseUpdated(options);
            this._captionToolbar.update(this._convertToToolbarOptions(options), this._titleViewModel.LayoutModel.Alignment === 'Center');
        }
    };
    DashboardTitleView.prototype.resize = function () {
        if (this._visible) {
            this._captionToolbar.onResize();
        }
    };
    DashboardTitleView.prototype._convertToToolbarOptions = function (options) {
        return {
            staticItems: options.contentItems,
            actionItems: options.actionItems,
            stateItems: []
        };
    };
    DashboardTitleView.prototype._raiseUpdated = function (option) {
        this.onUpdated.fire(option);
    };
    return DashboardTitleView;
}());
exports.DashboardTitleView = DashboardTitleView;
