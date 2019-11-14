/**
* DevExpress Dashboard (_group-item.js)
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
var _base_item_1 = require("./_base-item");
var _render_helper_1 = require("../widgets/_render-helper");
var groupItem = (function (_super) {
    __extends(groupItem, _super);
    function groupItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    groupItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        element.classList.add(_base_item_1.cssClassNamesBaseItem.groupItem);
        return false;
    };
    groupItem.prototype.updateState = function (state) {
    };
    groupItem.prototype.getOffset = function () {
        var borderSize = _render_helper_1.RenderHelper.getBorderSizeByClasses([_base_item_1.cssClassNamesBaseItem.groupItem]);
        return {
            width: borderSize.width,
            height: borderSize.height + this._calcHeaderAndFooterHeight()
        };
    };
    return groupItem;
}(_base_item_1.baseItem));
exports.groupItem = groupItem;
