/**
* DevExpress Dashboard (_floating-toolbar-base.js)
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
var _caption_toolbar_base_1 = require("./_caption-toolbar-base");
var _caption_toolbar_css_classes_1 = require("./_caption-toolbar-css-classes");
var overlay_1 = require("devextreme/ui/overlay");
var _caption_toolbar_arranger_1 = require("./_caption-toolbar-arranger");
var $ = require("jquery");
var browser = require("devextreme/core/utils/browser");
var _utils_1 = require("../../../data/_utils");
var _z_index_1 = require("../../../data/_z-index");
var FloatingCaptionToolbarBase = (function (_super) {
    __extends(FloatingCaptionToolbarBase, _super);
    function FloatingCaptionToolbarBase(_container, _controlContainer, _popupContainer, encodeHtml, _isBottomPosition) {
        var _this = _super.call(this, _container, _controlContainer, _popupContainer, encodeHtml) || this;
        _this._isBottomPosition = _isBottomPosition;
        _this.PREVIEW_TOOLBAR_WIDTH = 15;
        _this._maxWidth = undefined;
        return _this;
    }
    Object.defineProperty(FloatingCaptionToolbarBase.prototype, "isBottomFloatingTypePosition", {
        set: function (isBottom) {
            this._isBottomPosition = isBottom;
        },
        enumerable: true,
        configurable: true
    });
    FloatingCaptionToolbarBase.prototype.update = function (options) {
        this._maxWidth = undefined;
        return _super.prototype.update.call(this, options);
    };
    FloatingCaptionToolbarBase.prototype.calcHeight = function () {
        return 0;
    };
    FloatingCaptionToolbarBase.prototype.onResize = function () {
        _super.prototype.onResize.call(this);
        if (this._initialized) {
            this._floatingPanel.repaint();
        }
    };
    FloatingCaptionToolbarBase.prototype.showFloatingPanel = function () {
        this._floatingPanel.show();
        this._toolbar.repaint();
    };
    FloatingCaptionToolbarBase.prototype.hideFloatingPanel = function () {
        this._floatingPanel.hide();
        this._toolbar.repaint();
    };
    FloatingCaptionToolbarBase.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        this._floatingPanel && this._floatingPanel.dispose();
    };
    FloatingCaptionToolbarBase.prototype._appendToContainer = function (toolbarDiv) {
        var floadingPanelDiv = document.createElement('div');
        floadingPanelDiv.classList.add(_caption_toolbar_css_classes_1.cssClasses.floatingContainer);
        $(this._container).prepend(floadingPanelDiv);
        this._floatingPanel = this._createFloatingPanel(toolbarDiv, floadingPanelDiv, false);
        return floadingPanelDiv;
    };
    FloatingCaptionToolbarBase.prototype._updateToolbar = function () {
        _super.prototype._updateToolbar.call(this);
        this._repaintFloatingPanel();
    };
    FloatingCaptionToolbarBase.prototype._repaintFloatingPanel = function () {
        if (this._floatingPanel)
            this._floatingPanel.repaint();
    };
    FloatingCaptionToolbarBase.prototype._getVisibleItems = function () {
        return _caption_toolbar_arranger_1.arrangeFloatingToolbarItems(this._options);
    };
    FloatingCaptionToolbarBase.prototype._createInstance = function () {
        return new FloatingCaptionToolbarBase(undefined, undefined, undefined, this.encodeHtml, this._isBottomPosition);
    };
    FloatingCaptionToolbarBase.prototype._getToolbarItems = function (items) {
        var _this = this;
        return items.map(function (item) { return _this._adapter.createToolbarItem(item, _this._controlContainer, _this._popupContainer, function () { return _this.hideFloatingPanel(); }); }).filter(function (item) { return item !== undefined; });
    };
    FloatingCaptionToolbarBase.prototype._getToolbarWidth = function (floadingPanelDiv) {
        if (!this._maxWidth) {
            this._maxWidth = Math.min($(this._container).outerWidth(), $(floadingPanelDiv)
                .find(".dx-toolbar-items-container")
                .children()
                .toArray()
                .filter(function (child) { return !$(child).is(':empty'); })
                .reduce(function (acc, child) { return acc + $(child).outerWidth(); }, 0));
        }
        return this._maxWidth;
    };
    FloatingCaptionToolbarBase.prototype._createFloatingPanel = function (toolbarDiv, floadingPanelDiv, preview) {
        var _this = this;
        var position = this._isBottomPosition ? 'bottom right' : 'top right';
        var options = {
            shading: false,
            animation: false,
            width: function () {
                return preview ? _this.PREVIEW_TOOLBAR_WIDTH : _this._getToolbarWidth(floadingPanelDiv);
            },
            height: 'auto',
            contentTemplate: function (contentElement) {
                _utils_1.$unwrap(contentElement).appendChild(toolbarDiv);
            },
            closeOnOutsideClick: false,
            position: {
                boundary: this._container,
                my: position,
                at: position,
                offset: this._isBottomPosition ? '2 2' : '2 -2',
                of: this._container
            },
            onShowing: function (e) {
                var wrapper = _utils_1.$unwrap(e.component._$wrapper);
                var baseZIndex = _z_index_1.zIndex.floatingToolbar;
                wrapper.style.zIndex = (preview ? baseZIndex : baseZIndex + 1).toString();
                var overlayContent = wrapper.querySelector(".dx-overlay-content");
                if (overlayContent) {
                    overlayContent.style.zIndex = wrapper.style.zIndex + 1;
                }
            }
        };
        options = __assign({}, options, { target: this._container, container: this._container, closeOnSwipe: false, propagateOutsideClick: true });
        var isBrowserIE = !!browser.msie;
        var browserMajorVersion = parseInt(browser.version, 10);
        if (isBrowserIE && browserMajorVersion < 12) {
            options.onShown = function (e) {
                _this._toolbar.option(_this._getToolbarOptions());
            };
        }
        return new overlay_1.default(floadingPanelDiv, options);
    };
    return FloatingCaptionToolbarBase;
}(_caption_toolbar_base_1.DashboardCaptionToolbarBase));
exports.FloatingCaptionToolbarBase = FloatingCaptionToolbarBase;
