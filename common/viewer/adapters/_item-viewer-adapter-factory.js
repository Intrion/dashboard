﻿/**
* DevExpress Dashboard (_item-viewer-adapter-factory.js)
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
var range_filter_item_1 = require("../../../model/items/range-filter/range-filter-item");
var _predefined_periods_item_viewer_adapter_1 = require("./_predefined-periods-item-viewer-adapter");
var grid_item_1 = require("../../../model/items/grid/grid-item");
var _grid_item_viewer_adapter_1 = require("./_grid-item-viewer-adapter");
var pivot_item_1 = require("../../../model/items/pivot/pivot-item");
var _pivot_item_viewer_adapter_1 = require("./_pivot-item-viewer-adapter");
var map_item_1 = require("../../../model/items/map/map-item");
var _map_item_viewer_adapter_1 = require("./_map-item-viewer-adapter");
var data_dashboard_item_1 = require("../../../model/items/data-dashboard-item");
var _data_item_viewer_adapter_1 = require("./_data-item-viewer-adapter");
var dashboard_item_1 = require("../../../model/items/dashboard-item");
var _item_viewer_adapter_base_1 = require("./_item-viewer-adapter-base");
var date_filter_item_1 = require("../../../model/items/filter-items/date-filter-item");
var disposable_object_1 = require("../../../model/disposable-object");
var ViewerItemAdapterRecordElement = (function () {
    function ViewerItemAdapterRecordElement(adapter, visualMode) {
        if (adapter)
            this.setAdapter(adapter, visualMode);
    }
    ViewerItemAdapterRecordElement.prototype.setAdapter = function (adapter, visualMode) {
        if (this.storage && (this.storage instanceof _item_viewer_adapter_base_1.ItemViewerAdapterBase || visualMode === "full"))
            throw new Error("Try to replace a primary dashboard item with the new one");
        if (!visualMode || visualMode === "full") {
            this.storage = adapter;
        }
        else {
            if (!this.storage)
                this.storage = {};
            if (visualMode === "caption") {
                this.storage.captionItem = adapter;
            }
            else {
                this.storage.contentItem = adapter;
            }
        }
    };
    ViewerItemAdapterRecordElement.prototype.suspend = function () {
        this.processMapRecordElement(function (adapter) { return adapter.suspend(); });
    };
    ViewerItemAdapterRecordElement.prototype.resume = function () {
        this.processMapRecordElement(function (adapter) { return adapter.resume(); });
    };
    ViewerItemAdapterRecordElement.prototype.dispose = function () {
        this.processMapRecordElement(function (adapter) { return adapter.dispose(); });
        this.storage = null;
    };
    ViewerItemAdapterRecordElement.prototype.processMapRecordElement = function (handler) {
        if (!this.storage)
            return;
        if (this.storage instanceof _item_viewer_adapter_base_1.ItemViewerAdapterBase) {
            handler(this.storage);
        }
        else {
            this.storage.captionItem && handler(this.storage.captionItem);
            this.storage.contentItem && handler(this.storage.contentItem);
        }
    };
    return ViewerItemAdapterRecordElement;
}());
var ViewerItemAdaptersManager = (function (_super) {
    __extends(ViewerItemAdaptersManager, _super);
    function ViewerItemAdaptersManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.viewerItemAdaptersMap = {};
        _this.modelSubscriberDict = [
            { type: range_filter_item_1.RangeFilterItem, ctor: _predefined_periods_item_viewer_adapter_1.PredefinedPeriodsItemViewerAdapter },
            { type: date_filter_item_1.DateFilterItem, ctor: _predefined_periods_item_viewer_adapter_1.PredefinedPeriodsItemViewerAdapter },
            { type: grid_item_1.GridItem, ctor: _grid_item_viewer_adapter_1.GridItemViewerAdapter },
            { type: pivot_item_1.PivotItem, ctor: _pivot_item_viewer_adapter_1.PivotItemViewerAdapter },
            { type: map_item_1.MapItem, ctor: _map_item_viewer_adapter_1.MapItemViewerAdapter },
            { type: data_dashboard_item_1.DataDashboardItem, ctor: _data_item_viewer_adapter_1.DataItemViewerAdapter },
            { type: dashboard_item_1.DashboardItem, ctor: _item_viewer_adapter_base_1.ItemViewerAdapterBase }
        ];
        _this.createAdapterCore = function (dashboardItem, element, context, localContext, beforeRender) {
            if (beforeRender === void 0) { beforeRender = function (item) { }; }
            var modelSubscriberCtor = null;
            for (var i = 0; i < _this.modelSubscriberDict.length; i++) {
                if (dashboardItem instanceof _this.modelSubscriberDict[i].type) {
                    modelSubscriberCtor = _this.modelSubscriberDict[i].ctor;
                    break;
                }
            }
            if (!modelSubscriberCtor) {
                modelSubscriberCtor = _this.modelSubscriberDict[_this.modelSubscriberDict.length - 1].ctor;
            }
            return (new modelSubscriberCtor(dashboardItem, element, context, localContext, beforeRender, function () { return _this.releaseAdapter(dashboardItem, localContext && localContext.itemCreatingType === 'secondary'); }));
        };
        return _this;
    }
    ViewerItemAdaptersManager.prototype.releaseAdapter = function (dashboardItem, isSecondaryAdapter) {
        if (!dashboardItem || !dashboardItem.componentName())
            return;
        var mapRecord = this.viewerItemAdaptersMap[dashboardItem.componentName()];
        if (mapRecord && isSecondaryAdapter) {
            if (mapRecord.secondary) {
                mapRecord.secondary = null;
                mapRecord.primary && mapRecord.primary.resume();
            }
        }
        else {
            delete this.viewerItemAdaptersMap[dashboardItem.componentName()];
        }
    };
    ViewerItemAdaptersManager.prototype.create = function (dashboardItem, element, context, localContext, beforeRender) {
        if (beforeRender === void 0) { beforeRender = function (item) { }; }
        var itemComponentName = dashboardItem.componentName();
        this.viewerItemAdaptersMap[itemComponentName] = this.viewerItemAdaptersMap[itemComponentName] || {};
        var visualMode = localContext && localContext.visualMode && localContext.visualMode() || 'full';
        var newAdapter = this.createAdapterCore(dashboardItem, element, context, localContext, beforeRender);
        var mapRecord = this.viewerItemAdaptersMap[itemComponentName];
        if (localContext && localContext.itemCreatingType === 'secondary') {
            if (visualMode !== 'full')
                throw new Error("Try to create a secondary dashboard item with non-full visual mode");
            mapRecord.primary && mapRecord.primary.suspend();
            mapRecord.secondary = new ViewerItemAdapterRecordElement(newAdapter, visualMode);
        }
        else {
            if (!mapRecord.primary)
                mapRecord.primary = new ViewerItemAdapterRecordElement(newAdapter, visualMode);
            else
                mapRecord.primary.setAdapter(newAdapter, visualMode);
        }
        return newAdapter;
    };
    ViewerItemAdaptersManager.prototype.dispose = function () {
        var _this = this;
        Object.keys(this.viewerItemAdaptersMap).forEach(function (componentName) {
            var mapRecord = _this.viewerItemAdaptersMap[componentName];
            if (mapRecord) {
                mapRecord.primary && mapRecord.primary.dispose();
                mapRecord.secondary && mapRecord.secondary.dispose();
            }
            delete _this.viewerItemAdaptersMap[componentName];
        });
        _super.prototype.dispose.call(this);
    };
    return ViewerItemAdaptersManager;
}(disposable_object_1.DisposableObject));
exports.ViewerItemAdaptersManager = ViewerItemAdaptersManager;
