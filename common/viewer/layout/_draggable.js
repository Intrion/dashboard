/**
* DevExpress Dashboard (_draggable.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _layout_1 = require("./_layout");
var ko = require("knockout");
var events_1 = require("devextreme/events");
function getLocation(x, y, width, height) {
    if (y >= height / width * x) {
        if (y >= -height / width * x + height) {
            return "bottom";
        }
        else {
            return "left";
        }
    }
    else {
        if (y >= -height / width * x + height) {
            return "right";
        }
        else {
            return "top";
        }
    }
}
var DragDataProvider = (function () {
    function DragDataProvider() {
    }
    DragDataProvider.dragData = null;
    return DragDataProvider;
}());
exports.DragDataProvider = DragDataProvider;
function canDrop(what, to) {
    if (!!what) {
        return to.canAttach(what.viewModel);
    }
    if (!!DragDataProvider.dragData && !!DragDataProvider.dragData.itemJson) {
        return to.canAttach(DragDataProvider.dragData.itemJson);
    }
    return false;
}
function findElementIndex(originalElement, selector, mouseClientX, mouseClientY) {
    var elements = originalElement
        .parentElement
        .querySelectorAll(selector);
    for (var index = 0; index < elements.length; index++) {
        var element = elements[index];
        var rect = element.getBoundingClientRect();
        if (rect.left < mouseClientX && rect.right > mouseClientX
            && rect.top < mouseClientY && rect.bottom > mouseClientY) {
            return index;
        }
    }
    return -1;
}
ko.bindingHandlers["dx-ko-layout-draggable"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var model = ko.unwrap(valueAccessor());
        var currentItem = ko.observable(null), dragOverItem = ko.observable(null), currentTargetItem = ko.observable(null), currentTargetItemBehavior = ko.observable('InsertBesideGroup'), hoverLocation = ko.observable(), timer = ko.observable(), inTimer = ko.observable(false), resetDragOverState = function () {
            timer() && clearInterval(timer());
            _layout_1.setHoverLocation(dragOverItem());
            _layout_1.setHoverLocation(currentTargetItem());
            currentTargetItem(null);
            currentTargetItemBehavior('InsertBesideGroup');
            dragOverItem(undefined);
            timer(undefined);
            inTimer(false);
        };
        ko.computed(function () {
            if (model.enabled === undefined || ko.unwrap(model.enabled)) {
                events_1.on(element, "dragstart.dx-layout-drag", ".dx-layout-item-plate", function (ev) {
                    var originalEvent = ev.originalEvent, item = ko.dataFor(originalEvent.target);
                    if (item instanceof _layout_1.LayoutItem) {
                        currentItem(item);
                        originalEvent.dataTransfer.effectAllowed = "move";
                        DragDataProvider.dragData = { "type": "LayoutItem", "id": currentItem().viewModel["itemId"] };
                        originalEvent.dataTransfer.setData("text", JSON.stringify(DragDataProvider.dragData));
                        return true;
                    }
                });
                events_1.on(element, "dragend.dx-layout-drag", function (ev) {
                    currentItem() && currentItem().visible(true);
                    resetDragOverState();
                    currentItem(null);
                    DragDataProvider.dragData = null;
                });
                events_1.on(element, "dragover.dx-layout-drag", function (ev) {
                    if (inTimer() || !DragDataProvider.dragData) {
                        return;
                    }
                    var originalEvent = ev.originalEvent, targetItem = ko.dataFor(originalEvent.target);
                    if (targetItem instanceof _layout_1.LayoutItem && canDrop(currentItem(), targetItem)) {
                        var dragOverController = targetItem.viewModel.dragOverInnerElementController;
                        if (dragOverController) {
                            var index = findElementIndex(ev.target, dragOverController.selector, ev.clientX, ev.clientY);
                            if (index !== -1) {
                                dragOverController.onDragOver(index);
                            }
                        }
                        var currentHoverLocation = getLocation(originalEvent.offsetX, originalEvent.offsetY, targetItem.width(), targetItem.height());
                        if (dragOverItem() !== targetItem || currentHoverLocation !== hoverLocation()) {
                            currentItem() && currentItem().visible(false);
                            resetDragOverState();
                            hoverLocation(currentHoverLocation);
                            dragOverItem(targetItem);
                            _layout_1.setHoverLocation(dragOverItem(), hoverLocation());
                            currentTargetItem(dragOverItem());
                            currentTargetItemBehavior('InsertBesideGroup');
                            var selectionList = dragOverItem().getSelectionParentsList(hoverLocation());
                            if (selectionList.length > 1) {
                                var currentIndex = 1;
                                timer() && clearInterval(timer());
                                timer(window.setInterval(function () {
                                    inTimer(true);
                                    try {
                                        _layout_1.setHoverLocation(currentTargetItem(), null, currentTargetItemBehavior());
                                        currentTargetItem(selectionList[currentIndex].node);
                                        currentTargetItemBehavior(selectionList[currentIndex].dropBehavior);
                                        _layout_1.setHoverLocation(currentTargetItem(), hoverLocation(), currentTargetItemBehavior());
                                        currentIndex++;
                                        if (currentIndex >= selectionList.length) {
                                            currentIndex = 0;
                                        }
                                    }
                                    finally {
                                        inTimer(false);
                                    }
                                }, 1000));
                            }
                        }
                        ev.preventDefault();
                    }
                });
                events_1.on(element, "dragleave.dx-layout-drag", function () {
                    resetDragOverState();
                });
                events_1.on(element, "drop.dx-layout-drag", function (ev) {
                    try {
                        var originalEvent = ev.originalEvent, targetItem = ko.dataFor(originalEvent.target), targetItemInsertionBehavior = 'InsertBesideGroup';
                        if (targetItem instanceof _layout_1.LayoutItem && targetItem !== currentItem()) {
                            var dragDataString = originalEvent.dataTransfer.getData("text") || "{}";
                            var dragData = JSON.parse(dragDataString);
                            if (dragData.type === 'LayoutItem') {
                                var itemToAttch = currentItem();
                                targetItem = currentTargetItem();
                                targetItemInsertionBehavior = currentTargetItemBehavior();
                                setTimeout(function () {
                                    _layout_1.setHoverLocation(itemToAttch);
                                    itemToAttch.moveTo(targetItem, hoverLocation(), targetItemInsertionBehavior);
                                }, 1);
                                ev.stopPropagation();
                            }
                            if (dragData.type === 'NewLayoutItem') {
                                targetItem = currentTargetItem();
                                targetItemInsertionBehavior = currentTargetItemBehavior();
                                setTimeout(function () {
                                    targetItem.create(dragData.itemJson, hoverLocation(), targetItemInsertionBehavior);
                                }, 1);
                                ev.stopPropagation();
                            }
                        }
                    }
                    finally {
                        resetDragOverState();
                        currentItem(null);
                        return false;
                    }
                });
            }
            else {
                events_1.off(element, ".dx-layout-drag");
            }
        });
    }
};
