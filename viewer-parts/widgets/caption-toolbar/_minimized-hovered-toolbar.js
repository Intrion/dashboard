﻿/**
* DevExpress Dashboard (_minimized-hovered-toolbar.js)
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
var _floating_toolbar_base_1 = require("./_floating-toolbar-base");
var _caption_toolbar_css_classes_1 = require("./_caption-toolbar-css-classes");
var $ = require("jquery");
var MinimizedToolbarState;
(function (MinimizedToolbarState) {
    MinimizedToolbarState[MinimizedToolbarState["Hidden"] = 0] = "Hidden";
    MinimizedToolbarState[MinimizedToolbarState["Minimim"] = 1] = "Minimim";
    MinimizedToolbarState[MinimizedToolbarState["Maximim"] = 2] = "Maximim";
})(MinimizedToolbarState = exports.MinimizedToolbarState || (exports.MinimizedToolbarState = {}));
var MinimizedHoveredCaptionToolbar = (function (_super) {
    __extends(MinimizedHoveredCaptionToolbar, _super);
    function MinimizedHoveredCaptionToolbar(_container, _controlContainer, _popupContainer, encodeHtml, isBottomPosition) {
        var _this = _super.call(this, _container, _controlContainer, _popupContainer, encodeHtml, isBottomPosition) || this;
        _this._toolbarState = MinimizedToolbarState.Hidden;
        _this._containerHovered = false;
        _this._onContainerHovered = function () {
            _this._containerHovered = true;
            _this._showPreviewFloatingPanel();
        };
        _this._onContainerLeave = function () {
            _this._containerHovered = false;
            _this._hidePreviewFloatingPanel();
        };
        _this._onPreviewHovered = function () {
            _this._hidePreviewFloatingPanel();
            _this.showFloatingPanel();
            _this._floatingPanel.repaint();
            _this._toolbarState = MinimizedToolbarState.Maximim;
        };
        _this._onToolbarLeave = function () {
            _this.hideFloatingPanel();
            _this._toolbarState = MinimizedToolbarState.Hidden;
            _this._showPreviewFloatingPanel();
        };
        return _this;
    }
    Object.defineProperty(MinimizedHoveredCaptionToolbar.prototype, "hasItems", {
        get: function () {
            return this._getVisibleItems().length > 0;
        },
        enumerable: true,
        configurable: true
    });
    MinimizedHoveredCaptionToolbar.prototype.calcMinWidth = function (options) {
        return 0;
    };
    MinimizedHoveredCaptionToolbar.prototype.dispose = function () {
        if (this._popupContainer) {
            this._popupContainer.removeEventListener('mouseenter', this._onContainerHovered);
            this._popupContainer.removeEventListener('mouseleave', this._onContainerLeave);
        }
        if (this._previewToolbarDiv) {
            this._previewToolbarDiv.removeEventListener('mouseenter', this._onPreviewHovered);
            this._toolbarDiv.removeEventListener('mouseleave', this._onToolbarLeave);
        }
        this._previewFloatingPanel && this._previewFloatingPanel.dispose();
        _super.prototype.dispose.call(this);
    };
    MinimizedHoveredCaptionToolbar.prototype.onResize = function () {
        _super.prototype.onResize.call(this);
        if (this._initialized) {
            this._previewFloatingPanel.repaint();
        }
    };
    MinimizedHoveredCaptionToolbar.prototype._appendToContainer = function (toolbarDiv) {
        var element = _super.prototype._appendToContainer.call(this, toolbarDiv);
        this._previewToolbarDiv = document.createElement('div');
        this._previewToolbarDiv.classList.add(_caption_toolbar_css_classes_1.cssClasses.toolbarPreview);
        var previewFloatingPanelDiv = document.createElement('div');
        previewFloatingPanelDiv.classList.add(_caption_toolbar_css_classes_1.cssClasses.floatingContainer);
        $(this._container).prepend(previewFloatingPanelDiv);
        this._previewFloatingPanel = this._createFloatingPanel(this._previewToolbarDiv, previewFloatingPanelDiv, true);
        this._previewToolbarDiv.appendChild($('<svg><use xlink:href="#' + _caption_toolbar_css_classes_1.cssClasses.ellipsisIcon + '" /></svg>').get(0));
        this._popupContainer.addEventListener('mouseenter', this._onContainerHovered);
        this._popupContainer.addEventListener('mouseleave', this._onContainerLeave);
        this._previewToolbarDiv.addEventListener('mouseenter', this._onPreviewHovered);
        this._toolbarDiv.addEventListener('mouseleave', this._onToolbarLeave);
        return element;
    };
    MinimizedHoveredCaptionToolbar.prototype._repaintFloatingPanel = function () {
        if (!this._floatingPanel || !this._previewFloatingPanel)
            return;
        if (this._containerHovered) {
            if (this._toolbarState === MinimizedToolbarState.Maximim) {
                if (this.hasItems) {
                    this._floatingPanel.repaint();
                }
                else {
                    this.hideFloatingPanel();
                    this._toolbarState = MinimizedToolbarState.Hidden;
                }
            }
            else {
                if (this.hasItems) {
                    this._showPreviewFloatingPanel();
                }
                else {
                    this._hidePreviewFloatingPanel();
                }
            }
        }
        else {
            this.hideFloatingPanel();
            this._hidePreviewFloatingPanel();
        }
    };
    MinimizedHoveredCaptionToolbar.prototype._showPreviewFloatingPanel = function () {
        if (this._toolbarState != MinimizedToolbarState.Maximim && this.hasItems) {
            this._previewFloatingPanel.show();
            this._toolbarState = MinimizedToolbarState.Minimim;
        }
    };
    MinimizedHoveredCaptionToolbar.prototype._hidePreviewFloatingPanel = function () {
        this._previewFloatingPanel.hide();
        if (this._toolbarState === MinimizedToolbarState.Minimim)
            this._toolbarState = MinimizedToolbarState.Hidden;
    };
    MinimizedHoveredCaptionToolbar.prototype._createInstance = function () {
        return new MinimizedHoveredCaptionToolbar(undefined, undefined, undefined, this.encodeHtml, this._isBottomPosition);
    };
    return MinimizedHoveredCaptionToolbar;
}(_floating_toolbar_base_1.FloatingCaptionToolbarBase));
exports.MinimizedHoveredCaptionToolbar = MinimizedHoveredCaptionToolbar;
