﻿/**
* DevExpress Dashboard (_caption-toolbar-adapter.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _caption_toolbar_css_classes_1 = require("./_caption-toolbar-css-classes");
var _render_helper_1 = require("../_render-helper");
var _popup_menu_creator_1 = require("./_popup-menu-creator");
var $ = require("jquery");
var _utils_1 = require("../../../data/_utils");
var tooltip_1 = require("devextreme/ui/tooltip");
var DashboardCaptionToolbarAdapter = (function () {
    function DashboardCaptionToolbarAdapter(_encodeHtml) {
        this._encodeHtml = _encodeHtml;
    }
    DashboardCaptionToolbarAdapter.prototype.createToolbarItem = function (item, controlContainer, popupContainer, onMenuItemClick) {
        var _this = this;
        if (item.isSeparator)
            return this._createSeparatorItem(item);
        this._validate(item);
        var toolbarItem = {
            location: item.location
        };
        if (item.type === 'button' || item.type === 'menu') {
            toolbarItem.widget = 'dxButton';
            toolbarItem.options = this._createToolbarItemOptions(item, controlContainer, popupContainer, onMenuItemClick);
        }
        else {
            if (item.template) {
                toolbarItem.template = item.template;
            }
            else if (item.text) {
                toolbarItem.template = function () {
                    var textDiv = document.createElement('div');
                    textDiv.classList.add(_caption_toolbar_css_classes_1.cssClasses.ellipsisText);
                    _render_helper_1.RenderHelper.html(textDiv, item.text, _this._encodeHtml);
                    return textDiv;
                };
            }
            else {
                return undefined;
            }
        }
        return toolbarItem;
    };
    DashboardCaptionToolbarAdapter.prototype._applyText = function (item, text) {
        if (this._encodeHtml === false) {
            item.html = text;
        }
        else {
            item.text = text;
        }
    };
    DashboardCaptionToolbarAdapter.prototype._createToolbarItemOptions = function (item, controlContainer, popupContainer, onMenuItemClick) {
        var _this = this;
        var itemOptions = {};
        if (item.template === undefined) {
            var classNames = this._fillCssClasses(item);
            if (classNames.length > 0) {
                itemOptions.elementAttr = {
                    class: classNames.join(' ')
                };
            }
        }
        if (item.tooltip) {
            itemOptions.onContentReady = function (data) {
                var options = _this._createTooltipOptions(item.tooltip, data.element);
                var toolTipElement = document.createElement('div');
                toolTipElement.classList.add(item.tooltip["className"]);
                new tooltip_1.default(toolTipElement, options);
                _utils_1.$unwrap(data.element).appendChild(toolTipElement);
            };
        }
        else if (item.hint) {
            itemOptions.hint = item.hint;
        }
        if (item.template) {
            itemOptions.template = item.template;
        }
        else if (item.icon) {
            itemOptions.template = function (buttonData, contentElement) {
                return $('<svg><use xlink:href="#' + item.icon + '" /></svg>');
            };
        }
        else if (item.text) {
            this._applyText(itemOptions, item.text);
        }
        if (item.type === 'button' && item.click) {
            itemOptions.onClick = function (data) { return item.click(data.element); };
        }
        else if (item.type === 'menu' && item.menu && (item.menu.items && item.menu.items.length > 0 || item.menu.itemTemplate)) {
            itemOptions.onClick = function (data) { return _popup_menu_creator_1.PopupMenuCreator.toggleMenu(_utils_1.$unwrap(data.element).querySelector('.dx-button-content'), item.menu, popupContainer, controlContainer, onMenuItemClick); };
        }
        if (!!item.disabled) {
            itemOptions.disabled = item.disabled;
        }
        return itemOptions;
    };
    DashboardCaptionToolbarAdapter.prototype._createTooltipOptions = function (tooltip, target) {
        var contentTemplate = typeof tooltip === 'string' ? tooltip : tooltip.template;
        return {
            target: target,
            contentTemplate: contentTemplate,
            showEvent: "mouseenter",
            hideEvent: "mouseleave",
        };
    };
    DashboardCaptionToolbarAdapter.prototype._fillCssClasses = function (item) {
        var classNames = [];
        if (item.checked && item.type === 'button')
            classNames.push(_caption_toolbar_css_classes_1.cssClasses.checked);
        if (item.icon) {
            classNames.push(item.icon);
        }
        else if (item.text) {
            classNames.push(_caption_toolbar_css_classes_1.cssClasses.textButton);
        }
        return classNames;
    };
    DashboardCaptionToolbarAdapter.prototype._validate = function (item) {
        var menu = item.menu;
        var isIconMenuItem = item.type === 'menu' && menu && menu.type === 'icons';
        if (isIconMenuItem && menu.columnCount !== undefined && menu.columnCount < 1)
            throw new Error("The columnCount property must be greater than zero.");
    };
    DashboardCaptionToolbarAdapter.prototype._createSeparatorItem = function (item) {
        return {
            location: item.location,
            html: '<div class="' + _caption_toolbar_css_classes_1.cssClasses.captionPanelSeparator + '"></div>'
        };
    };
    return DashboardCaptionToolbarAdapter;
}());
exports.DashboardCaptionToolbarAdapter = DashboardCaptionToolbarAdapter;
