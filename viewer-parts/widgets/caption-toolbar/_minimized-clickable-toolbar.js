﻿/**
* DevExpress Dashboard (_minimized-clickable-toolbar.js)
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
var _clickable_floating_toolbar_1 = require("./_clickable-floating-toolbar");
var _caption_toolbar_css_classes_1 = require("./_caption-toolbar-css-classes");
var $ = require("jquery");
var events_1 = require("devextreme/events");
var MinimizedClickableCaptionToolbar = (function (_super) {
    __extends(MinimizedClickableCaptionToolbar, _super);
    function MinimizedClickableCaptionToolbar(_container, _controlContainer, _popupContainer, encodeHtml, isBottomPosition) {
        return _super.call(this, _container, _controlContainer, _popupContainer, encodeHtml, isBottomPosition) || this;
    }
    MinimizedClickableCaptionToolbar.prototype.showPreviewFloatingPanel = function () {
        if (this._getVisibleItems().length > 0) {
            this._previewFloatingPanel.show();
            this._toolbar.repaint();
            this._disableShield();
            _clickable_floating_toolbar_1.ClickableFloatingCaptionToolbar.activateToolbar(this);
        }
    };
    MinimizedClickableCaptionToolbar.prototype.hideFloatingPanel = function () {
        _super.prototype.hideFloatingPanel.call(this);
        this._previewFloatingPanel.hide();
        this._toolbar.repaint();
        this._enableShield();
    };
    MinimizedClickableCaptionToolbar.prototype.dispose = function () {
        this._previewFloatingPanel && this._previewFloatingPanel.dispose();
        events_1.off(this._previewToolbarDiv, "click.preview");
        _super.prototype.dispose.call(this);
    };
    MinimizedClickableCaptionToolbar.prototype._createInstance = function () {
        return new MinimizedClickableCaptionToolbar(undefined, undefined, undefined, this.encodeHtml, this._isBottomPosition);
    };
    MinimizedClickableCaptionToolbar.prototype._appendToContainer = function (toolbarDiv) {
        var _this = this;
        this._previewToolbarDiv = document.createElement('div');
        this._previewToolbarDiv.classList.add(_caption_toolbar_css_classes_1.cssClasses.toolbarPreview);
        var previewFloatingPanelDiv = document.createElement('div');
        previewFloatingPanelDiv.classList.add(_caption_toolbar_css_classes_1.cssClasses.floatingContainer);
        $(this._container).prepend(previewFloatingPanelDiv);
        this._previewFloatingPanel = this._createFloatingPanel(this._previewToolbarDiv, previewFloatingPanelDiv, true);
        this._previewToolbarDiv.appendChild($('<svg><use xlink:href="#' + _caption_toolbar_css_classes_1.cssClasses.ellipsisIcon + '" /></svg>').get(0));
        events_1.on(this._previewToolbarDiv, "click.preview", function () { return _this.showFloatingPanel(); });
        return _super.prototype._appendToContainer.call(this, toolbarDiv);
    };
    MinimizedClickableCaptionToolbar.prototype._subscribeOnShieldEvents = function () {
        var _this = this;
        events_1.on(this._shieldDiv, 'click.shield', function () { return _this.showPreviewFloatingPanel(); });
    };
    return MinimizedClickableCaptionToolbar;
}(_clickable_floating_toolbar_1.ClickableFloatingCaptionToolbar));
exports.MinimizedClickableCaptionToolbar = MinimizedClickableCaptionToolbar;
