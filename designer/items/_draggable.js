﻿/**
* DevExpress Dashboard (_draggable.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _undo_engine_helper_1 = require("../../model/internal/_undo-engine-helper");
var $ = require("jquery");
var ko = require("knockout");
var events_1 = require("devextreme/events");
var DragProcessor = (function () {
    function DragProcessor(rootElement) {
        var _this = this;
        this.rootElement = rootElement;
        this.CSS_DRAG_IN_PROGRESS = "dx-dashboard-collection-drag";
        this.CSS_HIGHLIGHT_PLACEHOLDER = "dx-state-hovered";
        this.COLLECTION_SELECTOR = ".dx-dashboard-collection";
        this.TARGET_SELECTOR = ".dx-dashboard-drop-target";
        this.EVENT_NAMESPACE = ".dragInGroup";
        this.currentDrag = null;
        this.state = "pending";
        this.setDataItemsPositions = function (sourceCollectionRoot) {
            var elementData = ko.dataFor(sourceCollectionRoot);
            $(sourceCollectionRoot).find(".dx-dashboard-data-item").each(function (index, item) {
                var groupHolder = ko.contextFor(item).$parents[1], groupSize = groupHolder.items === undefined
                    ? 1
                    : groupHolder.items.length, firstItemInGroup = groupHolder.items ? groupHolder.items[0] : ko.dataFor(item);
                item.setAttribute("data-position", (groupHolder.position === undefined
                    ? elementData["groups"] ? elementData["groups"]().length : 0
                    : groupHolder.position).toString());
                item.setAttribute("data-array-position", elementData.items().indexOf(firstItemInGroup).toString());
                item.setAttribute("data-group-size", groupSize.toString());
            });
            _this.currentDrag.itemPosition = Number(_this.currentDrag.itemElement.getAttribute("data-position"));
            var isOlap = _this.currentDrag.sourceCollection.isOlap();
            $(_this.rootElement).find(_this.COLLECTION_SELECTOR).each(function (_, collectionElement) {
                var isOtherCollection = ko.dataFor(collectionElement) !== ko.dataFor(sourceCollectionRoot);
                var arrayPosition = 0;
                $(collectionElement).find(_this.TARGET_SELECTOR).each(function (index, dragTargetElement) {
                    var elementData = ko.dataFor(dragTargetElement), elementContext = ko.contextFor(dragTargetElement), groupSize = (elementData.items && elementData.items.length) || 0;
                    dragTargetElement.setAttribute("data-position", index.toString());
                    dragTargetElement.setAttribute("data-array-position", arrayPosition.toString());
                    arrayPosition += groupSize;
                    var result = isOtherCollection
                        ? !isOlap
                        : _this.checkItemIsDraggableToPosition(_this.currentDrag.itemPosition, index);
                    $(dragTargetElement).toggleClass("dx-state-active", result);
                });
            });
        };
        this.processHtmlDragEvent = function () {
            _this.currentDrag.originalEvent.dataTransfer.effectAllowed = "move";
            _this.currentDrag.originalEvent.dataTransfer.setData("text", _this.currentDrag.itemPosition.toString());
            var $itemElement = $(_this.currentDrag.itemElement);
            var $groupElement = $itemElement.parents(".dx-dashboard-hierarchical-group"), $uiFeedbackElement = $groupElement.length ? $groupElement : $itemElement;
            var crt = ($uiFeedbackElement.get(0)).cloneNode(true);
            crt.style.position = "absolute";
            crt.style.top = "0px";
            crt.style.right = "0px";
            crt.className = crt.className + " dx-dashboard-cloned-copy";
            crt.style.width = $itemElement.width() + "px";
            _this.currentDrag.clonedElement = crt;
            $uiFeedbackElement.parents(".dx-dashboard-property-grid").append(crt);
            var event = _this.currentDrag.originalEvent;
            if (event.dataTransfer["setDragImage"]) {
                (event.dataTransfer).setDragImage(crt, event.offsetX === undefined ? event.layerX : event.offsetX, event.offsetY === undefined ? event.layerY : event.offsetY);
            }
        };
        this.finishDrag = function () {
            events_1.off(_this.rootElement, _this.EVENT_NAMESPACE);
            $(document).off(_this.EVENT_NAMESPACE);
            _this.rootElement.classList.remove(_this.CSS_DRAG_IN_PROGRESS);
            $(_this.rootElement).parents(".dx-overlay-content").removeClass(_this.CSS_DRAG_IN_PROGRESS).addClass("dx-state-hover");
            $(_this.rootElement).find(_this.TARGET_SELECTOR).removeClass(_this.CSS_HIGHLIGHT_PLACEHOLDER);
            _this.currentDrag.itemElement.classList.remove("dx-dashboard-drag-in-progress");
            var clonedElement = _this.currentDrag.clonedElement;
            if (clonedElement && clonedElement.parentNode) {
                clonedElement.parentNode.removeChild(clonedElement);
            }
            _this.currentDrag.clonedElement = null;
            _this.state = "pending";
        };
    }
    DragProcessor.prototype.startDrag = function (ev) {
        var _this = this;
        this.currentDrag = {
            originalEvent: ev.originalEvent,
            itemPosition: -1,
            clonedElement: null,
            itemElement: ev.originalEvent.target,
            sourceCollection: ko.dataFor($(ev.target).parents(this.COLLECTION_SELECTOR)[0])
        };
        var sourceCollectionElement = $(this.currentDrag.originalEvent.target).parents(this.COLLECTION_SELECTOR).get(0);
        this.state = "dragging";
        this.rootElement.classList.add(this.CSS_DRAG_IN_PROGRESS);
        $(this.rootElement).parents(".dx-overlay-content").addClass(this.CSS_DRAG_IN_PROGRESS);
        this.setDataItemsPositions(sourceCollectionElement);
        this.processHtmlDragEvent();
        this.currentDrag.itemElement.classList.add("dx-dashboard-drag-in-progress");
        events_1.on(this.rootElement, "dragover" + this.EVENT_NAMESPACE, this.TARGET_SELECTOR, {}, function (ev) {
            var originalEvent = ev.originalEvent, targetItem = ko.dataFor(originalEvent.target), position = Number(ev.currentTarget.getAttribute("data-position"));
            if (originalEvent.target.parentNode["className"].indexOf("dx-state-active") !== -1) {
                ev.currentTarget.classList.add(_this.CSS_HIGHLIGHT_PLACEHOLDER);
                originalEvent.dataTransfer.dropEffect = "move";
            }
            else {
                originalEvent.dataTransfer.dropEffect = "none";
            }
            return false;
        });
        events_1.on(this.rootElement, "dragleave" + this.EVENT_NAMESPACE, this.TARGET_SELECTOR, {}, function (ev) {
            ev.currentTarget.classList.remove(_this.CSS_HIGHLIGHT_PLACEHOLDER);
        });
        events_1.on(this.rootElement, "drop" + this.EVENT_NAMESPACE, this.TARGET_SELECTOR, {}, function (ev) {
            var sourceCollection = _this.currentDrag.sourceCollection, targetCollection = ko.dataFor($(ev.target).parents(_this.COLLECTION_SELECTOR)[0]), originalPosition = Number(_this.currentDrag.itemElement.getAttribute("data-array-position")), newPosition = Number(ev.currentTarget.getAttribute("data-array-position")), groupSize = Number(_this.currentDrag.itemElement.getAttribute("data-group-size"));
            _this.interchange(sourceCollection.items, targetCollection !== sourceCollection ? targetCollection : null, originalPosition, newPosition, groupSize);
            _this.finishDrag();
            return false;
        });
        events_1.on(document, "dragend" + this.EVENT_NAMESPACE, function () {
            _this.finishDrag();
        });
        return true;
    };
    DragProcessor.prototype.checkItemIsDraggableToPosition = function (itemIndex, placeholderIndex) {
        return (placeholderIndex < itemIndex) || (placeholderIndex > itemIndex + 1);
    };
    DragProcessor.prototype.interchange = function (items, newOwner, sourceIndex, placeholderIndex, groupSize) {
        if (!groupSize) {
            groupSize = 1;
        }
        if (null === newOwner) {
            if (placeholderIndex > sourceIndex) {
                placeholderIndex--;
                for (var i = 0; i < groupSize; i++) {
                    var item = items()[sourceIndex];
                    items.remove(item);
                    items.splice(placeholderIndex, 0, item);
                }
            }
            else {
                for (var i = 0; i < groupSize; i++) {
                    var item = items()[sourceIndex + i];
                    items.remove(item);
                    items.splice(placeholderIndex + i, 0, item);
                }
            }
        }
        else {
            for (var i = 0; i < groupSize; i++) {
                item = items()[sourceIndex];
                newOwner.relocateItem(item, placeholderIndex + i);
                items.remove(item);
            }
        }
    };
    __decorate([
        _undo_engine_helper_1.wrapWithUndoRedo
    ], DragProcessor.prototype, "interchange", null);
    return DragProcessor;
}());
exports.DragProcessor = DragProcessor;
ko.bindingHandlers["dx-dashboard-container-draggable"] = {
    init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
        var processor = new DragProcessor(element);
        events_1.on(element, "dragstart", function (ev) {
            processor.startDrag(ev);
        });
    }
};
