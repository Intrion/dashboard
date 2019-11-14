/**
* DevExpress Dashboard (_undo-engine-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UndoEngineContainer = (function () {
    function UndoEngineContainer() {
    }
    return UndoEngineContainer;
}());
exports.UndoEngineContainer = UndoEngineContainer;
function wrapFuncWithUndoRedo(func) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            UndoEngineContainer.undoEngine && UndoEngineContainer.undoEngine.start();
            var result = func.apply(this, args);
            return result;
        }
        catch (e) {
            throw e;
        }
        finally {
            UndoEngineContainer.undoEngine && UndoEngineContainer.undoEngine.end();
        }
    };
}
exports.wrapFuncWithUndoRedo = wrapFuncWithUndoRedo;
function wrapWithUndoRedo(target, key, value) {
    return {
        value: wrapFuncWithUndoRedo(value.value)
    };
}
exports.wrapWithUndoRedo = wrapWithUndoRedo;
