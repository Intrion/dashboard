/**
* DevExpress Dashboard (_localizer.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var special_values_1 = require("./special-values");
var _default_1 = require("./localization/_default");
exports.ALL_ELEMENT = {
    value: { all: true },
    key: -1,
    get text() {
        return _default_1.getLocalizationById('DashboardStringId.FilterElementShowAllItem') || '(All)';
    },
    isAll: true
};
var localizer = (function () {
    function localizer() {
    }
    localizer.getString = function (key) {
        return _default_1.getLocalizationById(key);
    };
    localizer.getPredefinedString = function (value) {
        switch (value) {
            case special_values_1.specialValues.nullValueGuid:
            case special_values_1.specialValues.olapNullValueGuid:
                return _default_1.getLocalizationById("DashboardStringId.DashboardNullValue");
            case special_values_1.specialValues.othersValueGuid:
                return _default_1.getLocalizationById("DashboardStringId.TopNOthersValue");
            case special_values_1.specialValues.errorValueGuid:
                return _default_1.getLocalizationById("DashboardStringId.DashboardErrorValue");
            default:
                return undefined;
        }
    };
    return localizer;
}());
exports.localizer = localizer;
