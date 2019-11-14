/**
* DevExpress Dashboard (_dashboard-event.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DashboardEvent = (function () {
    function DashboardEvent() {
        this.handlers = [];
    }
    DashboardEvent.prototype.add = function (handler) {
        var _this = this;
        this.handlers.push(handler);
        return {
            dispose: function () { return _this.remove(handler); }
        };
    };
    DashboardEvent.prototype.remove = function (handler) {
        this.handlers = this.handlers.filter(function (h) { return h !== handler; });
    };
    DashboardEvent.prototype.fire = function (args) {
        this.handlers.forEach(function (h) { return h(args); });
    };
    return DashboardEvent;
}());
exports.DashboardEvent = DashboardEvent;
