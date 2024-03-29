﻿/**
* DevExpress Dashboard (_resizable.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devices_1 = require("devextreme/core/devices");
var $ = require("jquery");
var ko = require("knockout");
var eventUtils = require("devextreme/events/utils");
var events_1 = require("devextreme/events");
var mouseMoveHandlerKey = 'dxpointermove.dx-ko-layout-resize';
var mouseDownHandlerKey = 'dxpointerdown';
var mouseUpHandlerKey = 'dxpointerup.dx-ko-layout-resize';
function skipDevice(ev) {
    return devices_1.default.real().ios && eventUtils.isMouseEvent(ev);
}
function createHResizeHandler(layoutItem, $element, $ghostbar) {
    return function (ev) {
        $element.parents(".dx-layout").addClass("dx-layout-drag-in-progress");
        layoutItem.resizeStarted && layoutItem.resizeStarted();
        ev.preventDefault();
        var currentWidth = 0;
        var ghostOffsetX = ev.offsetX ? ev.offsetX : 0;
        var originalX = ev.pageX;
        var $ghostbar = $('<div>', {
            class: 'dx-ghostbar-e',
            css: {
                height: $element.outerHeight(),
                top: $element.offset().top,
                left: originalX - ghostOffsetX
            }
        }).appendTo('body');
        events_1.on(document, mouseMoveHandlerKey, function (e) {
            if (!skipDevice(e)) {
                var newWidth = layoutItem.width() + e.pageX - originalX;
                if (!layoutItem.isValidWidth || layoutItem.isValidWidth(newWidth)) {
                    currentWidth = newWidth;
                    $ghostbar.css("left", e.pageX - ghostOffsetX);
                }
            }
            e.preventDefault();
            return false;
        });
        events_1.on(document, mouseUpHandlerKey, function (e) {
            setTimeout(function () { return layoutItem.width(currentWidth); }, 1);
            $ghostbar.remove();
            $element.parents(".dx-layout").removeClass("dx-layout-drag-in-progress");
            events_1.off(document, mouseMoveHandlerKey);
            events_1.off(document, mouseUpHandlerKey);
            layoutItem.resizeCompleted && layoutItem.resizeCompleted();
            e.preventDefault();
        });
    };
}
function createVResizeHandler(layoutItem, $element, $ghostbar) {
    return function (ev) {
        $element.parents(".dx-layout").addClass("dx-layout-drag-in-progress");
        layoutItem.resizeStarted && layoutItem.resizeStarted();
        ev.preventDefault();
        var currentHeight = 0;
        var ghostOffsetY = ev.offsetY ? ev.offsetY : 0;
        var originalY = ev.pageY;
        var $ghostbar = $('<div>', {
            class: 'dx-ghostbar-s',
            css: {
                width: $element.outerWidth(),
                left: $element.offset().left,
                top: originalY - ghostOffsetY
            }
        }).appendTo('body');
        events_1.on(document, mouseMoveHandlerKey, function (e) {
            if (!skipDevice(e)) {
                var newHeight = layoutItem.height() + e.pageY - originalY;
                if (!layoutItem.isValidHeight || layoutItem.isValidHeight(newHeight)) {
                    currentHeight = newHeight;
                    $ghostbar.css("top", e.pageY - ghostOffsetY);
                }
            }
            return false;
        });
        events_1.on(document, mouseUpHandlerKey, function (e) {
            setTimeout(function () { return layoutItem.height(currentHeight); }, 1);
            $ghostbar.remove();
            $element.parents(".dx-layout").removeClass("dx-layout-drag-in-progress");
            events_1.off(document, mouseMoveHandlerKey);
            events_1.off(document, mouseUpHandlerKey);
            layoutItem.resizeCompleted && layoutItem.resizeCompleted();
        });
    };
}
ko.bindingHandlers["dx-ko-resizable"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var layoutItem = valueAccessor();
        var $element = $(element);
        var subscriptions = [];
        var unsubscribe = function () {
            subscriptions.forEach(function (subscr) {
                subscr.subscribable.dispose();
                events_1.off(subscr.dragbar.get(0), mouseDownHandlerKey);
                subscr.dragbar.remove();
            });
            subscriptions.splice(0, subscriptions.length);
        };
        var createResizeDragBars = function (resizeHandles) {
            unsubscribe();
            if (resizeHandles === "e") {
                var $dragBar = $('<div>', {
                    class: 'dx-dragbar-e',
                    ondragover: "event.stopPropagation();",
                    ondrop: "event.stopPropagation();",
                    css: {
                        height: layoutItem.height()
                    }
                }).appendTo($element);
                var subscr = layoutItem.height.subscribe(function (val) {
                    $dragBar.css("height", val);
                });
                events_1.on($dragBar.get(0), mouseDownHandlerKey, createHResizeHandler(layoutItem, $element, $dragBar));
                subscriptions.push({
                    subscribable: subscr,
                    dragbar: $dragBar
                });
            }
            else if (resizeHandles === "s") {
                var $dragBar = $('<div>', {
                    class: 'dx-dragbar-s',
                    ondragover: "event.stopPropagation();",
                    ondrop: "event.stopPropagation();",
                    css: {
                        width: layoutItem.width()
                    }
                }).appendTo($element);
                var subscr = layoutItem.width.subscribe(function (val) {
                    $dragBar.css("width", val);
                });
                events_1.on($dragBar.get(0), mouseDownHandlerKey, createVResizeHandler(layoutItem, $element, $dragBar));
                subscriptions.push({
                    subscribable: subscr,
                    dragbar: $dragBar
                });
            }
        };
        if (ko.isSubscribable(layoutItem.resizeHandles)) {
            (layoutItem.resizeHandles).subscribe(createResizeDragBars);
        }
        createResizeDragBars(layoutItem.resizeHandles());
        ko.utils.domNodeDisposal.addDisposeCallback(element, unsubscribe);
    }
};
