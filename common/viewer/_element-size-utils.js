/**
* DevExpress Dashboard (_element-size-utils.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createItemSizeUpdater(item, sizeController) {
    var handler = function () {
        var width = sizeController.getWidth();
        var height = sizeController.getHeight();
        if (Math.abs(width - item.width()) > 1 || Math.abs(height - item.height()) > 1) {
            item.setSize(width, height);
        }
    };
    sizeController.requestRepaint.add(handler);
    return {
        dispose: function () { return sizeController.requestRepaint.remove(handler); }
    };
}
exports.createItemSizeUpdater = createItemSizeUpdater;
function createElementSizeUpdater(element, sizeController) {
    var handler = function () {
        setElementSize(element, sizeController);
    };
    sizeController.requestRepaint.add(handler);
    return {
        dispose: function () { return sizeController.requestRepaint.remove(handler); }
    };
}
exports.createElementSizeUpdater = createElementSizeUpdater;
function setElementSize(element, sizeController) {
    var width = sizeController.getWidth();
    var height = sizeController.getHeight();
    element.style.width = width + 'px';
    element.style.height = height + 'px';
    if (width === 0 || height === 0) {
        element.classList.add('dx-dashboard-hidden-element');
    }
    else {
        element.classList.remove('dx-dashboard-hidden-element');
    }
}
exports.setElementSize = setElementSize;
