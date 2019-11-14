/**
* DevExpress Dashboard (_hovered-floating-toolbar.js)
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
var $ = require("jquery");
var HoveredFloatingCaptionToolbar = (function (_super) {
    __extends(HoveredFloatingCaptionToolbar, _super);
    function HoveredFloatingCaptionToolbar(_container, _controlContainer, _popupContainer, encodeHtml, isBottomPosition) {
        return _super.call(this, _container, _controlContainer, _popupContainer, encodeHtml, isBottomPosition) || this;
    }
    HoveredFloatingCaptionToolbar.prototype.calcMinWidth = function (options) {
        return 0;
    };
    HoveredFloatingCaptionToolbar.prototype.dispose = function () {
        if (this._popupContainer) {
            $(this._popupContainer).off("mouseenter.captionPanel");
            $(this._popupContainer).off("mouseleave.captionPanel");
        }
        _super.prototype.dispose.call(this);
    };
    HoveredFloatingCaptionToolbar.prototype._appendToContainer = function (toolbarDiv) {
        var _this = this;
        var element = _super.prototype._appendToContainer.call(this, toolbarDiv);
        $(this._popupContainer).on("mouseenter.captionPanel", function () { return _this.showFloatingPanel(); });
        $(this._popupContainer).on("mouseleave.captionPanel", function () { return _this.hideFloatingPanel(); });
        return element;
    };
    HoveredFloatingCaptionToolbar.prototype._createInstance = function () {
        return new HoveredFloatingCaptionToolbar(undefined, undefined, undefined, this.encodeHtml, this._isBottomPosition);
    };
    return HoveredFloatingCaptionToolbar;
}(_floating_toolbar_base_1.FloatingCaptionToolbarBase));
exports.HoveredFloatingCaptionToolbar = HoveredFloatingCaptionToolbar;
