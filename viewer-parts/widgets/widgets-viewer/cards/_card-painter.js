/**
* DevExpress Dashboard (_card-painter.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _card_layout_1 = require("./_card-layout");
var _css_class_names_1 = require("../_css-class-names");
var _simple_indicator_1 = require("../../indicators/_simple-indicator");
var _delta_indicator_1 = require("../../indicators/_delta-indicator");
var $ = require("jquery");
var sparkline_1 = require("devextreme/viz/sparkline");
var tooltip_1 = require("devextreme/ui/tooltip");
var cardPainter = (function () {
    function cardPainter(data) {
        this.data = data;
    }
    cardPainter.prototype.draw = function (cardArrangements, layout) {
        var cardHeight = cardArrangements.getCardHeight();
        var cardWidth = cardArrangements.getCardWidth();
        return $('<div>', {})
            .addClass(_css_class_names_1.layoutCardCssClassNames.card)
            .css({
            height: cardHeight,
            width: cardWidth,
            "background-color": layout.getCardBackgroundColor()
        }).append(this.createCardContent(cardArrangements, layout));
    };
    cardPainter.prototype.createCardContent = function (cardArrangements, layout) {
        var contentHeight = cardArrangements.getCardContentHeight();
        var contentWidth = cardArrangements.getCardContentWidth();
        var actualContentWidth = layout.maxWidth > 0 ? Math.min(contentWidth, Math.max(layout.minWidth, layout.maxWidth)) : contentWidth;
        return $("<div>")
            .css({
            height: contentHeight,
            width: actualContentWidth
        }).addClass(_css_class_names_1.layoutCardCssClassNames.content)
            .append(this.createRows(layout.rows, actualContentWidth));
    };
    cardPainter.prototype.createRows = function (rowModels, contentWidth) {
        var _this = this;
        var topRows = $("<div>", { "class": _css_class_names_1.layoutCardCssClassNames.contentTopRows }), centerRows = $("<div>", {}), bottomRows = $("<div>", { "class": _css_class_names_1.layoutCardCssClassNames.contentBottomRows });
        rowModels.forEach(function (rowModel) {
            var rowDiv = $("<div>");
            rowDiv.css("paddingBottom", rowModel.indent);
            switch (rowModel.vAlignment) {
                case _card_layout_1.verticalAlignment.top:
                    topRows.append(rowDiv);
                    break;
                case _card_layout_1.verticalAlignment.bottom:
                    bottomRows.append(rowDiv);
                    break;
                case _card_layout_1.verticalAlignment.center:
                default:
                    centerRows.append(rowDiv);
            }
            _this.createRow(rowModel.elements, rowDiv, contentWidth);
        });
        if (centerRows.children().length > 0)
            return [topRows, centerRows, bottomRows];
        else if (topRows.children().length > 0 || bottomRows.children().length > 0) {
            return [topRows, bottomRows];
        }
    };
    cardPainter.prototype.createRow = function (elementModels, rowDiv, contentWidth) {
        var leftElements = [], centerElements = [], rightElements = [];
        elementModels.forEach(function (elementModel) {
            switch (elementModel.hAlignment) {
                case _card_layout_1.horizontalAlignment.left:
                    leftElements.push(elementModel);
                    break;
                case _card_layout_1.horizontalAlignment.right:
                    rightElements.push(elementModel);
                    break;
                case _card_layout_1.horizontalAlignment.center:
                default:
                    centerElements.push(elementModel);
                    break;
            }
        });
        if (centerElements.length != 0 && leftElements.length == 0 && rightElements.length == 0) {
            rowDiv.addClass(_css_class_names_1.layoutCardCssClassNames.rowOnlyCenterElements);
            rowDiv.append(this.createElements(centerElements, contentWidth));
        }
        else {
            rowDiv.addClass(_css_class_names_1.layoutCardCssClassNames.row);
            var leftDiv = $("<div>", { "class": _css_class_names_1.layoutCardCssClassNames.rowLeftRightElements }).appendTo(rowDiv), rightDiv = $("<div>", { "class": _css_class_names_1.layoutCardCssClassNames.rowLeftRightElements }).appendTo(rowDiv);
            leftDiv.append(this.createElements(leftElements.concat(centerElements), contentWidth));
            rightDiv.append(this.createElements(rightElements, contentWidth));
        }
    };
    cardPainter.prototype.createElements = function (elements, contentWidth) {
        var _this = this;
        return elements.map(function (element) {
            if (element instanceof _card_layout_1.cardIndicatorElement) {
                return _this.createIndicatorElement(element);
            }
            else if (element instanceof _card_layout_1.cardSparklineElement) {
                return _this.createSparklineElement(element, contentWidth);
            }
            else {
                return _this.createDataElement(element);
            }
        });
    };
    cardPainter.prototype.createIndicatorElement = function (indicatorElement) {
        return $("<div>")
            .addClass(_css_class_names_1.layoutCardCssClassNames.rowElement)
            .css({
            height: indicatorElement.height,
            width: indicatorElement.width
        })
            .append(_simple_indicator_1.SimpleIndicator.getIndicator(indicatorElement.getIndicatorType(this.data), indicatorElement.getIsGood(this.data)));
    };
    cardPainter.prototype.createSparklineElement = function (sparklineElement, contentWidth) {
        var sparklineOptions = sparklineElement.getSparklineOptions(this.data);
        sparklineOptions.size = {
            height: sparklineElement.height,
            width: contentWidth
        };
        var sparklineContainer = document.createElement('div');
        new sparkline_1.default(sparklineContainer, sparklineOptions);
        return $("<div>")
            .css({
            height: sparklineElement.height
        }).append(sparklineContainer);
    };
    cardPainter.prototype.createDataElement = function (textElement) {
        var elementText = textElement.getText(this.data);
        var elementDiv = $("<div>")
            .addClass(_css_class_names_1.layoutCardCssClassNames.rowElement)
            .css({
            fontSize: textElement.fontSize + "pt",
            fontFamily: textElement.fontFamily
        })
            .text(elementText);
        this.setElementColor(textElement, elementDiv);
        var textDiv = document.createElement('div');
        textDiv.innerText = elementText;
        elementDiv.append(textDiv);
        new tooltip_1.default(textDiv, {
            target: elementDiv.get(0),
            showEvent: { name: "mouseenter", delay: 800 },
            hideEvent: "mouseleave"
        });
        return elementDiv;
    };
    cardPainter.prototype.setElementColor = function (element, elementDiv) {
        if (element.predefinedColor !== "NotSet") {
            switch (element.predefinedColor) {
                case "Main":
                    elementDiv.addClass(_delta_indicator_1.DeltaIndicator.getIndicatorColorType(null, null, true));
                    break;
                case "Neutral":
                    elementDiv.addClass(_delta_indicator_1.DeltaIndicator.getIndicatorColorType());
                    break;
                case "Bad":
                    elementDiv.addClass(_delta_indicator_1.DeltaIndicator.getIndicatorColorType("down", false));
                    break;
                case "Good":
                    elementDiv.addClass(_delta_indicator_1.DeltaIndicator.getIndicatorColorType("up", true));
                    break;
                case "Warning":
                    elementDiv.addClass(_delta_indicator_1.DeltaIndicator.getIndicatorColorType("warning"));
                    break;
                case "Delta":
                    elementDiv.addClass(_delta_indicator_1.DeltaIndicator.getIndicatorColorType(element.getIndicatorType(this.data), element.getIsGood(this.data)));
                    break;
            }
        }
        else if (element.color) {
            elementDiv.css("color", element.color);
        }
        else {
            elementDiv.addClass(_delta_indicator_1.DeltaIndicator.getIndicatorColorType(null, null, true));
        }
    };
    return cardPainter;
}());
exports.cardPainter = cardPainter;
