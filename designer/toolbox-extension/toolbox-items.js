﻿/**
* DevExpress Dashboard (toolbox-items.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ko = require("knockout");
var leftPanelWidth = 81;
var DashboardMenuItem = (function () {
    function DashboardMenuItem(id, title, index, hotKey, click) {
        this.id = id;
        this.title = title;
        this.click = click;
        this.hotKey = hotKey;
        this.index = index;
        this.selected = ko.observable(false);
        this.disabled = ko.observable(false);
    }
    return DashboardMenuItem;
}());
exports.DashboardMenuItem = DashboardMenuItem;
var DashboardToolboxItem = (function () {
    function DashboardToolboxItem(name, click, icon, title, type) {
        this.name = name;
        this.click = click;
        this.icon = icon;
        this.title = title;
        this.type = type;
        this.disabled = ko.observable(false);
    }
    return DashboardToolboxItem;
}());
exports.DashboardToolboxItem = DashboardToolboxItem;
var DashboardToolbarItem = (function () {
    function DashboardToolbarItem(name, click, icon, title) {
        this.name = name;
        this.click = click;
        this.icon = icon;
        this.title = title;
        this.disabled = ko.observable(false);
    }
    return DashboardToolbarItem;
}());
exports.DashboardToolbarItem = DashboardToolbarItem;
var DashboardToolboxGroup = (function () {
    function DashboardToolboxGroup(name, title, index) {
        var items = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            items[_i - 3] = arguments[_i];
        }
        this.name = name;
        this.title = title;
        this.index = index;
        this.items = ko.observableArray(items);
    }
    return DashboardToolboxGroup;
}());
exports.DashboardToolboxGroup = DashboardToolboxGroup;
var DashboardToolbarGroup = (function () {
    function DashboardToolbarGroup(name, title, index) {
        var items = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            items[_i - 3] = arguments[_i];
        }
        this.name = name;
        this.title = title;
        this.index = index;
        this.items = ko.observableArray(items);
    }
    return DashboardToolbarGroup;
}());
exports.DashboardToolbarGroup = DashboardToolbarGroup;
