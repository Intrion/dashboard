/**
* DevExpress Dashboard (_grid-item-viewer-adapter.js)
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
var ko = require("knockout");
var GridItemViewerAdapter = (function (_super) {
    __extends(GridItemViewerAdapter, _super);
    function GridItemViewerAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GridItemViewerAdapter.prototype.attachToModel = function (viewerItem, dataDashboardItem) {
        var _this = this;
        _super.prototype.attachToModel.call(this, viewerItem, dataDashboardItem);
        viewerItem.clientStateUpdate.add(dataDashboardItem._processItemClientStateUpdate);
        viewerItem.gridWidthOptionsChanged = function (state) {
            if (_this.context.isDesignMode()) {
                dataDashboardItem._setColumnWidthOptions(state);
            }
        };
        this.toDispose(ko.computed(function () {
            var gridItemViewer = viewerItem;
            gridItemViewer.resetClientStateOnUpdate = _this.context.isDesignMode();
            gridItemViewer.manualyResetClientState = !_this.context.isDesignMode();
        }));
    };
    GridItemViewerAdapter.prototype.dettachFromModel = function (viewerItem, dataDashboardItem) {
        _super.prototype.dettachFromModel.call(this, viewerItem, dataDashboardItem);
        viewerItem.gridWidthOptionsChanged = null;
        viewerItem.clientStateUpdate.remove(dataDashboardItem._processItemClientStateUpdate);
    };
    return GridItemViewerAdapter;
}(_data_item_viewer_adapter_1.DataItemViewerAdapter));
exports.GridItemViewerAdapter = GridItemViewerAdapter;
