/**
* DevExpress Dashboard (_interfaces.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
exports.KeyCodes = {
    Esc: 27,
    Delete: 46,
    Z: 90,
    Y: 89,
    S: 83
};
var SingleItemSizeController = (function () {
    function SingleItemSizeController(_element, requestRepaint) {
        this._element = _element;
        this.requestRepaint = requestRepaint;
        this.renderImmediately = true;
    }
    SingleItemSizeController.prototype.getWidth = function () {
        return $(this._element).width();
    };
    SingleItemSizeController.prototype.getHeight = function () {
        return $(this._element).height();
    };
    SingleItemSizeController.prototype.setConstraints = function (constraints) {
    };
    return SingleItemSizeController;
}());
exports.SingleItemSizeController = SingleItemSizeController;
var SingleTabItemSizeController = (function () {
    function SingleTabItemSizeController(requestRepaint, width, height) {
        this.requestRepaint = requestRepaint;
        this.width = width;
        this.height = height;
        this.renderImmediately = true;
    }
    SingleTabItemSizeController.prototype.getWidth = function () {
        return this.width();
    };
    SingleTabItemSizeController.prototype.getHeight = function () {
        return this.height();
    };
    SingleTabItemSizeController.prototype.setConstraints = function (constraints) {
    };
    return SingleTabItemSizeController;
}());
exports.SingleTabItemSizeController = SingleTabItemSizeController;
