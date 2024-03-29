﻿/**
* DevExpress Dashboard (_service-client.js)
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
var data_dashboard_item_1 = require("../model/items/data-dashboard-item");
var parameter_1 = require("../model/parameters/parameter");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../data/localization/_default");
var _utils_1 = require("../data/_utils");
var ViewerDataServiceClient = (function () {
    function ViewerDataServiceClient(_dashboardContainer, _errorHandler, _dataServiceUrls, _remoteService) {
        var _this = this;
        this._dashboardContainer = _dashboardContainer;
        this._errorHandler = _errorHandler;
        this._dataServiceUrls = _dataServiceUrls;
        this._remoteService = _remoteService;
        this.getColoringScheme = function (itemName) {
            if (itemName === void 0) { itemName = ""; }
            throw new Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.MethodIsNotAllowedInViewerMode"));
        };
        this.getDashboardPalette = function () {
            throw new Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.MethodIsNotAllowedInViewerMode"));
        };
        this.getItemData = function (item, isModeAllowsToReduceData) {
            return _this._performRequest(_this._dataServiceUrls.DashboardItemGetAction, {
                itemId: item.componentName(),
                query: _this._getItemDataQuery(item, isModeAllowsToReduceData)
            });
        };
        this.getBatchItemData = function (items, isModeAllowsToReduceData) {
            return _this._performRequest(_this._dataServiceUrls.DashboardItemBatchGetAction, {
                items: items.reduce(function (acc, item) {
                    acc[item.componentName()] = _this._getItemDataQuery(item, isModeAllowsToReduceData);
                    return acc;
                }, {})
            });
        };
        this.getMapShapeFile = function (itemName) {
            return _this._performRequest(_this._dataServiceUrls.GetMapShapeFileAction, {
                itemId: itemName
            });
        };
        this.getUnderlyingData = function (itemName, columnValues, rowValues, columnNames, dataQueryParams) {
            return _this._performRequest(_this._dataServiceUrls.GetUnderlyingDataAction, {
                itemId: itemName,
                query: dataQueryParams,
                columnValues: columnValues,
                rowValues: rowValues,
                columnNames: columnNames
            });
        };
        this.markDataSourcesForReload = function () {
            return _this._remoteService.postToServer(_this._dataServiceUrls.MarkDataSourcesForReloadAction, {
                dashboardId: _this._dashboardContainer.id
            });
        };
    }
    ViewerDataServiceClient.prototype.getParameterValues = function (dataSourceId, dataSource, dataMember, valueMember, displayMember, sortOrder, sortByMember, parameterType) {
        var _this = this;
        return this._performRequest(this._dataServiceUrls.ParameterValuesAction, {
            dataSourceId: dataSourceId,
            dataMember: dataMember,
            valueMember: valueMember,
            displayMember: displayMember,
            sortOrder: sortOrder,
            sortByMember: sortByMember,
            parameterType: parameterType
        })
            .fail(function (request) { return _this._errorHandler.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToLoadParameterValues") + (dataSource && dataSource.name() || dataSourceId), request); });
    };
    ViewerDataServiceClient.prototype.performExport = function (exportInfo, exportModels) {
        var commonArgs = this._createCommonArgs();
        var args = JSON.stringify(__assign({ model: exportModels }, exportInfo, commonArgs));
        this._remoteService.performPostback(this._dataServiceUrls.PerformExportAction, args);
        return;
    };
    ViewerDataServiceClient.prototype.getDimensionUniqueValues = function (dataSource, dataMember, dimension) {
        throw new Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.MethodIsNotAllowedInViewerMode"));
    };
    ViewerDataServiceClient.prototype.getDimensionFilterItems = function (dashboardItem, dimensionDataMember, previousState, branch) {
        throw new Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.MethodIsNotAllowedInViewerMode"));
    };
    ViewerDataServiceClient.prototype.getDimensionFilterString = function (dashboardItem, dimensionDataMember, previousState) {
        throw new Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.MethodIsNotAllowedInViewerMode"));
    };
    ViewerDataServiceClient.prototype.getFieldList = function (dataSource, dataMember, fieldPath) {
        throw new Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.MethodIsNotAllowedInViewerMode"));
    };
    ViewerDataServiceClient.prototype.convertItem = function (item, destinationItemTypeName) {
        throw new Error(_default_1.getLocalizationById("DashboardWebStringId.Notification.MethodIsNotAllowedInViewerMode"));
    };
    ViewerDataServiceClient.prototype._getItemDataQuery = function (item, isModeAllowsToReduceData) {
        var dataQueryParams = _utils_1.deepExtend({}, item._getDataQueryParams());
        var isDataItem = item instanceof data_dashboard_item_1.DataDashboardItem;
        if (isDataItem && isModeAllowsToReduceData && item._limitDataState.enabled) {
            dataQueryParams.LimitVisibleData = true;
        }
        return dataQueryParams;
    };
    ViewerDataServiceClient.prototype._queryParamsToQueryString = function (dataQueryParams) {
        var urlQuery = {};
        if (dataQueryParams) {
            Object.keys(dataQueryParams).forEach(function (name) {
                var value = ko.unwrap(dataQueryParams[name]);
                if (!!value) {
                    if (typeof value === "object") {
                        if (Object.keys(value).length > 0) {
                            urlQuery[name] = JSON.stringify(value);
                        }
                    }
                    else {
                        urlQuery[name] = value;
                    }
                }
            });
        }
        return $.isEmptyObject(urlQuery) ? "" : $.param(urlQuery);
    };
    ViewerDataServiceClient.prototype._createCommonArgs = function () {
        return {
            dashboardId: this._dashboardContainer.id,
            parameters: parameter_1._getParametersQuery(this._dashboardContainer.dashboard.parameters())
        };
    };
    ViewerDataServiceClient.prototype._performRequest = function (url, requestArgs) {
        var commonArgs = this._createCommonArgs();
        Object.keys(requestArgs).forEach(function (argsKey) {
            if (commonArgs[argsKey]) {
                throw Error("The '" + argsKey + "' request argument key is reserved for common event args");
            }
            else {
                commonArgs[argsKey] = requestArgs[argsKey];
            }
        });
        return this._performRequestCore(url, commonArgs);
    };
    ViewerDataServiceClient.prototype._performRequestCore = function (url, params) {
        var queryString = this._queryParamsToQueryString(params);
        if (queryString) {
            var urlSeparator = url.indexOf("?") == -1 ? "?" : "&";
            queryString = urlSeparator + queryString;
        }
        var fullUrl = url + queryString;
        if (fullUrl.length < ViewerDataServiceClient.maxQueryStringLength) {
            return this._remoteService.getFromServer(fullUrl);
        }
        else {
            return this._remoteService.postToServer(url, params);
        }
    };
    ViewerDataServiceClient.maxQueryStringLength = 2000;
    return ViewerDataServiceClient;
}());
exports.ViewerDataServiceClient = ViewerDataServiceClient;
var DesignerDataServiceClient = (function (_super) {
    __extends(DesignerDataServiceClient, _super);
    function DesignerDataServiceClient(_dashboardContainer, _errorHandler, _dataServiceUrls, _remoteService) {
        var _this = _super.call(this, _dashboardContainer, _errorHandler, _dataServiceUrls, _remoteService) || this;
        _this.getColoringScheme = function (itemName) {
            if (itemName === void 0) { itemName = ""; }
            return _this._performRequest(_this._dataServiceUrls.GetColoringSchemeAction, {
                itemId: itemName,
                query: itemName ? _this._dashboardContainer.dashboard._findDataItem(itemName)._getDataQueryParams() : {}
            })
                .fail(function (request) { _this._errorHandler.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToGetColorScheme"), request); });
        };
        _this.getDashboardPalette = function () {
            return _this._remoteService.postToServer(_this._dataServiceUrls.GetDashboardPaletteAction, {
                dashboardId: _this._dashboardContainer.id
            });
        };
        return _this;
    }
    DesignerDataServiceClient.prototype.convertItem = function (item, destinationItemTypeName) {
        var _this = this;
        return this._performRequest(this._dataServiceUrls.ConvertItemAction, {
            itemId: item.componentName(),
            destinationItemTypeName: destinationItemTypeName
        })
            .fail(function (request) { _this._errorHandler.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToConvertItemToType") + destinationItemTypeName, request); });
    };
    DesignerDataServiceClient.prototype.getDimensionUniqueValues = function (dataSource, dataMember, dimension) {
        var _this = this;
        return this._performRequest(this._dataServiceUrls.DimensionUniqueValuesAction, {
            dataSourceId: dataSource.componentName(),
            dimension: new dx_analytics_core_1.default.Analytics.Utils.ModelSerializer({ useRefs: false }).serialize(dimension),
            dataMember: dataMember,
        })
            .fail(function (request) { _this._errorHandler.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToLoadDimensionUniqueValues") + dataSource.name(), request); });
    };
    DesignerDataServiceClient.prototype.getDimensionFilterItems = function (item, dimensionDataMember, previousState, branch) {
        return this._performRequest(this._dataServiceUrls.DimensionFilterItemsAction, {
            itemId: item.componentName(),
            query: item._getDataQueryParams(),
            dimensionDataMember: dimensionDataMember,
            previousState: previousState,
            branch: branch
        });
    };
    DesignerDataServiceClient.prototype.getDimensionFilterString = function (item, dimensionDataMember, previousState) {
        return this._performRequest(this._dataServiceUrls.DimensionFilterStringAction, {
            itemId: item.componentName(),
            query: item._getDataQueryParams(),
            dimensionDataMember: dimensionDataMember,
            previousState: previousState,
            branch: null
        });
    };
    DesignerDataServiceClient.prototype.getFieldList = function (dataSource, dataMember, fieldPath) {
        var _this = this;
        return this._performRequest(this._dataServiceUrls.FieldListAction, {
            dataSourceId: dataSource.componentName(),
            dataMember: dataMember,
            fieldPath: fieldPath
        })
            .fail(function (request) { _this._errorHandler.showError(_default_1.getLocalizationById("DashboardWebStringId.Notification.AttemptToLoadFieldListForDataSource") + dataSource.name(), request); });
    };
    DesignerDataServiceClient.prototype._createCommonArgs = function () {
        return {
            dashboardId: this._dashboardContainer.id,
            dashboard: this._dashboardContainer.dashboard.getJSON(),
            parameters: parameter_1._getParametersQuery(this._dashboardContainer.dashboard.parameters())
        };
    };
    DesignerDataServiceClient.prototype._performRequestCore = function (url, data) {
        return this._remoteService.postToServer(url, data);
    };
    return DesignerDataServiceClient;
}(ViewerDataServiceClient));
exports.DesignerDataServiceClient = DesignerDataServiceClient;
