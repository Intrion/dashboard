﻿/**
* DevExpress Dashboard (_item-viewer-adapter-base.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _base_item_1 = require("../../../viewer-parts/viewer-items/_base-item");
var disposable_object_1 = require("../../../model/disposable-object");
var custom_item_1 = require("../../../model/items/custom-item/custom-item");
var _viewer_item_factory_1 = require("../../../viewer-parts/_viewer-item-factory");
var _utils_1 = require("../../../data/_utils");
var custom_viewer_item_1 = require("../../custom-viewer-item/custom-viewer-item");
var index_internal_1 = require("../../../model/index.internal");
var $ = require("jquery");
var ItemViewerAdapterBase = (function (_super) {
    __extends(ItemViewerAdapterBase, _super);
    function ItemViewerAdapterBase(dashboardItem, element, context, localContext, beforeRender, onDisposed) {
        if (beforeRender === void 0) { beforeRender = function (item) { }; }
        if (onDisposed === void 0) { onDisposed = function () { }; }
        var _this = _super.call(this) || this;
        _this.dashboardItem = dashboardItem;
        _this.element = element;
        _this.context = context;
        _this.localContext = localContext;
        _this.beforeRender = beforeRender;
        _this.onDisposed = onDisposed;
        _this.modelSubscriptions = [];
        _this.itemUpdated = function (item) { };
        _this.updateServerContentHandler = function (newContent) {
            if (newContent) {
                _this.ensureViewerItem(!_this.item, newContent);
                _this.item.updateState({ loading: false, operations: { actions: true, exportTo: true } });
            }
            else if (!!_this.item) {
                _this.item.updateState({ loading: true, operations: { exportTo: true } });
            }
            _this.itemUpdated(_this.item);
        };
        return _this;
    }
    Object.defineProperty(ItemViewerAdapterBase.prototype, "name", {
        get: function () {
            return this.dashboardItem.componentName();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemViewerAdapterBase.prototype, "_isDesignMode", {
        get: function () {
            var ignoreDesignMode = this.localContext && this.localContext.ignoreDesignMode || false;
            if (ignoreDesignMode) {
                return false;
            }
            else {
                return this.context.isDesignMode();
            }
        },
        enumerable: true,
        configurable: true
    });
    ItemViewerAdapterBase.prototype.ensureViewerItem = function (onlyCreation, content) {
        this.ensureViewerItemCore(onlyCreation, content);
    };
    ItemViewerAdapterBase.prototype.initialize = function () {
        var content = this.dashboardItem._getFullServerContent();
        if (content) {
            this.ensureViewerItem(true, content);
            this.itemUpdated(this.item);
        }
        this.modelSubscriptions.push(this.dashboardItem._subcribeServerContent(this.updateServerContentHandler));
    };
    ItemViewerAdapterBase.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this.modelSubscriptions.forEach(function (subscription) { return subscription.dispose(); });
        if (this.item) {
            if (!!this.context.viewerItemDispose) {
                this.context.viewerItemDispose.fire(this.dashboardItem, this.item);
            }
            if (this.localContext) {
                this.localContext.viewerItemDispose.fire(this.dashboardItem, this.item);
            }
            this.dettachFromModel(this.item, this.dashboardItem);
            this.item.dispose();
        }
        this.item = null;
        this.onDisposed();
    };
    ItemViewerAdapterBase.prototype.resume = function () {
        this.modelSubscriptions.push(this.dashboardItem._subcribeServerContent(this.updateServerContentHandler));
        this.attachToModel(this.item, this.dashboardItem);
        this.ensureViewerItemCore(false, this.dashboardItem._getFullServerContent());
    };
    ItemViewerAdapterBase.prototype.suspend = function () {
        if (!!this.item) {
            this.dettachFromModel(this.item, this.dashboardItem);
        }
    };
    ItemViewerAdapterBase.prototype.ensureViewerItemCore = function (onlyCreation, content, additionalData) {
        if (!!this.context.beforeApplyOptions) {
            this.context.beforeApplyOptions.fire(this.dashboardItem, content, onlyCreation, additionalData);
        }
        if (!!this.localContext) {
            this.localContext.beforeApplyOptions.fire(this.dashboardItem, content, onlyCreation);
        }
        if (onlyCreation) {
            this.dashboardItem._viewerItemCreated(true);
            this.item = this.createDashboardViewerItem(this.element, content, this.dashboardItem);
        }
        else {
            this.updateItemContent(content);
        }
    };
    ItemViewerAdapterBase.prototype.updateItemContent = function (content) {
        this.item.updateContent(content);
    };
    ItemViewerAdapterBase.prototype.createDashboardViewerItem = function (element, content, dashboardItem) {
        var _this = this;
        element.innerHTML = '';
        content.parentContainer = $(element).closest(".dx-dashboard-container")[0];
        content.controlContainer = _base_item_1.getControlContainer(element);
        if (this.localContext && this.localContext.boundaryContainer) {
            content.boundaryContainer = this.localContext.boundaryContainer;
        }
        var visualMode = this.localContext && this.localContext.visualMode && this.localContext.visualMode() || null;
        var viewerItem;
        if (this.dashboardItem instanceof custom_item_1.CustomItem) {
            if (visualMode === 'caption') {
                viewerItem = new custom_viewer_item_1.CustomItemViewer(this.dashboardItem, _utils_1.wrapPublicElement(element), content);
            }
            else {
                var viewerItemCreator = this.context.viewerItemCreator[this.dashboardItem.customItemType()];
                if (!!viewerItemCreator) {
                    viewerItem = viewerItemCreator(this.dashboardItem, _utils_1.wrapPublicElement(element), content);
                }
            }
        }
        if (!viewerItem) {
            var viewerItemFactory = (this.localContext && this.localContext.itemFactory) || _viewer_item_factory_1.defaultViewerItemFactory;
            viewerItem = viewerItemFactory.createItem(element, content);
        }
        if (!viewerItem) {
            throw new Error("ViewerItem is not created.");
        }
        if (!!this.context.viewerItemCreated) {
            this.context.viewerItemCreated.fire(this.dashboardItem, viewerItem);
        }
        if (this.localContext) {
            if (this.localContext.visualMode) {
                viewerItem.visualMode = this.localContext.visualMode();
            }
            this.localContext.viewerItemCreated.fire(this.dashboardItem, viewerItem);
            viewerItem.addContextCaptionToolbarOptions = function (toolbarOptions) {
                _this.context.addContextToolbarItems.fire(toolbarOptions, _this.dashboardItem);
                _this.localContext.addContextToolbarItems.fire(toolbarOptions, _this.dashboardItem);
            };
            if (this.localContext.visualMode) {
                this.toDispose(this.localContext.visualMode.subscribe(function (newValue) {
                    viewerItem.visualMode = newValue;
                    viewerItem.forceUpdateItem();
                }));
            }
            if (this.localContext.createCaptionToolbar) {
                viewerItem.createCaptionToolbar = this.localContext.createCaptionToolbar;
            }
        }
        this.attachToModel(viewerItem, dashboardItem);
        this.beforeRender(viewerItem);
        viewerItem.dateToString = index_internal_1.fromUtcDateToString;
        viewerItem.render();
        return viewerItem;
    };
    ItemViewerAdapterBase.prototype.attachToModel = function (viewerItem, dashboardItem) {
        viewerItem.allowMultiselection = dashboardItem._allowMultiselection();
        this.modelSubscriptions.push(dashboardItem._allowMultiselection.subscribe(function (newValue) {
            viewerItem.allowMultiselection = newValue;
            viewerItem.forceUpdateInteractivity();
        }));
        viewerItem.allowMultiselectionChanged = function (allowed) {
            dashboardItem._allowMultiselection(allowed);
        };
    };
    ItemViewerAdapterBase.prototype.dettachFromModel = function (viewerItem, dashboardItem) {
        this.modelSubscriptions.forEach(function (subscription) { return subscription.dispose(); });
        viewerItem.allowMultiselectionChanged = function () { };
    };
    return ItemViewerAdapterBase;
}(disposable_object_1.DisposableObject));
exports.ItemViewerAdapterBase = ItemViewerAdapterBase;
