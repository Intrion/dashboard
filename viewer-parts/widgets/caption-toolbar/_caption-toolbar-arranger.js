﻿/**
* DevExpress Dashboard (_caption-toolbar-arranger.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
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
function arrangeToolbarItems(staticItems, actionItems, stateItems, navigationItems, showStaticItemsOnCenter) {
    if (staticItems === void 0) { staticItems = []; }
    if (actionItems === void 0) { actionItems = []; }
    if (stateItems === void 0) { stateItems = []; }
    if (navigationItems === void 0) { navigationItems = []; }
    if (showStaticItemsOnCenter === void 0) { showStaticItemsOnCenter = false; }
    var items = [];
    navigationItems.forEach(function (button) {
        items.push(__assign({}, button, { location: staticItems.length !== 0 ? 'before' : 'after' }));
    });
    staticItems.forEach(function (button) {
        items.push(__assign({}, button, { location: showStaticItemsOnCenter ? 'center' : 'before' }));
    });
    actionItems.forEach(function (button) {
        items.push(__assign({}, button, { location: 'after' }));
    });
    if (actionItems.length !== 0 && stateItems.length !== 0) {
        items.push({
            location: 'after',
            isSeparator: true
        });
    }
    stateItems.forEach(function (button) {
        items.push(__assign({}, button, { location: 'after' }));
    });
    return items;
}
function arrangeFloatingToolbarItems(itemOptions) {
    return arrangeToolbarItems(undefined, itemOptions.actionItems, itemOptions.stateItems, itemOptions.navigationItems);
}
exports.arrangeFloatingToolbarItems = arrangeFloatingToolbarItems;
function arrangeHoveredToolbarItems(itemOptions, containerHovered, disabled) {
    return arrangeToolbarItems(itemOptions.staticItems, containerHovered && !disabled ? itemOptions.actionItems : undefined, itemOptions.stateItems, itemOptions.navigationItems);
}
exports.arrangeHoveredToolbarItems = arrangeHoveredToolbarItems;
function arrangeTitleToolbarItems(itemOptions, showStaticItemsOnCenter) {
    return arrangeToolbarItems(itemOptions.staticItems, itemOptions.actionItems, itemOptions.stateItems, itemOptions.navigationItems, showStaticItemsOnCenter);
}
exports.arrangeTitleToolbarItems = arrangeTitleToolbarItems;
function arrangeStaticToolbarItems(itemOptions, disabled) {
    return arrangeToolbarItems(itemOptions.staticItems, disabled ? undefined : itemOptions.actionItems, itemOptions.stateItems, itemOptions.navigationItems);
}
exports.arrangeStaticToolbarItems = arrangeStaticToolbarItems;
