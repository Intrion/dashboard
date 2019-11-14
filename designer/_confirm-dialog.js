/**
* DevExpress Dashboard (_confirm-dialog.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var ko = require("knockout");
var ConfirmDialogViewModel = (function () {
    function ConfirmDialogViewModel() {
        this.confirmTitle = ko.observable("");
        this.confirmText = ko.observable("");
        this.confirmVisible = ko.observable(false);
        this.confirmButtons = ko.observable([]);
    }
    ConfirmDialogViewModel.prototype.confirm = function (title, message, okButtonText, cancelButtonText) {
        var _this = this;
        var deffered = $.Deferred();
        this.confirmTitle(title);
        this.confirmText(message);
        this.confirmButtons([
            {
                toolbar: 'bottom', location: 'after', widget: 'dxButton', options: {
                    text: okButtonText,
                    type: 'default',
                    onClick: function () {
                        setTimeout(function () { _this.confirmVisible(false); }, 1);
                        deffered.resolve(true);
                    }
                }
            },
            {
                toolbar: 'bottom', location: 'after', widget: 'dxButton', options: {
                    text: cancelButtonText,
                    onClick: function () {
                        setTimeout(function () { _this.confirmVisible(false); }, 1);
                        deffered.resolve(false);
                    }
                }
            }
        ]);
        this.confirmVisible(true);
        return deffered.promise();
    };
    return ConfirmDialogViewModel;
}());
exports.ConfirmDialogViewModel = ConfirmDialogViewModel;
