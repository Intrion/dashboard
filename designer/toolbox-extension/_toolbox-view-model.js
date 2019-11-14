/**
* DevExpress Dashboard (_toolbox-view-model.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _interfaces_1 = require("../../common/internal/_interfaces");
var ko = require("knockout");
var ToolboxViewModel = (function () {
    function ToolboxViewModel(menuVisible, _defaultMenuItemData, _menuItems, _toolboxGroups, _toolbarGroups) {
        var _this = this;
        this._defaultMenuItemData = _defaultMenuItemData;
        this._menuItems = _menuItems;
        this._toolboxGroups = _toolboxGroups;
        this._toolbarGroups = _toolbarGroups;
        this.leftPanelWidth = 81;
        this.toggleMenu = function () {
            _this.settingsFormVisible(false);
            _this.settingsForm(null);
            _this.menuVisible(!_this.menuVisible());
        };
        this.toolbarHeight = ko.observable(0);
        this.settingsForm = ko.observable();
        this.closeMenu = function () {
            if (_this.menuVisible()) {
                _this.toggleMenu();
            }
        };
        this.showMenu = function () {
            if (!_this.menuVisible()) {
                _this.toggleMenu();
            }
        };
        this.menuItemClick = function (menuItem) {
            menuItem.click && menuItem.click();
            if (menuItem.template) {
                _this.settingsForm({
                    title: menuItem.title.replace("…", ""),
                    template: menuItem.template,
                    data: !!menuItem.data ? menuItem.data : _this._defaultMenuItemData
                });
                _this._menuItems().forEach(function (item) { return item.selected(item === menuItem); });
            }
        };
        this.menuVisible = ko.observable(false);
        this.designerPanelLeft = ko.observable(menuVisible ? 0 : -this.leftPanelWidth);
        this.menuItemsSorted = ko.pureComputed(function () {
            return _this._menuItems().sort(function (a, b) { return (a.index || Number.MAX_VALUE) - (b.index || Number.MAX_VALUE); });
        });
        this.toolboxGroupsSorted = ko.pureComputed(function () {
            return _this._toolboxGroups().sort(function (a, b) { return (a.index || Number.MAX_VALUE) - (b.index || Number.MAX_VALUE); });
        });
        this.toolbarGroupsSorted = ko.pureComputed(function () {
            return _this._toolbarGroups().sort(function (a, b) { return (a.index || Number.MAX_VALUE) - (b.index || Number.MAX_VALUE); });
        });
        this.settingsFormVisible = ko.computed({
            read: function () { return _this.menuVisible() && _this._menuItems().some(function (contextMenuItem) { return contextMenuItem.selected(); }); },
            write: function (val) { return _this._menuItems().forEach(function (item) { return item.selected(val); }); }
        });
    }
    ToolboxViewModel.prototype.processKeyEvent = function (keyEventType, eventArgs) {
        var _this = this;
        if (keyEventType === 'keyup') {
            if (eventArgs.altKey) {
                var menuItem = this._menuItems().filter(function (item) { return item.hotKey === eventArgs.keyCode; })[0];
                if (menuItem) {
                    setTimeout(function () {
                        setTimeout(function () { return _this.menuItemClick(menuItem); }, _this.menuVisible() ? 10 : 250);
                        _this.menuVisible(true);
                    }, 1);
                    return true;
                }
            }
        }
        else if (keyEventType === "keydown") {
            if (eventArgs.keyCode === _interfaces_1.KeyCodes.Esc && this.menuVisible()) {
                this.closeMenu();
                return true;
            }
            else if (eventArgs.altKey && this._menuItems().map(function (menuItem) { return menuItem.hotKey; }).indexOf(eventArgs.keyCode) !== -1) {
                eventArgs.preventDefault();
                return true;
            }
        }
        return false;
    };
    ToolboxViewModel.prototype.showDesignerPanel = function () {
        this.designerPanelLeft(0);
    };
    ToolboxViewModel.prototype.hideDesignerPanel = function () {
        this.designerPanelLeft(-this.leftPanelWidth);
    };
    return ToolboxViewModel;
}());
exports.ToolboxViewModel = ToolboxViewModel;
