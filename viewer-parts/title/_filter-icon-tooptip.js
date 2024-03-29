﻿/**
* DevExpress Dashboard (_filter-icon-tooptip.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _render_helper_1 = require("../widgets/_render-helper");
var _formatter_1 = require("../../data/_formatter");
var $ = require("jquery");
exports.titleTooltipClasses = {
    root: 'dx-dashboard-title-tooltip',
    list: 'dx-dashboard-title-tooltip-list',
    listText: 'dx-dashboard-title-tooltip-list-text',
    subList: 'dx-dashboard-title-tooltip-sublist',
    subListItem: 'dx-dashboard-title-tooltip-sublist-item'
};
var FilterIconTooltip = (function () {
    function FilterIconTooltip() {
    }
    FilterIconTooltip.getTooltipContent = function (contentElement, masterFilterValues) {
        var _this = this;
        contentElement.addClass(exports.titleTooltipClasses.root);
        var $tooltipList = $('<ul/>', { 'class': exports.titleTooltipClasses.list });
        masterFilterValues.forEach(function (argument, i) {
            var $tooltipListItem = $('<li/>').appendTo($tooltipList);
            $tooltipListItem.css({ 'padding-top': i == 0 ? 0 : _this.FILTER_LIST_SPACE + 'px' });
            _render_helper_1.RenderHelper.html($('<div/>', { 'class': exports.titleTooltipClasses.listText }).appendTo($tooltipListItem).get(0), argument.Name, true);
            var $tooltipSublist = $('<ul/>', { 'class': exports.titleTooltipClasses.subList }).appendTo($tooltipListItem);
            var maxFilterListValues = _this._calcMaxFilterListValues(masterFilterValues);
            var maxFilterValues = _this._calcMaxFilterValues(maxFilterListValues, masterFilterValues);
            for (var j = 0; j < maxFilterValues; j++) {
                if (j >= argument.Values.length && argument.Truncated
                    || j + 1 == maxFilterValues && (j + 1 < argument.Values.length
                        || argument.Truncated)) {
                    $('<li/>', { 'class': exports.titleTooltipClasses.subListItem }).appendTo($tooltipSublist).append("...");
                    break;
                }
                if (j >= argument.Values.length) {
                    break;
                }
                _render_helper_1.RenderHelper.html($('<li/>', { 'class': exports.titleTooltipClasses.subListItem }).appendTo($tooltipSublist).get(0), _formatter_1.formatFilterValue(argument.Values[j]), true);
            }
        });
        return $tooltipList;
    };
    FilterIconTooltip._calcMaxFilterListValues = function (masterFilterValues) {
        var that = this, lineHeightString = $('<div/>', { 'class': exports.titleTooltipClasses.root }).css('line-height'), lineHeightTmp = parseInt(lineHeightString, 10), lineHeight = lineHeightTmp && lineHeightString.length > 2 && lineHeightString.substr(lineHeightString.length - 2) == 'px' ? lineHeightTmp : this.DEFAULT_LINE_HEIGHT, maxHeight = this._calcMaxHeight();
        return Math.floor((maxHeight - (masterFilterValues.length - 1) * this.FILTER_LIST_SPACE) / lineHeight);
    };
    FilterIconTooltip._calcMaxFilterValues = function (maxFilterListValues, masterFilterValues) {
        var that = this, MIN_FILTER_VALUES = 4, MAX_FILTER_LIST_VALUES = 100, maxFilterValues, curFilterListValues;
        maxFilterListValues = Math.min(maxFilterListValues, MAX_FILTER_LIST_VALUES);
        for (maxFilterValues = Math.max(maxFilterListValues, MIN_FILTER_VALUES); maxFilterValues >= MIN_FILTER_VALUES; maxFilterValues--) {
            if (maxFilterValues == MIN_FILTER_VALUES) {
                break;
            }
            curFilterListValues = 0;
            $.each(masterFilterValues, function (index, dimensionFilterValues) {
                curFilterListValues += (maxFilterValues < dimensionFilterValues.Values.length ? maxFilterValues : dimensionFilterValues.Values.length) + 1;
                if (curFilterListValues > maxFilterListValues) {
                    return false;
                }
            });
            if (curFilterListValues <= maxFilterListValues) {
                break;
            }
        }
        return maxFilterValues;
    };
    FilterIconTooltip._calcMaxHeight = function () {
        return Math.floor($(window).height() * 0.75);
    };
    FilterIconTooltip.FILTER_LIST_SPACE = 8;
    FilterIconTooltip.DEFAULT_LINE_HEIGHT = 16;
    return FilterIconTooltip;
}());
exports.FilterIconTooltip = FilterIconTooltip;
