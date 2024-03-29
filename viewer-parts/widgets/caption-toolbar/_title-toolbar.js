﻿/**
* DevExpress Dashboard (_title-toolbar.js)
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
var DashboardTitleToolbar = (function (_super) {
    __extends(DashboardTitleToolbar, _super);
    function DashboardTitleToolbar(_container, _controlContainer, _popupContainer, encodeHtml, allowHideEmptyToolbar, _optionalClass) {
        if (allowHideEmptyToolbar === void 0) { allowHideEmptyToolbar = false; }
        var _this = _super.call(this, _container, _controlContainer, _popupContainer, encodeHtml) || this;
        _this.allowHideEmptyToolbar = allowHideEmptyToolbar;
        _this._optionalClass = _optionalClass;
        _this._showStaticItemsOnCenter = false;
        _this._className = _this._optionalClass ? [_this._optionalClass, _caption_toolbar_css_classes_1.cssClasses.title].join(' ') : _caption_toolbar_css_classes_1.cssClasses.title;
        return _this;
    }
    Object.defineProperty(DashboardTitleToolbar.prototype, "_staticItemsClass", {
        get: function () {
            return this._showStaticItemsOnCenter ? _caption_toolbar_css_classes_1.cssClasses.toolbarCenter : _caption_toolbar_css_classes_1.cssClasses.toolbarBefore;
        },
        enumerable: true,
        configurable: true
    });
    DashboardTitleToolbar.prototype.calcHeight = function (options) {
        if (this._visible(options)) {
            return _super.prototype.calcHeight.call(this, options);
        }
        else {
            return 0;
        }
    };
    DashboardTitleToolbar.prototype.update = function (options, showStaticItemsOnCenter) {
        this._showStaticItemsOnCenter = showStaticItemsOnCenter || false;
        var heightChanded = false;
        if (this._visible(options)) {
            heightChanded = _super.prototype.update.call(this, options);
        }
        else if (this._initialized) {
            this.dispose();
            heightChanded = true;
        }
        return heightChanded;
    };
    DashboardTitleToolbar.prototype._getVisibleItems = function () {
        return _caption_toolbar_arranger_1.arrangeTitleToolbarItems(this._options, this._showStaticItemsOnCenter);
    };
    DashboardTitleToolbar.prototype._createInstance = function () {
        return new DashboardTitleToolbar(undefined, undefined, undefined, this.encodeHtml, this.allowHideEmptyToolbar, this._optionalClass);
    };
    DashboardTitleToolbar.prototype._visible = function (options) {
        return !this.allowHideEmptyToolbar || options.actionItems.length > 0 || options.navigationItems.length > 0 || options.stateItems.length > 0 || options.staticItems.length > 0;
    };
    return DashboardTitleToolbar;
}(_caption_toolbar_base_1.DashboardCaptionToolbarBase));
exports.DashboardTitleToolbar = DashboardTitleToolbar;
