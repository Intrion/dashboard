﻿/**
* DevExpress Dashboard (_tab-header-calculator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcTabHeadersWidth(tabsWidth, containerWidth, leftIndex, showCaption) {
    var actualTabsWidth = tabsWidth.map(function (width) { return 0; });
    var actualLeftIndex = leftIndex;
    var rightIndex = 0;
    if (showCaption) {
        var widthSum = 0;
        var actualWidthSum = 0;
        for (var i = leftIndex; i < tabsWidth.length; i++) {
            if (widthSum + tabsWidth[i] <= containerWidth) {
                widthSum += tabsWidth[i];
                rightIndex = i;
            }
            else {
                break;
            }
        }
        if (rightIndex === tabsWidth.length - 1) {
            for (var i = leftIndex - 1; i >= 0; i--) {
                if (widthSum + tabsWidth[i] <= containerWidth) {
                    widthSum += tabsWidth[i];
                    actualLeftIndex = i;
                }
                else {
                    break;
                }
            }
        }
        for (var i = actualLeftIndex; i <= rightIndex; i++) {
            var width = Math.floor(containerWidth * (tabsWidth[i] / widthSum));
            actualTabsWidth[i] = width;
            actualWidthSum += width;
        }
        var remainder = containerWidth - actualWidthSum;
        for (var i = rightIndex; i >= 0; i--) {
            if (remainder > 0) {
                actualTabsWidth[i]++;
                remainder--;
            }
            else {
                break;
            }
        }
    }
    else {
        rightIndex = leftIndex;
        actualTabsWidth[leftIndex] = containerWidth;
    }
    return {
        widths: actualTabsWidth,
        leftVisibleIndex: actualLeftIndex,
        rightVisibleIndex: rightIndex
    };
}
exports.calcTabHeadersWidth = calcTabHeadersWidth;
