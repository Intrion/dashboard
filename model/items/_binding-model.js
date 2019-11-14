/**
* DevExpress Dashboard (_binding-model.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._areTheSameBindingProviders = (function (a, b) {
    var bindingsA = a._getBindingModel(), bindingsB = b._getBindingModel();
    if (!bindingsA || !bindingsB)
        return false;
    return (bindingsA
        .filter(function (binding, index) {
        return bindingsB.some(function (anotherBinding) { return anotherBinding.propertyName === binding.propertyName; });
    })[1]);
});
