/**
* DevExpress Dashboard (_card-widget-implementation.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardWidgetImplementation = (function () {
    function CardWidgetImplementation(notifyHandler) {
        var _this = this;
        this._onCustomizeText = undefined;
        this._cardBackColor = undefined;
        this.element = function () {
            return _this._element;
        };
        this._notifyChanged = notifyHandler;
    }
    CardWidgetImplementation.prototype._changed = function () {
        this._notifyChanged && this._notifyChanged();
    };
    Object.defineProperty(CardWidgetImplementation.prototype, "onCustomizeText", {
        get: function () {
            return this._onCustomizeText;
        },
        set: function (value) {
            this._onCustomizeText = value;
            this._changed();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardWidgetImplementation.prototype, "cardBackColor", {
        get: function () {
            return this._cardBackColor;
        },
        set: function (value) {
            this._cardBackColor = value;
            this._changed();
        },
        enumerable: true,
        configurable: true
    });
    ;
    return CardWidgetImplementation;
}());
exports.CardWidgetImplementation = CardWidgetImplementation;
