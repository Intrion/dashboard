﻿/**
* DevExpress Dashboard (_caption-toolbar-base.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _caption_toolbar_css_classes_1 = require("./_caption-toolbar-css-classes");
var _caption_toolbar_adapter_1 = require("./_caption-toolbar-adapter");
var toolbar_1 = require("devextreme/ui/toolbar");
var _render_helper_1 = require("../_render-helper");
var _toolbar_item_size_calculator_1 = require("./_toolbar-item-size-calculator");
var $ = require("jquery");
var _utils_1 = require("../../../data/_utils");
var DashboardCaptionToolbarBase = (function () {
    function DashboardCaptionToolbarBase(_container, _controlContainer, _popupContainer, encodeHtml) {
        if (encodeHtml === void 0) { encodeHtml = true; }
        this._container = _container;
        this._controlContainer = _controlContainer;
        this._popupContainer = _popupContainer;
        this.encodeHtml = encodeHtml;
        this._className = _caption_toolbar_css_classes_1.cssClasses.caption;
        this._disabled = false;
        this._adapter = new _caption_toolbar_adapter_1.DashboardCaptionToolbarAdapter(encodeHtml);
    }
    Object.defineProperty(DashboardCaptionToolbarBase.prototype, "_initialized", {
        get: function () {
            return this._toolbar !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardCaptionToolbarBase.prototype, "_staticItemsClass", {
        get: function () {
            return _caption_toolbar_css_classes_1.cssClasses.toolbarBefore;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardCaptionToolbarBase.prototype, "element", {
        get: function () {
            return this._initialized ? _utils_1.$unwrap(this._toolbar.element()) : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardCaptionToolbarBase.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            if (this._disabled !== value) {
                this._disabled = value;
                this._updateToolbar();
            }
        },
        enumerable: true,
        configurable: true
    });
    DashboardCaptionToolbarBase.prototype.update = function (options) {
        var _this = this;
        this._options = options;
        var heightChanded = false;
        if (!this._toolbar) {
            this._toolbarDiv = document.createElement('div');
            this._className.split(' ').forEach(function (className) { return _this._toolbarDiv.classList.add(className); });
            if (this._container)
                this._toolbarContainer = this._appendToContainer(this._toolbarDiv);
            this._toolbar = new toolbar_1.default(this._toolbarDiv, this._getToolbarOptions());
            heightChanded = true;
        }
        else {
            this._updateToolbar();
        }
        return heightChanded;
    };
    DashboardCaptionToolbarBase.prototype.calcHeight = function (options) {
        var toolbar = this._createInstance();
        if (toolbar) {
            this._processToolbarBeforeGettingSize(toolbar);
            toolbar.update(options);
            var height = _render_helper_1.RenderHelper.getElementBox(toolbar.element).height;
            toolbar.dispose();
            return height;
        }
        return 0;
    };
    DashboardCaptionToolbarBase.prototype.calcMinWidth = function (options) {
        var toolbar = this._createInstance();
        if (toolbar) {
            this._processToolbarBeforeGettingSize(toolbar);
            toolbar.update(options);
            var proccesSize = function () {
                var getWidth = function (selector) {
                    return toolbar.element.querySelector('.' + selector).getBoundingClientRect().width;
                };
                var w = getWidth(_caption_toolbar_css_classes_1.cssClasses.toolbarBefore) +
                    getWidth(_caption_toolbar_css_classes_1.cssClasses.toolbarCenter) +
                    getWidth(_caption_toolbar_css_classes_1.cssClasses.toolbarAfter);
                return w;
            };
            var width = _render_helper_1.RenderHelper.processElement($(toolbar.element), proccesSize);
            toolbar.dispose();
            return width;
        }
        return 0;
    };
    DashboardCaptionToolbarBase.prototype.onResize = function () {
        if (this._initialized) {
            this._toolbar.repaint();
            this._resizeStaticToolbarItems();
        }
    };
    DashboardCaptionToolbarBase.prototype.dispose = function () {
        if (this._toolbarContainer) {
            this._toolbarContainer.parentNode.removeChild(this._toolbarContainer);
            this._toolbarContainer = undefined;
        }
        if (this._toolbar) {
            this._toolbar.dispose();
            this._toolbar = undefined;
        }
    };
    DashboardCaptionToolbarBase.prototype._updateToolbar = function () {
        if (this._toolbar) {
            this._toolbar.option(this._getToolbarOptions());
        }
    };
    DashboardCaptionToolbarBase.prototype._createInstance = function () {
        return undefined;
    };
    DashboardCaptionToolbarBase.prototype._getToolbarOptions = function () {
        var _this = this;
        return {
            items: this._getToolbarItems(this._getVisibleItems()),
            onContentReady: function (data) {
                _this._resizeStaticToolbarItems();
            }
        };
    };
    DashboardCaptionToolbarBase.prototype._getVisibleItems = function () {
        return [];
    };
    DashboardCaptionToolbarBase.prototype._getToolbarItems = function (items) {
        var _this = this;
        return items.map(function (item) { return _this._adapter.createToolbarItem(item, _this._controlContainer, _this._popupContainer); }).filter(function (item) { return item !== undefined; });
    };
    DashboardCaptionToolbarBase.prototype._appendToContainer = function (toolbarDiv) {
        $(this._container).prepend(toolbarDiv);
        return toolbarDiv;
    };
    DashboardCaptionToolbarBase.prototype._resizeStaticToolbarItems = function (toolbarDiv) {
        if (toolbarDiv === void 0) { toolbarDiv = this._toolbarDiv; }
        var staticElements = $(toolbarDiv).find('.' + this._staticItemsClass).find('.' + _caption_toolbar_css_classes_1.cssClasses.ellipsisText).toArray();
        var toolbarWidth = $(toolbarDiv).width();
        if (staticElements.length > 0 && toolbarWidth > 0) {
            var afterSectionWidth = $(toolbarDiv).find('.' + _caption_toolbar_css_classes_1.cssClasses.toolbarAfter).get(0).getBoundingClientRect().width;
            var staticSectionMaxWidth = toolbarWidth - afterSectionWidth;
            var staticSectionWidth = $(toolbarDiv).find('.' + this._staticItemsClass).get(0).getBoundingClientRect().width;
            var itemsMaxWidth = _toolbar_item_size_calculator_1.calcMaxWidth(staticElements.map(function (item) { return $(item).outerWidth(); }), staticSectionWidth, staticSectionMaxWidth);
            itemsMaxWidth.map(function (maxWidth, i) {
                if (maxWidth !== undefined) {
                    $(staticElements[i]).closest('.' + _caption_toolbar_css_classes_1.cssClasses.toolbarItem).css("maxWidth", maxWidth + 'px');
                }
            });
        }
    };
    DashboardCaptionToolbarBase.prototype._processToolbarBeforeGettingSize = function (toolbar) {
    };
    return DashboardCaptionToolbarBase;
}());
exports.DashboardCaptionToolbarBase = DashboardCaptionToolbarBase;
