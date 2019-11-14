/**
* DevExpress Dashboard (_kpi-item.js)
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
var _widget_viewer_item_1 = require("./_widget-viewer-item");
var _utils_1 = require("../../data/_utils");
var $ = require("jquery");
var kpiItem = (function (_super) {
    __extends(kpiItem, _super);
    function kpiItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    kpiItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var result = _super.prototype.renderContentUnsafe.call(this, element, changeExisting, afterRenderCallback);
        element.classList.add('dx-dashboard-widget-viewer-item');
        return result;
    };
    kpiItem.prototype._showTitle = function () {
        return true;
    };
    kpiItem.prototype._getElementsName = function () {
    };
    kpiItem.prototype.selectTupleUnsafe = function (tuple, state) {
        $.each(this.widgetsViewer.itemsList, function (index, viewer) {
            if (_utils_1.checkValuesAreEqual(viewer.tag, tuple[0].Value)) {
                if (state) {
                    viewer.select();
                }
                else {
                    viewer.clearSelection();
                }
            }
        });
    };
    kpiItem.prototype._setSelectionUnsafe = function (values) {
        _super.prototype._setSelectionUnsafe.call(this, values);
        this.clearSelection();
        this._applySelection();
    };
    kpiItem.prototype._getDataPoint = function (element) {
        var that = this, viewModel = that.options.ViewModel, elementTag = element.tag, titleValues = elementTag ? elementTag : [], elementIndex = elementTag ? 0 : element.index, elViewModel = viewModel[that._getElementsName()][elementIndex];
        return {
            getValues: function (name) {
                return (name == 'Default') ? titleValues : null;
            },
            getDeltaIds: function () {
                return elViewModel.DataItemType === 'Delta' ? [elViewModel.ID] : [];
            },
            getMeasureIds: function () {
                return elViewModel.DataItemType === 'Measure' ? [elViewModel.ID] : [];
                ;
            },
            getSelectionValues: function () {
                return elementTag;
            }
        };
    };
    kpiItem.prototype._isMultiDataSupported = function () {
        return true;
    };
    kpiItem.prototype._setSourceItemProperties = function (sourceItem, elementModel, props) {
        var selectionValues = props.getSelectionValues(), serverSelection = this.options.SelectedValues, currentLine, isSelected = function () {
            if (serverSelection && selectionValues) {
                for (var i = 0; i < serverSelection.length; i++) {
                    currentLine = serverSelection[i];
                    if (_utils_1.checkValuesAreEqual(selectionValues, currentLine))
                        return true;
                }
            }
            return false;
        };
        _utils_1.extend(sourceItem, this._configureHover(selectionValues));
        sourceItem.tag = selectionValues;
        sourceItem.isSelected = isSelected();
    };
    kpiItem.prototype._applySelectionUnsafe = function () {
        var that = this;
        that.getSelectedTuples().forEach(function (tuple) { return that.selectTuple(tuple, true); });
    };
    return kpiItem;
}(_widget_viewer_item_1.widgetViewerItem));
exports.kpiItem = kpiItem;
