/**
* DevExpress Dashboard (_dashboard-layout-mode-helper.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var devices_1 = require("devextreme/core/devices");
var support_1 = require("devextreme/core/utils/support");
var DashboardLayoutModeHelper = (function () {
    function DashboardLayoutModeHelper() {
    }
    Object.defineProperty(DashboardLayoutModeHelper, "isMobile", {
        get: function () {
            if (DashboardLayoutModeHelper._forceMobileMode !== null)
                return DashboardLayoutModeHelper._forceMobileMode;
            return devices_1.default.current().phone || devices_1.default.current().tablet;
        },
        set: function (value) {
            DashboardLayoutModeHelper._forceMobileMode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardLayoutModeHelper, "isTouch", {
        get: function () {
            if (DashboardLayoutModeHelper._forceTouchMode !== null)
                return DashboardLayoutModeHelper._forceTouchMode;
            return support_1.touch;
        },
        set: function (value) {
            DashboardLayoutModeHelper._forceTouchMode = value;
        },
        enumerable: true,
        configurable: true
    });
    DashboardLayoutModeHelper._forceTouchMode = null;
    DashboardLayoutModeHelper._forceMobileMode = null;
    return DashboardLayoutModeHelper;
}());
exports.DashboardLayoutModeHelper = DashboardLayoutModeHelper;
