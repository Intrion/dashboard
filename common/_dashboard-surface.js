/**
* DevExpress Dashboard (_dashboard-surface.js)
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
var disposable_object_1 = require("../model/disposable-object");
var _viewer_interfaces_1 = require("./viewer/_viewer-interfaces");
var _layout_1 = require("./viewer/layout/_layout");
var caption_toolbar_options_1 = require("../viewer-parts/widgets/caption-toolbar/caption-toolbar-options");
var _viewer_1 = require("./viewer/_viewer");
var combo_box_item_1 = require("../model/items/filter-items/combo-box-item");
var date_filter_item_1 = require("../model/items/filter-items/date-filter-item");
var group_item_1 = require("../model/items/group/group-item");
var tab_container_item_1 = require("../model/items/tab-container-item/tab-container-item");
var dashboard_tab_page_1 = require("../model/items/tab-container-item/dashboard-tab-page");
var _title_component_1 = require("./viewer/title/_title-component");
var _dashboard_item_helper_1 = require("../model/internal/_dashboard-item_helper");
var _dashboard_title_view_constants_1 = require("../viewer-parts/title/_dashboard-title-view-constants");
var $ = require("jquery");
var ko = require("knockout");
var _default_1 = require("../data/localization/_default");
var DashboardSurface = (function (_super) {
    __extends(DashboardSurface, _super);
    function DashboardSurface(dashboardModel, dataSourceBrowser, context, _findExtension, _allowMaximizeItems, resizeByTimer, repaintRequest, encodeHtml) {
        if (encodeHtml === void 0) { encodeHtml = true; }
        var _this = _super.call(this) || this;
        _this.dashboardModel = dashboardModel;
        _this.dataSourceBrowser = dataSourceBrowser;
        _this.context = context;
        _this._findExtension = _findExtension;
        _this._allowMaximizeItems = _allowMaximizeItems;
        _this.resizeByTimer = resizeByTimer;
        _this.repaintRequest = repaintRequest;
        _this.encodeHtml = encodeHtml;
        _this.itemInteractionInProgress = ko.observable(false);
        _this._selectedLayoutItem = ko.observable();
        _this.selectedDashboardItem = ko.computed(function () {
            return _this._selectedLayoutItem() && _this._selectedLayoutItem().viewModel.item() || null;
        });
        _this.emptyItemTemplates = ko.observableArray();
        _this.emptyItemTemplatesService = function (layoutItem) {
            return {
                data: _this.emptyItemTemplates,
                templateName: 'dx-dashboard-empty-item-templates'
            };
        };
        _this.addDashboardItem = function (data) {
            var item = _layout_1.LayoutItem.findLargestItem(_this.rootItem).item;
            if (!item) {
                item = _this.rootItem;
            }
            var itemJson = _dashboard_item_helper_1.getItemJson(data.type);
            var location = item._parent() && item._parent().viewModel && item._parent().viewModel.orientation() === "Horizontal" ? "bottom" : "right";
            item.create(itemJson, location);
        };
        _this.width = ko.observable(0);
        _this.height = ko.observable(0);
        _this.headerHeight = ko.observable(_dashboard_title_view_constants_1.titleHeight);
        _this.rootItem = new _layout_1.LayoutItem(dashboardModel.layout()._createViewModel(), null);
        var fullScreenItemLocalContext = new _viewer_interfaces_1.DashboardItemContext({
            ignoreDesignMode: true,
            beforeApplyOptions: function (item, options) {
                options.ParentContainer = undefined;
            },
            addContextToolbarItems: function (options) {
                if (_this._allowMaximizeItems) {
                    options.actionItems.push({
                        hint: _default_1.getLocalizationById("DashboardStringId.ActionRestoreDashboardItem"),
                        name: caption_toolbar_options_1.dashboardToolbarItemNames.restoreItem,
                        icon: 'dx-dashboard-restore-item',
                        type: 'button',
                        click: function () {
                            _this.fullscreenItemModel.restoreDownItem();
                        }
                    });
                }
            },
            itemCreatingType: 'secondary'
        });
        var exportExtension = _this._findExtension('dashboard-export');
        if (exportExtension) {
            exportExtension._initializeSecondaryExportItem(fullScreenItemLocalContext);
        }
        _this.fullscreenItemModel = new _viewer_1.FullscreenItemModel(context, fullScreenItemLocalContext);
        _this.rootItem.onEvent = function (layoutItem, event) {
            if (event === "click") {
                _this.select(layoutItem);
            }
            else if (event === "unselect") {
                _this.select(null);
            }
            else if (event === "resize-started") {
                setTimeout(function () { return _this.itemInteractionInProgress(true); }, 1);
            }
            else if (event === "resize-completed") {
                setTimeout(function () { return _this.itemInteractionInProgress(false); }, 1);
            }
            else if (event === "get-context") {
                return context;
            }
            else if (event === "get-local-context") {
                var itemModel = layoutItem.viewModel.item;
                var localContext = new _viewer_interfaces_1.DashboardItemContext({
                    disabled: ko.computed(function () { return itemModel() && _this.fullscreenItemModel.maximizedItemName === itemModel().componentName(); }),
                    addContextToolbarItems: function (options, item) {
                        if (_this._allowMaximizeItems
                            && !(item instanceof combo_box_item_1.ComboBoxItem)
                            && !(item instanceof date_filter_item_1.DateFilterItem)
                            && !(item instanceof group_item_1.GroupItem)
                            && !(item instanceof tab_container_item_1.TabContainerItem)
                            && !(item instanceof dashboard_tab_page_1.DashboardTabPage)) {
                            options.actionItems.push({
                                hint: _default_1.getLocalizationById("DashboardStringId.ActionMaximizeDashboardItem"),
                                icon: 'dx-dashboard-maximize-item',
                                name: caption_toolbar_options_1.dashboardToolbarItemNames.maximizeItem,
                                type: 'button',
                                click: function () {
                                    _this.select(null);
                                    _this.fullscreenItemModel.maximizeItem(item);
                                }
                            });
                        }
                    },
                    visualMode: ko.computed(function () {
                        if (itemModel()) {
                            if (itemModel() instanceof tab_container_item_1.TabContainerItem) {
                                return 'caption';
                            }
                            var parent_1 = dashboardModel.findItem(itemModel().parentContainer());
                            if (parent_1 instanceof dashboard_tab_page_1.DashboardTabPage
                                && dashboardModel._getDisplayDashboardItem(parent_1) !== parent_1) {
                                return 'content';
                            }
                        }
                        return 'full';
                    }),
                    itemCreatingType: 'primary'
                });
                var exportExtension = _this._findExtension('dashboard-export');
                if (exportExtension) {
                    exportExtension._initializePrimaryExportItem(localContext);
                }
                return localContext;
            }
        };
        $(document).on("mousedown.dxlayout,touchstart.dxlayout,pointerdown.dxlayout", function (e) {
            if (!_this._selectedLayoutItem()) {
                return;
            }
            var $target = $(e.target), validParents = [".dx-layout-root",
                ".dx-accordion-item",
                ".dx-treeview-node",
                ".dx-dashboard-context-menu-panel",
                "dx-field-chooser",
                ".dx-dashboard-toolbox",
                ".dx-dashboard-toolbar",
                ".dx-overlay-content"];
            var found = false;
            if ($target.hasClass("dx-calendar-cell")) {
                found = true;
            }
            else if ($target.parents().length === 0) {
                found = true;
            }
            else {
                validParents.forEach(function (validParent) {
                    found = found || !!$target.parents().closest(validParent).length;
                });
            }
            if (found)
                return;
            var tagName = $target.prop("tagName");
            if (tagName && tagName.toLowerCase() === "body")
                return;
            _this.select(null);
        });
        _this.titleContext = new _title_component_1.DashboardTitleContext(_this.encodeHtml, _this._findExtension);
        _this.toDispose(_this.titleContext);
        _this.toDispose(ko.computed(function () {
            if (_this.width() > 0) {
                _this.rootItem.width(_this.width());
            }
            if (_this.height() > 0) {
                _this.rootItem.height(_this.height() - _this.headerHeight());
            }
        }));
        return _this;
    }
    Object.defineProperty(DashboardSurface.prototype, "fullscreenItemProvider", {
        get: function () {
            return this.fullscreenItemModel;
        },
        enumerable: true,
        configurable: true
    });
    DashboardSurface.prototype.select = function (item) {
        var oldSelectedItem = this._selectedLayoutItem.peek();
        if (oldSelectedItem) {
            oldSelectedItem.isSelected(false);
        }
        this._selectedLayoutItem(item);
        if (!!item) {
            item.isSelected(true);
        }
    };
    DashboardSurface.prototype.dispose = function () {
        $(document).off(".dxlayout");
        _super.prototype.dispose.call(this);
    };
    return DashboardSurface;
}(disposable_object_1.DisposableObject));
exports.DashboardSurface = DashboardSurface;
