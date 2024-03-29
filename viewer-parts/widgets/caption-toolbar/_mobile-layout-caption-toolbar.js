﻿/**
* DevExpress Dashboard (_mobile-layout-caption-toolbar.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _caption_toolbar_css_classes_1 = require("./_caption-toolbar-css-classes");
var _static_toolbar_1 = require("./_static-toolbar");
var MobileLayoutCaptionToolbar = (function () {
    function MobileLayoutCaptionToolbar(_container, _controlContainer, _popupContainer, _encodeHtml, _className, _hasBorder) {
        if (_hasBorder === void 0) { _hasBorder = false; }
        this._container = _container;
        this._controlContainer = _controlContainer;
        this._popupContainer = _popupContainer;
        this._encodeHtml = _encodeHtml;
        this._className = _className;
        this._hasBorder = _hasBorder;
        this._disabled = false;
    }
    Object.defineProperty(MobileLayoutCaptionToolbar.prototype, "element", {
        get: function () {
            return undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MobileLayoutCaptionToolbar.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    MobileLayoutCaptionToolbar.prototype.calcHeight = function (options) {
        var toolbar = this._createInstance();
        toolbar.update(options);
        var height = toolbar._contentToolbar.calcHeight(this._prepareContentToolbarOptions(options)) + toolbar._actionToolbar.calcHeight(this._prepareActionToolbarOptions(options));
        toolbar.dispose();
        return height;
    };
    MobileLayoutCaptionToolbar.prototype.calcMinWidth = function (options) {
        return 0;
    };
    MobileLayoutCaptionToolbar.prototype.update = function (options) {
        if (!this._contentToolbar) {
            this._contentToolbar = new _static_toolbar_1.StaticCaptionToolbar(this._container, this._controlContainer, this._popupContainer, this._encodeHtml, [this._className, _caption_toolbar_css_classes_1.cssClasses.contentToolbar].join(' '), this._hasBorder, true);
        }
        var contentToolbarOptions = this._prepareContentToolbarOptions(options);
        var contentToolbarHeightChanged = this._contentToolbar.update(contentToolbarOptions);
        if (!this._actionToolbar) {
            var contentToolbarIsHidden = !this._hasItems(contentToolbarOptions);
            this._actionToolbar = new _static_toolbar_1.StaticCaptionToolbar(this._container, this._controlContainer, this._popupContainer, this._encodeHtml, [this._className, _caption_toolbar_css_classes_1.cssClasses.actionToolbar].join(' '), contentToolbarIsHidden && this._hasBorder, true);
        }
        var actualToolbarHeightChanged = this._actionToolbar.update(this._prepareActionToolbarOptions(options));
        this._toolbars = [this._actionToolbar, this._contentToolbar];
        return contentToolbarHeightChanged || actualToolbarHeightChanged;
    };
    MobileLayoutCaptionToolbar.prototype.onResize = function () {
        this._toolbars.forEach(function (toolbar) { return toolbar.onResize(); });
    };
    MobileLayoutCaptionToolbar.prototype.dispose = function () {
        this._toolbars.forEach(function (toolbar) { return toolbar.dispose(); });
    };
    MobileLayoutCaptionToolbar.prototype._createInstance = function () {
        return new MobileLayoutCaptionToolbar(undefined, undefined, undefined, this._encodeHtml, this._className, this._hasBorder);
    };
    MobileLayoutCaptionToolbar.prototype._prepareContentToolbarOptions = function (options) {
        return options ? {
            staticItems: options.staticItems,
            actionItems: [],
            stateItems: [],
            navigationItems: []
        } : undefined;
    };
    MobileLayoutCaptionToolbar.prototype._prepareActionToolbarOptions = function (options) {
        return options ? {
            staticItems: options.navigationItems,
            actionItems: options.actionItems,
            stateItems: options.stateItems,
            navigationItems: []
        } : undefined;
    };
    MobileLayoutCaptionToolbar.prototype._hasItems = function (options) {
        return options.navigationItems.length > 0 || options.actionItems.length > 0 || options.stateItems.length > 0 || options.staticItems.length > 0;
    };
    return MobileLayoutCaptionToolbar;
}());
exports.MobileLayoutCaptionToolbar = MobileLayoutCaptionToolbar;
