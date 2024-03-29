﻿/**
* DevExpress Dashboard (_hovered-toolbar.js)
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
var _caption_toolbar_base_1 = require("./_caption-toolbar-base");
var _caption_toolbar_css_classes_1 = require("./_caption-toolbar-css-classes");
var _caption_toolbar_arranger_1 = require("./_caption-toolbar-arranger");
var $ = require("jquery");
var HoveredDashboardCaptionToolbar = (function (_super) {
    __extends(HoveredDashboardCaptionToolbar, _super);
    function HoveredDashboardCaptionToolbar(_container, _controlContainer, _popupContainer, encodeHtml, _hasBorder) {
        var _this = _super.call(this, _container, _controlContainer, _popupContainer, encodeHtml) || this;
        _this._hasBorder = _hasBorder;
        _this._containerHovered = false;
        return _this;
    }
    HoveredDashboardCaptionToolbar.prototype.dispose = function () {
        if (this._popupContainer) {
            $(this._popupContainer).off("mouseenter.captionPanel");
            $(this._popupContainer).off("mouseleave.captionPanel");
        }
        _super.prototype.dispose.call(this);
    };
    HoveredDashboardCaptionToolbar.prototype._appendToContainer = function (toolbarDiv) {
        var _this = this;
        var toggleHoverState = function (hovered) {
            if (_this._containerHovered !== hovered) {
                _this._containerHovered = hovered;
                _this._updateToolbar();
            }
        };
        $(this._popupContainer).on("mouseenter.captionPanel", function () { return toggleHoverState(true); });
        $(this._popupContainer).on("mouseleave.captionPanel", function () { return toggleHoverState(false); });
        return _super.prototype._appendToContainer.call(this, toolbarDiv);
    };
    HoveredDashboardCaptionToolbar.prototype.update = function (options) {
        var heightChanded = _super.prototype.update.call(this, options);
        if (this._hasBorder) {
            this._toolbarDiv.classList.add(_caption_toolbar_css_classes_1.cssClasses.captionBorder);
        }
        return heightChanded;
    };
    HoveredDashboardCaptionToolbar.prototype._getVisibleItems = function () {
        return _caption_toolbar_arranger_1.arrangeHoveredToolbarItems(this._options, this._containerHovered, this.disabled);
    };
    HoveredDashboardCaptionToolbar.prototype._createInstance = function () {
        return new HoveredDashboardCaptionToolbar(undefined, undefined, undefined, this.encodeHtml, this._hasBorder);
    };
    HoveredDashboardCaptionToolbar.prototype._processToolbarBeforeGettingSize = function (toolbar) {
        toolbar.setHoverState(true);
    };
    HoveredDashboardCaptionToolbar.prototype.setHoverState = function (hovered) {
        this._containerHovered = hovered;
    };
    return HoveredDashboardCaptionToolbar;
}(_caption_toolbar_base_1.DashboardCaptionToolbarBase));
exports.HoveredDashboardCaptionToolbar = HoveredDashboardCaptionToolbar;
