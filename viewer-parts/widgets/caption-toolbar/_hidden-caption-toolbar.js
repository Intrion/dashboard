/**
* DevExpress Dashboard (_hidden-caption-toolbar.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HiddenCaptionToolbar = (function () {
    function HiddenCaptionToolbar() {
        this.element = document.createElement('div');
        this.disabled = false;
    }
    HiddenCaptionToolbar.prototype.calcHeight = function (options) {
        return 0;
    };
    HiddenCaptionToolbar.prototype.calcMinWidth = function (options) {
        return 0;
    };
    HiddenCaptionToolbar.prototype.update = function (options) {
        return false;
    };
    HiddenCaptionToolbar.prototype.onResize = function () {
    };
    HiddenCaptionToolbar.prototype.dispose = function () {
    };
    return HiddenCaptionToolbar;
}());
exports.HiddenCaptionToolbar = HiddenCaptionToolbar;
