/**
* DevExpress Dashboard (_widget-viewer-item.js)
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
var _base_item_1 = require("./_base-item");
var _widgets_viewer_1 = require("../widgets/widgets-viewer/_widgets-viewer");
var _utils_1 = require("../../data/_utils");
var _dashboard_viewer_constants_1 = require("../viewer/_dashboard-viewer-constants");
var $ = require("jquery");
var widgetViewerItem = (function (_super) {
    __extends(widgetViewerItem, _super);
    function widgetViewerItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    widgetViewerItem.prototype._clearSelectionUnsafe = function () {
        this.widgetsViewer.clearSelections();
    };
    widgetViewerItem.prototype.getInfoUnsafe = function () {
        return _utils_1.deepExtend(_super.prototype.getInfoUnsafe.call(this), this.widgetsViewer.getSizeParams());
    };
    widgetViewerItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var that = this, options = that._getWidgetViewerOptions(), isInAsyncRendering = true;
        options.viewer.onAllItemsRenderComplete = function () {
            if (that.widgetsViewer) {
                afterRenderCallback();
            }
            else {
                isInAsyncRendering = false;
            }
        };
        if (changeExisting && that.widgetsViewer) {
            that.widgetsViewer.option(options);
        }
        else {
            that.widgetsViewer = that.createWidgetViewer(element, options);
        }
        return isInAsyncRendering;
    };
    widgetViewerItem.prototype.createWidgetViewer = function (element, options) {
        return new _widgets_viewer_1.dxWidgetsViewer(element, options);
    };
    widgetViewerItem.prototype._getContainerPositionUnsafe = function () {
        var that = this, position = _super.prototype._getContainerPositionUnsafe.call(this), itemInfo = !that.$headerDiv ? that.getInfo() : undefined, scrollSize = itemInfo && itemInfo.scroll && itemInfo.scroll.vertical ? itemInfo.scroll.size : 0;
        position.offsetX -= scrollSize;
        return position;
    };
    widgetViewerItem.prototype._getSpecificWidgetViewerOptions = function () {
        return {
            itemOptions: {
                encodeHtml: this._isEncodeHtml()
            }
        };
    };
    widgetViewerItem.prototype._getWidgetType = function () {
        return;
    };
    widgetViewerItem.prototype._isHoverEnabled = function () {
        return this._selectionMode() !== 'none';
    };
    widgetViewerItem.prototype._configureHover = function (selectionValues) {
        var hoverEnabled = selectionValues !== null && this._isHoverEnabled() && _utils_1.allowSelectValue(selectionValues);
        return {
            hoverEnabled: hoverEnabled,
            cursor: hoverEnabled ? "pointer" : "default"
        };
    };
    widgetViewerItem.prototype._getWidgetViewerOptions = function () {
        var viewModel = this.options.ViewModel, contentDescription = viewModel ? viewModel.ContentDescription : undefined, commonOptions = {
            viewer: {
                redrawOnResize: false,
                useNativeScrolling: _dashboard_viewer_constants_1.USE_NATIVE_SCROLLING
            }
        };
        if (this.dataController)
            this.dataController.setSourceItemProperties = $.proxy(this._setSourceItemProperties, this);
        commonOptions.dataSource = this._getDataSource();
        commonOptions.viewer.onclick = this._getOnClickHandler();
        commonOptions.viewer.onhover = this._getOnHoverHandler();
        commonOptions.viewer.widgetType = this._getWidgetType();
        commonOptions.viewer.method = contentDescription ? this._convertContentArrangementMode(contentDescription.ArrangementMode) : 'auto';
        commonOptions.viewer.count = contentDescription ? contentDescription.LineCount : 1;
        commonOptions.viewer.supportAnimation = this._supportAnimation();
        var resultOptions = _utils_1.deepExtend(commonOptions, this._getSpecificWidgetViewerOptions());
        this._ensureOptions(resultOptions);
        return resultOptions;
    };
    widgetViewerItem.prototype._supportAnimation = function () {
        return false;
    };
    widgetViewerItem.prototype._getDataSource = function () {
        if (this.dataController)
            return this.dataController.getDataSource();
    };
    widgetViewerItem.prototype._getElementInteractionValue = function (element, viewModel) {
        return element.tag;
    };
    widgetViewerItem.prototype._getOnClickHandler = function () {
        var that = this;
        return function (e) {
            that._raiseItemClick(e.item);
        };
    };
    widgetViewerItem.prototype._getOnHoverHandler = function () {
        var that = this;
        return function (e) {
            that._raiseItemHover(e.item, e.state);
        };
    };
    widgetViewerItem.prototype._convertContentArrangementMode = function (contentArrangementMode) {
        switch (contentArrangementMode) {
            case 'FixedColumnCount':
                return "column";
            case 'FixedRowCount':
                return "row";
            default:
                return "auto";
        }
    };
    widgetViewerItem.prototype._resizeUnsafe = function () {
        _super.prototype._resizeUnsafe.call(this);
        this.widgetsViewer.redraw();
    };
    widgetViewerItem.prototype.updateContentStateUnsafe = function () {
        var that = this;
        $.each(this.widgetsViewer.itemsList, function (index, viewer) {
            viewer.setHoverEnabledState(that._getCustomHoverEnabled());
        });
    };
    widgetViewerItem.prototype._setSourceItemProperties = function (sourceItem, elementModel, props) {
    };
    widgetViewerItem.prototype._isMultiDataSupported = function () {
        return true;
    };
    widgetViewerItem.prototype._ensureOptions = function (options) {
    };
    return widgetViewerItem;
}(_base_item_1.baseItem));
exports.widgetViewerItem = widgetViewerItem;
