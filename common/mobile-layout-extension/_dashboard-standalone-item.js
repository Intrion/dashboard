/**
* DevExpress Dashboard (_dashboard-standalone-item.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _interfaces_1 = require("../internal/_interfaces");
var ko = require("knockout");
ko.components.register('dashboard-standalone-item', {
    viewModel: {
        createViewModel: function (params, componentInfo) {
            var element = componentInfo.element;
            return {
                dashboardItem: ko.unwrap(params.dashboardItem),
                dashboardContext: ko.unwrap(params.dashboardContext),
                localContext: ko.unwrap(params.localContext),
                sizeController: new _interfaces_1.SingleItemSizeController(element.parentElement, ko.unwrap(params.repaintRequest)),
                isStandalone: false
            };
        }
    },
    template: { element: "dx-dashboard-standalone-item" }
});
