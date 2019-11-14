/**
* DevExpress Dashboard (disposable-object.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DisposableObject = (function () {
    function DisposableObject() {
        this._disposables = [];
        this.disposed = false;
    }
    DisposableObject.prototype.toDispose = function () {
        var disposables = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            disposables[_i] = arguments[_i];
        }
        var _a;
        (_a = this._disposables).push.apply(_a, disposables);
    };
    DisposableObject.prototype.dispose = function () {
        this._disposables.forEach(function (disposable) { return disposable.dispose(); });
        this._disposables = [];
        this.disposed = true;
    };
    return DisposableObject;
}());
exports.DisposableObject = DisposableObject;
