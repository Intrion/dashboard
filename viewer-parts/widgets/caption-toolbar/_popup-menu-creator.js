/**
* DevExpress Dashboard (_popup-menu-creator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("devextreme/ui/tile_view");
var _caption_toolbar_css_classes_1 = require("./_caption-toolbar-css-classes");
var popover_1 = require("devextreme/ui/popover");
var tile_view_1 = require("devextreme/ui/tile_view");
var list_1 = require("devextreme/ui/list");
var browser = require("devextreme/core/utils/browser");
var _utils_1 = require("../../../data/_utils");
var PopupMenuCreator = (function () {
    function PopupMenuCreator() {
    }
    PopupMenuCreator.toggleMenu = function (element, menu, container, controlContainer, onMenuItemClick) {
        var _this = this;
        var popoverOptions = this._createPopoverOptions(element, menu, container, controlContainer);
        var onItemClick = function (data) {
            popover.hide();
            if (onMenuItemClick) {
                onMenuItemClick();
            }
            if (menu.itemClick)
                menu.itemClick(data.itemData, data.itemElement, data.itemIndex);
        };
        if (menu.type === "icons") {
            popoverOptions.contentTemplate = function (contentElement) {
                var div = document.createElement('div');
                new tile_view_1.default(div, _this._createTileViewOptions(menu, onItemClick));
                return div;
            };
            var isBrowserIE = !!browser.msie;
            var browserMajorVersion = parseInt(browser.version, 10);
            if (isBrowserIE && browserMajorVersion < 12) {
                popoverOptions.onShown = function (data) {
                    var popupContent = _utils_1.$unwrap(data.component._$wrapper).querySelector(".dx-popup-content");
                    popupContent.innerHTML = '';
                    var div = document.createElement('div');
                    new tile_view_1.default(div, _this._createTileViewOptions(menu, onItemClick));
                    popupContent.appendChild(div);
                };
            }
        }
        else {
            popoverOptions.contentTemplate = function (contentElement) {
                return new list_1.default(document.createElement('div'), _this._createListOptions(menu, onItemClick)).element();
            };
        }
        var popoverContainer = this._getPopupContainer(element, menu.type);
        var popover = popover_1.default.getInstance(popoverContainer);
        if (popover) {
            popover.option(popoverOptions);
        }
        else {
            popover = new popover_1.default(popoverContainer, popoverOptions);
        }
        popover.toggle(!popover.option("visible"));
    };
    PopupMenuCreator._createPopoverOptions = function (element, menu, container, controlContainer) {
        return {
            width: 'auto',
            height: 'auto',
            target: element,
            toolbarItems: menu.type === 'icons' && menu.title ? [{ location: 'center', text: menu.title }] : [],
            animation: {
                show: { type: "pop", from: { opacity: 1, scale: 0 }, to: { scale: 1 } },
                hide: { type: "pop", from: { scale: 1 }, to: { scale: 0 } }
            },
            position: {
                my: 'top center',
                at: 'bottom center',
                collision: 'fit flip',
                boundary: controlContainer
            },
            container: container
        };
    };
    PopupMenuCreator._createTileViewOptions = function (menu, onItemClick) {
        var _this = this;
        var itemsCount = menu.items.length;
        var columnCount = menu.columnCount ? Math.min(menu.columnCount, itemsCount) : itemsCount;
        return {
            direction: 'horizontal',
            dataSource: menu.items,
            height: this._icon_menu_element_size * Math.ceil(itemsCount / columnCount),
            itemMargin: 0,
            baseItemHeight: this._icon_menu_element_size,
            baseItemWidth: this._icon_menu_element_size,
            itemTemplate: menu.itemTemplate ? menu.itemTemplate : function (itemData, itemIndex, itemElement) {
                return _this._iconItemTemplate(menu.items, itemIndex);
            },
            onItemClick: onItemClick
        };
    };
    PopupMenuCreator._createListOptions = function (menu, onItemClick) {
        var listOptions = {
            selectionMode: menu.selectionMode || 'none',
            selectedItems: menu.selectedItems || [],
            dataSource: menu.items,
            onItemClick: onItemClick
        };
        if (menu.itemTemplate) {
            listOptions.itemTemplate = menu.itemTemplate;
        }
        return listOptions;
    };
    PopupMenuCreator._iconItemTemplate = function (items, itemIndex) {
        var svgNS = "http://www.w3.org/2000/svg";
        var xlinkNS = "http://www.w3.org/1999/xlink";
        var useElement = document.createElementNS(svgNS, "use");
        useElement.setAttributeNS(xlinkNS, "xlink:href", "#" + items[itemIndex]);
        var template = document.createElementNS(svgNS, "svg");
        template.appendChild(useElement);
        return template;
    };
    PopupMenuCreator._getPopupContainer = function (element, type) {
        var popoverClass = type === "icons" ? _caption_toolbar_css_classes_1.cssClasses.popoverIconMenuWrapper : _caption_toolbar_css_classes_1.cssClasses.popoverListWrapper;
        var popupContainer = element.querySelectorAll("." + popoverClass);
        if (popupContainer.length > 1) {
            console.log("Multiple popovers");
        }
        else if (popupContainer.length === 0) {
            var div = document.createElement('div');
            div.classList.add(popoverClass);
            element.appendChild(div);
            return div;
        }
        else {
            return popupContainer[0];
        }
    };
    PopupMenuCreator._icon_menu_element_size = 65;
    return PopupMenuCreator;
}());
exports.PopupMenuCreator = PopupMenuCreator;
