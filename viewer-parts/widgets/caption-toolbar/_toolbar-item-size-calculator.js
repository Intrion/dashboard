/**
* DevExpress Dashboard (_toolbar-item-size-calculator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calcMaxWidth(itemsWidth, sectionWidth, sectionMaxWidth) {
    var itemsMaxWidth = itemsWidth.map(function (item) { return undefined; });
    if (sectionWidth > sectionMaxWidth) {
        for (var i = itemsWidth.length - 1; i >= 0; i--) {
            var difference = sectionWidth - sectionMaxWidth;
            var itemWidth = itemsWidth[i];
            var itemMaxWidth = Math.max(0, itemWidth - difference);
            sectionWidth -= (itemWidth - itemMaxWidth);
            itemsMaxWidth[i] = itemMaxWidth;
            if (sectionWidth <= sectionMaxWidth) {
                break;
            }
        }
    }
    return itemsMaxWidth;
}
exports.calcMaxWidth = calcMaxWidth;
