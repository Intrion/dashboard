﻿/**
* DevExpress Dashboard (_card-item.js)
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
var _css_class_names_1 = require("../_css-class-names");
var _base_widget_item_1 = require("../_base-widget-item");
var _simple_indicator_1 = require("../../indicators/_simple-indicator");
var _delta_indicator_1 = require("../../indicators/_delta-indicator");
var $ = require("jquery");
var string_1 = require("devextreme/core/utils/string");
var _format_helper_1 = require("../../../../data/_format-helper");
var _utils_1 = require("../../../../data/_utils");
var sparkline_1 = require("devextreme/viz/sparkline");
var tooltip_1 = require("devextreme/ui/tooltip");
var hiddenContainer = $('<div>', {
    id: _css_class_names_1.cssClassNames.cardHiddenContainer
}), nowrapHiddenContainer = $('<div>', {
    id: _css_class_names_1.cssClassNames.cardNowrapHiddenContainer
}), _ceil = Math.ceil, _floor = Math.floor, TITLE_TOOLTIP_PREFIX = 'titleTooltip', TITLE_CONTAINER_PREFIX = 'titleContainer';
exports.cardValue1Counter = 0;
function getSparklineHeight(cardHeight) {
    return cardHeight * 0.25;
}
function calcRowCount(text, encodeHtml) {
    var text = encodeHtml ? string_1.encodeHtml(text) : text, words = text.split(' '), i, openSpan = '<span>', closeSpan = ' </span>', markup = '', prevOffsetTop, lineCount = 1, clientRects;
    for (i = 0; i < words.length; i++) {
        markup += openSpan + words[i] + closeSpan;
    }
    hiddenContainer.html(openSpan + markup + closeSpan);
    clientRects = hiddenContainer.children()[0].getClientRects();
    prevOffsetTop = clientRects[0].top;
    for (i = 1; i < clientRects.length; i++) {
        if (clientRects[i].top !== prevOffsetTop) {
            lineCount++;
            prevOffsetTop = clientRects[i].top;
        }
    }
    return lineCount;
}
var CardItem = (function (_super) {
    __extends(CardItem, _super);
    function CardItem(item, options) {
        var _this = _super.call(this, CardItem.ensureOptions(options)) || this;
        var getText = function (text) {
            if (text) {
                return options.encodeHtml ? $("<div>").text(text).html() : text;
            }
            return '';
        }, defaultValues = {
            type: 'none',
            hasPositiveMeaning: false,
            text: {
                value: '',
                useDefaultColor: false
            }
        };
        item = item || {};
        _this.data = item.data || {};
        _this.title = getText(item.title);
        _this.subTitle = getText(item.subTitle);
        _this.sparklineOptions = item.sparklineOptions || {};
        _this.variableValue1 = _utils_1.deepExtend({}, defaultValues, item.variableValue1);
        _this.variableValue2 = _utils_1.deepExtend({}, defaultValues, item.variableValue2);
        defaultValues.text.useDefaultColor = true;
        _this.mainValue = _utils_1.deepExtend({}, defaultValues, item.mainValue);
        _this.indicator = {
            hasPositiveMeaning: _this.mainValue.hasPositiveMeaning,
            type: _this.mainValue.type
        };
        if (hiddenContainer.parent().length === 0) {
            hiddenContainer.appendTo(document.body);
        }
        if (nowrapHiddenContainer.parent().length === 0) {
            nowrapHiddenContainer.appendTo(document.body);
        }
        _this.subtitleDotsIndex = 0;
        return _this;
    }
    CardItem.ensureOptions = function (options) {
        options = options || {};
        options.type = 'cardItem';
        options.ignoreProportions = false;
        return options;
    };
    CardItem.prototype.draw = function (widthCard, heightCard, cardIndex, commonItemsOptions) {
        var that = this, options = that._options, paddings = commonItemsOptions.paddings, sparklineHeight = commonItemsOptions.sparklineHeight, imgDiv, itemDiv, sparklineContainer, topContentOffset = parseFloat(paddings.top), title, subtitle, variableValue1, variableValue2, mainValueDiv, textSubtitle = options.encodeHtml ? that._getEllipsisText(that.subTitle, commonItemsOptions, _floor((widthCard - paddings.right - paddings.left) * 0.6)) : that.subTitle, index = exports.cardValue1Counter++, value1Text = that._getText('variableValue1'), value2Text = that._getText('variableValue2'), mainValueText = that._getText('mainValue'), titleContainerId = TITLE_CONTAINER_PREFIX + index;
        itemDiv = _super.prototype.draw.call(this, widthCard, heightCard, cardIndex);
        title = ['<div id="' + titleContainerId + '" class="', _css_class_names_1.cssClassNames.cardTitle + '" style="padding:' + topContentOffset + 'px ' + paddings.left + 'px 0px ' + paddings.left + 'px;">', that.title, '</div>'].join('');
        subtitle = ['<div class="', _css_class_names_1.cssClassNames.cardSubtitle, '" style="padding-left:' + paddings.left + 'px;">', textSubtitle, '</div>'].join('');
        variableValue1 = ['<span class="', _css_class_names_1.cssClassNames.cardVariableValue1, ' ', that._getValueClassName('variableValue1') + '" style="padding-right:' + paddings.right + 'px;">', value1Text, '</span>'].join('');
        variableValue2 = ['<span class="', _css_class_names_1.cssClassNames.cardVariableValue2, ' ', that._getValueClassName('variableValue2'), '" style="padding-right:' + paddings.right + 'px;">', value2Text, '</span>'].join('');
        imgDiv = ['<div class="', _css_class_names_1.cssClassNames.cardIndicator, '" style="padding-left:' + paddings.left + 'px;">',
            _simple_indicator_1.SimpleIndicator.getIndicator(that.indicator.type, that.indicator.hasPositiveMeaning), '</div>'].join('');
        mainValueDiv = ['<span class="', _css_class_names_1.cssClassNames.cardMainValue, ' ', that._getValueClassName('mainValue'), '" style="padding-right:' + paddings.right + 'px;">', mainValueText, '</div>'].join('');
        itemDiv.innerHTML = title + subtitle + variableValue1 + variableValue2 + imgDiv + mainValueDiv;
        that._addTooltip(itemDiv, titleContainerId, TITLE_TOOLTIP_PREFIX, that.title, index);
        if (options.hasSparkline) {
            sparklineContainer = document.createElement('div');
            sparklineContainer.classList.add(_css_class_names_1.cssClassNames.cardSparkline);
            sparklineContainer.style.left = paddings.left;
            sparklineContainer.style.left = paddings.right;
            itemDiv.appendChild(sparklineContainer);
            that.sparklineOptions.size = {
                width: widthCard - paddings.left - paddings.right,
                height: sparklineHeight
            };
            new sparkline_1.default(sparklineContainer, that.sparklineOptions);
        }
        return itemDiv;
    };
    CardItem.prototype.resize = function (width, height, index, commonItemsOptions) {
        var that = this, sparklineHeight = commonItemsOptions.sparklineHeight, itemDiv = that._itemDiv, imgDiv = itemDiv.querySelector('.' + _css_class_names_1.cssClassNames.cardIndicator), subTitle = itemDiv.querySelector('.' + _css_class_names_1.cssClassNames.cardSubtitle), sparklineContainer = itemDiv.querySelector('.' + _css_class_names_1.cssClassNames.cardSparkline), paddings = that._options.padding, widthWithoutpaddings = width - paddings.right - paddings.left;
        if (!itemDiv.childElementCount) {
            that.draw(width, height, index, commonItemsOptions);
            return that._itemDiv;
        }
        if (that._options.encodeHtml)
            subTitle.innerText = that._getEllipsisText(subTitle.innerText, commonItemsOptions, _floor((widthWithoutpaddings) * 0.6));
        if (sparklineHeight) {
            sparkline_1.default.getInstance(sparklineContainer)
                .option('size', { width: widthWithoutpaddings, height: sparklineHeight });
        }
        return itemDiv;
    };
    CardItem.prototype.getCssStyle = function (width, height, commonItemsOptions, prefix) {
        var that = this, paddings = commonItemsOptions.paddings, sparklineHeight = commonItemsOptions.sparklineHeight, widthWithoutpaddings = width - paddings.right - paddings.left, fontSizes = commonItemsOptions.fontSizes, baseStyle = _super.prototype.getCssStyle.call(this, width, height, commonItemsOptions, prefix), titleStyle = prefix + ' ' + that._formStyle('.' + _css_class_names_1.cssClassNames.cardTitle, {
            'font-size': fontSizes.title,
            'min-height': _ceil(fontSizes.title * 1.3),
            'line-height': fontSizes.title
        }), subTitleStyle = prefix + ' ' + that._formStyle('.' + _css_class_names_1.cssClassNames.cardSubtitle, {
            'min-height': _ceil(fontSizes.subTitle * 1.3) * 2,
            'font-size': fontSizes.subTitle
        }), indicatorContainerStyle = prefix + ' ' + that._formStyle('.' + _css_class_names_1.cssClassNames.cardIndicator, {
            height: _ceil(0.18 * (height - sparklineHeight)),
            width: _ceil(0.24 * (height - sparklineHeight)),
            bottom: paddings.bottom + sparklineHeight + 3
        }), variableValue1Style = prefix + ' ' + that._formStyle('.' + _css_class_names_1.cssClassNames.cardVariableValue1, {
            'font-size': fontSizes.variableValue1,
            'line-height': fontSizes.variableValue1,
            bottom: fontSizes.variableValue2 + fontSizes.mainValue
        }), variableValue2Style = prefix + ' ' + that._formStyle('.' + _css_class_names_1.cssClassNames.cardVariableValue2, {
            'font-size': fontSizes.variableValue2,
            'line-height': fontSizes.variableValue2,
            'bottom': fontSizes.mainValue
        }), mainValueStyle = prefix + ' ' + that._formStyle('.' + _css_class_names_1.cssClassNames.cardMainValue, {
            'font-size': fontSizes.mainValue,
            'line-height': fontSizes.mainValue,
            bottom: paddings.bottom + sparklineHeight
        }), sparklineContainerStyle = sparklineHeight ?
            prefix + ' ' + that._formStyle('.' + _css_class_names_1.cssClassNames.cardSparkline, {
                height: sparklineHeight,
                width: widthWithoutpaddings
            }) : '';
        return [baseStyle, titleStyle, subTitleStyle, indicatorContainerStyle, variableValue1Style, variableValue2Style, mainValueStyle, sparklineContainerStyle].join(' ');
    };
    CardItem.calcFonts = function (height) {
        return {
            title: (~~(height * 0.22)),
            subTitle: (~~(height * 0.14)),
            mainValue: (~~(height * 0.30)),
            variableValue1: (~~(height * 0.14)),
            variableValue2: (~~(height * 0.14))
        };
    };
    CardItem.prototype.calcCommonItemSpecificOptions = function (width, height) {
        var that = this, options = that._options, sparklineHeight = options.hasSparkline ? getSparklineHeight(height) : 0, fontSizes = CardItem.calcFonts(height - sparklineHeight), paddings = __assign({ top: 0, left: 0, right: 0, bottom: 0 }, options.padding), oneRowHeight;
        hiddenContainer.width(_floor((width - paddings.right - paddings.left) * 0.6))
            .css('fontSize', fontSizes.subTitle);
        nowrapHiddenContainer.css('fontSize', fontSizes.subTitle);
        oneRowHeight = hiddenContainer.text('a').height();
        hiddenContainer.empty();
        return {
            paddings: paddings,
            sparklineHeight: sparklineHeight,
            fontSizes: fontSizes,
            oneRowHeight: oneRowHeight
        };
    };
    CardItem.prototype.dispose = function () {
        var that = this;
        _base_widget_item_1.BaseWidgetItem.prototype.dispose.apply(that, arguments);
        that.data = null;
        that.sparklineOptions = null;
        that.indicator = null;
        that._options = null;
    };
    CardItem.prototype._addTooltip = function (itemDiv, containerId, tooltipPrefix, text, index) {
        var container = itemDiv.querySelector("#" + containerId);
        var div = document.createElement('div');
        div.id = tooltipPrefix + index;
        container.appendChild(div);
        div.innerText = text;
        new tooltip_1.default(div, {
            target: '#' + containerId,
            showEvent: { name: "mouseenter", delay: 800 },
            hideEvent: "mouseleave"
        });
    };
    CardItem.prototype._getDefaultOptions = function () {
        var defaults = _base_widget_item_1.BaseWidgetItem.prototype._getDefaultOptions.apply(this, arguments), options = {
            padding: {
                top: 3,
                left: 12,
                right: 12,
                bottom: 10
            },
            font: {
                family: 'Segoe UI, HelveticaNeue, Trebuchet MS, Verdana',
                weight: 'normal'
            },
            title: {
                color: 'black'
            },
            subTitle: {
                color: '#B6B6B6'
            }
        };
        return _utils_1.deepExtend({}, defaults, options);
    };
    CardItem.prototype._getText = function (classText) {
        var that = this;
        var valueOptions = that[classText].text, value = valueOptions.value, format = valueOptions.format;
        if (format) {
            return _format_helper_1.formatHelper.format(parseFloat(value), format);
        }
        else {
            return that._options.encodeHtml ? string_1.encodeHtml(value) : value.toString();
        }
    };
    CardItem.prototype._getClassFromIndicator = function (type, hasPositiveMeaning, useDefaultColor) {
        return _delta_indicator_1.DeltaIndicator.getIndicatorColorType(type, hasPositiveMeaning, useDefaultColor);
    };
    CardItem.prototype._getCardStyle = function (isSelected) {
        return isSelected ? this._options.selectionStyle : this._options.style;
    };
    CardItem.prototype._getValueClassName = function (classText) {
        var that = this, value = that[classText], useDefaultColor = value.text.useDefaultColor, hasPositiveMeaning = value.hasPositiveMeaning, type = value.type;
        return that._getClassFromIndicator(type, hasPositiveMeaning, useDefaultColor);
    };
    CardItem.prototype._setSubtitleDotsIndex = function (index) {
        this._subtitleDotsIndex = index;
    };
    CardItem.prototype._getEllipsisText = function (inputText, commonItemsOptions, containerWidth) {
        if (!inputText || inputText === '') {
            return '';
        }
        var that = this, subtitleRowsCount = calcRowCount(inputText, that._options.encodeHtml), fullTextWidth, proportionalTextLen, updatedText, movingDirection, threeDots = '...', i, endIndex, dotsIndex = this._subtitleDotsIndex;
        if (subtitleRowsCount <= 2) {
            return inputText;
        }
        fullTextWidth = nowrapHiddenContainer.text(inputText).width();
        proportionalTextLen = _floor(2 * containerWidth * inputText.length / fullTextWidth);
        updatedText = inputText.substring(0, proportionalTextLen - 3) + threeDots;
        subtitleRowsCount = calcRowCount(updatedText, that._options.encodeHtml);
        if (subtitleRowsCount > 2) {
            movingDirection = -1;
        }
        else {
            movingDirection = 1;
        }
        for (i = 1; i < proportionalTextLen; i += 2) {
            endIndex = dotsIndex ? dotsIndex + i * movingDirection : proportionalTextLen - 3 + i * movingDirection;
            updatedText = inputText.substring(0, endIndex) + threeDots;
            subtitleRowsCount = calcRowCount(updatedText, that._options.encodeHtml);
            if (movingDirection === 1 && subtitleRowsCount === 3) {
                updatedText = inputText.substring(0, endIndex - 3) + threeDots;
                that._setSubtitleDotsIndex(updatedText.length - 3);
                return updatedText;
            }
            if (movingDirection === -1 && subtitleRowsCount === 2) {
                that._setSubtitleDotsIndex(updatedText.length - 3);
                return updatedText;
            }
        }
        return updatedText;
    };
    return CardItem;
}(_base_widget_item_1.BaseWidgetItem));
exports.CardItem = CardItem;
