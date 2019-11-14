/**
* DevExpress Dashboard (_arrangement-info.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positioningDirection = { Vertical: "Vertical", Horizontal: "Horizontal" };
var ArrangementInfo = (function () {
    function ArrangementInfo(totalItemCount, itemsOnRowCount, itemWidth, itemHeight, itemMargin, direction, options) {
        this.totalItemCount = totalItemCount;
        this.itemsOnRowCount = itemsOnRowCount;
        this.itemWidth = itemWidth;
        this.itemHeight = itemHeight;
        this.direction = direction;
        this.itemMargin = itemMargin;
        this.options = options;
        this.itemsOnColumnCount = Math.ceil(this.totalItemCount / this.itemsOnRowCount);
    }
    ArrangementInfo.prototype.getHeight = function (useMargin) {
        var that = this;
        var margin = useMargin ? 2 * that.itemMargin.Height : 0;
        switch (that.direction) {
            case exports.positioningDirection.Horizontal:
                return that.itemHeight - margin;
            case exports.positioningDirection.Vertical:
                return that.itemWidth - margin;
            default:
                return -1;
        }
    };
    ArrangementInfo.prototype.getWidth = function (useMargin) {
        var that = this, margin = useMargin ? 2 * that.itemMargin.Width : 0;
        switch (that.direction) {
            case exports.positioningDirection.Horizontal:
                return that.itemWidth - margin;
            case exports.positioningDirection.Vertical:
                return that.itemHeight - margin;
            default:
                return 0;
        }
    };
    return ArrangementInfo;
}());
exports.ArrangementInfo = ArrangementInfo;
