﻿/**
* DevExpress Dashboard (_render-helper.js)
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var string_1 = require("devextreme/core/utils/string");
var _utils_1 = require("../../data/_utils");
var _cacheable_1 = require("../_cacheable");
var scroll_view_1 = require("devextreme/ui/scroll_view");
var RenderHelper = (function () {
    function RenderHelper() {
    }
    RenderHelper.html = function (element, content, encodeHtml) {
        if (encodeHtml) {
            element.innerText = content;
        }
        else {
            element.innerHTML = content;
        }
    };
    RenderHelper.rectangle = function (color, width, height) {
        var w = width != 0 ? width || 10 : 0, h = height || 10;
        return string_1.format("<div style='display:inline-block;width:{0}px;height:{1}px;background-color:{2};padding:0px;margin:0px;'></div>", w, h, color);
    };
    RenderHelper.getActualBorder = function ($element) {
        return {
            width: $element.outerWidth() - $element.width(),
            height: $element.outerHeight() - $element.height()
        };
    };
    RenderHelper.getActualSize = function ($element, collapse) {
        if (collapse === void 0) { collapse = false; }
        if (!$element || $element.length === 0) {
            return { width: 0, height: 0 };
        }
        var values = [];
        if (collapse) {
            $.each($element.children(), function (index, child) {
                values.push(child.style.display);
                child.style.display = 'none';
            });
        }
        try {
            var border = this.getActualBorder($element), isBorderBox = $element.css('box-sizing') == 'border-box';
            return {
                width: $element.width() - (isBorderBox ? 0 : border.width),
                height: $element.height() - (isBorderBox ? 0 : border.height)
            };
        }
        finally {
            if (collapse) {
                $.each($element.children(), function (index, child) {
                    child.style.display = values[index];
                });
            }
        }
    };
    RenderHelper.getDefaultPalette = function () {
        return ['#5F8195', '#B55951', '#AEAF69', '#915E64', '#758E6D', '#85688C', '#91B9C7', '#E49B86'];
    };
    RenderHelper.getScrollable = function (element) {
        return scroll_view_1.default.getInstance(element);
    };
    RenderHelper.updateScrollable = function (element) {
        var scrollable = this.getScrollable(element);
        if (scrollable) {
            scrollable.update();
        }
    };
    RenderHelper.wrapScrollable = function (container, useNativeScrolling, parentOverflow, direction) {
        var scrollableContent = undefined, scrollableOptions = {
            bounceEnabled: false,
            showScrollbar: 'onHover',
            direction: direction
        };
        if (container) {
            if (useNativeScrolling !== 'auto') {
                scrollableOptions.useNative = !!useNativeScrolling;
                scrollableOptions["useSimulatedScrollbar"] = !useNativeScrolling;
                scrollableOptions.bounceEnabled = false;
            }
            var scrollableInstance = scroll_view_1.default.getInstance(container);
            if (scrollableInstance) {
                scrollableInstance.option(scrollableOptions);
            }
            else {
                scrollableInstance = new scroll_view_1.default(container, scrollableOptions);
            }
            scrollableContent = _utils_1.$unwrap(scrollableInstance.content());
        }
        return scrollableContent;
    };
    RenderHelper.getElementBox = function (element) {
        var $fakeContainer = $('<div>', {
            css: {
                position: 'absolute',
                top: 0,
                left: 0,
                visibility: 'hidden',
                overflow: 'hidden'
            }
        }).appendTo($(RenderHelper.getThemeBaseElement()));
        $fakeContainer.append(element);
        try {
            return {
                width: $fakeContainer.outerWidth(),
                height: $fakeContainer.outerHeight()
            };
        }
        finally {
            $fakeContainer.remove();
        }
    };
    RenderHelper.processElement = function ($element, processElement) {
        var $fakeContainer = $('<div>', {
            css: {
                position: 'absolute',
                top: 0,
                left: 0,
                visibility: 'hidden',
                overflow: 'hidden'
            }
        }).appendTo($(RenderHelper.getThemeBaseElement()));
        $fakeContainer.append($element);
        try {
            return processElement();
        }
        finally {
            $fakeContainer.remove();
        }
    };
    RenderHelper.getElementBoxFloat = function (e) {
        var style = window.getComputedStyle(e);
        var boxSizing = style['box-sizing'];
        var rect = e.getBoundingClientRect();
        var size = {
            width: rect.width + parseFloat(style.marginLeft) + parseFloat(style.marginRight),
            height: rect.height + parseFloat(style.marginTop) + parseFloat(style.marginBottom)
        };
        if (boxSizing === 'content-box' || boxSizing === 'padding-box') {
            size.width += parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);
            size.height += parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
            if (boxSizing === 'content-box') {
                size.width += parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
                size.height += parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
            }
        }
        return size;
    };
    RenderHelper.widgetIncidentOccurred = function (e) {
    };
    RenderHelper.getBorderSizeByClasses = function (classNames) {
        if (classNames && classNames.length > 0) {
            var fakeObjs = createFakeObjects(classNames, { width: 100, height: 100 });
            try {
                return RenderHelper.getActualBorder(fakeObjs.lastElement);
            }
            finally {
                fakeObjs.remove();
            }
        }
        else {
            return {
                width: 0,
                height: 0
            };
        }
    };
    RenderHelper.getThemeBaseElement = function () { return document.body; };
    __decorate([
        _cacheable_1.cacheable("getBorderSizeByClasses")
    ], RenderHelper, "getBorderSizeByClasses", null);
    return RenderHelper;
}());
exports.RenderHelper = RenderHelper;
function createFakeObjects(classNames, cssOptions) {
    var firstElement, prevElement, currElement;
    $.each(classNames, function (_, name) {
        currElement = $('<div>', {
            css: __assign({ position: 'absolute', top: 0, left: 0, visibility: 'hidden', overflow: 'hidden' }, cssOptions)
        });
        currElement.appendTo(prevElement ? prevElement : $('body'));
        currElement.addClass(name);
        prevElement = currElement;
        if (!firstElement)
            firstElement = currElement;
    });
    return {
        firstElement: firstElement,
        lastElement: currElement,
        remove: function () {
            firstElement.remove();
        }
    };
}
exports.createFakeObjects = createFakeObjects;
