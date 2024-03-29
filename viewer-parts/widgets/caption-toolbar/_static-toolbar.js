﻿/**
* DevExpress Dashboard (_static-toolbar.js)
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
var StaticCaptionToolbar = (function (_super) {
    __extends(StaticCaptionToolbar, _super);
    function StaticCaptionToolbar(_container, _controlContainer, _popupContainer, encodeHtml, _className, _hasBorder, allowHideEmptyToolbar) {
        var _this = _super.call(this, _container, _controlContainer, _popupContainer, encodeHtml) || this;
        _this._className = _className;
        _this._hasBorder = _hasBorder;
        _this.allowHideEmptyToolbar = allowHideEmptyToolbar;
        return _this;
    }
    StaticCaptionToolbar.prototype.calcHeight = function (options) {
        if (this._visible(options)) {
            return _super.prototype.calcHeight.call(this, options);
        }
        else {
            return 0;
        }
    };
    StaticCaptionToolbar.prototype.calcMinWidth = function (options) {
        if (this._visible(options)) {
            return _super.prototype.calcMinWidth.call(this, options);
        }
        else {
            return 0;
        }
    };
    StaticCaptionToolbar.prototype.update = function (options) {
        var heightChanded = false;
        if (this._visible(options)) {
            heightChanded = _super.prototype.update.call(this, options);
            if (this._hasBorder) {
                this._toolbarDiv.classList.add(_caption_toolbar_css_classes_1.cssClasses.captionBorder);
            }
        }
        else if (this._initialized) {
            this.dispose();
            heightChanded = true;
        }
        return heightChanded;
    };
    StaticCaptionToolbar.prototype._getVisibleItems = function () {
        return _caption_toolbar_arranger_1.arrangeStaticToolbarItems(this._options, this._disabled);
    };
    StaticCaptionToolbar.prototype._createInstance = function () {
        return new StaticCaptionToolbar(undefined, undefined, undefined, this.encodeHtml, this._className, this._hasBorder, this.allowHideEmptyToolbar);
    };
    StaticCaptionToolbar.prototype._visible = function (options) {
        return !this.allowHideEmptyToolbar || options.actionItems.length > 0 || options.navigationItems.length > 0 || options.stateItems.length > 0 || options.staticItems.length > 0;
    };
    return StaticCaptionToolbar;
}(_caption_toolbar_base_1.DashboardCaptionToolbarBase));
exports.StaticCaptionToolbar = StaticCaptionToolbar;
