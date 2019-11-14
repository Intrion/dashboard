/**
* DevExpress Dashboard (_stub-item.js)
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
var stubItem = (function (_super) {
    __extends(stubItem, _super);
    function stubItem(container, options) {
        return _super.call(this, container, options) || this;
    }
    stubItem.prototype.renderContentUnsafe = function (element, changeExisting, afterRenderCallback) {
        var options = this.options;
        element.innerText = options.type;
        return false;
    };
    return stubItem;
}(_base_item_1.baseItem));
exports.stubItem = stubItem;
