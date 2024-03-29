﻿/**
* DevExpress Dashboard (_arrangement-strategy.js)
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
var _card_measurer_1 = require("./_card-measurer");
var _card_arrangement_info_1 = require("./_card-arrangement-info");
var ArrangementStrategy = (function () {
    function ArrangementStrategy() {
        this.cardMeasurer = new _card_measurer_1.cardMeasurer();
    }
    ArrangementStrategy.createInstance = function (method, lineCount) {
        switch (method) {
            case 'column':
                return new ColumnArrangementStrategy(lineCount);
            case 'row':
                return new RowArrangementStrategy(lineCount);
            default:
                return new AutoArrangementStrategy();
        }
    };
    ArrangementStrategy.prototype.getArrangeMethod = function () {
        return "";
    };
    ArrangementStrategy.prototype.getLineCount = function () {
        return -1;
    };
    ArrangementStrategy.prototype.arrange = function (viewerHeight, viewerWidth, itemsCount, layouts, ignorePadding) {
        var _this = this;
        if (ignorePadding === void 0) { ignorePadding = false; }
        var getArrangementInfo = function (nextColumnCount) {
            if (nextColumnCount === void 0) { nextColumnCount = undefined; }
            var result = new _card_arrangement_info_1.cardArrangementInfo();
            var columnCount = nextColumnCount || _this.getColumnCount(itemsCount, actualViewerWidth, cardMinWidth);
            columnCount = _this.checkEmptyRows(columnCount, itemsCount);
            var rowCount = _this.getRowCount(itemsCount, columnCount);
            var visibleColumnCount = Math.max(1, Math.min(columnCount, Math.floor(actualViewerWidth / cardMinWidth)));
            var visibleRowCount = Math.max(1, Math.min(rowCount, Math.floor(actualViewerHeight / cardMinHeight)));
            result.cellHeight = Math.max(cardMinHeight, Math.floor(actualViewerHeight / visibleRowCount));
            result.cellWidth = Math.max(cardMinWidth, Math.floor(actualViewerWidth / visibleColumnCount));
            result.columnCount = columnCount;
            result.rowCount = rowCount;
            result.itemsCount = itemsCount;
            result.ignorePadding = ignorePadding;
            result.viewerHeight = viewerHeight;
            result.viewerWidth = viewerWidth;
            result.arrangementDirection = _this.getArrangementDirection();
            return result;
        };
        var marginOffset = ignorePadding ? _card_arrangement_info_1.margins : 0;
        var cardMinWidth = this.getCardMinWidthWithMargin(layouts);
        var cardMinHeight = this.getCardMinHeightWithMargin(layouts);
        var actualViewerWidth = viewerWidth + marginOffset;
        var actualViewerHeight = viewerHeight + marginOffset;
        return this.calcBestProportions(getArrangementInfo);
    };
    ArrangementStrategy.prototype.calcBestProportions = function (calcArrangementInfo) {
        return calcArrangementInfo();
    };
    ArrangementStrategy.prototype.getCardMinWidthWithMargin = function (layouts) {
        var largestWidth = layouts.map(function (layout) { return layout.minWidth; }).reduce(function (prev, curr) { return Math.max(prev, curr); });
        return largestWidth + _card_arrangement_info_1.paddings + _card_arrangement_info_1.borders + _card_arrangement_info_1.margins;
    };
    ArrangementStrategy.prototype.getCardMinHeightWithMargin = function (layouts) {
        var _this = this;
        var largestHeight = layouts.map(function (layout) { return _this.cardMeasurer.calcMinHeight(layout); }).reduce(function (prev, curr) { return Math.max(prev, curr); });
        return largestHeight + _card_arrangement_info_1.paddings + _card_arrangement_info_1.borders + _card_arrangement_info_1.margins;
    };
    ArrangementStrategy.prototype.checkEmptyRows = function (columnCount, itemsCount) {
        return columnCount;
    };
    ArrangementStrategy.prototype.getArrangementDirection = function () {
        return "column";
    };
    return ArrangementStrategy;
}());
exports.ArrangementStrategy = ArrangementStrategy;
var AutoArrangementStrategy = (function (_super) {
    __extends(AutoArrangementStrategy, _super);
    function AutoArrangementStrategy() {
        return _super.call(this) || this;
    }
    AutoArrangementStrategy.prototype.getArrangeMethod = function () {
        return "auto";
    };
    AutoArrangementStrategy.prototype.getLineCount = function () {
        return -1;
    };
    AutoArrangementStrategy.prototype.getColumnCount = function (itemsCount, actualViewerWidth, cardMinWidth) {
        var columnCount = Math.max(1, Math.floor(actualViewerWidth / cardMinWidth));
        columnCount = Math.min(itemsCount, columnCount);
        return columnCount;
    };
    AutoArrangementStrategy.prototype.checkEmptyRows = function (columnCount, itemsCount) {
        var lastRowCount = function () { return itemsCount % columnCount; };
        var fullRowCount = function () { return Math.floor(itemsCount / columnCount); };
        var nextLastRowCount = function () { return lastRowCount() + fullRowCount(); };
        while (lastRowCount() > 0 && (nextLastRowCount() < columnCount)) {
            columnCount--;
        }
        return columnCount;
    };
    AutoArrangementStrategy.prototype.calcBestProportions = function (calcArrangementInfo) {
        var arrangementInfo = calcArrangementInfo();
        if (arrangementInfo.columnCount > 1) {
            var nextArrangementInfo = calcArrangementInfo(arrangementInfo.columnCount - 1);
            while (nextArrangementInfo.proportionFactor() < arrangementInfo.proportionFactor() && arrangementInfo.columnCount > 1) {
                arrangementInfo = nextArrangementInfo;
                nextArrangementInfo = calcArrangementInfo(arrangementInfo.columnCount - 1);
            }
        }
        return arrangementInfo;
    };
    AutoArrangementStrategy.prototype.getRowCount = function (itemsCount, columnCount) {
        return Math.ceil(itemsCount / columnCount);
    };
    return AutoArrangementStrategy;
}(ArrangementStrategy));
exports.AutoArrangementStrategy = AutoArrangementStrategy;
var ColumnArrangementStrategy = (function (_super) {
    __extends(ColumnArrangementStrategy, _super);
    function ColumnArrangementStrategy(columnCount) {
        var _this = _super.call(this) || this;
        _this.columnCount = columnCount;
        return _this;
    }
    ColumnArrangementStrategy.prototype.getArrangeMethod = function () {
        return "column";
    };
    ColumnArrangementStrategy.prototype.getLineCount = function () {
        return this.columnCount;
    };
    ColumnArrangementStrategy.prototype.getColumnCount = function (itemsCount, actualViewerWidth, cardMinWidth) {
        return Math.min(itemsCount, this.columnCount);
    };
    ColumnArrangementStrategy.prototype.getRowCount = function (itemsCount, columnCount) {
        return Math.max(1, Math.ceil(itemsCount / columnCount));
    };
    return ColumnArrangementStrategy;
}(ArrangementStrategy));
exports.ColumnArrangementStrategy = ColumnArrangementStrategy;
var RowArrangementStrategy = (function (_super) {
    __extends(RowArrangementStrategy, _super);
    function RowArrangementStrategy(rowCount) {
        var _this = _super.call(this) || this;
        _this.rowCount = rowCount;
        return _this;
    }
    RowArrangementStrategy.prototype.getArrangementMethod = function () {
        return "row";
    };
    RowArrangementStrategy.prototype.getLineCount = function () {
        return this.rowCount;
    };
    RowArrangementStrategy.prototype.getColumnCount = function (itemsCount, actualViewerWidth, cardMinWidth) {
        return Math.ceil(itemsCount / Math.min(itemsCount, this.rowCount));
    };
    RowArrangementStrategy.prototype.getRowCount = function (itemsCount, columnCount) {
        return Math.min(itemsCount, this.rowCount);
    };
    RowArrangementStrategy.prototype.getArrangementDirection = function () {
        return "row";
    };
    return RowArrangementStrategy;
}(ArrangementStrategy));
exports.RowArrangementStrategy = RowArrangementStrategy;
