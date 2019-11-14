/**
* DevExpress Dashboard (toolbox-extension.js)
* Version:  19.2.3
* Build date: Oct 21, 2019
* Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
* License: https://www.devexpress.com/Support/EULAs/universal.xml
*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var serializable_model_1 = require("../../model/serializable-model");
var disposable_object_1 = require("../../model/disposable-object");
var _toolbox_view_model_1 = require("./_toolbox-view-model");
var toolbox_items_1 = require("./toolbox-items");
var _obsolete_helper_1 = require("../../model/internal/_obsolete-helper");
var _dashboard_item_helper_1 = require("../../model/internal/_dashboard-item_helper");
var control_options_1 = require("../../common/control-options");
var $ = require("jquery");
var ko = require("knockout");
var model_1 = require("../../model");
var name = "toolbox";
var ToolboxExtension = (function (_super) {
    __extends(ToolboxExtension, _super);
    function ToolboxExtension(dashboardControl) {
        var _this = _super.call(this) || this;
        _this.dashboardControl = dashboardControl;
        _this.name = name;
        _this.menuItems = ko.observableArray();
        _this.addMenuItem = function (menuItem) {
            if (!!_this._findMenuItem(menuItem.id)) {
                throw Error("The '" + menuItem.id + "' menu item already exists.");
            }
            _this.menuItems.push(menuItem);
        };
        _this.removeMenuItem = function (menuItemId) {
            var menuItem = _this._findMenuItem(menuItemId);
            _this.menuItems.remove(menuItem);
        };
        _this.selectMenuItem = function (menuItem) {
            if (!!menuItem) {
                _this._viewModel.menuVisible(true);
                _this._viewModel.menuItemClick(menuItem);
            }
        };
        _this.toolboxGroups = ko.observableArray();
        _this.addToolboxItem = function (groupName, toolboxItem) {
            var group = _this._findToolboxGroup(groupName);
            if (!!group) {
                group.items.push(toolboxItem);
            }
            else {
                throw Error("The '" + groupName + "' group does not exist.");
            }
        };
        _this.removeToolboxItem = function (groupName, toolboxItemName) {
            var group = _this._findToolboxGroup(groupName);
            if (group) {
                _this._unregisterToolboxItem(group, toolboxItemName);
            }
            else {
                throw Error("The '" + groupName + "' group does not exist.");
            }
        };
        _this.toolbarGroups = ko.observableArray();
        _this.addToolbarItem = function (groupName, toolbarItem) {
            var group = _this.toolbarGroups().filter(function (group) { return group.name === groupName; })[0];
            if (!!group) {
                group.items.push(toolbarItem);
            }
            else {
                throw Error("The '" + groupName + "' group does not exist.");
            }
        };
        _this.removeToolbarItem = function (groupName, toolbarItemName) {
            var group = _this.toolbarGroups().filter(function (group) { return group.name === groupName; })[0];
            if (!!group) {
                var toolbarItem = group.items().filter(function (item) { return item.name === toolbarItemName; })[0];
                group.items.remove(toolbarItem);
            }
            else {
                throw Error("The '" + groupName + "' group does not exist.");
            }
        };
        _this.showPanelAsync = function (options) {
            var def = $.Deferred();
            _this._viewModel.showDesignerPanel();
            setTimeout(function () {
                options.surfaceLeft = _this._viewModel.leftPanelWidth;
                def.resolve(options);
            }, 500);
            return def.promise();
        };
        _this.hidePanelAsync = function (options) {
            var def = $.Deferred();
            _this._viewModel.hideDesignerPanel();
            setTimeout(function () {
                options.surfaceLeft = 0;
                def.resolve(options);
            }, 500);
            return def.promise();
        };
        _this._layoutItemPlaceholderService = function (layoutItem) {
            var currentDashboardItem = layoutItem._parent().viewModel.model;
            return {
                data: {
                    dashboardItems: ko.computed(function () {
                        var placeholderItems = [];
                        _this._viewModel.toolboxGroupsSorted().forEach(function (group) {
                            group
                                .items()
                                .filter(function (toolboxItem) { return model_1.DashboardLayoutNode._canAttach(currentDashboardItem, { "@ItemType": toolboxItem.type }); })
                                .forEach(function (toolboxItem) {
                                placeholderItems.push({
                                    type: toolboxItem.type,
                                    name: toolboxItem.name,
                                    iconName: toolboxItem.icon,
                                    title: toolboxItem.title
                                });
                            });
                        });
                        return placeholderItems;
                    }),
                    addDashboardItem: function (data) {
                        layoutItem.create(_dashboard_item_helper_1.getItemJson(data.type), "left");
                    }
                },
                templateName: "dx-toolbox-extension-layout-item-placeholder"
            };
        };
        _this.designerToViewerAction = {
            orderNo: 40,
            action: _this.hidePanelAsync
        };
        _this.viewerToDesignerAction = {
            orderNo: 40,
            action: _this.showPanelAsync
        };
        _this._createDefaultGroups();
        _this._viewModel = new _toolbox_view_model_1.ToolboxViewModel(dashboardControl.isDesignMode(), _this.dashboardControl, _this.menuItems, _this.toolboxGroups, _this.toolbarGroups);
        _this.template = {
            data: _this._viewModel,
            name: "dx-dashboard-toolbox-extension"
        };
        if (dashboardControl.isDesignMode()) {
            dashboardControl.surfaceLeft(_this._viewModel.leftPanelWidth);
        }
        dashboardControl.subscribeExtensionsChanged({
            added: function (extension) {
                if (extension.name === "dashboard-panel") {
                    _this._switchToViewerToolbar = new toolbox_items_1.DashboardToolbarGroup("viewer-button", "", 100);
                    var toViewerItem = new toolbox_items_1.DashboardToolbarItem("toviewer", function () { return dashboardControl.switchToViewer(); });
                    toViewerItem.template = "dx-dashboard-working-mode-extension-viewer-button";
                    toViewerItem.disabled = ko.pureComputed(function () { return !!_this.dashboardControl.dashboard(); });
                    _this._switchToViewerToolbar.items.push(toViewerItem);
                    _this.toolbarGroups.push(_this._switchToViewerToolbar);
                }
            },
            deleted: function (extension) {
                if (extension.name === "dashboard-panel") {
                    _this.toolbarGroups.remove(_this._switchToViewerToolbar);
                }
            }
        });
        _obsolete_helper_1.defineObsoleteProperty({
            target: _this,
            memberName: 'settingsForm',
            oldMemberDisplayName: "DevExpress.Dashboard.Designer.ToolboxExtension.settingsForm",
            newMemberDisplayName: "DevExpress.Dasbhoard.Designer.DashboardMenuItem.template",
            action: function () { return _this._viewModel.settingsForm; }
        });
        _obsolete_helper_1.defineObsoleteProperty({
            target: _this,
            memberName: 'settingsFormVisible',
            oldMemberDisplayName: "DevExpress.Dashboard.Designer.ToolboxExtension.settingsFormVisible",
            newMemberDisplayName: "DevExpress.Dasbhoard.Designer.DashboardMenuItem.template",
            action: function () { return _this._viewModel.settingsFormVisible; }
        });
        _obsolete_helper_1.defineObsoleteProperty({
            target: _this,
            memberName: 'toggleMenu',
            oldMemberDisplayName: "DevExpress.Dashboard.Designer.ToolboxExtension.toggleMenu",
            newMemberDisplayName: "DevExpress.Dasbhoard.Designer.ToolboxExtension.openMenu/closeMenu",
            action: function () { return _this._viewModel.toggleMenu; }
        });
        _obsolete_helper_1.defineObsoleteMethod({
            target: _this,
            memberName: 'menuItemClick',
            oldMemberDisplayName: "DevExpress.Dashboard.Designer.ToolboxExtension.menuItemClick",
            newMemberDisplayName: "DevExpress.Dasbhoard.Designer.ToolboxExtension.selectMenuItem",
            action: function (menuItem) { return _this._viewModel.menuItemClick(menuItem); }
        });
        return _this;
    }
    Object.defineProperty(ToolboxExtension.prototype, "menuVisible", {
        get: function () { return this._viewModel.menuVisible; },
        enumerable: true,
        configurable: true
    });
    ;
    ToolboxExtension.prototype.openMenu = function () {
        this._viewModel.showMenu();
    };
    ToolboxExtension.prototype.closeMenu = function () {
        this._viewModel.closeMenu();
    };
    ToolboxExtension.prototype.processKeyEvent = function (keyEventType, eventArgs) {
        return this._viewModel.processKeyEvent(keyEventType, eventArgs);
    };
    ToolboxExtension.prototype.start = function () {
        var _this = this;
        var standardItems = Object.keys(serializable_model_1.itemTypesMap).filter(function (key) { return !serializable_model_1.itemTypesMap[key].customItemType; });
        var itemTypeNames = standardItems.sort(function (t1, t2) { return serializable_model_1.itemTypesMap[t1].index - serializable_model_1.itemTypesMap[t2].index; });
        itemTypeNames.forEach(function (itemTypeName) { return _this._registerToolboxItem(itemTypeName, serializable_model_1.itemTypesMap[itemTypeName]); });
        this.dashboardControl.extensions.forEach(function (extension) { return _this._registerCustomItemToolbox(extension); });
        this.toDispose(this.dashboardControl.subscribeExtensionsChanged({
            added: function (extension) {
                _this._registerCustomItemToolbox(extension);
            },
            deleted: function (extension) {
                _this.toolboxGroups().forEach(function (group) { return _this._unregisterToolboxItem(group, extension.name); });
            }
        }));
        ko.computed(function () {
            var surface = _this.dashboardControl._dashboardSurface();
            if (surface) {
                surface.layoutItemPlaceholderService = _this._layoutItemPlaceholderService;
            }
        });
    };
    ToolboxExtension.prototype.stop = function () {
    };
    ToolboxExtension.prototype._registerCustomItemToolbox = function (extension) {
        var customItemExtension = extension;
        if (customItemExtension.metaData) {
            this._registerToolboxItem(customItemExtension.name, customItemExtension.metaData);
        }
    };
    ToolboxExtension.prototype._createDefaultGroups = function () {
        this.toolboxGroups.push(new toolbox_items_1.DashboardToolboxGroup('common', 'DashboardWebStringId.AccordionTab.Common', 100));
        this.toolboxGroups.push(new toolbox_items_1.DashboardToolboxGroup('maps', 'DashboardStringId.DescriptionMaps', 110));
        this.toolboxGroups.push(new toolbox_items_1.DashboardToolboxGroup('filter', 'DashboardWebStringId.DataSources.Filter', 120));
        this.toolboxGroups.push(new toolbox_items_1.DashboardToolboxGroup('layout', 'DashboardWebStringId.AccordionTab.Layout', 130));
    };
    ToolboxExtension.prototype._registerToolboxItem = function (itemTypeName, itemDescription) {
        var _this = this;
        var group = this._findToolboxGroup(itemDescription.groupName) || this._findToolboxGroup('custom');
        if (!group) {
            group = new toolbox_items_1.DashboardToolboxGroup('custom', 'DashboardStringId.CustomItems', 130);
            this.toolboxGroups.push(group);
        }
        var itemClickHandlerCreator = function (type) { return function () { return _this.dashboardControl._dashboardSurface() && _this.dashboardControl._dashboardSurface().addDashboardItem({ type: type }); }; };
        var item = new toolbox_items_1.DashboardToolboxItem(itemTypeName, itemClickHandlerCreator(itemTypeName), _dashboard_item_helper_1.getIconName(itemTypeName, itemDescription.icon), itemDescription.title, itemTypeName);
        item.disabled = ko.computed(function () { return !_this.dashboardControl.dashboard(); });
        group.items.push(item);
        return itemClickHandlerCreator;
    };
    ToolboxExtension.prototype._unregisterToolboxItem = function (group, toolboxItemName) {
        var toolboxItem = group.items().filter(function (item) { return item.name === toolboxItemName; })[0];
        if (!!toolboxItem) {
            group.items.remove(toolboxItem);
        }
    };
    ToolboxExtension.prototype._findToolboxGroup = function (groupName) {
        return this.toolboxGroups().filter(function (gr) { return gr.name === groupName; })[0];
    };
    ToolboxExtension.prototype._findMenuItem = function (menuItemId) {
        return this.menuItems().filter(function (mi) { return mi.id === menuItemId; })[0];
    };
    return ToolboxExtension;
}(disposable_object_1.DisposableObject));
exports.ToolboxExtension = ToolboxExtension;
control_options_1.designerExtensions[name] = function (dashboardControl, options) { return new ToolboxExtension(dashboardControl); };
