/**
* DevExpress Dashboard (_notificator-view-model.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var toast_1 = require("devextreme/ui/toast");
var ko = require("knockout");
var NotificationControllerViewModel = (function () {
    function NotificationControllerViewModel() {
        var _this = this;
        this._visible = false;
        this.visible = ko.observable(false);
        this.type = ko.observable("");
        this.notifications = ko.observableArray([]);
        this.suspended = ko.observable(false);
        this.displayTime = ko.computed(function () {
            if (_this.type() !== "success") {
                return 60 * 1000;
            }
            return 10 * 1000;
        });
    }
    NotificationControllerViewModel.prototype.reset = function () {
        this.visible(false);
        this._visible = false;
    };
    NotificationControllerViewModel.prototype.updateNotification = function (type, title, detail) {
        var _this = this;
        var notification = { title: title, detail: detail || null };
        if (this.visible() && this.type() === type) {
            this.notifications.push(notification);
            var toastContainer = document.querySelector('#notificationController');
            var instance = toastContainer && toast_1.default.getInstance(toastContainer);
            if (instance)
                instance.repaint();
        }
        else {
            var isFirstLoading = !this.visible();
            this.visible(false);
            this.notifications.removeAll();
            this.notifications.push(notification);
            this.type(type);
            this._visible = true;
            if (isFirstLoading) {
                setTimeout(function () { _this.visible(_this._visible); }, 300);
            }
            else {
                this.visible(this._visible);
            }
        }
    };
    return NotificationControllerViewModel;
}());
exports.NotificationControllerViewModel = NotificationControllerViewModel;
