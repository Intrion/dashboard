/**
* DevExpress Dashboard (_pivot-item-viewer-adapter.js)
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
var PivotItemViewerAdapter = (function (_super) {
    __extends(PivotItemViewerAdapter, _super);
    function PivotItemViewerAdapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expandValueHandler = function (_, params) {
            if (params.isRequestData) {
                _this.dashboardItem._processItemExpandingChange({
                    values: params.values,
                    isColumn: params.isColumn
                });
            }
        };
        _this.expandStateChangedHandler = function () {
            var currentState = _this.item.getExpandingState(!_this.dashboardItem.autoExpandRowGroups(), !_this.dashboardItem.autoExpandColumnGroups());
            _this.dashboardItem._processExpandingStateChanged(currentState);
        };
        return _this;
    }
    PivotItemViewerAdapter.prototype.attachToModel = function (viewerItem, dataDashboardItem) {
        _super.prototype.attachToModel.call(this, viewerItem, dataDashboardItem);
        viewerItem.expandValue.add(this.expandValueHandler);
        viewerItem.expandStateChanged.add(this.expandStateChangedHandler);
    };
    PivotItemViewerAdapter.prototype.dettachFromModel = function (viewerItem, dataDashboardItem) {
        viewerItem.expandValue.remove(this.expandValueHandler);
        viewerItem.expandStateChanged.remove(this.expandStateChangedHandler);
        _super.prototype.dettachFromModel.call(this, viewerItem, dataDashboardItem);
    };
    return PivotItemViewerAdapter;
}(_data_item_viewer_adapter_1.DataItemViewerAdapter));
exports.PivotItemViewerAdapter = PivotItemViewerAdapter;
