/**
* DevExpress Dashboard (dashboard-item.js)
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
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var serializable_model_1 = require("../serializable-model");
var _pane_content_holder_1 = require("./_pane-content-holder");
var _base_metadata_1 = require("../metadata/_base-metadata");
var _interactivity_options_1 = require("./options/metadata/_interactivity-options");
var _utils_1 = require("../../data/_utils");
var ko = require("knockout");
var _common_1 = require("../../data/_common");
var DashboardItem = (function (_super) {
    __extends(DashboardItem, _super);
    function DashboardItem(dashboardItemJSON, serializer, info) {
        if (dashboardItemJSON === void 0) { dashboardItemJSON = {}; }
        if (serializer === void 0) { serializer = new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer(); }
        if (info === void 0) { info = []; }
        var _this = _super.call(this, dashboardItemJSON, serializer, info) || this;
        _this._useNeutralFilterMode = ko.observable(false);
        _this._uiState = ko.observable("live");
        _this._errorState = ko.observable(null);
        _this._viewerItemCreated = ko.observable(false);
        _this._paneContentHolder = new _pane_content_holder_1.PaneContentHolder();
        _this._allowMultiselection = ko.observable(false);
        _this._serverContent = ko.observable(null);
        _this._actions = ko.computed(function () { return []; });
        _this._state = ko.computed(function () { return null; });
        _this._dataQueryParams = ko.computed(function () { return null; });
        ko.computed(function () {
            var errorState = _this._errorState(), valid = _this._paneContentHolder.valid();
            return valid && !errorState;
        }).subscribe(function (valid) {
            if (valid) {
                var content = _utils_1.deepExtend({}, _this._paneContentHolder.getContent(_base_metadata_1.PropertyCategory.Data) || {});
                _this._updateContentViewModel(content);
                _this._updateContentData(content);
                _this._extendContentState(content);
                _this._serverContent(content);
            }
            else {
                _this._serverContent(null);
            }
        });
        return _this;
    }
    DashboardItem._getCommonItemType = function (itemType) {
        var commonItemType = itemType.toUpperCase();
        if (commonItemType === 'TEXTBOX') {
            return 'TEXT';
        }
        return commonItemType;
    };
    DashboardItem.prototype.getUniqueNamePrefix = function () {
        return _super.prototype._getUniqueNamePrefix.call(this) + "DashboardItem";
    };
    Object.defineProperty(DashboardItem.prototype, "_caption", {
        get: function () {
            var name = this.name(), layerName = "";
            if (this._getLayersCount() > 0) {
                layerName = this._getLayerName();
                name += !!name && !!layerName ? " - " : "";
            }
            return name + layerName;
        },
        enumerable: true,
        configurable: true
    });
    DashboardItem.prototype._isInteractivityAllowed = function () {
        return !!this[_interactivity_options_1.commonInteractivityOptions.propertyName];
    };
    DashboardItem.prototype._getLayersCount = function () {
        return 0;
    };
    DashboardItem.prototype._getLayerName = function () {
        return "";
    };
    DashboardItem.prototype._updateContentViewModel = function (content) {
        content.CaptionViewModel = content.CaptionViewModel || {};
        content.CaptionViewModel.Caption = this.name();
        content.CaptionViewModel.Text = this.name();
        content.CaptionViewModel.ShowCaption = this.showCaption();
        content.ViewModel = content.ViewModel || {};
        content.ViewModel.Caption = this.name();
        content.ViewModel.ShowCaption = this.showCaption();
        content.ParentContainer = this.parentContainer();
    };
    DashboardItem.prototype._updateContentData = function (content) {
    };
    DashboardItem.prototype._updateDataQueryParams = function (params) {
    };
    DashboardItem.prototype._validateSelection = function (selection) {
    };
    DashboardItem.prototype._extendContentState = function (content) {
    };
    DashboardItem.prototype._getDisplayFilterValues = function (limitCount) {
        return undefined;
    };
    DashboardItem.prototype._getDisplayFilterValuesExternal = function () {
    };
    DashboardItem.prototype._getServerContent = function () {
        var content = this._serverContent();
        var contentCopy = content ? _utils_1.deepExtend({}, content) : undefined;
        if (contentCopy) {
            this._extendContentState(contentCopy);
        }
        return contentCopy;
    };
    DashboardItem.prototype._getFullServerContent = function () {
        var serverContent = this._getServerContent();
        return !!serverContent ? __assign({}, serverContent, { ContentType: _common_1.contentType.fullContent }) : serverContent;
    };
    DashboardItem.prototype._subcribeServerContent = function (handler) {
        var _this = this;
        return this._serverContent.subscribe(function () {
            handler(_this._getServerContent());
        });
    };
    DashboardItem.prototype._getContentCategories = function () {
        return [_base_metadata_1.PropertyCategory.Initialize];
    };
    DashboardItem.prototype._getDataQueryParams = function () {
        var params = this._dataQueryParams.peek();
        this._updateDataQueryParams(params);
        return params || {};
    };
    DashboardItem.prototype._subcribeDataQueryParams = function (handler) {
        var _this = this;
        return this._dataQueryParams.subscribe(function () { return handler(_this._getDataQueryParams()); });
    };
    DashboardItem.prototype._getExportingSelection = function () {
    };
    DashboardItem.prototype._setState = function (parameter) {
    };
    return DashboardItem;
}(serializable_model_1.TypedSerializableModel));
exports.DashboardItem = DashboardItem;
