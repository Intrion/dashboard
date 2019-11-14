/**
* DevExpress Dashboard (remote-service.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var browser = require("devextreme/core/utils/browser");
function findGloballyDefinedMethod() {
    var path = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        path[_i] = arguments[_i];
    }
    return path.reduce(function (acc, item) {
        if (acc)
            return acc[item];
        return undefined;
    }, window);
}
var AjaxRemoteService = (function () {
    function AjaxRemoteService(options) {
        if (options === void 0) { options = {}; }
        this.beforeSend = $.noop;
        this.complete = $.noop;
        this.headers = {};
        if (options.beforeSend) {
            this.beforeSend = options.beforeSend;
        }
        if (options.headers) {
            this.headers = options.headers;
        }
        if (options.complete) {
            this.complete = options.complete;
        }
    }
    AjaxRemoteService.prototype.getFromServer = function (url, data, queryOptions) {
        var obsoleteGetFromServer = findGloballyDefinedMethod("DevExpress", "Dashboard", "getFromServer");
        if (obsoleteGetFromServer) {
            console.warn("This method is obsolete. Please use **remoteService** option to customize HTTP requests.");
            return obsoleteGetFromServer(url, data, queryOptions);
        }
        var isIE11 = !!browser.msie && parseInt(browser.version, 10) < 12;
        return $.ajax(__assign({ url: url, dataType: "json", data: data, beforeSend: this.beforeSend, headers: this.headers, complete: this.complete, cache: !isIE11 }, queryOptions));
    };
    AjaxRemoteService.prototype.postToServer = function (url, data) {
        var obsoletePostToServer = findGloballyDefinedMethod("DevExpress", "Dashboard", "postToServer");
        if (obsoletePostToServer) {
            console.warn("This method is obsolete. Please use **remoteService** option to customize HTTP requests.");
            return obsoletePostToServer(url, data);
        }
        return $.ajax({
            method: "post",
            url: url,
            dataType: "json",
            contentType: "application/json",
            jsonp: false,
            data: data === null || data === undefined ? "" : JSON.stringify(data),
            beforeSend: this.beforeSend,
            headers: this.headers,
            complete: this.complete
        });
    };
    AjaxRemoteService.prototype.performPostback = function (url, args) {
        var _this = this;
        var obsoletePerformPostback = findGloballyDefinedMethod("DevExpress", "Dashboard", "performPostback");
        if (obsoletePerformPostback) {
            console.warn("This method is obsolete. Please use **remoteService** option to customize HTTP requests.");
            return obsoletePerformPostback(url, args);
        }
        var $div = $('<div>').appendTo('body');
        var $form = $('<form>', {
            action: url,
            method: 'POST',
            target: '_blank'
        }).appendTo($div);
        var $input = $('<input>', {
            id: 'dx-db-export-input-id',
            name: 'dx-db-export',
            type: 'hidden',
            value: encodeURIComponent(args)
        }).appendTo($form);
        Object.keys(this.headers).forEach(function (headerName) {
            var $input = $('<input>', {
                name: headerName,
                type: 'hidden',
                value: encodeURIComponent(_this.headers[headerName])
            }).appendTo($form);
        });
        $form.submit();
        $div.remove();
    };
    return AjaxRemoteService;
}());
exports.AjaxRemoteService = AjaxRemoteService;
