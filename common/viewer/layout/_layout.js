﻿/**
* DevExpress Dashboard (_layout.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var ko = require("knockout");
var _dashboard_viewer_constants_1 = require("../../../viewer-parts/viewer/_dashboard-viewer-constants");
function _syncLayoutHelper(sourceArray, destArray, addHandler) {
    if (sourceArray) {
        destArray(sourceArray.peek().map(function (item) { return addHandler(item); }));
        return sourceArray.subscribe(function (changes) {
            changes.sort(function (a, b) { return a.status === 'deleted' ? -1 : 1; }).forEach(function (arrayChange) {
                var change = arrayChange;
                if (change.status === 'added') {
                    destArray.splice(change.index, 0, addHandler(change.value));
                }
                else if (change.status === 'deleted') {
                    var itemToDelete = destArray.peek()[change.index];
                    destArray.remove(itemToDelete);
                    itemToDelete.dispose();
                }
            });
        }, null, "arrayChange");
    }
    return undefined;
}
exports._syncLayoutHelper = _syncLayoutHelper;
function setHoverLocation(hoverLayoutItem, location, dropBehavior) {
    if (location === void 0) { location = null; }
    if (dropBehavior === void 0) { dropBehavior = 'InsertBesideGroup'; }
    if (hoverLayoutItem) {
        if (hoverLayoutItem.viewModel.hasItem()) {
            if (dropBehavior === 'InsertIntoGroup') {
                setHoverLocationCore(hoverLayoutItem, location);
            }
            else {
                hoverLayoutItem.dragOverLocation(location);
            }
        }
        else {
            setHoverLocationCore(hoverLayoutItem, location);
        }
    }
}
exports.setHoverLocation = setHoverLocation;
function setHoverLocationCore(hoverLayoutItem, location) {
    if (location === void 0) { location = null; }
    var items = hoverLayoutItem.items().filter(function (item) { return item.visible(); });
    if (!location || hoverLayoutItem.viewModel.orientation() === "Horizontal" && (location === "top" || location === "bottom") ||
        hoverLayoutItem.viewModel.orientation() === "Vertical" && (location === "left" || location === "right")) {
        items.forEach(function (child) { return setHoverLocation(child, location); });
    }
    else {
        var index = (location === "top" || location === "left") ? 0 : items.length - 1;
        setHoverLocation(items[index], location);
    }
}
exports.SplitterSize = 6;
exports.DashboardItemHeaderHeight = 34;
exports.MinWeight = 0.00001;
var LayoutItem = (function () {
    function LayoutItem(viewModel, parent) {
        var _this = this;
        this.viewModel = viewModel;
        this._isUpdating = ko.observable(false);
        this._constraints = null;
        this._width = ko.observable(800);
        this._height = ko.observable(600);
        this._subscriptions = [];
        this.setConstraints = function (constraints) {
            var correctSize = function (value, addition) {
                return (Number.MAX_VALUE - value >= addition) ? value + addition : Number.MAX_VALUE;
            };
            _this._constraints.min.width(correctSize(constraints.min.width, exports.SplitterSize));
            _this._constraints.min.height(correctSize(constraints.min.height, exports.SplitterSize));
            _this._constraints.max.width(correctSize(constraints.max.width, exports.SplitterSize));
            _this._constraints.max.height(correctSize(constraints.max.height, exports.SplitterSize));
        };
        this.items = ko.observableArray([]);
        this.resizeHandles = ko.observable("none");
        this.isSelected = ko.observable(false);
        this.dragOverLocation = ko.observable();
        this.itemStyle = ko.computed(function () {
            var result = "";
            if (!!_this.dragOverLocation()) {
                result += " dx-drag-over-" + _this.dragOverLocation();
            }
            if (_this.isSelected()) {
                result += " dx-layout-selected";
            }
            return result;
        });
        this.coverClickHandler = function (e) {
            _this.onEvent && _this.onEvent(_this, "click");
        };
        this.coverMouseOverHandler = function (e) {
            _this.onEvent && _this.onEvent(_this, "mouseover");
        };
        this.resizeStarted = function () {
            _this.onEvent && _this.onEvent(_this, "resize-started");
        };
        this.resizeCompleted = function () {
            _this.onEvent && _this.onEvent(_this, "resize-completed");
        };
        this.getContext = function () {
            return _this.onEvent && _this.onEvent(_this, "get-context");
        };
        this.getLocalContext = function () {
            return _this.onEvent && _this.onEvent(_this, "get-local-context");
        };
        this.verticalPaddings = ko.observable(0);
        this.horizontalPaddings = ko.observable(0);
        this.repaintCallbacks = $.Callbacks();
        this.sizeController = {
            getWidth: function () { return _this.containerWidth(); },
            getHeight: function () { return _this.containerHeight(); },
            requestRepaint: this.repaintCallbacks,
            visible: this.visible,
            setConstraints: this.setConstraints
        };
        var self = this;
        this._parent = ko.observable(parent);
        if (!!this._parent()) {
            this.isDesignMode = this._parent().isDesignMode;
            this.isLayoutReady = this._parent().isLayoutReady;
        }
        else {
            this.isDesignMode = ko.observable(false);
            this.isLayoutReady = ko.observable(true);
        }
        this._constraints = {
            min: {
                width: ko.observable(viewModel.hasItem() ? _dashboard_viewer_constants_1.MIN_PANE_WIDTH : 0),
                height: ko.observable(viewModel.hasItem() ? _dashboard_viewer_constants_1.MIN_PANE_HEIGHT : 0)
            },
            max: {
                width: ko.observable(Number.MAX_VALUE),
                height: ko.observable(Number.MAX_VALUE)
            }
        };
        var visible = ko.observable(true);
        this.visible = ko.computed({
            read: function () {
                var atLeastOneChildVisible = _this.items().reduce(function (res, item) { return res || item.visible(); }, _this.items().length === 0 || !!_this.viewModel.hasItem());
                return atLeastOneChildVisible && visible();
            },
            write: function (val) {
                visible(val);
            }
        });
        this.minWidth = ko.computed(function () {
            var result = _this._constraints.min.width();
            if (_this.items().length > 0) {
                if (_this.viewModel.orientation() === "Horizontal") {
                    var minFromChildren = _this.items().reduce(function (total, item) { return total + item.minWidth(); }, 0);
                    result = minFromChildren > result ? minFromChildren : result;
                }
                else {
                    _this.items().forEach(function (item) {
                        if (item.minWidth() > result) {
                            result = item.minWidth();
                        }
                    });
                }
            }
            return result + _this.horizontalPaddings();
        });
        this.minHeight = ko.computed(function () {
            var result = _this._constraints.min.height();
            if (_this.items().length > 0) {
                if (_this.viewModel.orientation() === "Vertical") {
                    var minFromChildren = _this.items().reduce(function (total, item) { return total + item.minHeight(); }, 0);
                    result = Math.max(minFromChildren, result);
                }
                else {
                    _this.items().forEach(function (item) {
                        if (item.minHeight() > result) {
                            result = item.minHeight();
                        }
                    });
                }
            }
            return result + _this.verticalPaddings();
        });
        this.maxWidth = ko.computed(function () {
            return Math.min(Number.MAX_VALUE, _this._constraints.max.width());
        });
        this.maxHeight = ko.computed(function () {
            var result = _this._constraints.max.height();
            if (_this.items().length > 0 && !_this.viewModel.ignoreChildMaxHeight) {
                if (_this.viewModel.orientation() === "Vertical") {
                    if (_this.items().some(function (item) { return item.maxHeight() === Number.MAX_VALUE; })) {
                        result = Number.MAX_VALUE;
                    }
                    else {
                        result = _this.items().reduce(function (total, item) { return total + item.maxHeight(); }, 0);
                    }
                }
                else {
                    result = _this.items().reduce(function (total, item) { return Math.max(total, item.maxHeight()); }, 0);
                }
            }
            return Math.min(Number.MAX_VALUE, result + _this.verticalPaddings());
        });
        this.width = ko.computed({
            read: function () {
                return _this._width() > _this.minWidth() ? _this._width() : _this.minWidth();
            },
            write: function (val) {
                if (_this._parent()) {
                    var newWeight = _this.viewModel.weight() * (val / _this._width() || 1);
                    _this._changeWeight(newWeight);
                }
                else {
                    _this._width(val);
                }
            }
        });
        this.height = ko.computed({
            read: function () {
                return _this._height() > _this.minHeight() ? _this._height() : _this.minHeight();
            },
            write: function (val) {
                if (_this._parent()) {
                    var newWeight = _this.viewModel.weight() * (val / _this._height() || 1);
                    _this._changeWeight(newWeight);
                }
                else {
                    _this._height(val);
                }
            }
        });
        this.contentWidth = ko.computed(function () { return _this.width() - _this.horizontalPaddings(); });
        this.contentHeight = ko.computed(function () { return _this.height() - _this.verticalPaddings(); });
        this.containerWidth = ko.computed(function () { return _this.width() - exports.SplitterSize; });
        this.containerHeight = ko.computed(function () { return _this.height() - exports.SplitterSize; });
        this.areChildrenSelected = ko.pureComputed(function () {
            var result = !!_this.viewModel.hasItem() && !!_this.visible() && _this.isSelected();
            _this.items().forEach(function (layoutItem) {
                result = result || layoutItem.areChildrenSelected();
            });
            return result;
        });
        this._subscriptions.push(_syncLayoutHelper(viewModel.visibleItems, this.items, function (model) { return new LayoutItem(model._createViewModel(), self); }));
        this._subscriptions.push(ko.computed(function () {
            if (!_this._isUpdating()) {
                _this._updateChildrenSize(_this.items().filter(function (item) { return item.visible(); }));
                _this._updateChildrenResizeHandles(_this.items());
            }
        }));
        this._subscriptions.push(ko.computed(function () {
            var isReady = _this.isLayoutReady(), width = _this.width(), height = _this.height();
            if (isReady) {
                _this.repaintCallbacks.fire();
            }
        }));
        var placeholderViewModel = this.viewModel.getPlaceholder && this.viewModel.getPlaceholder();
        if (placeholderViewModel) {
            this.placeholderItem = new LayoutItem(placeholderViewModel, this);
        }
        this._subscriptions.push(this.visible, this.minWidth, this.minHeight, this.maxWidth, this.maxHeight, this.width, this.height, this.areChildrenSelected);
    }
    LayoutItem.findLargestItem = function (layoutItem) {
        var _this = this;
        if (layoutItem.viewModel.hasItem()) {
            return { maxSquare: layoutItem.width() * layoutItem.height(), item: layoutItem };
        }
        var result = { maxSquare: 0, item: null };
        layoutItem.items().forEach(function (item) {
            var itemMaxSquare = _this.findLargestItem(item);
            if (result.maxSquare < itemMaxSquare.maxSquare) {
                result = itemMaxSquare;
            }
        });
        return result;
    };
    LayoutItem.prototype._changeWeight = function (newWeight) {
        this._parent() && this._parent()._isUpdating(true);
        try {
            this._changeWeightCore(newWeight);
        }
        finally {
            this._parent() && this._parent()._isUpdating(false);
        }
    };
    LayoutItem.prototype._changeWeightCore = function (newWeight) {
        var selfIndex = this._parent().items().indexOf(this);
        var neighbourItem = this._parent().items()[selfIndex + 1];
        var newNeighbourWeight = neighbourItem.viewModel.weight() - (newWeight - this.viewModel.weight());
        neighbourItem.viewModel.weight(this._correntWeight(newNeighbourWeight));
        this.viewModel.weight(this._correntWeight(newWeight));
    };
    LayoutItem.prototype._correntWeight = function (weight) {
        return weight < exports.MinWeight ? exports.MinWeight : weight;
    };
    LayoutItem.prototype._safeSetWidth = function (itemWidth) {
        var computedWidth = itemWidth;
        if (computedWidth < this.minWidth()) {
            computedWidth = this.minWidth();
        }
        if (computedWidth > this.maxWidth()) {
            computedWidth = this.maxWidth();
        }
        this._width(computedWidth);
    };
    LayoutItem.prototype._safeSetHeight = function (itemHeight) {
        var computedHeight = itemHeight;
        if (computedHeight < this.minHeight()) {
            computedHeight = this.minHeight();
        }
        if (computedHeight > this.maxHeight()) {
            computedHeight = this.maxHeight();
        }
        this._height(computedHeight);
    };
    LayoutItem.prototype._updateChildrenSize = function (items) {
        var _this = this;
        if (items.length > 0) {
            var totalWeight = items.reduce(function (total, item) { return total + item.viewModel.weight(); }, 0);
            var undistributedDelta = 0;
            if (this.viewModel.orientation() === "Horizontal") {
                items.forEach(function (item) {
                    item._height(_this.contentHeight());
                    var itemDimension = _this.contentWidth() * item.viewModel.weight() / totalWeight;
                    item._safeSetWidth(itemDimension);
                    undistributedDelta += item._width.peek() - itemDimension;
                });
                items.reduceRight(function (_, item) {
                    if (undistributedDelta !== 0) {
                        var itemDimenstion = item._width.peek();
                        item._safeSetWidth(itemDimenstion - undistributedDelta);
                        undistributedDelta += item._width.peek() - itemDimenstion;
                    }
                }, {});
                if (undistributedDelta < 0) {
                    items[items.length - 1]._width(items[items.length - 1]._width.peek() - undistributedDelta);
                }
            }
            else {
                items.forEach(function (item) {
                    item._width(_this.contentWidth());
                    var itemDimension = _this.contentHeight() * item.viewModel.weight() / totalWeight;
                    item._safeSetHeight(itemDimension);
                    undistributedDelta += item._height.peek() - itemDimension;
                });
                items.reduceRight(function (_, item) {
                    if (undistributedDelta !== 0) {
                        var itemDimenstion = item._height.peek();
                        item._safeSetHeight(itemDimenstion - undistributedDelta);
                        undistributedDelta += item._height.peek() - itemDimenstion;
                    }
                }, {});
                if (undistributedDelta < 0) {
                    items[items.length - 1]._height(items[items.length - 1]._height.peek() - undistributedDelta);
                }
            }
        }
    };
    LayoutItem.prototype._updateChildrenResizeHandles = function (items) {
        var itemsCount = items.length;
        if (itemsCount > 0) {
            var handle = this.viewModel.orientation() === "Horizontal" ? "e" : "s";
            items.forEach(function (item, index) {
                item.resizeHandles(index < itemsCount - 1 ? handle : "none");
            });
        }
    };
    LayoutItem.prototype.dispose = function () {
        this._parent(null);
        if (this.placeholderItem) {
            this.placeholderItem.dispose();
            this.placeholderItem = null;
        }
        this.repaintCallbacks.empty();
        this.items().forEach(function (i) { return i.dispose(); });
        this._subscriptions.forEach(function (subscription) { return subscription && subscription.dispose(); });
        this._subscriptions = [];
    };
    LayoutItem.prototype.isValidWidth = function (val) {
        if (this._parent()) {
            if (val < this.minWidth() || val > this.maxWidth()) {
                return false;
            }
            var selfIndex = this._parent().items().indexOf(this);
            if (selfIndex < this._parent().items().length - 1) {
                var neighbourItem = this._parent().items()[selfIndex + 1];
                var neighbourNewWidth = neighbourItem.width() - val + this.width();
                if (neighbourNewWidth < neighbourItem.minWidth() || neighbourNewWidth > neighbourItem.maxWidth()) {
                    return false;
                }
            }
        }
        return this.minWidth() !== this.maxWidth();
    };
    LayoutItem.prototype.isValidHeight = function (val) {
        if (this._parent()) {
            if (val < this.minHeight() || val > this.maxHeight()) {
                return false;
            }
            var selfIndex = this._parent().items().indexOf(this);
            if (selfIndex < this._parent().items().length - 1) {
                var neighbourItem = this._parent().items()[selfIndex + 1];
                var neighbourNewHeight = neighbourItem.height() - val + this.height();
                if (neighbourNewHeight < neighbourItem.minHeight() || neighbourNewHeight > neighbourItem.maxHeight()) {
                    return false;
                }
            }
        }
        return this.minHeight() !== this.maxHeight();
    };
    LayoutItem.prototype.getSelectionParentsList = function (location) {
        var current = this;
        var parent = current._parent();
        var result = [{ node: current, dropBehavior: 'InsertBesideGroup' }];
        var orientation = !!parent && parent.viewModel.orientation();
        do {
            if (!!parent && !parent.viewModel.hasItem()) {
                var items = parent.items().filter(function (item) { return item.visible(); });
                var itemIndex = items.indexOf(current);
                var firstItemIndex = 0;
                var lastItemIndex = items.length - 1;
                if (parent.viewModel.orientation() === "Horizontal" && (location === "left" || location === "right")) {
                    if (items.length > 1 &&
                        (location === "left" && itemIndex > firstItemIndex || location === "right" && itemIndex < lastItemIndex
                            || location === "left" && itemIndex === lastItemIndex || location === "right" && itemIndex === firstItemIndex)) {
                        return result;
                    }
                    if (location === "left" && itemIndex === firstItemIndex || location === "right" && itemIndex === lastItemIndex) {
                        orientation = this._inverseOrientation(parent.viewModel.orientation());
                    }
                }
                if (parent.viewModel.orientation() === "Vertical" && (location === "top" || location === "bottom")) {
                    if (items.length > 1 &&
                        (location === "top" && itemIndex > firstItemIndex || location === "bottom" && itemIndex < lastItemIndex
                            || location === "top" && itemIndex === lastItemIndex || location === "bottom" && itemIndex === firstItemIndex)) {
                        return result;
                    }
                    if (location === "top" && itemIndex === firstItemIndex || location === "bottom" && itemIndex === lastItemIndex) {
                        orientation = this._inverseOrientation(parent.viewModel.orientation());
                    }
                }
            }
            current = parent;
            parent = current && current._parent();
            if (!!current && !current.viewModel.hasItem() && orientation == current.viewModel.orientation()) {
                result.push({ node: current, dropBehavior: 'InsertBesideGroup' });
            }
            if (!!current && current.viewModel.hasItem()
                && current.viewModel.orientation() !== this._getRequiredOrientationByLocation(location)) {
                result.push({ node: current, dropBehavior: 'InsertIntoGroup' });
            }
        } while (!!current && !!parent && !current.viewModel.hasItem());
        return result;
    };
    LayoutItem.prototype._getRequiredOrientationByLocation = function (location) {
        return (location === 'left' || location === 'right') ? 'Horizontal' : 'Vertical';
    };
    LayoutItem.prototype._inverseOrientation = function (orientation) {
        return orientation === "Horizontal" ? "Vertical" : "Horizontal";
    };
    LayoutItem.prototype.findLayoutItem = function (criteria) {
        var result = undefined;
        if (criteria(this)) {
            result = this;
        }
        if (!result) {
            this.items.peek().forEach(function (item) {
                result = item.findLayoutItem(criteria) || result;
            });
        }
        return result;
    };
    LayoutItem.prototype.findLayoutItemByItemModel = function (itemModel) {
        return this.findLayoutItem(function (item) {
            return item.viewModel.model === itemModel.model;
        });
    };
    LayoutItem.prototype.onEvent = function (item, event) {
        return this._parent() && this._parent().onEvent && this._parent().onEvent(item, event);
    };
    LayoutItem.prototype.updateSize = function (width, height) {
        try {
            this.isLayoutReady(false);
            this.width(width);
            this.height(height);
        }
        finally {
            this.isLayoutReady(true);
        }
    };
    LayoutItem.prototype.create = function (modelItemJson, location, insertBehavior) {
        var rootItem = this.getRoot();
        var createdItemViewModel = this.viewModel.create(modelItemJson, location, insertBehavior);
        var createdLayoutItem = rootItem.findLayoutItemByItemModel(createdItemViewModel);
        createdLayoutItem && createdLayoutItem.coverClickHandler(null);
        return createdLayoutItem;
    };
    LayoutItem.prototype.moveTo = function (layoutNode, location, insertBehavior) {
        var rootItem = this.getRoot();
        this.viewModel.moveTo(layoutNode.viewModel, location, insertBehavior);
        var createdLayoutItem = rootItem.findLayoutItemByItemModel(this.viewModel);
        createdLayoutItem && createdLayoutItem.coverClickHandler(null);
        return createdLayoutItem;
    };
    LayoutItem.prototype.delete = function () {
        this.viewModel.delete();
        this._parent(null);
    };
    LayoutItem.prototype.getRoot = function () {
        var root = this;
        while (root._parent()) {
            root = root._parent();
        }
        return root;
    };
    LayoutItem.prototype.canAttach = function (something) {
        return !!this._parent() && this.viewModel.canAttach(something);
    };
    LayoutItem.prototype.getPlaceholder = function () {
        return this.placeholderItem;
    };
    return LayoutItem;
}());
exports.LayoutItem = LayoutItem;
ko.components.register('dx-layout-item', {
    viewModel: function (params) {
        this.layoutItem = ko.computed(function () { return ko.unwrap(params.layoutItem); });
    },
    template: { element: 'dx-layout-item' }
});
