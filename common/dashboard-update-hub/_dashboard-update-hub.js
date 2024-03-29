﻿/**
* DevExpress Dashboard (_dashboard-update-hub.js)
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
var data_dashboard_item_1 = require("../../model/items/data-dashboard-item");
var _base_metadata_1 = require("../../model/metadata/_base-metadata");
var disposable_object_1 = require("../../model/disposable-object");
var _pane_content_holder_1 = require("../../model/items/_pane-content-holder");
var filter_element_item_base_1 = require("../../model/items/filter-items/filter-element-item-base");
var range_filter_item_1 = require("../../model/items/range-filter/range-filter-item");
var notificator_1 = require("../notification-controller/notificator");
var _item_change_subscriber_1 = require("./_item-change-subscriber");
var model_1 = require("../../model");
var _default_1 = require("../../data/localization/_default");
var _utils_1 = require("../../data/_utils");
var $ = require("jquery");
var _dashboard_event_1 = require("./_dashboard-event");
var DashboardUpdateHub = (function (_super) {
    __extends(DashboardUpdateHub, _super);
    function DashboardUpdateHub(_dashboard, _itemBatchUpdateEnabled, _callBacks) {
        var _this = _super.call(this) || this;
        _this._dashboard = _dashboard;
        _this._itemBatchUpdateEnabled = _itemBatchUpdateEnabled;
        _this._callBacks = _callBacks;
        _this._timer = 0;
        _this._requestQueue = [];
        _this.initializeItem = function (item) {
            if (item instanceof data_dashboard_item_1.DataDashboardItem) {
                item._beforeMasterFilterSetByUserInteraction = function () {
                    if (!_this._isUpdating() && !_this._suspendItem) {
                        _this._suspendItem = item;
                    }
                };
                item._afterMasterFilterSetByUserInteraction = function () {
                    if (!_this._isUpdating() && _this._suspendItem === item) {
                        _this._suspendItem = null;
                    }
                };
                item._drillDownChangedByUserInteraction = function () {
                    if (_this._suspendItem === item) {
                        _this._suspendItem = null;
                    }
                };
            }
            item._getContentCategories().forEach(function (category) { return _this._itemChanged(item, category); });
        };
        _this.dataSourcePropertyChanged = new _dashboard_event_1.DashboardEvent();
        var itemSubscription = {
            itemAdded: _this.initializeItem,
            itemDeleted: function (item) {
                if (item instanceof data_dashboard_item_1.DataDashboardItem) {
                    item._beforeMasterFilterSetByUserInteraction = null;
                }
            },
            itemChanged: function (item, category) {
                if (item instanceof data_dashboard_item_1.DataDashboardItem && category !== _base_metadata_1.PropertyCategory.ViewModel) {
                    item._limitDataState.reset();
                }
                _this._itemChanged(item, category);
            }
        };
        _this.toDispose(new _item_change_subscriber_1.ItemsChangeSubscriber(_this._dashboard.items, itemSubscription));
        _this.toDispose(new _item_change_subscriber_1.ItemsChangeSubscriber(_this._dashboard.groups, itemSubscription));
        _this.toDispose(new _item_change_subscriber_1.ItemsChangeSubscriber(_this._dashboard._tabPages, itemSubscription));
        _this.toDispose(new _item_change_subscriber_1.DataSourcesSubscriber(_this._dashboard.dataSources, function (args) {
            var affectedItems = _this._dashboard._dataDashboardItems().filter(function (item) { return item.dataSource() === args.dataSource.componentName(); });
            if (args.queryName) {
                affectedItems = affectedItems.filter(function (item) { return item.dataMember() == args.queryName; });
            }
            if (args.fieldName) {
                affectedItems = affectedItems.filter(function (item) { return !!item.dataItems().filter(function (dataItem) { return dataItem.dataMember() == args.fieldName; })[0]; });
            }
            affectedItems.forEach(function (item) { return _this._itemChanged(item, _base_metadata_1.PropertyCategory.Data); });
            _this.dataSourcePropertyChanged.fire(args);
        }));
        _this.toDispose(_this._dashboard.currencyCultureName.subscribe(function (_) {
            _this.reloadAllItems(_base_metadata_1.PropertyCategory.Data);
        }));
        _this.toDispose(_this._dashboard._queryParameters.subscribe(function (_) {
            _this.reloadAllItems(_base_metadata_1.PropertyCategory.ClientState);
        }));
        _this.toDispose(new _item_change_subscriber_1.ColorSchemeSubscriber(_dashboard.colorScheme, function () {
            _this.reloadGlobalColoredItems(_base_metadata_1.PropertyCategory.Data);
        }));
        if (_this._itemBatchUpdateEnabled) {
            var itemsToRequest = {};
            var performBatchRequest = _utils_1.debounce(function () {
                var itemsToRequestCopy = __assign({}, itemsToRequest);
                itemsToRequest = {};
                _this._callBacks.getBatchItemData(Object.keys(itemsToRequestCopy).map(function (itemName) { return itemsToRequestCopy[itemName].itemModel; }))
                    .done(function (result) {
                    Object.keys(result).forEach(function (itemName) { return itemsToRequestCopy[itemName].deferred.resolve(result[itemName]); });
                })
                    .fail(function (result) {
                    Object.keys(itemsToRequestCopy).forEach(function (itemName) { return itemsToRequestCopy[itemName].deferred.reject(result); });
                });
            }, 1);
            _this._getItemData = function (item) {
                var def = $.Deferred();
                itemsToRequest[item.componentName()] = {
                    itemModel: item,
                    deferred: def
                };
                performBatchRequest();
                return def.promise();
            };
        }
        else {
            _this._getItemData = function (item) { return _this._callBacks.getItemData(item); };
        }
        return _this;
    }
    DashboardUpdateHub.prototype._isUpdating = function () {
        return !!this._requestQueue.length;
    };
    DashboardUpdateHub.prototype._dequeueRequest = function (queueItem) {
        var itemIndex = this._requestQueue.indexOf(queueItem);
        if (itemIndex !== -1) {
            this._requestQueue.splice(itemIndex, 1);
            if (_pane_content_holder_1.getCategoryContentName(queueItem.category) === 'data') {
                this.itemEndUpdate && this.itemEndUpdate(queueItem.item.componentName());
            }
            if (this._requestQueue.length === 0) {
                this.dashboardEndUpdate && this.dashboardEndUpdate();
                this._suspendItem = null;
            }
        }
    };
    DashboardUpdateHub.prototype._enqueueRequest = function (item, category) {
        var compatibleCategories = item._paneContentHolder.getCompatibleCategories(category);
        if (!this._requestQueue.some(function (queueItem) { return queueItem.item === item && compatibleCategories.indexOf(queueItem.category) !== -1; })) {
            this._requestQueue.push({ item: item, category: category });
            if (this._requestQueue.length === 1) {
                this.dashboardBeginUpdate && this.dashboardBeginUpdate();
            }
            if (_pane_content_holder_1.getCategoryContentName(category) === 'data') {
                this.itemBeginUpdate && this.itemBeginUpdate(item.componentName());
            }
        }
    };
    DashboardUpdateHub.prototype._getDataRequestPriority = function (dashboardItem) {
        if (dashboardItem instanceof filter_element_item_base_1.FilterElementItemBase || dashboardItem instanceof range_filter_item_1.RangeFilterItem) {
            return 2;
        }
        else if (dashboardItem instanceof data_dashboard_item_1.DataDashboardItem && dashboardItem._masterFilterMode() === 'Single') {
            return 1;
        }
        return 0;
    };
    DashboardUpdateHub.prototype._getRequestLockingMasterFilterItems = function (dashboardItem) {
        return dashboardItem._masterFilterItems()
            .filter(function (masterItem) {
            if (masterItem instanceof range_filter_item_1.RangeFilterItem || masterItem._isSingleMasterFilter()) {
                return true;
            }
            else {
                return !masterItem._useNeutralFilterMode() && masterItem instanceof filter_element_item_base_1.FilterElementItemBase;
            }
        });
    };
    DashboardUpdateHub.prototype._resolveItems = function () {
        var _this = this;
        this._requestQueue
            .filter(function (queueItem) {
            if (!queueItem.item._paneContentHolder.isWaitingForContent(queueItem.category) && queueItem.item instanceof data_dashboard_item_1.DataDashboardItem && queueItem.item.dataItems().length > 0) {
                return _this._getRequestLockingMasterFilterItems(queueItem.item)
                    .filter(function (masterItem) {
                    var circularDependencyIndex = _this._getRequestLockingMasterFilterItems(masterItem)
                        .indexOf(queueItem.item);
                    if (circularDependencyIndex > -1) {
                        var itemPriority = _this._getDataRequestPriority(queueItem.item);
                        var masterItemPriority = _this._getDataRequestPriority(masterItem);
                        if (itemPriority === masterItemPriority) {
                            return _this._dashboard.items().indexOf(queueItem.item) > _this._dashboard.items().indexOf(masterItem);
                        }
                        else {
                            return itemPriority < masterItemPriority;
                        }
                    }
                    return true;
                })
                    .every(function (dependence) {
                    return _this._requestQueue.filter(function (queueItem) { return queueItem.item === dependence; }).length === 0;
                });
            }
            return !queueItem.item._paneContentHolder.isWaitingForContent(queueItem.category);
        })
            .forEach(function (queueItem) {
            if (_this._dashboard.findItem(queueItem.item.componentName())) {
                var category = queueItem.category;
                queueItem.item._paneContentHolder.beginRequest(category);
                if (queueItem.item._paneContentHolder.needRequestContentFromServer(category)) {
                    _this._performServerRequest(queueItem.item, queueItem.category).done(function (result) {
                        queueItem.item._paneContentHolder.endRequest({ response: result, category: category });
                        if (queueItem.item._paneContentHolder.isValid(category)) {
                            _this._dequeueRequest(queueItem);
                        }
                        _this._resolveItems();
                        return result;
                    }).fail(function (result) {
                        var errorTitle = _default_1.getLocalizationById("DashboardWebStringId.Errors.AttemptToLoadData");
                        var errorDetail = notificator_1.NotificationController._getDetailedErrorMessage(result);
                        queueItem.item._errorState({ title: errorTitle, detail: errorDetail });
                        queueItem.item._paneContentHolder.endRequest({ response: {}, category: category });
                        _this._dequeueRequest(queueItem);
                        _this._resolveItems();
                    });
                }
                else {
                    queueItem.item._paneContentHolder.endRequest({ response: {}, category: category });
                    _this._dequeueRequest(queueItem);
                }
            }
            else {
                _this._dequeueRequest(queueItem);
            }
        });
    };
    DashboardUpdateHub.prototype._processItemChanged = function (dashboardItem, changeCategory) {
        if (dashboardItem instanceof model_1.MapItem && changeCategory === _base_metadata_1.PropertyCategory.Map && dashboardItem._paneContentHolder.valid()) {
            dashboardItem._isGeometryChangedCallback();
        }
        dashboardItem._paneContentHolder.itemChanged(changeCategory);
        dashboardItem._errorState(null);
        if (dashboardItem instanceof data_dashboard_item_1.DataDashboardItem) {
            if (changeCategory === _base_metadata_1.PropertyCategory.Data || changeCategory === _base_metadata_1.PropertyCategory.Interactivity) {
                dashboardItem._dataManager(null);
                dashboardItem._clearInteractivityState();
            }
        }
    };
    DashboardUpdateHub.prototype._itemChanged = function (dashboardItem, changeCategory) {
        var _this = this;
        if (changeCategory === _base_metadata_1.PropertyCategory.ClientState && this._suspendItem === dashboardItem) {
            return;
        }
        ;
        this._processItemChanged(dashboardItem, changeCategory);
        this._enqueueRequest(dashboardItem, changeCategory);
        if (dashboardItem instanceof data_dashboard_item_1.DataDashboardItem) {
            if ((dashboardItem._isGloballyColored && changeCategory === _base_metadata_1.PropertyCategory.Data) || changeCategory === _base_metadata_1.PropertyCategory.Coloring) {
                this._dashboard._dataDashboardItems()
                    .filter(function (item) { return item._isGloballyColored; })
                    .forEach(function (item) {
                    _this._processItemChanged(dashboardItem, _base_metadata_1.PropertyCategory.Data);
                    _this._enqueueRequest(item, _base_metadata_1.PropertyCategory.Data);
                });
            }
        }
        clearTimeout(this._timer);
        this._timer = window.setTimeout(function () {
            _this._resolveItems();
        }, 10);
    };
    DashboardUpdateHub.prototype._performServerRequest = function (item, category) {
        var contentName = _pane_content_holder_1.getCategoryContentName(category);
        switch (contentName) {
            case 'data':
                return this._getItemData(item);
            case 'map':
                return this._callBacks.getMapShapeFile(item);
            default:
                throw new Error();
        }
    };
    DashboardUpdateHub.prototype.refreshItems = function (itemsNames) {
        var _this = this;
        this._dashboard._dataDashboardItems()
            .filter(function (item) { return itemsNames.indexOf(item.componentName()) !== -1; })
            .forEach(function (item) { _this._itemChanged(item, _base_metadata_1.PropertyCategory.ClientState); });
    };
    DashboardUpdateHub.prototype.reloadAllItems = function (caterory) {
        var _this = this;
        this._dashboard._dataDashboardItems().forEach(function (item) { _this._itemChanged(item, caterory); });
    };
    DashboardUpdateHub.prototype.reloadGlobalColoredItems = function (caterory) {
        var _this = this;
        this._dashboard._dataDashboardItems().filter(function (item) { return item.coloringOptions && item.coloringOptions.useGlobalColors(); }).forEach(function (item) { _this._itemChanged(item, caterory); });
    };
    DashboardUpdateHub.prototype.initialize = function () {
        this._dashboard.items().forEach(this.initializeItem);
        this._dashboard.groups().forEach(this.initializeItem);
        this._dashboard._tabPages().forEach(this.initializeItem);
    };
    DashboardUpdateHub.prototype.dispose = function () {
        clearTimeout(this._timer);
        this._timer = null;
        this._requestQueue.splice(0, this._requestQueue.length);
        _super.prototype.dispose.call(this);
    };
    return DashboardUpdateHub;
}(disposable_object_1.DisposableObject));
exports.DashboardUpdateHub = DashboardUpdateHub;
