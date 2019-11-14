/**
* DevExpress Dashboard (_viewer-interfaces.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var DashboardItemContext = (function () {
    function DashboardItemContext(options) {
        if (options === void 0) { options = {}; }
        this.addContextToolbarItems = $.Callbacks();
        this.viewerItemCreated = $.Callbacks();
        this.viewerItemDispose = $.Callbacks();
        this.beforeApplyOptions = $.Callbacks();
        this.captionToolbarCreated = $.Callbacks();
        options.addContextToolbarItems && this.addContextToolbarItems.add(options.addContextToolbarItems);
        options.viewerItemCreated && this.viewerItemCreated.add(options.viewerItemCreated);
        options.viewerItemDispose && this.viewerItemDispose.add(options.viewerItemDispose);
        options.beforeApplyOptions && this.beforeApplyOptions.add(options.beforeApplyOptions);
        this.createCaptionToolbar = options.createCaptionToolbar;
        this.itemFactory = options.itemFactory;
        this.ignoreDesignMode = options.ignoreDesignMode;
        this.disabled = options.disabled;
        this.visualMode = options.visualMode;
        this.boundaryContainer = options.boundaryContainer;
        this.itemCreatingType = options.itemCreatingType;
    }
    return DashboardItemContext;
}());
exports.DashboardItemContext = DashboardItemContext;
