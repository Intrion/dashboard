/**
* DevExpress Dashboard (index.exports.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.internal");
__export(require("./extensions/viewer-api-extension"));
__export(require("./extensions/dashboard-panel-extension/dashboard-panel-extension"));
__export(require("./dashboard-control"));
__export(require("./mobile-layout-extension/mobile-layout-extension"));
__export(require("./remote-service"));
__export(require("./resource-manager"));
__export(require("./notification-controller/notificator"));
__export(require("./extensions/url-state-extension"));
__export(require("./extensions/parameter-dialog-extension"));
__export(require("./extensions/export-extension"));
__export(require("./extensions/data-inspector-extension/data-inspector-extension"));
__export(require("./control-options"));
__export(require("./custom-viewer-item/custom-viewer-item"));
