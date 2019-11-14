/**
* DevExpress Dashboard (_predefined-periods-item-viewer-adapter.js)
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
var PredefinedPeriodsItemViewerAdapter = (function (_super) {
    __extends(PredefinedPeriodsItemViewerAdapter, _super);
    function PredefinedPeriodsItemViewerAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PredefinedPeriodsItemViewerAdapter.prototype.attachToModel = function (viewerItem, rangeFilterItem) {
        _super.prototype.attachToModel.call(this, viewerItem, rangeFilterItem);
        this.toDispose(rangeFilterItem.currentSelectedDateTimePeriodName.subscribe(function (newValue) {
            if (newValue) {
                viewerItem._setPredefinedRange(newValue);
            }
            else {
                viewerItem.clearSelection();
            }
        }));
        viewerItem.predefinedRangeChanged = function (newRange) {
            rangeFilterItem.currentSelectedDateTimePeriodName(newRange);
        };
    };
    return PredefinedPeriodsItemViewerAdapter;
}(_data_item_viewer_adapter_1.DataItemViewerAdapter));
exports.PredefinedPeriodsItemViewerAdapter = PredefinedPeriodsItemViewerAdapter;
