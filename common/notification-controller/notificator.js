﻿/**
* DevExpress Dashboard (notificator.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _utils_1 = require("../../data/_utils");
var _notificator_view_model_1 = require("./_notificator-view-model");
var NotificationController = (function () {
    function NotificationController() {
        this._viewModel = new _notificator_view_model_1.NotificationControllerViewModel();
    }
    NotificationController._getErrorTextFromResponse = function (request) {
        return (request && request.responseJSON && request.responseJSON.Message) || "";
    };
    NotificationController._getDetailedErrorMessage = function (errorInfo) {
        var errorDetail = "";
        if (typeof errorInfo == "string") {
            errorDetail = errorInfo;
        }
        else if (errorInfo && errorInfo["responseJSON"]) {
            errorDetail = NotificationController._getErrorTextFromResponse(errorInfo);
        }
        return _utils_1.decodeHtml(errorDetail);
        ;
    };
    NotificationController.prototype.suspended = function (isSuspended) {
        this._viewModel.suspended(isSuspended);
    };
    NotificationController.prototype.showState = function (message) {
        this._viewModel.updateNotification("info", message);
    };
    NotificationController.prototype.showSuccess = function (message) {
        this._viewModel.updateNotification("success", message);
    };
    NotificationController.prototype.showError = function (title, errorInfo) {
        var errorDetail = NotificationController._getDetailedErrorMessage(errorInfo);
        this._viewModel.updateNotification("error", title, errorDetail);
        console.warn(title + (errorDetail ? " - " + errorDetail : ""));
    };
    NotificationController.prototype.reset = function () {
        this._viewModel.reset();
    };
    return NotificationController;
}());
exports.NotificationController = NotificationController;
