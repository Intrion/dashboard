﻿/**
* DevExpress Dashboard (_widgets-viewer.js)
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
var _render_helper_1 = require("../_render-helper");
var _css_class_names_1 = require("./_css-class-names");
var _card_item_1 = require("./cards/_card-item");
var _widget_item_1 = require("./_widget-item");
var _dashboard_viewer_constants_1 = require("../../viewer/_dashboard-viewer-constants");
var _arrangement_info_1 = require("./_arrangement-info");
var _utils_1 = require("../../../data/_utils");
var $ = require("jquery");
var dom_component_1 = require("devextreme/core/dom_component");
var viewerCount = 0;
var dxWidgetsViewer = (function (_super) {
    __extends(dxWidgetsViewer, _super);
    function dxWidgetsViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dxWidgetsViewer.prototype._getDefaultOptions = function () {
        var baseOptions = _super.prototype['_getDefaultOptions'].call(this);
        return __assign({}, baseOptions, { dataSource: [], viewer: {
                hoverEnabled: false,
                overflow: 'auto',
                method: 'auto',
                count: 1,
                widgetType: 'card',
                redrawOnResize: false,
                onclick: null,
                onRenderComplete: null,
                onAllItemsRenderComplete: null,
                bulkTimesRenderingTimeInterval: 200,
                useNativeScrolling: 'auto',
                ignorePadding: false,
                supportAnimation: false
            }, itemOptions: {
                encodeHtml: true,
                minWidth: undefined,
                proportions: undefined,
                ignoreProportions: false,
                itemMargin: {
                    width: 5,
                    height: 5
                },
                borderWidth: 1,
                hasSparkline: false
            } });
    };
    dxWidgetsViewer.prototype._init = function () {
        _super.prototype['_init'].call(this);
        var that = this, viewer = that.option('viewer'), useNativeScrolling = that.option('viewer.useNativeScrolling');
        that._viewerID = viewerCount++;
        that.initContainer();
        that._content = _render_helper_1.RenderHelper.wrapScrollable(that.container, useNativeScrolling, viewer.overflow, 'both');
        that._scrollBarWidth = that._getScrollBarWidth();
        that._updateByOptions();
        that._createItems();
        that.totalMarginsAndBorders = that._calcTotalMarginsAndBorders();
    };
    dxWidgetsViewer.prototype.initContainer = function () {
        this.container = document.createElement('div');
        _utils_1.$unwrap(this.element()).appendChild(this.container);
        this.container.classList.add(_css_class_names_1.cssClassNames.widgetsViewerScrollableHolder);
    };
    dxWidgetsViewer.prototype.clear = function () {
        this.container.parentElement.removeChild(this.container);
    };
    dxWidgetsViewer.prototype._dispose = function () {
        var that = this;
        clearTimeout(that._drawTimer);
        that._drawTimer = null;
        (that.itemsList || []).forEach(function (item) { return item.dispose(); });
        that._content = null;
        that._scrollBarWidth = null;
        ;
        that._widgetType = null;
        that.itemsList = null;
        that.totalMarginsAndBorders = null;
        that._resizeHandler = null;
        if (that._styleTag) {
            that._styleTag.parentElement.removeChild(that._styleTag);
            that._styleTag = null;
        }
    };
    dxWidgetsViewer.prototype._getScrollable = function () {
        return _render_helper_1.RenderHelper.getScrollable(this.container);
    };
    dxWidgetsViewer.prototype._updateScrollable = function () {
        _render_helper_1.RenderHelper.updateScrollable(this.container);
    };
    dxWidgetsViewer.prototype._scrollTo = function (left, top) {
        var that = this, scrollable = this._getScrollable();
        if (scrollable) {
            scrollable.scrollTo({ x: left, y: top });
        }
        else {
            $(that._rootContent()).scrollLeft(left);
            $(that._rootContent()).scrollTop(top);
        }
    };
    dxWidgetsViewer.prototype._scrollOffset = function () {
        var that = this, scrollable = this._getScrollable();
        if (scrollable) {
            return scrollable.scrollOffset();
        }
        else {
            return {
                left: $(that._rootContent()).scrollLeft(),
                top: $(that._rootContent()).scrollTop()
            };
        }
    };
    dxWidgetsViewer.prototype._rootContent = function () {
        return this._content;
    };
    dxWidgetsViewer.prototype._parentHeight = function () {
        var offset = 0;
        return $(this.container).height() - offset;
    };
    dxWidgetsViewer.prototype._parentWidth = function () {
        var offset = 0;
        return $(this.container).width() - offset;
    };
    dxWidgetsViewer.prototype._parentWidthWithoutScroll = function () {
        var that = this;
        return that._parentWidth() - that._scrollBarWidth * that._hasVerticalScroll;
    };
    dxWidgetsViewer.prototype._parentHeightWithoutScroll = function () {
        var that = this;
        return that._parentHeight() - that._scrollBarWidth * that._hasHorizontalScroll;
    };
    dxWidgetsViewer.prototype._getResizeHandler = function () {
        var that = this;
        return function () {
            that.redraw();
        };
    };
    dxWidgetsViewer.prototype._updateByOptions = function () {
        var viewerOptions = this.option('viewer'), itemOptions = this.option('itemOptions'), proportions = itemOptions.proportions, width = itemOptions.minWidth;
        this._widgetType = viewerOptions.widgetType.toLowerCase();
        this.align = viewerOptions.align;
        if (this._widgetType === 'card') {
            this.align = this.align || 'left';
            this.minItemWidth = this.curItemWidth = width || 180;
            this._itemProportions = proportions || (itemOptions.hasSparkline ? 0.625 : 0.5);
        }
        else {
            this.align = this.align || 'center';
            this.minItemWidth = this.curItemWidth = width || 200;
            this._itemProportions = proportions || 1;
            this._needVerticalCentering = true;
        }
        this.minItemHeight = this.curItemHeight = this._itemProportions * this.minItemWidth;
    };
    dxWidgetsViewer.prototype.getSizeParams = function () {
        var that = this, scrollOffset = that._scrollOffset(), scrollableContent = that.container.querySelector('.' + _css_class_names_1.cssClassNames.widgetViewerTable), itemMargin = that.option('itemOptions.itemMargin');
        return {
            virtualSize: {
                width: $(scrollableContent).outerWidth(),
                height: $(scrollableContent).outerHeight()
            },
            scroll: {
                top: scrollOffset.top,
                left: scrollOffset.left,
                size: that._scrollBarWidth,
                horizontal: that._hasHorizontalScroll === 1,
                vertical: that._hasVerticalScroll === 1
            },
            itemMargin: {
                width: itemMargin.width,
                height: itemMargin.height
            }
        };
    };
    dxWidgetsViewer.prototype.getSelectedItems = function () {
        return this.itemsList.filter(function (item) { return item._isSelected; });
    };
    dxWidgetsViewer.prototype.clearSelections = function () {
        this.itemsList.forEach(function (item) { return item.clearSelection(); });
    };
    dxWidgetsViewer.prototype._createItems = function () {
        var that = this, data = that.option('dataSource'), itemOptions = that.option('itemOptions'), rootElement = that._rootContent();
        that.itemsList = [];
        data.forEach(function (dataItem) {
            itemOptions.widgetType = that._widgetType;
            itemOptions.hoverEnabled = dataItem.hoverEnabled;
            itemOptions.isSelected = dataItem.isSelected;
            itemOptions.cursor = dataItem.cursor;
            itemOptions.tag = dataItem.tag;
            itemOptions.parentRootElement = rootElement;
            that.itemsList.push((that._widgetType == 'card') ? new _card_item_1.CardItem(dataItem, itemOptions) : new _widget_item_1.WidgetItem(dataItem, itemOptions));
        });
        that._firstDraw = true;
        delete that._viewerParams;
    };
    dxWidgetsViewer.prototype._optionChanged = function (args) {
        switch (args.name) {
            case 'viewer':
            case 'itemOptions':
                this._updateByOptions();
            case 'dataSource':
                this._invalidate();
                break;
            default:
                _super.prototype['_optionChanged'].call(this, args);
                break;
        }
        _super.prototype['_optionChanged'].call(this, args);
    };
    dxWidgetsViewer.prototype._refresh = function () {
        this.curItemWidth = this.minItemWidth;
        this.curItemHeight = this.minItemHeight;
        this._createItems();
        _super.prototype['_refresh'].call(this);
    };
    dxWidgetsViewer.prototype._invalidate = function () {
        _super.prototype['_invalidate'].call(this);
    };
    dxWidgetsViewer.prototype._calcTotalMarginsAndBorders = function () {
        var itemOptions = this.option('itemOptions'), borderWidth = itemOptions.borderWidth || 0;
        return {
            width: 2 * (itemOptions.itemMargin.width + borderWidth),
            height: 2 * (itemOptions.itemMargin.height + borderWidth)
        };
    };
    dxWidgetsViewer.prototype._render = function (drawOptions) {
        var that = this, viewer = that.option('viewer'), onRenderComplete = viewer.onRenderComplete, method = viewer.method.toLowerCase(), itemCount = viewer.count, clickHandler = viewer.onclick, hoverHandler = viewer.onhover, supportAnimation = viewer.supportAnimation, table, contentElement = that._rootContent(), overflowX = contentElement.style.overflowX, overflowY = contentElement.style.overflowY, parentRoot = contentElement.parentElement, overflowXParentRoot = parentRoot.style.overflowX, overflowYParentRoot = parentRoot.style.overflowY, scrollOffset = that._scrollOffset(), animationEnabled = supportAnimation && !contentElement.innerHTML && that.itemsList.length <= _dashboard_viewer_constants_1.ELEMENTS_COUNT_ANIMATION_THRESHOLD;
        clearTimeout(that._drawTimer);
        table = that._drawItems(method, itemCount, animationEnabled);
        contentElement.innerHTML = '';
        contentElement.style.overflow = 'hidden';
        parentRoot.style.overflow = 'hidden';
        if (table) {
            that.innerContainer = document.createElement('div');
            that.innerContainer.classList.add(_css_class_names_1.cssClassNames.widgetViewerContainer);
            that.innerContainer.style.textAlign = that.align;
            that.innerContainer.style.padding = '0';
            that.innerContainer.style.margin = '0';
            contentElement.appendChild(that.innerContainer);
            that.innerContainer.appendChild(table);
            that.itemsList.forEach(function (item) {
                item.finishRender({
                    clickHandler: clickHandler, hoverHandler: hoverHandler, drawOptions: drawOptions
                });
            });
            if (that._needVerticalCentering && that.innerContainer && that._viewerParams.direction === 'Horizontal') {
                that._verticalCentering(table);
            }
        }
        contentElement.style.overflowX = overflowX;
        contentElement.style.overflowY = overflowY;
        parentRoot.style.overflowX = overflowXParentRoot;
        parentRoot.style.overflowY = overflowYParentRoot;
        that._updateScrollable();
        that._scrollTo(scrollOffset.left, scrollOffset.top);
        if (onRenderComplete) {
            onRenderComplete.call(null);
        }
    };
    dxWidgetsViewer.prototype._verticalCentering = function (table) {
        var that = this, differenceTop = that._parentHeight() - $(that.container.querySelector('.' + _css_class_names_1.cssClassNames.widgetViewerContainer)).height();
        if (differenceTop > 0) {
            that.innerContainer.style.paddingTop = ~~((differenceTop) / 2) + 'px';
        }
        else {
            that.innerContainer.style.paddingTop = '0px';
        }
    };
    dxWidgetsViewer.prototype.redraw = function () {
        this._render();
    };
    dxWidgetsViewer.prototype._calcItemIndex = function (i, j, direction, rowCount, columnCount) {
        return direction == _arrangement_info_1.positioningDirection.Horizontal ?
            i * columnCount + j : j * rowCount + i;
    };
    dxWidgetsViewer.prototype._calcVisibleRow = function (cardHeight) {
        var height = this._parentHeight();
        return Math.ceil(height / cardHeight);
    };
    dxWidgetsViewer.prototype._calcVisibleColumn = function (cardWidth) {
        var width = this._parentWidth();
        return Math.ceil(width / cardWidth);
    };
    dxWidgetsViewer.prototype._getPartArray = function (array, count, indexOfPart) {
        var result = [], i = 0, beg = count * indexOfPart;
        for (i = beg; i < beg + count; i++) {
            result.push(array[i]);
        }
        return result;
    };
    dxWidgetsViewer.prototype._createTable = function (arrangementInfo, enableAnimation) {
        var that = this, tableStruct, i, j, indexItem, col, row, item, isHorizontal = arrangementInfo.direction == _arrangement_info_1.positioningDirection.Horizontal, itemMargin = that.option('itemOptions.itemMargin'), ignorePadding = that.option('viewer.ignorePadding'), columnCount = isHorizontal ? arrangementInfo.itemsOnRowCount : arrangementInfo.itemsOnColumnCount, rowCount = isHorizontal ? arrangementInfo.itemsOnColumnCount : arrangementInfo.itemsOnRowCount, action, itemsListLen = that.itemsList.length, tableWidth, widthMarginsAndBorders = that.totalMarginsAndBorders.width, heightMarginsAndBorders = that.totalMarginsAndBorders.height, parentWidthWithoutScroll = that._parentWidthWithoutScroll(), parentHeightWithoutScroll = that._parentHeightWithoutScroll(), rowHeight, rowWidth, cellHeight, cellWidth, curItemWidth = that.curItemWidth, curItemHeight = that.curItemHeight, curItemWidthWithoutWidthMargins = curItemWidth - 2 * itemMargin.width, curItemHeightWithoutHeightMargins = curItemHeight - 2 * itemMargin.height, curItem;
        if (rowCount <= 0) {
            return undefined;
        }
        tableStruct = document.createElement('div');
        tableStruct.classList.add(_css_class_names_1.cssClassNames.widgetViewerTable);
        tableStruct.classList.add(_css_class_names_1.cssClassNames.widgetViewerIdPrefix + that._viewerID);
        tableStruct.style.overflow = 'hidden';
        tableStruct.style.marginLeft = '0px';
        tableStruct.style.marginRight = '0px';
        if (that._widgetType !== 'card') {
            cellWidth = ~~(Math.max((parentWidthWithoutScroll - columnCount * widthMarginsAndBorders) / columnCount, curItemWidthWithoutWidthMargins));
            cellHeight = !isHorizontal ? ~~(Math.max((parentHeightWithoutScroll - rowCount * heightMarginsAndBorders) / rowCount, curItemHeightWithoutHeightMargins)) : curItemHeightWithoutHeightMargins;
        }
        else {
            cellWidth = curItemWidthWithoutWidthMargins;
            cellHeight = curItemHeightWithoutHeightMargins;
        }
        rowWidth = (cellWidth + 2 * itemMargin.width) * columnCount;
        if (ignorePadding) {
            rowWidth -= 2 * itemMargin.width;
        }
        tableWidth = rowWidth;
        tableStruct.style.height = '100%';
        tableStruct.style.width = tableWidth + 'px';
        for (i = 0; i < rowCount; i++) {
            rowHeight = curItemHeight;
            if (ignorePadding) {
                if (i === 0 && rowCount === 1) {
                    rowHeight -= 2 * itemMargin.height;
                }
                else if (i === 0 || i === rowCount - 1) {
                    rowHeight -= itemMargin.height;
                }
            }
            row = document.createElement('div');
            row.classList.add(_css_class_names_1.cssClassNames.widgetViewerRow);
            row.style.clear = 'both';
            row.style.padding = '0px';
            row.style.margin = '0px';
            row.style.height = rowHeight + 'px';
            row.style.width = rowWidth + 'px';
            for (j = 0; j < columnCount; j++) {
                item = null;
                col = document.createElement('div');
                col.classList.add(_css_class_names_1.cssClassNames.widgetViewerCell);
                col.style.paddingLeft = ignorePadding && (j === 0) ? '0' : itemMargin.width + 'px';
                col.style.paddingRight = ignorePadding && (j === columnCount - 1) ? '0' : itemMargin.width + 'px';
                col.style.paddingTop = ignorePadding && (i === 0) ? '0' : itemMargin.height + 'px';
                col.style.paddingBottom = ignorePadding && (i === rowCount - 1) ? '0' : itemMargin.height + 'px';
                col.style.margin = '0px';
                col.style.width = cellWidth + 'px';
                col.style.height = cellHeight + 'px';
                col.style.cssFloat = 'left';
                indexItem = that._calcItemIndex(i, j, arrangementInfo.direction, rowCount, columnCount);
                if (indexItem < itemsListLen) {
                    curItem = that.itemsList[indexItem];
                    if (that._firstDraw) {
                        item = curItem.initDraw(curItemWidth - widthMarginsAndBorders, curItemHeight - heightMarginsAndBorders, indexItem);
                        action = 'draw';
                    }
                    else {
                        curItem.detachItem();
                        item = curItem.getItemContainer();
                        action = 'resize';
                    }
                    if (item) {
                        col.appendChild(item);
                    }
                }
                row.appendChild(col);
            }
            tableStruct.appendChild(row);
        }
        that._processBatchItems(action, 0, enableAnimation);
        that._firstDraw = false;
        return tableStruct;
    };
    dxWidgetsViewer.prototype._getItemProportions = function () {
        return this._itemProportions;
    };
    dxWidgetsViewer.prototype._calcViewerParams = function (parentWidth, parentHeight, itemCount, method) {
        var that = this, calcRes = that._calculateArrangementInfo(parentWidth, parentHeight, itemCount, method), getRowCount = function () {
            var rowCount = undefined;
            if (calcRes.direction === _arrangement_info_1.positioningDirection.Vertical) {
                rowCount = calcRes.itemsOnRowCount;
            }
            if (calcRes.direction === _arrangement_info_1.positioningDirection.Horizontal) {
                rowCount = calcRes.itemsOnColumnCount;
            }
            return rowCount;
        }, getColumnCount = function () {
            var colCount = undefined;
            if (calcRes.direction === _arrangement_info_1.positioningDirection.Vertical) {
                colCount = calcRes.itemsOnColumnCount;
            }
            if (calcRes.direction === _arrangement_info_1.positioningDirection.Horizontal) {
                colCount = calcRes.itemsOnRowCount;
            }
            return colCount;
        }, getWidthByHeight = function (height) {
            var newItemWidth = ~~(height / (that._getItemProportions() * getRowCount()));
            return newWidth = newItemWidth * getColumnCount();
        }, getHeightByWidth = function (width) {
            var newItemHeight = ~~(width * that._getItemProportions() / getColumnCount());
            return newItemHeight * getRowCount();
        };
        that._hasHorizontalScroll = 0;
        that._hasVerticalScroll = 0;
        if (getColumnCount() * calcRes.getWidth() > parentWidth) {
            calcRes = that._calculateArrangementInfo(parentWidth, parentHeight - that._scrollBarWidth, itemCount, method);
            if (calcRes.direction === _arrangement_info_1.positioningDirection.Vertical && (getColumnCount() * calcRes.getWidth() < parentWidth)) {
                var newHeight = getHeightByWidth(parentWidth);
                if (newHeight <= parentHeight)
                    return that._calculateArrangementInfo(parentWidth, newHeight, itemCount, method);
            }
            that._hasHorizontalScroll = 1;
        }
        if (getRowCount() * calcRes.getHeight() > parentHeight) {
            calcRes = that._calculateArrangementInfo(parentWidth - that._scrollBarWidth, parentHeight, itemCount, method);
            if (calcRes.direction === _arrangement_info_1.positioningDirection.Horizontal && (getRowCount() * calcRes.getHeight() < parentHeight)) {
                var newWidth = getWidthByHeight(parentHeight);
                if (newWidth <= parentWidth)
                    return that._calculateArrangementInfo(newWidth, parentHeight, itemCount, method);
            }
            that._hasVerticalScroll = 1;
        }
        return calcRes;
    };
    dxWidgetsViewer.prototype._createArrangementInfo = function (width, lineCount, itemMinWidth, proportions, direction) {
        var that = this, itemWidth, itemHeight, options = {};
        if (lineCount < 1) {
            lineCount = 1;
        }
        if (that.itemsList.length < lineCount) {
            lineCount = that.itemsList.length;
        }
        itemWidth = width / lineCount;
        itemHeight = ~~(itemWidth * proportions);
        if (itemWidth < itemMinWidth) {
            itemWidth = itemMinWidth;
            itemHeight = ~~(itemWidth * proportions);
        }
        return new _arrangement_info_1.ArrangementInfo(that.itemsList.length, lineCount, itemWidth, itemHeight, that.option('itemOptions').itemMargin, direction, options);
    };
    dxWidgetsViewer.prototype._calculateArrangementInfo = function (width, height, itemCount, method) {
        var that = this, horzInfo, newHorzInfo, nextHorzInfo, vertInfo, itemHeight, itemWidth, countOnWidth, i, itemMargin = that.option('itemOptions').itemMargin, itemProportions = that._getItemProportions(), options = {};
        switch (method) {
            case 'column':
                return that._createArrangementInfo(width, itemCount, that.minItemWidth, itemProportions, _arrangement_info_1.positioningDirection.Horizontal);
            case 'row':
                return that._createArrangementInfo(height, itemCount, that.minItemHeight, 1 / itemProportions, _arrangement_info_1.positioningDirection.Vertical);
            case 'auto':
                if (height < that.minItemHeight && width / that.minItemWidth >= that.itemsList.length) {
                    return new _arrangement_info_1.ArrangementInfo(that.itemsList.length, that.itemsList.length, that.minItemWidth, that.minItemHeight, itemMargin, _arrangement_info_1.positioningDirection.Horizontal, options);
                }
                horzInfo = that._createArrangementInfo(width, ~~(width / that.minItemWidth), that.minItemWidth, itemProportions, _arrangement_info_1.positioningDirection.Horizontal);
                for (i = horzInfo.itemsOnRowCount - 1; i >= 1; i--) {
                    newHorzInfo = that._createArrangementInfo(width, i, that.minItemWidth, itemProportions, _arrangement_info_1.positioningDirection.Horizontal);
                    if (height >= newHorzInfo.itemsOnColumnCount * newHorzInfo.getHeight(false))
                        horzInfo = newHorzInfo;
                    else
                        break;
                }
                nextHorzInfo = that._createArrangementInfo(width, horzInfo.itemsOnRowCount - 1, that.minItemWidth, itemProportions, _arrangement_info_1.positioningDirection.Horizontal);
                vertInfo = that._createArrangementInfo(height, nextHorzInfo.itemsOnColumnCount, that.minItemHeight, 1 / itemProportions, _arrangement_info_1.positioningDirection.Vertical);
                itemHeight = vertInfo.getHeight(false);
                itemWidth = vertInfo.getWidth(false);
                countOnWidth = nextHorzInfo.itemsOnRowCount;
                if (horzInfo.getHeight(false) < itemHeight && width >= countOnWidth * itemWidth)
                    horzInfo = new _arrangement_info_1.ArrangementInfo(that.itemsList.length, countOnWidth, itemWidth, itemHeight, itemMargin, _arrangement_info_1.positioningDirection.Horizontal, options);
                if (height < horzInfo.itemsOnColumnCount * horzInfo.getHeight(false)) {
                    vertInfo = that._createArrangementInfo(height, horzInfo.itemsOnColumnCount, that.minItemHeight, 1 / itemProportions, _arrangement_info_1.positioningDirection.Vertical);
                    itemHeight = vertInfo.getHeight(false);
                    itemWidth = vertInfo.getWidth(false);
                    countOnWidth = vertInfo.itemsOnColumnCount;
                    if (height >= vertInfo.itemsOnRowCount * itemHeight && width >= countOnWidth * itemWidth)
                        horzInfo = new _arrangement_info_1.ArrangementInfo(that.itemsList.length, Math.min(~~(width / itemWidth), that.itemsList.length), itemWidth, itemHeight, itemMargin, _arrangement_info_1.positioningDirection.Horizontal, options);
                }
                return horzInfo;
            default:
                return null;
        }
    };
    dxWidgetsViewer.prototype._drawItems = function (method, itemCount, enableAnimation) {
        method = method || 'auto';
        itemCount = itemCount || 1;
        var that = this, parentWidth = that._parentWidth(), parentHeight = that._parentHeight(), viewerParams = that._viewerParams, itemsList = that.itemsList, ignorePadding = that.option('viewer.ignorePadding'), itemMargin = that.option('itemOptions.itemMargin'), extendedWidth = ignorePadding ? 2 * itemMargin.width : 0, extendedHeight = ignorePadding ? 2 * itemMargin.height : 0;
        if (!itemsList.length) {
            return null;
        }
        viewerParams = that._viewerParams = that._calcViewerParams(parentWidth + extendedWidth, parentHeight + extendedHeight, itemCount, method);
        that.curItemHeight = ~~viewerParams.getHeight();
        that.curItemWidth = ~~viewerParams.getWidth();
        return that._createTable(that._viewerParams, enableAnimation);
    };
    dxWidgetsViewer.prototype.getItemByIndex = function (index) {
        var indexForCheck, result;
        if (_utils_1.type.isNumeric(index)) {
            indexForCheck = Number(index);
            result = this.itemsList[indexForCheck];
        }
        return _utils_1.type.isDefined(result) ? result : null;
    };
    dxWidgetsViewer.prototype._getScrollBarWidth = function () {
        var that = this, useNativeScrolling = that.option('viewer.useNativeScrolling'), scrollBarWidth = 0;
        if (useNativeScrolling == 'auto' || useNativeScrolling === false) {
            return scrollBarWidth;
        }
        var container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.visibility = 'hidden';
        container.style.width = '200px';
        container.style.height = '150px';
        container.style.overflow = 'hidden';
        document.body.appendChild(container);
        var p = document.createElement('p');
        p.style.width = '100%';
        p.style.height = '300px';
        container.appendChild(p);
        var widthWithoutScrollBar = $(p).width();
        var scrollableContent = _render_helper_1.RenderHelper.wrapScrollable(container, useNativeScrolling, that.option('viewer').overflow, 'both');
        if (scrollableContent == container) {
            scrollableContent = p;
        }
        scrollBarWidth = widthWithoutScrollBar - $(scrollableContent).width();
        if (scrollBarWidth > 0) {
            scrollBarWidth++;
        }
        container.parentElement.removeChild(container);
        return scrollBarWidth;
    };
    dxWidgetsViewer.prototype._processBatchItems = function (functionName, startIndex, enableAnimation) {
        var that = this, dateStart = Date.now(), itemsList = that.itemsList, itemsListLen = itemsList.length, totalMarginsAndBorders = that.totalMarginsAndBorders, widthMarginsAndBorders = totalMarginsAndBorders.width, heightMarginsAndBorders = totalMarginsAndBorders.height, viewer = that.option('viewer'), onAllItemsRenderComplete = viewer.onAllItemsRenderComplete, bulkTimesRenderingTimeInterval = viewer.bulkTimesRenderingTimeInterval, itemWidth = that.curItemWidth - widthMarginsAndBorders, itemHeight = that.curItemHeight - heightMarginsAndBorders, commonItemsOptions, itemsStyle;
        if (!itemsList[startIndex]) {
            return;
        }
        commonItemsOptions = itemsList[startIndex].calcCommonItemSpecificOptions(itemWidth, itemHeight);
        itemsStyle = itemsList[startIndex].getCssStyle(itemWidth, itemHeight, commonItemsOptions, '.' + _css_class_names_1.cssClassNames.widgetViewerIdPrefix + that._viewerID);
        that._styleTag && that._styleTag.parentElement.removeChild(that._styleTag);
        that._styleTag = document.createElement('style');
        that._styleTag.innerText = itemsStyle;
        that._styleTag.type = 'text/css';
        document.head.appendChild(that._styleTag);
        var internalProcessBatchItems = function () {
            if (typeof itemsList[startIndex][functionName] === 'function') {
                dateStart = Date.now();
                do {
                    if (startIndex < itemsListLen) {
                        itemsList[startIndex][functionName](itemWidth, itemHeight, startIndex, commonItemsOptions);
                        ++startIndex;
                    }
                    if (!itemsList[startIndex]) {
                        if (typeof onAllItemsRenderComplete === 'function') {
                            onAllItemsRenderComplete.call(null);
                        }
                        return;
                    }
                } while (Date.now() - dateStart < bulkTimesRenderingTimeInterval);
                that._drawTimer = window.setTimeout(function () { internalProcessBatchItems(); }, 0);
            }
        };
        if (enableAnimation)
            that._drawTimer = window.setTimeout(function () { internalProcessBatchItems(); }, 0);
        else
            internalProcessBatchItems();
    };
    return dxWidgetsViewer;
}(dom_component_1.default));
exports.dxWidgetsViewer = dxWidgetsViewer;
