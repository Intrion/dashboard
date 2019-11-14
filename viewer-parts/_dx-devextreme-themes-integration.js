/**
* DevExpress Dashboard (_dx-devextreme-themes-integration.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var themes_1 = require("devextreme/viz/themes");
exports.getBaseColorScheme = function () {
    var vizTheme = themes_1.currentTheme();
    return (vizTheme.indexOf("dark") !== -1) ? "dark" : "light";
};
