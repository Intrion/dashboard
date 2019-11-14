/**
* DevExpress Dashboard (_limit-data-state.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LimitDataState = (function () {
    function LimitDataState() {
        this._visible = false;
        this._enabled = true;
    }
    Object.defineProperty(LimitDataState.prototype, "enabled", {
        get: function () {
            return this._enabled;
        },
        enumerable: true,
        configurable: true
    });
    LimitDataState.prototype.setReduced = function () {
        this._visible = true;
        this._enabled = true;
    };
    LimitDataState.prototype.getViewModel = function () {
        return {
            isReduceMode: this._visible,
            isReduced: this._enabled,
        };
    };
    LimitDataState.prototype.toggle = function () {
        this._enabled = !this._enabled;
    };
    LimitDataState.prototype.reset = function () {
        this._visible = false;
        this._enabled = true;
    };
    return LimitDataState;
}());
exports.LimitDataState = LimitDataState;
