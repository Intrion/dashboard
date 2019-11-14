/**
* DevExpress Dashboard (_map-item-viewer-adapter.js)
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
var _data_item_viewer_adapter_1 = require("./_data-item-viewer-adapter");
var _geo_point_map_item_base_1 = require("../../../viewer-parts/viewer-items/_geo-point-map-item-base");
var MapItemViewerAdapter = (function (_super) {
    __extends(MapItemViewerAdapter, _super);
    function MapItemViewerAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapItemViewerAdapter.prototype.updateItemContent = function (content) {
        _super.prototype.updateItemContent.call(this, content);
        if (this.dashboardItem._clientState()) {
            this.item.updateClientState(this.dashboardItem._clientState());
        }
    };
    MapItemViewerAdapter.prototype.createDashboardViewerItem = function (element, content, dashboardItem) {
        var viewerItem = _super.prototype.createDashboardViewerItem.call(this, element, content, dashboardItem);
        viewerItem.isInitialExtentChanged = dashboardItem._initialExtentChanged();
        if (dashboardItem._clientState()) {
            viewerItem.updateClientState(this.dashboardItem._clientState());
        }
        viewerItem.initialDataRequest();
        if (viewerItem instanceof _geo_point_map_item_base_1.geoPointMapItemBase) {
            viewerItem.forceUpdateClientState();
        }
        return viewerItem;
    };
    MapItemViewerAdapter.prototype.attachToModel = function (viewerItem, dataDashboardItem) {
        var _this = this;
        _super.prototype.attachToModel.call(this, viewerItem, dataDashboardItem);
        viewerItem.clientStateUpdate.add(dataDashboardItem._processItemClientStateUpdate);
        viewerItem.dataRequest.add(dataDashboardItem._processDataRequest);
        this.modelSubscriptions.push(dataDashboardItem._initialExtentChanged.subscribe(function (newValue) {
            viewerItem.isInitialExtentChanged = newValue;
            if (!viewerItem.isInitialExtentChanged) {
                if (_this._isDesignMode) {
                    var fullViewport = viewerItem.options.FullViewport;
                    viewerItem.onInitialExtent(fullViewport);
                    dataDashboardItem.viewport._set(fullViewport, true);
                }
                else {
                    viewerItem.onInitialExtent();
                }
            }
            viewerItem.updateCaptionToolbar();
        }));
        viewerItem.viewportChangedCallback = function (viewport) {
            if (_this._isDesignMode) {
                dataDashboardItem.viewport._set(viewport, false);
            }
        };
        viewerItem.initialExtentChanged = function (changed) {
            dataDashboardItem._initialExtentChanged(changed);
        };
    };
    MapItemViewerAdapter.prototype.dettachFromModel = function (viewerItem, dataDashboardItem) {
        _super.prototype.dettachFromModel.call(this, viewerItem, dataDashboardItem);
        viewerItem.viewportChangedCallback = null;
        viewerItem.initialExtentChanged = null;
        viewerItem.clientStateUpdate.remove(dataDashboardItem._processItemClientStateUpdate);
        viewerItem.dataRequest.remove(dataDashboardItem._processDataRequest);
    };
    MapItemViewerAdapter.prototype.resume = function () {
        _super.prototype.resume.call(this);
        this.item.initialDataRequest();
    };
    return MapItemViewerAdapter;
}(_data_item_viewer_adapter_1.DataItemViewerAdapter));
exports.MapItemViewerAdapter = MapItemViewerAdapter;
