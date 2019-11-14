/**
* DevExpress Dashboard (_new-card-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _card_painter_1 = require("./_card-painter");
var _css_class_names_1 = require("../_css-class-names");
var $ = require("jquery");
exports.newCardMeasurements = {
    margin: 3,
    padding: 10,
    borderWidth: 1
};
var newCardItem = (function () {
    function newCardItem(properties, cardIndex, viewerOptions) {
        this.properties = properties;
        this.cardPainter = new _card_painter_1.cardPainter(properties.dataAccessor);
        this.clickHandler = viewerOptions.clickHandler;
        this.hoverHandler = viewerOptions.hoverHandler;
        this.index = cardIndex;
        this.tag = properties.tag;
    }
    newCardItem.prototype.dispose = function () {
        this.itemDiv.remove();
        this.itemDiv = null;
    };
    newCardItem.prototype.selected = function () {
        return this.properties.isSelected;
    };
    newCardItem.prototype.setHoverEnabledState = function (hoverEnabled) {
        this.properties.hoverEnabled = hoverEnabled;
    };
    newCardItem.prototype.draw = function (container, cardArrangements) {
        if (!this.itemDiv) {
            var element = this.cardPainter.draw(cardArrangements, this.properties.layout);
            this.itemDiv = element;
            container.append(element);
            this.afterDraw();
        }
        return this.itemDiv;
    };
    newCardItem.prototype.clearSelection = function () {
        this.properties.isSelected = false;
        if (this.itemDiv) {
            this.itemDiv.removeClass(_css_class_names_1.cssClassNames.selectedItem);
        }
    };
    newCardItem.prototype.select = function () {
        this.properties.isSelected = true;
        if (this.itemDiv) {
            this.itemDiv.addClass(_css_class_names_1.cssClassNames.selectedItem);
        }
    };
    newCardItem.prototype.hover = function (isHover) {
        if (this.properties.hoverEnabled) {
            if (isHover) {
                this.itemDiv.addClass(_css_class_names_1.cssClassNames.hoveredItem);
            }
            else {
                this.itemDiv.removeClass(_css_class_names_1.cssClassNames.hoveredItem);
            }
        }
    };
    newCardItem.prototype.setClickHandler = function () {
        var that = this;
        if ($.isFunction(that.clickHandler) && that.itemDiv) {
            that.itemDiv.off('click.cardItem');
            that.itemDiv.on('click.cardItem', function () {
                that.clickHandler.call(null, { item: that });
            });
        }
    };
    newCardItem.prototype.setHoverHandler = function () {
        var that = this;
        if (that.itemDiv) {
            that.itemDiv.mouseenter(function () {
                that.hover(true);
                if ($.isFunction(that.hoverHandler)) {
                    that.hoverHandler.call(null, { item: that, state: true });
                }
            }).mouseleave(function () {
                that.hover(false);
                if ($.isFunction(that.hoverHandler)) {
                    that.hoverHandler.call(null, { item: that, state: false });
                }
            });
        }
    };
    newCardItem.prototype.afterDraw = function () {
        this.setClickHandler();
        this.setHoverHandler();
        this.applyExtraStyles();
    };
    newCardItem.prototype.applyExtraStyles = function () {
        this.properties.isSelected ? this.select() : this.clearSelection();
    };
    return newCardItem;
}());
exports.newCardItem = newCardItem;
