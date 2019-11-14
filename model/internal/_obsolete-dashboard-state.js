/**
* DevExpress Dashboard (_obsolete-dashboard-state.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObsoleteDashboardState = (function () {
    function ObsoleteDashboardState() {
    }
    return ObsoleteDashboardState;
}());
exports.ObsoleteDashboardState = ObsoleteDashboardState;
var ObsoleteItemState = (function () {
    function ObsoleteItemState() {
    }
    ObsoleteItemState.unwrapDilldownValues = function (values) {
        if (!values) {
            return null;
        }
        return values.map(function (value) { return value[0][0]; });
    };
    return ObsoleteItemState;
}());
exports.ObsoleteItemState = ObsoleteItemState;
