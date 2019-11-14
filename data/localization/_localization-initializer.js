/**
* DevExpress Dashboard (_localization-initializer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dx_analytics_core_1 = require("@devexpress/analytics-core/dx-analytics-core");
var _default_1 = require("./_default");
function setLocalization(localization) {
    dx_analytics_core_1.default.Analytics.Localization.loadMessages(localization);
}
exports.setLocalization = setLocalization;
setLocalization(_default_1.getDefaultLocalization());
