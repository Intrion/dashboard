/**
* DevExpress Dashboard (_clickable-floating-toolbar.js)
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
var events_1 = require("devextreme/events");
var _z_index_1 = require("../../../data/_z-index");
var ClickableFloatingCaptionToolbar = (function (_super) {
    __extends(ClickableFloatingCaptionToolbar, _super);
    function ClickableFloatingCaptionToolbar(_container, _controlContainer, _popupContainer, encodeHtml, isBottomPosition) {
        return _super.call(this, _container, _controlContainer, _popupContainer, encodeHtml, isBottomPosition) || this;
    }
    ClickableFloatingCaptionToolbar.registerToolbar = function (toolbar) {
        if (ClickableFloatingCaptionToolbar._toolbars.indexOf(toolbar) === -1) {
            ClickableFloatingCaptionToolbar._toolbars.push(toolbar);
        }
    };
    ClickableFloatingCaptionToolbar.unregisterToolbar = function (toolbar) {
        var toolbarIndex = ClickableFloatingCaptionToolbar._toolbars.indexOf(toolbar);
        if (toolbarIndex > -1) {
            ClickableFloatingCaptionToolbar._toolbars.splice(toolbarIndex, 1);
        }
    };
    ClickableFloatingCaptionToolbar.activateToolbar = function (toolbar) {
        ClickableFloatingCaptionToolbar._toolbars
            .filter(function (t) { return t !== toolbar; })
            .forEach(function (t) { return t.hideFloatingPanel(); });
    };
    ClickableFloatingCaptionToolbar.prototype.update = function (options) {
        var heightChanded = _super.prototype.update.call(this, options);
        if (this._getVisibleItems().length === 0) {
            this._disableShield();
        }
        else {
            this._enableShield();
        }
        return heightChanded;
    };
    ClickableFloatingCaptionToolbar.prototype.showFloatingPanel = function () {
        _super.prototype.showFloatingPanel.call(this);
        this._disableShield();
        ClickableFloatingCaptionToolbar.activateToolbar(this);
    };
    ClickableFloatingCaptionToolbar.prototype.hideFloatingPanel = function () {
        _super.prototype.hideFloatingPanel.call(this);
        this._enableShield();
    };
    ClickableFloatingCaptionToolbar.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        events_1.off(this._shieldDiv, 'click.shield');
        ClickableFloatingCaptionToolbar.unregisterToolbar(this);
    };
    ClickableFloatingCaptionToolbar.prototype._createInstance = function () {
        return new ClickableFloatingCaptionToolbar(undefined, undefined, undefined, this.encodeHtml, this._isBottomPosition);
    };
    ClickableFloatingCaptionToolbar.prototype._appendToContainer = function (toolbarDiv) {
        var floadingPanelDiv = _super.prototype._appendToContainer.call(this, toolbarDiv);
        this._shieldDiv = document.createElement('div');
        this._shieldDiv.style.left = '0';
        this._shieldDiv.style.top = '0';
        this._shieldDiv.style.bottom = '0';
        this._shieldDiv.style.right = '0';
        this._shieldDiv.style.display = 'block';
        this._shieldDiv.style.zIndex = (_z_index_1.zIndex.floatingToolbar - 1).toString();
        this._shieldDiv.style.position = 'absolute';
        this._subscribeOnShieldEvents();
        this._container.appendChild(this._shieldDiv);
        ClickableFloatingCaptionToolbar.registerToolbar(this);
        return floadingPanelDiv;
    };
    ClickableFloatingCaptionToolbar.prototype._subscribeOnShieldEvents = function () {
        var _this = this;
        events_1.on(this._shieldDiv, 'click.shield', function () { return _this.showFloatingPanel(); });
    };
    ClickableFloatingCaptionToolbar.prototype._disableShield = function () {
        this._shieldDiv && (this._shieldDiv.style.display = 'none');
    };
    ClickableFloatingCaptionToolbar.prototype._enableShield = function () {
        if (this._getVisibleItems().length > 0) {
            this._shieldDiv && (this._shieldDiv.style.display = 'block');
        }
    };
    ClickableFloatingCaptionToolbar._toolbars = [];
    return ClickableFloatingCaptionToolbar;
}(_floating_toolbar_base_1.FloatingCaptionToolbarBase));
exports.ClickableFloatingCaptionToolbar = ClickableFloatingCaptionToolbar;
