﻿/**
* DevExpress Dashboard (_card-arrangement-info.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _new_card_item_1 = require("./_new-card-item");
exports.margins = _new_card_item_1.newCardMeasurements.margin * 2, exports.paddings = _new_card_item_1.newCardMeasurements.padding * 2, exports.borders = _new_card_item_1.newCardMeasurements.borderWidth * 2;
var cardArrangementInfo = (function () {
    function cardArrangementInfo() {
        this.etalonWidth = 11;
        this.etalonHeight = 10;
        this.arrangementDirection = "column";
        this.ignorePadding = false;
    }
    cardArrangementInfo.prototype.getMarginOffset = function () {
        return this.ignorePadding ? exports.margins : 0;
    };
    cardArrangementInfo.prototype.getScrollableHeight = function () {
        return Math.max(this.rowCount * this.cellHeight - this.getMarginOffset(), this.viewerHeight);
    };
    cardArrangementInfo.prototype.getScrollableWidth = function () {
        return Math.max(this.columnCount * this.cellWidth - this.getMarginOffset(), this.viewerWidth);
    };
    cardArrangementInfo.prototype.proportionFactor = function () {
        return Math.abs(((this.etalonWidth - this.etalonHeight) / (this.etalonWidth + this.etalonHeight)) - ((this.cellWidth - this.cellHeight) / (this.cellWidth + this.cellHeight)));
    };
    cardArrangementInfo.prototype.getCardContentHeight = function () {
        return this.cellHeight - exports.margins - exports.paddings - exports.borders;
    };
    cardArrangementInfo.prototype.getCardContentWidth = function () {
        return this.cellWidth - exports.margins - exports.paddings - exports.borders;
    };
    cardArrangementInfo.prototype.getCardWidth = function () {
        return this.cellWidth - exports.margins;
    };
    cardArrangementInfo.prototype.getCardHeight = function () {
        return this.cellHeight - exports.margins;
    };
    cardArrangementInfo.prototype.hasVerticalScroll = function () {
        return this.getScrollableHeight() > this.viewerHeight;
    };
    cardArrangementInfo.prototype.hasHorizontalScroll = function () {
        return this.getScrollableWidth() > this.viewerWidth;
    };
    return cardArrangementInfo;
}());
exports.cardArrangementInfo = cardArrangementInfo;
